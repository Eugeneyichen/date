import * as types from './actionTypes.js'
import { message } from 'antd'
import { request } from 'util'
import { 
	GET_USERS,
	ADD_CATEGORY,
	GET_CATEGORIES,
	UPDATE_CATEGORY_ORDER,
	UPDATE_CATEGORY_NAME,
	SAVE_PRODUCT, 
} from 'api'

export const getSetCategoryIdAction = (pid,id)=>{
	return {
		type:types.SET_CATEGORY_ID,
		payload:{
			parentCategoryId:pid,
			categoryId:id
		}
	}
}
export const getSetImagesAction = (payload)=>{
	return {
		type:types.SET_IMAGES,
		payload
	}
}
export const getSetDetailAction = (payload)=>{
	return {
		type:types.SET_DETAIL,
		payload
	}
}
const setCategoryError=()=>{
	return {
		type:types.SET_CATEGORY_ERROR,
	}
}
const setImagesError=()=>{
	return {
		type:types.SET_IMAGES_ERROR,
	}
}
const getSaveRequestAction = ()=>{
	return {
		type:types.SAVE_REQUEST
	}
}
const getSaveDoneAction = ()=>{
	return {
		type:types.SAVE_DONE
	}
}
export const getSaveAction = (err,values)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product');
		const category = state.get('categoryId');
		const images = state.get('images');
		const datail = state.get('datail');
		let hasError = false;
		if(err){
			hasError = true;
		}
		if(!category){
			dispatch(setCategoryError())
			hasError = true;
		}
		if(!images){
			dispatch(setImagesError())
			hasError = true;
		}
		if(hasError){
			return;
		}
		dispatch(getSaveRequestAction())
		request({
			method:'post',
			url:SAVE_PRODUCT,
			data:{
				...values,
				category,
				images,
				datail
			}
		})
		.then(result=>{
			console.log(result)
		})
		.finally(()=>{
			dispatch(getSaveDoneAction())
		})
	}	
}

const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const setPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getPageAction = (pid,page)=>{
	return (dispatch)=>{
		dispatch(getPageRequestAction())
		request({
			url:GET_CATEGORIES,
			data:{
				page:page,
				pid:pid
			}
		})
		.then(result=>{
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			dispatch(getPageDoneAction())
		})
	}
}
export const getUpdateOrderAction = (pid,id,newOrder)=>{
	return (dispatch,getState)=>{
		const state = getState().get('category');
		request({
			method:'put',
			url:UPDATE_CATEGORY_ORDER,
			data:{
				pid:pid,
				id:id,
				order:newOrder,
				page:state.get('current')
			}
		})
		.then(result=>{
			if(result.code == 0){
				message.success('更新排序成功')
				dispatch(setPageAction(result.data))
			}
		})
	}	
}