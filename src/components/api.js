/*
 * @Author: qianlan.zhang
 * @Date:   2017-12-07 14:16:00
 * @Last Modified by:   qianlan.zhang
 * @Last Modified time: 2017-12-07 19:39:53
 */

'use strict';
const api = function(win) {
	var api = {};
	api.storage = {
		setLocal: function(name, param) {
			var str = [];
			if (localStorage.getItem(name)) str = JSON.parse(localStorage.getItem(name));
			str.push(param);
			localStorage.setItem(name, JSON.stringify(str));
		},
		getLocal: function(name) {
			return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : '';
		},
		changeLocal: function(name, i, param) {
			var str = this.getLocal(name)
			str[i] = param
			param ? str.splice(i, 1, param) : str.splice(i, 1);
			localStorage.setItem(name, JSON.stringify(str));
			return this.getLocal(name)
		},
		deleteLocal: function(name, i) {
			var str = this.getLocal(name)
			str.splice(i, 1);
			//console.log(str)
			localStorage.setItem(name, JSON.stringify(str));
		},
		clear: function() {
			localStorage.clear();
		}

	};
	return api;
}(window);
export default api;