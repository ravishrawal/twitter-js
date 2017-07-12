const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
app.set('view engine','html');
app.engine('html',nunjucks.render);
var locals = {
  title: "An Example",
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name:'Hermione'}
  ]
};

nunjucks.configure('views',{noCache:true});
nunjucks.render('index.html',locals,function(err,output){
  console.log(output);
});



var port = 3000 || process.env.PORT
app.listen(port,function(){
  console.log('server listening');
})
app.use(function(req,res,next){
  console.log(req.method,req.route)
  next();
})
app.use('/news',function(req,res,next){
  console.log('You\'ve reached news')
  next();
})
app.get('/',function(req,res){
  res.send('Welcome!')
})
app.get('/news',function(req,res){
  res.send('fake news');
})
