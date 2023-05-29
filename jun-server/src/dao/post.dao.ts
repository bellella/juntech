import SqlConnection from '../sql/sqlConnection'
import * as sequelize from 'sequelize'
import PostModel, { PostAttribute } from '../sql/models/post.model'
import { OrderItem, WhereOptions } from 'sequelize';
class PostDAO {

    public getPost(id) {
        return PostModel.getModel().findByPk(id);
    }

    public getListByAdmin(type: string) {
        return PostModel.getModel().findAll({
            where: { type },
            order: [['id', 'DESC']]
        });
    }

    public savePost(type: string, post: PostAttribute) {
        return PostModel.getModel().create({...post, type});
    }

    public updatePost({ id, ...post }: PostAttribute) {
        return PostModel.getModel().update(post, { where: { id } });
    }

    public deletePost(id: any) {
        return PostModel.getModel().update({ status: 'DELETED' },{ where: { id } });
    }
}

export default new PostDAO();
