(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cm-search-component (valueChanged)=\"onSearch($event)\"></cm-search-component>\n\n<ng-container *ngIf=\"comments$ | async as comments; else noData\">\n  <ng-container *ngIf=\"comments.length; then content; else noComments\">\n  </ng-container>\n\n  <ng-template #content>\n    <cm-comments [comments]=\"comments\"></cm-comments>\n  </ng-template>\n\n  <ng-template #noComments>\n    <p class=\"comments-message\">\n      No comments\n    </p>\n  </ng-template>\n</ng-container>\n\n<ng-template #noData>\n  <p class=\"comments-message\">\n    <ng-container\n      *ngIf=\"loadingError; then loadedError; else loading\"\n    ></ng-container>\n\n    <ng-template #loadedError>\n      error on getting comments\n    </ng-template>\n\n    <ng-template #loading>\n      loading...\n    </ng-template>\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/features/search-component/search-component.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/features/search-component/search-component.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search-input\">\n  <input matInput [placeholder]=\"placeholder\" [formControl]=\"formControl\" />\n</mat-form-field>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/comments/comments.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/comments/comments.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"comment-card\" *ngFor=\"let comment of comments\">\n  <div class=\"comment-header\">\n    {{ comment.text }}\n\n    <button\n      mat-button\n      class=\"comment-button\"\n      color=\"primary\"\n      (click)=\"onRemove(comment.id)\"\n    >\n      delete\n    </button>\n  </div>\n\n  <cm-comments\n    *ngIf=\"comment.comments.length\"\n    [comments]=\"comment.comments\"\n  ></cm-comments>\n\n  <cm-comment-form (submitted)=\"onSubmit($event, comment.id)\"></cm-comment-form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/comments/shared/comment-form/comment-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/comments/shared/comment-form/comment-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"comment-form full-width\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"full-width\">\n    <textarea\n      matInput\n      placeholder=\"Leave a comment\"\n      [formControl]=\"form.get(formKeys.text)\"\n    ></textarea>\n  </mat-form-field>\n\n  <button\n    mat-flat-button\n    color=\"primary\"\n    class=\"comment-submit\"\n    [disabled]=\"invalid\"\n  >\n    submit\n  </button>\n</form>\n"

/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-message {\n  text-align: center;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1dlYnN0b3JtUHJvamVjdHMvY29tbWVudHMtYXBwL2NvbW1lbnRzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRzLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuIiwiLmNvbW1lbnRzLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _pages_comments_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/comments/services */ "./src/app/pages/comments/services/index.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/helpers */ "./src/app/shared/helpers/index.ts");






let AppComponent = class AppComponent {
    constructor(commentsService) {
        this.commentsService = commentsService;
        this.loadingError = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchValue = '';
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngOnInit() {
        this.comments$ = this.commentsService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => (this.loadingError = !res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => (this.searchValue ? Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["search"])(res, this.searchValue) : res)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["repeatWhen"])(() => this.reload$));
        this.commentsService.added
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(value => this.onAddComment(value));
        this.commentsService.removed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(value => this.onRemoveComment(value));
    }
    onSearch(value) {
        this.searchValue = value;
        this.onDataOutdated();
    }
    onAddComment(value) {
        this.commentsService
            .add(value.text, value.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(() => this.onDataOutdated());
    }
    onDataOutdated() {
        this.reload$.next();
    }
    onRemoveComment(id) {
        this.commentsService
            .remove(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(() => this.onDataOutdated());
    }
};
AppComponent.ctorParameters = () => [
    { type: _pages_comments_services__WEBPACK_IMPORTED_MODULE_4__["CommentsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        viewProviders: [_pages_comments_services__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_features_features_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/features/features.module */ "./src/app/core/features/features.module.ts");
/* harmony import */ var _pages_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/comments */ "./src/app/pages/comments/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _pages_comments__WEBPACK_IMPORTED_MODULE_7__["CommentsModule"],
            _core_features_features_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards */ "./src/app/core/guards/index.ts");
/* harmony import */ var _mocks_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mocks/mock.service */ "./src/app/core/mocks/mock.service.ts");







let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_guards__WEBPACK_IMPORTED_MODULE_5__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_mocks_mock_service__WEBPACK_IMPORTED_MODULE_6__["MockService"], {
                passThruUnknownUrl: true,
                host: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host,
            }),
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])())
], CoreModule);



