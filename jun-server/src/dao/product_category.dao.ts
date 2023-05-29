import SqlConnection from '../sql/sqlConnection'
import * as sequelize from 'sequelize'
import ProductCategoryModel, { ProductCategoryAttribute } from '../sql/models/product_category.model'
import { OrderItem, WhereOptions } from 'sequelize';
class ProductCategoryDAO {

    public getList() {
        return ProductCategoryModel.getModel().findAll({
            attributes: { exclude: ['updatedAt', 'priority'] },
            where: {
                status: 1
            },
            order: [['priority', 'asc']]
        })
    }

    public getListAll() {
        return ProductCategoryModel.getModel().findAll({
            attributes: { exclude: ['updatedAt', 'priority'] },
            order: [['priority', 'asc']]
        })
    }

    public updateList(categories) {
        const ids = categories.map(c => c.id);
        const list = categories.map((c, i) => {
            const { createdAt, priority, ...obj} = c;
            return {
                ...obj,
                priority: i
            }
        })
        ProductCategoryModel.getModel().destroy({ where: { id: { [sequelize.Op.notIn]: ids } } });
        return ProductCategoryModel.getModel().bulkCreate(list,{
            updateOnDuplicate: ['name', 'priority', 'status'],
        });
    }
}

export default new ProductCategoryDAO();
