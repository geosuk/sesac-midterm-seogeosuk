const { Todo } = require('../models');
exports.index = (req, res)=>{
    res.render('index');
}

//타이틀 및 done 가져오기
exports.getTitle = async(req, res)=>{
    try{
        const {id} = req.params;
        const Todo = await Todo.findOne({
            where: {id},
            include: [
                {
                    model: Todo,
                    attribute: ['id', 'title']
                }
            ]
        });
        res.json(todo);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}