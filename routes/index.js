const express=require('express');
const router=express.Router();
    
    // import home Controller
    const homeController=require('../controllers/home.controller');

    router.get('/',homeController.home);

    // import task Controller
    router.post('/add-task',homeController.addTask);

module.exports=router;