/***/ }),

/***/ "./src/app/core/features/features.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/features/features.module.ts ***!
  \**************************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/app/core/features/modules.ts");



let FeaturesModule = class FeaturesModule {
};
FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_modules__WEBPACK_IMPORTED_MODULE_2__["modules"]],
        exports: [_modules__WEBPACK_IMPORTED_MODULE_2__["modules"]],
    })
], FeaturesModule);



/***/ }),

/***/ "./src/app/core/features/modules.ts":
/*!******************************************!*\
  !*** ./src/app/core/features/modules.ts ***!
  \******************************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _search_component_search_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-component/search-component.module */ "./src/app/core/features/search-component/search-component.module.ts");

const modules = [_search_component_search_component_module__WEBPACK_IMPORTED_MODULE_0__["SearchComponentModule"]];


/***/ }),

/***/ "./src/app/core/features/search-component/search-component.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/features/search-component/search-component.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 24px;\n}\n\n.search-input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1dlYnN0b3JtUHJvamVjdHMvY29tbWVudHMtYXBwL2NvbW1lbnRzLWFwcC9zcmMvYXBwL2NvcmUvZmVhdHVyZXMvc2VhcmNoLWNvbXBvbmVudC9zZWFyY2gtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2ZlYXR1cmVzL3NlYXJjaC1jb21wb25lbnQvc2VhcmNoLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBSGlCO0FDRW5COztBREdBO0VBQ0UsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mZWF0dXJlcy9zZWFyY2gtY29tcG9uZW50L3NlYXJjaC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkeC1sYXJnZS1ncmlkLWdhcDogMjRweDtcblxuOmhvc3Qge1xuICBwYWRkaW5nOiAkeC1sYXJnZS1ncmlkLWdhcDtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/features/search-component/search-component.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/features/search-component/search-component.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponentComponent", function() { return SearchComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/core/features/search-component/services/index.ts");





let SearchComponentComponent = class SearchComponentComponent {
    constructor(controlService) {
        this.controlService = controlService;
        this.placeholder = 'search';
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get formControl() {
        return this.controlService.control;
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngOnInit() {
        this.controlService.buildControl(this.control);
        this.doOnSearchValueChanges();
    }
    doOnSearchValueChanges() {
        this.formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            this.valueChanged.emit(value);
        });
    }
};
SearchComponentComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ControlService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponentComponent.prototype, "control", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponentComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponentComponent.prototype, "valueChanged", void 0);
SearchComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-search-component',
        template: __webpack_require__(/*! raw-loader!./search-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/features/search-component/search-component.component.html"),
        viewProviders: [_services__WEBPACK_IMPORTED_MODULE_4__["ControlService"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./search-component.component.scss */ "./src/app/core/features/search-component/search-component.component.scss")]
    })
], SearchComponentComponent);



/***/ }),

/***/ "./src/app/core/features/search-component/search-component.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/features/search-component/search-component.module.ts ***!
  \***************************************************************************/
/*! exports provided: SearchComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponentModule", function() { return SearchComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-component.component */ "./src/app/core/features/search-component/search-component.component.ts");




let SearchComponentModule = class SearchComponentModule {
};
SearchComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_component_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponentComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_search_component_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponentComponent"]],
    })
], SearchComponentModule);



/***/ }),

/***/ "./src/app/core/features/search-component/services/control.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/features/search-component/services/control.service.ts ***!
  \****************************************************************************/
/*! exports provided: ControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlService", function() { return ControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ControlService = class ControlService {
    constructor() {
        this.defaultValue = '';
    }
    get control() {
        return this._control;
    }
    buildControl(control) {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
            this._control = control;
        }
        else {
            this._control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultValue);
        }
    }
};
ControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ControlService);



/***/ }),

