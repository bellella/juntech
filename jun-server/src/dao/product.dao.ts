import SqlConnection from '../sql/sqlConnection'
import * as sequelize from 'sequelize'
import ProductModel, { ProductAttribute } from '../sql/models/product.model'
import ProductCategoryModel from '../sql/models/product_category.model'
import { OrderItem, WhereOptions } from 'sequelize';
class ProductDAO {

    public createProduct(product) {
        return ProductModel.getModel().create(product);
    }

    public updateProduct(product) {
        return ProductModel.getModel().update(product, { where: { id: product.id } });
    }

    public deleteProduct(id) {
        return ProductModel.getModel().destroy({ where: { id } });
    }

    public getProduct(id) {
        return ProductModel.getModel().findByPk(id);
    }

    public getList(categoryId?) {
        return ProductModel.getModel().findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                ...( categoryId && { categoryId }),
                status: 1
            },
            include: [
                {
                    model: ProductCategoryModel.getModel()
                }
            ],
            order: [['createdAt' , 'DESC']]
        })
    }

    public getListAdmin(categoryId?) {
        return ProductModel.getModel().findAll({
            attributes: {
                exclude: ['categoryId','updatedAt']
            },
            where: {
                ...( categoryId && { categoryId })
            },
            include: [
                {
                    model: ProductCategoryModel.getModel()
                }
            ],
            order: [['createdAt' , 'DESC']]
        })
    }

    public searchList(keyword) {
        return ProductModel.getModel().findAll({
            where: {
                [sequelize.Op.or]: {
                    name: { [sequelize.Op.like]: `%${keyword}%` },
                    code : { [sequelize.Op.like]: `%${keyword}%` }
                },
                status: 1
            }
        })
    }
}

export default new ProductDAO();
