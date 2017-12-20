<template>
	<div class="todo" :class="{overflow:isAlert}">
		<div class="n-title">
			<router-link to="/" class="back"></router-link>
			未完成
			<span class="block mam" @click="changeOpera">管理</span>
		</div>
		<div class="itemAll">
			<div class="item clearfix" v-for="(list ,index) in lists" v-if="lists.length">
				<i @click="toDone(list,index)"></i>
				<p>{{list}}</p>
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
	name: 'todo',
	data(){
		return{
			lists:[],
			type:"todo",
			isOpera:false,
			isAlert:false,
			index:''
		}
	},
	created(){
		this.lists=this.$Api.storage.getLocal(this.type)
		//console.log(this.lists)

	},
	methods:{
		plusZero(num){
			return num<10 ? ('0'+num) :num;
		},
		getTime(){
			var time=new Date();
			return time.getFullYear()+'-'+this.plusZero(time.getMonth()+1)+'-'+this.plusZero(time.getDate()+1)
		},
		changeOpera(){
			if(this.lists.length)
				this.isOpera=!this.isOpera
		},
		edit:function(i,e){
			this.$router.push({path:"/edit/1",query:{index:i}});
		},
		del:function(i,e){
			this.isAlert=true
			this.index=i
		},
		toDone:function(json,i){
			this.$Api.storage.changeLocal(this.type,i);
			this.$Api.storage.setLocal('done',json+this.getTime());
			this.$router.push({path:'/done'})
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
.noneList{
	width: 100%;
	display: block;
	margin-top: 3rem;
	
}

</style>
