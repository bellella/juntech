import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class ProductCategoryModel implements SqlModelCreator{
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
            name: {
                type: sequelize.STRING
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
            priority: {
                type: sequelize.TINYINT
            }
        }
        this.model = <SqlModel>sqlCon.define('productCategories', attr,
        {
            tableName: 'product_categories',
            underscored: true
        });
    }
}

export default new ProductCategoryModel();

export interface ProductCategoryAttribute {
    id?: number
    name: string
    status: number
    priority: number
}
