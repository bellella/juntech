import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class InquiryModel implements SqlModelCreator{
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
            clientName: {
                type: sequelize.STRING
            },
            productName: {
                type: sequelize.STRING
            },
            productId: {
                type: sequelize.BIGINT
            },
            type: {
                type: sequelize.STRING
            },
            content: {
                type: sequelize.STRING
            },
            email: {
                type: sequelize.STRING
            },
            phone: {
                type: sequelize.STRING
            },
        }
        this.model = <SqlModel>sqlCon.define('inquiries', attr,
        {
            tableName: 'inquiries',
            underscored: true
        });
    }
}

export default new InquiryModel();

export interface InquiryAttribute {
    id?: number
    clientName: string
    productName?: string
    productId?: number
    type?: string
    content?: string
    phone?: string
    email?: string
}
