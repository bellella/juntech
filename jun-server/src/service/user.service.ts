import UserDAO from '../dao/user.dao'
const jwt = require('jsonwebtoken')
const crypto = require('crypto');

class UserService {
  public async signIn(id, password) {
    //db에서 확인
    const user = await UserDAO.getUser(id);
    let error = null;
    if(!user) {
      error = new Error('No such user exsits');
      error.statusCode = 401
      throw error; 
    }
    const { password: userPassword, passwordSalt, id: userId, email } = user;
    
    //crypto 확인
    const cryptPassword = await this.getCryptResult(password, passwordSalt);
    console.log(userPassword,'~~~~',cryptPassword)
    if(userPassword === cryptPassword) {
      return { token: this.createJwtToken(id), user };
    } else {
      error = new Error('Wrong password');
      error.statusCode = 401
      throw error;
    }
  }

  public async signUp(user) {
    const { id, password } = user;
    const salt = await this.getCryptSalt();
    const cryptPassword = await this.getCryptResult(password, salt);

    const userData = { ...user, passwordSalt: salt, password: cryptPassword};
    //db 넣기
    return UserDAO.createUser(userData);
  }

  public getCryptResult(string, salt) {
    return new Promise(async (resolve, reject) => {
      crypto.pbkdf2(string, salt, 100000, 64, 'sha512', (err, key) => {
        if(err) {
          reject(err);
        }
        resolve(key.toString('base64'));
      });
    });
  }

  public getCryptSalt() {
    return new Promise(async (resolve, reject) => {
      crypto.randomBytes(64, (err, buf) => {
        if (err) {
          reject(err);
        }
        resolve(buf.toString('base64'));
      });
    });
  }

  public verifyJwtToken(token): any {
    return new Promise(async (resolve, reject) => {
      jwt.verify(token, <string>process.env.ACCESS_TOKEN_SECRET, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
     });
  }

  public createJwtToken(id) {
    return jwt.sign({ id }, <string>process.env.ACCESS_TOKEN_SECRET, { 
      expiresIn: "1d",
    });
  }

}

export default new UserService();