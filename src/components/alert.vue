<template>
	<div class="alert">
		<div class="cont">
			<p class="title">提示</p>
			<p class="tips">{{childData.tips}}</p>
			<div class="bottom clearfix">
				<span @click="cancelBtn">取消</span>
				<span @click="sureBtn">确定</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'alert',
	props:['childData'],
	mounted(){
		
	},
	methods:{
		cancelBtn(){
			this.$parent.alert={isShow:false,tips:'',method:''}
		},
		sureBtn(){
			//console.log(typeof(localStorage.getItem('method')))
			eval(localStorage.getItem('method'))
			//console.log(clear)

		}
	}
}

</script>
<style lang="less">


</style>
