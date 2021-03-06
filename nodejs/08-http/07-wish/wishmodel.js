
const fs = require('fs');
const util = require('util');

const filePath = './data/wish.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const arrColor = ['#f67','#98f','#f85','#df9','#d55','#f99'];
const getRandom = (min,max)=>{	
	return Math.round(min + (max-min)*Math.random());
}
//增加
async function add(options){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	options.id = Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
	options.color = arrColor[getRandom(0,arrColor.length-1)];
	arr.push(options);
	let setArr = JSON.stringify(arr)
	//3.保存
	await writeFile(filePath,setArr);

	return options;
}

//查找
async function getAll(){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	return arr
}

//删除
async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})
	let setArr = JSON.stringify(newArr)
	//3.保存
	await writeFile(filePath,setArr);
	return newArr;
}

module.exports = {
	add,
	getAll,
	remove
}