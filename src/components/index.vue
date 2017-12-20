<template>
	<div class="index" :class="{overflow:isAlert}">
		<!-- <img src="/static/bg.jpg" class="full-x block" /> -->
		<router-link to="/edit/1" class="textarea"></router-link>
		<div class="imgBottom">
			<img src="/static/bottom.png" class="full-x block" />
			<img src="/static/clean.png" class="block clean" @click="clean" />
			<router-link to="/todo" class="item left"></router-link>
			<router-link to="/done" class="item right"></router-link>
			<router-link to="/edit/1" class="middle"></router-link>
		</div>
		<div class="alert"  :class="{active:isAlert}">
			<div class="cont">
				<p class="title">提示</p>
				<p class="tips">确认要删除所有数据吗?</p>
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
	name: 'index',
	data() {
		return {
			isAlert: false
		}
	},
	methods: {
		clear() {
			this.$Api.storage.clear();
		},
		cancelBtn() {
			this.isAlert = false
		},
		sureBtn() {
			this.$Api.storage.clear();
			this.cancelBtn()
		},
		clean() {

			this.isAlert = true

		}
	}
}

</script>
<style lang="less">
@import '../assets/css/alert';
.index {
	overflow-y: hidden;
	background: url(/static/bg.jpg) no-repeat ;
	background-size: 100%;
	.textarea {
		position: absolute;
		top: 15%;
		width: 92%;
		left: 4%;
		display: block;
		height: 57.7%;
	}

	.imgBottom {
		position: fixed;
		bottom: 0;
		max-width: 750px;
		width: 100%;
		.clean {
			position: absolute;
			width: .69rem;
			right: .3rem;
			bottom: 1.44rem;
		}
		.item {

			bottom: 0;
			height: 67%;
			width: 40%;
			position: absolute;
			&.left {
				left: 0;
			}
			&.right {
				right: 0;
			}
		}
		.middle {
			width: 20%;
			left: 50%;
			margin-left: -10%;
			height: 100%;
			position: absolute;
			display: block;
			bottom: 0;
		}
	}
}

</style>
