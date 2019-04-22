import React,{ Component } from 'react'
import { actionCreator } from './store'
import {Breadcrumb} from 'antd'
import { Link } from "react-router-dom";
import Layout from 'common/layout'

class CategoryList extends Component{
    render(){
        return (
        	<div className= "CategoryList">
        		<Layout>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                <Breadcrumb.Item>分类列表</Breadcrumb.Item>
              </Breadcrumb>
              <Link to="/category/add">添加分类</Link>
        		</Layout>
        	</div>
        )
    }
}

export default CategoryList