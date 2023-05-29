import { BuildOptions, Model, Sequelize } from 'sequelize'

export interface SqlModelCreator {
    initModel(sqlCon: Sequelize)
    getModel()
    associate()
}

export type SqlModel = typeof Model & {
    new (values?: object, options?: BuildOptions);
};