webpackJsonp([4],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPageModule", function() { return PickAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_address__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PickAddressPageModule = /** @class */ (function () {
    function PickAddressPageModule() {
    }
    PickAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */]),
            ],
        })
    ], PickAddressPageModule);
    return PickAddressPageModule;
}());

//# sourceMappingURL=pick-address.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_storage_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_cliente_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_cart_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickAddressPage = /** @class */ (function () {
    function PickAddressPage(navCtrl, navParams, storage, clienteService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.clienteService = clienteService;
        this.cartService = cartService;
    }
    PickAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.clienteService.findByEmail(localUser.email)
                .subscribe(function (response) {
                //FAZER UM CAST SE TIRAR A TIPAGEM ELE VAI TRAZER OBJETO COMPLETO DO CLIENTE
                var cart = _this.cartService.getCart();
                _this.items = response['enderecos'];
                _this.pedido = {
                    cliente: { id: response['id'] },
                    enderecoDeEntrega: null,
                    pagamento: null,
                    items: cart.items.map(function (x) { return { quantidade: x.quantidade, produto: { id: x.produto.id } }; })
                };
            }, function (error) {
                if (error.status = 403) {
                    _this.navCtrl.setRoot('HomePage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('HomePage');
        }
    };
    PickAddressPage.prototype.nextPage = function (item) {
        this.pedido.enderecoDeEntrega = { id: item.id };
        this.navCtrl.push('PaymentPage', { pedido: this.pedido });
    };
    PickAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pick-address',template:/*ion-inline-start:"C:\temp\angular\src\pages\pick-address\pick-address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fechamento de Pedido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-list-header>\n\n    Selecione um endereço\n\n  </ion-list-header>\n\n  <button ion-item *ngFor="let item of items" (click)="nextPage(item)">\n\n    <h2>{{item.logradouro}}, {{item.numero}}</h2>\n\n    <p>{{item.complemtno}}, {{item.bairro}} CEP {{item.cep}}</p>\n\n    <p>{{item.cidade.nome}}, {{item.cidade.estado.nome}}</p>\n\n  </button>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\temp\angular\src\pages\pick-address\pick-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_cart_service__["a" /* CartService */]])
    ], PickAddressPage);
    return PickAddressPage;
}());

//# sourceMappingURL=pick-address.js.map

/***/ })

});
//# sourceMappingURL=4.js.map