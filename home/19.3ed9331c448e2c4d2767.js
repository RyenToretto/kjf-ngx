(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{KzwF:function(e,n,t){"use strict";t.r(n),t.d(n,"Rxjs6BehaviorSubjectModule",function(){return d});var b=t("tyNb"),s=t("PCNd"),r=t("fXoL"),c=t("2Vo4"),o=function(e){return e.init_pub_sub="init_pub_sub",e.input_change="input_change",e}({});let u=(()=>{class e{constructor(){this.pubSubSubject$=new c.a({key:o.init_pub_sub})}publishPayload(e){this.pubSubSubject$.next(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=r.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),i=(()=>{class e{constructor(e){this.rxjsPubSub=e,this.message=""}ngOnInit(){this.rxjsPubSub.pubSubSubject$.subscribe(e=>{e.key===o.input_change&&(this.message=e.value)})}}return e.\u0275fac=function(n){return new(n||e)(r.Ib(u))},e.\u0275cmp=r.Cb({type:e,selectors:[["one-pubsub-child"]],decls:4,vars:1,consts:[[1,"one-pubsub-child","clearfix"]],template:function(e,n){1&e&&(r.Ob(0,"section",0),r.yc(1," (child 1)"),r.Kb(2,"br"),r.yc(3),r.Nb()),2&e&&(r.xb(3),r.Ac(" ",n.message,"\n"))},styles:[".one-pubsub-child[_ngcontent-%COMP%]{margin-bottom:20px}"]}),e})();var a=t("3Pt+");let p=(()=>{class e{constructor(e){this.rxjsPubSub=e}ngOnInit(){}handleInput(e){this.rxjsPubSub.publishPayload({key:o.input_change,value:e})}}return e.\u0275fac=function(n){return new(n||e)(r.Ib(u))},e.\u0275cmp=r.Cb({type:e,selectors:[["two-pubsub-child"]],decls:4,vars:1,consts:[[1,"two-pubsub-child","clearfix"],[3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(r.Ob(0,"section",0),r.yc(1," (child 2)"),r.Kb(2,"br"),r.Ob(3,"input",1),r.Xb("ngModelChange",function(e){return n.inputSource=e})("ngModelChange",function(e){return n.handleInput(e)}),r.Nb(),r.Nb()),2&e&&(r.xb(3),r.ic("ngModel",n.inputSource))},directives:[a.a,a.c,a.f],styles:[".two-pubsub-child[_ngcontent-%COMP%]{margin-bottom:20px}"]}),e})(),l=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["rxjs6-behavior-subject"]],decls:23,vars:4,consts:[[1,"rxjs6-behavior-subject","clearfix"],["href","https://blog.csdn.net/my_love_download/article/details/101345248","target","_blank"]],template:function(e,n){1&e&&(r.Ob(0,"div",0),r.Ob(1,"code"),r.Ob(2,"pre"),r.yc(3,"      "),r.Ob(4,"span"),r.yc(5,"\n      1. \u57fa\u4e8e BehaviorSubject \u7684\u53d1\u5e03\u8ba2\u9605\n        \u53c2\u8003\uff1a"),r.Ob(6,"a",1),r.yc(7,"\u8fd9\u4e2a"),r.Nb(),r.Kb(8,"br"),r.yc(9,"\n        "),r.Kb(10,"one-pubsub-child"),r.yc(11,"\n        "),r.Kb(12,"two-pubsub-child"),r.yc(13,"\n      "),r.Nb(),r.yc(14,"\n    "),r.Nb(),r.Nb(),r.Ob(15,"code"),r.Ob(16,"pre"),r.yc(17,"      "),r.Ob(18,"span"),r.yc(19),r.Nb(),r.yc(20,"\n    "),r.Nb(),r.Ob(21,"pre"),r.yc(22,"      \u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a\n        observerA: 0\n        observerA: 1\n        observerA: 2\n        observerB: 2\n        observerA: 3\n        observerB: 3\n    "),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.xb(19),r.Cc("\n      2. \u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u7528 0 \u521d\u59cb\u5316BehaviorSubject\uff0c\u5f53Observer\u8ba2\u9605\u5b83\u65f6\uff0c0 \u662f\u7b2c\u4e00\u4e2a\u88ab\u63a8\u9001\u7684\u503c\u3002\n        \u7d27\u63a5\u7740\uff0c\u5728\u7b2c\u4e8c\u4e2a Observer \u8ba2\u9605 BehaviorSubject \u4e4b\u524d\uff0c\u5b83\u63a8\u9001\u4e862\uff0c\u867d\u7136\u8ba2\u9605\u5728\u63a8\u90012\u4e4b\u540e\uff0c\u4f46\u662f\u7b2c\u4e8c\u4e2a Observer \u4ecd\u7136\u80fd\u63a5\u53d7\u52302\uff1a\n\n        var subject = new Rx.BehaviorSubject(0); /* \u521d\u59cb\u503c */\n        subject.subscribe(","{","\n                next: (v) => console.log('observerA: ' + v)\n        ","}",");\n        subject.next(1);\n        subject.next(2);\n\n        subject.subscribe(","{","\n                next: (v) => console.log('observerB: ' + v)\n        ","}",");\n\n        subject.next(3);\n      "))},directives:[i,p],styles:[".rxjs6-behavior-subject[_ngcontent-%COMP%]{font-size:14px}.rxjs6-behavior-subject[_ngcontent-%COMP%]     hr{margin:5px 0}.rxjs6-behavior-subject[_ngcontent-%COMP%]     button{margin:1em;padding:.2em 1em;box-sizing:border-box;border-radius:4px;border:1px solid #8685c9}.rxjs6-behavior-subject[_ngcontent-%COMP%]     .question-title{font-size:16px}.rxjs6-behavior-subject[_ngcontent-%COMP%]     .question-answer{font-size:14px}.rxjs6-behavior-subject[_ngcontent-%COMP%]     .question-answer.weighted{font-weight:600}.rxjs6-behavior-subject[_ngcontent-%COMP%]     .question-answer.tab-4{padding-left:2%}.rxjs6-behavior-subject[_ngcontent-%COMP%]     .question-answer.tab-8{padding-left:4%}"]}),e})(),d=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(n){return new(n||e)},imports:[[s.a,b.f.forChild([{path:"",redirectTo:"index"},{path:"index",component:l}])]]}),e})()}}]);