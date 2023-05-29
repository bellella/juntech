import * as express from "express"
import * as bodyParser from 'body-parser';
import * as path from 'path';
import controller from './controller'

import * as dotenv from 'dotenv'
import SqlConnection from './sql/sqlConnection'
import { logger, stream } from './configs/winston'
import * as morgan from 'morgan'
import * as cors from 'cors'

class App {
  public application : express.Application;

  private app: express.Application = express();
  private PORT: any = process.env.PORT || 3000;

  constructor(){
    try {
      this.setting(this.app);
    }catch(e) {
      logger.info('error from setting',e);
      console.log('error is ocurrend while setting')
    }
    this.app.listen(this.PORT,()=>console.log(`The server has just started. port: ${this.PORT}`));
    logger.info(`${this.PORT} port is now started`);
  }

  public setting(app) {
        let envConfig = dotenv.config({ path: path.join(__dirname, '.env') });
        for (var k in envConfig) {
            process.env[k] = envConfig[k]
        }
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('combined', { stream }));
    app.use(express.static(path.join(__dirname, '../dist')));
    app.use(express.static(path.join(__dirname, '../dist/admin/dist')));
    // app.use(cors({
    //   origin: 'http://localhost:8080',
    //   credentials: true// true시 설정 내용을 응답헤더에 추가해 줌
    // }));
    //app.use(cors());
    app.use('/s', express.static(__dirname+'/uploads'));
    app.use('/api',controller);
    app.use('/admin', function(req, res, next) {
      res.sendFile(path.join(__dirname, '../dist/admin/dist', 'index.html'));
    })
    app.use('/', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    })
    app.use((err, req, res, next) => {
      const errorObj = {
        req: {
          headers: req.headers,
          query: req.query,
          body: req.body,
          route: req.route
        },
        error: {
          message: err.message,
          stack: err.stack,
          status: err.status
        }
      }

      logger.error('Error is occured!T.T', errorObj);
      console.log('Error is occured!T.T', errorObj);
      res.status(err.statusCode || 500).json({msg: errorObj.error.message || 'Error is occured!T.T', errorObj});
    });
    SqlConnection.initSql();
  }
}

new App();
