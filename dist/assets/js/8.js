(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{526:function(e,a,r){"use strict";r.r(a);var n=r(17),t=r.n(n),s=(r(225),r(148)),o=r.n(s),l=(r(544),r(535)),i=r.n(l),u=(r(625),r(636)),c=r.n(u),m=(r(226),r(34)),p=r.n(m),d=r(53),f=r.n(d),g=r(54),h=r.n(g),v=r(55),y=r.n(v),w=r(56),E=r.n(w),b=r(57),_=r.n(b),F=(r(627),r(630)),D=r.n(F),N=r(80),x=r(1),U=r.n(x),k=r(629),I=r.n(k),L=D.a.Item,z=function(e){function a(e){var r;return f()(this,a),(r=y()(this,E()(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),r.props.form.validateFields({force:!0},function(e,a){e||r.props.dispatch({type:"user/login",payload:a})})},r}return _()(a,e),h()(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,a=e.form,r=e.user.loading,n=a.getFieldDecorator;return U.a.createElement("div",{className:I.a.main},U.a.createElement(D.a,{onSubmit:this.handleSubmit},U.a.createElement(L,null,n("username",{rules:[{required:!0,message:"please enter your username"}]})(U.a.createElement(c.a,{size:"large",prefix:U.a.createElement(p.a,{type:"user",className:I.a.prefixIcon}),placeholder:"any"}))),U.a.createElement(L,null,n("password",{rules:[{required:!0,message:"please enter your password"}]})(U.a.createElement(c.a,{size:"large",prefix:U.a.createElement(p.a,{type:"lock",className:I.a.prefixIcon}),type:"password",placeholder:"any"}))),U.a.createElement(L,{className:I.a.additional},n("remember",{valuePropName:"checked",initialValue:!0})(U.a.createElement(i.a,null,"Remember me")),U.a.createElement("a",{className:I.a.forgot,href:""},"forget password"),U.a.createElement(o.a,{size:"large",loading:r,className:I.a.submit,type:"primary",htmlType:"submit"},"login"))))}}]),a}(x.Component);a.default=Object(N.connect)(function(e){return{user:e.user}})(D.a.create({onFieldsChange:function(e,a){e.dispatch({type:"user/save",payload:a})},mapPropsToFields:function(e){var a=e.user;return{username:D.a.createFormField(t()({},a.loginData.username,{value:a.loginData.username.value})),password:D.a.createFormField(t()({},a.loginData.password,{value:a.loginData.password.value}))}}})(z))},629:function(e,a,r){e.exports={main:"src-routes-User-Login__main--U-e4t",prefixIcon:"src-routes-User-Login__prefixIcon--2y27E",additional:"src-routes-User-Login__additional--2FNtZ",forgot:"src-routes-User-Login__forgot--2nYKg",submit:"src-routes-User-Login__submit--3-D4D"}}}]);