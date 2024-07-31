const todo = (sequelize, DataTypes)=>{
    const todo = sequelize.define(
        'todo',
        {
            id:{
                type: DataTypes.INTEGER,
                primarykey:true,
                allowNull: false,
                autoIncrement: true
            },
            title:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            done:{
                type: DataTypes.BOOLEAN,
                allowNull: false,

            }
        }
    )
    return todo;
}
module.exports = todo;