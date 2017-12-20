<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="main absolute full-x"></router-view>
    </transition>
  </div>
</template>
<script>
import cfg from './assets/cfg.js'
import alert from './components/alert'
export default {
  name: 'app',
  components:{
    alert
  },
  data(){
    return{
      transitionName:"",
      alert:{
        tips:"",
        isShow:false,
        method:''
      }
    }
  },
  watch:{
    $route(to, from) {
      this.transitionName= to.meta.index>from.meta.index ?'slide-left':'slide-right'
    }
  }
}

</script>
<style lang="less">
@import './assets/css/reset.css';
@import './assets/css/common.css';
.main{
  background-color: #f5f5f5;
  min-height: 100%;
  top: 0;
  transition: all .8s;
  overflow-x: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  -webkit-transform: translate(0,100%);
  transform: translate(0,100%);
}

.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  -webkit-transform: translate(0,-100%);
  transform: translate(0,-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
