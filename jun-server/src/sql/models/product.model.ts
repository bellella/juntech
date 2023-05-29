import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'
import ProductCategoryModel from './product_category.model'
class ProductModel implements SqlModelCreator{
    private model: SqlModel;
    public getModel(){
        return this.model;
    }
    associate() {
        this.model.belongsTo(ProductCategoryModel.getModel(), { foreignKey: 'categoryId'})
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            categoryId: {
                field: 'category_id',
                type: sequelize.BIGINT
            },
            status: {
                type: sequelize.STRING,
                get() {
                    return this.getDataValue('status') == 1;
                },
                set(value) {
                    this.setDataValue('status', value ? 1 : 0);
                }
            },
            name: {
                type: sequelize.STRING
            },
            mainImg: {
                field:'main_img',
                type: sequelize.STRING
            },
            subImg: {
                field:'sub_img',
                type: sequelize.STRING
            },
            code: {
                type: sequelize.STRING
            }
        }
        this.model = <SqlModel>sqlCon.define('products', attr,
        {
            tableName: 'products',
            underscored: true
        });
    }
}

export default new ProductModel();

export interface ProductAttribute {
    id?: number
    categoryId: string
    mainImg: string
    subImg: string
    code: string
    status: number
}
