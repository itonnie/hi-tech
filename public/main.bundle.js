webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    border-radius: 0;\r\n    margin: 0;\r\n    padding: 5px 50px;\r\n}\r\n\r\n.jumbotron h1 {\r\n    font-size: x-large;\r\n}\r\n\r\n.jumbotron p {\r\n    font-size: 16px;\r\n}\r\n\r\n.even {\r\n    background-color: #444;\r\n    color: whitesmoke;\r\n}\r\n\r\n.flexing {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flexing > div {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.googlemap {\r\n    height: 250px;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .display-3 {\r\n        font-size: 2.5rem !important;\r\n    }\r\n\r\n    .jumbotron {\r\n        text-align: center;\r\n    }\r\n\r\n    .flexing {\r\n        display: block;\r\n        padding: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Graphine EA Limited</h1>\n  <p>Wherever you are, whatever appliances you are using in your office, home or commercial venture, you can rely on Graphine EA experts to provide you with professional maintenance service to make your appliance performance back to quality and your business life running.</p>\n  <p>We are constantly looking beyond customers' and society expectations in order to deliver appliances pinnacle maintenance service. At the pinnacle of providing specialized maintenance solutions that improve quality, business operations and productivity, Graphine EA helps individuals and businesses to best set the pace of their expectations alongside our team of experts, that will significantly add value to them and ensure business sustainability as well affordable to their margins. </p>\n</div>\n\n<div class=\"jumbotron even\">\n  <h1>What we do.</h1>\n  <p>At Graphine EA, we believe in shaping the future as the start of quality product life. \n      We work smart towards restoring that original product quality and customer happiness through technologies that positively impact the society and environment. Our core work is to ensure all the fault appliances are restored to their desired brand performance through our trusted team of experts. Right from the scratch of the customer need to the pinnacle of the company's expertise, we set milestone of standard maintenance service to all your home, residential or commercial appliance that integrates to a global star customer satisfaction and business development.</p>\n    \n</div>\n\n<div class=\"jumbotron\">\n  <h1>Is your appliance malfunctioning?</h1>\n  <p>No need to hesitate or let fault impact negatively on your profit margin. We strive to restore appliances quality performance on check. Our service is Reliable, affordable and professional that will meet your flexible time set through our experts. We provide our diagnosis upfront, through the right team of experts during client visit, before engaging in any further business. You would like to know more about us or the range of Brands covered. We are here for you. Just give us a call.</p>\n</div>\n\n<div class=\"jumbotron\">\n  <div class=\"row\" style=\"max-height: 300px;\">\n    <div class=\"col-sm-6\">\n\n      <div id=\"googlemap\" class=\"googlemap\"></div>\n\n    </div>\n    <div class=\"col-sm-6\">\n      <h1>Talk to us...</h1>\n\n      <form [formGroup]=\"talkForm\" (submit)=\"talktous(talkForm.value)\">\n        <input type=\"text\" placeholder=\"Name\" formControlName=\"name\" class=\"form-control\">\n        <br>\n        <input type=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\">\n        <br>\n        <textarea name=\"message\" id=\"message\" formControlName=\"message\" cols=\"30\" rows=\"3\" class=\"form-control\" placeholder=\"Message\"></textarea>\n        <br>\n        <input type=\"submit\" value=\"Send\" class=\"btn btn-success\">\n      </form>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"jumbotron flexing even\">\n  <div>\n    <h3 class=\"text-center\">Purpose</h3>\n    <p class=\"text-center\">Bringing seamless appliances purpose and quality back to life.</p>\n  </div>\n\n  <div>\n    <h3 class=\"text-center\">Mission</h3>\n    <p class=\"text-center\">To exceed our customers' expectations through innovations and professional assurance, that delivers quality and impacts business sustainability.</p>\n  </div>\n\n  <div>\n    <h3 class=\"text-center\">Vision</h3>\n    <p class=\"text-center\">To be the Pinnacle of Standard Technical service, Conforming to pace set, Certified by customer experience</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(fb, snack) {
        this.fb = fb;
        this.snack = snack;
        this.talkForm = fb.group({
            "name": [null],
            "email": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])],
            "message": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(600)])]
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.talktous = function (value) {
        if (this.talkForm.invalid) {
            this.snack.open("Please validate the information filled out", "dismiss", {
                duration: 2000
            });
        }
        else {
            console.log(value);
            this.snack.open("Thank you for your feeback, we will get back to you shortly...", "Ok", {
                duration: 5000
            });
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */]) === "function" && _b || Object])
], AboutComponent);

