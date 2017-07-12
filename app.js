const express = require( 'express' );
const app = express();
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
