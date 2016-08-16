/**
 * Created by HeroLiu on 08/15/2016.
 */
var file=require('../models/file.js');

exports.showIndex=(req,res)=>{
    // res.render('index',{
    //     'albums':file.getAllAlbums()
    // });
    //不使用上面的方式是因为：render是异步的，先通过回调函数得到文件夹名字后，再执行render
    file.getAllAlbums((albumNames)=>{
       res.render('index',{
           'albums':albumNames
       }) ;
    });
}