webpackJsonp([7],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_menu_controller__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_domain_auth_service__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, auth, loadcontrol) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.auth = auth;
        this.loadcontrol = loadcontrol;
        this.creds = {
            email: "",
            senha: ""
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(true);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.refreshToken()
            .subscribe(function (response) {
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            _this.navCtrl.setRoot('CategoriasPage');
        }, function (error) { });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.auth.authenticate(this.creds)
            .subscribe(function (response) {
            loader.dismiss();
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            _this.navCtrl.setRoot('CategoriasPage');
        }, function (error) {
            loader.dismiss();
        });
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    HomePage.prototype.presentLoading = function () {
        var carregando = this.loadcontrol.create({
            content: "Carregando Página...",
            duration: 7000
        });
        carregando.present();
        return carregando;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\temp\angular\src\pages\home\home.html"*/'<ion-content padding class="home">\n\n\n\n\n\n  \n\n  <h3>Sistema de Pedido</h3>\n\n  <img src="assets/imgs/tela.png" alt="logo">\n\n  \n\n  <form>\n\n    <ion-item>\n\n      <ion-label stacked>E-mail</ion-label>\n\n      <ion-input [(ngModel)]="creds.email" name="email" type="text"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Senha</ion-label>\n\n      <ion-input [(ngModel)]="creds.senha" name="senha" type="password"> </ion-input>\n\n    </ion-item>\n\n   \n\n      <button ion-button block (click)="login()">Entrar</button>\n\n  </form>\n\n      <button ion-button block color="danger" (click)=signup()>Registrar</button>\n\n       \n\n</ion-content>\n\n'/*ion-inline-end:"C:\temp\angular\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_domain_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map