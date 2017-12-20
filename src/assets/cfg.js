/*
 * @Author: qianlan.zhang
 * @Date:   2017-12-06 14:28:46
 * @Last Modified by:   qianlan.zhang
 * @Last Modified time: 2017-12-07 11:52:39
 */

'use strict';
import _ from 'underscore'
import $ from 'jquery'
const cfg = function(win) {
	(function() {
		// deicePixelRatio ：设备像素
		var scale = 1 / devicePixelRatio;
		//debounce 为节流函数，自己实现。或者引入underscoure即可。
		var reSize = _.debounce(function() {
			var deviceWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
			document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
			$('body,#app').height($(window).height())
		}, 50);
		window.onresize = reSize;
		reSize();
	})();
}(window);
export default cfg;