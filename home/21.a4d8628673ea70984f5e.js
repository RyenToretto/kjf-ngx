(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{F1dZ:function(e,n,t){"use strict";t.r(n),t.d(n,"Rxjs6SubjectModule",function(){return o});var s=t("tyNb"),r=t("PCNd"),b=t("fXoL");let c=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Cb({type:e,selectors:[["rxjs6-subject"]],decls:12,vars:4,consts:[[1,"rxjs6-subject","clearfix"]],template:function(e,n){1&e&&(b.Ob(0,"div",0),b.Ob(1,"code"),b.Ob(2,"pre"),b.yc(3,"      "),b.Ob(4,"span"),b.yc(5,"\n      1. \u666e\u901a\u7684 Observable \u5e76\u4e0d\u5177\u5907\u591a\u8def\u63a8\u9001\u7684\u80fd\u529b\uff1a\n\n      2. \u6bcf\u4e00\u4e2a Subject \u90fd\u662f\u4e00\u4e2a Observable\uff08\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff09\n          Subject \u7684\u5185\u90e8\u5b9e\u73b0\u4e2d\uff0c\u5e76\u4e0d\u4f1a\u5728\u88ab\u8ba2\u9605\uff08subscribe\uff09\u540e\u521b\u5efa\u65b0\u7684\u6267\u884c\u73af\u5883\u3002\n          \u5b83\u4ec5\u4ec5\u4f1a\u628a\u65b0\u7684 Observer \u6ce8\u518c\u5728\u7531\u5b83\u672c\u8eab\u7ef4\u62a4\u7684 Observer \u5217\u8868\u4e2d\n\n      3. \u6bcf\u4e00\u4e2a Subject \u4e5f\u53ef\u4ee5\u4f5c\u4e3a Observer\uff08\u89c2\u5bdf\u8005\uff09\n          \u8c03\u7528 next(theValue) \u65b9\u6cd5\u540e\uff0cSubject \u4f1a\u5411\u6240\u6709\u5df2\u7ecf\u5728\u5176\u4e0a\u6ce8\u518c\u7684 Observer \u591a\u8def\u63a8\u9001 theValue\n      "),b.Nb(),b.yc(6,"\n    "),b.Nb(),b.Nb(),b.Ob(7,"code"),b.Ob(8,"pre"),b.yc(9),b.Nb(),b.Ob(10,"pre"),b.yc(11,"\n      \u63a7\u5236\u53f0\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a\n        observerA: 1\n        observerB: 1\n        observerA: 2\n        observerB: 2\n    "),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(9),b.Cc("\n      var subject = new Rx.Subject();\n\n      subject.subscribe(","{","\n          next: (v) => console.log('observerA: ' + v)\n      ","}","});\n      subject.subscribe(","{","\n          next: (v) => console.log('observerB: ' + v)\n      ","}",");\n\n      subject.next(1);\n      subject.next(2);\n    "))},styles:[".rxjs6-subject[_ngcontent-%COMP%]{font-size:14px}.rxjs6-subject[_ngcontent-%COMP%]     hr{margin:5px 0}.rxjs6-subject[_ngcontent-%COMP%]     button{margin:1em;padding:.2em 1em;box-sizing:border-box;border-radius:4px;border:1px solid #8685c9}.rxjs6-subject[_ngcontent-%COMP%]     .question-title{font-size:16px}.rxjs6-subject[_ngcontent-%COMP%]     .question-answer{font-size:14px}.rxjs6-subject[_ngcontent-%COMP%]     .question-answer.weighted{font-weight:600}.rxjs6-subject[_ngcontent-%COMP%]     .question-answer.tab-4{padding-left:2%}.rxjs6-subject[_ngcontent-%COMP%]     .question-answer.tab-8{padding-left:4%}"]}),e})(),o=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(n){return new(n||e)},imports:[[r.a,s.f.forChild([{path:"",redirectTo:"index"},{path:"index",component:c}])]]}),e})()}}]);