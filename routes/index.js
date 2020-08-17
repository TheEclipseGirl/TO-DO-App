const express=require('express');
const router=express.Router();
    
    // import home Controller
    const homeController=require('../controllers/home.controller');

    router.get('/',homeController.home);

    // For Add Task
    router.post('/add-task',homeController.addTask);

    // For Delete Task
    router.post('/delete-task',homeController.deleteTask);

module.exports=router;