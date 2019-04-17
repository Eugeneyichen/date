import React,{ Component } from 'react'
import {
  Layout, Menu,Icon,Dropdown,
} from 'antd';

import { getUserName,request,removeUserName } from 'util'
import { USER_LOGOUT } from 'api'

import './index.css'
const { SubMenu } = Menu;
const { Header} = Layout;

class AdminHeader extends Component{
	constructor(props){
		super(props);
		this.handLogout = this.handLogout.bind(this)
	}
	handLogout(){
		request({
			url:USER_LOGOUT
		})
		.then(result=>{
			//退出成功
			if(result.code == 0){
				//1.清楚本地存储的用户信息
				removeUserName()
				//2.页面跳转到登录页面
				window.location.href = './login'
			}
		})
	}
	render(){
		const menu = (
		  <Menu onClick={this.handLogout}>
		    <Menu.Item key="0">
		    	<Icon type="logout" />退出
		    </Menu.Item>
		  </Menu>
		);
		return (
			<div className='AdminHeader'>
				<Layout>
					<Header className="header">
						<div className="logo">CMALL</div>
						<Dropdown overlay={menu} trigger={['click']}>
						    <a className="ant-dropdown-link" href="#">
						     	{getUserName()} <Icon type="down" />
						    </a>
						</Dropdown>
					</Header>
				</Layout>
			</div>
		)
	}
}
    

export default AdminHeader