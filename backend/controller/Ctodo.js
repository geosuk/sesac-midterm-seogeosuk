const { Todo } = require('../models');
exports.index = (req, res)=>{
    res.render('index');
}

//타이틀 및 done 가져오기
exports.getTodo = async(req, res)=>{
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
        if (!Todo){
            return res.sendStatus(404);
        }
        res.json(getTodo);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}
// Todo 수정
exports.patchTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const updateTodo = await Todo.update(
            {title},
            {where: {id}}
        )
        if(!updateTodo){
            return res.sendStatus(404);
        }
        req.json(updateTodo);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

//Todo 삭제
exports.deleteTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const isDeleted = await Todo.destroy({
            where: {id}
        });
        if(isDeleted){
            return res.send(true);
        }else{
            return res.send(false);
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}