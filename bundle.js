/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Montserrat-ExtraBold.ttf */ "./src/font/Montserrat-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  /* https://fonts.google.com/specimen/Montserrat */
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("TrueType");
}

:root {
  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);
  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);
  --bounce-translateY: 25%;
}

/* ! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

body * {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 50ms;
}

h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

@media (min-width: 768px) {

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

@media (min-width: 768px) {

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

p {
  text-wrap: pretty;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: justify;
}

article {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}

article:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}

article {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  flex-direction: column;
  justify-content: space-around;
  overflow: auto;
}

@media (orientation: portrait) {

  article {
    background-color: transparent;
  }
}

@media (orientation: landscape) {

  article {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  @media (min-width: 768px) {

    article {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }
  }
}

/* Scrollbar */

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, 1);
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
  border-radius: 9999px;
  border-width: 4px;
  border-style: solid;
}

:where(.dark, .dark *)::-webkit-scrollbar-thumb {
  --tw-border-opacity: 1;
  border-color: rgba(39, 39, 42, 1);
  border-color: rgba(39, 39, 42, var(--tw-border-opacity));
}

::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:active {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.bg-theme {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
.bg-theme-2 {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.bg-theme-2:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.text-light {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}
.text-theme {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, 1);
  color: rgba(248, 113, 113, var(--tw-text-opacity));
}
.text-theme-2 {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.divider-theme {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  height: 0.25rem;
  width: 100%;
}
.content-wrapper {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
@media (orientation: landscape) {

  .content-wrapper {
    position: absolute;
  }
}
.content-section {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (orientation: landscape) {

  .content-section {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }
}
.btn-nav-wrapper {
  position: absolute;
  width: 9rem;
}
.btn-nav {
  position: fixed;
  display: flex;
  width: 9rem;
  align-items: center;
  justify-content: center;
}
.btn-theme {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, 1);
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.btn-theme:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
.btn-theme:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}
.btn-theme-2 {
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}
.btn-theme-2:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(63, 63, 70, 1);
  background-color: rgba(63, 63, 70, var(--tw-bg-opacity));
}
.btn-theme-2 {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, 1);
  color: rgba(248, 113, 113, var(--tw-text-opacity));
}
.btn-theme-2:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.btn-theme-2:hover:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.border-img {
  --tw-border-opacity: 1;
  border-color: rgba(248, 113, 113, 1);
  border-color: rgba(248, 113, 113, var(--tw-border-opacity));
  position: absolute;
  z-index: auto;
  height: 100%;
  width: 100%;
  --tw-translate-x: 0.75rem;
  --tw-translate-y: calc(calc(100% + 12px) * -1);
  transform: translate(0.75rem, calc((100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(0.75rem, calc(calc(100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-width: 2px;
}
.content-wrapper-project {
  display: flex;
  width: 90%;
  gap: 1.25rem;
  overflow-y: clip;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}
@media (orientation: portrait) {

  .content-wrapper-project {
    flex-direction: column-reverse;
  }
}
.index-project-wrapper {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, 1);
  color: rgba(248, 113, 113, var(--tw-text-opacity));
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: auto;
  --tw-translate-x: -25%;
  --tw-translate-y: -25%;
  transform: translate(-25%, -25%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  font-size: 4.5rem;
  line-height: 1;
}
.info-project {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.25rem;
  padding: 0.75rem;
}
.img-project-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.img-project-inner-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (orientation: landscape) {

  .img-project-inner-wrapper {
    --tw-translate-y: -10%;
    transform: translate(var(--tw-translate-x), -10%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
.img-project-inner-wrapper {
    perspective: 500px;
  }
.img-project,
  .img-project-even {
  position: relative;
  z-index: 1;
    /* More at MEDIA QUERY section below*/
}
.img-project-mirror,
  .img-project-mirror-even {
  position: absolute;
  top: 0px;
  z-index: auto;
}
@media (orientation: portrait) {

  .img-project-mirror,
  .img-project-mirror-even {
    display: none;
  }
}
.img-project-mirror,
  .img-project-mirror-even {
    -webkit-mask-image: linear-gradient(transparent 80%, white);
    mask-image: linear-gradient(transparent 80%, white);
  }
.img-project-mirror {
    transform: translateY(calc(100% + 2px)) rotateY(-20deg) rotateX(180deg);
  }
.img-project-mirror-even {
    transform: translateY(calc(100% + 2px)) rotateY(20deg) rotateX(180deg);
  }
.img-project-m {
  top: 5%;
  right: -5%;
  height: 100%;
  border-radius: 0.375rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
.img-project-mirror > .img-project-m,
  .img-project-mirror-even > .img-project-m {
  display: none;
}
.tools-wrapper-outer-project {
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-x: hidden;
}
.tools-wrapper-project {
  display: flex;
  align-items: center;
}
.tool-about,
  [class^="tool-project"] {
  display: flex;
  aspect-ratio: 1 / 1;
  align-items: center;
  justify-content: center;
}
.p-contact {
  text-wrap: nowrap;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: left;
}
.icon-contact-wrapper {
  aspect-ratio: 1 / 1;
  height: 40px;
}
@media (min-width: 640px) {

  .icon-contact-wrapper {
    height: 50px;
  }
}
.icon-mode-dark,
  .icon-mode {
    transition: opacity 1s ease;
  }
.icon-mode-dark {
  opacity: 0;
}
.icon-mode-dark:where(.dark, .dark *) {
  opacity: 1;
}
.icon-mode {
  opacity: 1;
}
.icon-mode:where(.dark, .dark *) {
  opacity: 0;
}
.icon-contact-link-wrapper,
  .icon-contact-link {
  aspect-ratio: 1 / 1;
  height: 30px;
}
.icon-contact-link-wrapper:hover,
  .icon-contact-link:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 640px) {

  .icon-contact-link-wrapper,
  .icon-contact-link {
    height: 40px;
  }
}
.icon-contact-link-i {
  font-size: 30px;
}
@media (min-width: 640px) {

  .icon-contact-link-i {
    font-size: 40px;
  }
}
.stroke-contact {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.stroke-contact:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.initial-contact {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.initial-contact:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-\\[56px\\] {
  bottom: 56px;
}
.left-0 {
  left: 0px;
}
.left-\\[-28px\\] {
  left: -28px;
}
.left-\\[-45px\\] {
  left: -45px;
}
.left-\\[28px\\] {
  left: 28px;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.left-\\[calc\\(50\\%-172px\\)\\] {
  left: calc(50% - 172px);
}
.left-\\[calc\\(50\\%-72px\\)\\] {
  left: calc(50% - 72px);
}
.right-\\[-28px\\] {
  right: -28px;
}
.right-\\[-45px\\] {
  right: -45px;
}
.right-\\[28px\\] {
  right: 28px;
}
.right-\\[50\\%\\] {
  right: 50%;
}
.top-0 {
  top: 0px;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.top-\\[84px\\] {
  top: 84px;
}
.top-\\[calc\\(50\\%-14px\\)\\] {
  top: calc(50% - 14px);
}
.z-\\[1\\] {
  z-index: 1;
}
.z-\\[2\\] {
  z-index: 2;
}
.z-\\[98\\] {
  z-index: 98;
}
.z-\\[99\\] {
  z-index: 99;
}
.z-auto {
  z-index: auto;
}
.mt-0 {
  margin-top: 0px;
}
.mt-0\\.5 {
  margin-top: 0.125rem;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.aspect-\\[3\\] {
  aspect-ratio: 3;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1\\/2 {
  height: 50%;
}
.h-1\\/4 {
  height: 25%;
}
.h-14 {
  height: 3.5rem;
}
.h-\\[24px\\] {
  height: 24px;
}
.h-\\[250\\%\\] {
  height: 250%;
}
.h-\\[300\\%\\] {
  height: 300%;
}
.h-\\[calc\\(100vh-2\\*56px\\)\\] {
  height: calc(100vh - 2 * 56px);
}
.h-full {
  height: 100%;
}
.w-1\\/4 {
  width: 25%;
}
.w-3\\/4 {
  width: 75%;
}
.w-36 {
  width: 9rem;
}
.w-\\[30\\%\\] {
  width: 30%;
}
.w-\\[calc\\(100\\%-8px\\)\\] {
  width: calc(100% - 8px);
}
.w-\\[calc\\(100vw-2\\*40px\\)\\] {
  width: calc(100vw - 2 * 40px);
}
.w-full {
  width: 100%;
}
.max-w-2xl {
  max-width: 42rem;
}
.-translate-x-3 {
  --tw-translate-x: -0.75rem;
  transform: translate(-0.75rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-100\\%\\] {
  --tw-translate-x: -100%;
  transform: translate(-100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[30\\%\\] {
  --tw-translate-x: 30%;
  transform: translate(30%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-3 {
  --tw-translate-y: 0.75rem;
  transform: translate(var(--tw-translate-x), 0.75rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-220\\%\\] {
  --tw-translate-y: -220%;
  transform: translate(var(--tw-translate-x), -220%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-25\\%\\] {
  --tw-translate-y: -25%;
  transform: translate(var(--tw-translate-x), -25%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[-27deg\\] {
  --tw-rotate: -27deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-27deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[27deg\\] {
  --tw-rotate: 27deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(27deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[50deg\\] {
  --tw-rotate: 50deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(50deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(.75) scaleY(.75);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-scale-y-100 {
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(-1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.flex-col {
  flex-direction: column;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-evenly {
  justify-content: space-evenly;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-14 {
  gap: 3.5rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-7 {
  gap: 1.75rem;
}
.self-center {
  align-self: center;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-y-clip {
  overflow-y: clip;
}
.bg-left {
  background-position: left;
}
.bg-right {
  background-position: right;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-\\[10vw\\] {
  font-size: 10vw;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.\\!leading-\\[0\\.5\\] {
  line-height: 0.5 !important;
}
.leading-\\[0\\.8\\] {
  line-height: 0.8;
}
.leading-none {
  line-height: 1;
}
.text-transparent {
  color: transparent;
}
.opacity-0 {
  opacity: 0;
}
@media (orientation: landscape) {

  #contact-card {
    --tw-shadow: 2px 2px 10px rgb(39, 39, 42);
    --tw-shadow-colored: 2px 2px 10px var(--tw-shadow-color);
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 2px 2px 10px rgb(39, 39, 42);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  }

  #contact-card:where(.dark, .dark *) {
    --tw-shadow: 0px 0px 10px rgb(241, 245, 249);
    --tw-shadow-colored: 0px 0px 10px var(--tw-shadow-color);
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0px 0px 10px rgb(241, 245, 249);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  }
}

.montserrat {
  font-family: "Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
}

.tool-about,
[class^="tool-project"],
.dark-mode-inner-wrapper {
  transition: transform 750ms ease;
}

.dark-mode-inner-wrapper.dark {
  transform: translateX(-100%);
}

.img-tool {
  transition: transform 1s ease;
}

.img-tool.scaleAbout {
  transform: scale(1.5);
}

#menu {
  transition:
    opacity 500ms ease, transform 750ms ease;
  opacity: 0;
  transition: opacity 1s ease;
}

#menu.open {
  opacity: 1;
}

#hello-wrapper {
  transition: transform 1s ease;
}

#hello-wrapper.hide {
  transform: translateY(100%);
}

#bg-left,
#bg-right {
  transition: width 1s ease;
}

#bg-left.shrink,
#bg-right.shrink {
  width: 0;
}

#bg-intro,
#section-intro {
  transition: height 1s ease;
}

#bg-intro.shrink,
#section-intro.shrink {
  height: calc((100svh / 2) - 56px);
}

nav,
#scroll {
  transition: opacity 1s ease;
}

nav.hide,
#scroll.hide {
  opacity: 0;
}

#about,
#projects,
#contact {
  transition: transform 1s ease;
}

#about.active {
  transform: translateX(150%);
}

#projects.active {
  transform: translateX(-150%);
}

#contact.active {
  transform: translateY(-150%);
}

/* ANIMATION */

.animate-hello {
  will-change: animation;
  animation: slide-up 1.5s 1;
  animation-fill-mode: forwards;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

.animate-appear {
  will-change: animation;
  animation: appear 1.5s 1 1.5s;
  animation-fill-mode: forwards;
}

@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-bounce-x {
  will-change: animation;
  animation: bounce-x 1s infinite;
}

.animate-bounce-y {
  will-change: animation;
  animation: bounce-y 3s infinite;
}

.animate-bounce-y-r {
  will-change: animation;
  animation: bounce-y-r 3s infinite;
}

.animate-bounce-y-90 {
  transform: rotate(90deg);
  will-change: animation;
  animation: bounce-y-90 3s infinite;
}

.animate-bounce-y-n90 {
  transform: rotate(-90deg);
  will-change: animation;
  animation: bounce-y-n90 3s infinite;
}

/* Tailwind Bounce Custom */

@keyframes bounce-x {
  0%,
  100% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: var(--timing-bounce-100);
  }
  50% {
    transform: translateX(10%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: var(--timing-bounce-50);
  }
}

@keyframes bounce-y {
  0%,
  33% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: var(--timing-bounce-100);
  }
  16% {
    transform: translateY(25%);
    transform: translateY(var(--bounce-translateY));
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: var(--timing-bounce-50);
  }
}

@keyframes bounce-y-r {
  0%,
  33% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: var(--timing-bounce-100);
  }
  16% {
    transform: translateY(calc(25% * -1));
    transform: translateY(calc(var(--bounce-translateY) * -1));
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: var(--timing-bounce-50);
  }
}

@keyframes bounce-y-90 {
  0%,
  33% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: var(--timing-bounce-100);
  }
  16% {
    transform: rotate(90deg) translateY(25%);
    transform: rotate(90deg) translateY(var(--bounce-translateY));
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: var(--timing-bounce-50);
  }
}

@keyframes bounce-y-n90 {
  0%,
  33% {
    transform: rotate(-90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: var(--timing-bounce-100);
  }
  16% {
    transform: rotate(-90deg) translateY(25%);
    transform: rotate(-90deg) translateY(var(--bounce-translateY));
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: var(--timing-bounce-50);
  }
}

/* MEDIA QUERY */

@media (orientation: landscape) {
  .img-project {
    transform: rotateY(-20deg);
  }

  .img-project-even {
    transform: rotateY(20deg);
  }
}

.dark\\:text-theme-2:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}

.hover\\:scale-\\[110\\%\\]:hover {
  --tw-scale-x: 110%;
  --tw-scale-y: 110%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(110%) scaleY(110%);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (min-width: 640px) {

  .sm\\:flex-row {
    flex-direction: row;
  }
}

@media (min-width: 768px) {

  .md\\:translate-x-\\[25\\%\\] {
    --tw-translate-x: 25%;
    transform: translate(25%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\\:scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1280px) {

  .xl\\:block {
    display: block;
  }

  .xl\\:hidden {
    display: none;
  }
}

@media (orientation: portrait) {

  .portrait\\:absolute {
    position: absolute;
  }

  .portrait\\:flex {
    display: flex;
  }

  .portrait\\:hidden {
    display: none;
  }

  .portrait\\:h-\\[100svh\\] {
    height: 100svh;
  }

  .portrait\\:h-\\[calc\\(100svh-56px\\)\\] {
    height: calc(100svh - 56px);
  }

  .portrait\\:h-full {
    height: 100%;
  }

  .portrait\\:w-\\[60\\%\\] {
    width: 60%;
  }

  .portrait\\:w-\\[70\\%\\] {
    width: 70%;
  }

  .portrait\\:w-full {
    width: 100%;
  }

  .portrait\\:rotate-0 {
    --tw-rotate: 0deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .portrait\\:flex-col {
    flex-direction: column;
  }

  .portrait\\:flex-col-reverse {
    flex-direction: column-reverse;
  }

  .portrait\\:items-center {
    align-items: center;
  }

  .portrait\\:justify-center {
    justify-content: center;
  }

  .portrait\\:gap-14 {
    gap: 3.5rem;
  }

  .portrait\\:gap-7 {
    gap: 1.75rem;
  }

  .portrait\\:overflow-visible {
    overflow: visible;
  }

  .portrait\\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .portrait\\:pt-10 {
    padding-top: 2.5rem;
  }

  .portrait\\:text-\\[15vw\\] {
    font-size: 15vw;
  }

  @media (min-width: 640px) {

    .portrait\\:sm\\:w-\\[50\\%\\] {
      width: 50%;
    }

    .portrait\\:sm\\:w-\\[80\\%\\] {
      width: 80%;
    }
  }
}

@media (orientation: landscape) {

  .landscape\\:mb-7 {
    margin-bottom: 1.75rem;
  }

  .landscape\\:hidden {
    display: none;
  }

  .landscape\\:aspect-\\[1\\.8\\] {
    aspect-ratio: 1.8;
  }

  .landscape\\:h-\\[100vh\\] {
    height: 100vh;
  }

  .landscape\\:w-\\[90\\%\\] {
    width: 90%;
  }

  .landscape\\:translate-x-\\[-150\\%\\] {
    --tw-translate-x: -150%;
    transform: translate(-150%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:translate-x-\\[150\\%\\] {
    --tw-translate-x: 150%;
    transform: translate(150%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:translate-y-\\[150\\%\\] {
    --tw-translate-y: 150%;
    transform: translate(var(--tw-translate-x), 150%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .landscape\\:items-center {
    align-items: center;
  }

  .landscape\\:justify-center {
    justify-content: center;
  }

  .landscape\\:gap-5 {
    gap: 1.25rem;
  }

  .landscape\\:overflow-hidden {
    overflow: hidden;
  }

  .landscape\\:rounded-xl {
    border-radius: 0.75rem;
  }

  .landscape\\:p-7 {
    padding: 1.75rem;
  }

  @media (min-width: 768px) {

    .landscape\\:md\\:w-\\[calc\\(100vw-2\\*56px\\)\\] {
      width: calc(100vw - 2 * 56px);
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n:root {\n  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);\n  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);\n  --bounce-translateY: 25%;\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-3xl md:text-4xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  p {\n    @apply py-2 text-justify text-pretty;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full w-full max-w-screen-lg landscape:px-10 landscape:md:px-14 landscape:py-14 flex flex-col justify-around overflow-auto;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    @apply w-[16px];\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-theme-fade border-solid border-4 border-theme-2 dark:border-dark rounded-full;\n  }\n\n  ::-webkit-scrollbar-thumb:hover,\n  ::-webkit-scrollbar-thumb:active {\n    @apply bg-theme;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-fade {\n    @apply bg-red-300;\n  }\n\n  .bg-dark {\n    @apply bg-zinc-800;\n  }\n\n  .bg-dark-fade {\n    @apply bg-zinc-700;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100 dark:bg-dark;\n  }\n\n  .bg-theme-2-fade {\n    @apply bg-slate-200 dark:bg-dark-fade;\n  }\n\n  .text-light {\n    @apply text-zinc-800;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .border-dark {\n    @apply border-zinc-800;\n  }\n\n  .border-theme-2 {\n    @apply border-slate-100;\n  }\n\n  .divider-theme {\n    @apply bg-theme h-1 w-full;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .btn-nav-wrapper {\n    @apply w-36 absolute;\n  }\n\n  .btn-nav {\n    @apply w-36 flex justify-center items-center fixed;\n  }\n\n  .btn-theme {\n    @apply bg-theme-fade hover:bg-theme text-theme-2 dark:text-light;\n  }\n\n  .btn-theme-2 {\n    @apply bg-theme-2-fade hover:bg-theme-2 text-theme;\n  }\n\n  .border-img {\n    @apply h-full w-full border-2 border-theme absolute translate-x-3 -translate-y-[calc(100%+12px)] z-auto;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] py-7 flex portrait:flex-col-reverse gap-5 overflow-y-clip;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-wrapper {\n    @apply w-full flex justify-center items-center;\n  }\n\n  .img-project-inner-wrapper {\n    @apply w-full flex justify-center items-center landscape:translate-y-[-10%] relative;\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project,\n  .img-project-even {\n    @apply relative z-[1];\n    /* More at MEDIA QUERY section below*/\n  }\n\n  .img-project-mirror,\n  .img-project-mirror-even {\n    @apply absolute top-0 z-auto portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, white);\n    mask-image: linear-gradient(transparent 80%, white);\n  }\n\n  .img-project-mirror {\n    transform: translateY(calc(100% + 2px)) rotateY(-20deg) rotateX(180deg);\n  }\n\n  .img-project-mirror-even {\n    transform: translateY(calc(100% + 2px)) rotateY(20deg) rotateX(180deg);\n  }\n\n  .img-project-m {\n    @apply h-full border-2 border-black rounded-md top-[5%] right-[-5%];\n  }\n\n  .img-project-mirror > .img-project-m,\n  .img-project-mirror-even > .img-project-m {\n    @apply hidden;\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n\n  .tool-about,\n  [class^=\"tool-project\"] {\n    @apply aspect-square flex justify-center items-center;\n  }\n\n  .p-contact {\n    @apply py-0 text-left text-nowrap;\n  }\n\n  .icon-contact-wrapper {\n    @apply h-[40px] sm:h-[50px] aspect-square;\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 1s ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0;\n  }\n\n  .icon-contact-link-wrapper,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] aspect-square hover:scale-110;\n  }\n\n  .icon-contact-link-i {\n    @apply text-[30px] sm:text-[40px];\n  }\n\n  .stroke-contact {\n    @apply bg-theme-2;\n  }\n\n  .initial-contact {\n    @apply text-theme-2 dark:text-light;\n  }\n}\n\n@layer utilities {\n  #contact-card {\n    @apply landscape:shadow-[2px_2px_10px_rgb(39_39_42)] landscape:dark:shadow-[0px_0px_10px_rgb(241_245_249)];\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n.dark-mode-inner-wrapper {\n  transition: transform 750ms ease;\n}\n\n.dark-mode-inner-wrapper.dark {\n  transform: translateX(-100%);\n}\n\n.img-tool {\n  transition: transform 1s ease;\n}\n\n.img-tool.scaleAbout {\n  transform: scale(1.5);\n}\n\n#menu {\n  transition:\n    opacity 500ms ease,\n    transform 750ms ease;\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 1s ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#hello-wrapper {\n  transition: transform 1s ease;\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#bg-left,\n#bg-right {\n  transition: width 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide {\n  opacity: 0;\n}\n\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n/* ANIMATION */\n\n.animate-hello {\n  will-change: animation;\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  will-change: animation;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.animate-bounce-x {\n  will-change: animation;\n  animation: bounce-x 1s infinite;\n}\n\n.animate-bounce-y {\n  will-change: animation;\n  animation: bounce-y 3s infinite;\n}\n\n.animate-bounce-y-r {\n  will-change: animation;\n  animation: bounce-y-r 3s infinite;\n}\n\n.animate-bounce-y-90 {\n  transform: rotate(90deg);\n  will-change: animation;\n  animation: bounce-y-90 3s infinite;\n}\n\n.animate-bounce-y-n90 {\n  transform: rotate(-90deg);\n  will-change: animation;\n  animation: bounce-y-n90 3s infinite;\n}\n\n/* Tailwind Bounce Custom */\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-r {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(calc(var(--bounce-translateY) * -1));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-90 {\n  0%,\n  33% {\n    transform: rotate(90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-n90 {\n  0%,\n  33% {\n    transform: rotate(-90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(-90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n/* MEDIA QUERY */\n\n@media (orientation: landscape) {\n  .img-project {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-even {\n    transform: rotateY(20deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   background: () => (/* binding */ background)
/* harmony export */ });
const background = (() => {
  const bgLeft = document.querySelector("#bg-left");
  const bgRight = document.querySelector("#bg-right");
  const bgIntro = document.querySelector("#bg-intro");

  function shrink() {
    for (const num of arguments) {
      const bg = _getBg(num);
      bg.classList.toggle("shrink");
    }
  }

  function _getBg(int) {
    switch (int) {
      case 1:
        return bgLeft;
      case 2:
        return bgRight;
      case 3:
        return bgIntro;
    }
  }

  return { shrink };
})();




/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");


const carousel = (() => {
  function init() {
    _initAbout();
  }

  function generateImage(list, className, height, scale, wrapper) {
    const length = list.length;
    for (let i = 0; i < length; i++) {
      const div = document.createElement("div");

      div.classList.add(className, "relative");
      div.style.height = height * scale + "px";

      if (list[i].src !== undefined) {
        const img = document.createElement("img");

        img.classList.add("img-tool", "absolute");
        img.src = list[i].src;
        img.alt = list[i].alt;
        img.style.height = height + "px";

        div.append(img);
      } else {
        const imgDark = document.createElement("i");
        imgDark.classList.add(
          list[i].class[0],
          "img-tool",
          "icon-mode-dark",
          "absolute",
        );
        imgDark.style.fontSize = height + "px";

        const img = imgDark.cloneNode(false);
        img.classList.remove("icon-mode-dark");
        img.classList.add(list[i].class[1], "icon-mode");

        imgDark.title = list[i].alt;
        div.append(imgDark, img);
      }

      wrapper.append(div);
    }
  }

  function create(
    height,
    scale,
    wrapper,
    wrapperOuter,
    className,
    length,
    auto,
    toolName,
  ) {
    const x = height * scale;
    let amount = Math.floor(wrapperOuter.clientWidth / x);
    if (length > amount || auto === 1)
      _toolAutoScroll(
        className,
        length,
        wrapperOuter,
        wrapper,
        x,
        amount,
        auto,
        toolName,
      );
  }

  function _toolAutoScroll(
    className,
    length,
    wrapperOuter,
    wrapper,
    x,
    amount,
    auto,
    toolName,
  ) {
    const tools = document.querySelectorAll(`.${className}`);
    let toBeEnd = 0;
    let tx = new Array(length).fill(0);
    let mid = Math.floor(length / 2);
    let toolMid = null;

    if (amount >= length - 1) amount = length - 2;
    if (amount % 2 === 0) wrapperOuter.style.width = x * (amount - 1) + "px";
    else wrapperOuter.style.width = x * amount + "px";

    if (amount < 5) mid -= 2;
    else if (amount < 7) mid -= 1;

    if (auto === 1) {
      wrapper.style.transform = `translateX(-${x}px)`;
      toolMid = tools[mid].querySelector("img");
      toolMid.classList.toggle("scaleAbout");
      toolName.textContent = toolMid.alt.toUpperCase();
    }

    setInterval(() => {
      for (let i = 0; i < length; i++) {
        if (i === toBeEnd) {
          tx[i] += x * (length - 1);
          tools[i].style.opacity = 0;

          tools[i].addEventListener(
            "transitionend",
            () => {
              tools[i].style.opacity = 1;
            },
            { once: true },
          );
        } else tx[i] -= x;

        if (auto === 1) toolMid.classList.toggle("scaleAbout");
        tools[i].style.transform = `translateX(${tx[i]}px)`;
      }

      if (toBeEnd !== length - 1) toBeEnd += 1;
      else toBeEnd = 0;

      if (mid !== length - 1) mid += 1;
      else mid = 0;

      if (auto === 1) {
        toolMid = tools[mid].querySelector("img");
        if (toolMid === null) toolMid = tools[mid].querySelector("i");
        toolMid.classList.toggle("scaleAbout");
        toolName.textContent = Boolean(toolMid.alt)
          ? toolMid.alt.toUpperCase()
          : toolMid.title.toUpperCase();
      }
    }, 2000);
  }

  function _initAbout() {
    const list = _tools__WEBPACK_IMPORTED_MODULE_0__.tools.getList();
    const className = "tool-about";
    const height = 40;
    const scale = 1.5;
    const wrapper = document.querySelector("#tools-wrapper-about");
    const wrapperOuter = document.querySelector("#tools-wrapper-outer-about");
    const toolName = document.querySelector("#tool-name");

    generateImage(list, className, height, scale, wrapper);
    create(
      height,
      scale,
      wrapper,
      wrapperOuter,
      className,
      list.length,
      1,
      toolName,
    );
  }

  return { init, generateImage, create };
})();




/***/ }),

/***/ "./src/js/class-Project.js":
/*!*********************************!*\
  !*** ./src/js/class-Project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name, desc, img, repo, demo, tools) {
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.repo = repo;
    this.demo = demo;
    this.tools = tools;
  }
}


/***/ }),

/***/ "./src/js/dark-mode.js":
/*!*****************************!*\
  !*** ./src/js/dark-mode.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darkMode: () => (/* binding */ darkMode)
/* harmony export */ });
const darkMode = (() => {
  const btns = document.querySelectorAll(".btn-dark-mode");
  const innerWrappers = document.querySelectorAll(".dark-mode-inner-wrapper");
  const html = document.documentElement;

  function init() {
    _detectDarkMode();
    btns.forEach((btn) => {
      btn.onclick = _toggle;
    });
  }

  function _detectDarkMode() {
    if (localStorage.theme === "dark") {
      _toggle();
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark");
      _toggle();
    } else localStorage.setItem("theme", "light");
  }

  function _toggle() {
    html.classList.toggle("dark");
    innerWrappers.forEach((innerWrapper) => {
      innerWrapper.classList.toggle("dark");
    });

    if (!html.classList.contains("dark"))
      localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
  }

  return { init };
})();




/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   image: () => (/* binding */ image)
/* harmony export */ });
/* harmony import */ var _img_icons_dark_mode_50w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons/dark-mode-50w.png */ "./src/img/icons/dark-mode-50w.png");
/* harmony import */ var _img_icons_dark_mode_w_50w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons/dark-mode-w-50w.png */ "./src/img/icons/dark-mode-w-50w.png");
/* harmony import */ var _img_icons_arrow_w_50w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/arrow-w-50w.png */ "./src/img/icons/arrow-w-50w.png");
/* harmony import */ var _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/profile-2-640w.jpg */ "./src/img/profile-2-640w.jpg");
/* harmony import */ var _img_icons_poll_50w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/poll-50w.png */ "./src/img/icons/poll-50w.png");
/* harmony import */ var _img_icons_poll_w_50w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/icons/poll-w-50w.png */ "./src/img/icons/poll-w-50w.png");
/* harmony import */ var _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/icons/open-50w.png */ "./src/img/icons/open-50w.png");
/* harmony import */ var _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/icons/open-w-50w.png */ "./src/img/icons/open-w-50w.png");
/* harmony import */ var _img_icons_name_50w_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/icons/name-50w.png */ "./src/img/icons/name-50w.png");
/* harmony import */ var _img_icons_name_w_50w_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/icons/name-w-50w.png */ "./src/img/icons/name-w-50w.png");
/* harmony import */ var _img_icons_email_50w_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/icons/email-50w.png */ "./src/img/icons/email-50w.png");
/* harmony import */ var _img_icons_email_w_50w_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/icons/email-w-50w.png */ "./src/img/icons/email-w-50w.png");
/* harmony import */ var _img_icons_phone_50w_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/icons/phone-50w.png */ "./src/img/icons/phone-50w.png");
/* harmony import */ var _img_icons_phone_w_50w_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/icons/phone-w-50w.png */ "./src/img/icons/phone-w-50w.png");
/* harmony import */ var _img_icons_link_50w_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/icons/link-50w.png */ "./src/img/icons/link-50w.png");
/* harmony import */ var _img_icons_link_w_50w_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/icons/link-w-50w.png */ "./src/img/icons/link-w-50w.png");




















const image = (() => {
  const darkModes = document.querySelectorAll(".img-dark-mode");
  const lightModes = document.querySelectorAll(".img-light-mode");
  const scroll = document.querySelector("#img-scroll");
  const profile = document.querySelector("#img-profile");

  const menu = document.querySelector("#img-menu-wrapper");
  const name = document.querySelector("#img-name-wrapper");
  const email = document.querySelector("#img-email-wrapper");
  const phone = document.querySelector("#img-phone-wrapper");
  const link = document.querySelector("#img-link-wrapper");

  function init() {
    darkModes.forEach((dark) => {
      dark.src = _img_icons_dark_mode_w_50w_png__WEBPACK_IMPORTED_MODULE_1__;
    });

    lightModes.forEach((light) => {
      light.src = _img_icons_dark_mode_50w_png__WEBPACK_IMPORTED_MODULE_0__;
    });

    scroll.src = _img_icons_arrow_w_50w_png__WEBPACK_IMPORTED_MODULE_2__;
    profile.src = _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_3__;

    _setImgSrc(menu, _img_icons_poll_w_50w_png__WEBPACK_IMPORTED_MODULE_5__, _img_icons_poll_50w_png__WEBPACK_IMPORTED_MODULE_4__);
    _setImgSrc(name, _img_icons_name_w_50w_png__WEBPACK_IMPORTED_MODULE_9__, _img_icons_name_50w_png__WEBPACK_IMPORTED_MODULE_8__);
    _setImgSrc(email, _img_icons_email_w_50w_png__WEBPACK_IMPORTED_MODULE_11__, _img_icons_email_50w_png__WEBPACK_IMPORTED_MODULE_10__);
    _setImgSrc(phone, _img_icons_phone_w_50w_png__WEBPACK_IMPORTED_MODULE_13__, _img_icons_phone_50w_png__WEBPACK_IMPORTED_MODULE_12__);
    _setImgSrc(link, _img_icons_link_w_50w_png__WEBPACK_IMPORTED_MODULE_15__, _img_icons_link_50w_png__WEBPACK_IMPORTED_MODULE_14__);
  }

  function setIconOpen(className) {
    const element = document.querySelectorAll(className);
    element.forEach((el) => {
      _setImgSrc(el, _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_7__, _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_6__);
    });
  }

  function _setImgSrc(id, srcDark, srcLight) {
    const target = id.querySelectorAll("img");
    target[0].src = srcDark;
    target[1].src = srcLight;
  }

  return { init, setIconOpen };
})();




/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/background.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _tab_clickable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-clickable */ "./src/js/tab-clickable.js");




const menu = (() => {
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenu = document.querySelector("#btn-menu");
  const btnMenuBack = document.querySelector("#btn-menu-back");

  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const menu = document.querySelector("#menu");
  const helloWrapper = document.querySelector("#hello-wrapper");
  const nav = document.querySelectorAll("nav");

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");
  const btnBacks = document.querySelectorAll(".btn-back");

  let isOpenMenu = 0;
  let threshold = 0;
  let isTabOpen = 0;
  let backTarget = [];

  function init() {
    threshold = _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.getScrollThreshold();

    btnAboutL.onclick = () => {
      _openTab(about, 2);
    };
    btnProjectsL.onclick = () => {
      _openTab(projects, 1);
    };
    btnContactL.onclick = () => {
      _openTab(contact, 2);
    };

    btnBacks.forEach((btn) => {
      btn.onclick = () => {
        const target = backTarget[0];
        backTarget[0].classList.toggle("active");
        _toggleBackground(backTarget[1]);
        setTimeout(() => {
          backTarget[0].querySelector("article").scrollTo(0, 0);
          _tab_clickable__WEBPACK_IMPORTED_MODULE_2__.tabClickable.toggle(target);
        }, 1000);
      };
    });

    btnMenu.onclick = () => {
      if (isOpenMenu === 1) {
        btnMenuBack.click();
        return;
      }

      _toggleMenuCooldown();
      _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.disableScroll();

      if (window.scrollY < threshold) {
        _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(1);
        helloWrapper.classList.toggle("hide");
      }

      menu.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menu.classList.toggle("open");
      });

      isOpenMenu = 1;
    };

    btnMenuBack.onclick = () => {
      _toggleMenuCooldown();
      _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.enableScroll();
      menu.classList.toggle("open");

      setTimeout(() => {
        menu.classList.toggle("hidden");
      }, 1000);

      if (window.scrollY < threshold) {
        _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(1);
        helloWrapper.classList.toggle("hide");
      }

      if (helloWrapper.classList.contains("hide")) {
        _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(1);
        helloWrapper.classList.toggle("hide");
      }

      isOpenMenu = 0;
    };

    btnAboutP.onclick = () => {
      if (window.scrollY < threshold) {
        window.scrollBy(0, 2);
        _scrollTo(about, 1);
        window.scrollBy(0, -(screen.height / 2));
      } else _scrollTo(about, 1);
    };

    btnProjectsP.onclick = () => {
      _scrollTo(projects, 1);
    };
    btnContactP.onclick = () => {
      _scrollTo(contact, 0);
    };
  }

  function resetOnScreenChange() {
    if (isTabOpen === 1) {
      btnBacks[0].click();
      isTabOpen = 0;
    }
  }

  function _openTab(tab, bg) {
    _toggleBackground(bg);
    _tab_clickable__WEBPACK_IMPORTED_MODULE_2__.tabClickable.toggle(tab);
    tab.classList.toggle("active");
    isTabOpen = 1;
    backTarget = [tab, bg];
  }

  function _toggleBackground(bg) {
    helloWrapper.classList.toggle("hide");
    _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(bg);
    nav.forEach((el) => {
      el.classList.toggle("hide");
    });
  }

  function _toggleMenuCooldown() {
    btnMenu.disabled = true;
    btnMenuBack.disabled = true;
    setTimeout(() => {
      btnMenu.disabled = false;
      btnMenuBack.disabled = false;
    }, 1000);
  }

  function _scrollTo(content, offset) {
    content.scrollIntoView();
    if (offset === 1) window.scrollBy(0, -56 - 28);
    btnMenuBack.click();
  }

  return { init, resetOnScreenChange };
})();




/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _class_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-Project */ "./src/js/class-Project.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
/* harmony import */ var _img_projects_ypet_d_450w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/projects/ypet-d-450w.png */ "./src/img/projects/ypet-d-450w.png");
/* harmony import */ var _img_projects_weather_d_450w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/projects/weather-d-450w.png */ "./src/img/projects/weather-d-450w.png");
/* harmony import */ var _img_projects_weather_m_200w_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/projects/weather-m-200w.jpg */ "./src/img/projects/weather-m-200w.jpg");
/* harmony import */ var _img_projects_homepage_d_450w_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/projects/homepage-d-450w.png */ "./src/img/projects/homepage-d-450w.png");










const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  const projectList = _getProjects();
  const length = projectList.length;
  const height = 40;
  const scale = 1.1;

  function init() {
    _generateProjects();
    _carouselInit();
    _image__WEBPACK_IMPORTED_MODULE_3__.image.setIconOpen(".icon-link-wrapper");
  }

  function _generateProjects() {
    let count = 1;

    for (const project of projectList) {
      // Create elements
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divIndex = _createElementWithClass(
        "div",
        "index-project-wrapper",
        "text-transparent",
        "montserrat",
      );
      const index = _createElementWithClass(
        "span",
        "index-project",
        "text-theme",
        "absolute",
        "translate-x-[-100%]",
      );
      const divInfo = _createElementWithClass(
        "div",
        "info-project",
        "relative",
      );
      const title = _createElementWithClass("h3", "z-[1]", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p", "z-[2]");
      const divTools = _createElementWithClass(
        "div",
        "flex",
        "justify-center",
        "items-center",
        "overflow-x-hidden",
      );
      const wrapperToolOuter = _createElementWithClass(
        "div",
        "tools-wrapper-outer-project",
      );
      const wrapperTool = _createElementWithClass(
        "div",
        "tools-wrapper-project",
      );
      const divLinks = _createElementWithClass(
        "div",
        "flex",
        "justify-evenly",
        "items-center",
      );
      const aRepo = _createElementWithClass(
        "a",
        "flex",
        "items-center",
        "gap-3",
        "montserrat",
        "hover:scale-[110%]",
      );
      const spanRepo = _createElementWithClass("span");
      const spanDemo = spanRepo.cloneNode(false);
      const divImg = _createElementWithClass("div", "img-project-wrapper");
      const divImgInner = _createElementWithClass("div");
      const img = _createElementWithClass("img");
      const img2 = _createElementWithClass("img", "img-project-m", "absolute");

      // Info
      index.textContent = count;
      divIndex.textContent = count;
      divIndex.append(index);
      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      // Tools
      _carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.generateImage(
        project.tools,
        `tool-project-${count}`,
        height,
        scale,
        wrapperTool,
      );

      wrapperToolOuter.append(wrapperTool);
      divTools.append(wrapperToolOuter);

      // Link and Demo
      aRepo.target = "_blank";
      aRepo.rel = "noreferrer";
      const aDemo = aRepo.cloneNode(false);
      aRepo.href = project.repo;
      spanRepo.textContent = "GITHUB";
      aDemo.href = project.demo;
      spanDemo.textContent = "DEMO";

      const linkWrapper = _createElementWithClass(
        "div",
        "h-[24px]",
        "aspect-square",
        "relative",
        "icon-link-wrapper",
      );
      const imgLink = _createElementWithClass(
        "img",
        "icon-mode-dark",
        "absolute",
      );
      const imgLink2 = _createElementWithClass("img", "icon-mode", "absolute");

      linkWrapper.append(imgLink, imgLink2);
      const linkWrapper2 = linkWrapper.cloneNode(true);

      aRepo.append(spanRepo, linkWrapper);
      aDemo.append(spanDemo, linkWrapper2);
      divLinks.append(aRepo, aDemo);
      divInfo.append(divIndex, title, divDesc, divTools, divLinks);

      // Project Image
      img.src = project.img[0];
      divImgInner.append(img);

      if (project.img.length > 1) {
        img2.src = project.img[1];
        divImgInner.append(img2);
      }

      const divImgInnerMirror = divImgInner.cloneNode(true);

      if (count % 2 === 0) {
        divImgInner.classList.add("img-project-even");
        divImgInnerMirror.classList.add("img-project-mirror-even");
        divWrapper.classList.add("landscape:flex-row-reverse");
      } else {
        divImgInner.classList.add("img-project");
        divImgInnerMirror.classList.add("img-project-mirror");
      }

      const divImgInnerWrapper = _createElementWithClass(
        "div",
        "img-project-inner-wrapper",
      );
      divImgInnerWrapper.append(divImgInner, divImgInnerMirror);
      divImg.append(divImgInnerWrapper);
      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);

      // Divider
      const divider = _createElementWithClass("div", "divider-theme");
      divInfo.append(divider);

      count++;
    }
  }

  function _carouselInit() {
    const wrappers = document.querySelectorAll(".tools-wrapper-project");
    const wrappersOuter = document.querySelectorAll(
      ".tools-wrapper-outer-project",
    );

    for (let i = 0; i < length; i++) {
      const className = `tool-project-${i + 1}`;
      const length = document.querySelectorAll(`.${className}`).length;
      _carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.create(
        height,
        scale,
        wrappers[i],
        wrappersOuter[i],
        className,
        length,
        0,
      );
    }
  }

  function _createElementWithClass(tag, ...classList) {
    const element = document.createElement(tag);
    element.classList.add(...classList);
    return element;
  }

  // Project List

  function _getProjects() {
    return [
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Your Personal Expense Tracker",
        "A web application that allows you to track your expenses.",
        [_img_projects_ypet_d_450w_png__WEBPACK_IMPORTED_MODULE_4__],
        "https://github.com/woonzf/cs50x-2023-project",
        "https://www.youtube.com/watch?v=l83kys9yJJs",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get(
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "SQLite",
          "Flask",
          "Bootstrap",
        ),
      ),
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Weather App",
        "A weather application using Weather API.",
        [_img_projects_weather_d_450w_png__WEBPACK_IMPORTED_MODULE_5__, _img_projects_weather_m_200w_jpg__WEBPACK_IMPORTED_MODULE_6__],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Homepage",
        "My first portfolio website, I am featuring it for the amount of effort I've put into it.",
        [_img_projects_homepage_d_450w_png__WEBPACK_IMPORTED_MODULE_7__],
        "https://github.com/woonzf/odin-homepage",
        "https://woonzf.github.io/odin-homepage/",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML", "CSS", "JavaScript", "Webpack", "Tailwind CSS"),
      ),
    ];
  }

  return { init };
})();




