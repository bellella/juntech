import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class UserModel implements SqlModelCreator{
    private model: SqlModel;
    public getModel(){
        return this.model;
    }
    associate() {
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                field: 'email',
                type: sequelize.STRING
            },
            name: {
                type: sequelize.STRING
            },
            password: {
                type: sequelize.STRING
            },
            passwordSalt: {
                field: 'password_salt',
                type: sequelize.STRING
            },
        }
        this.model = <SqlModel>sqlCon.define('users', attr,
        {
            tableName: 'users',
            underscored: true
        });
    }
}

export default new UserModel();

export interface UserAttribute {
    id?: number
    email?: string
    password?: string
    passwordSalt?: string
    name?: string
    createdAt?: Date
    updatedAt?: Date
}
