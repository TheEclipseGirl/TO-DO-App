// For Rendering the Page
module.exports.home=function(req,res){
    return res.render('home',{
        title:'To Do App'
    });
}