/***/ "./src/app/core/features/search-component/services/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/features/search-component/services/index.ts ***!
  \******************************************************************/
/*! exports provided: ControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.service */ "./src/app/core/features/search-component/services/control.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlService", function() { return _control_service__WEBPACK_IMPORTED_MODULE_0__["ControlService"]; });




/***/ }),

/***/ "./src/app/core/guards/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/guards/index.ts ***!
  \**************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-guard */ "./src/app/core/guards/module-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_guard__WEBPACK_IMPORTED_MODULE_0__["throwIfAlreadyLoaded"]; });




/***/ }),

/***/ "./src/app/core/guards/module-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/guards/module-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/mocks/constants/comments.ts":
/*!**************************************************!*\
  !*** ./src/app/core/mocks/constants/comments.ts ***!
  \**************************************************/
/*! exports provided: commentsMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsMock", function() { return commentsMock; });
const commentsMock = [
    {
        id: 1,
        text: 'comment 1.1',
        comments: [
            {
                id: 11,
                text: 'comment 2.1',
                comments: [],
            },
        ],
    },
    {
        id: 2,
        text: 'comment 1.2',
        comments: [
            {
                id: 22,
                text: 'comment 2.2',
                comments: [
                    {
                        id: 23,
                        text: 'comment 3.1',
                        comments: [
                            {
                                id: 24,
                                text: 'comment 4.1',
                                comments: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        text: 'comment 1.3',
        comments: [
            {
                id: 31,
                text: 'comment 2.3',
                comments: [],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/core/mocks/constants/id-index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/mocks/constants/id-index.ts ***!
  \**************************************************/
/*! exports provided: idIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idIndex", function() { return idIndex; });
// always the same, coz see types of "url" below in method createEscapedPath
const idIndex = 1;


/***/ }),

/***/ "./src/app/core/mocks/constants/index.ts":
/*!***********************************************!*\
  !*** ./src/app/core/mocks/constants/index.ts ***!
  \***********************************************/
/*! exports provided: commentsMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments */ "./src/app/core/mocks/constants/comments.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentsMock", function() { return _comments__WEBPACK_IMPORTED_MODULE_0__["commentsMock"]; });




/***/ }),

/***/ "./src/app/core/mocks/constants/request-bindings.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/mocks/constants/request-bindings.ts ***!
  \**********************************************************/
/*! exports provided: requestBindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBindings", function() { return requestBindings; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/app/core/mocks/enums/index.ts");
/* harmony import */ var _helpers_create_escaped_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-escaped-path */ "./src/app/core/mocks/helpers/create-escaped-path.ts");


const requestBindings = [
    {
        path: Object(_helpers_create_escaped_path__WEBPACK_IMPORTED_MODULE_1__["createEscapedPath"])(_enums__WEBPACK_IMPORTED_MODULE_0__["ApiUrl"].comments),
        collectionName: _enums__WEBPACK_IMPORTED_MODULE_0__["CollectionName"].comments,
    },
];


/***/ }),

/***/ "./src/app/core/mocks/enums/api-url.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/core/mocks/enums/api-url.enum.ts ***!
  \**************************************************/
/*! exports provided: ApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
var ApiUrl;
(function (ApiUrl) {
    ApiUrl["comments"] = "/comments";
})(ApiUrl || (ApiUrl = {}));


/***/ }),

/***/ "./src/app/core/mocks/enums/collection-name.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/mocks/enums/collection-name.enum.ts ***!
  \**********************************************************/
/*! exports provided: CollectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionName", function() { return CollectionName; });
var CollectionName;
(function (CollectionName) {
    CollectionName["comments"] = "comments";
})(CollectionName || (CollectionName = {}));


/***/ }),

/***/ "./src/app/core/mocks/enums/index.ts":
/*!*******************************************!*\
  !*** ./src/app/core/mocks/enums/index.ts ***!
  \*******************************************/
