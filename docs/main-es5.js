(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ingreso-egreso/ingreso-egreso.module": [
		"./src/app/ingreso-egreso/ingreso-egreso.module.ts",
		"ingreso-egreso-ingreso-egreso-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-scroller\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n    <div class=\"row w-100\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 class=\"text-center mb-4\" style=\"color: white;\">Ingresar</h2>\n        <div class=\"auto-form-wrapper fix-w\">\n          <form (ngSubmit)=\"login(f.value)\" #f=\"ngForm\">\n            <div class=\"form-group\">\n              <label class=\"label\">Usuario</label>\n              <div class=\"input-group\">\n\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\"\n                      ngModel name=\"email\" required>\n\n                <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-check-circle\"></i>\n                      </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"label\">Contraseña</label>\n              <div class=\"input-group\">\n\n                <input type=\"password\" class=\"form-control\" placeholder=\"*********\"\n                       ngModel name=\"pass\" required>\n\n                <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-check-circle\"></i>\n                      </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button [disabled]=\"f.invalid\" class=\"btn btn-primary submit-btn btn-block\">\n                <i *ngIf=\"loading\" class=\"fa fa-spin fa-sync\"></i>\n                {{(loading) ? 'Espere' : 'Login'}}\n              </button>\n            </div>\n\n            <!--\n            <div class=\"text-block text-center my-3\">\n              <span class=\"text-small font-weight-semibold\">No estas registrado? </span>\n              <br>\n              <a routerLink=\"/register\" class=\"text-black text-small\">Crear una cuenta</a>\n            </div>\n            -->\n          </form>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n  <!-- content-wrapper ends -->\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth register-bg-1 theme-one\">\n    <div class=\"row w-100\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 class=\"text-center mb-4\">Registro</h2>\n        <div class=\"auto-form-wrapper fix-w\">\n          <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\"\n                       required ngModel name=\"name\">\n\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n\n                <input type=\"email\" class=\"form-control\" placeholder=\"Correo\"\n                       required ngModel name=\"email\">\n\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                       required ngModel name=\"password\">\n\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n\n              <button [disabled]=\"f.invalid\" class=\"btn btn-primary submit-btn btn-block\">\n                <i *ngIf=\"loading\" class=\"fa fa-spin fa-sync\"></i>\n                {{(loading) ? 'Espere' : 'Crear cuenta'}}\n              </button>\n\n            </div>\n            <div class=\"text-block text-center my-3\">\n              <span class=\"text-small font-weight-semibold\">ya tienes una cuenta?</span>\n              <br>\n              <a routerLink=\"/login\" class=\"text-black text-small\">Login</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- content-wrapper ends -->\n</div>\n<!-- page-body-wrapper ends -->\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");






var routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: '',
        loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'ingresoEgresoApp';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initListener();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





// Personalice modules

// NgRx



// Firebase


// Environments

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase, 'ingreso-egreso'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _ngrx_reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx/reducers/ui.reducer */ "./src/app/ngrx/reducers/ui.reducer.ts");
/* harmony import */ var _ngrx_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx/reducers/auth.reducer */ "./src/app/ngrx/reducers/auth.reducer.ts");


var appReducers = {
    ui: _ngrx_reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["UIReducer"],
    auth: _ngrx_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"]
};


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('ui')
            .subscribe(function (value) {
            return _this.loading = value.isLoading;
        });
    };
    LoginComponent.prototype.login = function (data) {
        this.authService.login(data.email, data.pass);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html")
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('ui')
            .subscribe(function (value) {
            return _this.loading = value.isLoading;
        });
    };
    /**
     * onSubmit
     *
     * @param data
     */
    RegisterComponent.prototype.onSubmit = function (data) {
        this.authService
            .registerUser(data.name, data.email, data.password);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(user) {
        this.id = user && user.id || null;
        this.name = user && user.name || null;
        this.email = user && user.email || null;
    }
    User.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/ngrx/actions/auth.action.ts":
/*!*********************************************!*\
  !*** ./src/app/ngrx/actions/auth.action.ts ***!
  \*********************************************/
/*! exports provided: SET_USER, CLEAR_DATA_USER, SetUserAction, ClearDataUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_DATA_USER", function() { return CLEAR_DATA_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserAction", function() { return SetUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearDataUserAction", function() { return ClearDataUserAction; });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");

var SET_USER = '[Auth] Set User';
var CLEAR_DATA_USER = '[Auth] Clear Data User';
var SetUserAction = /** @class */ (function () {
    function SetUserAction(user) {
        this.user = user;
        this.type = SET_USER;
    }
    SetUserAction.ctorParameters = function () { return [
        { type: _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"] }
    ]; };
    return SetUserAction;
}());

var ClearDataUserAction = /** @class */ (function () {
    function ClearDataUserAction() {
        this.type = CLEAR_DATA_USER;
    }
    return ClearDataUserAction;
}());



/***/ }),

/***/ "./src/app/ngrx/actions/ui.action.ts":
/*!*******************************************!*\
  !*** ./src/app/ngrx/actions/ui.action.ts ***!
  \*******************************************/
