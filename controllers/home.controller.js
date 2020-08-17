

// For Rendering the Page
const Task=require('../models/task');

module.exports.home=function(req,res){
    Task.find({}, function(err,tasks){
        if(err){
            console.log('Error in getting the task from Databse');
            return;
        }
        return res.render('home',{
            title:'To Do App',
            tasks:tasks
        });

    });
    
}


module.exports.addTask=function(req,res){
    req.body.duedate=req.body.duedate.substring(0,15);
    Task.create(req.body,function(err,task){
        if(err){
            console.log('Error in creating Database')
            return;
        }
        return res.redirect('back');

    });

    
}