var _a, _b;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashlogin_dashlogin_component__ = __webpack_require__("../../../../../src/app/dashlogin/dashlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashhome_dashhome_component__ = __webpack_require__("../../../../../src/app/dashhome/dashhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_clients_component__ = __webpack_require__("../../../../../src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_staff_component__ = __webpack_require__("../../../../../src/app/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stats_stats_component__ = __webpack_require__("../../../../../src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staffdetails_staffdetails_component__ = __webpack_require__("../../../../../src/app/staffdetails/staffdetails.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Routes Components










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_4_app_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'dashlogin', component: __WEBPACK_IMPORTED_MODULE_5__dashlogin_dashlogin_component__["a" /* DashloginComponent */] },
    { path: 'dashhome', component: __WEBPACK_IMPORTED_MODULE_6__dashhome_dashhome_component__["a" /* DashhomeComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_7__order_order_component__["a" /* OrderComponent */] },
    { path: "clients", component: __WEBPACK_IMPORTED_MODULE_8__clients_clients_component__["a" /* ClientsComponent */] },
    { path: "staff", component: __WEBPACK_IMPORTED_MODULE_9__staff_staff_component__["a" /* StaffComponent */] },
    { path: "stats", component: __WEBPACK_IMPORTED_MODULE_10__stats_stats_component__["a" /* StatsComponent */] },
    { path: "staffdetail", component: __WEBPACK_IMPORTED_MODULE_11__staffdetails_staffdetails_component__["a" /* StaffdetailsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    height:100px;\r\n}\r\n\r\n.header img {\r\n    margin-top: 40px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.jumbotron {\r\n    border-radius: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.social {\r\n    margin: 10px;\r\n}\r\n\r\n.space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.clearfix:after {\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.clearfix {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.menu {\r\n    width:100%;\r\n    margin:0px auto;\r\n}\r\n \r\n.menu li {\r\n    margin:0px;\r\n    list-style:none;\r\n    font-size: small;\r\n}\r\n \r\n.menu a {\r\n    transition:all linear 0.15s;\r\n    color:#f8f8f8;\r\n}\r\n \r\n.menu li:hover > a, .menu .current-item > a {\r\n    text-decoration:none;\r\n    color: white;\r\n}\r\n \r\n/*----- Top Level -----*/\r\n.menu > ul > li {\r\n    float:left;\r\n    position:relative;\r\n}\r\n \r\n.menu > ul > li > a {\r\n    padding:10px 10px;\r\n    border-bottom: 3px solid transparent;\r\n}\r\n \r\n.menu > ul > li:hover > a, .menu > ul > .current-item > a {\r\n    border-bottom: 3px solid white;\r\n}\r\n \r\n/*----- Bottom Level -----*/\r\n.menu li:hover .submenu {\r\n    z-index:1;\r\n    opacity:1;\r\n    display: block;\r\n}\r\n \r\n.submenu {\r\n    width: 300px;\r\n    padding:5px 0px;\r\n    position:absolute;\r\n    top:100%;\r\n    left:0px;\r\n    display: none;\r\n    z-index:-1;\r\n    opacity:0;\r\n    transition:opacity linear 0.15s;\r\n    box-shadow:0px 2px 3px rgba(0,0,0,0.2);\r\n    background:#0e005f;\r\n    margin-top: 5px;\r\n}\r\n \r\n.submenu li {\r\n    display:block;\r\n    font-size:16px;\r\n}\r\n \r\n.submenu li a {\r\n    padding:10px 30px;\r\n    display:block;\r\n    cursor: pointer;\r\n}\r\n \r\n.submenu li a:hover, .submenu .current-item a {\r\n    background:#0400eb;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- PC Template -->\r\n  <div class=\"container\" *ngIf=\"isMobile === false; else mobile\">\r\n    <mat-toolbar class=\"header\" *ngIf=\"dashboard == false;\">\r\n      <img src=\"./assets/images/graphine_logo.png\" height=\"70px\" width=\"70px\" alt=\"Graphine East Africa Limited\" (click)=\"goHome()\">\r\n      <span class=\"space\"></span>\r\n    \r\n    \r\n      <button mat-button>+254713925275</button>\r\n      <button mat-button>+254751311979</button>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"mainmenu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n    \r\n      <mat-menu #mainmenu>\r\n        <button mat-menu-item [routerLink]=\"['/about']\">About Graphine</button>\r\n        <a href=\"#\" target=\"blank\" mat-menu-item>Chat with us</a>\r\n        <button mat-menu-item>Find Our Offices</button>\r\n        <button mat-menu-item (click)=\"toAdmin()\">Dashboard</button>\r\n      </mat-menu>\r\n    </mat-toolbar>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <div class=\"jumbotron\" *ngIf=\"dashboard == false;\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <h3>Graphine East Africa Limited</h3>\r\n          <p class=\"text-muted\">For all your repairs and maintenance solutions. Follow us on our social media pages for the free tips and interact with our content creators directly.</p>\r\n        </div>\r\n\r\n        <div class=\"col-sm-5 text-center\">\r\n          <br>\r\n          <button mat-raised-button class=\"social\" color=\"primary\">Facebook</button>\r\n          <button mat-raised-button class=\"social\">Twitter</button>\r\n          <br>\r\n          <button mat-raised-button class=\"social\" color=\"primary\">Linked In</button>\r\n          <button mat-raised-button class=\"social\" color=\"warn\">Instagram</button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <mat-list>\r\n            <mat-list-item>PO BOX 4788-00200</mat-list-item>\r\n            <mat-list-item>City Square</mat-list-item>\r\n            <mat-list-item>Nairobi</mat-list-item>\r\n            <mat-list-item>info@graphineeastafrica.com</mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Mobile Template -->\r\n  <ng-template #mobile>\r\n    Mobile Site Goes Here\r\n  </ng-template>\r\n  <!-- end of Home Template -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sockets_service__ = __webpack_require__("../../../../../src/app/sockets.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, io) {
        var _this = this;
        this.router = router;
        this.io = io;
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.dashboard = false;
        navigator.geolocation.getCurrentPosition(function (pos) {
            //this.io.sendLocation(pos);
            console.log(pos);
        });
        setInterval(function () {
            _this.dashboard = _this.dashboard;
            switch (_this.router.url) {
                case "/dashhome":
                    _this.dashboard = true;
                    break;
                case "/dashlogin":
                    _this.dashboard = true;
                    break;
                case "/order":
                    _this.dashboard = true;
                    break;
                case "/clients":
                    _this.dashboard = true;
                    break;
                case "/staff":
                    _this.dashboard = true;
                    break;
                case "/stats":
                    _this.dashboard = true;
                    break;
                case "/staffdetail":
                    _this.dashboard = true;
                    break;
                default:
                    _this.dashboard = false;
                    break;
            }
        }, 1000);
    }
    AppComponent.prototype.toAdmin = function () {
        this.dashboard == true;
        this.router.navigate(['/dashhome']);
    };
    AppComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sockets_service__["a" /* SocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sockets_service__["a" /* SocketsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_schedule_component__ = __webpack_require__("../../../../../src/app/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sockets_service__ = __webpack_require__("../../../../../src/app/sockets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashhome_dashhome_component__ = __webpack_require__("../../../../../src/app/dashhome/dashhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashlogin_dashlogin_component__ = __webpack_require__("../../../../../src/app/dashlogin/dashlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__staff_staff_component__ = __webpack_require__("../../../../../src/app/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__stats_stats_component__ = __webpack_require__("../../../../../src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__clients_clients_component__ = __webpack_require__("../../../../../src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__clientdetails_clientdetails_component__ = __webpack_require__("../../../../../src/app/clientdetails/clientdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__staffdetails_staffdetails_component__ = __webpack_require__("../../../../../src/app/staffdetails/staffdetails.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Material Components

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashhome_dashhome_component__["a" /* DashhomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashlogin_dashlogin_component__["a" /* DashloginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_18__stats_stats_component__["a" /* StatsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__clientdetails_clientdetails_component__["a" /* ClientdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__staffdetails_staffdetails_component__["a" /* StaffdetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatInputModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__appdata_service__["a" /* AppdataService */], __WEBPACK_IMPORTED_MODULE_13__sockets_service__["a" /* SocketsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppdataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppdataService = (function () {
    function AppdataService(http) {
        this.http = http;
        this.idSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.staffIdSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.stafflevel = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.currentId = this.idSource.asObservable();
        this.currentStaffId = this.staffIdSource.asObservable();
        this.currentLevel = this.stafflevel.asObservable();
    }
    AppdataService.prototype.getCounties = function () {
        return this.http.get('assets/json/counties.json').map(function (res) { return res.json(); });
    };
    AppdataService.prototype.makeAppointment = function (from, to, county, fullname, town, street, phone, category, sub, subsub) {
        return this.http.post('/addschedule', {
            from: from,
            to: to,
            county: county,
            category: category,
            fullname: fullname,
            town: town,
            street: street,
            phone: phone,
            sub: sub,
            subsub: subsub
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.login = function (type, email, password) {
        return this.http.post("/auth/login", {
            type: type,
            email: email,
            password: password
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.getOrders = function (type) {
        return this.http.get("/admin/schedules/" + type).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.viewOrder = function (id) {
        return this.http.post("/admin/order", {
            id: id
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.viewOrderById = function (id) {
        this.idSource.next(id);
    };
    AppdataService.prototype.setStaffId = function (id, type) {
        this.staffIdSource.next(id);
        this.stafflevel.next(type);
    };
    AppdataService.prototype.quoteOrder = function (id, quotation) {
        return this.http.post("/admin/quote", {
            id: id,
            quotation: quotation
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.approveOrder = function (id) {
        return this.http.post("/admin/approve", {
            id: id
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.completeOrder = function (id) {
        return this.http.get("/admin/paid/" + id).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.addTechnician = function (username, email, phone, staffid, title) {
        return this.http.post("/admin/addtechnician", {
            username: username,
            phone: phone,
            email: email,
            staff_id: staffid,
            title: title
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.addManager = function (username, email, phone, staffid) {
        return this.http.post("/admin/addmanager", {
            username: username,
            phone: phone,
            email: email,
            staff_id: staffid
        }).map(function (res) { return res.json(); });
    };
    AppdataService.prototype.getTechnicians = function () {
        return this.http.get("/users/technicians").map(function (res) { return res.json(); });
    };
    AppdataService.prototype.getManagers = function () {
        return this.http.get("/users/managers").map(function (res) { return res.json(); });
    };
    AppdataService.prototype.viewStaff = function (id, level) {
        if (level == "technician") {
            return this.http.get("/users/technician/" + id).map(function (res) { return res.json(); });
        }
        else if (level == "manager") {
            return this.http.get("/users/manager/" + id).map(function (res) { return res.json(); });
        }
    };
    return AppdataService;
}());
AppdataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppdataService);

var _a;
//# sourceMappingURL=appdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/clientdetails/clientdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clientdetails/clientdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  clientdetails works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/clientdetails/clientdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientdetailsComponent = (function () {
    function ClientdetailsComponent() {
    }
    ClientdetailsComponent.prototype.ngOnInit = function () {
    };
    return ClientdetailsComponent;
}());
ClientdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-clientdetails',
        template: __webpack_require__("../../../../../src/app/clientdetails/clientdetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clientdetails/clientdetails.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClientdetailsComponent);

//# sourceMappingURL=clientdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  clients works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../src/app/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clients/clients.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClientsComponent);

//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashhome/dashhome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tablewrapper {\r\n    overflow-y: auto;\r\n    max-height: 600px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashhome/dashhome.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  Dashboard\n  <span class=\"space\"></span>\n  <button mat-button (click)=\"navigate('orders')\">Orders</button>\n  <button mat-button *ngIf=\"add_technician == true\" (click)=\"navigate('staff')\">Staff</button>\n  <button mat-button *ngIf=\"generate_report == true\" (click)=\"navigate('stats')\">Site Stats</button>\n  <button mat-button *ngIf=\"view_clients == true\" (click)=\"navigate('clients')\">Clients</button>\n  <button mat-button (click)=\"logUserOut()\">Log out</button>\n</mat-toolbar>\n\n<mat-tab-group>\n  <mat-tab label=\"Pending\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Category</th>\n            <th>Sub - Category</th>\n            <th>Service</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let p of pending\">\n            <td>{{p.fullname}}</td>\n            <td>{{p.county}}</td>\n            <td>{{p.category}}</td>\n            <td>{{p.sub}}</td>\n            <td>{{p.subsub}}</td>\n            <td>\n              <button class=\"btn btn-default\" (click)=\"viewOrder(p._id)\">View</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Quoted\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Category</th>\n            <th>Sub - Category</th>\n            <th>Price</th>\n            <th>Approve</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let q of quoted\">\n            <td>{{q.fullname}}</td>\n            <td>{{q.county}}</td>\n            <td>{{q.category}}</td>\n            <td>{{q.sub}}</td>\n            <td>{{q.price}}</td>\n            <td>\n              <button class=\"btn btn-success\" (click)=\"approveOrder(q._id)\" [disabled]=\"q.approved\">Approve</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Approved\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Phone</th>\n            <th>Price</th>\n            <th>Appliance</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let a of approved\">\n            <td>{{a.fullname}}</td>\n            <td>{{a.county}}</td>\n            <td>{{a.phone}}</td>\n            <td>{{a.price}}</td>\n            <td>{{a.subsub}}</td>\n            <td>\n              <button class=\"btn btn-default\" title=\"When order has been paid and job has been completed.\" (click)=\"completeOrder(a._id)\">Complete Order</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Completed\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Category</th>\n            <th>Sub - Category</th>\n            <th>Service</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let co of completed\">\n            <td>{{co.fullname}}</td>\n            <td>{{co.county}}</td>\n            <td>{{co.category}}</td>\n            <td>{{co.name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Cancelled\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Category</th>\n            <th>Sub - Category</th>\n            <th>Service</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let c of cancelled\">\n            <td>{{c.fullname}}</td>\n            <td>{{c.county}}</td>\n            <td>{{c.category}}</td>\n            <td>{{c.name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"All\">\n    <div class=\"tablewrapper\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Category</th>\n            <th>Sub - Category</th>\n            <th>Service</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          <tr *ngFor=\"let all of history\">\n            <td>{{all.fullname}}</td>\n            <td>{{all.county}}</td>\n            <td>{{all.category}}</td>\n            <td>{{all.name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/dashhome/dashhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashhomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashhomeComponent = (function () {
    function DashhomeComponent(router, link) {
        var _this = this;
        this.router = router;
        this.link = link;
        if (window.localStorage.getItem("username") == null) {
            this.router.navigate(["/dashlogin"]);
        }
        else {
            this.username = window.localStorage.getItem("username");
            this.add_technician = Boolean(window.localStorage.getItem("add_technician"));
            this.generate_report = Boolean(window.localStorage.getItem("generate_report"));
            this.view_clients = Boolean(window.localStorage.getItem("view_clients"));
            this.link.getOrders("pending").subscribe(function (data) {
                _this.pending = data.data;
            });
            this.link.getOrders("quoted").subscribe(function (data) {
                _this.quoted = data.data;
            });
            this.link.getOrders("approved").subscribe(function (data) {
                _this.approved = data.data;
            });
            this.link.getOrders("completed").subscribe(function (data) {
                _this.completed = data.data;
            });
            this.link.getOrders("cancelled").subscribe(function (data) {
                _this.cancelled = data.data;
            });
            this.link.getOrders("blank").subscribe(function (data) {
                _this.history = data.data;
            });
        }
    }
    DashhomeComponent.prototype.ngOnInit = function () {
    };
    DashhomeComponent.prototype.logUserOut = function () {
        window.localStorage.clear();
        this.router.navigate(["/dashlogin"]);
    };
    DashhomeComponent.prototype.viewOrder = function (id) {
        this.link.viewOrderById(id);
        this.router.navigate(['/order']);
    };
    DashhomeComponent.prototype.approveOrder = function (id) {
        var _this = this;
        this.link.approveOrder(id).subscribe(function (data) {
            _this.quoted = data.data;
        });
    };
    DashhomeComponent.prototype.completeOrder = function (id) {
        var _this = this;
        this.link.completeOrder(id).subscribe(function (data) {
            _this.approved = data.data;
        });
    };
    DashhomeComponent.prototype.navigate = function (where) {
        switch (where) {
            case "orders":
                this.router.navigate(['/dashhome']);
                break;
            case "staff":
                this.router.navigate(['/staff']);
                break;
            case "stats":
                this.router.navigate(['/stats']);
                break;
            case "clients":
                this.router.navigate(['/clients']);
                break;
            default:
                this.router.navigate(['/dashhome']);
                break;
        }
    };
    return DashhomeComponent;
}());
DashhomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dashhome',
        template: __webpack_require__("../../../../../src/app/dashhome/dashhome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashhome/dashhome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */]) === "function" && _b || Object])
], DashhomeComponent);

