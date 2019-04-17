/*
* @Author: TomChen
* @Date:   2019-04-11 18:56:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:51:38
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	isFetching:false
})

export default (state=defaultState,action)=>{
	if(action.type == types.LOGIN_REQUEST){
		//1.发送登录请求前state里面的isFetching改为true并且返回新的数据
		//2.当数据返回给store时,执行组件mapStateProps方法重新映射数据
		//3.ui组件中的this.props中数据发生改变，导致ui页面发生改变
		return state.set('isFetching',true)
	}
	if(action.type == types.LOGIN_DONE){
		return state.set('isFetching',false)
	}
	return state;
}