/*! exports provided: LOADING_UI, LOADED_UI, LoadingUIAction, LoadedUIAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_UI", function() { return LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_UI", function() { return LOADED_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingUIAction", function() { return LoadingUIAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedUIAction", function() { return LoadedUIAction; });
var LOADING_UI = '[UI] Loading';
var LOADED_UI = '[UI] Loaded';
var LoadingUIAction = /** @class */ (function () {
    function LoadingUIAction() {
        this.type = LOADING_UI;
    }
    return LoadingUIAction;
}());

var LoadedUIAction = /** @class */ (function () {
    function LoadedUIAction() {
        this.type = LOADED_UI;
    }
    return LoadedUIAction;
}());



/***/ }),

/***/ "./src/app/ngrx/reducers/auth.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/ngrx/reducers/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.action */ "./src/app/ngrx/actions/auth.action.ts");


var initState = {
    user: null
};
function authReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["SET_USER"]:
            return {
                user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.user)
            };
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["CLEAR_DATA_USER"]:
            return { user: null };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/ngrx/reducers/ui.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/ngrx/reducers/ui.reducer.ts ***!
  \*********************************************/
/*! exports provided: UIReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIReducer", function() { return UIReducer; });
/* harmony import */ var _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.action */ "./src/app/ngrx/actions/ui.action.ts");

var stageInit = {
    isLoading: false
};
function UIReducer(stage, action) {
    if (stage === void 0) { stage = stageInit; }
    switch (action.type) {
        case _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]:
            return { isLoading: true };
        case _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__["LOADED_UI"]:
            return { isLoading: false };
        default:
            return stage;
    }
}


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canLoad = function () {
        return this.authService.isAuth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ngrx/actions/ui.action */ "./src/app/ngrx/actions/ui.action.ts");
/* harmony import */ var _ngrx_actions_auth_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ngrx/actions/auth.action */ "./src/app/ngrx/actions/auth.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/* tslint:disable:no-trailing-whitespace */











var AuthService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param afAuth
     * @param afDB
     * @param router
     * @param store
     */
    function AuthService(afAuth, afDB, router, store) {
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.router = router;
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
    }
    /**
     * Init Listener
     */
    AuthService.prototype.initListener = function () {
        var _this = this;
        this.afAuth.auth
            .onAuthStateChanged(function (fbState) {
            if (fbState) {
                _this.subscription = _this.afDB.doc(fbState.uid + "/users")
                    .valueChanges()
                    .subscribe(function (userData) {
                    _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](userData);
                    _this.store.dispatch(new _ngrx_actions_auth_action__WEBPACK_IMPORTED_MODULE_10__["SetUserAction"](_this.user));
                });
            }
            else {
                _this.user = null;
                _this.subscription.unsubscribe();
            }
        });
    };
    /**
     * Get user
     */
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    /**
     * Is auth
     */
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            if (data == null) {
                _this.router.navigate(['/login']);
            }
            return data != null;
        }));
    };
    /**
     * Register user
     *
     * @param name
     * @param email
     * @param pass
     */
    AuthService.prototype.registerUser = function (name, email, pass) {
        var _this = this;
        this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadingUIAction"]());
        this.afAuth.auth
            .createUserWithEmailAndPassword(email, pass)
            .then(function (resp) {
            var user = {
                id: resp.user.uid, name: name, email: email
            };
            _this.afDB.doc(user.id + "/users")
                .set(user)
                .then(function () {
                _this.router.navigate(['/']);
                _this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadedUIAction"]());
            });
        })
            .catch(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error try to register user', err.message, 'error');
            _this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadedUIAction"]());
        });
    };
    /**
     * Login
     *
     * @param email
     * @param pass
     */
    AuthService.prototype.login = function (email, pass) {
        var _this = this;
        this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadingUIAction"]());
        this.afAuth.auth
            .signInWithEmailAndPassword(email, pass)
            .then(function (resp) {
            _this.router.navigate(['/']);
            _this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadedUIAction"]());
        })
            .catch(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error try to register user', err.message, 'error');
            _this.store.dispatch(new _ngrx_actions_ui_action__WEBPACK_IMPORTED_MODULE_9__["LoadedUIAction"]());
        });
    };
    /**
     * LogOut
     */
    AuthService.prototype.logOut = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function (resp) {
            _this.router.navigate(['/login']);
            _this.store.dispatch(new _ngrx_actions_auth_action__WEBPACK_IMPORTED_MODULE_10__["ClearDataUserAction"]());
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyBcbp6JzqqlYpwNlyelTRhpX3tTcv63KyA',
        authDomain: 'ingreso-egreso-a4a29.firebaseapp.com',
        databaseURL: 'https://ingreso-egreso-a4a29.firebaseio.com',
        projectId: 'ingreso-egreso-a4a29',
        storageBucket: 'ingreso-egreso-a4a29.appspot.com',
        messagingSenderId: '438320601529',
        appId: '1:438320601529:web:02601c9661a75622623e68'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rey/Projects/Developers/stocks_analitics/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map