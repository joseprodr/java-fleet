/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
function MdAutocompleteCtrl(e,t,n,o,i,l,a,r,c,u){function m(){n.initOptionalProperties(e,c,{searchText:null,selectedItem:null}),i(t),h(),n.nextTick(function(){f(),s(),p(),t.on("focus",p)})}function d(){function o(){var e=0,n=t.find("md-input-container");if(n.length){var o=n.find("input");e=n.prop("offsetHeight"),e-=o.prop("offsetTop"),e-=o.prop("offsetHeight"),e+=n.prop("offsetTop")}return e}function i(){var e=ce.scrollContainer.getBoundingClientRect(),t={};e.right>u.right-MENU_PADDING&&(t.left=a.right-e.width+"px"),ce.$.scrollContainer.css(t)}if(!ce)return n.nextTick(d,!1,e);var l,a=ce.wrap.getBoundingClientRect(),r=ce.snap.getBoundingClientRect(),u=ce.root.getBoundingClientRect(),m=r.bottom-u.top,s=u.bottom-r.top,p=a.left-u.left,h=a.width,g=o();c.mdFloatingLabel&&(p+=INPUT_PADDING,h-=2*INPUT_PADDING),l={left:p+"px",minWidth:h+"px",maxWidth:Math.max(a.right-u.left,u.right-a.left)-MENU_PADDING+"px"},m>s&&u.height-a.bottom-MENU_PADDING<MAX_HEIGHT?(l.top="auto",l.bottom=s+"px",l.maxHeight=Math.min(MAX_HEIGHT,a.top-u.top-MENU_PADDING)+"px"):(l.top=m-g+"px",l.bottom="auto",l.maxHeight=Math.min(MAX_HEIGHT,u.bottom+n.scrollTop()-a.bottom-MENU_PADDING)+"px"),ce.$.scrollContainer.css(l),n.nextTick(i,!1)}function s(){ce.$.root.length&&(i(ce.$.scrollContainer),ce.$.scrollContainer.detach(),ce.$.root.append(ce.$.scrollContainer),a.pin&&a.pin(ce.$.scrollContainer,r))}function p(){e.autofocus&&ce.input.focus()}function h(){var t=parseInt(e.delay,10)||0;c.$observe("disabled",function(e){le.isDisabled=n.parseAttributeBoolean(e,!1)}),c.$observe("required",function(e){le.isRequired=n.parseAttributeBoolean(e,!1)}),c.$observe("readonly",function(e){le.isReadonly=n.parseAttributeBoolean(e,!1)}),e.$watch("searchText",t?n.debounce(y,t):y),e.$watch("selectedItem",I),angular.element(l).on("resize",d),e.$on("$destroy",g)}function g(){if(le.hidden||n.enableScrolling(),angular.element(l).off("resize",d),ce){var e="ul scroller scrollContainer input".split(" ");angular.forEach(e,function(e){ce.$[e].remove()})}}function f(){ce={main:t[0],scrollContainer:t[0].getElementsByClassName("md-virtual-repeat-container")[0],scroller:t[0].getElementsByClassName("md-virtual-repeat-scroller")[0],ul:t.find("ul")[0],input:t.find("input")[0],wrap:t.find("md-autocomplete-wrap")[0],root:document.body},ce.li=ce.ul.getElementsByTagName("li"),ce.snap=$(),ce.$=x(ce)}function $(){for(var e=t;e.length;e=e.parent())if(angular.isDefined(e.attr("md-autocomplete-snap")))return e[0];return ce.wrap}function x(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=angular.element(e[n]));return t}function C(t,o){!t&&o?(d(),ce&&n.nextTick(function(){n.disableScrollAround(ce.ul),ge=v(angular.element(ce.wrap))},!1,e)):t&&!o&&n.nextTick(function(){n.enableScrolling(),ge&&(ge(),ge=null)},!1,e)}function v(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function A(){me=!0}function b(){se||ce.input.focus(),me=!1,le.hidden=G()}function T(){ce.input.focus()}function I(t,n){t&&L(t).then(function(o){e.searchText=o,w(t,n)}),t!==n&&M()}function M(){angular.isFunction(e.itemChange)&&e.itemChange(O(e.selectedItem))}function E(){angular.isFunction(e.textChange)&&e.textChange()}function w(e,t){de.forEach(function(n){n(e,t)})}function D(e){-1==de.indexOf(e)&&de.push(e)}function N(e){var t=de.indexOf(e);-1!=t&&de.splice(t,1)}function y(t,n){le.index=S(),t!==n&&L(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&E(),j()?oe():(le.matches=[],F(!1),J()))})}function H(){se=!1,me||(le.hidden=G())}function k(e){e&&(me=!1,se=!1),ce.input.blur()}function _(){se=!0,angular.isString(e.searchText)||(e.searchText=""),le.hidden=G(),le.hidden||oe()}function P(t){switch(t.keyCode){case o.KEY_CODE.DOWN_ARROW:if(le.loading)return;t.stopPropagation(),t.preventDefault(),le.index=Math.min(le.index+1,le.matches.length-1),Z(),J();break;case o.KEY_CODE.UP_ARROW:if(le.loading)return;t.stopPropagation(),t.preventDefault(),le.index=le.index<0?le.matches.length-1:Math.max(0,le.index-1),Z(),J();break;case o.KEY_CODE.TAB:if(b(),le.hidden||le.loading||le.index<0||le.matches.length<1)return;Y(le.index);break;case o.KEY_CODE.ENTER:if(le.hidden||le.loading||le.index<0||le.matches.length<1)return;if(B())return;t.stopPropagation(),t.preventDefault(),Y(le.index);break;case o.KEY_CODE.ESCAPE:t.stopPropagation(),t.preventDefault(),e.searchText&&z(),k(!0)}}function R(){return angular.isNumber(e.minLength)?e.minLength:1}function L(t){function n(t){return t&&e.itemText?e.itemText(O(t)):null}return u.when(n(t)||t)}function O(e){if(e){var t={};return le.itemName&&(t[le.itemName]=e),t}}function S(){return e.autoselect?0:-1}function F(e){le.loading!=e&&(le.loading=e),le.hidden=G()}function G(){return le.loading&&!q()?!0:B()?!0:se?!U():!0}function U(){return j()&&q()||ne()}function q(){return!!le.matches.length}function B(){return!!le.scope.selectedItem}function V(){return le.loading&&!B()}function W(){return L(le.matches[le.index])}function j(){return(e.searchText||"").length>=R()}function K(e,t,n){Object.defineProperty(le,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function Y(t){n.nextTick(function(){L(le.matches[t]).then(function(e){var t=ce.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=le.matches[t],F(!1)})},!1)}function z(){F(!0),le.index=0,le.matches=[],e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),ce.input.dispatchEvent(t),ce.input.focus()}function X(t){function o(t){t&&(t=u.when(t),he++,F(!0),n.nextTick(function(){t.then(i)["finally"](function(){0===--he&&F(!1)})},!0,e))}function i(n){ue[a]=n,(t||"")===(e.searchText||"")&&(le.matches=n,le.hidden=G(),le.loading&&F(!1),e.selectOnMatch&&ie(),J(),d())}var l=e.$parent.$eval(re),a=t.toLowerCase(),r=angular.isArray(l),c=!!l.then;r?i(l):c&&o(l)}function J(){W().then(function(e){le.messages=[Q(),e]})}function Q(){if(pe===le.matches.length)return"";switch(pe=le.matches.length,le.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+le.matches.length+" matches available."}}function Z(){if(ce.li[0]){var e=ce.li[0].offsetHeight,t=e*le.index,n=t+e,o=ce.scroller.clientHeight,i=ce.scroller.scrollTop;i>t?te(t):n>i+o&&te(n-o)}}function ee(){return 0!==he}function te(e){ce.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function ne(){var e=(le.scope.searchText||"").length;return le.hasNotFound&&!q()&&(!le.loading||ee())&&e>=R()&&(se||me)&&!B()}function oe(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&ue[n]?(le.matches=ue[n],J()):X(t),le.hidden=G()}function ie(){var t=e.searchText,n=le.matches,o=n[0];1===n.length&&L(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&Y(0)})}var le=this,ae=e.itemsExpr.split(/ in /i),re=ae[1],ce=null,ue={},me=!1,de=[],se=!1,pe=0,he=0,ge=null;return K("hidden",C,!0),le.scope=e,le.parent=e.$parent,le.itemName=ae[0],le.matches=[],le.loading=!1,le.hidden=!0,le.index=null,le.messages=[],le.id=n.nextUid(),le.isDisabled=null,le.isRequired=null,le.isReadonly=null,le.hasNotFound=!1,le.keydown=P,le.blur=H,le.focus=_,le.clear=z,le.select=Y,le.listEnter=A,le.listLeave=b,le.mouseUp=T,le.getCurrentDisplayValue=W,le.registerSelectedItemWatcher=D,le.unregisterSelectedItemWatcher=N,le.notFoundVisible=ne,le.loadingIsVisible=V,m()}function MdAutocomplete(){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId"},link:function(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found")},template:function(e,t){function n(){var t=e.find("md-item-template").detach(),n=t.length?t.html():e.html();return t.length||e.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function o(){var t=e.find("md-not-found").detach(),n=t.length?t.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function i(){return t.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=c?'tabindex="'+c+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  '+(null!=t.mdNoAsterisk?'md-no-asterisk="'+t.mdNoAsterisk+'"':"")+'                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=t.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+r+"</div>            </md-input-container>":'            <input flex type="search"                '+(null!=c?'tabindex="'+c+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=t.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="_md-visually-hidden">Clear</span>            </button>                '}var l=o(),a=n(),r=e.html(),c=t.tabindex;return l&&e.attr("md-has-not-found",!0),e.attr("tabindex","-1"),"        <md-autocomplete-wrap            layout=\"row\"            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          "+i()+'          <md-progress-linear              class="'+(t.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+a+"                  </li>"+l+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="_md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}function MdAutocompleteItemScopeDirective(e,t){function n(e,n,o){return function(e,n,i){function l(n,o){c[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){c[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||c.$digest(),t=n=!1}))}),c.$watch(function(){n=!0})}var r=e.$mdAutocompleteCtrl,c=r.parent.$new(),u=r.itemName;l("$index","$index"),l("item",u),a(),o(c,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}function MdHighlightCtrl(e,t,n){function o(o,i){var a=null,r=null,c=n.mdHighlightFlags||"",u=e.$watch(function(e){return{term:o(e),unsafeText:i(e)}},function(e,n){null!==a&&e.unsafeText===n.unsafeText||(a=angular.element("<div>").text(e.unsafeText).html()),null!==r&&e.term===n.term||(r=l(e.term,c)),t.html(a.replace(r,'<span class="highlight">$&</span>'))},!0);t.on("$destroy",u)}function i(e){return e&&e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}function l(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(i(n),t.replace(/[\$\^]/g,""))}this.init=o}function MdHighlight(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),l=e(n.html());return function(e,t,n,o){o.init(i,l)}}}}goog.provide("ng.material.components.autocomplete"),goog.require("ng.material.components.icon"),goog.require("ng.material.components.virtualRepeat"),goog.require("ng.material.core"),angular.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"]),angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl",MdAutocompleteCtrl);var ITEM_HEIGHT=41,MAX_HEIGHT=5.5*ITEM_HEIGHT,MENU_PADDING=8,INPUT_PADDING=2;MdAutocompleteCtrl.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q"],angular.module("material.components.autocomplete").directive("mdAutocomplete",MdAutocomplete),angular.module("material.components.autocomplete").directive("mdAutocompleteParentScope",MdAutocompleteItemScopeDirective),MdAutocompleteItemScopeDirective.$inject=["$compile","$mdUtil"],angular.module("material.components.autocomplete").controller("MdHighlightCtrl",MdHighlightCtrl),MdHighlightCtrl.$inject=["$scope","$element","$attrs"],angular.module("material.components.autocomplete").directive("mdHighlightText",MdHighlight),MdHighlight.$inject=["$interpolate","$parse"],ng.material.components.autocomplete=angular.module("material.components.autocomplete");