webpackHotUpdate("static/development/pages/prospect-park-preview/download.js",{

/***/ "./pages/prospect-park-preview/download.tsx":
/*!**************************************************!*\
  !*** ./pages/prospect-park-preview/download.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageHero */ "./components/PageHero.tsx");
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/commonStyles */ "./utils/commonStyles.tsx");
/* harmony import */ var _assets_preview_preview_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/preview/preview.png */ "./assets/preview/preview.png");
/* harmony import */ var _assets_preview_preview_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_preview_preview_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_preview_devices_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/preview/devices.jpg */ "./assets/preview/devices.jpg");
/* harmony import */ var _assets_preview_devices_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_preview_devices_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_preview_docs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/preview/docs.png */ "./assets/preview/docs.png");
/* harmony import */ var _assets_preview_docs_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_preview_docs_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_preview_docs_appkit_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/preview/docs-appkit.png */ "./assets/preview/docs-appkit.png");
/* harmony import */ var _assets_preview_docs_appkit_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_preview_docs_appkit_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/marquiskurt/Developer/pendle/pages/prospect-park-preview/download.tsx";





/** @jsx jsx */






var previewWarningStyles =  false ? undefined : {
  name: "1h9lr0v-previewWarningStyles",
  styles: "background-color:#ffedb2;border-color:#b38f18;border-width:0.25px;border-style:solid;border-radius:6px;padding-left:24px;padding-right:24px;padding-top:16px;padding-bottom:16px;label:previewWarningStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL3BhZ2VzL3Byb3NwZWN0LXBhcmstcHJldmlldy9kb3dubG9hZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI2QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3BlbmRsZS9wYWdlcy9wcm9zcGVjdC1wYXJrLXByZXZpZXcvZG93bmxvYWQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUhlcm8nXG5pbXBvcnQgQmFzaWNDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzaWNDYXJkJ1xuaW1wb3J0IE1pbmlOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NaW5pTmF2YmFyJ1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IHBhZ2VDb250ZW50U3R5bGVzLCBwYWdlR3JpZENvbnRhaW5lciwgcGFnZVNlY3Rpb25TdHlsZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25TdHlsZXMnXG5pbXBvcnQgcHJldmlld1BhZ2VJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvcHJldmlldy9wcmV2aWV3LnBuZydcbmltcG9ydCBwcmV2aWV3UGFnZURldmljZSBmcm9tICcuLi8uLi9hc3NldHMvcHJldmlldy9kZXZpY2VzLmpwZydcbmltcG9ydCB3aGF0c05leHREb2NzIGZyb20gJy4uLy4uL2Fzc2V0cy9wcmV2aWV3L2RvY3MucG5nJ1xuaW1wb3J0IHdoYXRzTmV4dEFwcHMgZnJvbSAnLi4vLi4vYXNzZXRzL3ByZXZpZXcvZG9jcy1hcHBraXQucG5nJ1xuXG5cbmNvbnN0IHByZXZpZXdXYXJuaW5nU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmVkYjJcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMC4yNSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdUb3A6IDE2LFxuXHRwYWRkaW5nQm90dG9tOiAxNixcbn0pXG5cbmNvbnN0IFByZXZpZXdQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRG93bmxvYWQgQWxpY2VPUyBEZXZlbG9wZXIgQmV0YVwiPlxuICAgICAgPFBhZ2VIZXJvXG4gICAgXHR0aXRsZT1cIkRvd25sb2FkIHRoZSBwcmV2aWV3XCJcbiAgICBcdHN1YnRpdGxlPVwiVHJ5IHRoZSBkZXZlbG9wZXIgYmV0YSBhbmQgYnVpbGQgZm9yIEFsaWNlT1MuXCJcbiAgICBcdHNob3dMaW5rXG4gICAgXHRsaW5rVGV4dCA9IFwiRG93bmxvYWRcIlxuICAgIFx0bGlua1BvaW50c1RvID0gXCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L2FsaWNlb3MvcmVsZWFzZXMvbGF0ZXN0L1wiXG4gICAgICBcdGJhY2tncm91bmRJbWFnZT0geyBwcmV2aWV3UGFnZUltYWdlIH1cbiAgICAgIFx0bm9CbHVyXG5cdFx0Lz5cbiAgICAgIDxkaXYgY3NzPXsgcGFnZUNvbnRlbnRTdHlsZXMgfT5cbiAgICAgICAgPGRpdiBjc3M9eyBwYWdlU2VjdGlvblN0eWxlcyhmYWxzZSkgfT5cbiAgICAgICAgICA8aDE+RG93bmxvYWQgdGhlIGRldmVsb3BlciBiZXRhLjwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSZWFkeSB0byB0cnkgdGhlIGRldmVsb3BlciBiZXRhIGZvciBBbGljZU9TIFByb3NwZWN0IFBhcms/IEdldCBzdGFydGVkIHdpdGggdGhlIGxhdGVzdCByZWxlYXNlIHRvZGF5IGFuZCB0cnkgb3V0IHRoZSBiZXRhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNzcz17IHBhZ2VTZWN0aW9uU3R5bGVzKHRydWUpIH0+XG4gICAgICAgICAgXHQ8aW1nIHNyYz17IHByZXZpZXdQYWdlRGV2aWNlIH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjc3M9eyBwYWdlU2VjdGlvblN0eWxlcyhmYWxzZSkgfT5cbiAgICAgIFx0XHQ8aDI+R2V0IHN0YXJ0ZWQ8L2gyPlxuICAgICAgXHRcdDxwPkdldHRpbmcgc3RhcnRlZCB3aXRoIEFsaWNlT1MgUHJvc3BlY3QgUGFyayBjb3VsZG4ndCBiZSBlYXNpZXIuIEp1c3QgZG93bmxvYWQgdGhlIHZlcnNpb24gZm9yIHlvdXIgUmVuJ1B5IFNESyBhbmQgZHJhZyBpdCBpbnRvIHlvdXIgdmlzdWFsIG5vdmVsIHByb2plY3QncyBnYW1lIGZvbGRlci48L3A+XG4gICAgICBcdFx0PGRpdiBjc3MgPSB7IHByZXZpZXdXYXJuaW5nU3R5bGVzIH0+XG4gICAgICBcdFx0XHQ8cD48Yj5Ob3RlOjwvYj4gQWxpY2VPUyBQcm9zcGVjdCBQYXJrIGlzIHByZS1yZWxlYXNlIHNvZnR3YXJlLiBGZWF0dXJlcyBhbmQgaW1wcm92ZW1lbnRzIGFyZSBub3QgaW4gdGhlaXIgY29tcGxldGUgc3RhdGUgYW5kIG1heSBjaGFuZ2Ugb3ZlciB0aW1lLiA8Yj5EbyBub3QgaW5zdGFsbCBBbGljZU9TIFByb3NwZWN0IFBhcmsgb24gYSBwcm9kdWN0aW9uLXJlYWR5IHZpc3VhbCBub3ZlbCBwcm9qZWN0LjwvYj48L3A+XG4gICAgICBcdFx0XHQ8cD5Nb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQncyBjaGFuZ2VkIGNhbiBiZSBmb3VuZCBpbiA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0ZG9jcy5hbGljZW9zLmFwcC9BbGljZU9TLVJlbGVhc2UtTm90ZXMvXCI+QWxpY2VPUydzIHJlbGVhc2Ugbm90ZXMuPC9hPjwvcD5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXsgcGFnZVNlY3Rpb25TdHlsZXMoZmFsc2UpIH0+XG4gICAgICAgICAgPGgyPk1pZ3JhdGluZyBmcm9tIEFsaWNlT1MgMS4wLjA/PC9oMj5cbiAgICAgICAgICA8cD5HZXR0aW5nIHN0YXJ0ZWQgd2l0aCBBbGljZU9TIFByb3NwZWN0IFBhcmsgY291bGRuJ3QgYmUgZWFzaWVyLiBKdXN0IGRvd25sb2FkIHRoZSB2ZXJzaW9uIGZvciB5b3VyIFJlbidQeSBTREsgYW5kIGRyYWcgaXQgaW50byB5b3VyIHZpc3VhbCBub3ZlbCBwcm9qZWN0J3MgZ2FtZSBmb2xkZXIuPC9wPlxuICAgICAgICAgIDxkaXYgY3NzID0geyBwcmV2aWV3V2FybmluZ1N0eWxlcyB9PlxuICAgICAgICAgICAgPHA+PGI+Tm90ZTo8L2I+IEFsaWNlT1MgUHJvc3BlY3QgUGFyayBpcyBwcmUtcmVsZWFzZSBzb2Z0d2FyZS4gRmVhdHVyZXMgYW5kIGltcHJvdmVtZW50cyBhcmUgbm90IGluIHRoZWlyIGNvbXBsZXRlIHN0YXRlIGFuZCBtYXkgY2hhbmdlIG92ZXIgdGltZS4gPGI+RG8gbm90IGluc3RhbGwgQWxpY2VPUyBQcm9zcGVjdCBQYXJrIG9uIGEgcHJvZHVjdGlvbi1yZWFkeSB2aXN1YWwgbm92ZWwgcHJvamVjdC48L2I+PC9wPlxuICAgICAgICAgICAgPHA+TW9yZSBpbmZvcm1hdGlvbiBvbiB3aGF0J3MgY2hhbmdlZCBjYW4gYmUgZm91bmQgaW4gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGRvY3MuYWxpY2Vvcy5hcHAvQWxpY2VPUy1SZWxlYXNlLU5vdGVzL1wiPkFsaWNlT1MncyByZWxlYXNlIG5vdGVzLjwvYT48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXHQ8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gIFx0XHRcdDxCYXNpY0NhcmRcblx0ICAgICAgICAgICAgdGl0bGU9XCJMZWFybiBhYm91dCB3aGF0J3MgbmV3LlwiXG5cdCAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIlJlYWQgdGhlIHJlbGVhc2Ugbm90ZXMgb24gdGhlIGxhdGVzdCBkZXZlbG9wZXIgYmV0YSByZWxlYXNlIGFuZCBnZXQgdG8ga25vdyBBbGljZU9TIGEgYml0LlwiXG5cdCAgICAgICAgICAgIGNvbG9yPVwiI2ZmZTY5M1wiXG5cdCAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcblx0ICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbmV4dGRvY3MuYWxpY2Vvcy5hcHAvQWxpY2VPUy1SZWxlYXNlLU5vdGVzL1wiXG5cdCAgICAgICAgICAgIGltYWdlPXsgd2hhdHNOZXh0RG9jcyB9XG5cdCAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJTdGFydCB3cml0aW5nIGFwcHMgZm9yIEFsaWNlT1MuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkxlYXJuIG1vcmUgYWJvdXQgdGhlIG5ldyBhcHAgc3lzdGVtIGFuZCBob3cgeW91IGNhbiBzdGFydCB3cml0aW5nIHlvdXIgb3duIHRoaXJkLXBhcnR5IGFwcHMgZm9yIHRoZSBBbGljZU9TIHBsYXRmb3JtLlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmZmU2OTNcIlxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbmV4dGRvY3MuYWxpY2Vvcy5hcHAvQXBwS2l0L1wiXG4gICAgICAgICAgICBpbWFnZT17IHdoYXRzTmV4dEFwcHMgfVxuICAgICAgICAgICAgLz5cbiAgICAgIFx0PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3UGFnZSJdfQ== */"
};