/***/ }),

/***/ "./src/js/screen-orientation.js":
/*!**************************************!*\
  !*** ./src/js/screen-orientation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenOrientation: () => (/* binding */ screenOrientation)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");


const screenOrientation = (() => {
  function init() {
    screen.orientation.onchange = () => {
      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.resetOnScreenChange();
    };
  }

  return { init };
})();




/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/background.js");


const scroll = (() => {
  const sectionIntro = document.querySelector("#section-intro");
  const scroll = document.querySelector("#scroll");

  const threshold = 1;
  let shrink = 0;

  function init() {
    _shrinkOnScroll();
  }

  function getScrollThreshold() {
    return threshold;
  }

  function _shrinkOnScroll() {
    window.onscroll = () => {
      if (window.scrollY > threshold && shrink === 0) {
        _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(1, 3);
        _shrinkIntro();
        shrink = 1;
      } else if (window.scrollY < threshold && shrink === 1) {
        _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(1, 3);
        _shrinkIntro();
        shrink = 0;
      }
    };
  }

  function _shrinkIntro() {
    sectionIntro.classList.toggle("shrink");
    scroll.classList.toggle("hide");
  }

  // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      }),
    );
  } catch (e) {}

  let wheelOpt = supportsPassive ? { passive: false } : false;
  let wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  return { init, getScrollThreshold, disableScroll, enableScroll };
})();




