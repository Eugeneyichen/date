/*
* @Author: TomChen
* @Date:   2019-04-09 19:28:12
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 19:05:31
*/
//1.整个应用的入口
//2.webpack-congig.js中的入口指定该文件
import React from 'react'
import ReactDOM from 'react-dom'
//Provider的作用是将整个应用的唯一store传递到所有的子组件
import { Provider } from 'react-redux'
import store from './store'

import App from './App.js'

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))