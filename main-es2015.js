(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid pt-3\">\n   <form #resumeForm=\"ngForm\">\n      <div class=\"row\">\n         <div class=\"col-md-12\">\n            <div class=\"shadow-sm card\">\n               <div class=\"card-body\">\n                  <h4 class=\"card-title d-flex align-items-center\">\n                     <i class=\"icon icon-person-outline\"></i>\n                     <span class=\"ml-2\">Personal Details</span>\n                  </h4>\n                  <div class=\"row\">\n                     <div class=\"form-group col-12 col-md-4\">\n                        <label class=\"form-label\">Full Name</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.name\" name=\"name\"\n                           placeholder=\"Full Name\" #Name=\"ngModel\" required\n                           [ngClass]=\"{'is-invalid': Name.invalid && (Name.touched || resumeForm.submitted) }\">\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"form-group\">\n                           <label class=\"form-label\">Mobile Number</label>\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.contactNo\" name=\"contactNo\"\n                              placeholder=\"Mobile Number\" #ContactNo=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': ContactNo.invalid && (ContactNo.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"form-group\">\n                           <label class=\"form-label\">Current Designation</label>\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.currentProfile\"\n                              name=\"currentProfile\" placeholder=\"Current Profile\" #CurrentProfile=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': CurrentProfile.invalid && (CurrentProfile.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"form-group\">\n                           <label class=\"form-label\">Email Address</label>\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.email\" name=\"emailId\"\n                              placeholder=\"Email ID\" #Email=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': Email.invalid && (Email.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"form-group\">\n                           <label class=\"form-label\">Portfolio Website (optional)</label>\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.socialProfile\"\n                              name=\"socialProfile\" placeholder=\"Social Profile \">\n                        </div>\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"form-group\">\n                           <label class=\"form-label\">Permanant Address</label>\n                           <textarea class=\"form-control\" [(ngModel)]=\"resume.address\" name=\"address\" rows=\"3\"\n                              placeholder=\"Address\" #Address=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': Address.invalid && (Address.touched || resumeForm.submitted) }\"></textarea>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n\n            <!-- Skills -->\n            <div class=\"shadow-sm card\">\n               <div class=\"card-body\">\n                  <div class=\"d-flex justify-content-between card-title\">\n                     <h4 class=\"d-flex align-items-center\">\n                        <i class=\"icon icon-bulb-outline\"></i>\n                        <span class=\"ml-2\">Skills</span>\n                     </h4>\n                     <button class=\"btn btn-sm btn-primary btn-desktop\" (click)=\"addSkill()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                        <span class=\"ml-2\">Add Skill</span>\n                     </button>\n                     <button class=\"btn btn-sm btn-primary btn-mobile\" (click)=\"addSkill()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                     </button>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"col-md-4\" *ngFor=\"let s of resume.skills; let i=index\">\n                        <div class=\"form-group\">\n                           <input type=\"text\" class=\"form-control\" name=\"skill{{i}}\" [(ngModel)]=\"s.value\"\n                              placeholder=\"e.g. Java / Angular / .Net \" #Skill=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': Skill.invalid && (Skill.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"col-md-4\" *ngFor=\"let s of resume.skills; let i=index\">\n\n                     </div>\n                  </div>\n               </div>\n            </div>\n\n\n            <!-- Experience -->\n            <div class=\"shadow-sm card\">\n               <div class=\"card-body\">\n                  <div class=\"d-flex justify-content-between card-title\">\n                     <h4 class=\"d-flex align-items-center\">\n                        <i class=\"icon icon-briefcase-outline\"></i>\n                        <span class=\"ml-2\">Experience</span>\n                     </h4>\n                     <button class=\"btn btn-primary btn-desktop\" (click)=\"addExperience()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                        <span class=\"ml-2\">Add Experience</span>\n                     </button>\n                     <button class=\"btn btn-sm btn-primary btn-mobile\" (click)=\"addExperience()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                     </button>\n                  </div>\n                  <div class=\"row\" *ngFor=\"let ex of resume.experiences; let i=index\">\n                     <div class=\"form-group col-12 col-md-4\">\n                        <label class=\"form-label\">Employer Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"employer{{i}}\" [(ngModel)]=\"ex.employer\"\n                           placeholder=\"Employer\" #Employer=\"ngModel\" required\n                           [ngClass]=\"{'is-invalid': Employer.invalid && (Employer.touched || resumeForm.submitted) }\">\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <label class=\"form-label\">Designation</label>\n                        <input type=\"text\" class=\"form-control\" name=\"jobTitle{{i}}\" [(ngModel)]=\"ex.jobTitle\"\n                           placeholder=\"Job Title\" #JobTitle=\"ngModel\" required\n                           [ngClass]=\"{'is-invalid': JobTitle.invalid && (JobTitle.touched || resumeForm.submitted) }\">\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <label class=\"form-label\">Start Date</label>\n                        <input type=\"date\" class=\"form-control\" name=\"exStartDate{{i}}\" [(ngModel)]=\"ex.exStartDate\"\n                           placeholder=\"Job Start Date\" #exStartDate=\"ngModel\" required\n                           [ngClass]=\"{'is-invalid': exStartDate.invalid && (exStartDate.touched || resumeForm.submitted) }\">\n                     </div>\n                     <div class=\"form-group col-12 col-md-4\">\n                        <div class=\"float-left w-100\" *ngIf=\"!marked\">\n                           <label class=\"form-label\">End Date</label>\n                           <input type=\"date\" class=\"form-control\" name=\"exEndDate{{i}}\" [(ngModel)]=\"ex.exEndDate\"\n                              placeholder=\"Job End Date\" #exEndDate=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': exEndDate.invalid && (exEndDate.touched || resumeForm.submitted) }\">\n                        </div>\n                        <!-- <div class=\"float-left w-100\">\n                           <label class=\"form-label\">\n                              <input type=\"checkbox\" [(ngModel)]=\"currentCompany\" (change)=\"toggleVisibility($event)\"/>\n                              Currently working here\n                           </label>\n                        </div> -->\n                     </div>\n                     <div class=\"form-group col-12 col-md-8\">\n                        <label class=\"form-label\">Job Description</label>\n                        <textarea class=\"form-control\" name=\"jobDescription{{i}}\" [(ngModel)]=\"ex.jobDescription\"\n                           rows=\"3\" placeholder=\"Job Description\"></textarea>\n                     </div>\n                     <!-- <div class=\"form-group\">\n               <input type=\"date\" class=\"form-control\" name=\"exInMonths{{i}}\" [(ngModel)]=\"ex.experience\"\n                 placeholder=\"Experience in months\" #Experience=\"ngModel\" required\n                 [ngClass]=\"{'is-invalid': Experience.invalid && (Experience.touched || resumeForm.submitted) }\">\n             </div> -->\n                     \n                  </div>\n\n               </div>\n            </div>\n\n            <!-- Education -->\n            <div class=\"shadow-sm card\">\n               <div class=\"card-body\">\n                  <div class=\"d-flex justify-content-between card-title\">\n                     <h4 class=\"d-flex align-items-center\">\n                        <i class=\"icon icon-award-outline\"></i>\n                        <span class=\"ml-2\">Education</span>\n                     </h4>\n                     <button class=\"btn btn-sm btn-primary btn-desktop\" (click)=\"addEducation()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                        <span class=\"ml-2\">Add Education</span>\n                     </button>\n                     <button class=\"btn btn-sm btn-primary btn-mobile\" (click)=\"addEducation()\">\n                        <i class=\"icon icon-plus-outline\"></i>\n                     </button>\n                  </div>\n                  <div class=\"row\" *ngFor=\"let ed of resume.educations; let i=index\">\n                     <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                           <select class=\"form-control\" placeholder=\"Degree\" name=\"degree{{i}}\" [(ngModel)]=\"ed.degree\"\n                              #Degree=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': Degree.invalid && (Degree.touched || resumeForm.submitted) }\">\n                              <option [value]=\"d\" *ngFor=\"let d of degrees\">{{d}}</option>\n                           </select>\n                        </div>\n                     </div>\n                     <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                           <input type=\"text\" class=\"form-control\" name=\"college{{i}}\" [(ngModel)]=\"ed.college\"\n                              placeholder=\"School/College\" #College=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': College.invalid && (College.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                           <input type=\"number\" class=\"form-control\" name=\"passingYear{{i}}\"\n                              [(ngModel)]=\"ed.passingYear\" placeholder=\"Passing Year\" #PassingYear=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': PassingYear.invalid && (PassingYear.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                     <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                           <input type=\"number\" class=\"form-control\" name=\"result{{i}}\" [(ngModel)]=\"ed.percentage\"\n                              placeholder=\"Percentage\" #Percentage=\"ngModel\" required\n                              [ngClass]=\"{'is-invalid': Percentage.invalid && (Percentage.touched || resumeForm.submitted) }\">\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n\n\n            <div class=\"shadow-sm card btn-card\">\n               <div class=\"card-body\">\n\n                  <div class=\"d-flex justify-content-between card-title\">\n                     <h4 class=\"d-flex align-items-center\">\n                        <i class=\"icon icon-heart-outline\"></i>\n                        <span class=\"ml-2\">Show your picture in Resume</span>\n                     </h4>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"col-md-12\">\n                        <div class=\"form-group text-center\">\n                           <input type=\"file\" class=\"form-control-file\" (change)=\"fileChanged($event)\"\n                              aria-describedby=\"fileHelpId\">\n                        </div>\n                        <div class=\"float-left w-100\">\n                           <div class=\"img-wrapper\">\n                              <img *ngIf=\"resume.profilePic\" [src]=\"resume.profilePic\" class=\"img-thumbnail\">\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <!-- Other Details -->\n\n            <!-- <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\"> list </i>Other Details</h4>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.otherDetails\" name=\"otherDetails\"\n                    rows=\"4\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n         </div>\n\n         <div class=\"col-md-12 mb-4 text-center\">\n            <button (click)=\"resumeForm.valid ? generatePdf('open') : ''\" class=\"btn btn-primary mb-2\">\n               <i class=\"icon icon-file-text-outline\"></i>\n               <span class=\"ml-2\">Open PDF</span>\n            </button>\n            <button (click)=\"resumeForm.valid ? generatePdf('download') : ''\" class=\"btn btn-primary ml-2 mb-2\">\n               <i class=\"icon icon-download-outline\"></i>\n               <span class=\"ml-2\">Download PDF</span>\n            </button>\n            <button (click)=\"resumeForm.valid ? generatePdf('print') : ''\" class=\"btn btn-primary ml-2 mb-2\">\n               <i class=\"icon icon-printer-outline\"></i>\n               <span class=\"ml-2\">Print PDF</span>\n            </button>\n\n            <button type='reset' (click)=\"resetForm()\" class=\"btn btn-primary ml-2 mb-2\">\n               <i class=\"icon icon-refresh-outline\"></i>\n               <span class=\"ml-2\">Reset</span></button>\n         </div>\n\n      </div>\n   </form>\n</div>\n\n<!-- follow me template -->\n<!-- <div class=\"made-with-love\">\n      Made with\n      <i>♥</i> by\n      <a target=\"_blank\" href=\"https://pankajpede.github.io/aboutme/\">Pankaj Pede</a>\n    </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-white custom-navbar\">\n   <a class=\"navbar-brand\" href=\"https://pankajpede.github.io/aboutme/\" target=\"_blank\">\n      <img src=\"./assets/images/myphoto.jpg\" class=\"rounded-circle\"/>\n   </a>\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n     <span class=\"navbar-toggler-icon\"></span>\n   </button>\n \n </nav> -->"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume */ "./src/app/resume.ts");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.service */ "./src/app/script.service.ts");




