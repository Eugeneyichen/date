/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:54:27
*/

import React,{ Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import './index.css'

class NormalLoginForm extends Component {
  constructor(props){
  	super(props);
  	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios({
        	method:'post',
        	url:'http://127.0.0.1:3000/admin/login',
        	data:values
        })
        .then(result=>{
        	console.log(result)
        })
        .err(err=>{
        	console.log(err)
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
	    <div className='Login'>
			<Form className="login-form">
				<Form.Item>
				  {getFieldDecorator('userName', {
				    rules: [{ required: true, message: '请输入用户名' },{pattern:/^[a-z0-9_]{3,9}$/}],
				  })(
				    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
				  )}
				</Form.Item>
				<Form.Item>
				  {getFieldDecorator('password', {
				    rules: [{ required: true, message: '请输入密码' }],
				  })(
				    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
				  )}
				</Form.Item>
				<Form.Item>
				  <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
				    登录
				  </Button>
				</Form.Item>
			</Form>
		</div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;