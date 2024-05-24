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
  font-size: 1.5rem;
  line-height: 2rem;
}

@media (min-width: 768px) {

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
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
  display: flex;
  height: 100%;
  max-width: 1024px;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.75rem;
  overflow-y: auto;
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
.border-theme {
  --tw-border-opacity: 1;
  border-color: rgba(248, 113, 113, 1);
  border-color: rgba(248, 113, 113, var(--tw-border-opacity));
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
.content-wrapper-project {
  display: flex;
  width: 90%;
  gap: 3.5rem;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}
@media (orientation: portrait) {

  .content-wrapper-project {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }
}
.info-project {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.75rem;
}
.tool-project {
  height: 40px;
}
.border-img {
  --tw-border-opacity: 1;
  border-color: rgba(248, 113, 113, 1);
  border-color: rgba(248, 113, 113, var(--tw-border-opacity));
  position: absolute;
  z-index: auto;
  width: 100%;
  --tw-translate-x: 0.75rem;
  --tw-translate-y: calc(calc(100% + 12px) * -1);
  transform: translate(0.75rem, calc((100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(0.75rem, calc(calc(100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-width: 1px;
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
.left-0 {
  left: 0px;
}
.left-5 {
  left: 1.25rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-5 {
  right: 1.25rem;
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
.top-\\[76px\\] {
  top: 76px;
}
.z-\\[1\\] {
  z-index: 1;
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
.mr-2 {
  margin-right: 0.5rem;
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
.aspect-\\[2\\/1\\] {
  aspect-ratio: 2/1;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-14 {
  height: 3.5rem;
}
.h-\\[40\\%\\] {
  height: 40%;
}
.h-\\[66\\%\\] {
  height: 66%;
}
.h-\\[calc\\(100vh-2\\*56px\\)\\] {
  height: calc(100vh - 2 * 56px);
}
.h-full {
  height: 100%;
}
.w-36 {
  width: 9rem;
}
.w-\\[30\\%\\] {
  width: 30%;
}
.w-\\[75\\%\\] {
  width: 75%;
}
.w-\\[calc\\(100vw-2\\*40px\\)\\] {
  width: calc(100vw - 2 * 40px);
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.-translate-x-3 {
  --tw-translate-x: -0.75rem;
  transform: translate(-0.75rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[calc\\(100\\%\\+12px\\)\\] {
  --tw-translate-y: calc(calc(100% + 12px) * -1);
  transform: translate(var(--tw-translate-x), calc((100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), calc(calc(100% + 12px) * -1)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-3 {
  --tw-translate-x: 0.75rem;
  transform: translate(0.75rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-25\\%\\] {
  --tw-translate-x: -25%;
  transform: translate(-25%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[25\\%\\] {
  --tw-translate-x: 25%;
  transform: translate(25%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.translate-y-\\[-230\\%\\] {
  --tw-translate-y: -230%;
  transform: translate(var(--tw-translate-x), -230%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-y-clip {
  overflow-y: clip;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-left {
  background-position: left;
}
.bg-right {
  background-position: right;
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
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-\\[10vw\\] {
  font-size: 10vw;
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
.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, 1);
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}
.opacity-0 {
  opacity: 0;
}

.montserrat {
  font-family: "Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
}

.tool-about,
#dark-mode-ball {
  transition: transform 750ms ease;
}

#dark-mode-ball.dark {
  transform: translateX(140%);
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

button:hover .btn-bg-y {
  will-change: animation;
  animation: bounce-y 1s infinite;
}

button:hover .btn-bg-x,
#scroll {
  will-change: animation;
  animation: bounce-x 1s infinite;
}

/* Tailwind Bounce Custom */
@keyframes bounce-y {
  0%,
  100% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  50% {
    transform: translateY(25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
}

@keyframes bounce-x {
  0%,
  100% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  50% {
    transform: translateX(10%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
}

/* END OF ANIMATION */

/* TO BE REMOVED */
#perspective {
  perspective: 500px;
}

.animate-bg-hello {
  will-change: animation;
  animation: slide-down 1.5s 1 0.5s;
  animation-fill-mode: forwards;
}

.animate-bg-hello-2 {
  will-change: animation;
  animation: slide-down 1.5s 1 0.75s;
  animation-fill-mode: forwards;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    opacity: 0.9;
  }

  to {
    transform: translateY(0%);
    opacity: 0.9;
  }
}

.animate-name {
  will-change: animation;
  animation: slide-in 1s 1 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

.animate-line-h {
  will-change: animation;
  animation: draw-h 2s 1;
  animation-fill-mode: forwards;
  height: 0;
}

@keyframes draw-h {
  from {
    height: 0;
  }

  to {
    height: 100%;
  }
}

.animate-line-w {
  will-change: animation;
  animation: draw-w 2s 1;
  animation-fill-mode: forwards;
  width: 0;
}

@keyframes draw-w {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
/* END */
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

  .portrait\\:w-\\[70\\%\\] {
    width: 70%;
  }

  .portrait\\:w-screen {
    width: 100vw;
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
}
@media (orientation: landscape) {

  .landscape\\:hidden {
    display: none;
  }

  .landscape\\:h-\\[100vh\\] {
    height: 100vh;
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

  .landscape\\:items-center {
    align-items: center;
  }

  .landscape\\:justify-center {
    justify-content: center;
  }

  .landscape\\:overflow-hidden {
    overflow: hidden;
  }

  .landscape\\:py-14 {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  @media (min-width: 768px) {

    .landscape\\:md\\:w-\\[calc\\(100vw-2\\*56px\\)\\] {
      width: calc(100vw - 2 * 56px);
    }
  }
}
.dark\\:bg-black:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}
.dark\\:bg-white:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.dark\\:text-white:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;EACjD,yBAAyB;EACzB,+DAA4D;AAC9D;;AAEA,iEAAc;;AAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,8LAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,0BAAc;EAAd,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,uBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,+FAAc;EAAd,wDAAc;EAAd;AAAc;;AAAd;EAAA,mBAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA,kBAAc;IAAd;EAAc;AAAA;;AAAd;EAAA,iBAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA,mBAAc;IAAd;EAAc;AAAA;;AAAd;EAAA,iBAAc;EAAd,mBAAc;EAAd,sBAAc;EAAd;AAAc;;AAAd;EAAA,kBAAc;EAAd,wCAAc;EAAd,2DAAc;EAAd,aAAc;EAAd,YAAc;EAAd,iBAAc;EAAd,sBAAc;EAAd,6BAAc;EAAd,YAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA;EAAc;AAAA;;AAAd;;EAAA;IAAA,oBAAc;IAAd,qBAAc;IAAd,mBAAc;IAAd;EAAc;;EAAd;;IAAA;MAAA,oBAAc;MAAd;IAAc;EAAA;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;AA4BV;EAAA,kBAAiB;EAAjB,wCAAiB;EAAjB;AAAiB;AAIjB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB;AAInB;EAAA,oBAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAInB;EAAA,oBAAqB;EAArB,6BAAqB;EAArB;AAAqB;AAIrB;EAAA,sBAAqB;EAArB,oCAAqB;EAArB;AAAqB;AAQrB;EAAA,QAAoD;EAApD,SAAoD;EAApD,YAAoD;EAApD;AAAoD;AAApD;;EAAA;IAAA;EAAoD;AAAA;AAIpD;EAAA,aAAyE;EAAzE,UAAyE;EAAzE,WAAyE;EAAzE,oBAAyE;EAAzE;AAAyE;AAAzE;;EAAA;IAAA,8BAAyE;IAAzE;EAAyE;AAAA;AAIzE;EAAA,aAAgD;EAAhD,WAAgD;EAAhD,sBAAgD;EAAhD,6BAAgD;EAAhD;AAAgD;AAIhD;EAAA;AAAe;AAIf;EAAA,sBAA8F;EAA9F,oCAA8F;EAA9F,2DAA8F;EAA9F,kBAA8F;EAA9F,aAA8F;EAA9F,WAA8F;EAA9F,yBAA8F;EAA9F,8CAA8F;EAA9F,oLAA8F;EAA9F,wLAA8F;EAA9F,+LAA8F;EAA9F;AAA8F;AAlElG;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB,kLAAmB;EAAnB;AAAmB;AAAnB;EAAA,8CAAmB;EAAnB,kMAAmB;EAAnB,sMAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB,iLAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB,iLAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+KAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB,iBAAmB;EAAnB,mKAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,gLAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;KAAnB,sBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,kCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;;AAsEnB;EACE,+GAAgD;AAClD;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE;4CAEsB;EAItB,UAAU;EACV,2BAA2B;AAJ7B;;AAOA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,QAAQ;AACV;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;;;EAGE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,cAAc;;AAEd;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;;EAEE,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA,2BAA2B;AAC3B;EACE;;IAEE,eAAe;IACf,qDAAqD;EACvD;EACA;IACE,0BAA0B;IAC1B,qDAAqD;EACvD;AACF;;AAEA;EACE;;IAEE,eAAe;IACf,qDAAqD;EACvD;EACA;IACE,0BAA0B;IAC1B,qDAAqD;EACvD;AACF;;AAEA,qBAAqB;;AAErB,kBAAkB;AAClB;EAEE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;AACF;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,UAAU;EACZ;AACF;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,QAAQ;AACV;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,WAAW;EACb;AACF;AACA,QAAQ;AApUR;;EAAA;IAAA,qBAqUA;IArUA,6KAqUA;IArUA;EAqUA;;EArUA;IAAA,eAqUA;IArUA,eAqUA;IArUA,+JAqUA;IArUA;EAqUA;;EArUA;IAAA,oBAqUA;IArUA;EAqUA;;EArUA;IAAA,iBAqUA;IArUA;EAqUA;;EArUA;IAAA,mBAqUA;IArUA;EAqUA;;EArUA;IAAA,mBAqUA;IArUA;EAqUA;AAAA;AArUA;;EAAA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA,oBAqUA;IArUA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;AAAA;AArUA;;EAAA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA,uBAqUA;IArUA,+KAqUA;IArUA;EAqUA;;EArUA;IAAA,sBAqUA;IArUA,8KAqUA;IArUA;EAqUA;;EArUA;IAAA,sBAqUA;IArUA,8KAqUA;IArUA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA;EAqUA;;EArUA;IAAA,mBAqUA;IArUA;EAqUA;;EArUA;;IAAA;MAAA;IAqUA;EAAA;AAAA;AArUA;EAAA,kBAqUA;EArUA,kCAqUA;EArUA;AAqUA;AArUA;EAAA,kBAqUA;EArUA,wCAqUA;EArUA;AAqUA;AArUA;EAAA,oBAqUA;EArUA,6BAqUA;EArUA;AAqUA","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-3xl md:text-4xl;\n  }\n\n  h3 {\n    @apply text-2xl md:text-3xl;\n  }\n\n  p {\n    @apply py-2 text-justify text-pretty;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full max-w-screen-lg landscape:px-10 landscape:md:px-14 landscape:py-14 flex flex-col gap-7 justify-evenly overflow-y-auto;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .divider-theme {\n    @apply border-b-[1px] border-red-400;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] py-7 flex portrait:flex-col-reverse gap-14 portrait:gap-10;\n  }\n\n  .info-project {\n    @apply w-full flex flex-col justify-evenly gap-3;\n  }\n\n  .tool-project {\n    @apply h-[40px];\n  }\n\n  .border-img {\n    @apply w-full border border-theme absolute translate-x-3 -translate-y-[calc(100%+12px)] z-auto;\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.tool-about,\n#dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n#dark-mode-ball.dark {\n  transform: translateX(140%);\n}\n\n#menu {\n  transition:\n    opacity 500ms ease,\n    transform 750ms ease;\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 1s ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#hello-wrapper {\n  transition: transform 1s ease;\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#bg-left,\n#bg-right {\n  transition: width 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide {\n  opacity: 0;\n}\n\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n/* ANIMATION */\n\n.animate-hello {\n  will-change: animation;\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  will-change: animation;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\nbutton:hover .btn-bg-y {\n  will-change: animation;\n  animation: bounce-y 1s infinite;\n}\n\nbutton:hover .btn-bg-x,\n#scroll {\n  will-change: animation;\n  animation: bounce-x 1s infinite;\n}\n\n/* Tailwind Bounce Custom */\n@keyframes bounce-y {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  50% {\n    transform: translateY(25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n}\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n}\n\n/* END OF ANIMATION */\n\n/* TO BE REMOVED */\n#perspective {\n  -webkit-perspective: 500px;\n  perspective: 500px;\n}\n\n.animate-bg-hello {\n  will-change: animation;\n  animation: slide-down 1.5s 1 0.5s;\n  animation-fill-mode: forwards;\n}\n\n.animate-bg-hello-2 {\n  will-change: animation;\n  animation: slide-down 1.5s 1 0.75s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-down {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0.9;\n  }\n\n  to {\n    transform: translateY(0%);\n    opacity: 0.9;\n  }\n}\n\n.animate-name {\n  will-change: animation;\n  animation: slide-in 1s 1 0.5s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  to {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n\n.animate-line-h {\n  will-change: animation;\n  animation: draw-h 2s 1;\n  animation-fill-mode: forwards;\n  height: 0;\n}\n\n@keyframes draw-h {\n  from {\n    height: 0;\n  }\n\n  to {\n    height: 100%;\n  }\n}\n\n.animate-line-w {\n  will-change: animation;\n  animation: draw-w 2s 1;\n  animation-fill-mode: forwards;\n  width: 0;\n}\n\n@keyframes draw-w {\n  from {\n    width: 0;\n  }\n\n  to {\n    width: 100%;\n  }\n}\n/* END */\n"],"sourceRoot":""}]);
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
  const toolsWrapper = document.querySelector("#tools-wrapper");
  const toolsWrapperOuter = document.querySelector("#tools-wrapper-outer");
  const toolName = document.querySelector("#tool-name");

  const height = 60;
  const margin = 2;
  const x = height + 2 * margin;

  const toolList = _tools__WEBPACK_IMPORTED_MODULE_0__.tools.getList();
  const length = toolList.length;

  let tx = [];

  function init() {
    _toolAboutInit();
    _toolAboutAutoScroll();
  }

  function _toolAboutInit() {
    toolsWrapperOuter.style.width = x * (length - 2) + "px";
    toolsWrapper.style.transform = `translateX(-${x}px)`;

    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      img.classList.add("tool-about");
      img.src = toolList[i].src;
      img.alt = toolList[i].alt;
      img.style.height = height + "px";
      img.style.margin = `0 ${margin}px`;
      toolsWrapper.append(img);
      tx[i] = 0;
    }
  }

  function _toolAboutAutoScroll() {
    const tools = document.querySelectorAll(".tool-about");
    let toBeEnd = 0;
    let mid = Math.floor(length / 2);

    if (window.innerHeight > window.innerWidth) mid += 1;
    toolName.textContent = tools[mid].alt;

    setInterval(() => {
      for (let i = 0; i < tools.length; i++) {
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
        tools[i].style.transform = `translateX(${tx[i]}px)`;
      }

      if (toBeEnd !== length - 1) toBeEnd += 1;
      else toBeEnd = 0;

      if (mid !== length - 1) mid += 1;
      else mid = 0;

      toolName.textContent = tools[mid].alt.toUpperCase();
    }, 2000);
  }

  return { init };
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
  constructor(name, desc, img, repo, demo, ...tools) {
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
  const btn = document.querySelector("#btn-dark-mode");
  const ball = document.querySelector("#dark-mode-ball");
  const html = document.documentElement;

  function init() {
    _detectDarkMode();
    btn.onclick = _toggle;
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
    ball.classList.toggle("dark");
    html.classList.toggle("dark");

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
/* harmony import */ var _img_icons_dark_mode_24w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons/dark-mode-24w.png */ "./src/img/icons/dark-mode-24w.png");
/* harmony import */ var _img_icons_light_mode_24w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons/light-mode-24w.png */ "./src/img/icons/light-mode-24w.png");
/* harmony import */ var _img_icons_arrow_24w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/arrow-24w.png */ "./src/img/icons/arrow-24w.png");
/* harmony import */ var _img_icons_arrow_2_24w_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons/arrow-2-24w.png */ "./src/img/icons/arrow-2-24w.png");
/* harmony import */ var _img_icons_poll_24w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/poll-24w.png */ "./src/img/icons/poll-24w.png");
/* harmony import */ var _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/profile-2-640w.jpg */ "./src/img/profile-2-640w.jpg");







const image = (() => {
  const darkMode = document.querySelector("#img-dark-mode");
  const lightMode = document.querySelector("#img-light-mode");
  const arrows = document.querySelectorAll(".img-arrow");
  const arrows2 = document.querySelectorAll(".img-arrow-2");
  const menu = document.querySelector("#img-menu");
  const profile = document.querySelector("#img-profile");

  function init() {
    darkMode.src = _img_icons_dark_mode_24w_png__WEBPACK_IMPORTED_MODULE_0__;
    lightMode.src = _img_icons_light_mode_24w_png__WEBPACK_IMPORTED_MODULE_1__;
    arrows.forEach((el) => {
      el.src = _img_icons_arrow_24w_png__WEBPACK_IMPORTED_MODULE_2__;
    });
    arrows2.forEach((el) => {
      el.src = _img_icons_arrow_2_24w_png__WEBPACK_IMPORTED_MODULE_3__;
    });
    menu.src = _img_icons_poll_24w_png__WEBPACK_IMPORTED_MODULE_4__;
    profile.src = _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_5__;
  }

  return { init };
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

  let backTarget = [];

  function init() {
    threshold = _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.getScrollThreshold();

    btnAboutL.onclick = () => {
      _toggleBackground(2);
      about.classList.toggle("active");
      backTarget = [about, 2];
    };

    btnProjectsL.onclick = () => {
      _toggleBackground(1);
      projects.classList.toggle("active");
      backTarget = [projects, 1];
    };

    btnContactL.onclick = () => {
      _toggleBackground(2);
      contact.classList.toggle("active");
      backTarget = [contact, 2];
    };

    btnBacks.forEach((btn) => {
      btn.onclick = () => {
        backTarget[0].classList.toggle("active");
        _toggleBackground(backTarget[1]);
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
        _scrollTo(about);
        window.scrollBy(0, -(screen.height / 2));
      } else _scrollTo(about);
    };

    btnProjectsP.onclick = () => {
      _scrollTo(projects);
    };
    btnContactP.onclick = () => {
      _scrollTo(contact);
    };
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

  function _scrollTo(content) {
    content.scrollIntoView();
    window.scrollBy(0, -56 - 28);
    btnMenuBack.click();
  }

  return { init };
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
/* harmony import */ var _img_projects_ypet_d_900w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/projects/ypet-d-900w.png */ "./src/img/projects/ypet-d-900w.png");





const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  let projectList = _getProjects();

  function init() {
    for (const project of projectList) {
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divInfo = _createElementWithClass("div", "info-project");
      const title = _createElementWithClass("h3", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p");
      const divTools = _createElementWithClass("div", "flex");
      const divLinks = _createElementWithClass(
        "div",
        "flex",
        "justify-evenly",
        "items-center",
      );
      const aRepo = _createElementWithClass("a", "montserrat");
      const aDemo = _createElementWithClass("a", "montserrat");
      const divImg = _createElementWithClass("div", "w-full", "relative");
      const img = _createElementWithClass(
        "img",
        "relative",
        "-translate-x-3",
        "translate-y-3",
        "z-[1]",
      );
      const divBorder = _createElementWithClass("div", "border-img");

      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      for (const tool of project.tools) {
        const img = _createElementWithClass("img", "tool-project");
        img.src = tool.src;
        img.alt = tool.alt;
        divTools.append(img);
      }

      aRepo.href = project.repo;
      aRepo.textContent = "GitHub";
      aDemo.href = project.demo;
      aDemo.textContent = "Demo";
      divLinks.append(aRepo, aDemo);
      divInfo.append(title, divDesc, divTools, divLinks);

      img.src = project.img;
      divBorder.style.aspectRatio = img.width / img.height;
      divImg.append(img, divBorder);

      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);
    }
  }

  function _getProjects() {
    return [
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Your Personal Finance Tracker",
        "An web application that allows you to track your expenses.",
        _img_projects_ypet_d_900w_png__WEBPACK_IMPORTED_MODULE_2__,
        "",
        "",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML"),
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("CSS"),
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("JavaScript"),
      ),
    ];
  }

  function _createElementWithClass(tag, ...classList) {
    const element = document.createElement(tag);
    element.classList.add(...classList);
    return element;
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
  const heightDoc = document.body.scrollHeight;
  const heightScreen = screen.height;
  const heightScroll = heightDoc - heightScreen;

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

  // function _floatHello() {
  //   const percent = _getScrollPercent() * 0.5;
  //   x.style.transform = `translateY(-${percent}%)`;
  //   y.style.transform = `translateY(-${percent * 1.5}%)`;
  // }

  // function _getScrollPercent() {
  //   return (window.scrollY / heightScroll) * 100;
  // }

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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      alt: "Flask",
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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "GitHub",
    },
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
  ];

  function getList() {
    return list;
  }

  function get(string) {
    for (const tool of list) {
      if (string === tool.alt) return tool;
    }
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

/***/ "./src/img/icons/arrow-2-24w.png":
/*!***************************************!*\
  !*** ./src/img/icons/arrow-2-24w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dce5b4198f055c7b5fb9.png";

/***/ }),

/***/ "./src/img/icons/arrow-24w.png":
/*!*************************************!*\
  !*** ./src/img/icons/arrow-24w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf0e74d674b069382b42.png";

/***/ }),

/***/ "./src/img/icons/dark-mode-24w.png":
/*!*****************************************!*\
  !*** ./src/img/icons/dark-mode-24w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "885536c3bba2f2ba6d47.png";

/***/ }),

/***/ "./src/img/icons/light-mode-24w.png":
/*!******************************************!*\
  !*** ./src/img/icons/light-mode-24w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a1927cf14167c82d2eb.png";

/***/ }),

/***/ "./src/img/icons/poll-24w.png":
/*!************************************!*\
  !*** ./src/img/icons/poll-24w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "881c6d9ce86e964930a2.png";

/***/ }),

/***/ "./src/img/profile-2-640w.jpg":
/*!************************************!*\
  !*** ./src/img/profile-2-640w.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52a346397612f8b69ec.jpg";

/***/ }),

/***/ "./src/img/projects/ypet-d-900w.png":
/*!******************************************!*\
  !*** ./src/img/projects/ypet-d-900w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "766d2272e7b0f0544b60.png";

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
/* harmony import */ var _js_dark_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/dark-mode */ "./src/js/dark-mode.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");








_js_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.init();
_js_image__WEBPACK_IMPORTED_MODULE_2__.image.init();
_js_carousel__WEBPACK_IMPORTED_MODULE_3__.carousel.init();
_js_projects__WEBPACK_IMPORTED_MODULE_4__.projects.init();
// darkMode.init();
_js_menu__WEBPACK_IMPORTED_MODULE_6__.menu.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFL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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNGO0FBQ007QUFDQTtBQUNDO0FBQ1Q7O0FBRWpDLDhDQUFNO0FBQ04sNENBQUs7QUFDTCxrREFBUTtBQUNSLGtEQUFRO0FBQ1I7QUFDQSwwQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9jbGFzcy1Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvZGFyay1tb2RlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy90b29scy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0LUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIlRydWVUeXBlXCIpO1xufVxuXG4vKiAhIHRhaWx3aW5kY3NzIHYzLjQuMyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cblxuLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcbmlucHV0OndoZXJlKFt0eXBlPSdidXR0b24nXSksXG5pbnB1dDp3aGVyZShbdHlwZT0ncmVzZXQnXSksXG5pbnB1dDp3aGVyZShbdHlwZT0nc3VibWl0J10pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cblxuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5ICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwbXM7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cbn1cblxucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5hcnRpY2xlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogMS43NXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICBhcnRpY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBhcnRpY2xlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICBhcnRpY2xlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5iZy10aGVtZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0yIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItdGhlbWUge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbi5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGdhcDogMy41cmVtO1xuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG4uaW5mby1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDAuNzVyZW07XG59XG4udG9vbC1wcm9qZWN0IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmJvcmRlci1pbWcge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwLjc1cmVtO1xuICAtLXR3LXRyYW5zbGF0ZS15OiBjYWxjKGNhbGMoMTAwJSArIDEycHgpICogLTEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjc1cmVtLCBjYWxjKCgxMDAlICsgMTJweCkgKiAtMSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNzVyZW0sIGNhbGMoY2FsYygxMDAlICsgMTJweCkgKiAtMSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LTUge1xuICBsZWZ0OiAxLjI1cmVtO1xufVxuLmxlZnQtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICBsZWZ0OiA1MCU7XG59XG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucmlnaHQtNSB7XG4gIHJpZ2h0OiAxLjI1cmVtO1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzc2cHhcXFxcXSB7XG4gIHRvcDogNzZweDtcbn1cbi56LVxcXFxbMVxcXFxdIHtcbiAgei1pbmRleDogMTtcbn1cbi56LVxcXFxbOThcXFxcXSB7XG4gIHotaW5kZXg6IDk4O1xufVxuLnotXFxcXFs5OVxcXFxdIHtcbiAgei1pbmRleDogOTk7XG59XG4uei1hdXRvIHtcbiAgei1pbmRleDogYXV0bztcbn1cbi5tci0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tdC0wXFxcXC41IHtcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hc3BlY3QtXFxcXFsyXFxcXC8xXFxcXF0ge1xuICBhc3BlY3QtcmF0aW86IDIvMTtcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5oLTE0IHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG4uaC1cXFxcWzQwXFxcXCVcXFxcXSB7XG4gIGhlaWdodDogNDAlO1xufVxuLmgtXFxcXFs2NlxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDY2JTtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMTAwdmgtMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctMzYge1xuICB3aWR0aDogOXJlbTtcbn1cbi53LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbNzVcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNDBweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA0MHB4KTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi53LXNjcmVlbiB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi4tdHJhbnNsYXRlLXgtMyB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0wLjc1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC43NXJlbSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tdHJhbnNsYXRlLXktXFxcXFtjYWxjXFxcXCgxMDBcXFxcJVxcXFwrMTJweFxcXFwpXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiBjYWxjKGNhbGMoMTAwJSArIDEycHgpICogLTEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIGNhbGMoKDEwMCUgKyAxMnB4KSAqIC0xKSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCBjYWxjKGNhbGMoMTAwJSArIDEycHgpICogLTEpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC0zIHtcbiAgLS10dy10cmFuc2xhdGUteDogMC43NXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy0yNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LTMge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwLjc1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDAuNzVyZW0pIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTIyMFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtMjIwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjMwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yMzAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnNjYWxlLTc1IHtcbiAgLS10dy1zY2FsZS14OiAuNzU7XG4gIC0tdHctc2NhbGUteTogLjc1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCguNzUpIHNjYWxlWSguNzUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tc2NhbGUteS0xMDAge1xuICAtLXR3LXNjYWxlLXk6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKC0xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2VsZWN0LW5vbmUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMTAge1xuICBnYXA6IDIuNXJlbTtcbn1cbi5nYXAtMTQge1xuICBnYXA6IDMuNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC0zIHtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteS1jbGlwIHtcbiAgb3ZlcmZsb3cteTogY2xpcDtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uYmctYmxhY2sge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXdoaXRlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbn1cbi5iZy1yaWdodCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuLnB4LTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbn1cbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi5weS0xMCB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59XG4ucHktMTQge1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuLnB5LTUge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC1cXFxcWzEwdndcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uXFxcXCFsZWFkaW5nLVxcXFxbMFxcXFwuNVxcXFxdIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmxlYWRpbmctXFxcXFswXFxcXC44XFxcXF0ge1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLmxlYWRpbmctbm9uZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtYmxhY2sge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLm9wYWNpdHktMCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tb250c2VycmF0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWY7XG59XG5cbi50b29sLWFib3V0LFxuI2RhcmstbW9kZS1iYWxsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbiNkYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xufVxuXG4jbWVudSB7XG4gIHRyYW5zaXRpb246XG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLCB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xufVxuXG4jbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2hlbGxvLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuI2JnLWxlZnQsXG4jYmctcmlnaHQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xufVxuXG4jYmctbGVmdC5zaHJpbmssXG4jYmctcmlnaHQuc2hyaW5rIHtcbiAgd2lkdGg6IDA7XG59XG5cbiNiZy1pbnRybyxcbiNzZWN0aW9uLWludHJvIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG59XG5cbiNiZy1pbnRyby5zaHJpbmssXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XG59XG5cbm5hdixcbiNzY3JvbGwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2Fib3V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbn1cblxuI3Byb2plY3RzLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbiNjb250YWN0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uYW5pbWF0ZS1oZWxsbyB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5hbmltYXRlLWFwcGVhciB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuYnV0dG9uOmhvdmVyIC5idG4tYmcteSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXkgMXMgaW5maW5pdGU7XG59XG5cbmJ1dHRvbjpob3ZlciAuYnRuLWJnLXgsXG4jc2Nyb2xsIHtcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uOiBib3VuY2UteCAxcyBpbmZpbml0ZTtcbn1cblxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xuQGtleWZyYW1lcyBib3VuY2UteSB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS14IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG59XG5cbi8qIEVORCBPRiBBTklNQVRJT04gKi9cblxuLyogVE8gQkUgUkVNT1ZFRCAqL1xuI3BlcnNwZWN0aXZlIHtcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xufVxuXG4uYW5pbWF0ZS1iZy1oZWxsbyB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAxLjVzIDEgMC41cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5hbmltYXRlLWJnLWhlbGxvLTIge1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IHNsaWRlLWRvd24gMS41cyAxIDAuNzVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cblxuLmFuaW1hdGUtbmFtZSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgMSAwLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uYW5pbWF0ZS1saW5lLWgge1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICBhbmltYXRpb246IGRyYXctaCAycyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgaGVpZ2h0OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGRyYXctaCB7XG4gIGZyb20ge1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmFuaW1hdGUtbGluZS13IHtcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uOiBkcmF3LXcgMnMgMTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHdpZHRoOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGRyYXctdyB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4vKiBFTkQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6dHJhbnNsYXRlLXgtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDI1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6c2NhbGUtMTAwIHtcbiAgICAtLXR3LXNjYWxlLXg6IDE7XG4gICAgLS10dy1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEpIHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAucG9ydHJhaXRcXFxcOmFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcWzEwMHN2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcW2NhbGNcXFxcKDEwMHN2aC01NnB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDU2cHgpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleC1jb2wtcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTE0IHtcbiAgICBnYXA6IDMuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktMyB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LVxcXFxbMTV2d1xcXFxdIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5sYW5kc2NhcGVcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmgtXFxcXFsxMDB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXgtXFxcXFstMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogLTE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteS1cXFxcWzE1MFxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXk6IDE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAxNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6b3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cHktMTQge1xuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmxhbmRzY2FwZVxcXFw6bWRcXFxcOnctXFxcXFtjYWxjXFxcXCgxMDB2dy0yXFxcXCo1NnB4XFxcXClcXFxcXSB7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA1NnB4KTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrXFxcXDpiZy1ibGFjazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLXdoaXRlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6dGV4dC13aGl0ZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaURBQWlEO0VBQ2pELHlCQUF5QjtFQUN6QiwrREFBNEQ7QUFDOUQ7O0FBRUEsaUVBQWM7O0FBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7O0NBQWM7O0FBQWQ7O0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsOExBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsd0NBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFk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QTtJQXJVQSw4S0FxVUE7SUFyVUE7RUFxVUE7O0VBclVBO0lBQUEsc0JBcVVBO0lBclVBLDhLQXFVQTtJQXJVQTtFQXFVQTs7RUFyVUE7SUFBQTtFQXFVQTs7RUFyVUE7SUFBQTtFQXFVQTs7RUFyVUE7SUFBQTtFQXFVQTs7RUFyVUE7SUFBQSxtQkFxVUE7SUFyVUE7RUFxVUE7O0VBclVBOztJQUFBO01BQUE7SUFxVUE7RUFBQTtBQUFBO0FBclVBO0VBQUEsa0JBcVVBO0VBclVBLGtDQXFVQTtFQXJVQTtBQXFVQTtBQXJVQTtFQUFBLGtCQXFVQTtFQXJVQSx3Q0FxVUE7RUFyVUE7QUFxVUE7QUFyVUE7RUFBQSxvQkFxVUE7RUFyVUEsNkJBcVVBO0VBclVBO0FBcVVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnQvTW9udHNlcnJhdC1FeHRyYUJvbGQudHRmKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxufVxcblxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGxheWVyIGJhc2Uge1xcbiAgYm9keSAqIHtcXG4gICAgQGFwcGx5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLVs1MG1zXTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgQGFwcGx5IHRleHQtM3hsIG1kOnRleHQtNHhsO1xcbiAgfVxcblxcbiAgaDMge1xcbiAgICBAYXBwbHkgdGV4dC0yeGwgbWQ6dGV4dC0zeGw7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgQGFwcGx5IHB5LTIgdGV4dC1qdXN0aWZ5IHRleHQtcHJldHR5O1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHBvcnRyYWl0OmJnLXRyYW5zcGFyZW50IGgtZnVsbCBtYXgtdy1zY3JlZW4tbGcgbGFuZHNjYXBlOnB4LTEwIGxhbmRzY2FwZTptZDpweC0xNCBsYW5kc2NhcGU6cHktMTQgZmxleCBmbGV4LWNvbCBnYXAtNyBqdXN0aWZ5LWV2ZW5seSBvdmVyZmxvdy15LWF1dG87XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5iZy10aGVtZSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLTIge1xcbiAgICBAYXBwbHkgYmctc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUge1xcbiAgICBAYXBwbHkgdGV4dC1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUtMiB7XFxuICAgIEBhcHBseSB0ZXh0LXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgYm9yZGVyLXJlZC00MDA7XFxuICB9XFxuXFxuICAuZGl2aWRlci10aGVtZSB7XFxuICAgIEBhcHBseSBib3JkZXItYi1bMXB4XSBib3JkZXItcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBsYW5kc2NhcGU6YWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctWzkwJV0gcHktNyBmbGV4IHBvcnRyYWl0OmZsZXgtY29sLXJldmVyc2UgZ2FwLTE0IHBvcnRyYWl0OmdhcC0xMDtcXG4gIH1cXG5cXG4gIC5pbmZvLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgZ2FwLTM7XFxuICB9XFxuXFxuICAudG9vbC1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IGgtWzQwcHhdO1xcbiAgfVxcblxcbiAgLmJvcmRlci1pbWcge1xcbiAgICBAYXBwbHkgdy1mdWxsIGJvcmRlciBib3JkZXItdGhlbWUgYWJzb2x1dGUgdHJhbnNsYXRlLXgtMyAtdHJhbnNsYXRlLXktW2NhbGMoMTAwJSsxMnB4KV0gei1hdXRvO1xcbiAgfVxcbn1cXG5cXG4ubW9udHNlcnJhdCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b29sLWFib3V0LFxcbiNkYXJrLW1vZGUtYmFsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcXG59XFxuXFxuI2RhcmstbW9kZS1iYWxsLmRhcmsge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xcbn1cXG5cXG4jbWVudSB7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBvcGFjaXR5IDUwMG1zIGVhc2UsXFxuICAgIHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbn1cXG5cXG4jbWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG5cXG4jbWVudS5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNoZWxsby13cmFwcGVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4jaGVsbG8td3JhcHBlci5oaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG59XFxuXFxuI2JnLWxlZnQsXFxuI2JnLXJpZ2h0IHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2U7XFxufVxcblxcbiNiZy1sZWZ0LnNocmluayxcXG4jYmctcmlnaHQuc2hyaW5rIHtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4jYmctaW50cm8sXFxuI3NlY3Rpb24taW50cm8ge1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XFxufVxcblxcbiNiZy1pbnRyby5zaHJpbmssXFxuI3NlY3Rpb24taW50cm8uc2hyaW5rIHtcXG4gIGhlaWdodDogY2FsYygoMTAwc3ZoIC8gMikgLSA1NnB4KTtcXG59XFxuXFxubmF2LFxcbiNzY3JvbGwge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG5cXG5uYXYuaGlkZSxcXG4jc2Nyb2xsLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuI2Fib3V0LFxcbiNwcm9qZWN0cyxcXG4jY29udGFjdCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuI2Fib3V0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XFxufVxcblxcbiNwcm9qZWN0cy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuI2NvbnRhY3QuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxufVxcblxcbi8qIEFOSU1BVElPTiAqL1xcblxcbi5hbmltYXRlLWhlbGxvIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNXMgMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLWFwcGVhciB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbmJ1dHRvbjpob3ZlciAuYnRuLWJnLXkge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXkgMXMgaW5maW5pdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciAuYnRuLWJnLXgsXFxuI3Njcm9sbCB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBib3VuY2UteCAxcyBpbmZpbml0ZTtcXG59XFxuXFxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xcbkBrZXlmcmFtZXMgYm91bmNlLXkge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteCB7XFxuICAwJSxcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG4vKiBFTkQgT0YgQU5JTUFUSU9OICovXFxuXFxuLyogVE8gQkUgUkVNT1ZFRCAqL1xcbiNwZXJzcGVjdGl2ZSB7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA1MDBweDtcXG4gIHBlcnNwZWN0aXZlOiA1MDBweDtcXG59XFxuXFxuLmFuaW1hdGUtYmctaGVsbG8ge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAxLjVzIDEgMC41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uYW5pbWF0ZS1iZy1oZWxsby0yIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IHNsaWRlLWRvd24gMS41cyAxIDAuNzVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1uYW1lIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IHNsaWRlLWluIDFzIDEgMC41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtbGluZS1oIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGRyYXctaCAycyAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgZHJhdy1oIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtbGluZS13IHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGRyYXctdyAycyAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBkcmF3LXcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLyogRU5EICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYWNrZ3JvdW5kID0gKCgpID0+IHtcbiAgY29uc3QgYmdMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1sZWZ0XCIpO1xuICBjb25zdCBiZ1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1yaWdodFwiKTtcbiAgY29uc3QgYmdJbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW50cm9cIik7XG5cbiAgZnVuY3Rpb24gc2hyaW5rKCkge1xuICAgIGZvciAoY29uc3QgbnVtIG9mIGFyZ3VtZW50cykge1xuICAgICAgY29uc3QgYmcgPSBfZ2V0QmcobnVtKTtcbiAgICAgIGJnLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2dldEJnKGludCkge1xuICAgIHN3aXRjaCAoaW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBiZ0xlZnQ7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBiZ1JpZ2h0O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gYmdJbnRybztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzaHJpbmsgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhY2tncm91bmQgfTtcbiIsImltcG9ydCB7IHRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuY29uc3QgY2Fyb3VzZWwgPSAoKCkgPT4ge1xuICBjb25zdCB0b29sc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXJcIik7XG4gIGNvbnN0IHRvb2xzV3JhcHBlck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29scy13cmFwcGVyLW91dGVyXCIpO1xuICBjb25zdCB0b29sTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9vbC1uYW1lXCIpO1xuXG4gIGNvbnN0IGhlaWdodCA9IDYwO1xuICBjb25zdCBtYXJnaW4gPSAyO1xuICBjb25zdCB4ID0gaGVpZ2h0ICsgMiAqIG1hcmdpbjtcblxuICBjb25zdCB0b29sTGlzdCA9IHRvb2xzLmdldExpc3QoKTtcbiAgY29uc3QgbGVuZ3RoID0gdG9vbExpc3QubGVuZ3RoO1xuXG4gIGxldCB0eCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX3Rvb2xBYm91dEluaXQoKTtcbiAgICBfdG9vbEFib3V0QXV0b1Njcm9sbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Rvb2xBYm91dEluaXQoKSB7XG4gICAgdG9vbHNXcmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogKGxlbmd0aCAtIDIpICsgXCJweFwiO1xuICAgIHRvb2xzV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt4fXB4KWA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJ0b29sLWFib3V0XCIpO1xuICAgICAgaW1nLnNyYyA9IHRvb2xMaXN0W2ldLnNyYztcbiAgICAgIGltZy5hbHQgPSB0b29sTGlzdFtpXS5hbHQ7XG4gICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9IGAwICR7bWFyZ2lufXB4YDtcbiAgICAgIHRvb2xzV3JhcHBlci5hcHBlbmQoaW1nKTtcbiAgICAgIHR4W2ldID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfdG9vbEFib3V0QXV0b1Njcm9sbCgpIHtcbiAgICBjb25zdCB0b29scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbC1hYm91dFwiKTtcbiAgICBsZXQgdG9CZUVuZCA9IDA7XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG5cbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIG1pZCArPSAxO1xuICAgIHRvb2xOYW1lLnRleHRDb250ZW50ID0gdG9vbHNbbWlkXS5hbHQ7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09PSB0b0JlRW5kKSB7XG4gICAgICAgICAgdHhbaV0gKz0geCAqIChsZW5ndGggLSAxKTtcbiAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICAgIHRvb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgdG9vbHNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHR4W2ldIC09IHg7XG4gICAgICAgIHRvb2xzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHhbaV19cHgpYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvQmVFbmQgIT09IGxlbmd0aCAtIDEpIHRvQmVFbmQgKz0gMTtcbiAgICAgIGVsc2UgdG9CZUVuZCA9IDA7XG5cbiAgICAgIGlmIChtaWQgIT09IGxlbmd0aCAtIDEpIG1pZCArPSAxO1xuICAgICAgZWxzZSBtaWQgPSAwO1xuXG4gICAgICB0b29sTmFtZS50ZXh0Q29udGVudCA9IHRvb2xzW21pZF0uYWx0LnRvVXBwZXJDYXNlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBjYXJvdXNlbCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGltZywgcmVwbywgZGVtbywgLi4udG9vbHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICB0aGlzLmRlbW8gPSBkZW1vO1xuICAgIHRoaXMudG9vbHMgPSB0b29scztcbiAgfVxufVxuIiwiY29uc3QgZGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1kYXJrLW1vZGVcIik7XG4gIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhcmstbW9kZS1iYWxsXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRuLm9uY2xpY2sgPSBfdG9nZ2xlO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RldGVjdERhcmtNb2RlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICBfdG9nZ2xlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIF90b2dnbGUoKTtcbiAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZSgpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cbiAgICBpZiAoIWh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGFya01vZGUgfTtcbiIsImltcG9ydCBpbWdEYXJrTW9kZTI0dyBmcm9tIFwiLi4vaW1nL2ljb25zL2RhcmstbW9kZS0yNHcucG5nXCI7XG5pbXBvcnQgaW1nTGlnaHRNb2RlMjR3IGZyb20gXCIuLi9pbWcvaWNvbnMvbGlnaHQtbW9kZS0yNHcucG5nXCI7XG5pbXBvcnQgaW1nQXJyb3cyNHcgZnJvbSBcIi4uL2ltZy9pY29ucy9hcnJvdy0yNHcucG5nXCI7XG5pbXBvcnQgaW1nQXJyb3cyMjR3IGZyb20gXCIuLi9pbWcvaWNvbnMvYXJyb3ctMi0yNHcucG5nXCI7XG5pbXBvcnQgaW1nUG9sbDI0dyBmcm9tIFwiLi4vaW1nL2ljb25zL3BvbGwtMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ1Byb2ZpbGU2NDB3IGZyb20gXCIuLi9pbWcvcHJvZmlsZS0yLTY0MHcuanBnXCI7XG5cbmNvbnN0IGltYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1kYXJrLW1vZGVcIik7XG4gIGNvbnN0IGxpZ2h0TW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWxpZ2h0LW1vZGVcIik7XG4gIGNvbnN0IGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLWFycm93XCIpO1xuICBjb25zdCBhcnJvd3MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctYXJyb3ctMlwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLW1lbnVcIik7XG4gIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1wcm9maWxlXCIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZGFya01vZGUuc3JjID0gaW1nRGFya01vZGUyNHc7XG4gICAgbGlnaHRNb2RlLnNyYyA9IGltZ0xpZ2h0TW9kZTI0dztcbiAgICBhcnJvd3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnNyYyA9IGltZ0Fycm93MjR3O1xuICAgIH0pO1xuICAgIGFycm93czIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnNyYyA9IGltZ0Fycm93MjI0dztcbiAgICB9KTtcbiAgICBtZW51LnNyYyA9IGltZ1BvbGwyNHc7XG4gICAgcHJvZmlsZS5zcmMgPSBpbWdQcm9maWxlNjQwdztcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGltYWdlIH07XG4iLCJpbXBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vc2Nyb2xsXCI7XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBidG5BYm91dEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1sXCIpO1xuICBjb25zdCBidG5Qcm9qZWN0c0wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1sXCIpO1xuICBjb25zdCBidG5Db250YWN0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3QtbFwiKTtcblxuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudVwiKTtcbiAgY29uc3QgYnRuTWVudUJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWJhY2tcIik7XG5cbiAgY29uc3QgYnRuQWJvdXRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtcFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtcFwiKTtcbiAgY29uc3QgYnRuQ29udGFjdFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWN0LXBcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY29uc3QgaGVsbG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWxsby13cmFwcGVyXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2XCIpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBjb25zdCBidG5CYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWJhY2tcIik7XG5cbiAgbGV0IGlzT3Blbk1lbnUgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMDtcblxuICBsZXQgYmFja1RhcmdldCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhyZXNob2xkID0gc2Nyb2xsLmdldFNjcm9sbFRocmVzaG9sZCgpO1xuXG4gICAgYnRuQWJvdXRMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlQmFja2dyb3VuZCgyKTtcbiAgICAgIGFib3V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBiYWNrVGFyZ2V0ID0gW2Fib3V0LCAyXTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlQmFja2dyb3VuZCgxKTtcbiAgICAgIHByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBiYWNrVGFyZ2V0ID0gW3Byb2plY3RzLCAxXTtcbiAgICB9O1xuXG4gICAgYnRuQ29udGFjdEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIF90b2dnbGVCYWNrZ3JvdW5kKDIpO1xuICAgICAgY29udGFjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgYmFja1RhcmdldCA9IFtjb250YWN0LCAyXTtcbiAgICB9O1xuXG4gICAgYnRuQmFja3MuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgYmFja1RhcmdldFswXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBfdG9nZ2xlQmFja2dyb3VuZChiYWNrVGFyZ2V0WzFdKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBidG5NZW51Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNPcGVuTWVudSA9PT0gMSkge1xuICAgICAgICBidG5NZW51QmFjay5jbGljaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90b2dnbGVNZW51Q29vbGRvd24oKTtcbiAgICAgIHNjcm9sbC5kaXNhYmxlU2Nyb2xsKCk7XG5cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxKTtcbiAgICAgICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgfVxuXG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIGlzT3Blbk1lbnUgPSAxO1xuICAgIH07XG5cbiAgICBidG5NZW51QmFjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3RvZ2dsZU1lbnVDb29sZG93bigpO1xuICAgICAgc2Nyb2xsLmVuYWJsZVNjcm9sbCgpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSk7XG4gICAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhlbGxvV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlzT3Blbk1lbnUgPSAwO1xuICAgIH07XG5cbiAgICBidG5BYm91dFAub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMik7XG4gICAgICAgIF9zY3JvbGxUbyhhYm91dCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtKHNjcmVlbi5oZWlnaHQgLyAyKSk7XG4gICAgICB9IGVsc2UgX3Njcm9sbFRvKGFib3V0KTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8ocHJvamVjdHMpO1xuICAgIH07XG4gICAgYnRuQ29udGFjdFAub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbyhjb250YWN0KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZUJhY2tncm91bmQoYmcpIHtcbiAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgYmFja2dyb3VuZC5zaHJpbmsoYmcpO1xuICAgIG5hdi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlTWVudUNvb2xkb3duKCkge1xuICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2Nyb2xsVG8oY29udGVudCkge1xuICAgIGNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTU2IC0gMjgpO1xuICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzcy1Qcm9qZWN0XCI7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmltcG9ydCBpbWdZcGV0RCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3lwZXQtZC05MDB3LnBuZ1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wcm9qZWN0c1wiKTtcbiAgbGV0IHByb2plY3RMaXN0ID0gX2dldFByb2plY3RzKCk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGNvbnN0IGRpdldyYXBwZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJjb250ZW50LXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZm8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBcImluZm8tcHJvamVjdFwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoM1wiLCBcIm1vbnRzZXJyYXRcIik7XG4gICAgICBjb25zdCBzcGFuID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJzcGFuXCIsIFwidGV4dC10aGVtZVwiKTtcbiAgICAgIGNvbnN0IGRpdkRlc2MgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInBcIik7XG4gICAgICBjb25zdCBkaXZUb29scyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwiZmxleFwiKTtcbiAgICAgIGNvbnN0IGRpdkxpbmtzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktZXZlbmx5XCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgYVJlcG8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImFcIiwgXCJtb250c2VycmF0XCIpO1xuICAgICAgY29uc3QgYURlbW8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImFcIiwgXCJtb250c2VycmF0XCIpO1xuICAgICAgY29uc3QgZGl2SW1nID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJ3LWZ1bGxcIiwgXCJyZWxhdGl2ZVwiKTtcbiAgICAgIGNvbnN0IGltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcInJlbGF0aXZlXCIsXG4gICAgICAgIFwiLXRyYW5zbGF0ZS14LTNcIixcbiAgICAgICAgXCJ0cmFuc2xhdGUteS0zXCIsXG4gICAgICAgIFwiei1bMV1cIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZCb3JkZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBcImJvcmRlci1pbWdcIik7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiLlwiO1xuICAgICAgdGl0bGUuYXBwZW5kKHNwYW4pO1xuICAgICAgZGl2RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcblxuICAgICAgZm9yIChjb25zdCB0b29sIG9mIHByb2plY3QudG9vbHMpIHtcbiAgICAgICAgY29uc3QgaW1nID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJpbWdcIiwgXCJ0b29sLXByb2plY3RcIik7XG4gICAgICAgIGltZy5zcmMgPSB0b29sLnNyYztcbiAgICAgICAgaW1nLmFsdCA9IHRvb2wuYWx0O1xuICAgICAgICBkaXZUb29scy5hcHBlbmQoaW1nKTtcbiAgICAgIH1cblxuICAgICAgYVJlcG8uaHJlZiA9IHByb2plY3QucmVwbztcbiAgICAgIGFSZXBvLnRleHRDb250ZW50ID0gXCJHaXRIdWJcIjtcbiAgICAgIGFEZW1vLmhyZWYgPSBwcm9qZWN0LmRlbW87XG4gICAgICBhRGVtby50ZXh0Q29udGVudCA9IFwiRGVtb1wiO1xuICAgICAgZGl2TGlua3MuYXBwZW5kKGFSZXBvLCBhRGVtbyk7XG4gICAgICBkaXZJbmZvLmFwcGVuZCh0aXRsZSwgZGl2RGVzYywgZGl2VG9vbHMsIGRpdkxpbmtzKTtcblxuICAgICAgaW1nLnNyYyA9IHByb2plY3QuaW1nO1xuICAgICAgZGl2Qm9yZGVyLnN0eWxlLmFzcGVjdFJhdGlvID0gaW1nLndpZHRoIC8gaW1nLmhlaWdodDtcbiAgICAgIGRpdkltZy5hcHBlbmQoaW1nLCBkaXZCb3JkZXIpO1xuXG4gICAgICBkaXZXcmFwcGVyLmFwcGVuZChkaXZJbmZvLCBkaXZJbWcpO1xuICAgICAgY29udGVudFByb2plY3RzLmFwcGVuZChkaXZXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIllvdXIgUGVyc29uYWwgRmluYW5jZSBUcmFja2VyXCIsXG4gICAgICAgIFwiQW4gd2ViIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byB0cmFjayB5b3VyIGV4cGVuc2VzLlwiLFxuICAgICAgICBpbWdZcGV0RCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiKSxcbiAgICAgICAgdG9vbHMuZ2V0KFwiQ1NTXCIpLFxuICAgICAgICB0b29scy5nZXQoXCJKYXZhU2NyaXB0XCIpLFxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3ModGFnLCAuLi5jbGFzc0xpc3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5cbmNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlaWdodERvYyA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICBjb25zdCBoZWlnaHRTY3JlZW4gPSBzY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBoZWlnaHRTY3JvbGwgPSBoZWlnaHREb2MgLSBoZWlnaHRTY3JlZW47XG5cbiAgY29uc3Qgc2VjdGlvbkludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWludHJvXCIpO1xuICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbFwiKTtcblxuICBjb25zdCB0aHJlc2hvbGQgPSAxO1xuICBsZXQgc2hyaW5rID0gMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9zaHJpbmtPblNjcm9sbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBfc2hyaW5rT25TY3JvbGwoKSB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gdGhyZXNob2xkICYmIHNocmluayA9PT0gMCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxLCAzKTtcbiAgICAgICAgX3Nocmlua0ludHJvKCk7XG4gICAgICAgIHNocmluayA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkICYmIHNocmluayA9PT0gMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxLCAzKTtcbiAgICAgICAgX3Nocmlua0ludHJvKCk7XG4gICAgICAgIHNocmluayA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaHJpbmtJbnRybygpIHtcbiAgICBzZWN0aW9uSW50cm8uY2xhc3NMaXN0LnRvZ2dsZShcInNocmlua1wiKTtcbiAgICBzY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBfZmxvYXRIZWxsbygpIHtcbiAgLy8gICBjb25zdCBwZXJjZW50ID0gX2dldFNjcm9sbFBlcmNlbnQoKSAqIDAuNTtcbiAgLy8gICB4LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3BlcmNlbnR9JSlgO1xuICAvLyAgIHkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7cGVyY2VudCAqIDEuNX0lKWA7XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBfZ2V0U2Nyb2xsUGVyY2VudCgpIHtcbiAgLy8gICByZXR1cm4gKHdpbmRvdy5zY3JvbGxZIC8gaGVpZ2h0U2Nyb2xsKSAqIDEwMDtcbiAgLy8gfVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ3NzAwMjUvaG93LXRvLWRpc2FibGUtc2Nyb2xsaW5nLXRlbXBvcmFyaWx5XG4gIC8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gIC8vIHNwYWNlYmFyOiAzMiwgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LCBlbmQ6IDM1LCBob21lOiAzNlxuICBjb25zdCBrZXlzID0geyAzNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMSB9O1xuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XG4gIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGVzdFwiLFxuICAgICAgbnVsbCxcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgbGV0IHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG4gIGxldCB3aGVlbEV2ZW50ID1cbiAgICBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogXCJtb3VzZXdoZWVsXCI7XG5cbiAgLy8gY2FsbCB0aGlzIHRvIERpc2FibGVcbiAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7IC8vIG9sZGVyIEZGXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9kZXJuIGRlc2t0b3BcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XG4gIH1cblxuICAvLyBjYWxsIHRoaXMgdG8gRW5hYmxlXG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGdldFNjcm9sbFRocmVzaG9sZCwgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH07XG59KSgpO1xuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImNvbnN0IHRvb2xzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2MvYy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiUHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3NxbGl0ZS9zcWxpdGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiU1FMaXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2ZsYXNrL2ZsYXNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkZsYXNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3ZzY29kZS92c2NvZGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdC9naXQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0SHViXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2h0bWw1L2h0bWw1LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkhUTUxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkNTU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmF2YVNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy93ZWJwYWNrL3dlYnBhY2stb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiV2VicGFja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qZXN0L2plc3QtcGxhaW4uc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90YWlsd2luZGNzcy90YWlsd2luZGNzcy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJUYWlsd2luZCBDU1NcIixcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCB0b29sIG9mIGxpc3QpIHtcbiAgICAgIGlmIChzdHJpbmcgPT09IHRvb2wuYWx0KSByZXR1cm4gdG9vbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXRMaXN0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvb2xzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL2pzL3Njcm9sbFwiO1xuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tIFwiLi9qcy9pbWFnZVwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9qcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9qcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGFya01vZGUgfSBmcm9tIFwiLi9qcy9kYXJrLW1vZGVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9qcy9tZW51XCI7XG5cbnNjcm9sbC5pbml0KCk7XG5pbWFnZS5pbml0KCk7XG5jYXJvdXNlbC5pbml0KCk7XG5wcm9qZWN0cy5pbml0KCk7XG4vLyBkYXJrTW9kZS5pbml0KCk7XG5tZW51LmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==