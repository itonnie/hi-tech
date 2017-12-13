webpackJsonp([3],{

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/script.js":
/***/ (function(module, exports) {

module.exports = "//jQuery code only\r\n$(document).ready(function() {\r\n    var isMobile = {\r\n        Android: function() {\r\n            return navigator.userAgent.match(/Android/i);\r\n        },\r\n        BlackBerry: function() {\r\n            return navigator.userAgent.match(/BlackBerry/i);\r\n        },\r\n        iOS: function() {\r\n            return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n        },\r\n        Opera: function() {\r\n            return navigator.userAgent.match(/Opera Mini/i);\r\n        },\r\n        Windows: function() {\r\n            return navigator.userAgent.match(/IEMobile/i);\r\n        },\r\n        any: function() {\r\n            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());\r\n        }\r\n    };\r\n\r\n    //code goes here\r\n    $('.pullup').hide();\r\n\r\n    $('#logo').click(function() {\r\n        window.location.assign('#');\r\n    })\r\n\r\n    //listen to menu tap events\r\n    $('.tab').on('mouseover', function() {\r\n        if(isMobile.any()) {\r\n\r\n        } else {\r\n            $('.tab').removeClass('activetab');\r\n            $(this).addClass('activetab');\r\n    \r\n            var panel = $(this).attr('data-panel');\r\n            var id = '#' + panel;\r\n    \r\n            $('.panel').removeClass('active-panel');\r\n            $(id).addClass('active-panel');\r\n        }\r\n    });\r\n\r\n    $('.tab').on('mouseleave', function() {\r\n        $('.tab').removeClass('activetab');\r\n    });\r\n\r\n    $('.carousel').carousel({\r\n        interval: 4000,\r\n        keyboard: true\r\n    });\r\n\r\n    $('.list-group-item').click(function() {\r\n        if(isMobile.any()) {\r\n\r\n        } else {\r\n            $('.pullup').addClass('pullupclose');\r\n        }\r\n    });\r\n\r\n    $('#residential').on('mouseover', function() {\r\n        if(isMobile.any()) {\r\n\r\n        } else {\r\n            $('.pullup').hide();\r\n            $('#innerresidential').show();\r\n        }\r\n    });\r\n\r\n    $('#innerresidential').on('mouseleave', function() {\r\n        $(this).hide();\r\n    });\r\n\r\n    $('#commercial').on('mouseover', function() {\r\n        if(isMobile.any()) {\r\n            \r\n        } else {\r\n            $('.pullup').hide();\r\n            $('#innercommercial').show();\r\n        }\r\n    });\r\n\r\n    $('#innercommercial').on('mouseleave', function() {\r\n        $(this).hide();\r\n    });\r\n\r\n    $('#house').on('mouseover', function() {\r\n        if(isMobile.any()) {\r\n            \r\n        } else {\r\n            $('.pullup').hide();\r\n            $('#innerhouse').show();\r\n        }\r\n    });\r\n\r\n    $('#innerhouse').on('mouseleave', function() {\r\n        $(this).hide();\r\n    });\r\n\r\n    $('#office').on('mouseover', function() {\r\n        if(isMobile.any()) {\r\n            \r\n        } else {\r\n            $('.pullup').hide();\r\n            $('#inneroffice').show();\r\n        }\r\n    });\r\n\r\n    $('#inneroffice').on('mouseleave', function() {\r\n        $(this).hide();\r\n    });\r\n\r\n});"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/script.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/script.js"))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/script.js");


/***/ })

},[3]);
//# sourceMappingURL=scripts.bundle.js.map