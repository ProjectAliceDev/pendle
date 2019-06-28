webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/pendle/components/Layout.tsx";




/** @jsx jsx */


var globalStyles =  false ? undefined : {
  name: "1m1el79-globalStyles",
  styles: "html, body{width:100%;height:100%;min-height:100vh;position:relative;margin:0;padding:0;font-family:Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;}label:globalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wZW5kbGUvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4LCBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzKHtcbiAgJ2h0bWwsIGJvZHknOiB7IFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGZvbnRGYW1pbHk6IFwiTnVuaXRvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XCJcbiAgfVxufSk7XG5cbmNvbnN0IG1haW5QYWdlU3R5bGVzID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB3aWR0aDogXCIxMDAlXCJcbn0pXG5cbmNvbnN0IGNvbnRlbnRTdHlsZXMgPSBjc3Moe1xuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBmbGV4R3JvdzogNCxcbiAgcGFkZGluZzogNjQsXG59KVxuXG5jb25zdCBjb250ZW50U3R5bGVzTm9QYWRkaW5nID0gY3NzKHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZmxleEdyb3c6IDQsXG59KVxuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZyxcbiAgdXNlQ29udGVudFBhZGRpbmc/OiBib29sZWFuXG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICB1c2VDb250ZW50UGFkZGluZyA9IGZhbHNlXG59KSA9PiAoXG4gIDxkaXY+XG4gICAgPEdsb2JhbCBzdHlsZXM9eyBnbG9iYWxTdHlsZXMgfS8+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9IHwgQWxpY2VPUyA8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjIwMCwzMDAsNDAwLDYwMCw3MDAsODAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY3NzPXsgbWFpblBhZ2VTdHlsZXMgfT5cbiAgICAgIDxOYXZiYXIvPlxuICAgICAgPGRpdiBpZCA9IFwicGEtY29udGVudFwiIGNzcz17IHVzZUNvbnRlbnRQYWRkaW5nID8gY29udGVudFN0eWxlczogY29udGVudFN0eWxlc05vUGFkZGluZyB9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */"
};
var mainPageStyles =  false ? undefined : {
  name: "gwtq21-mainPageStyles",
  styles: "display:inline-flex;flex-direction:column;min-height:100vh;height:100%;width:100%;label:mainPageStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCwgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcyh7XG4gICdodG1sLCBib2R5JzogeyBcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBmb250RmFtaWx5OiBcIk51bml0bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1wiXG4gIH1cbn0pO1xuXG5jb25zdCBtYWluUGFnZVN0eWxlcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBjb250ZW50U3R5bGVzID0gY3NzKHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZmxleEdyb3c6IDQsXG4gIHBhZGRpbmc6IDY0LFxufSlcblxuY29uc3QgY29udGVudFN0eWxlc05vUGFkZGluZyA9IGNzcyh7XG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGZsZXhHcm93OiA0LFxufSlcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHVzZUNvbnRlbnRQYWRkaW5nPzogYm9vbGVhblxufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgdXNlQ29udGVudFBhZGRpbmcgPSBmYWxzZVxufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxHbG9iYWwgc3R5bGVzPXsgZ2xvYmFsU3R5bGVzIH0vPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfSB8IEFsaWNlT1MgPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzoyMDAsMzAwLDQwMCw2MDAsNzAwLDgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNzcz17IG1haW5QYWdlU3R5bGVzIH0+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgaWQgPSBcInBhLWNvbnRlbnRcIiBjc3M9eyB1c2VDb250ZW50UGFkZGluZyA/IGNvbnRlbnRTdHlsZXM6IGNvbnRlbnRTdHlsZXNOb1BhZGRpbmcgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */"
};
var contentStyles =  false ? undefined : {
  name: "11f8zmp-contentStyles",
  styles: "position:relative;height:100%;flex-grow:4;padding:64px;label:contentStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnNCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCwgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcyh7XG4gICdodG1sLCBib2R5JzogeyBcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBmb250RmFtaWx5OiBcIk51bml0bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1wiXG4gIH1cbn0pO1xuXG5jb25zdCBtYWluUGFnZVN0eWxlcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBjb250ZW50U3R5bGVzID0gY3NzKHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZmxleEdyb3c6IDQsXG4gIHBhZGRpbmc6IDY0LFxufSlcblxuY29uc3QgY29udGVudFN0eWxlc05vUGFkZGluZyA9IGNzcyh7XG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGZsZXhHcm93OiA0LFxufSlcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHVzZUNvbnRlbnRQYWRkaW5nPzogYm9vbGVhblxufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgdXNlQ29udGVudFBhZGRpbmcgPSBmYWxzZVxufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxHbG9iYWwgc3R5bGVzPXsgZ2xvYmFsU3R5bGVzIH0vPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfSB8IEFsaWNlT1MgPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzoyMDAsMzAwLDQwMCw2MDAsNzAwLDgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNzcz17IG1haW5QYWdlU3R5bGVzIH0+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgaWQgPSBcInBhLWNvbnRlbnRcIiBjc3M9eyB1c2VDb250ZW50UGFkZGluZyA/IGNvbnRlbnRTdHlsZXM6IGNvbnRlbnRTdHlsZXNOb1BhZGRpbmcgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */"
};
var contentStylesNoPadding =  false ? undefined : {
  name: "1rz9byr-contentStylesNoPadding",
  styles: "position:relative;height:100%;flex-grow:4;label:contentStylesNoPadding;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQytCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCwgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcyh7XG4gICdodG1sLCBib2R5JzogeyBcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBmb250RmFtaWx5OiBcIk51bml0bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1wiXG4gIH1cbn0pO1xuXG5jb25zdCBtYWluUGFnZVN0eWxlcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBjb250ZW50U3R5bGVzID0gY3NzKHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZmxleEdyb3c6IDQsXG4gIHBhZGRpbmc6IDY0LFxufSlcblxuY29uc3QgY29udGVudFN0eWxlc05vUGFkZGluZyA9IGNzcyh7XG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGZsZXhHcm93OiA0LFxufSlcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHVzZUNvbnRlbnRQYWRkaW5nPzogYm9vbGVhblxufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgdXNlQ29udGVudFBhZGRpbmcgPSBmYWxzZVxufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxHbG9iYWwgc3R5bGVzPXsgZ2xvYmFsU3R5bGVzIH0vPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfSB8IEFsaWNlT1MgPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzoyMDAsMzAwLDQwMCw2MDAsNzAwLDgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNzcz17IG1haW5QYWdlU3R5bGVzIH0+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgaWQgPSBcInBhLWNvbnRlbnRcIiBjc3M9eyB1c2VDb250ZW50UGFkZGluZyA/IGNvbnRlbnRTdHlsZXM6IGNvbnRlbnRTdHlsZXNOb1BhZGRpbmcgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */"
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title,
      _ref$useContentPaddin = _ref.useContentPadding,
      useContentPadding = _ref$useContentPaddin === void 0 ? false : _ref$useContentPaddin;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["Global"], {
    styles: globalStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, title, " | AliceOS "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: mainPageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    id: "pa-content",
    css: useContentPadding ? contentStyles : contentStylesNoPadding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.9259517850e3483ab00b.hot-update.js.map