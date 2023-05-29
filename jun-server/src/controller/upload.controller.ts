import { Request, Response, Router } from 'express';
import * as multer from 'multer';
import path = require('path')
import * as fs from 'fs';

let router = Router();
const imagePath = `${process.env.FILE_PATH || '/s'}/images`;
const imageDir = `${process.env.IMAGE_DIR || 'src/uploads/images'}`;
let upload = multer({
  dest: imageDir,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file,'file??')
      if(!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
      }
      cb(null, imageDir);
    },
    filename: function (req, file, cb) {
      let mimeType;
      switch (file.mimetype) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }

      cb(null, file.fieldname + '-' + Date.now() + '.' + mimeType);
    }
  }),
});

router.post('/images', upload.array('files'), (req: any, res: Response, next) => {
  try {
    let imageUrls = [];
    for(const file of req.files) {
      imageUrls.push(`${imagePath}/${file.filename}`);
    }
    res.status(200).send({ imageUrls });
  } catch (e) {
    console.log(e,'upload error!')
    //logger.error(`${new Date().toISOString}`, e, 'upload');
    next(e);
  };
});

router.patch('/delete/images', (req: any, res: Response, next) => {
  try {
    let imageUrls = req.body.imageUrls;
    let count = 0;
    for(const url of imageUrls) {
      const deleteUrl = `${imageDir}${url.substring(url.lastIndexOf('/'))}`;
      if(fs.existsSync(deleteUrl)) {
        fs.unlinkSync(deleteUrl);
        count++;
      }
    }
    res.status(200).send({ deletedCount: count });
  } catch (e) {
    console.log(e,'delete error!')
    next(e);
  };
});

export default router;