let AppComponent = class AppComponent {
    constructor(scriptService) {
        this.scriptService = scriptService;
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        this.marked = false;
        this.currentCompany = false;
        this.degrees = ['SSC', 'HSC', 'B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.resume = JSON.parse(sessionStorage.getItem('resume')) || new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        if (!this.resume.experiences || this.resume.experiences.length === 0) {
            this.resume.experiences = [];
            this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]());
        }
        if (!this.resume.educations || this.resume.educations.length === 0) {
            this.resume.educations = [];
            this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]());
        }
        if (!this.resume.skills || this.resume.skills.length === 0) {
            this.resume.skills = [];
            this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
        }
        console.log('Loading External Scripts');
        this.scriptService.load('pdfMake', 'vfsFonts');
    }
    toggleVisibility(e) {
        this.marked = e.target.checked;
    }
    addExperience() {
        this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]());
    }
    addEducation() {
        this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]());
    }
    generatePdf(action = 'open') {
        console.log(pdfMake);
        const documentDefinition = this.getDocumentDefinition();
        switch (action) {
            case 'open':
                pdfMake.createPdf(documentDefinition).open();
                break;
            case 'print':
                pdfMake.createPdf(documentDefinition).print();
                break;
            case 'download':
                pdfMake.createPdf(documentDefinition).download();
                break;
            default:
                pdfMake.createPdf(documentDefinition).open();
                break;
        }
    }
    resetForm() {
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
    }
    getDocumentDefinition() {
        sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
            content: [
                {
                    columns: [
                        [{
                                text: this.resume.name,
                                bold: true,
                                fontSize: 28,
                                alignment: 'left',
                                margin: [0, 0, 0, 5],
                                borderBottom: 10,
                                color: '#d83f5e'
                            },
                            // {
                            //   text: this.resume.currentProfile,
                            //   bold: false,
                            //   fontSize: 12,
                            //   alignment: 'left',
                            //   borderBottom:10,
                            //   color:'#333333'
                            // },
                            {
                                text: this.resume.email,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 2],
                                color: '#000000',
                                lineHeight: 1.3,
                            },
                            {
                                text: this.resume.contactNo,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 0],
                                color: '#000000',
                                lineHeight: 1.3,
                            },
                            {
                                text: this.resume.socialProfile,
                                link: this.resume.socialProfile,
                                bold: false,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 5],
                                borderBottom: 10,
                                color: 'blue'
                            },
                        ],
                        [
                            this.getProfilePicObject(),
                        ]
                    ]
                },
                //   Experience Starts
                {
                    columns: [
                        {
                            text: 'Experience',
                            width: 125,
                            bold: false,
                            fontSize: 18,
                            alignment: 'left',
                            margin: [0, 15, 0, 2],
                            color: '#818084',
                        },
                        [
                            //   'Experience',         
                            this.getExperienceObject(this.resume.experiences),
                        ],
                    ]
                },
                //   Skills Starts
                {
                    columns: [
                        {
                            text: 'Skills  ',
                            width: 125,
                            bold: false,
                            fontSize: 18,
                            alignment: 'left',
                            margin: [0, 25, 0, 2],
                            color: '#818084',
                        },
                        {
                            margin: [0, 25, 0, 6],
                            type: 'none',
                            fontSize: 10,
                            alignment: 'left',
                            color: '#000000',
                            lineHeight: 1.3,
                            padding: 0,
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value),
                            ]
                        },
                        {
                            margin: [0, 25, 0, 6],
                            type: 'none',
                            fontSize: 10,
                            alignment: 'left',
                            color: '#000000',
                            lineHeight: 1.3,
                            padding: 0,
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value)
                            ]
                        },
                        {
                            margin: [0, 25, 0, 6],
                            type: 'none',
                            fontSize: 10,
                            alignment: 'left',
                            color: '#000000',
                            lineHeight: 1.3,
                            padding: 0,
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 2).map(s => s.value)
                            ]
                        }
                    ]
                },
                //   Education Starts
                {
                    columns: [
                        {
                            text: 'Education  ',
                            width: 125,
                            bold: false,
                            fontSize: 18,
                            alignment: 'left',
                            margin: [0, 25, 0, 2],
                            color: '#818084',
                        },
                        this.getEducationObject(this.resume.educations),
                    ]
                },
                //   {
                //     text: 'Other Details',
                //     style: 'header'
                //   },
                //   {
                //     text: this.resume.otherDetails
                //   },
                {
                    text: 'Signature',
                    style: 'sign'
                },
                {
                    columns: [
                        //   { qr: this.resume.name + ', Contact No : ' + this.resume.contactNo, fit : 100 },
                        {
                            text: this.resume.name,
                            alignment: 'right',
                            fontSize: 14,
                            color: '#d83f5e',
                            lineHeight: 1.3,
                        }
                    ]
                }
            ],
            info: {
                title: this.resume.name + '_RESUME',
                author: this.resume.name,
                subject: 'RESUME',
                keywords: 'RESUME, ONLINE RESUME',
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline'
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                tableHeader: {
                    bold: true,
                }
            }
        };
    }
    getExperienceObject(experiences) {
        const exs = [];
        experiences.forEach(experience => {
            exs.push([{
                    columns: [
                        [{
                                text: experience.employer,
                                fontSize: 14,
                                alignment: 'left',
                                margin: [0, 15, 0, 0],
                                color: '#d83f5e',
                                lineHeight: 1.3,
                            },
                            {
                                text: experience.jobTitle,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 0],
                                color: '#000000',
                                lineHeight: 1.3,
                            },
                            {
                                text: experience.exStartDate + ' To ' + experience.exEndDate,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 2],
                                color: '#000000',
                                lineHeight: 1.3,
                            },
                            {
                                text: experience.jobDescription,
                                fontSize: 10,
                                alignment: 'left',
                                margin: [0, 0, 0, 5],
                                color: '#999999',
                                lineHeight: 1.3,
                            }]
                    ]
                }]);
        });
        return {
            table: {
                widths: ['*'],
                body: [
                    ...exs
                ]
            },
            layout: 'noBorders'
        };
    }
    getEducationObject(educations) {
        return {
            margin: [0, 25, 0, 2],
            table: {
                widths: ['*', '*', '*', '*'],
                body: [
                    [{
                            text: 'Degree',
                            style: 'tableHeader'
                        },
                        {
                            text: 'College',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Passing Year',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Result',
                            style: 'tableHeader'
                        },
                    ],
                    ...educations.map(ed => {
                        return [ed.degree, ed.college, ed.passingYear, ed.percentage];
                    })
                ]
            },
            layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                    return (rowIndex === 0) ? '#CCCCCC' : null;
                }
            },
            fontSize: 10,
            alignment: 'left',
            color: '#000000',
            lineHeight: 1.3,
        };
    }
    getProfilePicObject() {
        if (this.resume.profilePic) {
            return {
                image: this.resume.profilePic,
                width: 75,
                alignment: 'right'
            };
        }
        return null;
    }
    fileChanged(e) {
        const file = e.target.files[0];
        this.getBase64(file);
    }
    getBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            this.resume.profilePic = reader.result;
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }
    addSkill() {
        this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
    }
};
AppComponent.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/resume.ts":
/*!***************************!*\
  !*** ./src/app/resume.ts ***!
  \***************************/
/*! exports provided: Resume, Experience, Education, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
class Resume {
    constructor() {
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
    }
}
class Experience {
}
class Education {
}
class Skill {
}


/***/ }),

/***/ "./src/app/script.service.ts":
/*!***********************************!*\
  !*** ./src/app/script.service.ts ***!
  \***********************************/
/*! exports provided: ScriptStore, ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ScriptStore = [
    { name: 'pdfMake', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/pdfmake.min.js' },
    { name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
];
let ScriptService = class ScriptService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    console.log(`${name} Loaded.`);
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
};
ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScriptService);



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
const environment = {
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

module.exports = __webpack_require__(/*! /Users/pankajpede/Documents/Project/Resume Builder/resume-builder/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map