/*! exports provided: CollectionName, ApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection_name_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-name.enum */ "./src/app/core/mocks/enums/collection-name.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionName", function() { return _collection_name_enum__WEBPACK_IMPORTED_MODULE_0__["CollectionName"]; });

/* harmony import */ var _api_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-url.enum */ "./src/app/core/mocks/enums/api-url.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return _api_url_enum__WEBPACK_IMPORTED_MODULE_1__["ApiUrl"]; });





/***/ }),

/***/ "./src/app/core/mocks/helpers/create-escaped-path.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/mocks/helpers/create-escaped-path.ts ***!
  \***********************************************************/
/*! exports provided: createEscapedPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEscapedPath", function() { return createEscapedPath; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants_id_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/id-index */ "./src/app/core/mocks/constants/id-index.ts");



const id = {
    ["id" /* id */]: `[0-9]+`,
    ["ref" /* ref */]: `[a-fA-F0-9]{8}\-(?:[a-fA-F0-9]{4}\-){3}[a-fA-F0-9]{12}`,
};
function createEscapedPath(url, withQueryParams = false) {
    const queryParams = withQueryParams ? '(?:\\?.*)?' : '';
    let escapedUrl;
    if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["isArray"])(url)) {
        escapedUrl = url
            .map((u, i) => i === _constants_id_index__WEBPACK_IMPORTED_MODULE_2__["idIndex"] ? `/(${id[u]})` : Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(u))
            .join('');
    }
    else {
        escapedUrl = url;
    }
    return new RegExp(`^${Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiPath)}${escapedUrl}${queryParams}$`);
}


/***/ }),

/***/ "./src/app/core/mocks/helpers/finish-options.ts":
/*!******************************************************!*\
  !*** ./src/app/core/mocks/helpers/finish-options.ts ***!
  \******************************************************/
/*! exports provided: finishOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishOptions", function() { return finishOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");



function finishOptions(options, { headers, url }) {
    if (options.status) {
        options.statusText = Object(angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["getStatusText"])(options.status);
    }
    if (headers) {
        options.headers = headers;
    }
    if (url) {
        options.url = url;
    }
    if (options.status !== angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OK) {
        let error;
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(options.body) &&
            {}.hasOwnProperty.call(options.body, 'error')) {
            error = {
                message: options.body.error,
                code: options.status ? options.status.toString() : '',
            };
        }
        else {
            error = options.body;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]({
            status: options.status,
            statusText: options.statusText,
            url: options.url,
            error,
            headers: options.headers,
        });
    }
    return options;
}


/***/ }),

/***/ "./src/app/core/mocks/helpers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/mocks/helpers/index.ts ***!
  \*********************************************/
/*! exports provided: parseRequestUrl, responseInterceptor, finishOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_request_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-request-url */ "./src/app/core/mocks/helpers/parse-request-url.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRequestUrl", function() { return _parse_request_url__WEBPACK_IMPORTED_MODULE_0__["parseRequestUrl"]; });

/* harmony import */ var _response_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-interceptor */ "./src/app/core/mocks/helpers/response-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responseInterceptor", function() { return _response_interceptor__WEBPACK_IMPORTED_MODULE_1__["responseInterceptor"]; });

/* harmony import */ var _finish_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finish-options */ "./src/app/core/mocks/helpers/finish-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finishOptions", function() { return _finish_options__WEBPACK_IMPORTED_MODULE_2__["finishOptions"]; });






/***/ }),

/***/ "./src/app/core/mocks/helpers/parse-request-url.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/mocks/helpers/parse-request-url.ts ***!
  \*********************************************************/
/*! exports provided: parseRequestUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRequestUrl", function() { return parseRequestUrl; });
/* harmony import */ var _constants_id_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/id-index */ "./src/app/core/mocks/constants/id-index.ts");
/* harmony import */ var _constants_request_bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/request-bindings */ "./src/app/core/mocks/constants/request-bindings.ts");