/***/ }),

/***/ "./src/js/tab-clickable.js":
/*!*********************************!*\
  !*** ./src/js/tab-clickable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabClickable: () => (/* binding */ tabClickable)
/* harmony export */ });
const tabClickable = (() => {
  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");

  function init() {
    toggle(about);
    toggle(projects);
    toggle(contact);
  }

  function toggle(tab) {
    const buttons = tab.querySelectorAll("button");
    const links = tab.querySelectorAll("a");
    const article = tab.querySelector("article");

    const clickables = [buttons, links];

    article.classList.toggle("overflow-hidden");
    clickables.forEach((clickable) => {
      clickable.forEach((el) => {
        el.classList.toggle("landscape:hidden");
      });
    });
  }

  return { init, toggle };
})();




/***/ }),

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tools: () => (/* binding */ tools)
/* harmony export */ });
const tools = (() => {
  const list = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
      alt: "Webpack",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      alt: "Jest",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      alt: "C",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      alt: "SQLite",
    },
    {
      class: ["devicon-flask-original", "colored"],
      alt: "Flask",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      alt: "Visual Studio Code",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      class: ["devicon-github-original", "colored"],
      alt: "GitHub",
    },
  ];

  function getList() {
    return get(
      "Tailwind CSS",
      "Visual Studio Code",
      "Git",
      "GitHub",
      "HTML",
      "CSS",
      "JavaScript",
      "Webpack",
      "Jest",
    );
  }

  function get() {
    let getList = [];

    for (const argument of arguments) {
      for (const tool of list) {
        if (argument === tool.alt) getList.push(tool);
      }
    }

    return getList;
  }

  return { getList, get };
})();




