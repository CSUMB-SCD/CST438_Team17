(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <a href=\"http://localhost:4200/\">\r\n    <img src=\"assets/images/logo.png\" alt=\"Concert Tickets Logo\">\r\n  </a>\r\n  <div id=\"myButtons\">\r\n    <button mat-button routerLink=\"home\">Home</button>\r\n    <button mat-button routerLink=\"/concerts\">Concerts</button>\r\n    <button mat-button routerLink=\"/checkout\">Checkout</button>\r\n    <button mat-button routerLink=\"/signin\">Sign-In</button>\r\n  </div>\r\n\r\n</mat-toolbar>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  color: #fedc3d;\n  font-size: 30px;\n  padding: 15px 32px; }\n\nimg {\n  position: absolute;\n  left: 10px;\n  top: 0px; }\n\nmat-toolbar {\n  background-color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: XhrInterceptor, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_squaddata_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/squaddata.service */ "./src/app/services/squaddata.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_concerts_concerts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/concerts/concerts.component */ "./src/app/components/concerts/concerts.component.ts");
/* harmony import */ var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/thankyou/thankyou.component */ "./src/app/components/thankyou/thankyou.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'concerts', component: _components_concerts_concerts_component__WEBPACK_IMPORTED_MODULE_14__["ConcertsComponent"] },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"] },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_concerts_concerts_component__WEBPACK_IMPORTED_MODULE_14__["ConcertsComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"],
                _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_15__["ThankyouComponent"],
                _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: XhrInterceptor, multi: true }, _services_squaddata_service__WEBPACK_IMPORTED_MODULE_0__["SquaddataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.authenticated = false;
    }
    AppService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('user', { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <h1>Home Page</h1>\r\n</head>\r\n<h1>Checkout</h1>\r\n\r\n<form >\r\n\r\n</form>\r\n<br/> <br/>\r\n<div style=\"text-align:center\">\r\n  <img src=\"./../img/checkout3.png\" alt=\"Checkout Logo\" style=\"width:250px; height:100px\"/>\r\n</div>\r\n<br/> <br/> <br/>\r\n<table>\r\n\r\n    <th colspan=\"3\">Items in Cart</th>\r\n    <th colspan=\"2\">Amount of Items</th>\r\n\r\n  <tr *ngFor= \"let element of tick$\">\r\n    <td><img src=\"./img/generic-ticket2.png\" alt=\"Concert Logo\" style=\"width:250px; height:100px\"/>\r\n       {{ element.artist }}</td>\r\n\r\n      <td> {{ element.venue }} </td>\r\n      <td>{{ element.date }}</td>\r\n\r\n      <td>Amount of Tickets: <input size=\"1\" matInput placeholder=\"{{element.quantity}}\"> <br/> Price for each: {{element.price}}\r\n</td>\r\n  </tr>\r\n  </table>\r\n  <div id=\"button2\">\r\n    <span><button mat-button routerLink=\"/confirmation\">Confirm Purchase</button></span>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\ntd, th {\n  border: 1px solid #c2bcbc;\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #c7c6c6;\n  color: black; }\n\nbutton {\n  background-color: black;\n  color: #fedc3d; }\n\n#button2 {\n  display: flex;\n  justify-content: center; }\n\nspan {\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_squaddata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/squaddata.service */ "./src/app/services/squaddata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    // confirmCheckout() {
    // }
    function CheckoutComponent(squadService) {
        this.squadService = squadService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        // this.show = [this.title, this.venue, this.date];
        // this.tickets = [this.quantity, this.price];
        var _this = this;
        this.squadService.getSquad().subscribe(function (squadService) { return _this.tick$ = squadService; });
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/components/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_squaddata_service__WEBPACK_IMPORTED_MODULE_1__["SquaddataService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/concerts/concerts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/concerts/concerts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <h1>Concerts Page</h1>\r\n</head>\r\n\r\n<body>\r\n  <h1>Concerts</h1>\r\n  <div>\r\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\" gutterSize=\"25px\">\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 1</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 2</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 3</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n            <span>Price: </span><pre>  </pre>\r\n            <span>Amount:</span>\r\n            <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n            <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n            <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 4</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 5</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 6</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 7</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert 8</h1>\r\n        </mat-grid-tile-header>\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n          <span><button mat-button routerLink=\"/details\">Details</button></span>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/concerts/concerts.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/concerts/concerts.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nmat-grid-tile {\n  background: white; }\n\nmat-grid-tile-header {\n  justify-content: center; }\n\nmat-grid-tile-footer {\n  display: block;\n  font-size: 20px; }\n\n#head {\n  color: #fedc3d;\n  font-size: 20px; }\n\nbutton {\n  background-color: black;\n  color: #fedc3d; }\n\nspan {\n  padding: 20px; }\n\ndiv {\n  position: relative;\n  padding-left: 300px;\n  padding-right: 300px; }\n"

/***/ }),

/***/ "./src/app/components/concerts/concerts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/concerts/concerts.component.ts ***!
  \***********************************************************/
/*! exports provided: ConcertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertsComponent", function() { return ConcertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConcertsComponent = /** @class */ (function () {
    function ConcertsComponent() {
    }
    ConcertsComponent.prototype.ngOnInit = function () {
    };
    ConcertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-concerts',
            template: __webpack_require__(/*! ./concerts.component.html */ "./src/app/components/concerts/concerts.component.html"),
            styles: [__webpack_require__(/*! ./concerts.component.scss */ "./src/app/components/concerts/concerts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConcertsComponent);
    return ConcertsComponent;
}());



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Confirmation Page</h1>\r\n<br>\r\n<br>\r\n<h3>Your was completed!</h3>\r\n<h3>Enjoy your Concert</h3>\r\n<div>\r\n    <span><button mat-button routerLink=\"/confirmation\">Cancel Purchase</button></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nh3 {\n  text-align: center; }\n\nbutton {\n  background-color: red;\n  color: black; }\n\nspan {\n  padding: 20px; }\n\ndiv {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/components/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/components/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <h1>Details Page</h1>\r\n</head>\r\n\r\n<body>\r\n  <h1>Details</h1>\r\n  <div>\r\n    <mat-grid-list cols=\"1\" rowHeight=\"500px\">\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Concert</h1>\r\n        </mat-grid-tile-header>\r\n        <img src=\"../assets/images/testConcert.jpg\" alt=\"Test Concert\" width=\"650\" height=\"400\">\r\n        <mat-grid-tile-footer>\r\n          <span>Price: </span><pre>  </pre>\r\n          <span>Amount:</span>\r\n          <input size=\"1\" matInput placeholder=\"#\"><pre> </pre>\r\n          <span><button mat-button>Add to Cart</button></span><pre> </pre>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n  <div>\r\n    <h2>Concert Info:</h2>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nmat-grid-tile {\n  background: white; }\n\nmat-grid-tile-header {\n  justify-content: center; }\n\nmat-grid-tile-footer {\n  justify-content: center;\n  display: block;\n  font-size: 20px; }\n\n#head {\n  color: #fedc3d;\n  font-size: 20px; }\n\nbutton {\n  background-color: black;\n  color: #fedc3d; }\n\nspan {\n  padding: 20px; }\n\ndiv {\n  position: relative;\n  padding-left: 400px;\n  padding-right: 400px; }\n"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <h1>Home Page</h1>\r\n</head>\r\n\r\n<body>\r\n  <h1>Welcome to Concert Tickets!</h1>\r\n  <div id=\"concert\">\r\n    <mat-grid-list cols=\"1\" rowHeight=\"500px\">\r\n      <mat-grid-tile>\r\n        <mat-grid-tile-header>\r\n          <h1 id=\"head\">Random Concert</h1>\r\n        </mat-grid-tile-header>\r\n        <img src=\"../assets/images/testConcert.jpg\" alt=\"Test Concert\" width=\"650\" height=\"400\">\r\n        <mat-grid-tile-footer>\r\n          <h1 id=\"foot\">\r\n            <a routerLink=\"/concerts\">Checkout More Concerts!</a>\r\n          </h1>\r\n        </mat-grid-tile-footer>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: white; }\n\nbutton {\n  background-color: black;\n  color: #fedc3d; }\n\nmat-grid-tile-header {\n  justify-content: center;\n  background-color: black; }\n\nmat-grid-tile-footer {\n  justify-content: center; }\n\n#head {\n  color: #fedc3d;\n  font-size: 30px; }\n\n#foot {\n  color: black;\n  font-size: 20px; }\n\na:link {\n  color: black;\n  text-decoration: none; }\n\na:visited {\n  color: #fedc3d;\n  text-decoration: none; }\n\na:hover {\n  color: #fedc3d;\n  text-decoration: none; }\n\na:active {\n  color: black;\n  text-decoration: none; }\n\n#concert {\n  position: relative;\n  padding-left: 400px;\n  padding-right: 400px; }\n\nh1 {\n  text-align: center; }\n\nimg {\n  max-width: 100%; }\n\n.container {\n  height: 100%;\n  overflow: hidden; }\n\n.img-container {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  height: auto !important;\n  background-size: cover;\n  background-position: center;\n  will-change: opacity;\n  transition: opacity .3s;\n  cursor: pointer; }\n\n.slide-button:hover, .slide-button-select {\n  width: 64px !important;\n  background-color: white !important;\n  pointer-events: none;\n  transition: background-color 0.4s, width 4s cubic-bezier(0.19, 1, 0.22, 1) !important; }\n\n.slide-button {\n  width: 30px;\n  height: 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  position: absolute; }\n\n.slider {\n  position: absolute;\n  top: 50%;\n  right: 80px;\n  opacity: 1;\n  min-width: 30px; }\n\n.slide-button-parent-container {\n  position: relative;\n  margin: 22px 0;\n  min-height: 4px; }\n\n.select-box {\n  min-height: 10px; }\n\n.text-container {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.page-text {\n  min-height: 373px;\n  width: 50%;\n  height: 100%;\n  opacity: 0;\n  font-weight: 300;\n  font-size: 90px;\n  color: white; }\n\n.selected {\n  opacity: 1;\n  transition: 1s; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/siginin.ts":
/*!**********************************************!*\
  !*** ./src/app/components/signin/siginin.ts ***!
  \**********************************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    return SignIn;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\r\n\t<h2 class=\"form-signin-heading\">Please sign in</h2>\r\n\t<label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n\t   <input name=\"email\" [(ngModel)] = \"user.username\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n\t   <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\t   <input name=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n\t   <div class=\"checkbox\">\r\n\t\t <label>\r\n\t\t   <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n\t\t </label>\r\n\t   </div>\r\n   <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login();\" type=\"button\">Sign in</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _siginin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siginin */ "./src/app/components/signin/siginin.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.service */ "./src/app/components/signin/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(signIn) {
        this.signIn = signIn;
        this.user = new _siginin__WEBPACK_IMPORTED_MODULE_0__["SignIn"]();
    }
    SigninComponent.prototype.login = function () {
        if (this.user.username) {
            this.signIn.login(this.user.username).subscribe(function (result) {
                console.log('result is ', result);
            }, function (error) {
                console.log('error is ', error);
            });
        }
        else {
            alert('enter user name and password');
        }
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            providers: [_signin_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]]
        }),
        __metadata("design:paramtypes", [_signin_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/signin/signin.service.ts ***!
  \*****************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/allUsers';
    }
    SignInService.prototype.login = function (username) {
        return this.http.get(this.baseUrl + "/" + username);
    };
    SignInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/components/thankyou/thankyou.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/thankyou/thankyou.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  thankyou works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/thankyou/thankyou.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/thankyou/thankyou.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/thankyou/thankyou.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/thankyou/thankyou.component.ts ***!
  \***********************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent() {
    }
    ThankyouComponent.prototype.ngOnInit = function () {
    };
    ThankyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/components/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.scss */ "./src/app/components/thankyou/thankyou.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/app/services/squaddata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/squaddata.service.ts ***!
  \***********************************************/
/*! exports provided: SquaddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquaddataService", function() { return SquaddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SquaddataService = /** @class */ (function () {
    function SquaddataService(httpClient) {
        this.httpClient = httpClient;
        console.log('squad is working');
        this.URL = '';
    }
    SquaddataService.prototype.getSquad = function () {
        return this.httpClient.get('https://api.myjson.com/bins/14g5si');
    };
    SquaddataService.prototype.getUsers = function () {
        return this.httpClient.get('https://api.myjson.com/bins/6wu7m');
    };
    SquaddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SquaddataService);
    return SquaddataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Austin\Documents\GitHub\CST438_Team17\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map