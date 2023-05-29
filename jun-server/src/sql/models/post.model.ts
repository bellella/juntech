import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class PostModel implements SqlModelCreator{
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
            type: {
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
            title: {
                type: sequelize.STRING
            },
            content: {
                type: sequelize.STRING
            },
            writer: {
                type: sequelize.STRING
            },
            views: {
                type: sequelize.INTEGER,
                default: 0
            }
        }
        this.model = <SqlModel>sqlCon.define('posts', attr,
        {
            tableName: 'posts',
            underscored: true
        });
    }
}

export default new PostModel();

export interface PostAttribute {
    id?: number
    type: string
    title: string
    status: string
    content?: string
    writer: string
    views?: number
}
