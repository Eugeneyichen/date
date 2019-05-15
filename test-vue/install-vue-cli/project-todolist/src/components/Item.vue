<template>
	<div class="Item">
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<button>删除</button>
	</div>
</template>
<script>
	export default {
		name:'Item',
		props:{
			todo:Object
		}
	}
</script>
<style scoped>
	.Item{
		width: 100%;
		line-height: 40px;
		border:1px solid #ccc;
	}
	.Item input{
		float: left;
		margin-top: 14px;
		margin-right: 10px;
	}
	.Item button{
		float: right;
		margin-top: 10px;
	}
</style>