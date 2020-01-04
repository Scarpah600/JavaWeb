webpackJsonp([6],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_confirmation__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderConfirmationPageModule = /** @class */ (function () {
    function OrderConfirmationPageModule() {
    }
    OrderConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_confirmation__["a" /* OrderConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_confirmation__["a" /* OrderConfirmationPage */]),
            ],
        })
    ], OrderConfirmationPageModule);
    return OrderConfirmationPageModule;
}());

//# sourceMappingURL=order-confirmation.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_cart_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_cliente_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_pedido_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderConfirmationPage = /** @class */ (function () {
    function OrderConfirmationPage(navCtrl, navParams, clienteService, cartService, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteService = clienteService;
        this.cartService = cartService;
        this.pedidoService = pedidoService;
        this.pedido = this.navParams.get('pedido');
    }
    OrderConfirmationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cartItems = this.cartService.getCart().items;
        this.clienteService.findById(this.pedido.cliente.id)
            .subscribe(function (response) {
            _this.cliente = response;
            _this.endereco = _this.findEndereco(_this.pedido.enderecoDeEntrega.id, response['enderecos']);
        }, function (error) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    OrderConfirmationPage.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; });
        return list[position];
    };
    OrderConfirmationPage.prototype.total = function () {
        return this.cartService.total();
    };
    OrderConfirmationPage.prototype.back = function () {
        this.navCtrl.setRoot('CartPage');
    };
    OrderConfirmationPage.prototype.home = function () {
        this.navCtrl.setRoot('CategoriasPage');
    };
    OrderConfirmationPage.prototype.checkout = function () {
        var _this = this;
        this.pedidoService.insert(this.pedido)
            .subscribe(function (response) {
            _this.cartService.createOrClearCart();
            _this.codpedido = _this.extractId(response.headers.get('location'));
        }, function (error) {
            if (error.status == 403) {
                _this.navCtrl.setRoot('HomePage');
            }
        });
    };
    OrderConfirmationPage.prototype.extractId = function (location) {
        var position = location.lastIndexOf('/');
        return location.substring(position + 1, location.length);
    };
    OrderConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-confirmation',template:/*ion-inline-start:"C:\temp\angular\src\pages\order-confirmation\order-confirmation.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>OrderConfirmation</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="codpedido">Pedido Registrado!</ion-title>\n\n    <ion-title *ngIf="!codpedido">Confira seu pedido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="!codpedido">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Itens do pedido\n\n      </ion-card-header>\n\n      \n\n      <ion-list>\n\n        <ion-item *ngFor="let item of cartItems">\n\n          <ion-thumbnail item-start>\n\n            <img [src]="item.produto.imageUrl || \'assets/imgs/prod.jpg\'">\n\n          </ion-thumbnail>\n\n          <h2>{{item.produto.nome}}</h2>\n\n          <p>{{item.produto.preco | currency}}</p>\n\n          <p class="nolinebreak">{{item.quantidade}}</p>\n\n          <p item-end>{{item.produto.preco * item.quantidade | currency}}</p>\n\n        </ion-item> \n\n\n\n        <ion-item>\n\n          <h2>Total</h2>\n\n          <h2 item-end>{{total() | currency}}</h2>\n\n        </ion-item>\n\n      </ion-list> \n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Cliente\n\n        </ion-card-header>\n\n        <ion-item>\n\n          <h2>{{cliente?.nome}}</h2>\n\n          <p>{{cliente?.email}}</p>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Endereço de entrega\n\n      </ion-card-header>\n\n    \n\n      <ion-item>\n\n        <h2>{{endereco?.logradouro}}, {{endereco?.numero}}</h2>\n\n        <p>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</p>\n\n        <p>{{endereco?.cidade.nome}}, {{endereco?.cidade.estado.nome}}</p>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Pagamento\n\n      </ion-card-header>\n\n    \n\n      <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComCartao\'">\n\n        <h3>Pagamento com cartão</h3>\n\n        <p>Parcelas: {{pedido.pagamento.numeroDeParcelas}}</p>\n\n      </ion-item>\n\n      <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComBoleto\'">\n\n        <h3>Pagamento com boleto</h3>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <button ion-button block (click)="checkout()">Confirmar pedido</button>\n\n    <button ion-button block outline (click)="back()">Voltar</button>\n\n  </div>\n\n\n\n  <div *ngIf="codpedido">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Seu pedido foi registrado!\n\n        </ion-card-header>\n\n        <ion-item>\n\n          <h2>Código do pedido: {{codpedido}}</h2>\n\n          <p>Verifique seu email</p>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <button ion-button block outline (click)="home()">Voltar</button>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\temp\angular\src\pages\order-confirmation\order-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_pedido_service__["a" /* PedidoService */]])
    ], OrderConfirmationPage);
    return OrderConfirmationPage;
}());

//# sourceMappingURL=order-confirmation.js.map

/***/ })

});
//# sourceMappingURL=6.js.map