webpackJsonp([9],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_cart_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, cartservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartservice = cartservice;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var cart = this.cartservice.getCart();
        this.items = cart.items;
    };
    CartPage.prototype.removeItem = function (produto) {
        this.items = this.cartservice.removeProduto(produto).items;
    };
    CartPage.prototype.increaseQuantity = function (produto) {
        this.items = this.cartservice.increaseQuantity(produto).items;
    };
    CartPage.prototype.decreaseQuanty = function (produto) {
        this.items = this.cartservice.decreaseQuantity(produto).items;
    };
    CartPage.prototype.total = function () {
        return this.cartservice.total();
    };
    CartPage.prototype.goOn = function () {
        this.navCtrl.setRoot('CategoriasPage');
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push('PickAddressPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\temp\angular\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>    \n\n    <ion-title>Carinho de Compras</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      <ion-thumbnail item-start>\n\n        <img [src]="item.produto.imageUrl || \'assets/imgs/prod.jpg\'">\n\n      </ion-thumbnail>\n\n      <h2>{{item.produto.nome}}</h2>\n\n      <p>{{item.produto.preco | currency}}</p>\n\n      <ion-icon class="nolinebreak" name="md-remove-circle" color="primary" (click)="decreaseQuanty(item.produto)"></ion-icon>\n\n      <p class="nolinebreak">{{item.quantidade}}</p>\n\n      <ion-icon name="md-add-circle" color="primary" (click)="increaseQuantity(item.produto)"></ion-icon>\n\n      <ion-icon name="ios-trash" item-end color="danger" (click)="removeItem(item.produto)"></ion-icon>\n\n    </ion-item>\n\n    <ion-item *ngIf="total() > 0">\n\n      <h1>Total</h1>\n\n      <h1 item-end>{{total()}}</h1>\n\n    </ion-item>\n\n    <ion-item *ngIf="total() <= 0">\n\n      <h1>Seu carrinho está vazio</h1>\n\n    </ion-item>\n\n  </ion-list> \n\n  <button ion-button block (click)="goOn()">Continuar comprando</button>   \n\n  <button *ngIf="total() > 0" ion-button color="secondary" block (click)="checkout()">Finalizar pedido</button>   \n\n</ion-content>'/*ion-inline-end:"C:\temp\angular\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_cart_service__["a" /* CartService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=9.js.map