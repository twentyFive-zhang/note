<template>
	<div class="edit">
		<div class="n-title">
			<span  class="back" @click="back"></span>
			编辑记事本
			<span class="block gou" @click="toSave"></span>
		</div>
		<textarea placeholder="请编辑内容" v-model="text"></textarea>
		<div class="alert" :class="{active:isAlert}">
			<div class="cont">
				<p class="title">提示</p>
				<p class="tips">请输入内容</p>
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
	name: 'edit',
	data() {
		return {
			type: "",
			text:"",
			index:"",
			isAlert:''
		}
	},
	methods: {
		plusZero(num){
			return num<10 ? ('0'+num) :num;
		},
		getTime(){
			var time=new Date();
			return time.getFullYear()+'-'+this.plusZero(time.getMonth()+1)+'-'+this.plusZero(time.getDate()+1)
		},
		cancelBtn(){
			this.isAlert=false;
		},
		sureBtn(){
			this.isAlert=false
		},
		toSave() {
			if (!this.text){
				this.isAlert=true
				return false;
			}
			let text=this.text + (this.$route.params.type=='2' ? this.getTime():'');
			if(JSON.stringify(this.$route.query)!='{}')
				this.$Api.storage.changeLocal(this.type,this.$route.query.index,text)
			else {
				this.$Api.storage.setLocal(this.type,text);
			}
			this.$router.push('/'+this.type)

		},
		back(){
			this.$router.back();
		}
	},
	created() {
		this.type = this.$route.params.type == 1 ? "todo" : "done";
		if(JSON.stringify(this.$route.query)!='{}'){
			var str=this.$Api.storage.getLocal(this.type)[this.$route.query.index];
			this.text=this.type=="done" ? str.substring(0,str.length-10) :str;
		}
	}
}

</script>
<style lang="less">
@import '../assets/css/title';
@import '../assets/css/alert';
.edit {
	textarea {
		width: 7rem;
		margin: .2rem auto;
		height: 11rem;
		background: #fff;
		border: 0;
		display: block;
		padding: .2rem;
		box-sizing: border-box;
		font-size: .36rem;
		line-height: .4rem;
		resize: none;
	}
}

</style>
