const mongoose = require('mongoose');
const YichenModel = require('./moudles/userr.js');

//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	console.log('connection sucessful::');
	YichenModel.insertMany({
		// name:"",
		age:'20',
		major:'music'
	},(err,docs)=>{
		if(err){
			console.log('insertMany err:',err)
		}else{
			console.log(docs)
		}
	})
})