import AuthService from '../service/user.service'

export default async function (req, res, next) {
  const token = req.headers.authorization;
  AuthService.verifyJwtToken(token)
    .then(r => {
      next();
    })
    .catch(e => res.status(401).json({
      msg: 'jwt verify issue !',
      redirect: true, 
      errorObj: e}));
}