<template>
	<div class="do" :class="{overflow:isAlert}">
		<div class="n-title">
			<router-link to="/" class="back"></router-link>
			已完成
			<span class="block mam" @click="changeOpera">管理</span>
		</div>
		<div class="itemAll">

			<div class="item clearfix" v-for="(list,index) in lists" v-if="lists.length">
				<p>{{list.substring(0,list.length-10)}}<span>{{list.substring(list.length-10)}}</span></p>
				<div class="opera clearfix" :class="{active:isOpera}">
					<span class="block c-fff fl" @click="edit(index,$event)">编<br>辑</span>
					<span class="block c-fff fl" @click="del(index,$event)">删<br>除</span>
				</div>
			</div>
			<div class="" v-if="!lists.length">
				<img src="/static/none.png" class="noneList"  />
				<p class="c-666 f-32 t-center mt-10">快来记录你的生活吧~</p>
			</div>
		</div>
		<div class="alert" :class="{active:isAlert}">
			<div class="cont">
				<p class="title">提示</p>
				<p class="tips">确认删除这条生活日记吗?</p>
				<div class="bottom clearfix">
					<span @click="cancelBtn">取消</span>
					<span @click="sureBtn">确定</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'do',
	data(){
		return{
			lists:{},
			type:"done",
			isOpera:false,
			isAlert:false,
			index:''
		}
	},
	created(){
		this.lists=this.$Api.storage.getLocal(this.type)
	},
	methods:{
		changeOpera(){
			if(this.lists.length)
				this.isOpera=!this.isOpera
		},
		edit:function(i,e){
			this.$router.push({path:"/edit/2",query:{index:i}});
		},
		del:function(i,e){
			this.isAlert=true
			this.index=i
		},
		cancelBtn(){
			this.isAlert=false
		},
		sureBtn(){
			this.lists=this.$Api.storage.changeLocal(this.type,this.index);
			this.cancelBtn()
		}
	}
}

</script>
<style lang="less">
@import '../assets/css/title';
@import '../assets/css/alert';
.do{
	.itemAll{
		.item{
			p{
				width: 5.1rem;
				margin-left: .2rem;
			}
		}
	}
}
.noneList{
	width: 100%;
	display: block;
	margin-top: 3rem;
	
}


</style>
