"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[922],{7922:(e,l,t)=>{t.r(l),t.d(l,{default:()=>E});var o=t(9835);const a=e=>((0,o.dD)("data-v-7fd530bc"),e=e(),(0,o.Cn)(),e),i={class:"house-rules"},s={class:"q-pa-md q-mb-md"},n={class:"row"},u={class:"col-md-8"},r=a((()=>(0,o._)("h1",null,"House rules - The cove on milsons",-1))),d=a((()=>(0,o._)("p",null," Thank you for choosing our platform to list your property. To ensure a pleasant and comfortable experience for your guests, it is important to establish clear house rules. Please take a moment to define the house rules for your property below: ",-1)));function c(e,l,t,a,c,p){const m=(0,o.up)("q-btn"),h=(0,o.up)("Popup"),b=(0,o.up)("TableComponent");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",s,[(0,o._)("div",n,[(0,o._)("div",u,[r,d,(0,o.Wm)(m,{unelevated:"",color:"primary","text-color":"white",icon:"add",label:"New rule",class:"login-button",onClick:p.visibilityPopup},null,8,["onClick"]),c.isPopupVisible?((0,o.wg)(),(0,o.j4)(h,{editingRule:c.editingRule,onClose:p.visibilityPopup,onRuleCreated:p.handleRuleCreated,onRuleUpdated:p.handleRuleUpdated,key:c.rules.length},null,8,["editingRule","onClose","onRuleCreated","onRuleUpdated"])):(0,o.kq)("",!0)])])]),(0,o.Wm)(b,{rules:c.rules,pagination:c.pagination,onDeleteRule:p.deleteRule,onEditRule:p.editRule,onRuleUpdated:p.handleRuleUpdated,loading:c.loading},null,8,["rules","pagination","onDeleteRule","onEditRule","onRuleUpdated","loading"])])}t(9665);var p=t(7524);const m={class:"q-gutter-sm actions"};function h(e,l,t,a,i,s){const n=(0,o.up)("q-inner-loading"),u=(0,o.up)("q-btn"),r=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{rows:e.rules,columns:e.columns,"row-key":"id",pagination:e.pagination,loading:e.loading},{loading:(0,o.w5)((()=>[(0,o.Wm)(n,{showing:"",color:"primary"})])),"body-cell-actions":(0,o.w5)((l=>[(0,o._)("div",m,[(0,o.Wm)(u,{unelevated:"",color:"secondary","text-color":"black",icon:"edit",label:"Edit rule",size:"sm",onClick:t=>e.handleEdit(l.row)},null,8,["onClick"]),(0,o.Wm)(u,{unelevated:"",color:"red","text-color":"white",icon:"delete",label:"Delete rule",size:"sm",onClick:t=>e.handleDelete(l.row)},null,8,["onClick"])])])),_:1},8,["rows","columns","pagination","loading"])])}const b=(0,o.aZ)({name:"TableComponent",props:{rules:Array,pagination:Object,loading:Boolean},data(){return{loggedIn:!0,columns:[{name:"id",required:!0,label:"ID",align:"left",field:"id",sortable:!0},{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!0},{name:"active",required:!0,label:"Active",align:"left",field:"active",sortable:!0},{name:"actions",label:"Actions",align:"center",field:"id",sortable:!1}]}},methods:{handleDelete(e){this.$emit("deleteRule",e)},handleEdit(e){this.$emit("editRule",e)}}});var g=t(1639),f=t(9995),v=t(854),R=t(9379),y=t(9984),_=t.n(y);const C=(0,g.Z)(b,[["render",h],["__scopeId","data-v-14ac05a2"]]),k=C;_()(b,"components",{QTable:f.Z,QInnerLoading:v.Z,QBtn:R.Z});var w=t(6970),q=t(1957);const P=e=>((0,o.dD)("data-v-2fddf865"),e=e(),(0,o.Cn)(),e),Z={class:"popup"},x={class:"popup-content"},D={class:"popup-form"},I={class:"form-group q-mb-md"},U=P((()=>(0,o._)("label",{for:"rulename"},"House rule Name:",-1))),N={class:"form-group q-mb-lg"},T=P((()=>(0,o._)("label",{for:"customModel"},"The rule is active?",-1))),V={class:"form-group q-mb-sm"},B={class:"form-group"};function W(e,l,t,a,i,s){const n=(0,o.up)("q-checkbox"),u=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",x,[(0,o._)("form",D,[(0,o._)("div",I,[(0,o._)("h1",null,(0,w.zw)(t.editingRule?"Edit House Rule":"New House Rule"),1),U,(0,o.wy)((0,o._)("input",{type:"text",required:"",id:"rulename",placeholder:"House rule name","onUpdate:modelValue":l[0]||(l[0]=e=>i.ruleName=e)},null,512),[[q.nr,i.ruleName]])]),(0,o._)("div",N,[T,(0,o.Wm)(n,{modelValue:i.customModel,"onUpdate:modelValue":l[1]||(l[1]=e=>i.customModel=e),required:"",color:"primary",label:"Yes, the rule is active","true-value":"1","false-value":"0"},null,8,["modelValue"])]),(0,o._)("div",V,[t.editingRule?((0,o.wg)(),(0,o.j4)(u,{key:1,unelevated:"",color:"primary","text-color":"white",label:"Update Rule",type:"submit",class:"popup-button",onClick:s.updateRule},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:0,unelevated:"",color:"primary","text-color":"white",label:"Register Rule",type:"submit",class:"popup-button",onClick:s.createRule},null,8,["onClick"]))]),(0,o._)("div",B,[(0,o.Wm)(u,{unelevated:"",color:"secondary","text-color":"black",label:"Close",type:"button",class:"popup-button",onClick:s.visibilityPopup},null,8,["onClick"])])])])])}const j={props:{editingRule:Object},data(){return{customModel:0,ruleName:""}},mounted(){this.editingRule&&(this.ruleName=this.editingRule.name,this.customModel=this.editingRule.active)},methods:{visibilityPopup(){this.$emit("close")},createRule(){console.log("criando");const e={headers:{Authorization:"Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8"}},l=parseInt(this.customModel),t={house_rules:{name:this.ruleName,active:l}};console.log(t),p.Z.post("https://sys-dev.searchandstay.com/api/admin/house_rules",t,e).then((e=>{const l=e.data;l.success?(this.$emit("ruleCreated",l.data),this.visibilityPopup()):console.error(l.message)})).catch((e=>{console.error(e)}))},updateRule(){const e={headers:{Authorization:"Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8"}},l=parseInt(this.customModel),t={house_rules:{name:this.ruleName,active:l}};p.Z.put(`https://sys-dev.searchandstay.com/api/admin/house_rules/${this.editingRule.id}`,t,e).then((e=>{const l=e.data;l.success?(this.$emit("ruleUpdated",{rule:l.data}),this.visibilityPopup()):console.error(l.message)})).catch((e=>{console.error(e)}))}}};var z=t(1006);const A=(0,g.Z)(j,[["render",W],["__scopeId","data-v-2fddf865"]]),H=A;_()(j,"components",{QCheckbox:z.Z,QBtn:R.Z});const M={components:{TableComponent:k,Popup:H},data(){return{loggedIn:!0,isPopupVisible:!1,rules:[],editingRule:null,pagination:{rowsPerPage:10},loading:!0}},mounted(){this.fetchHouseRules()},methods:{updateRuleList(e){this.rules=this.rules.filter((l=>l.id!==e))},visibilityPopup(){this.isPopupVisible=!this.isPopupVisible},handleRuleCreated(e){this.rules.push(e)},fetchHouseRules(){const e={headers:{Authorization:"Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8"}};p.Z.get("https://sys-dev.searchandstay.com/api/admin/house_rules",e).then((e=>{const l=e.data.data;this.rules=l.entities.map((e=>({...e,actions:e.id})))})).finally((()=>{this.loading=!1})).catch((e=>{console.error(e)}))},deleteRule(e){const l={headers:{Authorization:"Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8"}};p.Z["delete"](`https://sys-dev.searchandstay.com/api/admin/house_rules/${e.id}`,l).then((l=>{const t=l.data;if(t.success){const l=this.rules.findIndex((l=>l.id===e.id));-1!==l&&this.rules.splice(l,1)}else console.error(t.message)})).catch((e=>{console.error(e)}))},editRule(e){this.editingRule=e,this.isPopupVisible=!0},handleRuleUpdated(e){const l=this.rules.findIndex((l=>l.id===e.rule.id));-1!==l&&(this.rules[l].name=e.rule.name,this.rules[l].active=e.rule.active),this.editingRule=null}}},$=(0,g.Z)(M,[["render",c],["__scopeId","data-v-7fd530bc"]]),E=$;_()(M,"components",{QBtn:R.Z})}}]);