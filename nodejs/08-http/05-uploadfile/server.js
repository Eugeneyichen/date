const http = require('http');
const path = require('path')
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	
	console.log('url=>',req.url,'method=>',req.method);
	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
		form.keepExtensions = true;
		form.parse(req, function(err, fields, files) {
		    // console.log({fields: fields, files: files});
		    // console.log(__dirname + "/"+files.avater.path);
		    let oldPath = __dirname + "/"+files.avater.path;
		    //获取扩展名
		    let extname = path.extname(oldPath);
		    //拼接新文件路径
		    let newPath =  __dirname +"/upload/"+Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0')+extname;
		   	console.log(newPath)
		    //更改上传的文件名称  
			fs.rename(oldPath, newPath, (err)=>{
				if(err){
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('err');
				}else{
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('ok');
				}
			});
		   
		});
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})