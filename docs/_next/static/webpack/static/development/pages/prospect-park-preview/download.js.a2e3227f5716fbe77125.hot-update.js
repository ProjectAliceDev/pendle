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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL3BhZ2VzL3Byb3NwZWN0LXBhcmstcHJldmlldy9kb3dubG9hZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI2QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3BlbmRsZS9wYWdlcy9wcm9zcGVjdC1wYXJrLXByZXZpZXcvZG93bmxvYWQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUhlcm8nXG5pbXBvcnQgQmFzaWNDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzaWNDYXJkJ1xuaW1wb3J0IE1pbmlOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NaW5pTmF2YmFyJ1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IHBhZ2VDb250ZW50U3R5bGVzLCBwYWdlR3JpZENvbnRhaW5lciwgcGFnZVNlY3Rpb25TdHlsZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25TdHlsZXMnXG5pbXBvcnQgcHJldmlld1BhZ2VJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvcHJldmlldy9wcmV2aWV3LnBuZydcbmltcG9ydCBwcmV2aWV3UGFnZURldmljZSBmcm9tICcuLi8uLi9hc3NldHMvcHJldmlldy9kZXZpY2VzLmpwZydcbmltcG9ydCB3aGF0c05leHREb2NzIGZyb20gJy4uLy4uL2Fzc2V0cy9wcmV2aWV3L2RvY3MucG5nJ1xuaW1wb3J0IHdoYXRzTmV4dEFwcHMgZnJvbSAnLi4vLi4vYXNzZXRzL3ByZXZpZXcvZG9jcy1hcHBraXQucG5nJ1xuXG5cbmNvbnN0IHByZXZpZXdXYXJuaW5nU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmVkYjJcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMC4yNSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdUb3A6IDE2LFxuXHRwYWRkaW5nQm90dG9tOiAxNixcbn0pXG5cbmNvbnN0IFByZXZpZXdQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRG93bmxvYWQgQWxpY2VPUyBEZXZlbG9wZXIgQmV0YVwiPlxuICAgICAgPFBhZ2VIZXJvXG4gICAgXHR0aXRsZT1cIkRvd25sb2FkIHRoZSBwcmV2aWV3XCJcbiAgICBcdHN1YnRpdGxlPVwiVHJ5IHRoZSBkZXZlbG9wZXIgYmV0YSBhbmQgYnVpbGQgZm9yIEFsaWNlT1MuXCJcbiAgICBcdHNob3dMaW5rXG4gICAgXHRsaW5rVGV4dCA9IFwiRG93bmxvYWRcIlxuICAgIFx0bGlua1BvaW50c1RvID0gXCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L2FsaWNlb3MvcmVsZWFzZXMvbGF0ZXN0L1wiXG4gICAgICBcdGJhY2tncm91bmRJbWFnZT0geyBwcmV2aWV3UGFnZUltYWdlIH1cbiAgICAgIFx0bm9CbHVyXG5cdFx0Lz5cbiAgICAgIDxkaXYgY3NzPXsgcGFnZUNvbnRlbnRTdHlsZXMgfT5cbiAgICAgICAgPGRpdiBjc3M9eyBwYWdlU2VjdGlvblN0eWxlcyhmYWxzZSkgfT5cbiAgICAgICAgICA8aDE+RG93bmxvYWQgdGhlIGRldmVsb3BlciBiZXRhLjwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSZWFkeSB0byB0cnkgdGhlIGRldmVsb3BlciBiZXRhIGZvciBBbGljZU9TIFByb3NwZWN0IFBhcms/IEdldCBzdGFydGVkIHdpdGggdGhlIGxhdGVzdCByZWxlYXNlIHRvZGF5IGFuZCB0cnkgb3V0IHRoZSBiZXRhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNzcz17IHBhZ2VTZWN0aW9uU3R5bGVzKHRydWUpIH0+XG4gICAgICAgICAgXHQ8aW1nIHNyYz17IHByZXZpZXdQYWdlRGV2aWNlIH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjc3M9eyBwYWdlU2VjdGlvblN0eWxlcyhmYWxzZSkgfT5cbiAgICAgIFx0XHQ8aDI+R2V0IHN0YXJ0ZWQ8L2gyPlxuICAgICAgXHRcdDxwPkdldHRpbmcgc3RhcnRlZCB3aXRoIEFsaWNlT1MgUHJvc3BlY3QgUGFyayBjb3VsZG4ndCBiZSBlYXNpZXIuIEp1c3QgZG93bmxvYWQgdGhlIHZlcnNpb24gZm9yIHlvdXIgUmVuJ1B5IFNESyBhbmQgZHJhZyBpdCBpbnRvIHlvdXIgdmlzdWFsIG5vdmVsIHByb2plY3QncyBnYW1lIGZvbGRlci48L3A+XG4gICAgICBcdFx0PGRpdiBjc3MgPSB7IHByZXZpZXdXYXJuaW5nU3R5bGVzIH0+XG4gICAgICBcdFx0XHQ8cD48Yj5Ob3RlOjwvYj4gQWxpY2VPUyBQcm9zcGVjdCBQYXJrIGlzIHByZS1yZWxlYXNlIHNvZnR3YXJlLiBGZWF0dXJlcyBhbmQgaW1wcm92ZW1lbnRzIGFyZSBub3QgaW4gdGhlaXIgY29tcGxldGUgc3RhdGUgYW5kIG1heSBjaGFuZ2Ugb3ZlciB0aW1lLiA8Yj5EbyBub3QgaW5zdGFsbCBBbGljZU9TIFByb3NwZWN0IFBhcmsgb24gYSBwcm9kdWN0aW9uLXJlYWR5IHZpc3VhbCBub3ZlbCBwcm9qZWN0LjwvYj48L3A+XG4gICAgICBcdFx0XHQ8cD5Nb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQncyBjaGFuZ2VkIGNhbiBiZSBmb3VuZCBpbiA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0ZG9jcy5hbGljZW9zLmFwcC9BbGljZU9TLVJlbGVhc2UtTm90ZXMvXCI+QWxpY2VPUydzIHJlbGVhc2Ugbm90ZXMuPC9hPjwvcD5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8aDI+RmluaXNoZWQgZG93bmxvYWRpbmc/PC9oMj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICBcdDxkaXYgY3NzPXsgcGFnZUdyaWRDb250YWluZXIgfT5cbiAgXHRcdFx0PEJhc2ljQ2FyZFxuXHQgICAgICAgICAgICB0aXRsZT1cIkxlYXJuIGFib3V0IHdoYXQncyBuZXcuXCJcblx0ICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiUmVhZCB0aGUgcmVsZWFzZSBub3RlcyBvbiB0aGUgbGF0ZXN0IGRldmVsb3BlciBiZXRhIHJlbGVhc2UgYW5kIGdldCB0byBrbm93IEFsaWNlT1MgYSBiaXQuXCJcblx0ICAgICAgICAgICAgY29sb3I9XCIjZmZlNjkzXCJcblx0ICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuXHQgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9uZXh0ZG9jcy5hbGljZW9zLmFwcC8wMi1jaGFuZ2Vsb2cvXCJcblx0ICAgICAgICAgICAgaW1hZ2U9eyB3aGF0c05leHREb2NzIH1cblx0ICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIlN0YXJ0IHdyaXRpbmcgYXBwcyBmb3IgQWxpY2VPUy5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiTGVhcm4gbW9yZSBhYm91dCB0aGUgbmV3IGFwcCBzeXN0ZW0gYW5kIGhvdyB5b3UgY2FuIHN0YXJ0IHdyaXRpbmcgeW91ciBvd24gdGhpcmQtcGFydHkgYXBwcyBmb3IgdGhlIEFsaWNlT1MgcGxhdGZvcm0uXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZmZTY5M1wiXG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9uZXh0ZG9jcy5hbGljZW9zLmFwcC9BcHBLaXQvXCJcbiAgICAgICAgICAgIGltYWdlPXsgd2hhdHNOZXh0QXBwcyB9XG4gICAgICAgICAgICAvPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdQYWdlIl19 */"
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
  }, "AliceOS's release notes."))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Finished downloading?")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageGridContainer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Learn about what's new.",
    cardDescription: "Read the release notes on the latest developer beta release and get to know AliceOS a bit.",
    color: "#ffe693",
    strictPadding: true,
    link: "https://nextdocs.aliceos.app/02-changelog/",
    image: _assets_preview_docs_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 70
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewPage);

/***/ })

})
//# sourceMappingURL=download.js.a2e3227f5716fbe77125.hot-update.js.map