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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.navbar{\n  align-items: center;\n  margin-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" routerLinkActive=\"active\">\n  <a class=\"navbar-brand\" id=\"title\" routerLink=\"/home\">Learning App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"/addEntry\" class=\"nav-link\">Create ListEntry</a></li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"/displayLists\" class=\"nav-link\">WordLists</a></li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"/result\" class=\"nav-link\">Results</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n\n\n"

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
        this.title = 'Learn App';
    }
    AppComponent.getHost = function () {
        return "https://killerappfun4.herokuapp.com/";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _display_list_display_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-list/display-list.component */ "./src/app/display-list/display-list.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'addEntry', component: _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'displayLists', component: _display_list_display_list_component__WEBPACK_IMPORTED_MODULE_8__["DisplayListComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _display_list_display_list_component__WEBPACK_IMPORTED_MODULE_8__["DisplayListComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-list/display-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/display-list/display-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listGroup{\n  margin: 0 auto;\n  width: 800px;\n}\n\n.form-group{\n  margin: 0 auto;\n  width: 800px;\n}\n\n.btn-text{\n  width: 100%;\n  background-color: transparent;\n  text-align: left;\n}\n\n.btn-primary{\n  margin-top: 5px;\n  float: right;\n}\n\n.form-control{\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\nh1{\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.alert{\n  width: 50% !important;\n  margin: auto !important;\n  text-align: center !important;\n}\n"

/***/ }),

