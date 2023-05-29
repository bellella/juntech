import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../types/types'
import inquiryModel from './models/inquiry.model'
import PostModel from './models/post.model'
import ProductModel from './models/product.model'
import ProductCategoryModel from './models/product_category.model'
import userModel from './models/user.model'

class SqlConnection {
    private sqlCon: Sequelize;
    public getSqlCon() {
        return this.sqlCon;
    }
    public initSql() {
        /*sequelize models initialize*/
        let modelList: SqlModelCreator[] = [
            PostModel,
            ProductModel,
            ProductCategoryModel,
            userModel,
            inquiryModel
        ];
        this.sqlCon = new Sequelize(
            <string>process.env.MARIA_DB,
            <string>process.env.MARIA_USER,
            <string>process.env.MARIA_PW,
            {
                host: <string>process.env.MARIA_HOST, omitNull: false, pool: {
                    max: 60,
                    min: 0,
                    idle: 10000
                },
                port: parseInt(process.env.MARIA_PORT),
                dialect: 'mysql',
                dialectOptions: {
                    charset: 'utf8mb4'
                }
            }
        );
        modelList.forEach((m: SqlModelCreator) => {
            m.initModel(this.sqlCon);
        });
        modelList.forEach((m: SqlModelCreator) => {
            m.associate();
        });
        console.log('sql setting id done beautifuly')
    }

}

export default new SqlConnection();