/***/ }),

/***/ "./src/font/Montserrat-ExtraBold.ttf":
/*!*******************************************!*\
  !*** ./src/font/Montserrat-ExtraBold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c8b198832c88c649faa.ttf";

/***/ }),

/***/ "./src/img/icons/arrow-w-50w.png":
/*!***************************************!*\
  !*** ./src/img/icons/arrow-w-50w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ae2c0d571983d75ea5c.png";

/***/ }),

/***/ "./src/img/icons/dark-mode-50w.png":
/*!*****************************************!*\
  !*** ./src/img/icons/dark-mode-50w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6305ca6e96f48f95f81.png";

/***/ }),

/***/ "./src/img/icons/dark-mode-w-50w.png":
/*!*******************************************!*\
  !*** ./src/img/icons/dark-mode-w-50w.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1847f37ec1cfad7339b9.png";

/***/ }),

/***/ "./src/img/icons/email-50w.png":
/*!*************************************!*\
  !*** ./src/img/icons/email-50w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f678459723f89b3afa2.png";

/***/ }),

/***/ "./src/img/icons/email-w-50w.png":
/*!***************************************!*\
  !*** ./src/img/icons/email-w-50w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3924daa94b100a48c71.png";

/***/ }),

/***/ "./src/img/icons/link-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/link-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa3cbe8214d37e40383a.png";

/***/ }),

/***/ "./src/img/icons/link-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/link-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4884fc745979d02a79d.png";

/***/ }),

/***/ "./src/img/icons/name-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/name-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4777f855fe01f0b4a49f.png";

/***/ }),

/***/ "./src/img/icons/name-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/name-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3b3364d00232ba0dd65.png";

/***/ }),

/***/ "./src/img/icons/open-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/open-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e875fb0a158ceec2b831.png";

/***/ }),

/***/ "./src/img/icons/open-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/open-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef74e2761c3898237855.png";

/***/ }),

/***/ "./src/img/icons/phone-50w.png":
/*!*************************************!*\
  !*** ./src/img/icons/phone-50w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c6fc5f2d0f0f4d96cc1.png";

/***/ }),

/***/ "./src/img/icons/phone-w-50w.png":
/*!***************************************!*\
  !*** ./src/img/icons/phone-w-50w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d49a8ff6c8ddefde645.png";

/***/ }),

/***/ "./src/img/icons/poll-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/poll-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f20aa6171e22e91ae131.png";

/***/ }),

/***/ "./src/img/icons/poll-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/poll-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d8aed824bc8afe6bca7.png";

/***/ }),

/***/ "./src/img/profile-2-640w.jpg":
/*!************************************!*\
  !*** ./src/img/profile-2-640w.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52a346397612f8b69ec.jpg";

/***/ }),

/***/ "./src/img/projects/homepage-d-450w.png":
/*!**********************************************!*\
  !*** ./src/img/projects/homepage-d-450w.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7315e822060ce479f79.png";

/***/ }),

/***/ "./src/img/projects/weather-d-450w.png":
/*!*********************************************!*\
  !*** ./src/img/projects/weather-d-450w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9c3eb5de35d7371f0e0.png";

/***/ }),

/***/ "./src/img/projects/weather-m-200w.jpg":
/*!*********************************************!*\
  !*** ./src/img/projects/weather-m-200w.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea265ac690e14dd9f23c.jpg";

/***/ }),

/***/ "./src/img/projects/ypet-d-450w.png":
/*!******************************************!*\
  !*** ./src/img/projects/ypet-d-450w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d5cd49dcd62abbdc87f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/scroll */ "./src/js/scroll.js");
/* harmony import */ var _js_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/image */ "./src/js/image.js");
/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/carousel */ "./src/js/carousel.js");
/* harmony import */ var _js_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/projects */ "./src/js/projects.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_screen_orientation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/screen-orientation */ "./src/js/screen-orientation.js");
/* harmony import */ var _js_dark_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/dark-mode */ "./src/js/dark-mode.js");
/* harmony import */ var _js_tab_clickable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/tab-clickable */ "./src/js/tab-clickable.js");










