<!-- 1.页面-->
<template>
	<div class="App">
		<!--2.3使用组件-->
		<Logo />
		<Message msg="你好" />
	</div>
</template>

<!-- 2.逻辑-->
<script>
	//2.1引入组件
	import Logo from './components/Logo.vue'
	import Message from './components/Message.vue'
	export default {
		name:'App',
		//2.2注册组件
		components:{
			Logo,
			Message
		}
	}
</script>

<!-- 3.样式-->
<style>
	
</style>