import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Done from '@/components/do'
import Todo from '@/components/todo'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: Index,
		meta: {
			index: 1
		}
	}, {
		path: '/todo',
		name: 'Todo',
		component: Todo,
		meta: {
			index: 2

		}
	}, {
		path: '/done',
		name: 'Done',
		component: Done,
		meta: {
			index: 3

		}
	}, {
		path: '/edit/:type',
		name: 'Edit',
		component: Edit,
		meta: {
			index: 10

		}
	}]
})