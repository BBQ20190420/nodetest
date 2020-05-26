'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async list() {
        const { ctx } = this;
        try {
            const userList=ctx.server.user.searchAll();
            ctx.body={
                success:true,
                data:userList
            };
        }
        catch (e) {
            ctx.body={
                success: false,
                e:"数据库查询异常"
            };
            
        }
    }
    async find(){
        const { ctx } = this;
        try {
            if (!ctx.query.id) throw new Error("缺少参数");
            const userList=ctx.server.user.find(ctx.query.id);
            ctx.body={
                success:true,
                data: userList
            };
        }

        catch (e) {
            ctx.body={
                success:false,
                e
            };
        }
    }
}

module.exports = UserController;