function parseRequestUrl(url, utils) {
    let request = {
        apiBase: '',
        collectionName: '',
        id: '',
        query: new Map(),
        resourceUrl: '',
    };
    const parsed = utils.parseRequestUrl(url);
    _constants_request_bindings__WEBPACK_IMPORTED_MODULE_1__["requestBindings"].forEach(r => {
        const matchResult = url.match(r.path);
        if (matchResult) {
            request = Object.assign({}, parsed);
            request.collectionName = r.collectionName;
            request.id = matchResult[_constants_id_index__WEBPACK_IMPORTED_MODULE_0__["idIndex"]];
        }
    });
    return request;
}


/***/ }),

/***/ "./src/app/core/mocks/helpers/response-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/mocks/helpers/response-interceptor.ts ***!
  \************************************************************/
/*! exports provided: responseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseInterceptor", function() { return responseInterceptor; });
/* harmony import */ var _finish_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finish-options */ "./src/app/core/mocks/helpers/finish-options.ts");

function responseInterceptor(resOptions, reqInfo) {
    return Object(_finish_options__WEBPACK_IMPORTED_MODULE_0__["finishOptions"])(resOptions, reqInfo);
}


/***/ }),

/***/ "./src/app/core/mocks/methods/comment.delete.ts":
/*!******************************************************!*\
  !*** ./src/app/core/mocks/methods/comment.delete.ts ***!
  \******************************************************/
/*! exports provided: commentDeleteMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentDeleteMethod", function() { return commentDeleteMethod; });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/app/core/mocks/enums/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/core/mocks/helpers/index.ts");



function commentDeleteMethod(reqInfo) {
    return reqInfo.utils.createResponse$(() => {
        const db = reqInfo.utils.getDb();
        const comments = db[_enums__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].comments];
        const body = reqInfo.utils.getJsonBody(reqInfo.req);
        // @ts-ignore
        db[_enums__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].comments] = comments.filter(function f(o) {
            if (o.id === body.id) {
                return false;
            }
            return (o.comments = o.comments.filter(f));
        });
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["finishOptions"])({
            status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK,
        }, reqInfo);
    });
}


/***/ }),

/***/ "./src/app/core/mocks/methods/comment.post.ts":
/*!****************************************************!*\
  !*** ./src/app/core/mocks/methods/comment.post.ts ***!
  \****************************************************/
/*! exports provided: commentPostMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentPostMethod", function() { return commentPostMethod; });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/app/core/mocks/enums/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/core/mocks/helpers/index.ts");



function commentPostMethod(reqInfo) {
    const db = reqInfo.utils.getDb();
    const comments = db[_enums__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].comments];
    const body = reqInfo.utils.getJsonBody(reqInfo.req);
    // @ts-ignore
    db[_enums__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].comments] = comments.filter(function f(o) {
        if (o.id === body.id) {
            const newId = o.id + 1;
            o.comments.push({ id: newId, text: body.text, comments: [] });
            return true;
        }
        return (o.comments = o.comments.filter(f));
    });
    return reqInfo.utils.createResponse$(() => {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["finishOptions"])({
            status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK,
        }, reqInfo);
    });
}


/***/ }),

/***/ "./src/app/core/mocks/methods/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/mocks/methods/index.ts ***!
  \*********************************************/
/*! exports provided: commentDeleteMethod, commentPostMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.delete */ "./src/app/core/mocks/methods/comment.delete.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentDeleteMethod", function() { return _comment_delete__WEBPACK_IMPORTED_MODULE_0__["commentDeleteMethod"]; });

/* harmony import */ var _comment_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.post */ "./src/app/core/mocks/methods/comment.post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentPostMethod", function() { return _comment_post__WEBPACK_IMPORTED_MODULE_1__["commentPostMethod"]; });





/***/ }),

/***/ "./src/app/core/mocks/mock.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/mocks/mock.service.ts ***!
  \********************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/core/mocks/constants/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ "./src/app/core/mocks/enums/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/app/core/mocks/helpers/index.ts");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods */ "./src/app/core/mocks/methods/index.ts");







