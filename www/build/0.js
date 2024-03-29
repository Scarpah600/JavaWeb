webpackJsonp([0],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_domain_cidade_service__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_estado_service__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__app_services_domain_cidade_service__["a" /* CidadeService */],
                __WEBPACK_IMPORTED_MODULE_4__app_services_estado_service__["a" /* EstadoService */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CidadeService = /** @class */ (function () {
    function CidadeService(http) {
        this.http = http;
    }
    CidadeService.prototype.findAll = function (estado_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados/" + estado_id + "/cidades");
    };
    CidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CidadeService);
    return CidadeService;
}());

//# sourceMappingURL=cidade.service.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstadoService = /** @class */ (function () {
    function EstadoService(http) {
        this.http = http;
    }
    EstadoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados");
    };
    EstadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EstadoService);
    return EstadoService;
}());

//# sourceMappingURL=estado.service.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_domain_cidade_service__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_estado_service__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_cliente_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, cidadeservice, estadoservice, clienteservice, alertcontrol) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cidadeservice = cidadeservice;
        this.estadoservice = estadoservice;
        this.clienteservice = clienteservice;
        this.alertcontrol = alertcontrol;
        /*
NO CAMPO FORMGROUP COMO VOCE COLOCOU NO CLASSES DO JAVA DTO
VOCE PRECISA COLOCAR O NOME IGUAL ESTÁ NO CLASSE SE FOR DIFERENTE
PODE DAR ERRO DE INSERT OU UPDATE OU DELETE DE ACORDO COM
FORM GROUP
        */
        this.formGroup = this.formBuilder.group({
            nome: ['Felipe Scarpin', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            email: ['Felipe.scarpin@ti.com.br', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            tipo: ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cpfOuCnpj: ['74560528080', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(14)]],
            senha: ['123', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            logradouro: ['Rua TI', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            numero: ['12', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            complemento: ['Apto 3', []],
            bairro: ['Copacabana', []],
            cep: ['1082833', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone1: ['9917243521', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cidadeId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.estadoservice.findAll()
            .subscribe(function (response) {
            _this.estados = response;
            _this.formGroup.controls.estadoId.setValue(_this.estados[0].id);
            _this.updateCidades();
        }, function (error) { });
    };
    SignupPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertcontrol.create({
            title: 'Sucesso!',
            message: 'Cadastro efetuado com sucesso',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.clienteservice.insert(this.formGroup.value)
            .subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
    };
    SignupPage.prototype.updateCidades = function () {
        var _this = this;
        var estado_id = this.formGroup.value.estadoId;
        this.cidadeservice.findAll(estado_id)
            .subscribe(function (response) {
            _this.cidades = response;
            _this.formGroup.controls.cidadeId.setValue(null);
        }, function (error) { });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\temp\angular\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cadastro do Usuário</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup"(ngSubmit)="signupUser(); $event.preventDefault()">\n\n    <ion-item>\n\n      <ion-label stacke>Nome*</ion-label>\n\n      <ion-input formControlName="nome" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left>Valor Inválido</p>\n\n    <ion-item>\n\n\n\n      <ion-label stacke>Email*</ion-label>\n\n      <ion-input formControlName="email" type="text"></ion-input>\n\n    </ion-item>\n\n     <p class="danger" *ngIf="formGroup.controls.email.dirty && formGroup.controls.email.errors" margin-left>Valor Inválido</p>\n\n    <ion-list radio-group formControlName="tipo">\n\n\n\n      <ion-list-header>\n\n        Tipo do Cliente\n\n      </ion-list-header>\n\n     \n\n      <ion-item>\n\n        <ion-label stacke>Pessoa Física</ion-label>\n\n        <ion-radio checked="true" value="1"></ion-radio>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacke>Pessoa Juridica</ion-label>\n\n        <ion-radio value="2"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>CPF ou CNPJ</ion-label>\n\n      <ion-input formControlName="cpfOuCnpj" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.cpfOuCnpj.dirty && formGroup.controls.cpfOuCnpj.errors" margin-left>Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacke>Senha*</ion-label>\n\n      <ion-input formControlName="senha" type="password"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.senha.dirty && formGroup.controls.senha.errors" margin-left>Valor Inválido</p>\n\n    <ion-item>\n\n      <ion-label stacke>Logradouro*</ion-label>\n\n      <ion-input formControlName="logradouro" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.logradouro.dirty && formGroup.controls.logradouro.errors" margin-left>Valor Inválido</p>\n\n    <ion-item>\n\n      <ion-label stacke>Número*</ion-label>\n\n      <ion-input formControlName="numero" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.numero.dirty && formGroup.controls.numero.errors" margin-left>Valor Inválido</p>\n\n    <ion-item>\n\n      <ion-label stacke>Complemento</ion-label>\n\n      <ion-input formControlName="complemento" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacke>Bairro</ion-label>\n\n      <ion-input formControlName="bairro" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacke>CEP*</ion-label>\n\n      <ion-input formControlName="cep" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.cep.dirty && formGroup.controls.cep.errors" margin-left>Valor Inválido</p>\n\n\n\n\n\n\n\n    <ion-item>\n\n      <ion-label stacke>Telefone 1*</ion-label>\n\n      <ion-input formControlName="telefone1" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.telefone1.dirty && formGroup.controls.telefone1.errors" margin-left>Valor Inválido</p>\n\n\n\n   \n\n    <ion-item>\n\n      <ion-label stacke>Telefone 2</ion-label>\n\n      <ion-input formControlName="telefone2" type="text"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label stacke>Telefone 3</ion-label>\n\n      <ion-input formControlName="telefone3" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacke>Estado*</ion-label>\n\n      <ion-select formControlName="estadoId" (ionChange)="updateCidades()">\n\n        <ion-option *ngFor="let estado of estados; first as f "[value]="estado.id" [selected]="f">{{estado.nome}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacke>Cidade*</ion-label>\n\n      <ion-select formControlName="cidadeId">\n\n        <ion-option *ngFor="let cidade of cidades" [value]="cidade.id">{{cidade.nome}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Criar Conta</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\temp\angular\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_domain_cidade_service__["a" /* CidadeService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_estado_service__["a" /* EstadoService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map