var _a, _b;
//# sourceMappingURL=dashhome.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashlogin/dashlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertbox {\r\n    background: #F72929;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-top: 5px;\r\n    color: white;\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n    -webkit-animation: .6s alertAnim ease;\r\n            animation: .6s alertAnim ease;\r\n}\r\n\r\n.adminLogin {\r\n    width: 500px;\r\n    margin: 0px auto;\r\n}\r\n\r\nmat-card {\r\n    width: 700px;\r\n    margin: 0px auto;\r\n    margin-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashlogin/dashlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <div class=\"text-center\">\n      <h3>Login as {{acc_type}}</h3>\n\n      <img src=\"./assets/icons/login.png\" height=\"100px\" width=\"100px\" alt=\"Login Image\">\n\n      <br>\n      <p>...</p>\n      <br>\n\n      <form [formGroup]=\"adminLoginForm\" (submit)=\"adminLoginSubmit(adminLoginForm.value)\" class=\"adminLogin\">\n        <mat-form-field>\n          <mat-select placeholder=\"Access Level\" formControlName=\"access_level\" [(value)]=\"access_level\">\n            <mat-option value=\"admin\">Admin</mat-option>\n            <mat-option value=\"technician\">Technician</mat-option>\n            <mat-option value=\"manager\">Manager</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div class=\"alertbox\" *ngIf=\"!adminLoginForm.controls['access_level'].valid && adminLoginForm.controls['access_level'].touched\">Please specify your access level</div>\n        <br>\n        <input type=\"text\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\">\n        <div class=\"alertbox\" *ngIf=\"!adminLoginForm.controls['email'].valid && adminLoginForm.controls['email'].touched\">Invalid email address</div>\n        <br>\n        <input type=\"password\" class=\"form-control\" placeholder=\"password\" formControlName=\"password\">\n        <div class=\"alertbox\" *ngIf=\"!adminLoginForm.controls['password'].valid && adminLoginForm.controls['password'].touched\">Password too short</div>\n        <br>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n      </form>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashlogin/dashlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashloginComponent = (function () {
    function DashloginComponent(fb, live, router, snack) {
        this.fb = fb;
        this.live = live;
        this.router = router;
        this.snack = snack;
        this.acc_type = "admin";
        this.adminLoginForm = fb.group({
            "access_level": [null],
            "email": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])],
            "password": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6)])]
        });
    }
    DashloginComponent.prototype.ngOnInit = function () {
    };
    DashloginComponent.prototype.adminLoginSubmit = function (value) {
        var _this = this;
        console.log(value);
        if (this.adminLoginForm.controls['email'].invalid || this.adminLoginForm.controls['password'].invalid) {
            this.snack.open("Please input valid data", "Dismiss", {
                duration: 3000
            });
        }
        else {
            this.live.login(value.access_level, value.email, value.password).subscribe(function (response) {
                console.log(response);
                if (response.ok == true) {
                    window.localStorage.setItem("username", response.data.username);
                    //save permissions
                    window.localStorage.setItem("add_technician", response.data.permissions.add_technician);
                    window.localStorage.setItem("approve_order", response.data.permissions.add_technician);
                    window.localStorage.setItem("cancel_order", response.data.permissions.cancel_order);
                    window.localStorage.setItem("complete_order", response.data.permissions.complete_order);
                    window.localStorage.setItem("delete_technician", response.data.permissions.delete_technician);
                    window.localStorage.setItem("edit_technician", response.data.permissions.edit_technician);
                    window.localStorage.setItem("email_client", response.data.permissions.email_client);
                    window.localStorage.setItem("generate_client_info", response.data.permissions.generate_client_info);
                    window.localStorage.setItem("generate_report", response.data.permissions.generate_report);
                    window.localStorage.setItem("quote_order", response.data.permissions.quote_order);
                    window.localStorage.setItem("remove_technician", response.data.permissions.remove_technician);
                    window.localStorage.setItem("view_clients", response.data.permissions.view_clients);
                    _this.router.navigate(["/dashhome"]);
                }
                else {
                    _this.snack.open(response.message, "Dismiss", {
                        duration: 3000,
                        verticalPosition: "top"
                    });
                }
            });
        }
    };
    return DashloginComponent;
}());
DashloginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dashlogin',
        template: __webpack_require__("../../../../../src/app/dashlogin/dashlogin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashlogin/dashlogin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__appdata_service__["a" /* AppdataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatSnackBar */]) === "function" && _d || Object])
], DashloginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashlogin.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coverimage {\r\n    padding: 0px;\r\n    height: 400px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.jumbotron {\r\n    border-radius: 0px;\r\n}\r\n\r\n.middle-text {\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n    padding: 1em 1.6em;\r\n    color: white;\r\n}\r\n\r\n.nondisp {\r\n    display: none;\r\n}\r\n  \r\n.disp {\r\n    display: block;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 350px;\r\n}\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 16px;\r\n    padding: 16px 32px;\r\n}\r\n\r\n.slideshow-container {\r\n    max-width: 1000px;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.mySlides {\r\n    display: none;\r\n}\r\n\r\n.prev, .next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    margin-top: -22px;\r\n    padding: 16px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    transition: 0.6s ease;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.prev:hover, .next:hover {\r\n    background-color: rgba(0, 0, 0, .8);\r\n}\r\n\r\n.numbertext {\r\n    color: #f2f2f2;\r\n    font-size: 12px;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n.dot {\r\n    cursor: pointer;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 2px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: background-color 0.6s ease;\r\n}\r\n\r\n.active, .dot:hover {\r\n    background: #717171;\r\n}\r\n\r\n.fade {\r\n    -webkit-animation-name: fade;\r\n            animation-name: fade;\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n    from { opacity: 4 }\r\n    to { opacity: 1}\r\n}\r\n\r\n@keyframes fade {\r\n    from { opacity: 4 }\r\n    to { opacity: 1}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <mat-toolbar color=\"primary\">\n\n    <nav class=\"menu\">\n      <ul class=\"clearfix\">\n        <li><a>Residential Services</a>\n          <ul class=\"submenu\">\n            <li><a>Kitchen</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Oven')\">Oven</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n              </ul>\n            </li>\n            <li><a>Laundry</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Dryer')\">Dryer</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Vents')\">Vents</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Caunders')\">Caunders</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Others')\">Others</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(1, 'Appliances', 'Appliances')\">Appliances</a></li>\n            <li><a>Refrigeration and Air Conditioning</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(1, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n            <li><a (click)=\"schedule(1, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n            <li><a (click)=\"schedule(1, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n          </ul>\n        </li>\n        <li><a>Hotel & Institutions</a>\n          <ul class=\"submenu\">\n              <li><a>Kitchen</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Oven')\">Oven</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n                </ul>\n              </li>\n              <li><a>Laundry</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Dryer')\">Dryer</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Vents')\">Vents</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Caunders')\">Caunders</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Others')\">Others</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(2, 'Appliances', 'Appliances')\">Appliances</a></li>\n              <li><a>Refrigeration and Air Conditioning</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(2, 'Laboratory Equipment', 'Laboratory Equipment')\">Laboratory Equipment</a></li>\n              <li><a (click)=\"schedule(2, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n              <li><a (click)=\"schedule(2, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n              <li><a (click)=\"schedule(2, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n              <li><a (click)=\"schedule(2, 'Steam Boilers', 'Steam Boilers')\">Steam Boilers</a></li>\n          </ul>\n        </li>\n        <li><a>Commercial Services</a>\n          <ul class=\"submenu\">\n              <li><a>Kitchen</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Oven')\">Oven</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n                </ul>\n              </li>\n              <li><a>Laundry</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Dryer')\">Dryer</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Vents')\">Vents</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Caunders')\">Caunders</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Others')\">Others</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(3, 'Appliances', 'Appliances')\">Appliances</a></li>\n              <li><a>Refrigeration and Air Conditioning</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(3, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n              <li><a (click)=\"schedule(3, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n              <li><a (click)=\"schedule(3, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n              <li><a (click)=\"schedule(3, 'Steam Boilers', 'Steam Boilers')\">Steam Boilers</a></li>\n          </ul>\n        </li>\n        <li><a>Building Repairs</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(4, 'Electrical Works', 'Electrical Works')\">Electrical Works</a></li>\n            <li><a (click)=\"schedule(4, 'Water System and Drainage', 'Water System and Drainage')\">Water System and Drainage</a></li>\n            <li><a (click)=\"schedule(4, 'Interior works', 'Interior works')\">Interior works</a></li>\n            <li><a>Civil Works</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Pavements')\">Pavements</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Partitioning')\">Partitioning</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Roofing')\">Roofing</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Fencing')\">Fencing</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Landscaping')\">Landscaping</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li><a>Entertainment Equipment</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(5, 'Audi Visual Equipment', 'Audi Visual Equipment')\">Audi Visual Equipment</a></li>\n            <li><a (click)=\"schedule(5, 'Betting Machines', 'Betting Machines')\">Betting Machines</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Fun Machines', 'Kids Fun Machines')\">Kids Fun Machines</a></li>\n            <li><a (click)=\"schedule(5, 'Bouncing Castle', 'Bouncing Castle')\">Bouncing Castle</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Trains', 'Kids Trains')\">Kids Trains</a></li>\n            <li><a (click)=\"schedule(5, 'Roll Caster & Speed Boats','Roll Caster & Speed Boats')\">Roll Caster & Speed Boats</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Swings','Kids Swings')\">Kids Swings</a></li>\n            <li><a (click)=\"schedule(5, 'Power Generators','Power Generators')\">Power Generators</a></li>\n            <li><a (click)=\"schedule(5, 'Security Systems','Security Systems')\">Security Systems</a></li>\n          </ul>\n        </li>\n        <li><a>Green Energy Solutions</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(6, 'Maintenance', 'Maintenance')\">Maintenance</a></li>\n            <li><a>Installation</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar System')\">Solar System</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Street Solar Lights')\">Street Solar Lights</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar Water Heating System')\">Solar Water Heating System</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar power')\">Solar power</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar pumps')\">Solar pumps</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar designed structures')\">Solar designed structures</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar saving consultations')\">Solar saving consultations</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(6, 'Energy Audit', 'Energy Audit')\">Energy Audit</a></li>\n            <li><a (click)=\"schedule(6, 'Energy Saving Consultant', 'Energy Saving Consultant')\">Energy Saving Consultant</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n\n  </mat-toolbar>\n</nav>\n\n<div class=\"jumbotron\" style=\"padding: 0; margin: 0;\">\n\n  <!-- slideshow container -->\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img class=\"d-block img-fluid\" width=\"100%\" height=\"450px\" src=\"./assets/images/jumbotron1.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"item\">\n          <img class=\"d-block img-fluid\" width=\"100%\" height=\"450px\" src=\"./assets/images/jumbotron2.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"item\">\n          <img class=\"d-block img-fluid\" width=\"100%\" height=\"450px\" src=\"./assets/images/jumbotron3.jpg\" alt=\"First slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  <!--\n  <img src=\"./assets/images/jumbotron2.jpg\" alt=\"Graphine EA Limited\" class=\"cover\" width=\"100%\" height=\"400px\">\n\n  <div class=\"middle-text\">\n    <h1>Graphine EA Limited</h1>\n    <p class=\"text lead\">Transforming the world.</p>\n  </div>\n-->\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.schedule = function (id, sub, subsub) {
        var category;
        switch (id) {
            case 1:
                category = "Residential Repair and Maintenance";
                break;
            case 2:
                category = "Hotels and Medical Institutions Repair and Maintenance";
                break;
            case 3:
                category = "Commercial Repair and Maintenance";
                break;
            case 4:
                category = "Building Repairs and Maintenance";
                break;
            case 5:
                category = "Entertainment Equipment Repair and Maintenance";
                break;
            case 6:
                category = "Green Energy Solutions";
                break;
            default:
                category = "None Picked";
                break;
        }
        this.router.navigate(['/schedule'], {
            queryParams: {
                category: category,
                sub: sub,
                subsub: subsub
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    padding: 1em 2em;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    margin: .7em .7em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <h3>Order for {{fullname}}</h3>\n    <span class=\"space\"></span>\n    <button mat-raised-button color=\"accent\" style=\"margin: 5px;\">Cancel Order</button>\n    <button mat-raised-button color=\"primary\" style=\"margin: 5px;\">Generate Report</button>   \n</mat-toolbar>\n\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card text-center\">\n      <h3>Name</h3>\n      <h5>{{fullname}}</h5>\n\n      <hr style=\"width: 70%; margin: 0 auto;\">\n\n      <h3>Phone</h3>\n      <h5>0{{phone}}</h5>\n\n      <hr style=\"width: 70%; margin: 0 auto;\">\n\n      <h3>Email</h3>\n      <h5></h5>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <p><strong>County</strong></p>\n          <p><strong>Town</strong></p>\n          <p><strong>Street</strong></p>\n        </div>\n        <div class=\"col-sm-1\">\n          <p><strong>:</strong></p>\n          <p><strong>:</strong></p>\n          <p><strong>:</strong></p>\n        </div>\n        <div class=\"col-sm-7\">\n          <p class=\"text-muted\">Nairobi</p>\n          <p class=\"text-muted\">Utawala</p>\n          <p class=\"text-muted\">Gesora Rd</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <p>Work to has been scheduled to be viewed between <time datetime=\"2017\"></time> to <time datetime=\"2018\"></time></p>\n    </div>\n\n  </div>\n  <div class=\"col-sm-8\">\n\n    <table class=\"table-hover table\">\n      <thead>\n        <tr>\n          <th>Category</th>\n          <th>Sub Category</th>\n          <th>Sub Sub Category</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{category}}</td>\n          <td>{{sub}}</td>\n          <td>{{subsub}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n\n            <h3>Make a quotation...</h3>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">KES</span>\n              <input type=\"number\" placeholder=\"Price\" class=\"form-control\" [(ngModel)]=\"quotation_box\">\n            </div>\n\n          </li>\n\n          <li class=\"list-group-item\">\n              <button mat-button (click)=\"quoteOrder(id, quotation_box)\">Quote</button>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <div class=\"card text-center\">\n          <h1>Price</h1>\n          <h1 class=\"display-3\" style=\"color: rgb(8, 216, 8);\">KES: {{price}}</h1>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = (function () {
    function OrderComponent(rActivated, appdata, router) {
        var _this = this;
        this.rActivated = rActivated;
        this.appdata = appdata;
        this.router = router;
        this.appdata.currentId.subscribe(function (data) {
            _this.id = data;
            _this.appdata.viewOrder(data).subscribe(function (response) {
                console.log(response.data);
                _this.fullname = response.data.fullname;
                _this.phone = response.data.phone;
                _this.category = response.data.category;
                _this.sub = response.data.sub;
                _this.subsub = response.data.subsub;
            });
        });
        if (this.id == "") {
            this.router.navigate(['/dashhome']);
        }
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.quoteOrder = function (id, quote) {
        var _this = this;
        this.appdata.quoteOrder(id, quote).subscribe(function (response) {
            _this.price = response.data.price;
            console.log(response);
        });
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-order',
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OrderComponent);

var _a, _b, _c;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flexbox {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.rightPanel {\r\n    -webkit-box-flex: 1.5;\r\n        -ms-flex: 1.5;\r\n            flex: 1.5;\r\n}\r\n\r\n.leftPanel {\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2;\r\n            flex: 2;\r\n}\r\n\r\n.alertbox {\r\n    background: #F72929;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-top: 5px;\r\n    color: white;\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n    -webkit-animation: .6s alertAnim ease;\r\n            animation: .6s alertAnim ease;\r\n}\r\n\r\n.jumbotron {\r\n    margin-bottom: 0px;\r\n    border-radius: 0;\r\n    border-bottom: 1px solid gray;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .flexbox {\r\n        display: block;\r\n    }\r\n\r\n    .leftPanel {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px)\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px)\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <mat-toolbar color=\"primary\">\n    <nav class=\"menu\">\n      <ul class=\"clearfix\">\n        <li><a>Residential Services</a>\n          <ul class=\"submenu\">\n            <li><a>Kitchen</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Oven')\">Oven</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                <li><a (click)=\"schedule(1, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n              </ul>\n            </li>\n            <li><a>Laundry</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Dryer')\">Dryer</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Vents')\">Vents</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Caunders')\">Caunders</a></li>\n                <li><a (click)=\"schedule(1, 'Laundry', 'Others')\">Others</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(1, 'Appliances', 'Appliances')\">Appliances</a></li>\n            <li><a>Refrigeration and Air Conditioning</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                <li><a (click)=\"schedule(1, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(1, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n            <li><a (click)=\"schedule(1, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n            <li><a (click)=\"schedule(1, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n          </ul>\n        </li>\n        <li><a>Hotel & Institutions</a>\n          <ul class=\"submenu\">\n              <li><a>Kitchen</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Oven')\">Oven</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                  <li><a (click)=\"schedule(2, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n                </ul>\n              </li>\n              <li><a>Laundry</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Dryer')\">Dryer</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Vents')\">Vents</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Caunders')\">Caunders</a></li>\n                  <li><a (click)=\"schedule(2, 'Laundry', 'Others')\">Others</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(2, 'Appliances', 'Appliances')\">Appliances</a></li>\n              <li><a>Refrigeration and Air Conditioning</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(2, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(2, 'Laboratory Equipment', 'Laboratory Equipment')\">Laboratory Equipment</a></li>\n              <li><a (click)=\"schedule(2, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n              <li><a (click)=\"schedule(2, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n              <li><a (click)=\"schedule(2, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n              <li><a (click)=\"schedule(2, 'Steam Boilers', 'Steam Boilers')\">Steam Boilers</a></li>\n          </ul>\n        </li>\n        <li><a>Commercial Services</a>\n          <ul class=\"submenu\">\n              <li><a>Kitchen</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Fridge')\">Fridge</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Oven')\">Oven</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Microwave')\">Microwave</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Toaster')\">Toaster</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Mixer')\">Mixer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Juicer')\">Juicer</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Food Processor')\">Food Processor</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Electric Kettle')\">Electric Kettle</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Grill Electric')\">Grill Electric</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Dishwasher')\">Dishwasher</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Water Dispenser')\">Water Dispenser</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Coffee Machine')\">Coffee Machine</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Weighing Scale')\">Weighing Scale</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Chicken Grill')\">Chicken Grill</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Hood - Kitchen')\">Hood - Kitchen</a></li>\n                  <li><a (click)=\"schedule(3, 'Kitchen', 'Kitchen Fan')\">Kitchen Fan</a></li>\n                </ul>\n              </li>\n              <li><a>Laundry</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Waching Machines')\">Waching Machines</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Dryer')\">Dryer</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Iron Steam')\">Iron Steam</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Vents')\">Vents</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Caunders')\">Caunders</a></li>\n                  <li><a (click)=\"schedule(3, 'Laundry', 'Others')\">Others</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(3, 'Appliances', 'Appliances')\">Appliances</a></li>\n              <li><a>Refrigeration and Air Conditioning</a>\n                <ul class=\"sub-submenu\">\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Fridges')\">Fridges</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Chillers')\">Chillers</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Freezer')\">Freezer</a></li>\n                  <li><a (click)=\"schedule(3, 'Refrigeration and Air Conditioning', 'Ice Maker')\">Ice Maker</a></li>\n                </ul>\n              </li>\n              <li><a (click)=\"schedule(3, 'Power Generators', 'Power Generators')\">Power Generators</a></li>\n              <li><a (click)=\"schedule(3, 'Security Systems', 'Security Systems')\">Security Systems</a></li>\n              <li><a (click)=\"schedule(3, 'Audio Visual Equipment', 'Audio Visual Equipment')\">Audio Visual Equipment</a></li>\n              <li><a (click)=\"schedule(3, 'Steam Boilers', 'Steam Boilers')\">Steam Boilers</a></li>\n          </ul>\n        </li>\n        <li><a>Building Repairs</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(4, 'Electrical Works', 'Electrical Works')\">Electrical Works</a></li>\n            <li><a (click)=\"schedule(4, 'Water System and Drainage', 'Water System and Drainage')\">Water System and Drainage</a></li>\n            <li><a (click)=\"schedule(4, 'Interior works', 'Interior works')\">Interior works</a></li>\n            <li><a>Civil Works</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Pavements')\">Pavements</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Partitioning')\">Partitioning</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Roofing')\">Roofing</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Fencing')\">Fencing</a></li>\n                <li><a (click)=\"schedule(4, 'Civil Works', 'Landscaping')\">Landscaping</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li><a>Entertainment Equipment</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(5, 'Audi Visual Equipment', 'Audi Visual Equipment')\">Audi Visual Equipment</a></li>\n            <li><a (click)=\"schedule(5, 'Betting Machines', 'Betting Machines')\">Betting Machines</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Fun Machines', 'Kids Fun Machines')\">Kids Fun Machines</a></li>\n            <li><a (click)=\"schedule(5, 'Bouncing Castle', 'Bouncing Castle')\">Bouncing Castle</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Trains', 'Kids Trains')\">Kids Trains</a></li>\n            <li><a (click)=\"schedule(5, 'Roll Caster & Speed Boats','Roll Caster & Speed Boats')\">Roll Caster & Speed Boats</a></li>\n            <li><a (click)=\"schedule(5, 'Kids Swings','Kids Swings')\">Kids Swings</a></li>\n            <li><a (click)=\"schedule(5, 'Power Generators','Power Generators')\">Power Generators</a></li>\n            <li><a (click)=\"schedule(5, 'Security Systems','Security Systems')\">Security Systems</a></li>\n          </ul>\n        </li>\n        <li><a>Green Energy Solutions</a>\n          <ul class=\"submenu\">\n            <li><a (click)=\"schedule(6, 'Maintenance', 'Maintenance')\">Maintenance</a></li>\n            <li><a>Installation</a>\n              <ul class=\"sub-submenu\">\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar System')\">Solar System</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Street Solar Lights')\">Street Solar Lights</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar Water Heating System')\">Solar Water Heating System</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar power')\">Solar power</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar pumps')\">Solar pumps</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar designed structures')\">Solar designed structures</a></li>\n                <li><a (click)=\"schedule(6, 'Installation', 'Solar saving consultations')\">Solar saving consultations</a></li>\n              </ul>\n            </li>\n            <li><a (click)=\"schedule(6, 'Energy Audit', 'Energy Audit')\">Energy Audit</a></li>\n            <li><a (click)=\"schedule(6, 'Energy Saving Consultant', 'Energy Saving Consultant')\">Energy Saving Consultant</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n  </mat-toolbar>\n</nav>\n\n<div class=\"jumbotron\">\n  <div class=\"flexbox\">\n    <div class=\"leftPanel\">\n      <h1 style=\"font-family: 'Segoe UI Light';\">{{category}}</h1>\n\n      <p class=\"lead\"> Thank you for choosing us to do the <strong>{{subsub}}</strong> work for you.</p>\n      <p class=\"lead\"> Please book an appointment for our experts to come to you at your own convinient time to make you a quotation and view the job.</p>\n    </div>\n\n    <div class=\"rightPanel\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          Schedule a time that is convinient for you\n\n          <br>\n\n          <form [formGroup]=\"rForm\" (ngSubmit)=\"scheduleAppointment(rForm.value)\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"from\">From:</span>\n              <input type=\"datetime-local\" name=\"from\" id=\"from\" class=\"form-control\" formControlName=\"from\">\n            </div>\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['from'].valid && rForm.controls['from'].touched\"> This is required</div>\n            <br>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"to\">To:</span>\n              <input type=\"datetime-local\" class=\"form-control\" name=\"to\" id=\"to\" formControlName=\"to\">\n            </div>\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['to'].valid && rForm.controls['to'].touched\"> This is required</div>\n            <br>\n            <span class=\"label label-default\">County</span>\n            <mat-select [placeholder]=\"County\" formControlName=\"select\">\n              <mat-option *ngFor=\"let county of counties\" [value]=\"county\">\n                {{county}}\n              </mat-option>\n            </mat-select>\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['select'].valid && rForm.controls['select'].touched\">Choose a county</div>\n            <br>\n            <input type=\"text\" name=\"fullname\" id=\"fullname\" class=\"form-control\" placeholder=\"Full Names\" formControlName=\"fullname\">\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['fullname'].valid && rForm.controls['fullname'].touched\">Give us a name...</div>\n            <br>\n            <input type=\"text\" name=\"town\" id=\"town\" class=\"form-control\" placeholder=\"Town\" formControlName=\"town\">\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['town'].valid && rForm.controls['town'].touched\">Even a close town is enough</div>\n            <br>\n            <input type=\"text\" name=\"street\" id=\"street\" class=\"form-control\" formControlName=\"street\" placeholder=\"Street Address\">\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['street'].valid && rForm.controls['street'].touched\">Make it easier to find you...</div>\n            <br>\n            <input type=\"number\" name=\"phone\" id=\"phone\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone\">\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['phone'].valid && rForm.controls['phone'].touched\">We'd like to call on arrival</div>\n            <br>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n            <div class=\"alertbox\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">You'll need to recieve important notifications</div>\n            <br>\n            <input class=\"btn btn-success\" color=\"primary\" type=\"submit\" value=\"Schedule Appointment\" [disabled]=\"!rForm.valid\" />\n            \n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleComponent = (function () {
    function ScheduleComponent(ar, snackbar, router, appdata, fb) {
        this.ar = ar;
        this.snackbar = snackbar;
        this.router = router;
        this.appdata = appdata;
        this.fb = fb;
        this.fullname = "";
        this.town = "";
        this.select = "";
        this.street = "";
        this.email = "";
        this.rForm = fb.group({
            'fullname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'from': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'to': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'town': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'street': '',
            'select': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email])],
            'newsletter': '',
            'phone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(11)])]
        });
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ar.queryParams.subscribe(function (params) {
            _this.category = params['category'];
            _this.sub = params['sub'];
            _this.subsub = params['subsub'];
        });
        this.appdata.getCounties().subscribe(function (data) {
            _this.counties = data;
        });
    };
    ScheduleComponent.prototype.getScheduleInfo = function (category, name, subsub) {
        this.category = category;
        this.sub = name;
        this.subsub = subsub;
    };
    ScheduleComponent.prototype.scheduleAppointment = function (form) {
        var _this = this;
        this.appdata.makeAppointment(form.from, form.to, form.select, form.fullname, form.town, form.street, form.phone, this.category, this.sub, this.subsub).subscribe(function (data) {
            if (data.ok == true) {
                _this.snackbar.open("Order id " + data.id.toString().toUpperCase() + " has been recieved", "dismiss", {
                    duration: 3000
                });
            }
        });
    };
    ScheduleComponent.prototype.schedule = function (id, name, subsub) {
        var category;
        switch (id) {
            case 1:
                category = "Residential Repair and Maintenance";
                break;
            case 2:
                category = "Hotels and Institutions Repair and Maintenance";
                break;
            case 3:
                category = "Commercial Repair and Maintenance";
                break;
            case 4:
                category = "Building Repairs and Maintenance";
                break;
            case 5:
                category = "Entertainment Equipment Repair and Maintenance";
                break;
            case 6:
                category = "Green Energy Solutions";
                break;
            default:
                category = "None Picked";
                break;
        }
        this.getScheduleInfo(category, name, subsub);
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-schedule',
        template: __webpack_require__("../../../../../src/app/schedule/schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/schedule/schedule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appdata_service__["a" /* AppdataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */]) === "function" && _e || Object])
], ScheduleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/sockets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketsService = (function () {
    function SocketsService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__();
    }
    SocketsService.prototype.sendLocation = function (pos) {
        this.socket.emit("locationinfo", pos);
    };
    SocketsService.prototype.recieveLocation = function () {
        this.socket.on("loc", function (data) {
            console.log(data);
        });
    };
    return SocketsService;
}());
SocketsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketsService);

//# sourceMappingURL=sockets.service.js.map

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  Dashboard\n  <span class=\"space\"></span>\n  <button mat-button (click)=\"navigate('orders')\">Orders</button>\n  <button mat-button *ngIf=\"add_technician == true\" (click)=\"navigate('staff')\">Staff</button>\n  <button mat-button *ngIf=\"generate_report == true\" (click)=\"navigate('stats')\">Site Stats</button>\n  <button mat-button *ngIf=\"view_clients == true\" (click)=\"navigate('clients')\">Clients</button>\n  <button mat-button (click)=\"logUserOut()\">Log out</button>\n</mat-toolbar>\n\n<mat-tab-group>\n  <mat-tab label=\"Technicians\">\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Technician\n          </mat-panel-title>\n          <mat-panel-description>\n            <mat-icon>account_circle</mat-icon>\n            Create new account, default password is 12345678*\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <form [formGroup]=\"add_tech\" (submit)=\"addtechnician(add_tech.value)\">\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Username\" matInput formControlName=\"username\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"tel\" placeholder=\"Phone\" matInput formControlName=\"phone\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"email\" placeholder=\"Email\" matInput formControlName=\"email\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Staff ID\" matInput formControlName=\"staff_id\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Job Title\" matInput formControlName=\"title\">\n          </mat-form-field>\n\n          <button type=\"submit\" mat-button>Add Tech</button>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Username</th>\n          <th>Phone</th>\n          <th>Email</th>\n          <th>Staff ID</th>\n          <th>Title</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let tech of technicians\">\n          <td>{{tech.username}}</td>\n          <td>{{tech.phone}}</td>\n          <td>{{tech.email}}</td>\n          <td>{{tech.staff_id}}</td>\n          <td>{{tech.title}}</td>\n          <td>\n            <button mat-button (click)=\"viewStaffMember(tech._id, 'technician')\">View</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </mat-tab>\n  <mat-tab label=\"Managers\">\n\n      <mat-accordion>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Managers\n              </mat-panel-title>\n              <mat-panel-description>\n                <mat-icon>account_circle</mat-icon>\n                Create new manager, default password is 12345678*\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n    \n            <form [formGroup]=\"add_man\" (submit)=\"addmanager(add_man.value)\">\n              <mat-form-field>\n                <input type=\"text\" placeholder=\"Username\" matInput formControlName=\"username\">\n              </mat-form-field>\n    \n              <mat-form-field>\n                <input type=\"tel\" placeholder=\"Phone\" matInput formControlName=\"phone\">\n              </mat-form-field>\n    \n              <mat-form-field>\n                <input type=\"email\" placeholder=\"Email\" matInput formControlName=\"email\">\n              </mat-form-field>\n    \n              <mat-form-field>\n                <input type=\"text\" placeholder=\"Staff ID\" matInput formControlName=\"staff_id\">\n              </mat-form-field>\n    \n              <button type=\"submit\" mat-button>Add Manager</button>\n            </form>\n          </mat-expansion-panel>\n        </mat-accordion>\n    \n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Phone</th>\n              <th>Email</th>\n              <th>Staff ID</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let man of managers\">\n              <td>{{man.username}}</td>\n              <td>{{man.phone}}</td>\n              <td>{{man.email}}</td>\n              <td>{{man.staff_id}}</td>\n              <td>\n                <button mat-button (click)=\"viewStaffMember(man._id, 'manager')\">View</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffComponent = (function () {
    function StaffComponent(router, fb, snack, appdata) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.snack = snack;
        this.appdata = appdata;
        if (window.localStorage.getItem("username") == null) {
            this.router.navigate(["/dashlogin"]);
        }
        else {
            this.username = window.localStorage.getItem("username");
            this.add_technician = Boolean(window.localStorage.getItem("add_technician"));
            this.generate_report = Boolean(window.localStorage.getItem("generate_report"));
            this.view_clients = Boolean(window.localStorage.getItem("view_clients"));
        }
        this.add_tech = this.fb.group({
            "username": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(3)])],
            "phone": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(14)])],
            "email": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])],
            "staff_id": [null],
            "title": [null]
        });
        this.add_man = this.fb.group({
            "username": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(3)])],
            "phone": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(14)])],
            "email": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])],
            "staff_id": [null]
        });
        this.appdata.getTechnicians().subscribe(function (techs) {
            _this.technicians = techs.data;
        });
        this.appdata.getManagers().subscribe(function (mans) {
            _this.managers = mans.data;
        });
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent.prototype.logUserOut = function () {
        window.localStorage.clear();
        this.router.navigate(["/dashlogin"]);
    };
    StaffComponent.prototype.navigate = function (where) {
        switch (where) {
            case "orders":
                this.router.navigate(['/dashhome']);
                break;
            case "staff":
                this.router.navigate(['/staff']);
                break;
            case "stats":
                this.router.navigate(['/stats']);
                break;
            case "clients":
                this.router.navigate(['/clients']);
                break;
            default:
                this.router.navigate(['/dashhome']);
                break;
        }
    };
    StaffComponent.prototype.addtechnician = function (value) {
        var _this = this;
        if (!this.add_tech.valid) {
            this.snack.open("Invalid data", "dismiss", {
                duration: 3000,
                verticalPosition: "top"
            });
        }
        else {
            this.appdata.addTechnician(value.username, value.email, value.phone, value.staff_id, value.title).subscribe(function (response) {
                _this.technicians = response.data;
                _this.add_tech.reset();
                _this.snack.open(response.info.username + " has been added as a " + response.info.title, "dismiss", {
                    duration: 3000
                });
            });
        }
    };
    StaffComponent.prototype.addmanager = function (value) {
        var _this = this;
        if (!this.add_man.valid) {
            this.snack.open("Invalid data", "dismiss", {
                duration: 3000,
                verticalPosition: "top"
            });
        }
        else {
            this.appdata.addManager(value.username, value.email, value.phone, value.staff_id).subscribe(function (response) {
                _this.managers = response.data;
                _this.add_man.reset();
                _this.snack.open(response.info.username + " has been added as a " + response.info.title, "dismiss", {
                    duration: 3000
                });
            });
        }
    };
    StaffComponent.prototype.viewStaffMember = function (id, type) {
        this.appdata.setStaffId(id, type);
        this.router.navigate(['/staffdetail']);
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-staff',
        template: __webpack_require__("../../../../../src/app/staff/staff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/staff/staff.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__["b" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__["b" /* MatSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appdata_service__["a" /* AppdataService */]) === "function" && _d || Object])
], StaffComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/staffdetails/staffdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staffdetails/staffdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  {{username}}\n  <span class=\"space\"></span>\n  <button mat-button>{{email}}</button>\n  <button mat-button>Phone</button>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/staffdetails/staffdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appdata_service__ = __webpack_require__("../../../../../src/app/appdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffdetailsComponent = (function () {
    function StaffdetailsComponent(appdata, router) {
        var _this = this;
        this.appdata = appdata;
        this.router = router;
        this.appdata.currentStaffId.subscribe(function (id) {
            _this.id = id;
        });
    }
    StaffdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id == "") {
            this.router.navigate(['/staff']);
        }
        else {
            this.appdata.currentLevel.subscribe(function (level) {
                _this.appdata.viewStaff(_this.id, level).subscribe(function (userData) {
                    _this.username = userData.data.username;
                    _this.title = userData.data.title;
                    _this.staff_id = userData.data.staff_id;
                    _this.phone = userData.data.phone;
                    _this.last_login = userData.data.last_login;
                    _this.email = userData.data.email;
                    _this.account_created = userData.data.account_created;
                    _this.permissions = userData.data.permissions;
                });
            });
        }
    };
    return StaffdetailsComponent;
}());
StaffdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-staffdetails',
        template: __webpack_require__("../../../../../src/app/staffdetails/staffdetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/staffdetails/staffdetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appdata_service__["a" /* AppdataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StaffdetailsComponent);

var _a, _b;
//# sourceMappingURL=staffdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  stats works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-stats',
        template: __webpack_require__("../../../../../src/app/stats/stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stats/stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map