let MockService = class MockService {
    constructor() {
        this.parseRequestUrl = _helpers__WEBPACK_IMPORTED_MODULE_5__["parseRequestUrl"];
        this.responseInterceptor = _helpers__WEBPACK_IMPORTED_MODULE_5__["responseInterceptor"];
    }
    createDb(reqInfo) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            [_enums__WEBPACK_IMPORTED_MODULE_4__["CollectionName"].comments]: _constants__WEBPACK_IMPORTED_MODULE_3__["commentsMock"],
        });
    }
    delete(reqInfo) {
        if (!reqInfo.collection) {
            return null;
        }
        // tslint:disable-next-line:no-small-switch
        switch (reqInfo.collectionName) {
            case _enums__WEBPACK_IMPORTED_MODULE_4__["CollectionName"].comments: {
                return Object(_methods__WEBPACK_IMPORTED_MODULE_6__["commentDeleteMethod"])(reqInfo);
            }
            default: {
                return null;
            }
        }
    }
    post(reqInfo) {
        if (!reqInfo.collection) {
            return null;
        }
        // tslint:disable-next-line:no-small-switch
        switch (reqInfo.collectionName) {
            case _enums__WEBPACK_IMPORTED_MODULE_4__["CollectionName"].comments: {
                return Object(_methods__WEBPACK_IMPORTED_MODULE_6__["commentPostMethod"])(reqInfo);
            }
            default: {
                return null;
            }
        }
    }
};
MockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MockService);



/***/ }),

/***/ "./src/app/pages/comments/comments.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/comments/comments.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 16px 0 16px 16px;\n}\n\n.comment-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.comment-text {\n  padding: 16px;\n}\n\n.comment-card {\n  margin: 16px 0 16px 16px;\n  padding: 16px 0 16px 16px;\n}\n\n.comment-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1dlYnN0b3JtUHJvamVjdHMvY29tbWVudHMtYXBwL2NvbW1lbnRzLWFwcC9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFmZTtBQ2FqQjs7QURLQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLDBCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR4LWxhcmdlLWdyaWQtZ2FwOiAyNHB4O1xuJGxhcmdlLWdyaWQtZ2FwOiAxNnB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6ICRsYXJnZS1ncmlkLWdhcCAwICRsYXJnZS1ncmlkLWdhcCAkbGFyZ2UtZ3JpZC1nYXA7XG59XG5cbi5jb21tZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uY29tbWVudC10ZXh0IHtcbiAgcGFkZGluZzogJGxhcmdlLWdyaWQtZ2FwO1xufVxuXG4uY29tbWVudC1jYXJkIHtcbiAgbWFyZ2luOiAkbGFyZ2UtZ3JpZC1nYXAgMCAkbGFyZ2UtZ3JpZC1nYXAgJGxhcmdlLWdyaWQtZ2FwO1xuICBwYWRkaW5nOiAkbGFyZ2UtZ3JpZC1nYXAgMCAkbGFyZ2UtZ3JpZC1nYXAgJGxhcmdlLWdyaWQtZ2FwO1xufVxuXG4uY29tbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweCAwIDE2cHggMTZweDtcbn1cblxuLmNvbW1lbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uY29tbWVudC1jYXJkIHtcbiAgbWFyZ2luOiAxNnB4IDAgMTZweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDAgMTZweCAxNnB4O1xufVxuXG4uY29tbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/comments/comments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/comments/comments.component.ts ***!
  \******************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/pages/comments/services/index.ts");



let CommentsComponent = class CommentsComponent {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    onRemove(id) {
        this.commentsService.removed.next(id);
    }
    onSubmit(formValue, id) {
        this.commentsService.added.next({ text: formValue.text, id });
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsComponent.prototype, "comments", void 0);
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-comments',
        template: __webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/comments/comments.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/pages/comments/comments.component.scss")]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/pages/comments/comments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.component */ "./src/app/pages/comments/comments.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/pages/comments/shared/index.ts");





let CommentsModule = class CommentsModule {
};
CommentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["shared"]],
        exports: [_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"]],
    })
], CommentsModule);



/***/ }),

