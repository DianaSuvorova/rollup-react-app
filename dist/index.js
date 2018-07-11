(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react-dom'), require('react')) :
	typeof define === 'function' && define.amd ? define(['react-dom', 'react'], factory) :
	(factory(global.ReactDOM,global.React));
}(this, (function (ReactDOM,React) { 'use strict';

	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  'hello I am app'
	), document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblJlYWN0RE9NLnJlbmRlcig8ZGl2PmhlbGxvIEkgYW0gYXBwPC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FJQUEsU0FBU0MsTUFBVCxDQUFnQkM7Q0FBQTtDQUFBO0NBQUE7Q0FBQSxDQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQzs7OzsifQ==