/***/ "./src/app/display-list/display-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/display-list/display-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Your Lists: </h1>\n<div *ngIf=\"noLists == true\">\n  <div class=\"alert alert-danger\" role=\"alert\">\n    You have not yet created a list, not entered your email or our server cannot be reached right now\n  </div>\n</div>\n<div class=\"form-group\">\n  <div class=\"row\">\n  <div class=\"col-9\">\n  <input class=\"form-control\" placeholder=\"Enter you email to find your lists\" required=\"required\" [(ngModel)]=\"searchEntry\">\n  </div>\n    <div class=\"col-3\">\n      <button (click)=\"search()\" value=\"Submit\" class=\"btn btn-primary\">Search</button>\n    </div>\n</div>\n</div>\n<div id=\"accordion\">\n  <div class=\"listGroup\" *ngFor=\"let item of lists; let i=index; trackBy:trackByFn\">\n  <div class=\"card\">\n    <div class=\"card-header\" [attr.id]=\"'List' + i\">\n      <h5 class=\"mb-0\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n        <button class=\"btn btn-text\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse' + i\">\n          <h5>Wordlist: {{lists[i].title}} </h5>\n        </button>\n          </div>\n          <div class=\"col-3\">\n        <button class=\"btn btn-primary\" (click)=\"quizById(i)\">Learn this list</button>\n          </div>\n        </div>\n      </h5>\n    </div>\n\n    <div [attr.id]=\"'collapse' + i\" class=\"collapse\" [attr.aria-labelledby]=\"'List' + i\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class = \"col-6\">\n            <label>{{lists[i].problemLanguage}}:</label>\n          </div>\n          <div class = \"col-6\">\n            <label>{{lists[i].translationLanguage}}:</label>\n          </div>\n        </div>\n        <div class = \"row\" *ngFor=\"let item of lists[i].listEntries; let j=index; trackBy:trackByFn\">\n          <div class = \"col-6\">\n            <input class=\"form-control\" placeholder=\"Nederlandse woord\" required=\"required\" [(ngModel)]=\"lists[i].listEntries[j].problem\" (change)=\"update()\">\n          </div>\n          <div class = \"col-6\">\n            <input class=\"form-control\" placeholder=\"Engelse vertaling\" required=\"required\" [(ngModel)]=\"lists[i].listEntries[j].translation\" (change)=\"update()\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/display-list/display-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display-list/display-list.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayListComponent", function() { return DisplayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayListComponent = /** @class */ (function () {
    function DisplayListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.noLists = false;
        this.lists = [];
    }
    DisplayListComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    DisplayListComponent.prototype.ngOnInit = function () {
    };
    DisplayListComponent.prototype.quizById = function (id) {
        this.router.navigate(['quiz'], { queryParams: { "wordListId": this.lists[id].id, "email": this.searchEntry } });
    };
    DisplayListComponent.prototype.search = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'text/plain'
            })
        };
        if (this.searchEntry != undefined) {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getHost() + 'api/getlistsbyemail?email=' + this.searchEntry, httpOptions).subscribe(function (val) {
                // POST call successful value returned in body
                _this.original = val;
                _this.lists.length = 0;
                for (var i = 0; i < _this.original.length; i++) {
                    _this.lists[i] = val[i];
                }
                _this.noLists = false;
            }, function (response) {
                if (typeof _this.lists == 'undefined' || _this.lists.length < 1) {
                    _this.noLists = true;
                }
            }, function () {
                if (typeof _this.lists == 'undefined' || _this.lists.length < 1) {
                    _this.noLists = true;
                }
            });
        }
        else {
            this.noLists = true;
        }
    };
    DisplayListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-list',
            template: __webpack_require__(/*! ./display-list.component.html */ "./src/app/display-list/display-list.component.html"),
            styles: [__webpack_require__(/*! ./display-list.component.css */ "./src/app/display-list/display-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayListComponent);
    return DisplayListComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group{\n  margin: 0 auto;\n  width: 800px;\n}\n\n.btn{\n  margin-top: 20px;\n}\n\n.form-control{\n  margin-top: 5px;\n}\n\n.alert{\n  margin-top: 10px;\n}\n\nh1{\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\nlabel{\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create your List</h1>\n<div class=\"form-group\" >\n  <div class=\"row\">\n    <div class=\"col-12\">\n    <div *ngIf=\"error == true\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        Oops, it appears you missed a field or our server cannot be reached right now\n      </div>\n    </div>\n    </div>\n    <div class=\"col-12\">\n      <label>List info:</label>\n    </div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-6\">\n      <input class=\"form-control\" placeholder=\"Your title here\" required=\"required\" [(ngModel)]=\"listTitle\">\n    </div>\n      <div class=\"col-6\">\n        <input class=\"form-control\" placeholder=\"Your email here\" required=\"required\" [(ngModel)]=\"personEmail\">\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class = \"col-6\">\n      <select class=\"form-control\" name=\"problemLanguage\" [(ngModel)]=\"problemLanguage\">\n        <option [ngValue]=\"undefined\" disabled  selected>Select problem language here </option>\n        <option *ngFor=\"let select of languageList\"> {{ select }}</option>\n      </select>\n    </div>\n    <div class = \"col-6\">\n      <select class=\"form-control\" name=\"translationLanguage\" [(ngModel)]=\"translationLanguage\">\n        <option [ngValue]=\"undefined\" disabled  selected>Select translation language here </option>\n        <option *ngFor=\"let select of languageList\"> {{ select }}</option>\n      </select>\n    </div>\n    <div class=\"col-12\">\n      <label>Words:</label>\n    </div>\n  </div>\n  <div class = \"row\" *ngFor=\"let item of inputsProblem; let i=index; trackBy:trackByFn\">\n    <div class = \"col-6\">\n    <input class=\"form-control\" placeholder=\"Problem word\" required=\"required\" [(ngModel)]=\"inputsProblem[i]\" (change)=\"update()\">\n    </div>\n    <div class = \"col-6\">\n    <input class=\"form-control\" placeholder=\"Translation\" required=\"required\" [(ngModel)]=\"inputsTranslation[i]\" (change)=\"update()\">\n    </div>\n  </div>\n  <button (click)=\"submitEntry()\" value=\"Submit\" class=\"btn btn-primary\">Submit</button>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryComponent = /** @class */ (function () {
    function EntryComponent(http, router) {
        this.http = http;
        this.router = router;
        this.inputsProblem = [""];
        this.inputsTranslation = [""];
        this.languageList = ["Dutch", "English", "French", "German"];
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    EntryComponent.prototype.update = function () {
        if (this.inputsProblem[this.inputsProblem.length - 1].trim() !== "") {
            this.inputsProblem.push("");
            this.inputsTranslation.push("");
        }
        for (var i = 0; i < this.inputsProblem.length; i++) {
            if (this.inputsProblem[i].trim() == "" && this.inputsProblem[i - 1].trim() == "" && this.inputsTranslation[i].trim() == "") {
                this.inputsProblem.splice(i, 1);
                this.inputsTranslation.splice(i, 1);
            }
        }
    };
    EntryComponent.prototype.submitEntry = function () {
        var _this = this;
        if (this.problemLanguage == undefined || this.translationLanguage == undefined || this.listTitle == undefined || this.personEmail == undefined) {
            this.error = true;
            return;
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var entry = JSON.stringify({ problemWords: this.inputsProblem, translationWords: this.inputsTranslation, title: this.listTitle, problemLanguage: this.problemLanguage, translationLanguage: this.translationLanguage, personEmail: this.personEmail });
        this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getHost() + 'api/submit', entry, httpOptions).subscribe(function (val) {
            // POST call successful value returned in body
            _this.success = val.toString();
        }, function (response) {
            _this.error = true;
        }, function () {
            _this.router.navigate(['displayLists']);
        });
    };
    EntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entries',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\nbody {\n  font-family: 'Lato';\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Catamaran';\n  font-weight: 800 !important;\n}\n\n.btn-xl {\n  text-transform: uppercase;\n  padding: 1.5rem 3rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n}\n\n.bg-black {\n  background-color: #000 !important;\n}\n\n.rounded-pill {\n  border-radius: 5rem;\n}\n\n.navbar-custom {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-custom .navbar-brand {\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 0.1rem;\n  font-weight: 700;\n}\n\n.navbar-custom .navbar-nav .nav-item .nav-link {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n}\n\nheader.masthead {\n  position: relative;\n  overflow: hidden;\n  padding-top: calc(7rem + 72px);\n  padding-bottom: 7rem;\n  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\nheader.masthead .masthead-content {\n  z-index: 1;\n  position: relative;\n}\n\nheader.masthead .masthead-content .masthead-heading {\n  font-size: 4rem;\n}\n\nheader.masthead .masthead-content .masthead-subheading {\n  font-size: 2rem;\n}\n\nheader.masthead .bg-circle {\n  z-index: 0;\n  position: absolute;\n  border-radius: 100%;\n  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);\n}\n\nheader.masthead .bg-circle-1 {\n  height: 90rem;\n  width: 90rem;\n  bottom: -55rem;\n  left: -55rem;\n}\n\nheader.masthead .bg-circle-2 {\n  height: 50rem;\n  width: 50rem;\n  top: -25rem;\n  right: -25rem;\n}\n\nheader.masthead .bg-circle-3 {\n  height: 20rem;\n  width: 20rem;\n  bottom: -10rem;\n  right: 5%;\n}\n\nheader.masthead .bg-circle-4 {\n  height: 30rem;\n  width: 30rem;\n  top: -5rem;\n  right: 35%;\n}\n\n@media (min-width: 992px) {\n  header.masthead {\n    padding-top: calc(10rem + 55px);\n    padding-bottom: 10rem;\n  }\n  header.masthead .masthead-content .masthead-heading {\n    font-size: 6rem;\n  }\n  header.masthead .masthead-content .masthead-subheading {\n    font-size: 4rem;\n  }\n}\n\n.bg-primary {\n  background-color: #ee0979 !important;\n}\n\n.btn-primary {\n  background-color: #ee0979;\n  border-color: #ee0979;\n}\n\n.btn-primary:active, .btn-primary:focus, .btn-primary:hover {\n  background-color: #bd0760 !important;\n  border-color: #bd0760 !important;\n}\n\n.btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(238, 9, 121, 0.5);\n}\n\n.btn-secondary {\n  background-color: #ff6a00;\n  border-color: #ff6a00;\n}\n\n.btn-secondary:active, .btn-secondary:focus, .btn-secondary:hover {\n  background-color: #cc5500 !important;\n  border-color: #cc5500 !important;\n}\n\n.btn-secondary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.5);\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead text-center text-white\">\n  <div class=\"masthead-content\">\n    <div class=\"container\">\n      <h1 class=\"masthead-heading mb-0\">Learning App</h1>\n      <h2 class=\"masthead-subheading mb-0\">This app works wonders!</h2>\n      <a routerLink=\"/addEntry\" class=\"btn btn-primary btn-xl rounded-pill mt-5\">Get started</a>\n    </div>\n  </div>\n  <div class=\"bg-circle-1 bg-circle\"></div>\n  <div class=\"bg-circle-2 bg-circle\"></div>\n  <div class=\"bg-circle-3 bg-circle\"></div>\n  <div class=\"bg-circle-4 bg-circle\"></div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 order-lg-2\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"https://creeksidenaturals.com/wp-content/uploads/2017/02/Easy-to-Use.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 order-lg-1\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Easy to use!</h2>\n          <p>Anyone can use this site within 5 minutes. Just click get started above to start working with this application and getting good grades</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"https://images.wbc.co.uk/800/800/st13_zoom-sticker-made-with-love.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Made with love!</h2>\n          <p>This website was created with a lot of dedication and passion. The developer did his best to try and bring to use the best possible experience while learning.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 order-lg-2\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"https://s3-storage.textopus.nl/wp-content/uploads/2018/10/1189942/15135846/wvhjaar2018-logo-groot.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 order-lg-1\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Website of the year!</h2>\n          <p>Even though this website is only 2 weeks old it already won the website of the year award 2018. We are really happy with this price and we will use the positive energy we got from it to make this website even better</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<footer class=\"py-5 bg-black\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white small\">Copyright &copy; Learn App 2018</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.btn {\n  margin-top: 20px;\n  color: white !important;\n}\n\n.panel-title{\n  font-size: 25px;\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"finished == false; then thenBlock else elseBlock\"></div>\n<ng-template #thenBlock>\n<div class=\"container\">\n  <h1>Wordlist: {{wordList?.title}}</h1>\n  <div class=\"row clearfix\">\n  </div>\n  <div *ngIf=\"correct == true && progress > 0\">\n    <div class=\"alert alert-success\" role=\"alert\">\n      Your answer was correct!\n    </div>\n  </div>\n  <div *ngIf=\"correct == false && progress > 0\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n      Your answer was not correct!\n    </div>\n  </div>\n  <div class=\"col-md-1 column\">\n  </div>\n  <div class=\"col-md-10 column\">\n    <p class=\"lead\">You have completed {{progress|number: \"1.0-1\"}}% of the test</p>\n    <div class=\"progress\">\n      <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"progress\">\n        {{progress|number: \"1.0-1\"}}%\n      </div>\n    </div>\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <p class=\"panel-title\">\n          Translate the word: <b>'{{problemWord}}'</b> from <b>{{problemLanguage}}</b> to <b>{{translationLanguage}}</b>\n        </p>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"input-group\">\n          <label>\n            Your Answer: <input class=\"form-control\" name=\"translationWord\" id=\"translationWord\" required=\"required\" (keyup.enter)=\"DoQuiz(userAnswer)\" [(ngModel)]=\"userAnswer\" placeholder=\"Give the translation here\">\n          </label>\n        </div>\n      </div>\n      <div class=\"panel-footer\">\n        <a class=\"btn btn-primary \" role=\"button\" (click)=\"DoQuiz(userAnswer)\">Submit answer</a>\n      </div>\n    </div>\n    <div class=\"col-md-1 column\">\n    </div>\n  </div>\n</div>\n</ng-template>\n<ng-template #elseBlock>\n  <div class=\"container\">\n    <h1>Wordlist: {{wordList?.title}}</h1>\n    <div class=\"row clearfix\">\n    </div>\n    </div>\n    <div class=\"col-md-1 column\">\n    </div>\n    <div class=\"col-md-12 column\">\n      <p class=\"lead\">You have answered {{(score/total)*100|number: \"1.0-1\"}}% ({{score}} out of {{total}}) of the test correctly</p>\n      <div class=\"progress\">\n        <div class=\"progress-bar\" id=\"resultBar\" role=\"progressbar\" [style.width.%]=\"(score/total)*100\">\n          {{(score/total)*100|number: \"1.0-1\"}}%\n        </div>\n      </div>\n    </div>\n  <div class=\"row\">\n    <button class=\"btn btn-primary\" (click)=\"goToResults()\">All results</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.quizList = [];
        this.index = 0;
        this.score = 0;
        this.total = 0;
        this.progress = 0;
        this.finished = false;
        this.route.queryParams.subscribe(function (params) {
            _this.wordListId = params['wordListId'];
            _this.email = params['email'];
            _this.getListById();
        });
    }
    QuizComponent.prototype.getListById = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain'
            })
        };
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getHost() + 'api/getlistbyid?id=' + this.wordListId, httpOptions).subscribe(function (val) {
            _this.wordList = val;
            _this.total = _this.wordList.listEntries.length;
            _this.problemLanguage = _this.wordList.problemLanguage;
            _this.translationLanguage = _this.wordList.translationLanguage;
            _this.quizList = _this.wordList.listEntries;
            shuffle(_this.quizList);
            function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
            _this.PrepareQuizQuestion();
        }, function (response) {
        }, function () {
        });
    };
    QuizComponent.prototype.PrepareQuizQuestion = function () {
        if (this.index < this.total) {
            this.problemWord = this.quizList[this.index].problem;
            this.translationWord = this.quizList[this.index].translation;
            this.progress = (this.index / this.total * 100);
            this.index = this.index + 1;
        }
        else {
            this.QuizFinished();
        }
    };
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.QuizFinished = function () {
        this.sendResults();
        this.finished = true;
    };
    QuizComponent.prototype.sendResults = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var entry = JSON.stringify({ wordListId: this.wordListId, score: this.score, total: this.total, email: this.email });
        this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getHost() + 'api/submitresult', entry, httpOptions).subscribe(function (val) {
            // POST call successful value returned in body
        }, function (response) {
        }, function () {
        });
    };
    QuizComponent.prototype.DoQuiz = function (userAnswer) {
        if (userAnswer.toLowerCase() == this.translationWord.toLowerCase()) {
            //Correct answer
            this.correct = true;
            this.score = this.score + 1;
        }
        else {
            //Incorrect answer
            this.correct = false;
        }
        this.userAnswer = "";
        this.PrepareQuizQuestion();
    };
    QuizComponent.prototype.goToResults = function () {
        this.router.navigate(['result'], { queryParams: { "email": this.email } });
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Your Results: </h1>\n<div *ngIf=\"noResults == true\">\n  <div class=\"alert alert-danger\" role=\"alert\">\n    You do not have any results or our server cannot be reached right now\n  </div>\n</div>\n<div *ngIf=\"hasEmail == false; then thenBlock else elseBlock\"></div>\n<ng-template #thenBlock>\n<div class=\"form-group\">\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <input class=\"form-control\" placeholder=\"Enter you email to see your results\" required=\"required\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"col-3\">\n      <button (click)=\"getResults()\" value=\"Submit\" class=\"btn btn-primary\">Search</button>\n    </div>\n  </div>\n</div>\n</ng-template>\n<ng-template #elseBlock>\n  <div id=\"accordion\">\n    <div class=\"listGroup\" *ngFor=\"let item of lists; let i=index; trackBy:trackByFn\">\n      <div class=\"card\">\n        <div class=\"card-header\" [attr.id]=\"'List' + i\">\n          <h5 class=\"mb-0\">\n            <div class=\"row\">\n              <div class=\"col-9\">\n                <button class=\"btn btn-text\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse' + i\">\n                  <h5>Wordlist: {{lists[i].title}} </h5>\n                </button>\n              </div>\n              <div class=\"col-3\">\n                score: {{lists[i].score}} out of: {{lists[i].total}}\n              </div>\n            </div>\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = /** @class */ (function () {
    function ResultComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.noResults = false;
        this.lists = [];
        this.hasEmail = false;
        this.route.queryParams.subscribe(function (params) {
            _this.email = params['email'];
            _this.getResults();
        });
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent.prototype.getResults = function () {
        var _this = this;
        this.hasEmail = true;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'text/plain'
            })
        };
        if (this.email != undefined) {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getHost() + 'api/getresultsbyemail?email=' + this.email, httpOptions).subscribe(function (val) {
                // POST call successful value returned in body
                _this.original = val;
                _this.lists.length = 0;
                console.log(val);
                for (var i = 0; i < _this.original.length; i++) {
                    _this.lists[i] = val[i];
                }
                _this.noResults = false;
                _this.hasEmail = true;
            }, function (response) {
                if (typeof _this.lists == 'undefined' || _this.lists.length < 1) {
                    _this.noResults = true;
                }
            }, function () {
                if (typeof _this.lists == 'undefined' || _this.lists.length < 1) {
                    _this.noResults = true;
                }
            });
        }
        else {
            this.hasEmail = false;
        }
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResultComponent);
    return ResultComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/AlextheGreat1509/KillerAppFun4-FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map