/***/ "./src/app/pages/comments/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/comments/index.ts ***!
  \*****************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.module */ "./src/app/pages/comments/comments.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return _comments_module__WEBPACK_IMPORTED_MODULE_0__["CommentsModule"]; });




/***/ }),

/***/ "./src/app/pages/comments/models/comment.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/comments/models/comment.ts ***!
  \**************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
    constructor(obj) {
        this.text = obj.text;
        this.comments = obj.comments;
        this.id = obj.id;
    }
    static fromBackendFactory(obj) {
        return new Comment({
            text: obj.text,
            comments: obj.comments.map(comment => Comment.fromBackendFactory(comment)),
            id: obj.id,
        });
    }
}
Comment.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/pages/comments/models/index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/comments/models/index.ts ***!
  \************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment */ "./src/app/pages/comments/models/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_0__["Comment"]; });




/***/ }),

/***/ "./src/app/pages/comments/services/comments.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/comments/services/comments.service.ts ***!
  \*************************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_mocks_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/mocks/enums */ "./src/app/core/mocks/enums/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./src/app/pages/comments/models/index.ts");








let CommentsService = class CommentsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.added = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.removed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    add(value, id) {
        const body = {
            id,
            text: value,
        };
        return this.httpClient
            .request('post', `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiPath}${_core_mocks_enums__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].comments}`, {
            body,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true));
    }
    getAll() {
        return this.httpClient
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiPath}${_core_mocks_enums__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].comments}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.map(comment => _models__WEBPACK_IMPORTED_MODULE_7__["Comment"].fromBackendFactory(comment))));
    }
    remove(id) {
        const body = {
            id,
        };
        return this.httpClient
            .request('delete', `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiPath}${_core_mocks_enums__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].comments}`, {
            body,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true));
    }
};
CommentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CommentsService);



/***/ }),

/***/ "./src/app/pages/comments/services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/comments/services/index.ts ***!
  \**************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.service */ "./src/app/pages/comments/services/comments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_0__["CommentsService"]; });




/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/comment-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/comment-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  padding: 16px;\n}\n\n.comment-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.comment-submit {\n  flex-shrink: 0;\n  margin-left: 16px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1dlYnN0b3JtUHJvamVjdHMvY29tbWVudHMtYXBwL2NvbW1lbnRzLWFwcC9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL3NoYXJlZC9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tZW50cy9zaGFyZWQvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBSmU7QUNHakI7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsaUJBbEJlO0VBbUJmLDBCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tZW50cy9zaGFyZWQvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsYXJnZS1ncmlkLWdhcDogMTZweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAkbGFyZ2UtZ3JpZC1nYXA7XG59XG5cbi5jb21tZW50LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXN1Ym1pdCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tbGVmdDogJGxhcmdlLWdyaWQtZ2FwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNvbW1lbnQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnQtc3VibWl0IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/comment-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/comment-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/app/pages/comments/shared/comment-form/enums/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/pages/comments/shared/comment-form/services/index.ts");




let CommentFormComponent = class CommentFormComponent {
    constructor(formService) {
        this.formService = formService;
        this.formKeys = _enums__WEBPACK_IMPORTED_MODULE_2__["CommentFormKeys"];
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get form() {
        return this.formService.form;
    }
    get invalid() {
        return this.formService.invalid;
    }
    ngOnInit() {
        this.formService.buildForm();
    }
    onSubmit() {
        if (this.invalid) {
            return;
        }
        this.submitted.emit(this.form.value);
    }
};
CommentFormComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["FormService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentFormComponent.prototype, "submitted", void 0);
CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-comment-form',
        template: __webpack_require__(/*! raw-loader!./comment-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/comments/shared/comment-form/comment-form.component.html"),
        viewProviders: [_services__WEBPACK_IMPORTED_MODULE_3__["FormService"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./comment-form.component.scss */ "./src/app/pages/comments/shared/comment-form/comment-form.component.scss")]
    })
], CommentFormComponent);



