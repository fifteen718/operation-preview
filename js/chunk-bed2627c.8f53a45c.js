(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bed2627c"],{"5a2e":function(e,a,t){"use strict";t.r(a),function(e){t("cadf"),t("551c"),t("097d");e.exports=t("8563")}.call(this,t("dd40")(e))},8563:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"lk-toolbar"},[t("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){e.addApp(null)}}},[e._v("新增APP")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,"element-loading-text":"拼命加载中",height:"100%",border:""}},[t("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),t("el-table-column",{attrs:{prop:"ctime","min-width":"150",label:"创建时间",formatter:e.$dateFormatter}}),t("el-table-column",{attrs:{prop:"appName","min-width":"150",label:"名称"}}),t("el-table-column",{attrs:{prop:"osType","min-width":"150",label:"平台",formatter:e.$osTypeFormatter}}),t("el-table-column",{attrs:{prop:"version","min-width":"150",label:"版本号"}}),t("el-table-column",{attrs:{prop:"pkgPath","min-width":"150",label:"源地址"}}),t("el-table-column",{attrs:{prop:"remark","min-width":"150",label:"版本描述"}}),t("el-table-column",{attrs:{prop:"size","min-width":"150",label:"包大小(M)"}}),t("el-table-column",{attrs:{label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.addApp(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){e.deleteApp(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryParams.currentPage,"page-size":20,total:e.total,layout:"->, total, prev, pager, next, jumper"},on:{"current-change":e.queryList,"update:currentPage":function(a){e.$set(e.queryParams,"currentPage",a)}}}),t("add-dialog",{attrs:{dialogData:e.rowData},model:{value:e.addDialogVisible,callback:function(a){e.addDialogVisible=a},expression:"addDialogVisible"}})],1)},i=[],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addDialogVisible,center:""},on:{"update:visible":function(a){e.addDialogVisible=a}}},[t("el-form",{staticClass:"lk-form",attrs:{"label-position":"right","label-width":"100px"}},[t("el-form-item",{class:[e.errors.has("appName")?"is-error":"","is-required"],attrs:{label:"应用名称"}},[t("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|minMax:1,18",expression:"'required|minMax:1,18'"}],attrs:{name:"appName","data-vv-as":"应用名称"},model:{value:e.formData.appName,callback:function(a){e.$set(e.formData,"appName",a)},expression:"formData.appName"}}),e.errors.has("appName")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("appName")))]):e._e()],1),t("el-form-item",{class:[e.errors.has("version")?"is-error":"","is-required"],attrs:{label:"版本号"}},[t("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|noCN|minMax:1,18",expression:"'required|noCN|minMax:1,18'"}],attrs:{name:"version","data-vv-as":"版本号"},model:{value:e.formData.version,callback:function(a){e.$set(e.formData,"version",a)},expression:"formData.version"}}),e.errors.has("version")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("version")))]):e._e()],1),t("el-form-item",{class:[e.errors.has("osType")?"is-error":"","is-required"],attrs:{label:"平台类型"}},[t("el-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{placeholder:"请选择平台类型","data-vv-as":"平台类型"},model:{value:e.formData.osType,callback:function(a){e.$set(e.formData,"osType",a)},expression:"formData.osType"}},[t("el-option",{attrs:{label:"iOS",value:1}}),t("el-option",{attrs:{label:"Android",value:2}})],1),e.errors.has("osType")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("osType")))]):e._e()],1),t("el-form-item",{class:[e.errors.has("pkgPath")?"is-error":"","is-required"],attrs:{label:"源地址"}},[t("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"pkgPath","data-vv-as":"源地址"},model:{value:e.formData.pkgPath,callback:function(a){e.$set(e.formData,"pkgPath",a)},expression:"formData.pkgPath"}}),e.errors.has("pkgPath")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("pkgPath")))]):e._e()],1),t("el-form-item",{class:[e.errors.has("size")?"is-error":"","is-required"],attrs:{label:"包体大小"}},[t("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"number",name:"size","data-vv-as":"包体大小"},model:{value:e.formData.size,callback:function(a){e.$set(e.formData,"size",a)},expression:"formData.size"}}),e._v("\n            M\n            "),e.errors.has("size")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("size")))]):e._e()],1),t("el-form-item",{class:[e.errors.has("remark")?"is-error":"","is-required"],attrs:{label:"升级描述"}},[t("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"remark","data-vv-as":"升级描述",type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入升级描述，如：1、聊天功能优化；2、新增红包功能；3、任务系统改造。"},model:{value:e.formData.remark,callback:function(a){e.$set(e.formData,"remark",a)},expression:"formData.remark"}}),e.errors.has("remark")?t("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("remark")))]):e._e()],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.addDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.sureHandler}},[e._v("确 认")])],1)],1)},o=[],l=t("be94"),n={props:{value:{type:Boolean,default:!1},dialogData:{}},data:function(){return{formData:{},dialogTitle:"新增APP版本升级",addDialogVisible:!1}},watch:{value:function(e){this.addDialogVisible=e,e&&(console.log("val is"),console.log(e),this.dialogData?(this.dialogTitle="修改APP版本升级",this.formData=Object(l["a"])({},this.dialogData)):(this.dialogTitle="新增APP版本升级",this.formData={}),this.errors.clear())},addDialogVisible:function(e){this.$emit("input",e)}},methods:{sureHandler:function(){var e=this;this.$validator.validateAll().then(function(a){if(a){var t={};t.appId=e.formData.appId||"",t.appName=e.formData.appName,t.version=e.formData.version,t.osType=e.formData.osType,t.pkgPath=e.formData.pkgPath,t.size=e.formData.size,t.remark=e.formData.remark,e.$apis.saveOrUpdateApp(t).then(function(a){"2000"===a.code?(e.$message.success(t.appId?"修改成功":"添加成功"),e.addDialogVisible=!1,e.$parent.queryList()):e.$message.error(a.message)}).catch(function(a){e.$message.error(a)})}})}}},d=n,c=t("2877"),u=Object(c["a"])(d,s,o,!1,null,null,null);u.options.__file="addDialog.vue";var m=u.exports,p={data:function(){return{queryParams:{currentPage:1},addDialogVisible:!1,rowData:null,tableData:null,total:null,tableLoading:!1}},components:{addDialog:m},created:function(){this.queryList()},methods:{queryList:function(){var e=this;this.tableLoading=!0,this.$apis.queryApp(this.queryParams).then(function(a){e.tableLoading=!1,"2000"===a.code?(e.tableData=a.data.list,e.total=a.data.total):e.$message.error(a.message)}).catch(function(a){e.tableLoading=!1,e.$message.error(a)})},addApp:function(e){this.rowData=e,this.addDialogVisible=!0},deleteApp:function(e){var a=this;this.$confirm("确认删除".concat(e.appName,"?")).then(function(t){a.$apis.deleteApp({appId:e.appId}).then(function(e){"2000"===e.code?(a.$message.success("删除成功"),a.queryList()):a.$message.error(e.message)}).catch(function(e){a.$message.error(e)})}).catch(function(e){})}}},f=p,v=Object(c["a"])(f,r,i,!1,null,null,null);v.options.__file="appManage.vue";a["default"]=v.exports},be94:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(a){r(e,a,t[a])})}return e}t.d(a,"a",function(){return i})},dd40:function(e,a){e.exports=function(e){if(!e.webpackPolyfill){var a=Object.create(e);a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),Object.defineProperty(a,"exports",{enumerable:!0}),a.webpackPolyfill=1}return a}}}]);
//# sourceMappingURL=chunk-bed2627c.8f53a45c.js.map