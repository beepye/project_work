/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'aat\'">' + entity + '</span>' + html;
	}
	var icons = {
			'aat-icon-flower' : '&#xe000;',
			'aat-icon-dog' : '&#xe001;',
			'aat-icon-grass' : '&#xe002;',
			'aat-icon-shovel' : '&#xe003;',
			'aat-icon-trash' : '&#xe004;',
			'aat-icon-water-can' : '&#xe005;',
			'aat-icon-bullhorn' : '&#xe006;',
			'aat-icon-camera' : '&#xe007;',
			'aat-icon-picture-frame' : '&#xe008;',
			'aat-icon-return' : '&#xe009;',
			'aat-icon-magnify-glass' : '&#xe00a;',
			'aat-icon-arrow' : '&#xe00b;',
			'aat-icon-gear' : '&#xe00c;',
			'aat-icon-user' : '&#xe00d;',
			'aat-icon-sun' : '&#xe00e;',
			'aat-icon-tree' : '&#xe00f;',
			'aat-icon-tree-logo' : '&#xe010;',
			'aat-icon-placemark' : '&#xe011;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/aat-icon[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};