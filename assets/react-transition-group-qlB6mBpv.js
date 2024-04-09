import{b as D,a as M,_ as k,c as U}from"./@babel-R4VyUtW_.js";import{a as F,r as G}from"./dom-helpers-Xf6xszNR.js";import{a as f,r as c}from"./react-Tx0QjLq-.js";import{a as S}from"./react-dom-58QOy6Xd.js";const $={disabled:!1},T=f.createContext(null);var I=function(a){return a.scrollTop},N="unmounted",E="exited",m="entering",g="entered",O="exiting",h=function(u){D(a,u);function a(e,n){var t;t=u.call(this,e,n)||this;var r=n,i=r&&!r.isMounting?e.enter:e.appear,s;return t.appearStatus=null,e.in?i?(s=E,t.appearStatus=m):s=g:e.unmountOnExit||e.mountOnEnter?s=N:s=E,t.state={status:s},t.nextCallback=null,t}a.getDerivedStateFromProps=function(n,t){var r=n.in;return r&&t.status===N?{status:E}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(n){var t=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==m&&r!==g&&(t=m):(r===m||r===g)&&(t=O)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var n=this.props.timeout,t,r,i;return t=r=i=n,n!=null&&typeof n!="number"&&(t=n.exit,r=n.enter,i=n.appear!==void 0?n.appear:r),{exit:t,enter:r,appear:i}},o.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this);r&&I(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:N})},o.performEnter=function(n){var t=this,r=this.props.enter,i=this.context?this.context.isMounting:n,s=this.props.nodeRef?[i]:[S.findDOMNode(this),i],l=s[0],p=s[1],d=this.getTimeouts(),v=i?d.appear:d.enter;if(!n&&!r||$.disabled){this.safeSetState({status:g},function(){t.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:m},function(){t.props.onEntering(l,p),t.onTransitionEnd(v,function(){t.safeSetState({status:g},function(){t.props.onEntered(l,p)})})})},o.performExit=function(){var n=this,t=this.props.exit,r=this.getTimeouts(),i=this.props.nodeRef?void 0:S.findDOMNode(this);if(!t||$.disabled){this.safeSetState({status:E},function(){n.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:O},function(){n.props.onExiting(i),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(i)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},o.setNextCallback=function(n){var t=this,r=!0;return this.nextCallback=function(i){r&&(r=!1,t.nextCallback=null,n(i))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(n,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),i=n==null&&!this.props.addEndListener;if(!r||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],l=s[0],p=s[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},o.render=function(){var n=this.state.status;if(n===N)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var i=M(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(T.Provider,{value:null},typeof r=="function"?r(n,i):f.cloneElement(f.Children.only(r),i))},a}(f.Component);h.contextType=T;h.propTypes={};function C(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};h.UNMOUNTED=N;h.EXITED=E;h.ENTERING=m;h.ENTERED=g;h.EXITING=O;const L=h;var V=function(a,o){return a&&o&&o.split(" ").forEach(function(e){return F(a,e)})},b=function(a,o){return a&&o&&o.split(" ").forEach(function(e){return G(a,e)})},R=function(u){D(a,u);function a(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=u.call.apply(u,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(i,s){var l=e.resolveArguments(i,s),p=l[0],d=l[1];e.removeClasses(p,"exit"),e.addClass(p,d?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(i,s)},e.onEntering=function(i,s){var l=e.resolveArguments(i,s),p=l[0],d=l[1],v=d?"appear":"enter";e.addClass(p,v,"active"),e.props.onEntering&&e.props.onEntering(i,s)},e.onEntered=function(i,s){var l=e.resolveArguments(i,s),p=l[0],d=l[1],v=d?"appear":"enter";e.removeClasses(p,v),e.addClass(p,v,"done"),e.props.onEntered&&e.props.onEntered(i,s)},e.onExit=function(i){var s=e.resolveArguments(i),l=s[0];e.removeClasses(l,"appear"),e.removeClasses(l,"enter"),e.addClass(l,"exit","base"),e.props.onExit&&e.props.onExit(i)},e.onExiting=function(i){var s=e.resolveArguments(i),l=s[0];e.addClass(l,"exit","active"),e.props.onExiting&&e.props.onExiting(i)},e.onExited=function(i){var s=e.resolveArguments(i),l=s[0];e.removeClasses(l,"exit"),e.addClass(l,"exit","done"),e.props.onExited&&e.props.onExited(i)},e.resolveArguments=function(i,s){return e.props.nodeRef?[e.props.nodeRef.current,i]:[i,s]},e.getClassNames=function(i){var s=e.props.classNames,l=typeof s=="string",p=l&&s?s+"-":"",d=l?""+p+i:s[i],v=l?d+"-active":s[i+"Active"],P=l?d+"-done":s[i+"Done"];return{baseClassName:d,activeClassName:v,doneClassName:P}},e}var o=a.prototype;return o.addClass=function(n,t,r){var i=this.getClassNames(t)[r+"ClassName"],s=this.getClassNames("enter"),l=s.doneClassName;t==="appear"&&r==="done"&&l&&(i+=" "+l),r==="active"&&n&&I(n),i&&(this.appliedClasses[t][r]=i,V(n,i))},o.removeClasses=function(n,t){var r=this.appliedClasses[t],i=r.base,s=r.active,l=r.done;this.appliedClasses[t]={},i&&b(n,i),s&&b(n,s),l&&b(n,l)},o.render=function(){var n=this.props;n.classNames;var t=M(n,["classNames"]);return f.createElement(L,k({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);R.defaultProps={classNames:""};R.propTypes={};const Q=R;function _(u,a){var o=function(t){return a&&c.isValidElement(t)?a(t):t},e=Object.create(null);return u&&c.Children.map(u,function(n){return n}).forEach(function(n){e[n.key]=o(n)}),e}function j(u,a){u=u||{},a=a||{};function o(p){return p in a?a[p]:u[p]}var e=Object.create(null),n=[];for(var t in u)t in a?n.length&&(e[t]=n,n=[]):n.push(t);var r,i={};for(var s in a){if(e[s])for(r=0;r<e[s].length;r++){var l=e[s][r];i[e[s][r]]=o(l)}i[s]=o(s)}for(r=0;r<n.length;r++)i[n[r]]=o(n[r]);return i}function x(u,a,o){return o[a]!=null?o[a]:u.props[a]}function W(u,a){return _(u.children,function(o){return c.cloneElement(o,{onExited:a.bind(null,o),in:!0,appear:x(o,"appear",u),enter:x(o,"enter",u),exit:x(o,"exit",u)})})}function X(u,a,o){var e=_(u.children),n=j(a,e);return Object.keys(n).forEach(function(t){var r=n[t];if(c.isValidElement(r)){var i=t in a,s=t in e,l=a[t],p=c.isValidElement(l)&&!l.props.in;s&&(!i||p)?n[t]=c.cloneElement(r,{onExited:o.bind(null,r),in:!0,exit:x(r,"exit",u),enter:x(r,"enter",u)}):!s&&i&&!p?n[t]=c.cloneElement(r,{in:!1}):s&&i&&c.isValidElement(l)&&(n[t]=c.cloneElement(r,{onExited:o.bind(null,r),in:l.props.in,exit:x(r,"exit",u),enter:x(r,"enter",u)}))}}),n}var w=Object.values||function(u){return Object.keys(u).map(function(a){return u[a]})},z={component:"div",childFactory:function(a){return a}},A=function(u){D(a,u);function a(e,n){var t;t=u.call(this,e,n)||this;var r=t.handleExited.bind(U(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var o=a.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,t){var r=t.children,i=t.handleExited,s=t.firstRender;return{children:s?W(n,i):X(n,r,i),firstRender:!1}},o.handleExited=function(n,t){var r=_(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(i){var s=k({},i.children);return delete s[n.key],{children:s}}))},o.render=function(){var n=this.props,t=n.component,r=n.childFactory,i=M(n,["component","childFactory"]),s=this.state.contextValue,l=w(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,t===null?f.createElement(T.Provider,{value:s},l):f.createElement(T.Provider,{value:s},f.createElement(t,i,l))},a}(f.Component);A.propTypes={};A.defaultProps=z;const Y=A;export{Q as C,Y as T,L as a};
