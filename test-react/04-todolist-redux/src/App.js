import React,{ Component,Fragment } from 'react'
import { Input,Button,Row,Col,List } from 'antd';

import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["听歌","睡觉"],
			val:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleAdd=this.handleAdd.bind(this)
	}
	handleAdd(){
		this.setState(preState=>({

			list:[...preState.list,preState.val],
			val:''
		}));
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}))	
	}
	render(){
		return (
			<div className="App">
				<Row>
					<Col span={12}>
						<Input 
							onChange={this.handleChange} 
							value={this.state.val}
						/>
					</Col>
					<Col span={12}>
						<Button type="primary" onClick = {this.handleAdd}>新增</Button>
					</Col>
				</Row>
				<List
			    	bordered
			    	dataSource={this.state.list}
			    	renderItem={item => (<List.Item>{item}</List.Item>)}
			    />	
			</div>
		)
	}
}
export default App