var PreviewPage = function PreviewPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Download AliceOS Developer Beta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_PageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Download the preview",
    subtitle: "Try the developer beta and build for AliceOS.",
    showLink: true,
    linkText: "Download",
    linkPointsTo: "https://github.com/ProjectAliceDev/aliceos/releases/latest/",
    backgroundImage: _assets_preview_preview_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    noBlur: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: Object(_utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageSectionStyles"])(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Download the developer beta."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Ready to try the developer beta for AliceOS Prospect Park? Get started with the latest release today and try out the beta."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: Object(_utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageSectionStyles"])(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("img", {
    src: _assets_preview_devices_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: Object(_utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageSectionStyles"])(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Get started"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Getting started with AliceOS Prospect Park couldn't be easier. Just download the version for your Ren'Py SDK and drag it into your visual novel project's game folder."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: previewWarningStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Note:"), " AliceOS Prospect Park is pre-release software. Features and improvements are not in their complete state and may change over time. ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Do not install AliceOS Prospect Park on a production-ready visual novel project.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "More information on what's changed can be found in ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
    href: "https://nextdocs.aliceos.app/AliceOS-Release-Notes/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "AliceOS's release notes.")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: Object(_utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageSectionStyles"])(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Migrating from AliceOS 1.0.0?"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Getting started with AliceOS Prospect Park couldn't be easier. Just download the version for your Ren'Py SDK and drag it into your visual novel project's game folder."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: previewWarningStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Note:"), " AliceOS Prospect Park is pre-release software. Features and improvements are not in their complete state and may change over time. ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Do not install AliceOS Prospect Park on a production-ready visual novel project.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "More information on what's changed can be found in ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
    href: "https://nextdocs.aliceos.app/AliceOS-Release-Notes/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "AliceOS's release notes.")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageGridContainer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Learn about what's new.",
    cardDescription: "Read the release notes on the latest developer beta release and get to know AliceOS a bit.",
    color: "#ffe693",
    strictPadding: true,
    link: "https://nextdocs.aliceos.app/AliceOS-Release-Notes/",
    image: _assets_preview_docs_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Start writing apps for AliceOS.",
    cardDescription: "Learn more about the new app system and how you can start writing your own third-party apps for the AliceOS platform.",
    color: "#ffe693",
    strictPadding: true,
    link: "https://nextdocs.aliceos.app/AppKit/",
    image: _assets_preview_docs_appkit_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewPage);

/***/ })

})
//# sourceMappingURL=download.js.1650d148d9ce5859b430.hot-update.js.map