document.addEventListener("DOMContentLoaded", () => {
  _js_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.init();
  _js_image__WEBPACK_IMPORTED_MODULE_2__.image.init();
  _js_carousel__WEBPACK_IMPORTED_MODULE_3__.carousel.init();
  _js_projects__WEBPACK_IMPORTED_MODULE_4__.projects.init();
  _js_menu__WEBPACK_IMPORTED_MODULE_5__.menu.init();
  _js_screen_orientation__WEBPACK_IMPORTED_MODULE_6__.screenOrientation.init();
  _js_dark_mode__WEBPACK_IMPORTED_MODULE_7__.darkMode.init();
  _js_tab_clickable__WEBPACK_IMPORTED_MODULE_8__.tabClickable.init();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQyxvQkFBb0I7QUFDcEI7QUFDQSxrQkFBa0I7QUFDbEIsa01BQWtNO0FBQ2xNLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1IQUFtSDtBQUNuSCxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLGFBQWEsTUFBTSxPQUFPLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sV0FBVyxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFP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QUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKc0I7QUFDTjtBQUNNO0FBQ047O0FBRXVCO0FBQ007QUFDQTtBQUNGOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5Q0FBSztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwrQ0FBUTtBQUNkO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNGO0FBQ007QUFDQTtBQUNSO0FBQzJCO0FBQ2xCO0FBQ1E7O0FBRWxEO0FBQ0EsRUFBRSw4Q0FBTTtBQUNSLEVBQUUsNENBQUs7QUFDUCxFQUFFLGtEQUFRO0FBQ1YsRUFBRSxrREFBUTtBQUNWLEVBQUUsMENBQUk7QUFDTixFQUFFLHFFQUFpQjtBQUNuQixFQUFFLG1EQUFRO0FBQ1YsRUFBRSwyREFBWTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2xhc3MtUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2ltYWdlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2NyZWVuLW9yaWVudGF0aW9uLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdGFiLWNsaWNrYWJsZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Rvb2xzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01vbnRzZXJyYXQtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbjpyb290IHtcbiAgLS10aW1pbmctYm91bmNlLTEwMDogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIC0tdGltaW5nLWJvdW5jZS01MDogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIC0tYm91bmNlLXRyYW5zbGF0ZVk6IDI1JTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbn1cblxucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5hcnRpY2xlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuYXJ0aWNsZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICBhcnRpY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBhcnRpY2xlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICBhcnRpY2xlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vKiBTY3JvbGxiYXIgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMTY1LCAxNjUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMTY1LCAxNjUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuOndoZXJlKC5kYXJrLCAuZGFyayAqKTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuLmJnLXRoZW1lIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0yIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGV4dC1saWdodCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0yIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5kaXZpZGVyLXRoZW1lIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgaGVpZ2h0OiAwLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50LXdyYXBwZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4uY29udGVudC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG4gIH1cbn1cbi5idG4tbmF2LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5cmVtO1xufVxuLmJ0bi1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZTpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWUtMjpob3Zlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJvcmRlci1pbWcge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDAuNzVyZW07XG4gIC0tdHctdHJhbnNsYXRlLXk6IGNhbGMoY2FsYygxMDAlICsgMTJweCkgKiAtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNzVyZW0sIGNhbGMoKDEwMCUgKyAxMnB4KSAqIC0xKSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgY2FsYyhjYWxjKDEwMCUgKyAxMnB4KSAqIC0xKSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmNvbnRlbnQtd3JhcHBlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZ2FwOiAxLjI1cmVtO1xuICBvdmVyZmxvdy15OiBjbGlwO1xuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG4uaW5kZXgtcHJvamVjdC13cmFwcGVyIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMjUlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmluZm8tcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLmltZy1wcm9qZWN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmltZy1wcm9qZWN0LWlubmVyLXdyYXBwZXIge1xuICAgIC0tdHctdHJhbnNsYXRlLXk6IC0xMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtMTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG59XG4uaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XG4gICAgcGVyc3BlY3RpdmU6IDUwMHB4O1xuICB9XG4uaW1nLXByb2plY3QsXG4gIC5pbWctcHJvamVjdC1ldmVuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgc2VjdGlvbiBiZWxvdyovXG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB3aGl0ZSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgd2hpdGUpO1xuICB9XG4uaW1nLXByb2plY3QtbWlycm9yIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxuLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgyMGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG4uaW1nLXByb2plY3QtbSB7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiAtNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmltZy1wcm9qZWN0LW1pcnJvciA+IC5pbWctcHJvamVjdC1tLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4gPiAuaW1nLXByb2plY3QtbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4udG9vbHMtd3JhcHBlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b29sLWFib3V0LFxuICBbY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucC1jb250YWN0IHtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaWNvbi1jb250YWN0LXdyYXBwZXIge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1jb250YWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuLmljb24tbW9kZS1kYXJrLFxuICAuaWNvbi1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gIH1cbi5pY29uLW1vZGUtZGFyayB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1tb2RlLWRhcms6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLW1vZGUge1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tY29udGFjdC1saW5rLXdyYXBwZXIsXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMzBweDtcbn1cbi5pY29uLWNvbnRhY3QtbGluay13cmFwcGVyOmhvdmVyLFxuICAuaWNvbi1jb250YWN0LWxpbms6aG92ZXIge1xuICAtLXR3LXNjYWxlLXg6IDEuMTtcbiAgLS10dy1zY2FsZS15OiAxLjE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEuMSkgc2NhbGVZKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmljb24tY29udGFjdC1saW5rLXdyYXBwZXIsXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4uaWNvbi1jb250YWN0LWxpbmstaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWNvbnRhY3QtbGluay1pIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5zdHJva2UtY29udGFjdCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uc3Ryb2tlLWNvbnRhY3Q6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5pbml0aWFsLWNvbnRhY3Qge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmluaXRpYWwtY29udGFjdDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwcHg7XG59XG4uYm90dG9tLVxcXFxbNTZweFxcXFxdIHtcbiAgYm90dG9tOiA1NnB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LVxcXFxbLTI4cHhcXFxcXSB7XG4gIGxlZnQ6IC0yOHB4O1xufVxuLmxlZnQtXFxcXFstNDVweFxcXFxdIHtcbiAgbGVmdDogLTQ1cHg7XG59XG4ubGVmdC1cXFxcWzI4cHhcXFxcXSB7XG4gIGxlZnQ6IDI4cHg7XG59XG4ubGVmdC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LVxcXFxbY2FsY1xcXFwoNTBcXFxcJS0xNzJweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDE3MnB4KTtcbn1cbi5sZWZ0LVxcXFxbY2FsY1xcXFwoNTBcXFxcJS03MnB4XFxcXClcXFxcXSB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzJweCk7XG59XG4ucmlnaHQtXFxcXFstMjhweFxcXFxdIHtcbiAgcmlnaHQ6IC0yOHB4O1xufVxuLnJpZ2h0LVxcXFxbLTQ1cHhcXFxcXSB7XG4gIHJpZ2h0OiAtNDVweDtcbn1cbi5yaWdodC1cXFxcWzI4cHhcXFxcXSB7XG4gIHJpZ2h0OiAyOHB4O1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzg0cHhcXFxcXSB7XG4gIHRvcDogODRweDtcbn1cbi50b3AtXFxcXFtjYWxjXFxcXCg1MFxcXFwlLTE0cHhcXFxcKVxcXFxdIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xufVxuLnotXFxcXFsxXFxcXF0ge1xuICB6LWluZGV4OiAxO1xufVxuLnotXFxcXFsyXFxcXF0ge1xuICB6LWluZGV4OiAyO1xufVxuLnotXFxcXFs5OFxcXFxdIHtcbiAgei1pbmRleDogOTg7XG59XG4uei1cXFxcWzk5XFxcXF0ge1xuICB6LWluZGV4OiA5OTtcbn1cbi56LWF1dG8ge1xuICB6LWluZGV4OiBhdXRvO1xufVxuLm10LTAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ubXQtMFxcXFwuNSB7XG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXNwZWN0LVxcXFxbM1xcXFxdIHtcbiAgYXNwZWN0LXJhdGlvOiAzO1xufVxuLmFzcGVjdC1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLmgtMVxcXFwvMiB7XG4gIGhlaWdodDogNTAlO1xufVxuLmgtMVxcXFwvNCB7XG4gIGhlaWdodDogMjUlO1xufVxuLmgtMTQge1xuICBoZWlnaHQ6IDMuNXJlbTtcbn1cbi5oLVxcXFxbMjRweFxcXFxdIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmgtXFxcXFsyNTBcXFxcJVxcXFxdIHtcbiAgaGVpZ2h0OiAyNTAlO1xufVxuLmgtXFxcXFszMDBcXFxcJVxcXFxdIHtcbiAgaGVpZ2h0OiAzMDAlO1xufVxuLmgtXFxcXFtjYWxjXFxcXCgxMDB2aC0yXFxcXCo1NnB4XFxcXClcXFxcXSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udy0xXFxcXC80IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi53LTNcXFxcLzQge1xuICB3aWR0aDogNzUlO1xufVxuLnctMzYge1xuICB3aWR0aDogOXJlbTtcbn1cbi53LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwXFxcXCUtOHB4XFxcXClcXFxcXSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xufVxuLnctXFxcXFtjYWxjXFxcXCgxMDB2dy0yXFxcXCo0MHB4XFxcXClcXFxcXSB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMiAqIDQwcHgpO1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1heC13LTJ4bCB7XG4gIG1heC13aWR0aDogNDJyZW07XG59XG4uLXRyYW5zbGF0ZS14LTMge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMC43NXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNzVyZW0sIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstMTAwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktMyB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDAuNzVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgMC43NXJlbSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjIwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yMjAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy0yNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yNSUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiAtOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS00NSB7XG4gIC0tdHctcm90YXRlOiA0NWRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg0NWRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLVxcXFxbLTI3ZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogLTI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC0yN2RlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtXFxcXFsyN2RlZ1xcXFxdIHtcbiAgLS10dy1yb3RhdGU6IDI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDI3ZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS1cXFxcWzUwZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogNTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoNTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2NhbGUtNzUge1xuICAtLXR3LXNjYWxlLXg6IC43NTtcbiAgLS10dy1zY2FsZS15OiAuNzU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKC43NSkgc2NhbGVZKC43NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1zY2FsZS15LTEwMCB7XG4gIC0tdHctc2NhbGUteTogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5zZWxlY3Qtbm9uZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qdXN0aWZ5LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmdhcC0xIHtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuLmdhcC0xMCB7XG4gIGdhcDogMi41cmVtO1xufVxuLmdhcC0xNCB7XG4gIGdhcDogMy41cmVtO1xufVxuLmdhcC0yIHtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZ2FwLTMge1xuICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4uZ2FwLTcge1xuICBnYXA6IDEuNzVyZW07XG59XG4uc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy14LWhpZGRlbiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy15LWNsaXAge1xuICBvdmVyZmxvdy15OiBjbGlwO1xufVxuLmJnLWxlZnQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xufVxuLmJnLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG59XG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbn1cbi5weC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG59XG4ucHgtMiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4ucHktMTAge1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LVxcXFxbMTB2d1xcXFxdIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xufVxuLnRleHQtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uXFxcXCFsZWFkaW5nLVxcXFxbMFxcXFwuNVxcXFxdIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmxlYWRpbmctXFxcXFswXFxcXC44XFxcXF0ge1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLmxlYWRpbmctbm9uZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtdHJhbnNwYXJlbnQge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ub3BhY2l0eS0wIHtcbiAgb3BhY2l0eTogMDtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gICNjb250YWN0LWNhcmQge1xuICAgIC0tdHctc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDM5LCAzOSwgNDIpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDJweCAycHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMnB4IDJweCAxMHB4IHJnYigzOSwgMzksIDQyKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgfVxuXG4gICNjb250YWN0LWNhcmQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgICAtLXR3LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigyNDEsIDI0NSwgMjQ5KTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMHB4IDEwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDBweCAwcHggMTBweCByZ2IoMjQxLCAyNDUsIDI0OSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG4gIH1cbn1cblxuLm1vbnRzZXJyYXQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcbn1cblxuLnRvb2wtYWJvdXQsXG5bY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdLFxuLmRhcmstbW9kZS1pbm5lci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbi5kYXJrLW1vZGUtaW5uZXItd3JhcHBlci5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmltZy10b29sIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG59XG5cbi5pbWctdG9vbC5zY2FsZUFib3V0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4jbWVudSB7XG4gIHRyYW5zaXRpb246XG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLCB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xufVxuXG4jbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2hlbGxvLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuI2JnLWxlZnQsXG4jYmctcmlnaHQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xufVxuXG4jYmctbGVmdC5zaHJpbmssXG4jYmctcmlnaHQuc2hyaW5rIHtcbiAgd2lkdGg6IDA7XG59XG5cbiNiZy1pbnRybyxcbiNzZWN0aW9uLWludHJvIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG59XG5cbiNiZy1pbnRyby5zaHJpbmssXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XG59XG5cbm5hdixcbiNzY3JvbGwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2Fib3V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbn1cblxuI3Byb2plY3RzLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbiNjb250YWN0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uYW5pbWF0ZS1oZWxsbyB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5hbmltYXRlLWFwcGVhciB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmFuaW1hdGUtYm91bmNlLXgge1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IGJvdW5jZS14IDFzIGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1ib3VuY2UteSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXkgM3MgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15LXIge1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IGJvdW5jZS15LXIgM3MgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15LTkwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IGJvdW5jZS15LTkwIDNzIGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1ib3VuY2UteS1uOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IGJvdW5jZS15LW45MCAzcyBpbmZpbml0ZTtcbn1cblxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xuXG5Aa2V5ZnJhbWVzIGJvdW5jZS14IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXktciB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgMTYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygyNSUgKiAtMSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSAqIC0xKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteS05MCB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgMTYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteS1uOTAge1xuICAwJSxcbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbi8qIE1FRElBIFFVRVJZICovXG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaW1nLXByb2plY3Qge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjBkZWcpO1xuICB9XG5cbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZyk7XG4gIH1cbn1cblxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOnNjYWxlLVxcXFxbMTEwXFxcXCVcXFxcXTpob3ZlciB7XG4gIC0tdHctc2NhbGUteDogMTEwJTtcbiAgLS10dy1zY2FsZS15OiAxMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxMTAlKSBzY2FsZVkoMTEwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuc21cXFxcOmZsZXgtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6dHJhbnNsYXRlLXgtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDI1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6c2NhbGUtMTAwIHtcbiAgICAtLXR3LXNjYWxlLXg6IDE7XG4gICAgLS10dy1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEpIHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG5cbiAgLnhsXFxcXDpibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAueGxcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5wb3J0cmFpdFxcXFw6YWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLVxcXFxbMTAwc3ZoXFxcXF0ge1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLVxcXFxbY2FsY1xcXFwoMTAwc3ZoLTU2cHhcXFxcKVxcXFxdIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gNTZweCk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNjBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpyb3RhdGUtMCB7XG4gICAgLS10dy1yb3RhdGU6IDBkZWc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbC1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtMTQge1xuICAgIGdhcDogMy41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtNyB7XG4gICAgZ2FwOiAxLjc1cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpvdmVyZmxvdy12aXNpYmxlIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktMyB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LVxcXFxbMTV2d1xcXFxdIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAgIC5wb3J0cmFpdFxcXFw6c21cXFxcOnctXFxcXFs1MFxcXFwlXFxcXF0ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAucG9ydHJhaXRcXFxcOnNtXFxcXDp3LVxcXFxbODBcXFxcJVxcXFxdIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5sYW5kc2NhcGVcXFxcOm1iLTcge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDphc3BlY3QtXFxcXFsxXFxcXC44XFxcXF0ge1xuICAgIGFzcGVjdC1yYXRpbzogMS44O1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aC1cXFxcWzEwMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp3LVxcXFxbOTBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXgtXFxcXFstMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogLTE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteS1cXFxcWzE1MFxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXk6IDE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAxNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6ZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6Z2FwLTUge1xuICAgIGdhcDogMS4yNXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnJvdW5kZWQteGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpwLTcge1xuICAgIHBhZGRpbmc6IDEuNzVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5sYW5kc2NhcGVcXFxcOm1kXFxcXDp3LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNTZweCk7XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpREFBaUQ7RUFDakQseUJBQXlCO0VBQ3pCLCtEQUE0RDtBQUM5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SUF0ZEE7TUFBQTtJQXNkQTtFQUFBO0FBQUE7O0FBdGRBOztFQUFBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUEsdUJBc2RBO0lBdGRBLCtLQXNkQTtJQXRkQTtFQXNkQTs7RUF0ZEE7SUFBQSxzQkFzZEE7SUF0ZEEsOEtBc2RBO0lBdGRBO0VBc2RBOztFQXRkQTtJQUFBLHNCQXNkQTtJQXRkQSw4S0FzZEE7SUF0ZEE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBO0lBQUE7RUFzZEE7O0VBdGRBOztJQUFBO01BQUE7SUFzZEE7RUFBQTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnQvTW9udHNlcnJhdC1FeHRyYUJvbGQudHRmKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdGltaW5nLWJvdW5jZS0xMDA6IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbiAgLS10aW1pbmctYm91bmNlLTUwOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcXG4gIC0tYm91bmNlLXRyYW5zbGF0ZVk6IDI1JTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tWzUwbXNdO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0zeGwgbWQ6dGV4dC00eGw7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtMnhsO1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIEBhcHBseSBweS0yIHRleHQtanVzdGlmeSB0ZXh0LXByZXR0eTtcXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMiBwb3J0cmFpdDpiZy10cmFuc3BhcmVudCBoLWZ1bGwgdy1mdWxsIG1heC13LXNjcmVlbi1sZyBsYW5kc2NhcGU6cHgtMTAgbGFuZHNjYXBlOm1kOnB4LTE0IGxhbmRzY2FwZTpweS0xNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kIG92ZXJmbG93LWF1dG87XFxuICB9XFxuXFxuICAvKiBTY3JvbGxiYXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgdy1bMTZweF07XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLWZhZGUgYm9yZGVyLXNvbGlkIGJvcmRlci00IGJvcmRlci10aGVtZS0yIGRhcms6Ym9yZGVyLWRhcmsgcm91bmRlZC1mdWxsO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lO1xcbiAgfVxcbn1cXG5cXG5AbGF5ZXIgY29tcG9uZW50cyB7XFxuICAuYmctdGhlbWUge1xcbiAgICBAYXBwbHkgYmctcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS1mYWRlIHtcXG4gICAgQGFwcGx5IGJnLXJlZC0zMDA7XFxuICB9XFxuXFxuICAuYmctZGFyayB7XFxuICAgIEBhcHBseSBiZy16aW5jLTgwMDtcXG4gIH1cXG5cXG4gIC5iZy1kYXJrLWZhZGUge1xcbiAgICBAYXBwbHkgYmctemluYy03MDA7XFxuICB9XFxuXFxuICAuYmctdGhlbWUtMiB7XFxuICAgIEBhcHBseSBiZy1zbGF0ZS0xMDAgZGFyazpiZy1kYXJrO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLTItZmFkZSB7XFxuICAgIEBhcHBseSBiZy1zbGF0ZS0yMDAgZGFyazpiZy1kYXJrLWZhZGU7XFxuICB9XFxuXFxuICAudGV4dC1saWdodCB7XFxuICAgIEBhcHBseSB0ZXh0LXppbmMtODAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUge1xcbiAgICBAYXBwbHkgdGV4dC1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUtMiB7XFxuICAgIEBhcHBseSB0ZXh0LXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgYm9yZGVyLXJlZC00MDA7XFxuICB9XFxuXFxuICAuYm9yZGVyLWRhcmsge1xcbiAgICBAYXBwbHkgYm9yZGVyLXppbmMtODAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJvcmRlci1zbGF0ZS0xMDA7XFxuICB9XFxuXFxuICAuZGl2aWRlci10aGVtZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZSBoLTEgdy1mdWxsO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTphYnNvbHV0ZSB0b3AtMCBsZWZ0LTA7XFxuICB9XFxuXFxuICAuY29udGVudC1zZWN0aW9uIHtcXG4gICAgQGFwcGx5IGgtZnVsbCB3LWZ1bGwgbGFuZHNjYXBlOnB5LTE0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLmJ0bi1uYXYtd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LTM2IGFic29sdXRlO1xcbiAgfVxcblxcbiAgLmJ0bi1uYXYge1xcbiAgICBAYXBwbHkgdy0zNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmaXhlZDtcXG4gIH1cXG5cXG4gIC5idG4tdGhlbWUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtZmFkZSBob3ZlcjpiZy10aGVtZSB0ZXh0LXRoZW1lLTIgZGFyazp0ZXh0LWxpZ2h0O1xcbiAgfVxcblxcbiAgLmJ0bi10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTItZmFkZSBob3ZlcjpiZy10aGVtZS0yIHRleHQtdGhlbWU7XFxuICB9XFxuXFxuICAuYm9yZGVyLWltZyB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGJvcmRlci0yIGJvcmRlci10aGVtZSBhYnNvbHV0ZSB0cmFuc2xhdGUteC0zIC10cmFuc2xhdGUteS1bY2FsYygxMDAlKzEycHgpXSB6LWF1dG87XFxuICB9XFxuXFxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1bOTAlXSBweS03IGZsZXggcG9ydHJhaXQ6ZmxleC1jb2wtcmV2ZXJzZSBnYXAtNSBvdmVyZmxvdy15LWNsaXA7XFxuICB9XFxuXFxuICAuaW5kZXgtcHJvamVjdC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHRleHQtdGhlbWUgdGV4dC03eGwgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHRyYW5zbGF0ZS14LVstMjUlXSB0cmFuc2xhdGUteS1bLTI1JV0gei1hdXRvO1xcbiAgfVxcblxcbiAgLmluZm8tcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LWZ1bGwgcC0zIGZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgZ2FwLTU7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGFuZHNjYXBlOnRyYW5zbGF0ZS15LVstMTAlXSByZWxhdGl2ZTtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNTAwcHg7XFxuICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdCxcXG4gIC5pbWctcHJvamVjdC1ldmVuIHtcXG4gICAgQGFwcGx5IHJlbGF0aXZlIHotWzFdO1xcbiAgICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIHNlY3Rpb24gYmVsb3cqL1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1pcnJvcixcXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XFxuICAgIEBhcHBseSBhYnNvbHV0ZSB0b3AtMCB6LWF1dG8gcG9ydHJhaXQ6aGlkZGVuO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHdoaXRlKTtcXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgd2hpdGUpO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1pcnJvciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgKyAycHgpKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWCgxODBkZWcpO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwJSArIDJweCkpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1tIHtcXG4gICAgQGFwcGx5IGgtZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCB0b3AtWzUlXSByaWdodC1bLTUlXTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3IgPiAuaW1nLXByb2plY3QtbSxcXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiA+IC5pbWctcHJvamVjdC1tIHtcXG4gICAgQGFwcGx5IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC50b29scy13cmFwcGVyLW91dGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteC1oaWRkZW47XFxuICB9XFxuXFxuICAudG9vbHMtd3JhcHBlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLnRvb2wtYWJvdXQsXFxuICBbY2xhc3NePVxcXCJ0b29sLXByb2plY3RcXFwiXSB7XFxuICAgIEBhcHBseSBhc3BlY3Qtc3F1YXJlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLnAtY29udGFjdCB7XFxuICAgIEBhcHBseSBweS0wIHRleHQtbGVmdCB0ZXh0LW5vd3JhcDtcXG4gIH1cXG5cXG4gIC5pY29uLWNvbnRhY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSBoLVs0MHB4XSBzbTpoLVs1MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZS1kYXJrLFxcbiAgLmljb24tbW9kZSB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTAgZGFyazpvcGFjaXR5LTEwMDtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDAgZGFyazpvcGFjaXR5LTA7XFxuICB9XFxuXFxuICAuaWNvbi1jb250YWN0LWxpbmstd3JhcHBlcixcXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XFxuICAgIEBhcHBseSBoLVszMHB4XSBzbTpoLVs0MHB4XSBhc3BlY3Qtc3F1YXJlIGhvdmVyOnNjYWxlLTExMDtcXG4gIH1cXG5cXG4gIC5pY29uLWNvbnRhY3QtbGluay1pIHtcXG4gICAgQGFwcGx5IHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdO1xcbiAgfVxcblxcbiAgLnN0cm9rZS1jb250YWN0IHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTI7XFxuICB9XFxuXFxuICAuaW5pdGlhbC1jb250YWN0IHtcXG4gICAgQGFwcGx5IHRleHQtdGhlbWUtMiBkYXJrOnRleHQtbGlnaHQ7XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgI2NvbnRhY3QtY2FyZCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6c2hhZG93LVsycHhfMnB4XzEwcHhfcmdiKDM5XzM5XzQyKV0gbGFuZHNjYXBlOmRhcms6c2hhZG93LVswcHhfMHB4XzEwcHhfcmdiKDI0MV8yNDVfMjQ5KV07XFxuICB9XFxufVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvb2wtYWJvdXQsXFxuW2NsYXNzXj1cXFwidG9vbC1wcm9qZWN0XFxcIl0sXFxuLmRhcmstbW9kZS1pbm5lci13cmFwcGVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbn1cXG5cXG4uZGFyay1tb2RlLWlubmVyLXdyYXBwZXIuZGFyayB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4uaW1nLXRvb2wge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbi5pbWctdG9vbC5zY2FsZUFib3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuI21lbnUge1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLFxcbiAgICB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcXG59XFxuXFxuI21lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG59XFxuXFxuI21lbnUub3BlbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jaGVsbG8td3JhcHBlciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcblxcbiNiZy1sZWZ0LFxcbiNiZy1yaWdodCB7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctbGVmdC5zaHJpbmssXFxuI2JnLXJpZ2h0LnNocmluayB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuI2JnLWludHJvLFxcbiNzZWN0aW9uLWludHJvIHtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctaW50cm8uc2hyaW5rLFxcbiNzZWN0aW9uLWludHJvLnNocmluayB7XFxuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XFxufVxcblxcbm5hdixcXG4jc2Nyb2xsIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG59XFxuXFxubmF2LmhpZGUsXFxuI3Njcm9sbC5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbiNhYm91dCxcXG4jcHJvamVjdHMsXFxuI2NvbnRhY3Qge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbiNhYm91dC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbn1cXG5cXG4jcHJvamVjdHMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XFxufVxcblxcbiNjb250YWN0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcbn1cXG5cXG4vKiBBTklNQVRJT04gKi9cXG5cXG4uYW5pbWF0ZS1oZWxsbyB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzIDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1hcHBlYXIge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteCB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBib3VuY2UteCAxcyBpbmZpbml0ZTtcXG59XFxuXFxuLmFuaW1hdGUtYm91bmNlLXkge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXkgM3MgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15LXIge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktciAzcyBpbmZpbml0ZTtcXG59XFxuXFxuLmFuaW1hdGUtYm91bmNlLXktOTAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktOTAgM3MgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15LW45MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktbjkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG4vKiBUYWlsd2luZCBCb3VuY2UgQ3VzdG9tICovXFxuXFxuQGtleWZyYW1lcyBib3VuY2UteCB7XFxuICAwJSxcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteSB7XFxuICAwJSxcXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgMTYlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LXIge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSAqIC0xKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LTkwIHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteS1uOTAge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbi8qIE1FRElBIFFVRVJZICovXFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuaW1nLXByb2plY3Qge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTIwZGVnKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1ldmVuIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYWNrZ3JvdW5kID0gKCgpID0+IHtcbiAgY29uc3QgYmdMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1sZWZ0XCIpO1xuICBjb25zdCBiZ1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1yaWdodFwiKTtcbiAgY29uc3QgYmdJbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW50cm9cIik7XG5cbiAgZnVuY3Rpb24gc2hyaW5rKCkge1xuICAgIGZvciAoY29uc3QgbnVtIG9mIGFyZ3VtZW50cykge1xuICAgICAgY29uc3QgYmcgPSBfZ2V0QmcobnVtKTtcbiAgICAgIGJnLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2dldEJnKGludCkge1xuICAgIHN3aXRjaCAoaW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBiZ0xlZnQ7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBiZ1JpZ2h0O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gYmdJbnRybztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzaHJpbmsgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhY2tncm91bmQgfTtcbiIsImltcG9ydCB7IHRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuY29uc3QgY2Fyb3VzZWwgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9pbml0QWJvdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2UobGlzdCwgY2xhc3NOYW1lLCBoZWlnaHQsIHNjYWxlLCB3cmFwcGVyKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLCBcInJlbGF0aXZlXCIpO1xuICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCAqIHNjYWxlICsgXCJweFwiO1xuXG4gICAgICBpZiAobGlzdFtpXS5zcmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLXRvb2xcIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgaW1nLnNyYyA9IGxpc3RbaV0uc3JjO1xuICAgICAgICBpbWcuYWx0ID0gbGlzdFtpXS5hbHQ7XG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW1nRGFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBpbWdEYXJrLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgbGlzdFtpXS5jbGFzc1swXSxcbiAgICAgICAgICBcImltZy10b29sXCIsXG4gICAgICAgICAgXCJpY29uLW1vZGUtZGFya1wiLFxuICAgICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICAgKTtcbiAgICAgICAgaW1nRGFyay5zdHlsZS5mb250U2l6ZSA9IGhlaWdodCArIFwicHhcIjtcblxuICAgICAgICBjb25zdCBpbWcgPSBpbWdEYXJrLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1tb2RlLWRhcmtcIik7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGxpc3RbaV0uY2xhc3NbMV0sIFwiaWNvbi1tb2RlXCIpO1xuXG4gICAgICAgIGltZ0RhcmsudGl0bGUgPSBsaXN0W2ldLmFsdDtcbiAgICAgICAgZGl2LmFwcGVuZChpbWdEYXJrLCBpbWcpO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShcbiAgICBoZWlnaHQsXG4gICAgc2NhbGUsXG4gICAgd3JhcHBlcixcbiAgICB3cmFwcGVyT3V0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIGxlbmd0aCxcbiAgICBhdXRvLFxuICAgIHRvb2xOYW1lLFxuICApIHtcbiAgICBjb25zdCB4ID0gaGVpZ2h0ICogc2NhbGU7XG4gICAgbGV0IGFtb3VudCA9IE1hdGguZmxvb3Iod3JhcHBlck91dGVyLmNsaWVudFdpZHRoIC8geCk7XG4gICAgaWYgKGxlbmd0aCA+IGFtb3VudCB8fCBhdXRvID09PSAxKVxuICAgICAgX3Rvb2xBdXRvU2Nyb2xsKFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgd3JhcHBlck91dGVyLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgICB4LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGF1dG8sXG4gICAgICAgIHRvb2xOYW1lLFxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b29sQXV0b1Njcm9sbChcbiAgICBjbGFzc05hbWUsXG4gICAgbGVuZ3RoLFxuICAgIHdyYXBwZXJPdXRlcixcbiAgICB3cmFwcGVyLFxuICAgIHgsXG4gICAgYW1vdW50LFxuICAgIGF1dG8sXG4gICAgdG9vbE5hbWUsXG4gICkge1xuICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGxldCB0b0JlRW5kID0gMDtcbiAgICBsZXQgdHggPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGxldCB0b29sTWlkID0gbnVsbDtcblxuICAgIGlmIChhbW91bnQgPj0gbGVuZ3RoIC0gMSkgYW1vdW50ID0gbGVuZ3RoIC0gMjtcbiAgICBpZiAoYW1vdW50ICUgMiA9PT0gMCkgd3JhcHBlck91dGVyLnN0eWxlLndpZHRoID0geCAqIChhbW91bnQgLSAxKSArIFwicHhcIjtcbiAgICBlbHNlIHdyYXBwZXJPdXRlci5zdHlsZS53aWR0aCA9IHggKiBhbW91bnQgKyBcInB4XCI7XG5cbiAgICBpZiAoYW1vdW50IDwgNSkgbWlkIC09IDI7XG4gICAgZWxzZSBpZiAoYW1vdW50IDwgNykgbWlkIC09IDE7XG5cbiAgICBpZiAoYXV0byA9PT0gMSkge1xuICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt4fXB4KWA7XG4gICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgIHRvb2xOYW1lLnRleHRDb250ZW50ID0gdG9vbE1pZC5hbHQudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09PSB0b0JlRW5kKSB7XG4gICAgICAgICAgdHhbaV0gKz0geCAqIChsZW5ndGggLSAxKTtcbiAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICAgIHRvb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgdG9vbHNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHR4W2ldIC09IHg7XG5cbiAgICAgICAgaWYgKGF1dG8gPT09IDEpIHRvb2xNaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNjYWxlQWJvdXRcIik7XG4gICAgICAgIHRvb2xzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHhbaV19cHgpYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvQmVFbmQgIT09IGxlbmd0aCAtIDEpIHRvQmVFbmQgKz0gMTtcbiAgICAgIGVsc2UgdG9CZUVuZCA9IDA7XG5cbiAgICAgIGlmIChtaWQgIT09IGxlbmd0aCAtIDEpIG1pZCArPSAxO1xuICAgICAgZWxzZSBtaWQgPSAwO1xuXG4gICAgICBpZiAoYXV0byA9PT0gMSkge1xuICAgICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgICBpZiAodG9vbE1pZCA9PT0gbnVsbCkgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcImlcIik7XG4gICAgICAgIHRvb2xNaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNjYWxlQWJvdXRcIik7XG4gICAgICAgIHRvb2xOYW1lLnRleHRDb250ZW50ID0gQm9vbGVhbih0b29sTWlkLmFsdClcbiAgICAgICAgICA/IHRvb2xNaWQuYWx0LnRvVXBwZXJDYXNlKClcbiAgICAgICAgICA6IHRvb2xNaWQudGl0bGUudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QWJvdXQoKSB7XG4gICAgY29uc3QgbGlzdCA9IHRvb2xzLmdldExpc3QoKTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBcInRvb2wtYWJvdXRcIjtcbiAgICBjb25zdCBoZWlnaHQgPSA0MDtcbiAgICBjb25zdCBzY2FsZSA9IDEuNTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29scy13cmFwcGVyLWFib3V0XCIpO1xuICAgIGNvbnN0IHdyYXBwZXJPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9vbHMtd3JhcHBlci1vdXRlci1hYm91dFwiKTtcbiAgICBjb25zdCB0b29sTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9vbC1uYW1lXCIpO1xuXG4gICAgZ2VuZXJhdGVJbWFnZShsaXN0LCBjbGFzc05hbWUsIGhlaWdodCwgc2NhbGUsIHdyYXBwZXIpO1xuICAgIGNyZWF0ZShcbiAgICAgIGhlaWdodCxcbiAgICAgIHNjYWxlLFxuICAgICAgd3JhcHBlcixcbiAgICAgIHdyYXBwZXJPdXRlcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxpc3QubGVuZ3RoLFxuICAgICAgMSxcbiAgICAgIHRvb2xOYW1lLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZW5lcmF0ZUltYWdlLCBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNhcm91c2VsIH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzYywgaW1nLCByZXBvLCBkZW1vLCB0b29scykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgIHRoaXMuZGVtbyA9IGRlbW87XG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuICB9XG59XG4iLCJjb25zdCBkYXJrTW9kZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1kYXJrLW1vZGVcIik7XG4gIGNvbnN0IGlubmVyV3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmstbW9kZS1pbm5lci13cmFwcGVyXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgX3RvZ2dsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICBfdG9nZ2xlKCk7XG4gICAgfSBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGUoKSB7XG4gICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICBpbm5lcldyYXBwZXJzLmZvckVhY2goKGlubmVyV3JhcHBlcikgPT4ge1xuICAgICAgaW5uZXJXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFodG1sLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRhcmtNb2RlIH07XG4iLCJpbXBvcnQgaW1nRGFya01vZGU1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9kYXJrLW1vZGUtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0RhcmtNb2RlVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2RhcmstbW9kZS13LTUwdy5wbmdcIjtcbmltcG9ydCBpbWdBcnJvd1c1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9hcnJvdy13LTUwdy5wbmdcIjtcbmltcG9ydCBpbWdQcm9maWxlNjQwdyBmcm9tIFwiLi4vaW1nL3Byb2ZpbGUtMi02NDB3LmpwZ1wiO1xuXG5pbXBvcnQgaW1nTWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL3BvbGwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ01lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvcG9sbC13LTUwdy5wbmdcIjtcblxuaW1wb3J0IGltZ09wZW41MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdPcGVuVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdOYW1lNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbmFtZS01MHcucG5nXCI7XG5pbXBvcnQgaW1nTmFtZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9uYW1lLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZW1haWwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2VtYWlsLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1Bob25lNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvcGhvbmUtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1Bob25lVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL3Bob25lLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0xpbms1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9saW5rLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdMaW5rVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2xpbmstdy01MHcucG5nXCI7XG5cbmNvbnN0IGltYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZGFya01vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctZGFyay1tb2RlXCIpO1xuICBjb25zdCBsaWdodE1vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctbGlnaHQtbW9kZVwiKTtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctc2Nyb2xsXCIpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJvZmlsZVwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbWVudS13cmFwcGVyXCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbmFtZS13cmFwcGVyXCIpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWVtYWlsLXdyYXBwZXJcIik7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcGhvbmUtd3JhcHBlclwiKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWxpbmstd3JhcHBlclwiKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGRhcmtNb2Rlcy5mb3JFYWNoKChkYXJrKSA9PiB7XG4gICAgICBkYXJrLnNyYyA9IGltZ0RhcmtNb2RlVzUwdztcbiAgICB9KTtcblxuICAgIGxpZ2h0TW9kZXMuZm9yRWFjaCgobGlnaHQpID0+IHtcbiAgICAgIGxpZ2h0LnNyYyA9IGltZ0RhcmtNb2RlNTB3O1xuICAgIH0pO1xuXG4gICAgc2Nyb2xsLnNyYyA9IGltZ0Fycm93VzUwdztcbiAgICBwcm9maWxlLnNyYyA9IGltZ1Byb2ZpbGU2NDB3O1xuXG4gICAgX3NldEltZ1NyYyhtZW51LCBpbWdNZW51VzUwdywgaW1nTWVudTUwdyk7XG4gICAgX3NldEltZ1NyYyhuYW1lLCBpbWdOYW1lVzUwdywgaW1nTmFtZTUwdyk7XG4gICAgX3NldEltZ1NyYyhlbWFpbCwgaW1nRW1haWxXNTB3LCBpbWdFbWFpbDUwdyk7XG4gICAgX3NldEltZ1NyYyhwaG9uZSwgaW1nUGhvbmVXNTB3LCBpbWdQaG9uZTUwdyk7XG4gICAgX3NldEltZ1NyYyhsaW5rLCBpbWdMaW5rVzUwdywgaW1nTGluazUwdyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJY29uT3BlbihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIF9zZXRJbWdTcmMoZWwsIGltZ09wZW5XNTB3LCBpbWdPcGVuNTB3KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRJbWdTcmMoaWQsIHNyY0RhcmssIHNyY0xpZ2h0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaWQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgICB0YXJnZXRbMF0uc3JjID0gc3JjRGFyaztcbiAgICB0YXJnZXRbMV0uc3JjID0gc3JjTGlnaHQ7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBzZXRJY29uT3BlbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcbmltcG9ydCB7IHRhYkNsaWNrYWJsZSB9IGZyb20gXCIuL3RhYi1jbGlja2FibGVcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bkFib3V0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1sXCIpO1xuXG4gIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51XCIpO1xuICBjb25zdCBidG5NZW51QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtYmFja1wiKTtcblxuICBjb25zdCBidG5BYm91dFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1wXCIpO1xuICBjb25zdCBidG5Qcm9qZWN0c1AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1wXCIpO1xuICBjb25zdCBidG5Db250YWN0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3QtcFwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICBjb25zdCBoZWxsb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlbGxvLXdyYXBwZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXZcIik7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG4gIGNvbnN0IGJ0bkJhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tYmFja1wiKTtcblxuICBsZXQgaXNPcGVuTWVudSA9IDA7XG4gIGxldCB0aHJlc2hvbGQgPSAwO1xuICBsZXQgaXNUYWJPcGVuID0gMDtcbiAgbGV0IGJhY2tUYXJnZXQgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRocmVzaG9sZCA9IHNjcm9sbC5nZXRTY3JvbGxUaHJlc2hvbGQoKTtcblxuICAgIGJ0bkFib3V0TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX29wZW5UYWIoYWJvdXQsIDIpO1xuICAgIH07XG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihwcm9qZWN0cywgMSk7XG4gICAgfTtcbiAgICBidG5Db250YWN0TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX29wZW5UYWIoY29udGFjdCwgMik7XG4gICAgfTtcblxuICAgIGJ0bkJhY2tzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJhY2tUYXJnZXRbMF07XG4gICAgICAgIGJhY2tUYXJnZXRbMF0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgX3RvZ2dsZUJhY2tncm91bmQoYmFja1RhcmdldFsxXSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJhY2tUYXJnZXRbMF0ucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgdGFiQ2xpY2thYmxlLnRvZ2dsZSh0YXJnZXQpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBidG5NZW51Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNPcGVuTWVudSA9PT0gMSkge1xuICAgICAgICBidG5NZW51QmFjay5jbGljaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90b2dnbGVNZW51Q29vbGRvd24oKTtcbiAgICAgIHNjcm9sbC5kaXNhYmxlU2Nyb2xsKCk7XG5cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxKTtcbiAgICAgICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgfVxuXG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIGlzT3Blbk1lbnUgPSAxO1xuICAgIH07XG5cbiAgICBidG5NZW51QmFjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3RvZ2dsZU1lbnVDb29sZG93bigpO1xuICAgICAgc2Nyb2xsLmVuYWJsZVNjcm9sbCgpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSk7XG4gICAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhlbGxvV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlzT3Blbk1lbnUgPSAwO1xuICAgIH07XG5cbiAgICBidG5BYm91dFAub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMik7XG4gICAgICAgIF9zY3JvbGxUbyhhYm91dCwgMSk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtKHNjcmVlbi5oZWlnaHQgLyAyKSk7XG4gICAgICB9IGVsc2UgX3Njcm9sbFRvKGFib3V0LCAxKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8ocHJvamVjdHMsIDEpO1xuICAgIH07XG4gICAgYnRuQ29udGFjdFAub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbyhjb250YWN0LCAwKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRPblNjcmVlbkNoYW5nZSgpIHtcbiAgICBpZiAoaXNUYWJPcGVuID09PSAxKSB7XG4gICAgICBidG5CYWNrc1swXS5jbGljaygpO1xuICAgICAgaXNUYWJPcGVuID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfb3BlblRhYih0YWIsIGJnKSB7XG4gICAgX3RvZ2dsZUJhY2tncm91bmQoYmcpO1xuICAgIHRhYkNsaWNrYWJsZS50b2dnbGUodGFiKTtcbiAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpc1RhYk9wZW4gPSAxO1xuICAgIGJhY2tUYXJnZXQgPSBbdGFiLCBiZ107XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlQmFja2dyb3VuZChiZykge1xuICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICBiYWNrZ3JvdW5kLnNocmluayhiZyk7XG4gICAgbmF2LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51Q29vbGRvd24oKSB7XG4gICAgYnRuTWVudS5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnRuTWVudS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zY3JvbGxUbyhjb250ZW50LCBvZmZzZXQpIHtcbiAgICBjb250ZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgaWYgKG9mZnNldCA9PT0gMSkgd2luZG93LnNjcm9sbEJ5KDAsIC01NiAtIDI4KTtcbiAgICBidG5NZW51QmFjay5jbGljaygpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgcmVzZXRPblNjcmVlbkNoYW5nZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY2xhc3MtUHJvamVjdFwiO1xuaW1wb3J0IHsgdG9vbHMgfSBmcm9tIFwiLi90b29sc1wiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tIFwiLi9pbWFnZVwiO1xuXG5pbXBvcnQgaW1nWXBldEQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy95cGV0LWQtNDUwdy5wbmdcIjtcbmltcG9ydCBpbWdXZWF0aGVyRCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3dlYXRoZXItZC00NTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1dlYXRoZXJNIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvd2VhdGhlci1tLTIwMHcuanBnXCI7XG5pbXBvcnQgaW1nSG9tZUQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy9ob21lcGFnZS1kLTQ1MHcucG5nXCI7XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IF9nZXRQcm9qZWN0cygpO1xuICBjb25zdCBsZW5ndGggPSBwcm9qZWN0TGlzdC5sZW5ndGg7XG4gIGNvbnN0IGhlaWdodCA9IDQwO1xuICBjb25zdCBzY2FsZSA9IDEuMTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9nZW5lcmF0ZVByb2plY3RzKCk7XG4gICAgX2Nhcm91c2VsSW5pdCgpO1xuICAgIGltYWdlLnNldEljb25PcGVuKFwiLmljb24tbGluay13cmFwcGVyXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dlbmVyYXRlUHJvamVjdHMoKSB7XG4gICAgbGV0IGNvdW50ID0gMTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgICBjb25zdCBkaXZXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiY29udGVudC13cmFwcGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZJbmRleCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImluZGV4LXByb2plY3Qtd3JhcHBlclwiLFxuICAgICAgICBcInRleHQtdHJhbnNwYXJlbnRcIixcbiAgICAgICAgXCJtb250c2VycmF0XCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW5kZXggPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIFwiaW5kZXgtcHJvamVjdFwiLFxuICAgICAgICBcInRleHQtdGhlbWVcIixcbiAgICAgICAgXCJhYnNvbHV0ZVwiLFxuICAgICAgICBcInRyYW5zbGF0ZS14LVstMTAwJV1cIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZJbmZvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW5mby1wcm9qZWN0XCIsXG4gICAgICAgIFwicmVsYXRpdmVcIixcbiAgICAgICk7XG4gICAgICBjb25zdCB0aXRsZSA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDNcIiwgXCJ6LVsxXVwiLCBcIm1vbnRzZXJyYXRcIik7XG4gICAgICBjb25zdCBzcGFuID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJzcGFuXCIsIFwidGV4dC10aGVtZVwiKTtcbiAgICAgIGNvbnN0IGRpdkRlc2MgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInBcIiwgXCJ6LVsyXVwiKTtcbiAgICAgIGNvbnN0IGRpdlRvb2xzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIFwib3ZlcmZsb3cteC1oaWRkZW5cIixcbiAgICAgICk7XG4gICAgICBjb25zdCB3cmFwcGVyVG9vbE91dGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwidG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgd3JhcHBlclRvb2wgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b29scy13cmFwcGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZMaW5rcyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJqdXN0aWZ5LWV2ZW5seVwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFSZXBvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJnYXAtM1wiLFxuICAgICAgICBcIm1vbnRzZXJyYXRcIixcbiAgICAgICAgXCJob3ZlcjpzY2FsZS1bMTEwJV1cIixcbiAgICAgICk7XG4gICAgICBjb25zdCBzcGFuUmVwbyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNwYW5EZW1vID0gc3BhblJlcG8uY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIGNvbnN0IGRpdkltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwiaW1nLXByb2plY3Qtd3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGRpdkltZ0lubmVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIik7XG4gICAgICBjb25zdCBpbWcgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiKTtcbiAgICAgIGNvbnN0IGltZzIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImltZy1wcm9qZWN0LW1cIiwgXCJhYnNvbHV0ZVwiKTtcblxuICAgICAgLy8gSW5mb1xuICAgICAgaW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgICBkaXZJbmRleC5hcHBlbmQoaW5kZXgpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCIuXCI7XG4gICAgICB0aXRsZS5hcHBlbmQoc3Bhbik7XG4gICAgICBkaXZEZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAvLyBUb29sc1xuICAgICAgY2Fyb3VzZWwuZ2VuZXJhdGVJbWFnZShcbiAgICAgICAgcHJvamVjdC50b29scyxcbiAgICAgICAgYHRvb2wtcHJvamVjdC0ke2NvdW50fWAsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHdyYXBwZXJUb29sLFxuICAgICAgKTtcblxuICAgICAgd3JhcHBlclRvb2xPdXRlci5hcHBlbmQod3JhcHBlclRvb2wpO1xuICAgICAgZGl2VG9vbHMuYXBwZW5kKHdyYXBwZXJUb29sT3V0ZXIpO1xuXG4gICAgICAvLyBMaW5rIGFuZCBEZW1vXG4gICAgICBhUmVwby50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgYVJlcG8ucmVsID0gXCJub3JlZmVycmVyXCI7XG4gICAgICBjb25zdCBhRGVtbyA9IGFSZXBvLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBhUmVwby5ocmVmID0gcHJvamVjdC5yZXBvO1xuICAgICAgc3BhblJlcG8udGV4dENvbnRlbnQgPSBcIkdJVEhVQlwiO1xuICAgICAgYURlbW8uaHJlZiA9IHByb2plY3QuZGVtbztcbiAgICAgIHNwYW5EZW1vLnRleHRDb250ZW50ID0gXCJERU1PXCI7XG5cbiAgICAgIGNvbnN0IGxpbmtXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaC1bMjRweF1cIixcbiAgICAgICAgXCJhc3BlY3Qtc3F1YXJlXCIsXG4gICAgICAgIFwicmVsYXRpdmVcIixcbiAgICAgICAgXCJpY29uLWxpbmstd3JhcHBlclwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGltZ0xpbmsgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJpbWdcIixcbiAgICAgICAgXCJpY29uLW1vZGUtZGFya1wiLFxuICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW1nTGluazIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImljb24tbW9kZVwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmQoaW1nTGluaywgaW1nTGluazIpO1xuICAgICAgY29uc3QgbGlua1dyYXBwZXIyID0gbGlua1dyYXBwZXIuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBhUmVwby5hcHBlbmQoc3BhblJlcG8sIGxpbmtXcmFwcGVyKTtcbiAgICAgIGFEZW1vLmFwcGVuZChzcGFuRGVtbywgbGlua1dyYXBwZXIyKTtcbiAgICAgIGRpdkxpbmtzLmFwcGVuZChhUmVwbywgYURlbW8pO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2SW5kZXgsIHRpdGxlLCBkaXZEZXNjLCBkaXZUb29scywgZGl2TGlua3MpO1xuXG4gICAgICAvLyBQcm9qZWN0IEltYWdlXG4gICAgICBpbWcuc3JjID0gcHJvamVjdC5pbWdbMF07XG4gICAgICBkaXZJbWdJbm5lci5hcHBlbmQoaW1nKTtcblxuICAgICAgaWYgKHByb2plY3QuaW1nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaW1nMi5zcmMgPSBwcm9qZWN0LmltZ1sxXTtcbiAgICAgICAgZGl2SW1nSW5uZXIuYXBwZW5kKGltZzIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXZJbWdJbm5lck1pcnJvciA9IGRpdkltZ0lubmVyLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgaWYgKGNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3QtZXZlblwiKTtcbiAgICAgICAgZGl2SW1nSW5uZXJNaXJyb3IuY2xhc3NMaXN0LmFkZChcImltZy1wcm9qZWN0LW1pcnJvci1ldmVuXCIpO1xuICAgICAgICBkaXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kc2NhcGU6ZmxleC1yb3ctcmV2ZXJzZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdkltZ0lubmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdFwiKTtcbiAgICAgICAgZGl2SW1nSW5uZXJNaXJyb3IuY2xhc3NMaXN0LmFkZChcImltZy1wcm9qZWN0LW1pcnJvclwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGl2SW1nSW5uZXJXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW1nLXByb2plY3QtaW5uZXItd3JhcHBlclwiLFxuICAgICAgKTtcbiAgICAgIGRpdkltZ0lubmVyV3JhcHBlci5hcHBlbmQoZGl2SW1nSW5uZXIsIGRpdkltZ0lubmVyTWlycm9yKTtcbiAgICAgIGRpdkltZy5hcHBlbmQoZGl2SW1nSW5uZXJXcmFwcGVyKTtcbiAgICAgIGRpdldyYXBwZXIuYXBwZW5kKGRpdkluZm8sIGRpdkltZyk7XG4gICAgICBjb250ZW50UHJvamVjdHMuYXBwZW5kKGRpdldyYXBwZXIpO1xuXG4gICAgICAvLyBEaXZpZGVyXG4gICAgICBjb25zdCBkaXZpZGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJkaXZpZGVyLXRoZW1lXCIpO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2aWRlcik7XG5cbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Nhcm91c2VsSW5pdCgpIHtcbiAgICBjb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHMtd3JhcHBlci1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHdyYXBwZXJzT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0b29sLXByb2plY3QtJHtpICsgMX1gO1xuICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApLmxlbmd0aDtcbiAgICAgIGNhcm91c2VsLmNyZWF0ZShcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgd3JhcHBlcnNbaV0sXG4gICAgICAgIHdyYXBwZXJzT3V0ZXJbaV0sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICAwLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcsIC4uLmNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBQcm9qZWN0IExpc3RcblxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIllvdXIgUGVyc29uYWwgRXhwZW5zZSBUcmFja2VyXCIsXG4gICAgICAgIFwiQSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgeW91IHRvIHRyYWNrIHlvdXIgZXhwZW5zZXMuXCIsXG4gICAgICAgIFtpbWdZcGV0RF0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9jczUweC0yMDIzLXByb2plY3RcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWw4M2t5czl5SkpzXCIsXG4gICAgICAgIHRvb2xzLmdldChcbiAgICAgICAgICBcIkhUTUxcIixcbiAgICAgICAgICBcIkNTU1wiLFxuICAgICAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIFwiUHl0aG9uXCIsXG4gICAgICAgICAgXCJTUUxpdGVcIixcbiAgICAgICAgICBcIkZsYXNrXCIsXG4gICAgICAgICAgXCJCb290c3RyYXBcIixcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJXZWF0aGVyIEFwcFwiLFxuICAgICAgICBcIkEgd2VhdGhlciBhcHBsaWNhdGlvbiB1c2luZyBXZWF0aGVyIEFQSS5cIixcbiAgICAgICAgW2ltZ1dlYXRoZXJELCBpbWdXZWF0aGVyTV0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9vZGluLXdlYXRoZXItYXBwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93b29uemYuZ2l0aHViLmlvL29kaW4td2VhdGhlci1hcHAvXCIsXG4gICAgICAgIHRvb2xzLmdldChcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCIsIFwiV2VicGFja1wiKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJIb21lcGFnZVwiLFxuICAgICAgICBcIk15IGZpcnN0IHBvcnRmb2xpbyB3ZWJzaXRlLCBJIGFtIGZlYXR1cmluZyBpdCBmb3IgdGhlIGFtb3VudCBvZiBlZmZvcnQgSSd2ZSBwdXQgaW50byBpdC5cIixcbiAgICAgICAgW2ltZ0hvbWVEXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4taG9tZXBhZ2VcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi1ob21lcGFnZS9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIsIFwiVGFpbHdpbmQgQ1NTXCIpLFxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IHNjcmVlbk9yaWVudGF0aW9uID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzY3JlZW4ub3JpZW50YXRpb24ub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBtZW51LnJlc2V0T25TY3JlZW5DaGFuZ2UoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5cbmNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25JbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbi1pbnRyb1wiKTtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGxcIik7XG5cbiAgY29uc3QgdGhyZXNob2xkID0gMTtcbiAgbGV0IHNocmluayA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfc2hyaW5rT25TY3JvbGwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhyZXNob2xkO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nocmlua09uU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHRocmVzaG9sZCAmJiBzaHJpbmsgPT09IDApIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSwgMyk7XG4gICAgICAgIF9zaHJpbmtJbnRybygpO1xuICAgICAgICBzaHJpbmsgPSAxO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCAmJiBzaHJpbmsgPT09IDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSwgMyk7XG4gICAgICAgIF9zaHJpbmtJbnRybygpO1xuICAgICAgICBzaHJpbmsgPSAwO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfc2hyaW5rSW50cm8oKSB7XG4gICAgc2VjdGlvbkludHJvLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XG4gICAgc2Nyb2xsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDc3MDAyNS9ob3ctdG8tZGlzYWJsZS1zY3JvbGxpbmctdGVtcG9yYXJpbHlcbiAgLy8gbGVmdDogMzcsIHVwOiAzOCwgcmlnaHQ6IDM5LCBkb3duOiA0MCxcbiAgLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XG4gIGNvbnN0IGtleXMgPSB7IDM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxIH07XG5cbiAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZXJuIENocm9tZSByZXF1aXJlcyB7IHBhc3NpdmU6IGZhbHNlIH0gd2hlbiBhZGRpbmcgZXZlbnRcbiAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0ZXN0XCIsXG4gICAgICBudWxsLFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBsZXQgd2hlZWxPcHQgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgbGV0IHdoZWVsRXZlbnQgPVxuICAgIFwib253aGVlbFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgPyBcIndoZWVsXCIgOiBcIm1vdXNld2hlZWxcIjtcblxuICAvLyBjYWxsIHRoaXMgdG8gRGlzYWJsZVxuICBmdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTsgLy8gb2xkZXIgRkZcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2Rlcm4gZGVza3RvcFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7IC8vIG1vYmlsZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGNhbGwgdGhpcyB0byBFbmFibGVcbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0U2Nyb2xsVGhyZXNob2xkLCBkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiY29uc3QgdGFiQ2xpY2thYmxlID0gKCgpID0+IHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0b2dnbGUoYWJvdXQpO1xuICAgIHRvZ2dsZShwcm9qZWN0cyk7XG4gICAgdG9nZ2xlKGNvbnRhY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKHRhYikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBsaW5rcyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbiAgICBjb25zdCBhcnRpY2xlID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpO1xuXG4gICAgY29uc3QgY2xpY2thYmxlcyA9IFtidXR0b25zLCBsaW5rc107XG5cbiAgICBhcnRpY2xlLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVyZmxvdy1oaWRkZW5cIik7XG4gICAgY2xpY2thYmxlcy5mb3JFYWNoKChjbGlja2FibGUpID0+IHtcbiAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwibGFuZHNjYXBlOmhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgdG9nZ2xlIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YWJDbGlja2FibGUgfTtcbiIsImNvbnN0IHRvb2xzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2h0bWw1L2h0bWw1LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkhUTUxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkNTU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmF2YVNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy93ZWJwYWNrL3dlYnBhY2stb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiV2VicGFja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qZXN0L2plc3QtcGxhaW4uc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90YWlsd2luZGNzcy90YWlsd2luZGNzcy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJUYWlsd2luZCBDU1NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvYy9jLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvcHl0aG9uL3B5dGhvbi1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJQeXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvc3FsaXRlL3NxbGl0ZS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJTUUxpdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXCJkZXZpY29uLWZsYXNrLW9yaWdpbmFsXCIsIFwiY29sb3JlZFwiXSxcbiAgICAgIGFsdDogXCJGbGFza1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9ib290c3RyYXAvYm9vdHN0cmFwLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkJvb3RzdHJhcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy92c2NvZGUvdnNjb2RlLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXQvZ2l0LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkdpdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3M6IFtcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXCIsIFwiY29sb3JlZFwiXSxcbiAgICAgIGFsdDogXCJHaXRIdWJcIixcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIGdldChcbiAgICAgIFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgICBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAgICAgXCJHaXRcIixcbiAgICAgIFwiR2l0SHViXCIsXG4gICAgICBcIkhUTUxcIixcbiAgICAgIFwiQ1NTXCIsXG4gICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgIFwiV2VicGFja1wiLFxuICAgICAgXCJKZXN0XCIsXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgZ2V0TGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBhcmd1bWVudHMpIHtcbiAgICAgIGZvciAoY29uc3QgdG9vbCBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudCA9PT0gdG9vbC5hbHQpIGdldExpc3QucHVzaCh0b29sKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TGlzdDtcbiAgfVxuXG4gIHJldHVybiB7IGdldExpc3QsIGdldCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9vbHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gXCIuL2pzL2ltYWdlXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2pzL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2pzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vanMvbWVudVwiO1xuaW1wb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfSBmcm9tIFwiLi9qcy9zY3JlZW4tb3JpZW50YXRpb25cIjtcbmltcG9ydCB7IGRhcmtNb2RlIH0gZnJvbSBcIi4vanMvZGFyay1tb2RlXCI7XG5pbXBvcnQgeyB0YWJDbGlja2FibGUgfSBmcm9tIFwiLi9qcy90YWItY2xpY2thYmxlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgc2Nyb2xsLmluaXQoKTtcbiAgaW1hZ2UuaW5pdCgpO1xuICBjYXJvdXNlbC5pbml0KCk7XG4gIHByb2plY3RzLmluaXQoKTtcbiAgbWVudS5pbml0KCk7XG4gIHNjcmVlbk9yaWVudGF0aW9uLmluaXQoKTtcbiAgZGFya01vZGUuaW5pdCgpO1xuICB0YWJDbGlja2FibGUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=