/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/comment-form.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/comment-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommentFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormModule", function() { return CommentFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _comment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-form.component */ "./src/app/pages/comments/shared/comment-form/comment-form.component.ts");




let CommentFormModule = class CommentFormModule {
};
CommentFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"]],
    })
], CommentFormModule);



/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/enums/comment-form-keys.enum.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/enums/comment-form-keys.enum.ts ***!
  \************************************************************************************/
/*! exports provided: CommentFormKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormKeys", function() { return CommentFormKeys; });
var CommentFormKeys;
(function (CommentFormKeys) {
    CommentFormKeys["text"] = "text";
})(CommentFormKeys || (CommentFormKeys = {}));


/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/enums/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/enums/index.ts ***!
  \*******************************************************************/
/*! exports provided: CommentFormKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_form_keys_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-form-keys.enum */ "./src/app/pages/comments/shared/comment-form/enums/comment-form-keys.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentFormKeys", function() { return _comment_form_keys_enum__WEBPACK_IMPORTED_MODULE_0__["CommentFormKeys"]; });




/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/services/form.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/services/form.service.ts ***!
  \*****************************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/app/pages/comments/shared/comment-form/enums/index.ts");




let FormService = class FormService {
    constructor(fb) {
        this.fb = fb;
    }
    get form() {
        return this._form;
    }
    get invalid() {
        return !this.value.text;
    }
    get value() {
        return this.form.value;
    }
    buildForm() {
        this._form = this._buildForm();
    }
    _buildForm() {
        return this.fb.group({
            [_enums__WEBPACK_IMPORTED_MODULE_3__["CommentFormKeys"].text]: [''],
        });
    }
};
FormService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FormService);



/***/ }),

/***/ "./src/app/pages/comments/shared/comment-form/services/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/comments/shared/comment-form/services/index.ts ***!
  \**********************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.service */ "./src/app/pages/comments/shared/comment-form/services/form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _form_service__WEBPACK_IMPORTED_MODULE_0__["FormService"]; });




/***/ }),

/***/ "./src/app/pages/comments/shared/index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/comments/shared/index.ts ***!
  \************************************************/
/*! exports provided: shared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shared", function() { return shared; });
/* harmony import */ var _comment_form_comment_form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-form/comment-form.module */ "./src/app/pages/comments/shared/comment-form/comment-form.module.ts");

const shared = [_comment_form_comment_form_module__WEBPACK_IMPORTED_MODULE_0__["CommentFormModule"]];


/***/ }),

/***/ "./src/app/shared/common.ts":
/*!**********************************!*\
  !*** ./src/app/shared/common.ts ***!
  \**********************************/
/*! exports provided: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common", function() { return common; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


const common = [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]];


/***/ }),

/***/ "./src/app/shared/helpers/comments-search.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/comments-search.ts ***!
  \***************************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
function search(comments, value) {
    if (!comments) {
        return null;
    }
    const searchResults = [];
    comments.forEach(function f(comment) {
        if (comment.text.includes(value)) {
            searchResults.push({
                text: comment.text,
                id: comment.id,
                comments: [],
            });
        }
        comment.comments.forEach(f);
    });
    return searchResults;
}


/***/ }),

/***/ "./src/app/shared/helpers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/index.ts ***!
  \*****************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-search */ "./src/app/shared/helpers/comments-search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _comments_search__WEBPACK_IMPORTED_MODULE_0__["search"]; });




/***/ }),

/***/ "./src/app/shared/material.ts":
/*!************************************!*\
  !*** ./src/app/shared/material.ts ***!
  \************************************/
/*! exports provided: material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return material; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");





const material = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/app/shared/common.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material */ "./src/app/shared/material.ts");




const modules = [_common__WEBPACK_IMPORTED_MODULE_2__["common"], _material__WEBPACK_IMPORTED_MODULE_3__["material"]];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [modules],
        exports: [modules],
    })
], SharedModule);



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
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const host = 'localhost:4200';
const environment = {
    production: false,
    host,
    apiPath: `http://${host}`,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/linux/WebstormProjects/comments-app/comments-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map