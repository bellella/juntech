import UserModel, { UserAttribute } from '../sql/models/user.model'
class UserDAO {

    public getUser(email) {
        return UserModel.getModel().findOne({ where: { email } });
    }

    public createUser(user) {
        return UserModel.getModel().create(user);
    }
}

export default new UserDAO();
