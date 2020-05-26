const Controller=require('egg').Contronller;

class testController extends Controller{
    async Title1(){
        const query=this.ctx.query;
        const adds=query.l1+' '+query.l2;
        const dataList={
            list:[
                {id:1,title:'this is news 1',url:'/news/1',l1:query.l1,sum:adds},
                {id:2,title: 'this is news 2',url: '/news/2',l2:query.l2,sum: adds}
            ],
        };
        this.ctx.response.body=dataList;
    }

    async Title2(){
        const adds=this.ctx.request.body.l1+this.ctx.request.body.l2;
        const dataList={
            list: [
                {id:1,title:'that is news 1',url:'/news/1',sum:adds},
                {id:2,title: 'that is news 2',url: '/news/2',sum: adds}
            ],
        };
        tis.ctx.response.body=dataList;
    }


}

module.exports=testController;