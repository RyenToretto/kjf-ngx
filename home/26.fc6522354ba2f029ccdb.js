(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{tmb7:function(n,e,t){"use strict";t.r(e),t.d(e,"TypescriptOverviewModule",function(){return s});var r=t("tyNb"),b=t("PCNd"),c=t("fXoL");let a=(()=>{class n{constructor(n){this.router=n}toChildComponent(n){const e=this.router.url.split("/");e.pop(),e.push(n),this.router.navigate(e)}}return n.\u0275fac=function(e){return new(e||n)(c.Ib(r.b))},n.\u0275cmp=c.Cb({type:n,selectors:[["typescript-overview"]],decls:227,vars:32,consts:[[1,"typescript-overview","clearfix"],[1,"kjf-bolder-font"],["href","https://www.liaoxuefeng.com/wiki/1022910821149312/1023024381818112","target","_blank"],["href","https://rxjs-dev.firebaseapp.com/guide/overview","target","_blank"],[1,"kjf-purple-font"],[1,"kjf-orange-font"],["href","https://bk.tw.lvfukeji.com/baike-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BC%96%E7%A8%8B","target","_blank"],["href","https://rxmarbles.com/","target","_blank"],["href","https://mcxiaoke.gitbooks.io/rxdocs/content/","target","_blank"],["href","https://segmentfault.com/a/1190000014956260","target","_blank"],["href","https://ithelp.ithome.com.tw/articles/10189028","target","_blank"],["href","https://www.jianshu.com/c/0521ef8586bb","target","_blank"],["href","https://github.com/ReactiveX?page=1","target","_blank"],["href","http://reactivex.io/learnrx/","target","_blank"],["href","https://www.jianshu.com/p/fb9ff8c4dc6d","target","_blank"],["href","https://blog.mafeifan.com/","target","_blank"],["href","https://segmentfault.com/a/1190000015966793","target","_blank"],["href","https://www.jianshu.com/p/fb9ff8c4dc6d"]],template:function(n,e){1&n&&(c.Ob(0,"div",0),c.Ob(1,"code"),c.Ob(2,"pre"),c.yc(3,"    "),c.Ob(4,"span"),c.yc(5,"\n    0. "),c.Ob(6,"span",1),c.yc(7,"\u6574\u4e2a RxJS \u8bf4\u767d\u4e86\u5c31\u662f\u4e00\u4e2a\u6838\u5fc3\u4e09\u4e2a\u91cd\u70b9"),c.Nb(),c.yc(8,"\n    "),c.Nb(),c.yc(9,"\n      \u4e00\u4e2a\u6838\u5fc3\uff1a Observable \u518d\u52a0\u4e0a\u76f8\u5173\u7684 Operators(map, filter...)\n          \u8fd9\u4e2a\u90e8\u4efd\u662f\u6700\u91cd\u8981\u7684\uff08\u4e09\u4e2a\u91cd\u70b9\u672c\u8d28\u4e0a\u4e5f\u662f\u56f4\u7ed5\u8457\u8fd9\u4e2a\u6838\u5fc3\u5728\u8f6c\uff09\n\n      \u4e09\u4e2a\u91cd\u70b9\uff1a\n        - Observer\n            \u4e00\u5b9a\u4f1a\u7528\u5230\u5374\u662f\u6700\u7b80\u5355\u7684\n        - Subject\n            \u5e94\u7528\u5230\u7684\u9891\u7387\u5c31\u76f8\u5bf9\u4f4e\u5f88\u591a\uff08redux-observable \u5c31\u662f\u7528\u4e86 Subject \u5b9e\u4f53\u505a\u7684\uff09\n        - Schedulers\n    "),c.Nb(),c.Nb(),c.Ob(10,"code"),c.Ob(11,"pre"),c.yc(12,"    "),c.Ob(13,"span"),c.yc(14,"\n    1. "),c.Ob(15,"span",1),c.yc(16,"\u5728\u524d\u7aef\uff0c\u6211\u4eec\u901a\u5e38\u6709\u8fd9\u4e48\u4e00\u4e9b\u65b9\u5f0f\u6765"),c.Ob(17,"span",1),c.yc(18," \u5904\u7406\u5f02\u6b65 "),c.Nb(),c.yc(19,"\u7684\u4e1c\u897f\uff1a"),c.Nb(),c.yc(20,"\n    "),c.Nb(),c.yc(21,"\n      \u56de\u8c03 ---- \u4e8b\u4ef6 ---- Promise ---- "),c.Ob(22,"a",2),c.yc(23,"Generator "),c.Nb(),c.yc(24," "),c.Kb(25,"br"),c.yc(26,"\n      \u56de\u8c03\u3001\u4e8b\u4ef6\u3001\u8ba2\u9605\u53d1\u5e03 ===> \u9002\u5408\u5904\u7406"),c.Ob(27,"span",1),c.yc(28," \u5206\u53d1\u6027\u8d28 "),c.Nb(),c.yc(29,"\u7684\u9700\u6c42 "),c.Kb(30,"br"),c.yc(31,"\n      Promise\u548cGenerator ===> \u9002\u5408\u5904\u7406"),c.Ob(32,"span",1),c.yc(33," \u6d41\u7a0b\u6027\u8d28 "),c.Nb(),c.yc(34,"\u7684\u9700\u6c42 "),c.Kb(35,"br"),c.yc(36),c.Nb(),c.Nb(),c.Ob(37,"code"),c.Ob(38,"pre"),c.yc(39,"    "),c.Ob(40,"span"),c.yc(41,"\n    2. "),c.Ob(42,"span",1),c.yc(43,"\u4ec0\u4e48\u662frxjs\uff1a"),c.Nb(),c.yc(44,"\n    "),c.Nb(),c.yc(45,"\n    \u6211\u4eec\u90fd\u77e5\u9053 JS \u662f\u4ec0\u4e48\uff0c\u90a3\u4e48\u4ec0\u4e48\u662f Rx \u5462\uff1f "),c.Kb(46,"br"),c.yc(47,"\n      Rx \u662f Reactive Extension\uff08\u4e5f\u53eb ReactiveX\uff09\u7684\u7b80\u79f0\uff0c\u6307\u7684\u662f\u5b9e\u8df5\u54cd\u5e94\u5f0f\u7f16\u7a0b\u7684\u4e00\u5957\u5de5\u5177\n      "),c.Ob(48,"a",3),c.yc(49,"\n      Rx \u5b98\u65b9"),c.Nb(),c.yc(50,"\u6709\u4ecb\u7ecd\u662f"),c.Ob(51,"span",4),c.yc(52,"\u4e00\u5957\u901a\u8fc7\u53ef\u76d1\u542c\u6d41\u6765\u505a\u5f02\u6b65\u7f16\u7a0b\u7684 API"),c.Nb(),c.yc(53,"\uff08An API for asynchronous programming with observable streams\uff09\u3002"),c.Kb(54,"br"),c.yc(55,"\n      Rx \u6700\u65e9\u662f\u7531\u5fae\u8f6f\u5f00\u53d1\u7684 LinQ \u6269\u5c55\u51fa\u6765\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u4e4b\u540e\u7531\u5f00\u6e90\u793e\u533a\u7ef4\u62a4\uff0c\u6709\u591a\u79cd\u8bed\u8a00\u7684\u5b9e\u73b0\uff0c\u5982 Java \u7684 RxJava\uff0cPython \u7684 RxPY \u7b49\uff0c\u800c RxJS \u5c31\u662f Rx \u7684 JavaScript \u8bed\u8a00\u5b9e\u73b0\u3002\n\n      \u4ece\u4e8b\u4ef6\u5230\u6d41\uff0c\u5b83\u88ab\u79f0\u4e3a lodash for events\uff0c\u5012\u4e0d\u5982\u8bf4\u662f"),c.Ob(56,"span",1),c.yc(57," lodash for stream "),c.Nb(),c.yc(58,"\u66f4\u8d34\u5207\n        \u6211\u4eec\u53ef\u4ee5\u628a\n            "),c.Ob(59,"span",1),c.yc(60," \u7528\u6237\u64cd\u4f5c "),c.Nb(),c.yc(61,"\n            "),c.Ob(62,"span",1),c.yc(63," \u7f51\u7edc\u54cd\u5e94 "),c.Nb(),c.yc(64,"\n            "),c.Ob(65,"span",1),c.yc(66," \u5b9a\u65f6\u5668 "),c.Nb(),c.yc(67,"\n            "),c.Ob(68,"span",1),c.yc(69," Worker "),c.Nb(),c.yc(70,"\n          \u7b49\u7b49\u4e00\u5207\u8f93\u5165\u90fd\u5f53\u505a\u6570\u636e\u6d41\u6765\u5904\u7406\n    "),c.Nb(),c.Nb(),c.Ob(71,"code"),c.Ob(72,"pre"),c.yc(73,"    "),c.Ob(74,"span"),c.yc(75,"\n    3. \u6570\u636e\u6d41\u662f\u4e00\u79cd\u53ef\u89c2\u5bdf\u7684\u5e8f\u5217\uff0c\u53ef\u4ee5\u88ab\u8ba2\u9605"),c.Nb(),c.yc(76,"\n    "),c.Nb(),c.Nb(),c.Ob(77,"code"),c.Ob(78,"pre"),c.yc(79,"    "),c.Ob(80,"span"),c.yc(81,"\n    4. "),c.Ob(82,"span",1),c.yc(83,"RxJS \u5f15\u5165\u4e86\u4e24\u79cd\u91cd\u8981\u7684\u7f16\u7a0b\u601d\u60f3\uff1a\u51fd\u6570\u5f0f\u7f16\u7a0b\u548c\u54cd\u5e94\u5f0f\u7f16\u7a0b\u3002"),c.Nb(),c.yc(84,"\n    "),c.Nb(),c.yc(85,"\n    \u5b9e\u9645\u4e0aRx \u7ec4\u5408\u4e86\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08Observer pattern \uff09\u3001\u8fed\u4ee3\u5668\u6a21\u5f0f\uff08Iterator pattern\uff09\u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\n      Observer \u8ddf Iterator \u6709\u4e2a\u5171\u901a\u7684\u7279\u6027\uff0c\u5c31\u662f\u4ed6\u4eec\u90fd\u662f \u6e10\u8fdb\u5f0f(progressive) \u7684\u53d6\u5f97\u8d44\u6599\n      \u5dee\u522b\u53ea\u5728\u4e8e Observer \u662f\u751f\u4ea7\u8005(Producer)\u63a8\u9001\u8d44\u6599(push)\uff0c\u800c Iterator \u662f\u6d88\u8d39\u8005(Consumer)\u8981\u6c42\u8d44\u6599(pull)\n\n      "),c.Ob(86,"span",5),c.yc(87,"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08Observer pattern \uff09"),c.Nb(),c.yc(88,"\n        "),c.Ob(89,"p",4),c.yc(90,"\u7279\u70b9\uff1a\u6e10\u8fdb\u5f0f\u4f7f\u7528\u6570\u636e\u7684\uff0c\u6570\u636e\u662f\u63a8\u9001\uff08push\uff09\u8fc7\u6765\u7684"),c.Nb(),c.yc(91,"\n          \u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u6211\u4eec\u5176\u5b9e\u6bd4\u8f83\u719f\u6089\u4e86\u3002\u8ba2\u9605\u8005\u8ba2\u9605\u540e\uff0c\u53d1\u5e03\u8005\u5410\u51fa\u6570\u636e\u65f6\uff0c\u8ba2\u9605\u8005\u4f1a\u54cd\u5e94\u5f0f\u8fdb\u884c\u5904\u7406\u3002\n          \u6bd4\u5982\u5404\u79cd DOM \u4e8b\u4ef6\u7684\u76d1\u542c\uff0c\u4e5f\u662f\u89c2\u5bdf\u8005\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u8df5\u3002\u6838\u5fc3\u5c31\u662f\u53d1\u5e03\u8005\u53d1\u5e03\u4e8b\u4ef6\uff0c\u89c2\u5bdf\u8005\u9009\u62e9\u65f6\u673a\u53bb\u8ba2\u9605\uff08subscribe\uff09\u4e8b\u4ef6\u3002\n\n      "),c.Ob(92,"span",5),c.yc(93,"\u8fed\u4ee3\u5668\u6a21\u5f0f\uff08Iterator pattern\uff09"),c.Nb(),c.yc(94,"\n        "),c.Ob(95,"p",4),c.yc(96,"\u7279\u70b9\uff1a\u6e10\u8fdb\u5f0f\u4f7f\u7528\u6570\u636e\u7684\uff0c\u6570\u636e\u662f\u81ea\u5df1\u53bb\u62c9\u53d6\uff08pull\uff09\u7684"),c.Nb(),c.yc(97,"\n          \uff01\uff01\uff01\u3010Rx \u4e2d\u7684\u6570\u636e\u662f Observable \u63a8\u9001\u7684\uff0c\u89c2\u5bdf\u8005\u4e0d\u9700\u8981\u4e3b\u52a8\u53bb\u62c9\u53d6\u3002\u3011\n        "),c.Ob(98,"p",4),c.yc(99,"\u5ef6\u8fdf\u8fd0\u7b97(evaluation strategy)"),c.Nb(),c.yc(100),c.Ob(101,"span",5),c.yc(102,"\u51fd\u6570\u5f0f\u7f16\u7a0b\uff08Functional Programming\uff0c\u7b80\u79f0 FP\uff09"),c.Nb(),c.yc(103,"\n        \u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u5f3a\u8c03"),c.Ob(104,"p",4),c.yc(105,"\u4f7f\u7528\u51fd\u6570\u6765\u601d\u8003\u95ee\u9898\u3001\u7f16\u5199\u4ee3\u7801"),c.Nb(),c.yc(106,"\n        "),c.Ob(107,"p",4),c.yc(108,"\u51fd\u6570\u662f\u4e00\u7b49\u516c\u6c11"),c.Nb(),c.yc(109,"\n          \u4e5f\u5c31\u662f\u8bf4\u51fd\u5f0f\u80fd\u591f\u88ab\u8d4b\u503c\u7ed9\u53d8\u6570\uff0c\u51fd\u5f0f\u4e5f\u80fd\u591f\u88ab\u5f53\u4f5c\u53c2\u6570\u4f20\u5165\u53e6\u4e00\u4e2a\u51fd\u5f0f\uff0c\u4e5f\u53ef\u5f53\u4f5c\u4e00\u4e2a\u51fd\u5f0f\u7684\u56de\u4f20\u503c\n\n        \u5bf9\u51fd\u6570\u7684\u4f7f\u7528\u6709\u4e00\u4e9b\u7279\u6b8a\u8981\u6c42\uff1a\n          \uff081\uff09\u58f0\u660e\u5f0f\uff08Declarative\uff09\n              \u8ba9\u5f00\u53d1\u8005\u53ea\u9700\u8981\u8868\u8fbe\u201d\u60f3\u8981\u505a\u4ec0\u4e48\u201d\uff0c\u800c\u4e0d\u9700\u8981\u8868\u8fbe\u201c\u600e\u4e48\u53bb\u505a\u201d\u3002\n          \uff082\uff09\u7eaf\u51fd\u6570\uff08Pure Function\uff09\n              \u6ee1\u8db3\u7eaf\u51fd\u6570\u7684\u7279\u6027\u4e5f\u53eb\u505a\u5f15\u7528\u900f\u660e\u5ea6\uff08Referential Transparency\uff09\u3002\n              \u6307\u7684\u662f\u6267\u884c\u7ed3\u679c\u7531\u8f93\u5165\u53c2\u6570\u51b3\u5b9a\uff0c\u53c2\u6570\u76f8\u540c\u65f6\u7ed3\u679c\u76f8\u540c\uff0c\u4e0d\u53d7\u5176\u4ed6\u6570\u636e\u5f71\u54cd\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5e26\u6765\u526f\u4f5c\u7528\uff08Side Effect\uff09\u7684\u51fd\u6570\u3002\n                "),c.Ob(110,"span",5),c.yc(111,"\u526f\u4f5c\u7528"),c.Nb(),c.yc(112,"\u6307\u7684\u662f "),c.Ob(113,"span",4),c.yc(114,"\u51fd\u6570\u505a\u4e86\u548c\u672c\u8eab\u8fd0\u7b97\u8fd4\u56de\u503c\u6ca1\u6709\u5173\u7cfb\u7684\u4e8b\u60c5"),c.Nb(),c.yc(115,"\n                  \u5982\u4fee\u6539\u5916\u90e8\u53d8\u91cf\u6216\u4f20\u5165\u7684\u53c2\u6570\u5bf9\u8c61\uff0c\u751a\u81f3\u662f\u6267\u884c console.log \u90fd\u7b97\u662f Side Effect\u3002\n                  \u524d\u7aef\u4e2d\u5e38\u89c1\u7684\u526f\u4f5c\u7528\u6709\u53d1\u9001 http \u8bf7\u6c42\u3001\u64cd\u4f5c DOM\u3001\u8c03\u7528 alert \u6216\u8005 confirm \u51fd\u6570\u7b49\u3002\n          \uff083\uff09\u6570\u636e\u4e0d\u53ef\u53d8\u6027\uff08Immutability\uff09\n              \u6307\u8fd9\u4e2a\u6570\u636e\u4e00\u65e6\u4ea7\u751f\uff0c\u5b83\u7684\u503c\u5c31\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u3002\n\n        \u4f18\u52bf1. \u53ef\u8bfb\u6027\u9ad8\n          [9, 4].concat([8, 7]) // \u5408\u4f75\u9635\u5217\n                .sort()  // \u6392\u5e8f\n                .filter(x => x > 5) // \u8fc7\u6ee4\u51fa\u5927\u4e8e 5 \u7684\n        \u4f18\u52bf2. \u53ef\u7ef4\u62a4\u6027\u9ad8\n          \u6267\u884c\u7ed3\u679c\u4e0d\u4f9d\u8d56\u5916\u90e8\u72b6\u6001\uff0c\u4e14\u4e0d\u4f1a\u5bf9\u5916\u90e8\u73af\u5883\u6709\u4efb\u4f55\u64cd\u4f5c\uff0c\u4f7f Functional Programming \u80fd\u66f4\u597d\u7684\u9664\u9519\u53ca\u64b0\u5199\u5355\u5143\u6d4b\u8bd5\n\n      "),c.Ob(116,"span",5),c.yc(117,"\u54cd\u5e94\u5f0f\u7f16\u7a0b\uff08Reactive Programming\uff09"),c.Nb(),c.yc(118,"\n        \u4e2d\u6587\u7ef4\u57fa\u4e0a\u8bf4"),c.Ob(119,"a",6),c.yc(120,"\u54cd\u5e94\u5f0f\u7f16\u7a0b"),c.Nb(),c.yc(121,"\u662f\u4e00\u79cd\u9762\u5411\u6570\u636e\u6d41\uff08stream\uff09\u548c\u53d8\u5316\u4f20\u64ad\u7684\u7f16\u7a0b\u8303\u5f0f\u3002\n          \u54cd\u5e94\u5f0f\u7f16\u7a0b\u62bd\u8c61\u51fa\u4e86\u6d41\u8fd9\u4e2a\u6982\u5ff5\uff0c\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u62bd\u8c61\u7ea7\u522b\uff0c\u4e0d\u7528\u53bb\u5173\u5fc3\u5927\u91cf\u7684\u5b9e\u73b0\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u5bf9\u6570\u636e\u6d41\u7684\u64cd\u4f5c\u3002\n    "),c.Nb(),c.Nb(),c.Ob(122,"code"),c.Ob(123,"pre"),c.yc(124,"    "),c.Ob(125,"span"),c.yc(126,"\n    5. RxJS \u7684 import \u8def\u5f84\u6709\u4ee5\u4e0b 5 \u79cd\uff1a\n    "),c.Nb(),c.yc(127),c.Nb(),c.Nb(),c.Ob(128,"code"),c.Ob(129,"pre"),c.yc(130,"    "),c.Ob(131,"span"),c.yc(132,"\n    6. "),c.Ob(133,"span",1),c.yc(134,"\u5751\u4e0e\u6700\u4f73\u5b9e\u8df5\uff1a"),c.Nb(),c.yc(135,"\n    "),c.Nb(),c.yc(136,"\n      "),c.Ob(137,"span",1),c.yc(138,"\u53d6\u6d88\u8ba2\u9605"),c.Nb(),c.yc(139,"\n        subscribe \u4e4b\u540e\uff0c\u4f60\u7684\u56de\u8c03\u51fd\u6570\u5c31\u88ab\u522b\u4eba\u5f15\u7528\u4e86\uff0c\u56e0\u6b64\u5982\u679c\u4e0d\u64a4\u9500\u5bf9\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u5f15\u7528\uff0c\u90a3\u4e48\u4e0e\u5b83\u76f8\n        \u5173\u7684\u5185\u5b58\u5c31\u6c38\u8fdc\u4e0d\u4f1a\u91ca\u653e\uff0c\u540c\u65f6\uff0c\u5b83\u4ecd\u7136\u4f1a\u5728\u6d41\u4e2d\u6709\u6570\u636e\u8fc7\u6765\u65f6\u88ab\u8c03\u7528\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5947\n        \u602a\u7684 console.log \u7b49\u610f\u5916\u884c\u4e3a\u3002\n        \u56e0\u6b64\uff0c\u5fc5\u987b\u627e\u5230\u67d0\u4e2a\u65f6\u673a\u64a4\u9500\u5bf9\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u5f15\u7528\u3002\u4f46\u5176\u5b9e\u4e0d\u4e00\u5b9a\u9700\u8981\u90a3\u4e48\u9ebb\u70e6\u3002\n        \u89e3\u9664\u5bf9\u56de\u8c03\u51fd\u6570\u7684\u5f15\u7528\u6709\u4e24\u79cd\u65f6\u673a\uff0c\n          \u4e00\u79cd\u662f\u8fd9\u4e2a\u6d41\u5b8c\u6210\uff08complete\uff0c\u5305\u62ec\u6b63\u5e38\u7ed3\u675f\u548c\u5f02\u5e38\u7ed3\u675f\uff09\u4e86\uff0c\n            \u5f53\u6d41\u5b8c\u6210\u65f6\uff0c\u4f1a\u81ea\u52a8\u89e3\u9664\u5168\u90e8\u8ba2\u9605\u56de\u8c03\uff0c\u800c\u6240\u6709\u7684\u6709\u9650\u6d41\u90fd\u662f\u4f1a\u81ea\u52a8\u5b8c\u6210\u7684\u3002\n            \u53ea\u6709\u65e0\u5c3d\u6d41\u624d\u9700\u8981\u7279\u522b\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8ba2\u9605\u65b9\u8981\u4e3b\u52a8\u53d6\u6d88\u8ba2\u9605\u3002\n          \u4e00\u79cd\u662f\u8ba2\u9605\u65b9\u4e3b\u52a8\u53d6\u6d88\u3002\n        \u5f53\u8c03\u7528 Observable \u7684 subscribe \u65b9\u6cd5\u65f6\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a Subscription \u7c7b\u578b\u7684\u5f15\u7528\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u4e00\n        \u4e2a\u8ba2\u9605\u51ed\u8bc1\u3002\u628a\u5b83\u4fdd\u5b58\u4e0b\u6765\uff0c\u7b49\u6070\u5f53\u7684\u65f6\u673a\u8c03\u7528\u5b83\u7684 unsubscribe \u65b9\u6cd5\u5c31\u53ef\u4ee5\u53d6\u6d88\u8ba2\u9605\u4e86\u3002\n          \u6bd4\u5982\u5728 Angular \u4e2d\uff0c\u5982\u679c\u4f60\u8ba2\u9605\u4e86\u65e0\u5c3d\u6d41\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u628a\u8ba2\u9605\u51ed\u8bc1\u4fdd\u5b58\u5728\u79c1\u6709\u53d8\u91cf\u91cc\uff0c\u5e76\u4e14\n          \u5728 ngOnDestroy \u56de\u8c03\u4e2d\u8c03\u7528\u5b83\u7684 unsubscribe \u65b9\u6cd5\u3002\n\n      "),c.Ob(140,"span",1),c.yc(141,"\u7c7b\u578b\u68c0\u67e5"),c.Nb(),c.yc(142,"\n        \u53ea\u8981\u6709\u53ef\u80fd\uff0c\u8bf7\u5c3d\u91cf\u4f7f\u7528 TypeScript \u6765\u4e66\u5199 RxJS \u7a0b\u5e8f\u3002\n        \u7531\u4e8e\u5927\u91cf operator \u90fd\u4f1a\u6539\u53d8\u6d41\u4e2d\u7684\u6570\u636e\u7c7b\u578b\uff0c\u56e0\u6b64\u5982\u679c\u9760\u4eba\u529b\u6765\u8ffd\u8e2a\u6570\u636e\u7c7b\u578b\u7684\u53d8\u5316\u65e2\u7e41\u7410\u53c8\u5bb9\u6613\u51fa\u9519\u3002\n        TypeScript \u7684\u7c7b\u578b\u68c0\u67e5\u53ef\u4ee5\u7ed9\u4f60\u63d0\u4f9b\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u65e2\u7701\u5fc3\u53c8\u5b89\u5168\uff0c\u800c\u4e14\u8fd9\u4e24\u4e2a\u90fd\u662f\u5fae\u8f6f\u5bb6\u7684\uff0c\u642d\u914d\u4f7f\u7528\uff0c\u98ce\u5473\u66f4\u4f73\u3002\n\n      "),c.Ob(143,"span",1),c.yc(144,"\u4ee3\u7801\u98ce\u683c\u5f0f"),c.Nb(),c.yc(145,"\n        \u5982\u540c\u6240\u6709 FP \u7a0b\u5e8f\u4e00\u6837\uff0cReactiveX \u7684\u4ee3\u7801\u4e5f\u5e94\u8be5\u7531\u4e00\u7cfb\u5217\u5c0f\u7684\u3001\u5355\u4e00\u804c\u8d23\u7684\u3001\u65e0\u526f\u4f5c\u7528\u7684\u51fd\u6570\u7ec4\u6210\u3002\n        \u867d\u7136 JavaScript \u65e0\u6cd5\u50cf Java \u4e2d\u90a3\u6837\u5bf9 Lambda \u8868\u8fbe\u5f0f\u7684\u526f\u4f5c\u7528\u505a\u51fa\u7f16\u8bd1\u671f\u9650\u5236\uff0c\u4f46\u662f\u4ecd\u7136\u8981\u9075\u5faa\u540c\n        \u6837\u7684\u539f\u5219\uff0c\u575a\u6301\u65e0\u526f\u4f5c\u7528\u548c\u6570\u636e\u4e0d\u53d8\u6027\u3002\n    "),c.Nb(),c.Nb(),c.Ob(146,"code"),c.Ob(147,"pre"),c.yc(148,"    "),c.Ob(149,"span"),c.yc(150,"\n    7. "),c.Ob(151,"span",1),c.yc(152,"\u53c2\u8003\uff1a"),c.Nb(),c.yc(153,"\n    "),c.Nb(),c.yc(154,"\n      "),c.Ob(155,"span",1),c.yc(156,"\u5f39\u73e0\u56fe"),c.Nb(),c.yc(157,"\n        "),c.Ob(158,"a",7),c.yc(159,"https://rxmarbles.com/"),c.Nb(),c.yc(160,"\n\n      "),c.Ob(161,"span",1),c.yc(162,"ReactiveX\u6587\u6863"),c.Nb(),c.yc(163,"\n        "),c.Ob(164,"a",8),c.yc(165,"https://mcxiaoke.gitbooks.io/rxdocs/content/"),c.Nb(),c.yc(166,"\n\n      "),c.Ob(167,"span",1),c.yc(168,"RxJS 6\u6709\u54ea\u4e9b\u65b0\u53d8\u5316\uff1f"),c.Nb(),c.yc(169,"\n        "),c.Ob(170,"a",9),c.yc(171,"https://segmentfault.com/a/1190000014956260"),c.Nb(),c.yc(172,"\n\n      "),c.Ob(173,"span",1),c.yc(174,"30 \u5929\u7cbe\u901a rxjs"),c.Nb(),c.yc(175,"\n        "),c.Ob(176,"a",10),c.yc(177,"https://ithelp.ithome.com.tw/articles/10189028"),c.Nb(),c.yc(178,"\n\n      "),c.Ob(179,"span",1),c.yc(180,"rxjs \u7b80\u4e66\u5b66\u4e60\u8d44\u6e90"),c.Nb(),c.yc(181,"\n        "),c.Ob(182,"a",11),c.yc(183,"https://www.jianshu.com/c/0521ef8586bb"),c.Nb(),c.yc(184,"\n\n      "),c.Ob(185,"span",1),c.yc(186,"rxXXX git\u4ed3\u50a8"),c.Nb(),c.yc(187,"\n        "),c.Ob(188,"a",12),c.yc(189,"https://github.com/ReactiveX?page=1"),c.Nb(),c.yc(190,"\n\n      "),c.Ob(191,"span",1),c.yc(192,"\u5728\u7ebf\u7ec3\u4e60 rxjs"),c.Nb(),c.yc(193,"\n        "),c.Ob(194,"a",13),c.yc(195,"http://reactivex.io/learnrx/"),c.Nb(),c.yc(196,"\n\n      "),c.Ob(197,"span",1),c.yc(198,"js \u539f\u751f\u5199 \u89c2\u5bdf\u8005\u6a21\u5f0f\u3001\u8fed\u4ee3\u5668\u6a21\u5f0f"),c.Nb(),c.yc(199,"\n        "),c.Ob(200,"a",14),c.yc(201,"https://www.jianshu.com/p/fb9ff8c4dc6d"),c.Nb(),c.yc(202,"\n\n      "),c.Ob(203,"span",1),c.yc(204,"mafeifan \u6280\u672f\u535a\u5ba2"),c.Nb(),c.yc(205,"\n        "),c.Ob(206,"a",15),c.yc(207,"https://blog.mafeifan.com/"),c.Nb(),c.yc(208,"\n\n      "),c.Ob(209,"span",1),c.yc(210,"rxjs \u54cd\u5e94\u5f0f\u7f16\u7a0b"),c.Nb(),c.yc(211,"\n        "),c.Ob(212,"a",16),c.yc(213,"https://segmentfault.com/a/1190000015966793"),c.Nb(),c.yc(214,"\n    "),c.Nb(),c.Nb(),c.yc(215," \u53c2\u8003\uff1a"),c.Kb(216,"br"),c.yc(217," \u4f5c\u8005\uff1areadilen\uff1a"),c.Kb(218,"br"),c.yc(219," \u94fe\u63a5\uff1a"),c.Ob(220,"a",17),c.yc(221,"https://www.jianshu.com/p/fb9ff8c4dc6d"),c.Nb(),c.Kb(222,"br"),c.yc(223," \u6765\u6e90\uff1a\u7b80\u4e66 \u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"),c.Kb(224,"br"),c.Kb(225,"br"),c.Kb(226,"br"),c.Nb()),2&n&&(c.xb(36),c.Dc("\n\n        \u4ee3\u7801\uff1a\n            var observable = Rx.Observable\n                .create(function(observer) ","{","\n                  observer.next('Jerry'); // RxJS 4.x \u4ee5\u524d\u7684\u7248\u672c\u7528 onNext\n                  observer.next('Anna');\n\n                  setTimeout(() => ","{","\n                        observer.next('RxJS 30 days!');\n                  ","}",", 30)\n                ","}",")\n\n            console.log('start');\n            observable.subscribe(function(value) ","{","\n                  console.log(value);\n            ","}",");\n            console.log('end');\n        \u8fd0\u884c\uff1a\n          start\n          Jerry\n          Anna\n          end\n          RxJS 30 days!\n    "),c.xb(64),c.Ec(["\n          \u6216\u8bf4 call-by-need\uff0c\u662f\u4e00\u79cd\u8fd0\u7b97\u7b56\u7565(evaluation strategy)\uff0c\n          \u7b80\u5355\u6765\u8bf4\u6211\u4eec\u5ef6\u8fdf\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u8fd0\u7b97\u65f6\u673a, \u76f4\u5230\u771f\u6b63\u9700\u8981\u5b83\u7684\u503c\u5728\u505a\u8fd0\u7b97\n              function* getNumbers(words) ","{","\n                for (let word of words) ","{","\n                  if (/^[0-9]+$/.test(word)) ","{","\n                    yield parseInt(word, 10);\n                  ","}","\n                ","}","\n              ","}","\n              const iterator = getNumbers('30 \u5929\u7cbe\u901a RxJS (04)');\n              iterator.next(); // ","{"," value: 3, done: false ","}","\n              iterator.next(); // ","{"," value: 0, done: false ","}","\n              iterator.next(); // ","{"," value: 0, done: false ","}","\n              iterator.next(); // ","{"," value: 4, done: false ","}","\n              iterator.next(); //","{"," value: undefined, done: true ","}","\n            \u5f53\u6211\u4eec\u628a\u4e00\u4e2a\u5b57\u4e32\u4e22\u8fdb getNumbers \u51fd\u5f0f\u65f6\uff0c\u5e76\u6ca1\u6709\u9a6c\u4e0a\u8fd0\u7b97\u51fa\u5b57\u4e32\u4e2d\u7684\u6240\u6709\u6570\u5b57\uff0c\n            \u5fc5\u987b\u7b49\u5230\u6211\u4eec\u6267\u884c next() \u65f6\uff0c\u624d\u4f1a\u771f\u7684\u505a\u8fd0\u7b97\n\n      "]),c.xb(27),c.Ec(["\n      (1) \u521b\u5efa Observable \u7684\u65b9\u6cd5\u3001types\u3001schedulers \u548c\u4e00\u4e9b\u5de5\u5177\u65b9\u6cd5\n          import ","{","\n            Observable,\n            Subject,\n            asapScheduler,\n            pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver\n          ","}"," from 'rxjs';\n\n      (2) \u64cd\u4f5c\u7b26 operators\n          import  ","{"," map, filter, scan ","}"," from 'rxjs/operators';\n\n      (3) webSocket\n          import  ","{"," webSocket ","}"," from 'rxjs/webSocket';\n\n      (4) ajax\n          import  ","{"," ajax ","}"," from 'rxjs/ajax';\n\n      (5) \u6d4b\u8bd5\n          import  ","{"," TestScheduler ","}"," from 'rxjs/testing';\n    "]))},styles:[".typescript-overview[_ngcontent-%COMP%]{font-size:14px}.typescript-overview[_ngcontent-%COMP%]     hr{margin:5px 0}.typescript-overview[_ngcontent-%COMP%]     button{margin:1em;padding:.2em 1em;box-sizing:border-box;border-radius:4px;border:1px solid #8685c9}.typescript-overview[_ngcontent-%COMP%]     .question-title{font-size:16px}.typescript-overview[_ngcontent-%COMP%]     .question-answer{font-size:14px}.typescript-overview[_ngcontent-%COMP%]     .question-answer.weighted{font-weight:600}.typescript-overview[_ngcontent-%COMP%]     .question-answer.tab-4{padding-left:2%}.typescript-overview[_ngcontent-%COMP%]     .question-answer.tab-8{padding-left:4%}"]}),n})(),s=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(e){return new(e||n)},imports:[[b.a,r.f.forChild([{path:"",redirectTo:"index"},{path:"index",component:a}])]]}),n})()}}]);