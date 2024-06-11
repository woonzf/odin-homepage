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
  --theme: rgb(248, 113, 113);
  --theme-2: rgb(241, 245, 249);
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
  font-size: 1.5rem;
  line-height: 2rem;
}

@media (min-width: 768px) {

  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
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
}

@media (orientation: portrait) {

  article {
    background-color: transparent;
  }
}

@media (orientation: landscape) {

  article {
    overflow: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  @media (min-width: 768px) {

    article {
      padding-left: 2.25rem;
      padding-right: 2.25rem;
    }
  }
}

article {
    scrollbar-gutter: stable both-edges;
  }

a.disabled,
  button:disabled {
  --tw-text-opacity: 1;
  color: rgba(161, 161, 170, 1);
  color: rgba(161, 161, 170, var(--tw-text-opacity));
}

a.disabled:where(.dark, .dark *),
  button:disabled:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(113, 113, 122, 1);
  color: rgba(113, 113, 122, var(--tw-text-opacity));
}

a.disabled,
  button:disabled {
    pointer-events: none;
  }

button {
  border-radius: 0.375rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

/* Scrollbar */

::-webkit-scrollbar {
  width: 1.25rem;
}

::-webkit-scrollbar-thumb {
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-style: solid;
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  --tw-gradient-from: #f87171 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(248, 113, 113, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
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
.border-wrapper {
  height: calc(100% + 16px);
  width: calc(100% + 16px);
  border-radius: 9999px;
  padding: 0.25rem;
    background: linear-gradient(to bottom, rgb(248, 113, 113), transparent 80%);
    background: linear-gradient(to bottom, var(--theme), transparent 80%);
    /* More at MEDIA QUERY below */
}
.border-inner-wrapper {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.border-inner-wrapper:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.border-inner-wrapper {
  height: 100%;
  width: 100%;
  border-radius: 9999px;
}
.divider-theme {
  height: 0.25rem;
  width: 100%;
  border-radius: 0.125rem;
}
.divider-theme.left {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #f87171 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(248, 113, 113, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.divider-theme.right {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #f87171 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(248, 113, 113, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
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
    --tw-translate-x: 150%;
    transform: translate(150%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.btn-dark-mode {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  aspect-ratio: 2;
  height: 24px;
  border-radius: 0.375rem;
  padding-left: 0px;
  padding-right: 0px;
  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
    transition: background-color 500ms ease;
}
@media (orientation: landscape) {

  .btn-dark-mode:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(39, 39, 42, 1);
    background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  }

  .btn-dark-mode:hover:where(.dark, .dark *) {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 245, 249, 1);
    background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  }
}
.dark-mode-ball {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.dark-mode-ball:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.dark-mode-ball {
  margin-left: 2px;
  margin-right: 2px;
  aspect-ratio: 1 / 1;
  height: calc(100% - 4px);
  border-radius: 0.375rem;
}
.article-inner-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}
.article-title {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.article-title:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.article-title {
  z-index: 96;
  width: 100%;
}
@media (orientation: portrait) {

  .article-title {
    position: sticky;
    top: 55px;
  }
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
}
@media (orientation: landscape) {

  .timeline {
    width: 100%;
  }
}
.timeline {
    transition: height 1s ease;
  }
.timeline.less {
    -webkit-mask-image: linear-gradient(rgb(241, 245, 249) 50%, transparent);
    -webkit-mask-image: linear-gradient(var(--theme-2) 50%, transparent);
    mask-image: linear-gradient(rgb(241, 245, 249) 50%, transparent);
    mask-image: linear-gradient(var(--theme-2) 50%, transparent);
  }
.timeline:after {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: auto;
  height: 100%;
  width: 0.25rem;
}
@media (orientation: portrait) {

  .timeline:after {
    left: 5%;
  }
}
@media (orientation: landscape) {

  .timeline:after {
    --tw-translate-x: -50%;
    transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
.timeline:where(.dark, .dark *):after {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.timeline:after {
    content: "";
  }
.timeline-content {
  position: relative;
}
@media (orientation: landscape) {

  .timeline-content {
    width: 50%;
  }
}
.timeline-content:after {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.timeline-content:where(.dark, .dark *):after {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.timeline-content:after {
  --tw-border-opacity: 1;
  border-color: rgba(39, 39, 42, 1);
  border-color: rgba(39, 39, 42, var(--tw-border-opacity));
  position: absolute;
  top: 2px;
  z-index: 1;
  margin-left: -0.5rem;
  aspect-ratio: 1 / 1;
  height: 1rem;
  border-radius: 9999px;
  border-width: 4px;
}
.timeline-content:hover:after {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
@media (min-width: 768px) {

  .timeline-content:after {
    top: 6px;
  }
}
@media (orientation: portrait) {

  .timeline-content:after {
    left: 5%;
    margin-left: -0.375rem;
  }
}
.timeline-content:where(.dark, .dark *):after {
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
}
.timeline-content:after {
    content: "";
    transition: background-color 500ms ease;
  }
@media (orientation: landscape) {

  .timeline-content.left:after {
    right: -0.5rem;
  }

  .timeline-content.right {
    left: 50%;
  }

  .timeline-content.left {
    left: 0px;
  }
}
.timeline-inner-content {
  position: relative;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
@media (orientation: portrait) {

  .timeline-inner-content {
    left: 1rem;
  }
}
@media (orientation: landscape) {

  .timeline-content.left .timeline-inner-content > p {
    text-align: right;
  }
}
.content-wrapper-project {
  display: flex;
  width: 90%;
  gap: 1.25rem;
  overflow-y: clip;
}
@media (orientation: portrait) {

  .content-wrapper-project {
    flex-direction: column-reverse;
  }
}
@media (orientation: landscape) {

  .content-wrapper-project {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
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
  font-size: 3.75rem;
  line-height: 1;
}
@media (min-width: 768px) {

  .index-project-wrapper {
    font-size: 4.5rem;
    line-height: 1;
  }
}
.info-project {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.25rem;
  padding: 0.75rem;
}
.img-project-outer-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.img-project-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (orientation: landscape) {

  .img-project-wrapper {
    --tw-translate-y: 10%;
    transform: translate(var(--tw-translate-x), 10%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
.img-project-wrapper {
    perspective: 500px;
  }
.img-project-inner-wrapper,
  .img-project-inner-wrapper-even {
  height: 100%;
  width: 100%;
    outline: 1px solid transparent; /* Fix jagged edges */
    /* More at MEDIA QUERY below*/
}
.img-project-inner-wrapper-mode {
  height: 100%;
  width: 100%;
}
.img-project,
  .img-project-mode {
  position: relative;
  border-radius: 0.125rem;
}
.img-project-mirror,
  .img-project-mode-mirror,
  .img-project-mode-dark,
  .img-project-mode-dark-mirror {
  position: absolute;
  top: 0px;
  border-radius: 0.125rem;
}
.img-project-m,
  .img-project-mode-m,
  .img-project-mode-m-dark {
  position: absolute;
  top: 0.75rem;
  right: -0.75rem;
  height: 75%;
  border-radius: 0.375rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
@media (orientation: portrait) {

  .img-project-m,
  .img-project-mode-m,
  .img-project-mode-m-dark {
    height: 100%;
  }
}
.img-project-mode,
  .img-project-mode-mirror,
  .img-project-mode-m {
  animation: appear-cycle 5s 2.5s infinite alternate;
}
.img-project-mode-dark,
  .img-project-mode-dark-mirror,
  .img-project-mode-m-dark {
  opacity: 0;
  animation: appear-cycle 5s 2.5s infinite alternate-reverse;
}
.img-project-mirror,
  .img-project-mode-mirror,
  .img-project-mode-dark-mirror {
  --tw-translate-y: calc(100% + 2px);
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), calc(100% + 2px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(-1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (orientation: portrait) {

  .img-project-mirror,
  .img-project-mode-mirror,
  .img-project-mode-dark-mirror {
    display: none;
  }
}
.img-project-mirror,
  .img-project-mode-mirror,
  .img-project-mode-dark-mirror {
    -webkit-mask-image: linear-gradient(transparent 80%, rgb(241, 245, 249));
    -webkit-mask-image: linear-gradient(transparent 80%, var(--theme-2));
    mask-image: linear-gradient(transparent 80%, rgb(241, 245, 249));
    mask-image: linear-gradient(transparent 80%, var(--theme-2));
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
.icon-home-link,
  .icon-contact-link {
  aspect-ratio: 1 / 1;
  height: 30px;
  font-size: 30px;
}
@media (min-width: 640px) {

  .icon-home-link,
  .icon-contact-link {
    height: 40px;
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
.box-underline {
  position: relative;
}
.box-underline:after {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  position: absolute;
  left: 0px;
  bottom: -2px;
  height: 2px;
  width: 0px;
  border-radius: 9999px;
    content: "";
    transition: width 500ms ease;
}
button:hover .box-underline:after {
  width: 100%;
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
.-left-2 {
  left: -0.5rem;
}
.-right-7 {
  right: -1.75rem;
}
.-top-2 {
  top: -0.5rem;
}
.bottom-0 {
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.left-\\[-44px\\] {
  left: -44px;
}
.left-\\[28px\\] {
  left: 28px;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.left-\\[calc\\(50\\%-72px\\)\\] {
  left: calc(50% - 72px);
}
.right-0 {
  right: 0px;
}
.right-\\[-34px\\] {
  right: -34px;
}
.right-\\[28px\\] {
  right: 28px;
}
.right-\\[50\\%\\] {
  right: 50%;
}
.right-\\[calc\\(6vw\\*0\\.3\\)\\] {
  right: calc(6vw * 0.3);
}
.top-0 {
  top: 0px;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.top-\\[62px\\] {
  top: 62px;
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
.z-\\[96\\] {
  z-index: 96;
}
.z-\\[97\\] {
  z-index: 97;
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
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
.mt-0 {
  margin-top: 0px;
}
.mt-0\\.5 {
  margin-top: 0.125rem;
}
.mt-\\[-56px\\] {
  margin-top: -56px;
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
.h-\\[14px\\] {
  height: 14px;
}
.h-\\[16px\\] {
  height: 16px;
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
.h-\\[30px\\] {
  height: 30px;
}
.h-\\[calc\\(100vh-2\\*56px\\)\\] {
  height: calc(100vh - 2 * 56px);
}
.h-\\[calc\\(6vw\\*0\\.8\\)\\] {
  height: calc(6vw * 0.8);
}
.h-full {
  height: 100%;
}
.w-1\\/4 {
  width: 25%;
}
.w-20 {
  width: 5rem;
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
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-xl {
  max-width: 36rem;
}
.origin-bottom-left {
  transform-origin: bottom left;
}
.origin-right {
  transform-origin: right;
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
.flex-row-reverse {
  flex-direction: row-reverse;
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
.text-pretty {
  text-wrap: pretty;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-md {
  border-radius: 0.375rem;
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
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-end {
  text-align: right;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-\\[10vw\\] {
  font-size: 10vw;
}
.text-\\[24px\\] {
  font-size: 24px;
}
.text-\\[6vw\\] {
  font-size: 6vw;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
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
.underline {
  text-decoration-line: underline;
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

.fade-side {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    rgb(241, 245, 249) 30%,rgb(241, 245, 249) 70%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    var(--theme-2) 30%,var(--theme-2) 70%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    rgb(241, 245, 249) 30% 70%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    rgb(241, 245, 249) 30%,rgb(241, 245, 249) 70%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    var(--theme-2) 30%,var(--theme-2) 70%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    rgb(241, 245, 249) 30% 70%,
    transparent
  );
  /* More at MEDIA QUERY BELOW */
}

@supports (background: linear-gradient(red 0%, red 0% 1%, red 2%)) {
.fade-side {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    var(--theme-2) 30% 70%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    var(--theme-2) 30% 70%,
    transparent
  );
}
}

#bg-left-name:after {
  content: "MENU";
}

#bg-left-name:after.about {
  content: "ABOUT";
}

#bg-left-name:after.projects {
  content: "PROJECTS";
}

#bg-left-name:after.contact {
  content: "CONTACT";
}

/* Transition */
a,
#btn-timeline-toggle {
  transition: transform 500ms ease;
}

.tool-about,
[class^="tool-project"],
.dark-mode-ball {
  transition: transform 750ms ease;
}

.dark-mode-ball.dark {
  transform: translateX(calc(100% + 4px));
}

#btn-menu-l,
.img-tool,
#hello-wrapper,
#about,
#projects,
#contact {
  transition: transform 1s ease;
}

#btn-menu-l.hide {
  transform: rotate(90deg) translateY(-150%);
}

.img-tool.scaleAbout {
  transform: scale(1.5);
}

#hello-wrapper.hide {
  transform: translateY(100%);
}

[id^="bg-left-"] {
  transform: translateY(100%);
  transition: transform 1s ease;
}

[id^="bg-left-"].show {
  transform: translateY(0%);
}

#about.active,
#projects.active,
#contact.active {
  transform: translateX(-150%);
}

#menu-l,
#menu-p {
  opacity: 0;
  transition: opacity 500ms ease;
}

#menu-l.open,
#menu-p.open {
  opacity: 1;
}

#bg-left {
  transition: width 1s ease;
}

@media (orientation: landscape) {

  #bg-left.shrink {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
}

#bg-left.shrink {
  width: calc(6vw * 0.8);
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
#scroll,
#info-wrapper,
#info-wrapper > div {
  transition: opacity 1s ease;
}

nav.hide,
#scroll.hide,
#info-wrapper.hide,
#info-wrapper > div.hide {
  opacity: 0;
}

/* ANIMATION */
[class^="animate"] {
  will-change: animation;
}

.animate-hello {
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
  opacity: 0;
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

.animate-mode-cycle {
  animation: appear-cycle 5s 2.5s infinite alternate;
}

.animate-mode-cycle-r {
  opacity: 0;
  animation: appear-cycle 5s 2.5s infinite alternate-reverse;
}

@keyframes appear-cycle {
  0%,
  33% {
    opacity: 1;
  }

  66%,
  100% {
    opacity: 0;
  }
}

/* Tailwind Bounce Custom */
.animate-bounce-x {
  animation: bounce-x 1s infinite;
}

.animate-bounce-y {
  animation: bounce-y 3s infinite;
}

.animate-bounce-y-90 {
  transform: rotate(90deg);
  animation: bounce-y-90 3s infinite;
}

.animate-bounce-y-n90 {
  transform: rotate(-90deg);
  animation: bounce-y-n90 3s infinite;
}

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
  .img-project-inner-wrapper {
    transform: rotateY(-20deg);
  }

  .img-project-inner-wrapper-even {
    transform: rotateY(20deg);
  }

  .border-wrapper {
    background: linear-gradient(to bottom left, rgb(248, 113, 113), transparent 80%);
    background: linear-gradient(to bottom left, var(--theme), transparent 80%);
  }
}

@media (orientation: portrait) {
  html {
    scrollbar-gutter: stable both-edges;
  }
}

@media (min-width: 768px) {
  .fade-side {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      rgb(241, 245, 249) 10%,rgb(241, 245, 249) 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      var(--theme-2) 10%,var(--theme-2) 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      rgb(241, 245, 249) 10% 90%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      rgb(241, 245, 249) 10%,rgb(241, 245, 249) 90%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      var(--theme-2) 10%,var(--theme-2) 90%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      rgb(241, 245, 249) 10% 90%,
      transparent
    );
  }

@supports (background: linear-gradient(red 0%, red 0% 1%, red 2%)) {
.fade-side {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      var(--theme-2) 10% 90%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      var(--theme-2) 10% 90%,
      transparent
    );
  }
}
}

.first-letter\\:text-theme::first-letter {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, 1);
  color: rgba(248, 113, 113, var(--tw-text-opacity));
}

.hover\\:text-light:hover {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}

.dark\\:text-light:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}

.dark\\:text-theme-2:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}

.dark\\:hover\\:text-theme-2:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}

.hover\\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:scale-\\[110\\%\\]:hover {
  --tw-scale-x: 110%;
  --tw-scale-y: 110%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(110%) scaleY(110%);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (min-width: 640px) {

  .sm\\:hidden {
    display: none;
  }

  .sm\\:flex-row {
    flex-direction: row;
  }
}

@media (min-width: 768px) {

  .md\\:h-\\[18px\\] {
    height: 18px;
  }

  .md\\:h-\\[20px\\] {
    height: 20px;
  }

  .md\\:h-\\[28px\\] {
    height: 28px;
  }

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

  .md\\:text-\\[28px\\] {
    font-size: 28px;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\\:text-xl {
    font-size: 1.25rem;
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

  .portrait\\:bottom-8 {
    bottom: 2rem;
  }

  .portrait\\:left-full {
    left: 100%;
  }

  .portrait\\:order-1 {
    order: 1;
  }

  .portrait\\:order-2 {
    order: 2;
  }

  .portrait\\:mt-\\[56px\\] {
    margin-top: 56px;
  }

  .portrait\\:flex {
    display: flex;
  }

  .portrait\\:hidden {
    display: none;
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

  .portrait\\:-rotate-90 {
    --tw-rotate: -90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .portrait\\:rotate-0 {
    --tw-rotate: 0deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .portrait\\:rotate-90 {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .portrait\\:flex-row-reverse {
    flex-direction: row-reverse;
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

  .portrait\\:rounded-md {
    border-radius: 0.375rem;
  }

  .portrait\\:p-1 {
    padding: 0.25rem;
  }

  .portrait\\:pb-0 {
    padding-bottom: 0px;
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

    .portrait\\:sm\\:pb-7 {
      padding-bottom: 1.75rem;
    }
  }

  @media (min-width: 768px) {

    .portrait\\:md\\:bottom-14 {
      bottom: 3.5rem;
    }
  }
}

@media (orientation: landscape) {

  .landscape\\:fixed {
    position: fixed;
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

  .landscape\\:w-\\[80\\%\\] {
    width: 80%;
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

  .landscape\\:gap-20 {
    gap: 5rem;
  }

  .landscape\\:overflow-hidden {
    overflow: hidden;
  }

  .landscape\\:rounded-xl {
    border-radius: 0.75rem;
  }

  .landscape\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .landscape\\:rounded-r-lg {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  .landscape\\:p-7 {
    padding: 1.75rem;
  }

  .landscape\\:py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .landscape\\:text-end {
    text-align: right;
  }

  @media (min-width: 768px) {

    .landscape\\:md\\:w-\\[calc\\(100vw-2\\*56px\\)\\] {
      width: calc(100vw - 2 * 56px);
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n:root {\n  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);\n  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);\n  --bounce-translateY: 25%;\n  --theme: rgb(248, 113, 113);\n  --theme-2: rgb(241, 245, 249);\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-2xl md:text-3xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full w-full max-w-screen-lg landscape:px-5 landscape:md:px-9 landscape:py-7 flex flex-col justify-around landscape:overflow-auto;\n    scrollbar-gutter: stable both-edges;\n  }\n\n  a.disabled,\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n\n  button {\n    @apply px-1 rounded-md;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    @apply w-5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-gradient-to-b from-red-400 border-solid border-x-4 border-y-0 border-theme-2 dark:border-dark;\n  }\n\n  ::-webkit-scrollbar-thumb:hover,\n  ::-webkit-scrollbar-thumb:active {\n    @apply bg-theme;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-fade {\n    @apply bg-red-300;\n  }\n\n  .bg-dark {\n    @apply bg-zinc-800;\n  }\n\n  .bg-dark-fade {\n    @apply bg-zinc-700;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100 dark:bg-dark;\n  }\n\n  .bg-theme-2-fade {\n    @apply bg-slate-200 dark:bg-dark-fade;\n  }\n\n  .text-light {\n    @apply text-zinc-800;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .border-dark {\n    @apply border-zinc-800;\n  }\n\n  .border-theme-2 {\n    @apply border-slate-100;\n  }\n\n  .border-wrapper {\n    @apply h-[calc(100%+16px)] w-[calc(100%+16px)] p-1 rounded-full;\n    background: linear-gradient(to bottom, var(--theme), transparent 80%);\n    /* More at MEDIA QUERY below */\n  }\n\n  .border-inner-wrapper {\n    @apply bg-theme-2 h-full w-full rounded-full;\n  }\n\n  .divider-theme {\n    @apply h-1 w-full rounded-sm;\n  }\n\n  .divider-theme.left {\n    @apply bg-gradient-to-r from-red-400;\n  }\n\n  .divider-theme.right {\n    @apply bg-gradient-to-l from-red-400;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0 landscape:translate-x-[150%];\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .btn-nav-wrapper {\n    @apply w-36 absolute;\n  }\n\n  .btn-nav {\n    @apply w-36 flex justify-center items-center fixed;\n  }\n\n  .btn-theme {\n    @apply bg-theme-fade hover:bg-theme text-theme-2 dark:text-light;\n  }\n\n  .btn-theme-2 {\n    @apply bg-theme-2-fade hover:bg-theme-2 text-theme;\n  }\n\n  .btn-dark-mode {\n    @apply bg-theme h-[24px] aspect-[2] px-0 rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode:hover {\n    @apply landscape:bg-dark landscape:dark:bg-slate-100;\n  }\n\n  .dark-mode-ball {\n    @apply bg-theme-2 h-[calc(100%-4px)] aspect-square mx-[2px] rounded-md;\n  }\n\n  .article-inner-wrapper {\n    @apply flex flex-col gap-7;\n  }\n\n  .article-title {\n    @apply bg-theme-2 w-full portrait:sticky portrait:top-[55px] z-[96];\n  }\n\n  .timeline {\n    @apply landscape:w-full flex flex-col gap-5 overflow-hidden;\n    transition: height 1s ease;\n  }\n\n  .timeline.less {\n    -webkit-mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n    mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n  }\n\n  .timeline:after {\n    @apply bg-dark dark:bg-slate-100 h-full w-1 absolute top-0 left-[50%] portrait:left-[5%] landscape:translate-x-[-50%] z-auto;\n    content: \"\";\n  }\n\n  .timeline-content {\n    @apply landscape:w-[50%] relative;\n  }\n\n  .timeline-content:after {\n    @apply bg-theme-2 hover:bg-theme h-4 aspect-square -ml-2 portrait:-ml-1.5 border-4 border-dark dark:border-slate-100 rounded-full absolute top-[2px] md:top-[6px] portrait:left-[5%] z-[1];\n    content: \"\";\n    transition: background-color 500ms ease;\n  }\n\n  .timeline-content:after.left {\n    @apply landscape:-right-2;\n  }\n\n  .timeline-content.right {\n    @apply landscape:left-[50%];\n  }\n\n  .timeline-content.left {\n    @apply landscape:left-0;\n  }\n\n  .timeline-inner-content {\n    @apply px-10 relative portrait:left-4;\n  }\n\n  .timeline-content.left .timeline-inner-content > p {\n    @apply landscape:text-end;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] landscape:py-7 flex portrait:flex-col-reverse gap-5 overflow-y-clip;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-6xl md:text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-outer-wrapper {\n    @apply w-full px-3 flex justify-center items-center;\n  }\n\n  .img-project-wrapper {\n    @apply h-full w-full flex justify-center items-center landscape:translate-y-[10%];\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project-inner-wrapper,\n  .img-project-inner-wrapper-even {\n    @apply h-full w-full;\n    outline: 1px solid transparent; /* Fix jagged edges */\n    /* More at MEDIA QUERY below*/\n  }\n\n  .img-project-inner-wrapper-mode {\n    @apply h-full w-full;\n  }\n\n  .img-project,\n  .img-project-mode {\n    @apply rounded-sm relative;\n  }\n\n  .img-project-mirror,\n  .img-project-mode-mirror,\n  .img-project-mode-dark,\n  .img-project-mode-dark-mirror {\n    @apply rounded-sm absolute top-0;\n  }\n\n  .img-project-m,\n  .img-project-mode-m,\n  .img-project-mode-m-dark {\n    @apply h-[75%] portrait:h-full border-2 border-black rounded-md absolute top-3 -right-3;\n  }\n\n  .img-project-mode,\n  .img-project-mode-mirror,\n  .img-project-mode-m {\n    @apply animate-mode-cycle;\n  }\n\n  .img-project-mode-dark,\n  .img-project-mode-dark-mirror,\n  .img-project-mode-m-dark {\n    @apply animate-mode-cycle-r;\n  }\n\n  .img-project-mirror,\n  .img-project-mode-mirror,\n  .img-project-mode-dark-mirror {\n    @apply translate-y-[calc(100%+2px)] -scale-y-100 portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, var(--theme-2));\n    mask-image: linear-gradient(transparent 80%, var(--theme-2));\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n\n  .tool-about,\n  [class^=\"tool-project\"] {\n    @apply aspect-square flex justify-center items-center;\n  }\n\n  .p-contact {\n    @apply py-0 text-left text-nowrap;\n  }\n\n  .icon-contact-wrapper {\n    @apply h-[40px] sm:h-[50px] aspect-square;\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 1s ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0;\n  }\n\n  .icon-home-link,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .stroke-contact {\n    @apply bg-theme-2;\n  }\n\n  .initial-contact {\n    @apply text-theme-2 dark:text-light;\n  }\n\n  .box-underline {\n    @apply relative;\n  }\n\n  .box-underline:after {\n    @apply bg-theme h-[2px] w-0 rounded-full absolute left-0 bottom-[-2px];\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .box-underline:after {\n    @apply w-full;\n  }\n}\n\n@layer utilities {\n  #contact-card {\n    @apply landscape:shadow-[2px_2px_10px_rgb(39_39_42)] landscape:dark:shadow-[0px_0px_10px_rgb(241_245_249)];\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.fade-side {\n  -webkit-mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  /* More at MEDIA QUERY BELOW */\n}\n\n#bg-left-name:after {\n  content: \"MENU\";\n}\n\n#bg-left-name:after.about {\n  content: \"ABOUT\";\n}\n\n#bg-left-name:after.projects {\n  content: \"PROJECTS\";\n}\n\n#bg-left-name:after.contact {\n  content: \"CONTACT\";\n}\n\n/* Transition */\na,\n#btn-timeline-toggle {\n  transition: transform 500ms ease;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n.dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n.dark-mode-ball.dark {\n  transform: translateX(calc(100% + 4px));\n}\n\n#btn-menu-l,\n.img-tool,\n#hello-wrapper,\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#btn-menu-l.hide {\n  transform: rotate(90deg) translateY(-150%);\n}\n\n.img-tool.scaleAbout {\n  transform: scale(1.5);\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n[id^=\"bg-left-\"] {\n  transform: translateY(100%);\n  transition: transform 1s ease;\n}\n\n[id^=\"bg-left-\"].show {\n  transform: translateY(0%);\n}\n\n#about.active,\n#projects.active,\n#contact.active {\n  transform: translateX(-150%);\n}\n\n#menu-l,\n#menu-p {\n  opacity: 0;\n  transition: opacity 500ms ease;\n}\n\n#menu-l.open,\n#menu-p.open {\n  opacity: 1;\n}\n\n#bg-left {\n  transition: width 1s ease;\n}\n\n#bg-left.shrink {\n  @apply landscape:rounded-r-lg;\n  width: calc(6vw * 0.8);\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll,\n#info-wrapper,\n#info-wrapper > div {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide,\n#info-wrapper.hide,\n#info-wrapper > div.hide {\n  opacity: 0;\n}\n\n/* ANIMATION */\n[class^=\"animate\"] {\n  will-change: animation;\n}\n\n.animate-hello {\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  opacity: 0;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.animate-mode-cycle {\n  animation: appear-cycle 5s 2.5s infinite alternate;\n}\n\n.animate-mode-cycle-r {\n  opacity: 0;\n  animation: appear-cycle 5s 2.5s infinite alternate-reverse;\n}\n\n@keyframes appear-cycle {\n  0%,\n  33% {\n    opacity: 1;\n  }\n\n  66%,\n  100% {\n    opacity: 0;\n  }\n}\n\n/* Tailwind Bounce Custom */\n.animate-bounce-x {\n  animation: bounce-x 1s infinite;\n}\n\n.animate-bounce-y {\n  animation: bounce-y 3s infinite;\n}\n\n.animate-bounce-y-90 {\n  transform: rotate(90deg);\n  animation: bounce-y-90 3s infinite;\n}\n\n.animate-bounce-y-n90 {\n  transform: rotate(-90deg);\n  animation: bounce-y-n90 3s infinite;\n}\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-90 {\n  0%,\n  33% {\n    transform: rotate(90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-n90 {\n  0%,\n  33% {\n    transform: rotate(-90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(-90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n/* MEDIA QUERY */\n@media (orientation: landscape) {\n  .img-project-inner-wrapper {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-inner-wrapper-even {\n    transform: rotateY(20deg);\n  }\n\n  .border-wrapper {\n    background: linear-gradient(to bottom left, var(--theme), transparent 80%);\n  }\n}\n\n@media (orientation: portrait) {\n  html {\n    scrollbar-gutter: stable both-edges;\n  }\n}\n\n@media (min-width: 768px) {\n  .fade-side {\n    -webkit-mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n    mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n  }\n}\n"],"sourceRoot":""}]);
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
  const html = document.querySelector("html");

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
        img.title = list[i].alt;

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
        imgDark.title = list[i].alt;

        const img = imgDark.cloneNode(false);
        img.classList.remove("icon-mode-dark");
        img.classList.add(list[i].class[1], "icon-mode");

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

    amount = length - 2;
    if (amount % 2 === 0) wrapperOuter.style.width = x * (amount - 1) + "px";
    else wrapperOuter.style.width = x * amount + "px";

    if (amount < 5) mid -= 2;
    else if (amount < 7) mid -= 1;

    if (auto === 1) {
      wrapperOuter.classList.add("fade-side");
      wrapper.style.transform = `translateX(-${x}px)`;
      toolMid = tools[mid].querySelector("img");
      if (toolMid === null) {
        if (html.classList.contains("dark"))
          toolMid = tools[mid].querySelector(".icon-mode-dark");
        else toolMid = tools[mid].querySelector(".icon-mode");
      }
      toolMid.classList.toggle("scaleAbout");
      toolName.textContent = Boolean(toolMid.alt)
        ? toolMid.alt.toUpperCase()
        : toolMid.title.toUpperCase();
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
        if (toolMid === null) {
          if (html.classList.contains("dark"))
            toolMid = tools[mid].querySelector(".icon-mode-dark");
          else toolMid = tools[mid].querySelector(".icon-mode");
        }
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
  const balls = document.querySelectorAll(".dark-mode-ball");
  const html = document.documentElement;

  function init() {
    _detectDarkMode();
    btns.forEach((btn) => {
      btn.onclick = _toggle;
    });
  }

  function _detectDarkMode() {
    if (Boolean(localStorage.theme)) {
      if (localStorage.theme === "dark") {
        _toggle();
      }
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
    balls.forEach((ball) => {
      ball.classList.toggle("dark");
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
/* harmony import */ var _img_icons_arrow_w_50w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons/arrow-w-50w.png */ "./src/img/icons/arrow-w-50w.png");
/* harmony import */ var _img_profile_500w_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/profile-500w.jpg */ "./src/img/profile-500w.jpg");
/* harmony import */ var _img_icons_poll_50w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/poll-50w.png */ "./src/img/icons/poll-50w.png");
/* harmony import */ var _img_icons_poll_w_50w_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons/poll-w-50w.png */ "./src/img/icons/poll-w-50w.png");
/* harmony import */ var _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/open-50w.png */ "./src/img/icons/open-50w.png");
/* harmony import */ var _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/icons/open-w-50w.png */ "./src/img/icons/open-w-50w.png");
/* harmony import */ var _img_icons_name_50w_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/icons/name-50w.png */ "./src/img/icons/name-50w.png");
/* harmony import */ var _img_icons_name_w_50w_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/icons/name-w-50w.png */ "./src/img/icons/name-w-50w.png");
/* harmony import */ var _img_icons_email_50w_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/icons/email-50w.png */ "./src/img/icons/email-50w.png");
/* harmony import */ var _img_icons_email_w_50w_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/icons/email-w-50w.png */ "./src/img/icons/email-w-50w.png");
/* harmony import */ var _img_icons_link_50w_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/icons/link-50w.png */ "./src/img/icons/link-50w.png");
/* harmony import */ var _img_icons_link_w_50w_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/icons/link-w-50w.png */ "./src/img/icons/link-w-50w.png");
/* harmony import */ var _img_icons_favicon_32w_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/icons/favicon-32w.png */ "./src/img/icons/favicon-32w.png");


















const image = (() => {
  const scroll = document.querySelector("#img-scroll");
  const profile = document.querySelector("#img-profile");

  const menu = document.querySelector("#img-menu-wrapper");
  const name = document.querySelector("#img-name-wrapper");
  const email = document.querySelector("#img-email-wrapper");
  const link = document.querySelector("#img-link-wrapper");

  const favicon = document.querySelector('link[rel="icon"]');

  function init() {
    scroll.src = _img_icons_arrow_w_50w_png__WEBPACK_IMPORTED_MODULE_0__;
    profile.src = _img_profile_500w_jpg__WEBPACK_IMPORTED_MODULE_1__;

    _setImgSrc(menu, _img_icons_poll_w_50w_png__WEBPACK_IMPORTED_MODULE_3__, _img_icons_poll_50w_png__WEBPACK_IMPORTED_MODULE_2__);
    _setImgSrc(name, _img_icons_name_w_50w_png__WEBPACK_IMPORTED_MODULE_7__, _img_icons_name_50w_png__WEBPACK_IMPORTED_MODULE_6__);
    _setImgSrc(email, _img_icons_email_w_50w_png__WEBPACK_IMPORTED_MODULE_9__, _img_icons_email_50w_png__WEBPACK_IMPORTED_MODULE_8__);
    _setImgSrc(link, _img_icons_link_w_50w_png__WEBPACK_IMPORTED_MODULE_11__, _img_icons_link_50w_png__WEBPACK_IMPORTED_MODULE_10__);

    favicon.type = "image/png";
    favicon.href = _img_icons_favicon_32w_png__WEBPACK_IMPORTED_MODULE_12__;
  }

  function setIconOpen(className) {
    const element = document.querySelectorAll(className);
    element.forEach((el) => {
      _setImgSrc(el, _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_5__, _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_4__);
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
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuBackL = document.querySelector("#btn-menu-back-l");

  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenuP = document.querySelector("#btn-menu-p");
  const btnMenuBackP = document.querySelector("#btn-menu-back-p");

  const btnHomeP = document.querySelector("#btn-home-p");
  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const menuL = document.querySelector("#menu-l");
  const menuP = document.querySelector("#menu-p");
  const helloWrapper = document.querySelector("#hello-wrapper");
  const infoWrapper = document.querySelector("#info-wrapper");

  const bgLeftMenu = document.querySelector("#bg-left-menu");
  const bgLeftAbout = document.querySelector("#bg-left-about");
  const bgLeftProjects = document.querySelector("#bg-left-projects");
  const bgLeftContact = document.querySelector("#bg-left-contact");

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");
  const btnBacks = document.querySelectorAll(".btn-back");

  let isOpenMenu = 0;
  let threshold = 0;
  let isOpenTab = 0;
  let backTarget = [];

  function init() {
    threshold = _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.getScrollThreshold();

    btnMenuL.onclick = () => {
      btnMenuL.classList.toggle("hide");
      menuL.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menuL.classList.toggle("open");
      });
      helloWrapper.classList.toggle("hide");
      infoWrapper.classList.toggle("hide");
      bgLeftMenu.classList.toggle("show");
      isOpenMenu = 1;
    };

    btnMenuBackL.onclick = () => {
      helloWrapper.classList.toggle("hide");
      infoWrapper.classList.toggle("hide");
      bgLeftMenu.classList.toggle("show");
      menuL.classList.toggle("open");
      setTimeout(() => {
        menuL.classList.toggle("hidden");
      }, 1000);
      btnMenuL.classList.toggle("hide");
      isOpenMenu = 0;
    };

    btnAboutL.onclick = () => {
      _openTab(about, 1, btnAboutL);
    };
    btnProjectsL.onclick = () => {
      _openTab(projects, 1, btnProjectsL);
    };
    btnContactL.onclick = () => {
      _openTab(contact, 1, btnContactL);
    };

    btnBacks.forEach((btn) => {
      btn.onclick = () => {
        _closeTab();
      };
    });

    btnMenuP.onclick = () => {
      if (isOpenMenu === 1) {
        btnMenuBackP.click();
        return;
      }

      _toggleMenuCooldown();
      _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.disableScroll();

      if (window.scrollY < threshold) _toggleBackground(1);

      menuP.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menuP.classList.toggle("open");
      });

      isOpenMenu = 1;
    };

    btnMenuBackP.onclick = () => {
      _toggleMenuCooldown();
      _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.enableScroll();
      menuP.classList.toggle("open");

      setTimeout(() => {
        menuP.classList.toggle("hidden");
      }, 500);

      if (window.scrollY < threshold) _toggleBackground(1);
      if (helloWrapper.classList.contains("hide")) _toggleBackground(1);

      isOpenMenu = 0;
    };

    btnHomeP.onclick = () => {
      _scrollTo(0, 0);
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
    if (isOpenTab === 1) {
      btnBacks[0].click();
      isOpenTab = 0;
    }
  }

  function _openTab(tab, bg, btn) {
    if (isOpenTab === 1) btnBacks[0].click();
    btn.disabled = true;
    _toggleBackground(bg);
    _tab_clickable__WEBPACK_IMPORTED_MODULE_2__.tabClickable.toggle(tab);
    tab.classList.toggle("active");
    isOpenTab = 1;
    backTarget = [tab, bg, btn];
  }

  function _closeTab() {
    const target = backTarget[0];
    target.classList.toggle("active");
    _toggleBackground(backTarget[1]);
    setTimeout(() => {
      target.querySelector("article").scrollTo(0, 0);
      _tab_clickable__WEBPACK_IMPORTED_MODULE_2__.tabClickable.toggle(target);
    }, 1000);
    isOpenTab = 0;
    backTarget[2].disabled = false;
  }

  function _toggleBackground(bg) {
    _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(bg);
    helloWrapper.classList.toggle("hide");
    infoWrapper.classList.toggle("hide");
  }

  function _toggleMenuCooldown() {
    btnMenuP.disabled = true;
    btnMenuBackP.disabled = true;
    setTimeout(() => {
      btnMenuP.disabled = false;
      btnMenuBackP.disabled = false;
    }, 500);
  }

  function _scrollTo(content, offset) {
    if (content === 0 && offset === 0) window.scrollTo(0, 0);
    else {
      content.scrollIntoView();
      if (offset === 1) window.scrollBy(0, -56 - 28);
    }
    btnMenuBackP.click();
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
/* harmony import */ var _img_projects_ypet_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/projects/ypet.png */ "./src/img/projects/ypet.png");
/* harmony import */ var _img_projects_weather_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/projects/weather.png */ "./src/img/projects/weather.png");
/* harmony import */ var _img_projects_weather_m_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/projects/weather-m.png */ "./src/img/projects/weather-m.png");
/* harmony import */ var _img_projects_homepage_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/projects/homepage.png */ "./src/img/projects/homepage.png");
/* harmony import */ var _img_projects_homepage_m_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/projects/homepage-m.png */ "./src/img/projects/homepage-m.png");
/* harmony import */ var _img_projects_homepage_d_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/projects/homepage-d.png */ "./src/img/projects/homepage-d.png");
/* harmony import */ var _img_projects_homepage_m_d_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/projects/homepage-m-d.png */ "./src/img/projects/homepage-m-d.png");













const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  const lastChild = contentProjects.lastElementChild;
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
      const divDesc = _createElementWithClass("p", "text-justify", "z-[2]");
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
      const spanRepo = _createElementWithClass(
        "span",
        "first-letter:text-theme",
      );
      const spanDemo = spanRepo.cloneNode(false);
      const divImgOuter = _createElementWithClass(
        "div",
        "img-project-outer-wrapper",
      );
      const divImgInner = _createElementWithClass("div");
      const img = _createElementWithClass("img", "img-project");
      const imgMirror = _createElementWithClass("img", "img-project-mirror");
      const img2 = _createElementWithClass("img", "img-project-m", "absolute");

      // Info
      index.textContent = count;
      divIndex.textContent = count;
      divIndex.append(index);
      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.innerHTML = project.desc;

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
        "h-[14px]",
        "md:h-[18px]",
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

      // Disable demo link for project Homepage
      if (project.name === "Homepage") {
        aDemo.classList.add("disabled");
        aDemo.textContent = "VIEWING";
      } else aDemo.append(spanDemo, linkWrapper2);

      divLinks.append(aRepo, aDemo);

      const divider = _createElementWithClass("div", "divider-theme");
      divInfo.append(divIndex, title, divDesc, divTools, divLinks, divider);

      // Project Image
      // Desktop and Mobile with Dark Mode
      if (project.img.length > 2) {
        const divImgInnerMode = _createElementWithClass(
          "div",
          "img-project-inner-wrapper-mode",
        );

        const imgInnerMode = _createElementWithClass("img", "img-project-mode");
        const imgInnerModeMirror = _createElementWithClass(
          "img",
          "img-project-mode-mirror",
        );
        const imgInnerModeDark = _createElementWithClass(
          "img",
          "img-project-mode-dark",
        );
        const imgInnerModeDarkMirror = _createElementWithClass(
          "img",
          "img-project-mode-dark-mirror",
        );
        const imgInnerModeM = _createElementWithClass(
          "img",
          "img-project-mode-m",
        );
        const imgInnerModeMDark = _createElementWithClass(
          "img",
          "img-project-mode-m-dark",
        );

        imgInnerMode.src = project.img[0];
        imgInnerModeMirror.src = project.img[0];
        imgInnerModeDark.src = project.img[2];
        imgInnerModeDarkMirror.src = project.img[2];
        imgInnerModeM.src = project.img[1];
        imgInnerModeMDark.src = project.img[3];

        divImgInnerMode.append(
          imgInnerMode,
          imgInnerModeMirror,
          imgInnerModeDark,
          imgInnerModeDarkMirror,
          imgInnerModeM,
          imgInnerModeMDark,
        );
        divImgInner.append(divImgInnerMode);
      } else {
        // Desktop
        img.src = project.img[0];
        imgMirror.src = project.img[0];
        divImgInner.append(img, imgMirror);

        // Mobile
        if (project.img.length === 2) {
          img2.src = project.img[1];
          divImgInner.append(img2);
        }
      }

      if (count % 2 === 0) {
        divImgInner.classList.add("img-project-inner-wrapper-even");
        divWrapper.classList.add("landscape:flex-row-reverse");
        divider.classList.add("right");
      } else {
        divImgInner.classList.add("img-project-inner-wrapper");
        divider.classList.add("left");
      }

      const divImgWrapper = _createElementWithClass(
        "div",
        "img-project-wrapper",
      );
      divImgWrapper.append(divImgInner);
      divImgOuter.append(divImgWrapper);
      divWrapper.append(divInfo, divImgOuter);
      contentProjects.insertBefore(divWrapper, lastChild);

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
        "A <i>full stack</i> project that features user create, login and logout, store and display expense data and settings that allow name, password and currency change.",
        [_img_projects_ypet_png__WEBPACK_IMPORTED_MODULE_4__],
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
        "A <i>front end</i> project that retrieves and displays user-provided location's weather info from WeatherAPI.com",
        [_img_projects_weather_png__WEBPACK_IMPORTED_MODULE_5__, _img_projects_weather_m_png__WEBPACK_IMPORTED_MODULE_6__],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Homepage",
        "Yes, you are viewing it! My first and current portfolio, a <i>front end</i> project that features interactive layout, responsive design and dark mode option.",
        [_img_projects_homepage_png__WEBPACK_IMPORTED_MODULE_7__, _img_projects_homepage_m_png__WEBPACK_IMPORTED_MODULE_8__, _img_projects_homepage_d_png__WEBPACK_IMPORTED_MODULE_9__, _img_projects_homepage_m_d_png__WEBPACK_IMPORTED_MODULE_10__],
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
  const infoName = document.querySelector("#info-wrapper > div");

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
    infoName.classList.toggle("hide");
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

    article.classList.toggle("landscape:overflow-hidden");
    clickables.forEach((clickable) => {
      clickable.forEach((el) => {
        el.classList.toggle("landscape:hidden");
      });
    });
  }

  return { init, toggle };
})();




/***/ }),

/***/ "./src/js/timeline.js":
/*!****************************!*\
  !*** ./src/js/timeline.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeline: () => (/* binding */ timeline)
/* harmony export */ });
const timeline = (() => {
  const contents = document.querySelectorAll(".timeline-content");
  const timeline = document.querySelector("#timeline");
  const btnTimelineToggle = document.querySelector("#btn-timeline-toggle");

  const fullHeight = timeline.clientHeight;
  const halfScreen = window.innerHeight * 0.5;

  function init() {
    _alignTimeline();
    _checkTimelineHeight();
    _initBtnToggle();
  }

  function _alignTimeline() {
    let x = 0;
    contents.forEach((content) => {
      if (x === 0) content.classList.add("left");
      else content.classList.add("right");
      x = +!x;
    });
  }

  function _checkTimelineHeight() {
    if (timeline.clientHeight > halfScreen) {
      timeline.style.height = halfScreen + "px";
      timeline.classList.toggle("less");
      btnTimelineToggle.classList.toggle("hidden");
    }
  }

  function _initBtnToggle() {
    btnTimelineToggle.onclick = () => {
      timeline.classList.toggle("less");
      if (timeline.classList.contains("less")) {
        btnTimelineToggle.textContent = "SHOW ALL";
        timeline.style.height = halfScreen + "px";
      } else {
        btnTimelineToggle.textContent = "SHOW LESS";
        timeline.style.height = fullHeight + "px";
      }
    };
  }

  return { init };
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

/***/ "./src/img/icons/favicon-32w.png":
/*!***************************************!*\
  !*** ./src/img/icons/favicon-32w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873f3c305999838ffcd7.png";

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

/***/ "./src/img/profile-500w.jpg":
/*!**********************************!*\
  !*** ./src/img/profile-500w.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b40f80520c50455cb41c.jpg";

/***/ }),

/***/ "./src/img/projects/homepage-d.png":
/*!*****************************************!*\
  !*** ./src/img/projects/homepage-d.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ee87f74cea1e4b88d01.png";

/***/ }),

/***/ "./src/img/projects/homepage-m-d.png":
/*!*******************************************!*\
  !*** ./src/img/projects/homepage-m-d.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4be0d352bbd7ad6591f0.png";

/***/ }),

/***/ "./src/img/projects/homepage-m.png":
/*!*****************************************!*\
  !*** ./src/img/projects/homepage-m.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3854da2cd37a06836fa6.png";

/***/ }),

/***/ "./src/img/projects/homepage.png":
/*!***************************************!*\
  !*** ./src/img/projects/homepage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fc0e11067e75e008e11.png";

/***/ }),

/***/ "./src/img/projects/weather-m.png":
/*!****************************************!*\
  !*** ./src/img/projects/weather-m.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cb0141a4c725e361398.png";

/***/ }),

/***/ "./src/img/projects/weather.png":
/*!**************************************!*\
  !*** ./src/img/projects/weather.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c94210ae721539184bb7.png";

/***/ }),

/***/ "./src/img/projects/ypet.png":
/*!***********************************!*\
  !*** ./src/img/projects/ypet.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "220bf50218e1a5694321.png";

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
/* harmony import */ var _js_timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/timeline */ "./src/js/timeline.js");











document.addEventListener("DOMContentLoaded", () => {
  _js_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.init();
  _js_image__WEBPACK_IMPORTED_MODULE_2__.image.init();
  _js_carousel__WEBPACK_IMPORTED_MODULE_3__.carousel.init();
  _js_projects__WEBPACK_IMPORTED_MODULE_4__.projects.init();
  _js_menu__WEBPACK_IMPORTED_MODULE_5__.menu.init();
  _js_screen_orientation__WEBPACK_IMPORTED_MODULE_6__.screenOrientation.init();
  _js_dark_mode__WEBPACK_IMPORTED_MODULE_7__.darkMode.init();
  _js_tab_clickable__WEBPACK_IMPORTED_MODULE_8__.tabClickable.init();
  _js_timeline__WEBPACK_IMPORTED_MODULE_9__.timeline.init();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLHlCQUF5QixhQUFhLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFNBQVMsWUFBWSxZQUFZLE1BQU0sTUFBTSxRQUFRLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxLQUFLLFFBQVEsWUFBWSxLQUFLLFFBQVEsV0FBVyxhQUFhLEtBQUssUUFBUSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxLQUFLLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxXQUFXLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLFFBQVEsS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxlQUFlLE9BQU8sUUFBUSxPQUFPLFlBQVksY0FBYyxlQUFlLE9BQU8sUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLFFBQVEsT0FBTyxhQUFhLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxLQUFLLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsZUFBZSxPQUFPLFFBQVEsT0FBTyxhQUFhLGVBQWUsT0FBTyxRQUFRLE9BQU8sYUFBYSxlQUFlLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLE1BQU0sUUFBUSxLQUFLLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLFFBQVEsT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUsscUNBQXFDLHNGQUFzRixtRUFBbUUsR0FBRyxXQUFXLG9EQUFvRCxtREFBbUQsNkJBQTZCLGdDQUFnQyxrQ0FBa0MsR0FBRyxtQkFBbUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsWUFBWSwrQ0FBK0MsS0FBSyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsaUNBQWlDLEtBQUssZUFBZSxtTEFBbUwsMENBQTBDLEtBQUssc0NBQXNDLDJCQUEyQiwyQkFBMkIsS0FBSyxjQUFjLDZCQUE2QixLQUFLLDhDQUE4QyxpQkFBaUIsS0FBSyxpQ0FBaUMsOEdBQThHLEtBQUssNEVBQTRFLHNCQUFzQixLQUFLLEdBQUcsdUJBQXVCLGVBQWUsd0JBQXdCLEtBQUssc0JBQXNCLHdCQUF3QixLQUFLLGdCQUFnQix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLEtBQUssbUJBQW1CLHVDQUF1QyxLQUFLLHdCQUF3Qiw0Q0FBNEMsS0FBSyxtQkFBbUIsMkJBQTJCLEtBQUssbUJBQW1CLDBCQUEwQixLQUFLLHFCQUFxQiw0QkFBNEIsS0FBSyxzQkFBc0IsOENBQThDLEtBQUsscUJBQXFCLDRCQUE0QixLQUFLLG9CQUFvQiw2QkFBNkIsS0FBSyx1QkFBdUIsOEJBQThCLEtBQUssdUJBQXVCLHNFQUFzRSw0RUFBNEUsMENBQTBDLDZCQUE2QixtREFBbUQsS0FBSyxzQkFBc0IsbUNBQW1DLEtBQUssMkJBQTJCLDJDQUEyQyxLQUFLLDRCQUE0QiwyQ0FBMkMsS0FBSyx3QkFBd0Isd0ZBQXdGLEtBQUssd0JBQXdCLDRFQUE0RSxLQUFLLHdCQUF3QiwyQkFBMkIsS0FBSyxnQkFBZ0IseURBQXlELEtBQUssa0JBQWtCLHVFQUF1RSxLQUFLLG9CQUFvQix5REFBeUQsS0FBSyxzQkFBc0IsdUVBQXVFLDhDQUE4QyxLQUFLLDRCQUE0QiwyREFBMkQsS0FBSyx1QkFBdUIsNkVBQTZFLEtBQUssOEJBQThCLGlDQUFpQyxLQUFLLHNCQUFzQiwwRUFBMEUsS0FBSyxpQkFBaUIsa0VBQWtFLGlDQUFpQyxLQUFLLHNCQUFzQiwyRUFBMkUsbUVBQW1FLEtBQUssdUJBQXVCLG1JQUFtSSxvQkFBb0IsS0FBSyx5QkFBeUIsd0NBQXdDLEtBQUssK0JBQStCLGlNQUFpTSxvQkFBb0IsOENBQThDLEtBQUssb0NBQW9DLGdDQUFnQyxLQUFLLCtCQUErQixrQ0FBa0MsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssK0JBQStCLDRDQUE0QyxLQUFLLDBEQUEwRCxnQ0FBZ0MsS0FBSyxnQ0FBZ0MseUZBQXlGLEtBQUssOEJBQThCLGdIQUFnSCxLQUFLLHFCQUFxQiwyREFBMkQsS0FBSyxrQ0FBa0MsMERBQTBELEtBQUssNEJBQTRCLHdGQUF3RixpQ0FBaUMseUJBQXlCLEtBQUssc0VBQXNFLDJCQUEyQixzQ0FBc0MsK0RBQStELHVDQUF1QywyQkFBMkIsS0FBSywwQ0FBMEMsaUNBQWlDLEtBQUsscUhBQXFILHVDQUF1QyxLQUFLLDJFQUEyRSw4RkFBOEYsS0FBSyw4RUFBOEUsZ0NBQWdDLEtBQUssNkZBQTZGLGtDQUFrQyxLQUFLLDBGQUEwRix1RUFBdUUsMkVBQTJFLG1FQUFtRSxLQUFLLG9DQUFvQywwREFBMEQsS0FBSyw4QkFBOEIsK0JBQStCLEtBQUssaURBQWlELDREQUE0RCxLQUFLLGtCQUFrQix3Q0FBd0MsS0FBSyw2QkFBNkIsZ0RBQWdELEtBQUssc0NBQXNDLGtDQUFrQyxLQUFLLHVCQUF1Qix3Q0FBd0MsS0FBSyxrQkFBa0Isd0NBQXdDLEtBQUssOENBQThDLDJFQUEyRSxLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyx3QkFBd0IsMENBQTBDLEtBQUssc0JBQXNCLHNCQUFzQixLQUFLLDRCQUE0Qiw2RUFBNkUsb0JBQW9CLG1DQUFtQyxLQUFLLHlDQUF5QyxvQkFBb0IsS0FBSyxHQUFHLHNCQUFzQixtQkFBbUIsaUhBQWlILEtBQUssR0FBRyxpQkFBaUIsdURBQXVELEdBQUcsZ0JBQWdCLDZIQUE2SCxxSEFBcUgsc0NBQXNDLHlCQUF5QixzQkFBc0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsa0NBQWtDLDBCQUEwQixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRyxnREFBZ0QscUNBQXFDLEdBQUcsK0RBQStELHFDQUFxQyxHQUFHLDBCQUEwQiw0Q0FBNEMsR0FBRyw4RUFBOEUsa0NBQWtDLEdBQUcsc0JBQXNCLCtDQUErQyxHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRyx5QkFBeUIsZ0NBQWdDLEdBQUcsd0JBQXdCLGdDQUFnQyxrQ0FBa0MsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsd0RBQXdELGlDQUFpQyxHQUFHLHVCQUF1QixlQUFlLG1DQUFtQyxHQUFHLGlDQUFpQyxlQUFlLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxxQkFBcUIsa0NBQWtDLDJCQUEyQixHQUFHLGdDQUFnQywrQkFBK0IsR0FBRyw4Q0FBOEMsc0NBQXNDLEdBQUcseURBQXlELGdDQUFnQyxHQUFHLDZFQUE2RSxlQUFlLEdBQUcsMkNBQTJDLDJCQUEyQixHQUFHLG9CQUFvQiwrQkFBK0Isa0NBQWtDLEdBQUcseUJBQXlCLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsS0FBSyxHQUFHLHFCQUFxQixlQUFlLGtDQUFrQyxrQ0FBa0MsR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcseUJBQXlCLHVEQUF1RCxHQUFHLDJCQUEyQixlQUFlLCtEQUErRCxHQUFHLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLEdBQUcscURBQXFELG9DQUFvQyxHQUFHLHVCQUF1QixvQ0FBb0MsR0FBRywwQkFBMEIsNkJBQTZCLHVDQUF1QyxHQUFHLDJCQUEyQiw4QkFBOEIsd0NBQXdDLEdBQUcseUJBQXlCLGlCQUFpQixzQkFBc0IsMERBQTBELEtBQUssU0FBUyxpQ0FBaUMseURBQXlELEtBQUssR0FBRyx5QkFBeUIsZ0JBQWdCLHNCQUFzQiwwREFBMEQsS0FBSyxTQUFTLHNEQUFzRCx5REFBeUQsS0FBSyxHQUFHLDRCQUE0QixnQkFBZ0IsK0JBQStCLDBEQUEwRCxLQUFLLFNBQVMsb0VBQW9FLHlEQUF5RCxLQUFLLEdBQUcsNkJBQTZCLGdCQUFnQixnQ0FBZ0MsMERBQTBELEtBQUssU0FBUyxxRUFBcUUseURBQXlELEtBQUssR0FBRyx3REFBd0QsZ0NBQWdDLGlDQUFpQyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyx1QkFBdUIsaUZBQWlGLEtBQUssR0FBRyxvQ0FBb0MsVUFBVSwwQ0FBMEMsS0FBSyxHQUFHLCtCQUErQixnQkFBZ0IseUlBQXlJLGlJQUFpSSxLQUFLLEdBQUcscUJBQXFCO0FBQ2poNUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM5NUUxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE4STtBQUM5STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhIQUFPOzs7O0FBSXdGO0FBQ2hILE9BQU8saUVBQWUsOEhBQU8sSUFBSSw4SEFBTyxVQUFVLDhIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlU7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGNBQWMsWUFBWTtBQUMxQjtBQUNBLFVBQVU7O0FBRVY7QUFDQSxpREFBaUQsTUFBTTtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsaUJBQWlCLHlDQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUNqTEw7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NvQztBQUNIOztBQUVGO0FBQ0c7O0FBRUg7QUFDRzs7QUFFSDtBQUNHO0FBQ0Q7QUFDRztBQUNMO0FBQ0c7O0FBRUc7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQix1REFBWTtBQUM3QixrQkFBa0Isa0RBQWM7O0FBRWhDLHFCQUFxQixzREFBVyxFQUFFLG9EQUFVO0FBQzVDLHFCQUFxQixzREFBVyxFQUFFLG9EQUFVO0FBQzVDLHNCQUFzQix1REFBWSxFQUFFLHFEQUFXO0FBQy9DLHFCQUFxQix1REFBVyxFQUFFLHFEQUFVOztBQUU1QztBQUNBLG1CQUFtQix3REFBYTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVcsRUFBRSxvREFBVTtBQUM1QyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEeUI7QUFDUjtBQUNhOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsMkNBQU07O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBTTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkNBQU07QUFDWjs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNc0I7QUFDTjtBQUNNO0FBQ047O0FBRWU7QUFDTTtBQUNHO0FBQ0Q7QUFDRztBQUNBO0FBQ0c7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseUNBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwrQ0FBUTtBQUNkO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7QUM3QnhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUMvQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ0Y7QUFDTTtBQUNBO0FBQ1I7QUFDMkI7QUFDbEI7QUFDUTtBQUNUOztBQUV6QztBQUNBLEVBQUUsOENBQU07QUFDUixFQUFFLDRDQUFLO0FBQ1AsRUFBRSxrREFBUTtBQUNWLEVBQUUsa0RBQVE7QUFDVixFQUFFLDBDQUFJO0FBQ04sRUFBRSxxRUFBaUI7QUFDbkIsRUFBRSxtREFBUTtBQUNWLEVBQUUsMkRBQVk7QUFDZCxFQUFFLGtEQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9jbGFzcy1Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvZGFyay1tb2RlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9zY3JlZW4tb3JpZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy90YWItY2xpY2thYmxlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy90b29scy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0LUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIlRydWVUeXBlXCIpO1xufVxuXG46cm9vdCB7XG4gIC0tdGltaW5nLWJvdW5jZS0xMDA6IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAtLXRpbWluZy1ib3VuY2UtNTA6IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAtLWJvdW5jZS10cmFuc2xhdGVZOiAyNSU7XG4gIC0tdGhlbWU6IHJnYigyNDgsIDExMywgMTEzKTtcbiAgLS10aGVtZS0yOiByZ2IoMjQxLCAyNDUsIDI0OSk7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJvZHkgKiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTBtcztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICB9XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG59XG5cbmFydGljbGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG5hcnRpY2xlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbmFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgYXJ0aWNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgYXJ0aWNsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIGFydGljbGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMi4yNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuYXJ0aWNsZSB7XG4gICAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG4gIH1cblxuYS5kaXNhYmxlZCxcbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIDEpO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYS5kaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKiksXG4gIGJ1dHRvbjpkaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMSk7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5hLmRpc2FibGVkLFxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEuMjVyZW07XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2Y4NzE3MSB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC10bzogcmdiYSgyNDgsIDExMywgMTEzLCAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG5cbjp3aGVyZSguZGFyaywgLmRhcmsgKik6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5iZy10aGVtZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRleHQtbGlnaHQge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDE2cHgpO1xuICB3aWR0aDogY2FsYygxMDAlICsgMTZweCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQ4LCAxMTMsIDExMyksIHRyYW5zcGFyZW50IDgwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgYmVsb3cgKi9cbn1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLWlubmVyLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbi5kaXZpZGVyLXRoZW1lIHtcbiAgaGVpZ2h0OiAwLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uZGl2aWRlci10aGVtZS5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xuICAtLXR3LWdyYWRpZW50LWZyb206ICNmODcxNzEgdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMjQ4LCAxMTMsIDExMywgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLmRpdmlkZXItdGhlbWUucmlnaHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjZjg3MTcxIHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcbn1cbi5jb250ZW50LXdyYXBwZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG59XG4uY29udGVudC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG4gIH1cbn1cbi5idG4tbmF2LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5cmVtO1xufVxuLmJ0bi1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZTpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWUtMjpob3Zlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBhc3BlY3QtcmF0aW86IDI7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIC0tdHctc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAwIDJweCA0cHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5idG4tZGFyay1tb2RlOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxuXG4gIC5idG4tZGFyay1tb2RlOmhvdmVyOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFyay1tb2RlLWJhbGw6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmFydGljbGUtaW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS43NXJlbTtcbn1cbi5hcnRpY2xlLXRpdGxlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hcnRpY2xlLXRpdGxlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYXJ0aWNsZS10aXRsZSB7XG4gIHotaW5kZXg6IDk2O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmFydGljbGUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA1NXB4O1xuICB9XG59XG4udGltZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAudGltZWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4udGltZWxpbmUge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICB9XG4udGltZWxpbmUubGVzcyB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI0MSwgMjQ1LCAyNDkpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjQxLCAyNDUsIDI0OSkgNTAlLCB0cmFuc3BhcmVudCk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICB9XG4udGltZWxpbmU6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAuMjVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC50aW1lbGluZTphZnRlciB7XG4gICAgbGVmdDogNSU7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZTphZnRlciB7XG4gICAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi50aW1lbGluZTp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4udGltZWxpbmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZS1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4udGltZWxpbmUtY29udGVudDphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGltZWxpbmUtY29udGVudDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGJvcmRlci13aWR0aDogNHB4O1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6aG92ZXI6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIHRvcDogNnB4O1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcbiAgICBsZWZ0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtO1xuICB9XG59XG4udGltZWxpbmUtY29udGVudDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAudGltZWxpbmUtY29udGVudC5sZWZ0OmFmdGVyIHtcbiAgICByaWdodDogLTAuNXJlbTtcbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50LnJpZ2h0IHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAudGltZWxpbmUtY29udGVudC5sZWZ0IHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cbi50aW1lbGluZS1pbm5lci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAudGltZWxpbmUtaW5uZXItY29udGVudCB7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQubGVmdCAudGltZWxpbmUtaW5uZXItY29udGVudCA+IHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4uY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBnYXA6IDEuMjVyZW07XG4gIG92ZXJmbG93LXk6IGNsaXA7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICAgIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICB9XG59XG4uaW5kZXgtcHJvamVjdC13cmFwcGVyIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMjUlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uaW5mby1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4uaW1nLXByb2plY3Qtb3V0ZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLmltZy1wcm9qZWN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAxMCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG4gIH1cbi5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIEZpeCBqYWdnZWQgZWRnZXMgKi9cbiAgICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIGJlbG93Ki9cbn1cbi5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLW1vZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZy1wcm9qZWN0LFxuICAuaW1nLXByb2plY3QtbW9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmssXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uaW1nLXByb2plY3QtbSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbS1kYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzVyZW07XG4gIHJpZ2h0OiAtMC43NXJlbTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmltZy1wcm9qZWN0LW0sXG4gIC5pbWctcHJvamVjdC1tb2RlLW0sXG4gIC5pbWctcHJvamVjdC1tb2RlLW0tZGFyayB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uaW1nLXByb2plY3QtbW9kZSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1tIHtcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uaW1nLXByb2plY3QtbW9kZS1kYXJrLFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLW1pcnJvcixcbiAgLmltZy1wcm9qZWN0LW1vZGUtbS1kYXJrIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLW1pcnJvcixcbiAgLmltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3Ige1xuICAtLXR3LXRyYW5zbGF0ZS15OiBjYWxjKDEwMCUgKyAycHgpO1xuICAtLXR3LXNjYWxlLXk6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIGNhbGMoMTAwJSArIDJweCkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHJnYigyNDEsIDI0NSwgMjQ5KSk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgcmdiKDI0MSwgMjQ1LCAyNDkpKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XG4gIH1cbi50b29scy13cmFwcGVyLW91dGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi50b29scy13cmFwcGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvb2wtYWJvdXQsXG4gIFtjbGFzc149XCJ0b29sLXByb2plY3RcIl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wLWNvbnRhY3Qge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pY29uLWNvbnRhY3Qtd3JhcHBlciB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogNDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWNvbnRhY3Qtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG4uaWNvbi1tb2RlLWRhcmssXG4gIC5pY29uLW1vZGUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgfVxuLmljb24tbW9kZS1kYXJrIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5pY29uLW1vZGUtZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1ob21lLWxpbmssXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmljb24taG9tZS1saW5rLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5zdHJva2UtY29udGFjdCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uc3Ryb2tlLWNvbnRhY3Q6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5pbml0aWFsLWNvbnRhY3Qge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmluaXRpYWwtY29udGFjdDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJveC11bmRlcmxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94LXVuZGVybGluZTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IC0ycHg7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xufVxuYnV0dG9uOmhvdmVyIC5ib3gtdW5kZXJsaW5lOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uLWxlZnQtMiB7XG4gIGxlZnQ6IC0wLjVyZW07XG59XG4uLXJpZ2h0LTcge1xuICByaWdodDogLTEuNzVyZW07XG59XG4uLXRvcC0yIHtcbiAgdG9wOiAtMC41cmVtO1xufVxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwcHg7XG59XG4ubGVmdC0wIHtcbiAgbGVmdDogMHB4O1xufVxuLmxlZnQtXFxcXFstNDRweFxcXFxdIHtcbiAgbGVmdDogLTQ0cHg7XG59XG4ubGVmdC1cXFxcWzI4cHhcXFxcXSB7XG4gIGxlZnQ6IDI4cHg7XG59XG4ubGVmdC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LVxcXFxbY2FsY1xcXFwoNTBcXFxcJS03MnB4XFxcXClcXFxcXSB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzJweCk7XG59XG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucmlnaHQtXFxcXFstMzRweFxcXFxdIHtcbiAgcmlnaHQ6IC0zNHB4O1xufVxuLnJpZ2h0LVxcXFxbMjhweFxcXFxdIHtcbiAgcmlnaHQ6IDI4cHg7XG59XG4ucmlnaHQtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICByaWdodDogNTAlO1xufVxuLnJpZ2h0LVxcXFxbY2FsY1xcXFwoNnZ3XFxcXCowXFxcXC4zXFxcXClcXFxcXSB7XG4gIHJpZ2h0OiBjYWxjKDZ2dyAqIDAuMyk7XG59XG4udG9wLTAge1xuICB0b3A6IDBweDtcbn1cbi50b3AtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICB0b3A6IDUwJTtcbn1cbi50b3AtXFxcXFs2MnB4XFxcXF0ge1xuICB0b3A6IDYycHg7XG59XG4udG9wLVxcXFxbY2FsY1xcXFwoNTBcXFxcJS0xNHB4XFxcXClcXFxcXSB7XG4gIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbn1cbi56LVxcXFxbMVxcXFxdIHtcbiAgei1pbmRleDogMTtcbn1cbi56LVxcXFxbMlxcXFxdIHtcbiAgei1pbmRleDogMjtcbn1cbi56LVxcXFxbOTZcXFxcXSB7XG4gIHotaW5kZXg6IDk2O1xufVxuLnotXFxcXFs5N1xcXFxdIHtcbiAgei1pbmRleDogOTc7XG59XG4uei1cXFxcWzk4XFxcXF0ge1xuICB6LWluZGV4OiA5ODtcbn1cbi56LVxcXFxbOTlcXFxcXSB7XG4gIHotaW5kZXg6IDk5O1xufVxuLnotYXV0byB7XG4gIHotaW5kZXg6IGF1dG87XG59XG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxO1xufVxuLm9yZGVyLTIge1xuICBvcmRlcjogMjtcbn1cbi5tdC0wIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm10LTBcXFxcLjUge1xuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbn1cbi5tdC1cXFxcWy01NnB4XFxcXF0ge1xuICBtYXJnaW4tdG9wOiAtNTZweDtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFzcGVjdC1cXFxcWzNcXFxcXSB7XG4gIGFzcGVjdC1yYXRpbzogMztcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5oLTFcXFxcLzIge1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5oLTFcXFxcLzQge1xuICBoZWlnaHQ6IDI1JTtcbn1cbi5oLTE0IHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG4uaC1cXFxcWzE0cHhcXFxcXSB7XG4gIGhlaWdodDogMTRweDtcbn1cbi5oLVxcXFxbMTZweFxcXFxdIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmgtXFxcXFsyNHB4XFxcXF0ge1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uaC1cXFxcWzI1MFxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDI1MCU7XG59XG4uaC1cXFxcWzMwMFxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDMwMCU7XG59XG4uaC1cXFxcWzMwcHhcXFxcXSB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMTAwdmgtMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG59XG4uaC1cXFxcW2NhbGNcXFxcKDZ2d1xcXFwqMFxcXFwuOFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoNnZ3ICogMC44KTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udy0xXFxcXC80IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi53LTIwIHtcbiAgd2lkdGg6IDVyZW07XG59XG4udy0zXFxcXC80IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi53LTM2IHtcbiAgd2lkdGg6IDlyZW07XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiAzMCU7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMFxcXFwlLThweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNDBweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA0MHB4KTtcbn1cbi53LWZpdCB7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF4LXctMnhsIHtcbiAgbWF4LXdpZHRoOiA0MnJlbTtcbn1cbi5tYXgtdy14bCB7XG4gIG1heC13aWR0aDogMzZyZW07XG59XG4ub3JpZ2luLWJvdHRvbS1sZWZ0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG59XG4ub3JpZ2luLXJpZ2h0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstMTAwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjIwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yMjAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy0yNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yNSUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiAtOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS00NSB7XG4gIC0tdHctcm90YXRlOiA0NWRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg0NWRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLVxcXFxbLTI3ZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogLTI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC0yN2RlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtXFxcXFsyN2RlZ1xcXFxdIHtcbiAgLS10dy1yb3RhdGU6IDI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDI3ZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS1cXFxcWzUwZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogNTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoNTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2NhbGUtNzUge1xuICAtLXR3LXNjYWxlLXg6IC43NTtcbiAgLS10dy1zY2FsZS15OiAuNzU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKC43NSkgc2NhbGVZKC43NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1zY2FsZS15LTEwMCB7XG4gIC0tdHctc2NhbGUteTogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5zZWxlY3Qtbm9uZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTEge1xuICBnYXA6IDAuMjVyZW07XG59XG4uZ2FwLTEwIHtcbiAgZ2FwOiAyLjVyZW07XG59XG4uZ2FwLTE0IHtcbiAgZ2FwOiAzLjVyZW07XG59XG4uZ2FwLTIge1xuICBnYXA6IDAuNXJlbTtcbn1cbi5nYXAtMyB7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5nYXAtNSB7XG4gIGdhcDogMS4yNXJlbTtcbn1cbi5nYXAtNyB7XG4gIGdhcDogMS43NXJlbTtcbn1cbi5zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm92ZXJmbG93LXktY2xpcCB7XG4gIG92ZXJmbG93LXk6IGNsaXA7XG59XG4udGV4dC1wcmV0dHkge1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmJnLWxlZnQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xufVxuLmJnLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG59XG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbn1cbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi5weC03IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnRleHQtZW5kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC1cXFxcWzEwdndcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbn1cbi50ZXh0LVxcXFxbMjRweFxcXFxdIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnRleHQtXFxcXFs2dndcXFxcXSB7XG4gIGZvbnQtc2l6ZTogNnZ3O1xufVxuLnRleHQtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLlxcXFwhbGVhZGluZy1cXFxcWzBcXFxcLjVcXFxcXSB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5sZWFkaW5nLVxcXFxbMFxcXFwuOFxcXFxdIHtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbi5sZWFkaW5nLW5vbmUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZXh0LXRyYW5zcGFyZW50IHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAjY29udGFjdC1jYXJkIHtcbiAgICAtLXR3LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYigzOSwgMzksIDQyKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAycHggMnB4IDEwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDJweCAycHggMTBweCByZ2IoMzksIDM5LCA0Mik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG4gIH1cblxuICAjY29udGFjdC1jYXJkOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gICAgLS10dy1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMjQxLCAyNDUsIDI0OSk7XG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDBweCAxMHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwcHggMHB4IDEwcHggcmdiKDI0MSwgMjQ1LCAyNDkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xuICB9XG59XG5cbi5tb250c2VycmF0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWY7XG59XG5cbi5mYWRlLXNpZGUge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlLHJnYigyNDEsIDI0NSwgMjQ5KSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlLHZhcigtLXRoZW1lLTIpIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDMwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgNzAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICB2YXIoLS10aGVtZS0yKSAzMCUsdmFyKC0tdGhlbWUtMikgNzAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIEJFTE9XICovXG59XG5cbkBzdXBwb3J0cyAoYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJlZCAwJSwgcmVkIDAlIDElLCByZWQgMiUpKSB7XG4uZmFkZS1zaWRlIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xufVxufVxuXG4jYmctbGVmdC1uYW1lOmFmdGVyIHtcbiAgY29udGVudDogXCJNRU5VXCI7XG59XG5cbiNiZy1sZWZ0LW5hbWU6YWZ0ZXIuYWJvdXQge1xuICBjb250ZW50OiBcIkFCT1VUXCI7XG59XG5cbiNiZy1sZWZ0LW5hbWU6YWZ0ZXIucHJvamVjdHMge1xuICBjb250ZW50OiBcIlBST0pFQ1RTXCI7XG59XG5cbiNiZy1sZWZ0LW5hbWU6YWZ0ZXIuY29udGFjdCB7XG4gIGNvbnRlbnQ6IFwiQ09OVEFDVFwiO1xufVxuXG4vKiBUcmFuc2l0aW9uICovXG5hLFxuI2J0bi10aW1lbGluZS10b2dnbGUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cblxuLnRvb2wtYWJvdXQsXG5bY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdLFxuLmRhcmstbW9kZS1iYWxsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbi5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDRweCkpO1xufVxuXG4jYnRuLW1lbnUtbCxcbi5pbWctdG9vbCxcbiNoZWxsby13cmFwcGVyLFxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2J0bi1tZW51LWwuaGlkZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKC0xNTAlKTtcbn1cblxuLmltZy10b29sLnNjYWxlQWJvdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbiNoZWxsby13cmFwcGVyLmhpZGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbltpZF49XCJiZy1sZWZ0LVwiXSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG59XG5cbltpZF49XCJiZy1sZWZ0LVwiXS5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbn1cblxuI2Fib3V0LmFjdGl2ZSxcbiNwcm9qZWN0cy5hY3RpdmUsXG4jY29udGFjdC5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xufVxuXG4jbWVudS1sLFxuI21lbnUtcCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcbn1cblxuI21lbnUtbC5vcGVuLFxuI21lbnUtcC5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2JnLWxlZnQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAjYmctbGVmdC5zaHJpbmsge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgfVxufVxuXG4jYmctbGVmdC5zaHJpbmsge1xuICB3aWR0aDogY2FsYyg2dncgKiAwLjgpO1xufVxuXG4jYmctaW50cm8sXG4jc2VjdGlvbi1pbnRybyB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xufVxuXG4jYmctaW50cm8uc2hyaW5rLFxuI3NlY3Rpb24taW50cm8uc2hyaW5rIHtcbiAgaGVpZ2h0OiBjYWxjKCgxMDBzdmggLyAyKSAtIDU2cHgpO1xufVxuXG5uYXYsXG4jc2Nyb2xsLFxuI2luZm8td3JhcHBlcixcbiNpbmZvLXdyYXBwZXIgPiBkaXYge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlLFxuI2luZm8td3JhcHBlci5oaWRlLFxuI2luZm8td3JhcHBlciA+IGRpdi5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogQU5JTUFUSU9OICovXG5bY2xhc3NePVwiYW5pbWF0ZVwiXSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG59XG5cbi5hbmltYXRlLWhlbGxvIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzIDE7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuLmFuaW1hdGUtYXBwZWFyIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uYW5pbWF0ZS1tb2RlLWN5Y2xlIHtcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5hbmltYXRlLW1vZGUtY3ljbGUtciB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYXBwZWFyLWN5Y2xlIDVzIDIuNXMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbkBrZXlmcmFtZXMgYXBwZWFyLWN5Y2xlIHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDY2JSxcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vKiBUYWlsd2luZCBCb3VuY2UgQ3VzdG9tICovXG4uYW5pbWF0ZS1ib3VuY2UteCB7XG4gIGFuaW1hdGlvbjogYm91bmNlLXggMXMgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15IHtcbiAgYW5pbWF0aW9uOiBib3VuY2UteSAzcyBpbmZpbml0ZTtcbn1cblxuLmFuaW1hdGUtYm91bmNlLXktOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGFuaW1hdGlvbjogYm91bmNlLXktOTAgM3MgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15LW45MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIGFuaW1hdGlvbjogYm91bmNlLXktbjkwIDNzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS14IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXktOTAge1xuICAwJSxcbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoMjUlKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXktbjkwIHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgMTYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMjUlKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG4vKiBNRURJQSBRVUVSWSAqL1xuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTIwZGVnKTtcbiAgfVxuXG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLWV2ZW4ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZyk7XG4gIH1cblxuICAuYm9yZGVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDI0OCwgMTEzLCAxMTMpLCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA4MCUpO1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGh0bWwge1xuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmFkZS1zaWRlIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlLHJnYigyNDEsIDI0NSwgMjQ5KSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlLHZhcigtLXRoZW1lLTIpIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDEwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgOTAlLFxuICAgICAgdHJhbnNwYXJlbnRcbiAgICApO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUsdmFyKC0tdGhlbWUtMikgOTAlLFxuICAgICAgdHJhbnNwYXJlbnRcbiAgICApO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgfVxuXG5Ac3VwcG9ydHMgKGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZWQgMCUsIHJlZCAwJSAxJSwgcmVkIDIlKSkge1xuLmZhZGUtc2lkZSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgfVxufVxufVxuXG4uZmlyc3QtbGV0dGVyXFxcXDp0ZXh0LXRoZW1lOjpmaXJzdC1sZXR0ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOnRleHQtbGlnaHQ6aG92ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uZGFya1xcXFw6dGV4dC1saWdodDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uZGFya1xcXFw6dGV4dC10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5kYXJrXFxcXDpob3ZlclxcXFw6dGV4dC10aGVtZS0yOmhvdmVyOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLmhvdmVyXFxcXDpzY2FsZS1cXFxcWzExMFxcXFwlXFxcXF06aG92ZXIge1xuICAtLXR3LXNjYWxlLXg6IDExMCU7XG4gIC0tdHctc2NhbGUteTogMTEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMTEwJSkgc2NhbGVZKDExMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLnNtXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc21cXFxcOmZsZXgtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6aC1cXFxcWzE4cHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5cbiAgLm1kXFxcXDpoLVxcXFxbMjBweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICAubWRcXFxcOmgtXFxcXFsyOHB4XFxcXF0ge1xuICAgIGhlaWdodDogMjhweDtcbiAgfVxuXG4gIC5tZFxcXFw6dHJhbnNsYXRlLXgtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDI1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6c2NhbGUtMTAwIHtcbiAgICAtLXR3LXNjYWxlLXg6IDE7XG4gICAgLS10dy1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEpIHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC1cXFxcWzI4cHhcXFxcXSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LXhsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC54bFxcXFw6YmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnhsXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAucG9ydHJhaXRcXFxcOmJvdHRvbS04IHtcbiAgICBib3R0b206IDJyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmxlZnQtZnVsbCB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6b3JkZXItMSB7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOm9yZGVyLTIge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDptdC1cXFxcWzU2cHhcXFxcXSB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLVxcXFxbY2FsY1xcXFwoMTAwc3ZoLTU2cHhcXFxcKVxcXFxdIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gNTZweCk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNjBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDotcm90YXRlLTkwIHtcbiAgICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnJvdGF0ZS0wIHtcbiAgICAtLXR3LXJvdGF0ZTogMGRlZztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cm90YXRlLTkwIHtcbiAgICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbC1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtMTQge1xuICAgIGdhcDogMy41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtNyB7XG4gICAgZ2FwOiAxLjc1cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpyb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpwYi0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LVxcXFxbMTV2d1xcXFxdIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAgIC5wb3J0cmFpdFxcXFw6c21cXFxcOnctXFxcXFs1MFxcXFwlXFxcXF0ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAucG9ydHJhaXRcXFxcOnNtXFxcXDp3LVxcXFxbODBcXFxcJVxcXFxdIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0XFxcXDpzbVxcXFw6cGItNyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5wb3J0cmFpdFxcXFw6bWRcXFxcOmJvdHRvbS0xNCB7XG4gICAgICBib3R0b206IDMuNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmxhbmRzY2FwZVxcXFw6Zml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmFzcGVjdC1cXFxcWzFcXFxcLjhcXFxcXSB7XG4gICAgYXNwZWN0LXJhdGlvOiAxLjg7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpoLVxcXFxbMTAwdmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnctXFxcXFs4MFxcXFwlXFxcXF0ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpmbGV4LXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpqdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpnYXAtMjAge1xuICAgIGdhcDogNXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnJvdW5kZWQteGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpyb3VuZGVkLWwtbGcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpyb3VuZGVkLXItbGcge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnAtNyB7XG4gICAgcGFkZGluZzogMS43NXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnB5LTUge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dGV4dC1lbmQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICAubGFuZHNjYXBlXFxcXDptZFxcXFw6dy1cXFxcW2NhbGNcXFxcKDEwMHZ3LTJcXFxcKjU2cHhcXFxcKVxcXFxdIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMiAqIDU2cHgpO1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaURBQWlEO0VBQ2pELHlCQUF5QjtFQUN6QiwrREFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsOENBQThDO0VBQzlDLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO0VBQUEsK0ZBQWM7RUFBZCx3REFBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSxpQkFBYztFQUFkO0FBQWM7O0FBQWQ7O0VBQUE7SUFBQSxtQkFBYztJQUFkO0VBQWM7QUFBQTs7QUFBZDtFQUFBLGtCQUFjO0VBQWQ7QUFBYzs7QUFBZDs7RUFBQTtJQUFBLGlCQUFjO0lBQWQ7RUFBYztBQUFBOztBQUFkO0VBQUEsa0JBQWM7RUFBZCx3Q0FBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSxrQkFBYztFQUFkLHFDQUFjO0VBQWQ7QUFBYzs7QUFBZDtFQUFBLGFBQWM7RUFBZCxZQUFjO0VBQWQsV0FBYztFQUFkLGlCQUFjO0VBQWQsc0JBQWM7RUFBZDtBQUFjOztBQUFkOztFQUFBO0lBQUE7RUFBYztBQUFBOztBQUFkOztFQUFBO0lBQUEsY0FBYztJQUFkLHFCQUFjO0lBQWQsc0JBQWM7SUFBZCxvQkFBYztJQUFkO0VBQWM7O0VBQWQ7O0lBQUE7TUFBQSxxQkFBYztNQUFkO0lBQWM7RUFBQTtBQUFBOztBQUFkO0lBQUEsbUNBQWM7RUFBQTs7QUFBZDs7RUFBQSxvQkFBYztFQUFkLDZCQUFjO0VBQWQ7QUFBYzs7QUFBZDs7RUFBQSxvQkFBYztFQUFkLDZCQUFjO0VBQWQ7QUFBYzs7QUFBZDs7SUFBQSxvQkFBYztFQUFBOztBQUFkO0VBQUEsdUJBQWM7RUFBZCxxQkFBYztFQUFkO0FBQWM7O0FBQWQsY0FBYzs7QUFBZDtFQUFBO0FBQWM7O0FBQWQ7RUFBQSxzQkFBYztFQUFkLG9DQUFjO0VBQWQsMkRBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQscUJBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsc0VBQWM7RUFBZCw0REFBYztFQUFkLHVFQUFjO0VBQWQ7QUFBYzs7QUFBZDtFQUFBLHNCQUFjO0VBQWQsaUNBQWM7RUFBZDtBQUFjOztBQUFkOztFQUFBLGtCQUFjO0VBQWQsd0NBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLDhCQUFjO0VBQWQsNkJBQWM7RUFBZCw0QkFBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHdDQUFjO0VBQWQsMENBQWM7RUFBZCxtQ0FBYztFQUFkLDhCQUFjO0VBQWQsc0NBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQsc0JBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQscUJBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLDhCQUFjO0VBQWQsNkJBQWM7RUFBZCw0QkFBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHdDQUFjO0VBQWQsMENBQWM7RUFBZCxtQ0FBYztFQUFkLDhCQUFjO0VBQWQsc0NBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQsc0JBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQscUJBQWM7RUFBZDtBQUFjO0FBaURWO0VBQUEsa0JBQWlCO0VBQWpCLHdDQUFpQjtFQUFqQjtBQUFpQjtBQWdCakI7RUFBQSxrQkFBZ0M7RUFBaEMsd0NBQWdDO0VBQWhDO0FBQWdDO0FBQWhDO0VBQUEsa0JBQWdDO0VBQWhDLHFDQUFnQztFQUFoQztBQUFnQztBQVFoQztFQUFBLG9CQUFvQjtFQUFwQiwwQkFBb0I7RUFBcEI7QUFBb0I7QUFJcEI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBSW5CO0VBQUEsb0JBQXFCO0VBQXJCLDZCQUFxQjtFQUFyQjtBQUFxQjtBQW9CckI7RUFBQSx5QkFBK0Q7RUFBL0Qsd0JBQStEO0VBQS9ELHFCQUErRDtFQUEvRCxnQkFBK0Q7SUFDL0QsMkVBQXFFO0lBQXJFLHFFQUFxRTtJQUNyRSw4QkFBOEI7QUFGaUM7QUFNL0Q7RUFBQSxrQkFBNEM7RUFBNUMsd0NBQTRDO0VBQTVDO0FBQTRDO0FBQTVDO0VBQUEsa0JBQTRDO0VBQTVDLHFDQUE0QztFQUE1QztBQUE0QztBQUE1QztFQUFBLFlBQTRDO0VBQTVDLFdBQTRDO0VBQTVDO0FBQTRDO0FBSTVDO0VBQUEsZUFBNEI7RUFBNUIsV0FBNEI7RUFBNUI7QUFBNEI7QUFJNUI7RUFBQSxxRUFBb0M7RUFBcEMsNERBQW9DO0VBQXBDLHVFQUFvQztFQUFwQztBQUFvQztBQUlwQztFQUFBLG9FQUFvQztFQUFwQyw0REFBb0M7RUFBcEMsdUVBQW9DO0VBQXBDO0FBQW9DO0FBSXBDO0VBQUEsUUFBaUY7RUFBakYsU0FBaUY7RUFBakYsWUFBaUY7RUFBakY7QUFBaUY7QUFBakY7O0VBQUE7SUFBQSxrQkFBaUY7SUFBakYsc0JBQWlGO0lBQWpGLDhLQUFpRjtJQUFqRjtFQUFpRjtBQUFBO0FBSWpGO0VBQUEsYUFBcUU7RUFBckUsWUFBcUU7RUFBckUsV0FBcUU7RUFBckUsbUJBQXFFO0VBQXJFO0FBQXFFO0FBQXJFOztFQUFBO0lBQUEsbUJBQXFFO0lBQXJFO0VBQXFFO0FBQUE7QUFJckU7RUFBQSxrQkFBb0I7RUFBcEI7QUFBb0I7QUFJcEI7RUFBQSxlQUFrRDtFQUFsRCxhQUFrRDtFQUFsRCxXQUFrRDtFQUFsRCxtQkFBa0Q7RUFBbEQ7QUFBa0Q7QUFJbEQ7RUFBQSxrQkFBZ0U7RUFBaEUsd0NBQWdFO0VBQWhFLDJEQUFnRTtFQUFoRSxvQkFBZ0U7RUFBaEUsNkJBQWdFO0VBQWhFO0FBQWdFO0FBQWhFO0VBQUEsa0JBQWdFO0VBQWhFLHdDQUFnRTtFQUFoRTtBQUFnRTtBQUFoRTtFQUFBLG9CQUFnRTtFQUFoRSwwQkFBZ0U7RUFBaEU7QUFBZ0U7QUFJaEU7RUFBQSxrQkFBa0Q7RUFBbEQsd0NBQWtEO0VBQWxEO0FBQWtEO0FBQWxEO0VBQUEsa0JBQWtEO0VBQWxELHFDQUFrRDtFQUFsRDtBQUFrRDtBQUFsRDtFQUFBLG9CQUFrRDtFQUFsRCw2QkFBa0Q7RUFBbEQ7QUFBa0Q7QUFBbEQ7RUFBQSxrQkFBa0Q7RUFBbEQsd0NBQWtEO0VBQWxEO0FBQWtEO0FBQWxEO0VBQUEsa0JBQWtEO0VBQWxELHFDQUFrRDtFQUFsRDtBQUFrRDtBQUlsRDtFQUFBLGtCQUFnRTtFQUFoRSx3Q0FBZ0U7RUFBaEUsMkRBQWdFO0VBQWhFLGVBQWdFO0VBQWhFLFlBQWdFO0VBQWhFLHVCQUFnRTtFQUFoRSxpQkFBZ0U7RUFBaEUsa0JBQWdFO0VBQWhFLGtEQUFnRTtFQUFoRSw2REFBZ0U7RUFBaEUsdUZBQWdFO0VBQWhFLHVIQUFnRTtJQUNoRTtBQURnRTtBQUtoRTs7RUFBQTtJQUFBLGtCQUFvRDtJQUFwRCxxQ0FBb0Q7SUFBcEQ7RUFBb0Q7O0VBQXBEO0lBQUEsa0JBQW9EO0lBQXBELHdDQUFvRDtJQUFwRDtFQUFvRDtBQUFBO0FBSXBEO0VBQUEsa0JBQXNFO0VBQXRFLHdDQUFzRTtFQUF0RTtBQUFzRTtBQUF0RTtFQUFBLGtCQUFzRTtFQUF0RSxxQ0FBc0U7RUFBdEU7QUFBc0U7QUFBdEU7RUFBQSxnQkFBc0U7RUFBdEUsaUJBQXNFO0VBQXRFLG1CQUFzRTtFQUF0RSx3QkFBc0U7RUFBdEU7QUFBc0U7QUFJdEU7RUFBQSxhQUEwQjtFQUExQixzQkFBMEI7RUFBMUI7QUFBMEI7QUFJMUI7RUFBQSxrQkFBbUU7RUFBbkUsd0NBQW1FO0VBQW5FO0FBQW1FO0FBQW5FO0VBQUEsa0JBQW1FO0VBQW5FLHFDQUFtRTtFQUFuRTtBQUFtRTtBQUFuRTtFQUFBLFdBQW1FO0VBQW5FO0FBQW1FO0FBQW5FOztFQUFBO0lBQUEsZ0JBQW1FO0lBQW5FO0VBQW1FO0FBQUE7QUFJbkU7RUFBQSxhQUEyRDtFQUEzRCxzQkFBMkQ7RUFBM0QsWUFBMkQ7RUFBM0Q7QUFBMkQ7QUFBM0Q7O0VBQUE7SUFBQTtFQUEyRDtBQUFBO0FBRDdEO0lBRUUsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSx3RUFBb0U7SUFBcEUsb0VBQW9FO0lBQ3BFLGdFQUE0RDtJQUE1RCw0REFBNEQ7RUFDOUQ7QUFHRTtFQUFBLGtCQUE0SDtFQUE1SCxxQ0FBNEg7RUFBNUgsd0RBQTRIO0VBQTVILGtCQUE0SDtFQUE1SCxRQUE0SDtFQUE1SCxTQUE0SDtFQUE1SCxhQUE0SDtFQUE1SCxZQUE0SDtFQUE1SDtBQUE0SDtBQUE1SDs7RUFBQTtJQUFBO0VBQTRIO0FBQUE7QUFBNUg7O0VBQUE7SUFBQSxzQkFBNEg7SUFBNUgsOEtBQTRIO0lBQTVIO0VBQTRIO0FBQUE7QUFBNUg7RUFBQSxrQkFBNEg7RUFBNUgsd0NBQTRIO0VBQTVIO0FBQTRIO0FBRDlIO0lBRUUsV0FBVztFQUNiO0FBR0U7RUFBQTtBQUFpQztBQUFqQzs7RUFBQTtJQUFBO0VBQWlDO0FBQUE7QUFJakM7RUFBQSxrQkFBMEw7RUFBMUwsd0NBQTBMO0VBQTFMO0FBQTBMO0FBQTFMO0VBQUEsa0JBQTBMO0VBQTFMLHFDQUEwTDtFQUExTDtBQUEwTDtBQUExTDtFQUFBLHNCQUEwTDtFQUExTCxpQ0FBMEw7RUFBMUwsd0RBQTBMO0VBQTFMLGtCQUEwTDtFQUExTCxRQUEwTDtFQUExTCxVQUEwTDtFQUExTCxvQkFBMEw7RUFBMUwsbUJBQTBMO0VBQTFMLFlBQTBMO0VBQTFMLHFCQUEwTDtFQUExTDtBQUEwTDtBQUExTDtFQUFBLGtCQUEwTDtFQUExTCx3Q0FBMEw7RUFBMUw7QUFBMEw7QUFBMUw7O0VBQUE7SUFBQTtFQUEwTDtBQUFBO0FBQTFMOztFQUFBO0lBQUEsUUFBMEw7SUFBMUw7RUFBMEw7QUFBQTtBQUExTDtFQUFBLHNCQUEwTDtFQUExTCxvQ0FBMEw7RUFBMUw7QUFBMEw7QUFENUw7SUFFRSxXQUFXO0lBQ1gsdUNBQXVDO0VBQ3pDO0FBR0U7O0VBQUE7SUFBQTtFQUF5Qjs7RUFJekI7SUFBQTtFQUEyQjs7RUFJM0I7SUFBQTtFQUF1QjtBQVJFO0FBWXpCO0VBQUEsa0JBQXFDO0VBQXJDLG9CQUFxQztFQUFyQztBQUFxQztBQUFyQzs7RUFBQTtJQUFBO0VBQXFDO0FBQUE7QUFJckM7O0VBQUE7SUFBQTtFQUF5QjtBQUFBO0FBSXpCO0VBQUEsYUFBa0Y7RUFBbEYsVUFBa0Y7RUFBbEYsWUFBa0Y7RUFBbEY7QUFBa0Y7QUFBbEY7O0VBQUE7SUFBQTtFQUFrRjtBQUFBO0FBQWxGOztFQUFBO0lBQUEsb0JBQWtGO0lBQWxGO0VBQWtGO0FBQUE7QUFJbEY7RUFBQSxvQkFBeUc7RUFBekcsNkJBQXlHO0VBQXpHLGtEQUF5RztFQUF6RyxrQkFBeUc7RUFBekcsUUFBeUc7RUFBekcsU0FBeUc7RUFBekcsYUFBeUc7RUFBekcsc0JBQXlHO0VBQXpHLHNCQUF5RztFQUF6Ryw2SkFBeUc7RUFBekcsK0xBQXlHO0VBQXpHLGtCQUF5RztFQUF6RztBQUF5RztBQUF6Rzs7RUFBQTtJQUFBLGlCQUF5RztJQUF6RztFQUF5RztBQUFBO0FBSXpHO0VBQUEsYUFBb0Q7RUFBcEQsV0FBb0Q7RUFBcEQsc0JBQW9EO0VBQXBELDZCQUFvRDtFQUFwRCxZQUFvRDtFQUFwRDtBQUFvRDtBQUlwRDtFQUFBLGFBQW1EO0VBQW5ELFdBQW1EO0VBQW5ELG1CQUFtRDtFQUFuRCx1QkFBbUQ7RUFBbkQscUJBQW1EO0VBQW5EO0FBQW1EO0FBSW5EO0VBQUEsYUFBaUY7RUFBakYsWUFBaUY7RUFBakYsV0FBaUY7RUFBakYsbUJBQWlGO0VBQWpGO0FBQWlGO0FBQWpGOztFQUFBO0lBQUEscUJBQWlGO0lBQWpGLDZLQUFpRjtJQUFqRjtFQUFpRjtBQUFBO0FBRG5GO0lBR0Usa0JBQWtCO0VBQ3BCO0FBSUU7O0VBQUEsWUFBb0I7RUFBcEIsV0FBb0I7SUFDcEIsOEJBQThCLEVBQUUscUJBQXFCO0lBQ3JELDZCQUE2QjtBQUZUO0FBTXBCO0VBQUEsWUFBb0I7RUFBcEI7QUFBb0I7QUFLcEI7O0VBQUEsa0JBQTBCO0VBQTFCO0FBQTBCO0FBTzFCOzs7O0VBQUEsa0JBQWdDO0VBQWhDLFFBQWdDO0VBQWhDO0FBQWdDO0FBTWhDOzs7RUFBQSxrQkFBdUY7RUFBdkYsWUFBdUY7RUFBdkYsZUFBdUY7RUFBdkYsV0FBdUY7RUFBdkYsdUJBQXVGO0VBQXZGLGlCQUF1RjtFQUF2RixzQkFBdUY7RUFBdkYsOEJBQXVGO0VBQXZGO0FBQXVGO0FBQXZGOztFQUFBOzs7SUFBQTtFQUF1RjtBQUFBO0FBTXZGOzs7RUFBQSxrREFBeUI7QUFBQTtBQU16Qjs7O0VBQUEsVUFBMkI7RUFBM0IsMERBQTJCO0FBQUE7QUFNM0I7OztFQUFBLGtDQUFnRTtFQUFoRSxnQkFBZ0U7RUFBaEUsMktBQWdFO0VBQWhFO0FBQWdFO0FBQWhFOztFQUFBOzs7SUFBQTtFQUFnRTtBQUFBO0FBSGxFOzs7SUFJRSx3RUFBb0U7SUFBcEUsb0VBQW9FO0lBQ3BFLGdFQUE0RDtJQUE1RCw0REFBNEQ7RUFDOUQ7QUFHRTtFQUFBLGFBQW1EO0VBQW5ELFdBQW1EO0VBQW5ELHVCQUFtRDtFQUFuRDtBQUFtRDtBQUluRDtFQUFBLGFBQXdCO0VBQXhCO0FBQXdCO0FBS3hCOztFQUFBLGFBQXFEO0VBQXJELG1CQUFxRDtFQUFyRCxtQkFBcUQ7RUFBckQ7QUFBcUQ7QUFJckQ7RUFBQSxpQkFBaUM7RUFBakMsZ0JBQWlDO0VBQWpDLG1CQUFpQztFQUFqQztBQUFpQztBQUlqQztFQUFBLG1CQUF5QztFQUF6QztBQUF5QztBQUF6Qzs7RUFBQTtJQUFBO0VBQXlDO0FBQUE7QUFHM0M7O0lBRUUsMkJBQTJCO0VBQzdCO0FBR0U7RUFBQTtBQUFpQztBQUFqQztFQUFBO0FBQWlDO0FBSWpDO0VBQUE7QUFBaUM7QUFBakM7RUFBQTtBQUFpQztBQUtqQzs7RUFBQSxtQkFBb0U7RUFBcEUsWUFBb0U7RUFBcEU7QUFBb0U7QUFBcEU7O0VBQUE7O0lBQUEsWUFBb0U7SUFBcEU7RUFBb0U7QUFBQTtBQUlwRTtFQUFBLGtCQUFpQjtFQUFqQix3Q0FBaUI7RUFBakI7QUFBaUI7QUFBakI7RUFBQSxrQkFBaUI7RUFBakIscUNBQWlCO0VBQWpCO0FBQWlCO0FBSWpCO0VBQUEsb0JBQW1DO0VBQW5DLDZCQUFtQztFQUFuQztBQUFtQztBQUFuQztFQUFBLG9CQUFtQztFQUFuQywwQkFBbUM7RUFBbkM7QUFBbUM7QUFJbkM7RUFBQTtBQUFlO0FBSWY7RUFBQSxrQkFBc0U7RUFBdEUsd0NBQXNFO0VBQXRFLDJEQUFzRTtFQUF0RSxrQkFBc0U7RUFBdEUsU0FBc0U7RUFBdEUsWUFBc0U7RUFBdEUsV0FBc0U7RUFBdEUsVUFBc0U7RUFBdEUscUJBQXNFO0lBQ3RFLFdBQVc7SUFDWDtBQUZzRTtBQU10RTtFQUFBO0FBQWE7QUFuVmpCO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsK0tBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLDhLQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQiw2S0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsK0tBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLDhLQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQiw4S0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkIscUxBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLG9MQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQixvTEFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkIscUxBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLG9MQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQixvTEFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLG1LQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdCQUFtQjtFQUFuQixnTEFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlCQUFtQjtLQUFuQixzQkFBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFB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cUJBa3BCQTtJQWxwQkEsNktBa3BCQTtJQWxwQkE7RUFrcEJBOztFQWxwQkE7SUFBQSxlQWtwQkE7SUFscEJBLGVBa3BCQTtJQWxwQkEsK0pBa3BCQTtJQWxwQkE7RUFrcEJBOztFQWxwQkE7SUFBQSxvQkFrcEJBO0lBbHBCQTtFQWtwQkE7O0VBbHBCQTtJQUFBLGlCQWtwQkE7SUFscEJBO0VBa3BCQTs7RUFscEJBO0lBQUEsbUJBa3BCQTtJQWxwQkE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBLG1CQWtwQkE7SUFscEJBO0VBa3BCQTs7RUFscEJBO0lBQUEsa0JBa3BCQTtJQWxwQkE7RUFrcEJBO0FBQUE7O0FBbHBCQTs7RUFBQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBO0FBQUE7O0FBbHBCQTs7RUFBQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBLG1CQWtwQkE7SUFscEJBLHFMQWtwQkE7SUFscEJBO0VBa3BCQTs7RUFscEJBO0lBQUEsaUJBa3BCQTtJQWxwQkEsbUxBa3BCQTtJQWxwQkE7RUFrcEJBOztFQWxwQkE7SUFBQSxrQkFrcEJBO0lBbHBCQSxvTEFrcEJBO0lBbHBCQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7O0lBQUE7TUFBQTtJQWtwQkE7O0lBbHBCQTtNQUFBO0lBa3BCQTs7SUFscEJBO01BQUE7SUFrcEJBO0VBQUE7O0VBbHBCQTs7SUFBQTtNQUFBO0lBa3BCQTtFQUFBO0FBQUE7O0FBbHBCQTs7RUFBQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQSw4QkFrcEJBO0lBbHBCQTtFQWtwQkE7O0VBbHBCQTtJQUFBLCtCQWtwQkE7SUFscEJBO0VBa3BCQTs7RUFscEJBO0lBQUE7RUFrcEJBOztFQWxwQkE7SUFBQSxvQkFrcEJBO0lBbHBCQTtFQWtwQkE7O0VBbHBCQTtJQUFBO0VBa3BCQTs7RUFscEJBOztJQUFBO01BQUE7SUFrcEJBO0VBQUE7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250L01vbnRzZXJyYXQtRXh0cmFCb2xkLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRpbWluZy1ib3VuY2UtMTAwOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG4gIC0tdGltaW5nLWJvdW5jZS01MDogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XFxuICAtLWJvdW5jZS10cmFuc2xhdGVZOiAyNSU7XFxuICAtLXRoZW1lOiByZ2IoMjQ4LCAxMTMsIDExMyk7XFxuICAtLXRoZW1lLTI6IHJnYigyNDEsIDI0NSwgMjQ5KTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tWzUwbXNdO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0yeGwgbWQ6dGV4dC0zeGw7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtMnhsO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHBvcnRyYWl0OmJnLXRyYW5zcGFyZW50IGgtZnVsbCB3LWZ1bGwgbWF4LXctc2NyZWVuLWxnIGxhbmRzY2FwZTpweC01IGxhbmRzY2FwZTptZDpweC05IGxhbmRzY2FwZTpweS03IGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmQgbGFuZHNjYXBlOm92ZXJmbG93LWF1dG87XFxuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbiAgfVxcblxcbiAgYS5kaXNhYmxlZCxcXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LWRpc2FibGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIEBhcHBseSBweC0xIHJvdW5kZWQtbWQ7XFxuICB9XFxuXFxuICAvKiBTY3JvbGxiYXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgdy01O1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1iIGZyb20tcmVkLTQwMCBib3JkZXItc29saWQgYm9yZGVyLXgtNCBib3JkZXIteS0wIGJvcmRlci10aGVtZS0yIGRhcms6Ym9yZGVyLWRhcms7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgICBAYXBwbHkgYmctdGhlbWU7XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5iZy10aGVtZSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLWZhZGUge1xcbiAgICBAYXBwbHkgYmctcmVkLTMwMDtcXG4gIH1cXG5cXG4gIC5iZy1kYXJrIHtcXG4gICAgQGFwcGx5IGJnLXppbmMtODAwO1xcbiAgfVxcblxcbiAgLmJnLWRhcmstZmFkZSB7XFxuICAgIEBhcHBseSBiZy16aW5jLTcwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTEwMCBkYXJrOmJnLWRhcms7XFxuICB9XFxuXFxuICAuYmctdGhlbWUtMi1mYWRlIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTIwMCBkYXJrOmJnLWRhcmstZmFkZTtcXG4gIH1cXG5cXG4gIC50ZXh0LWxpZ2h0IHtcXG4gICAgQGFwcGx5IHRleHQtemluYy04MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZSB7XFxuICAgIEBhcHBseSB0ZXh0LXJlZC00MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZS0yIHtcXG4gICAgQGFwcGx5IHRleHQtc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLnRleHQtZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC16aW5jLTQwMCBkYXJrOnRleHQtemluYy01MDA7XFxuICB9XFxuXFxuICAuYm9yZGVyLXRoZW1lIHtcXG4gICAgQGFwcGx5IGJvcmRlci1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci1kYXJrIHtcXG4gICAgQGFwcGx5IGJvcmRlci16aW5jLTgwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUtMiB7XFxuICAgIEBhcHBseSBib3JkZXItc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwJSsxNnB4KV0gdy1bY2FsYygxMDAlKzE2cHgpXSBwLTEgcm91bmRlZC1mdWxsO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS10aGVtZSksIHRyYW5zcGFyZW50IDgwJSk7XFxuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgYmVsb3cgKi9cXG4gIH1cXG5cXG4gIC5ib3JkZXItaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsO1xcbiAgfVxcblxcbiAgLmRpdmlkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgaC0xIHctZnVsbCByb3VuZGVkLXNtO1xcbiAgfVxcblxcbiAgLmRpdmlkZXItdGhlbWUubGVmdCB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5kaXZpZGVyLXRoZW1lLnJpZ2h0IHtcXG4gICAgQGFwcGx5IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTphYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGFuZHNjYXBlOnRyYW5zbGF0ZS14LVsxNTAlXTtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXNlY3Rpb24ge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBsYW5kc2NhcGU6cHktMTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAuYnRuLW5hdi13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHctMzYgYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuYnRuLW5hdiB7XFxuICAgIEBhcHBseSB3LTM2IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZpeGVkO1xcbiAgfVxcblxcbiAgLmJ0bi10aGVtZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS1mYWRlIGhvdmVyOmJnLXRoZW1lIHRleHQtdGhlbWUtMiBkYXJrOnRleHQtbGlnaHQ7XFxuICB9XFxuXFxuICAuYnRuLXRoZW1lLTIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMi1mYWRlIGhvdmVyOmJnLXRoZW1lLTIgdGV4dC10aGVtZTtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lIGgtWzI0cHhdIGFzcGVjdC1bMl0gcHgtMCByb3VuZGVkLW1kIHNoYWRvdy1pbm5lcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGU6aG92ZXIge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOmJnLWRhcmsgbGFuZHNjYXBlOmRhcms6Ymctc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTIgaC1bY2FsYygxMDAlLTRweCldIGFzcGVjdC1zcXVhcmUgbXgtWzJweF0gcm91bmRlZC1tZDtcXG4gIH1cXG5cXG4gIC5hcnRpY2xlLWlubmVyLXdyYXBwZXIge1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBnYXAtNztcXG4gIH1cXG5cXG4gIC5hcnRpY2xlLXRpdGxlIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTIgdy1mdWxsIHBvcnRyYWl0OnN0aWNreSBwb3J0cmFpdDp0b3AtWzU1cHhdIHotWzk2XTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZSB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6dy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTUgb3ZlcmZsb3ctaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS5sZXNzIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGhlbWUtMikgNTAlLCB0cmFuc3BhcmVudCk7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS10aGVtZS0yKSA1MCUsIHRyYW5zcGFyZW50KTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZTphZnRlciB7XFxuICAgIEBhcHBseSBiZy1kYXJrIGRhcms6Ymctc2xhdGUtMTAwIGgtZnVsbCB3LTEgYWJzb2x1dGUgdG9wLTAgbGVmdC1bNTAlXSBwb3J0cmFpdDpsZWZ0LVs1JV0gbGFuZHNjYXBlOnRyYW5zbGF0ZS14LVstNTAlXSB6LWF1dG87XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOnctWzUwJV0gcmVsYXRpdmU7XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudDphZnRlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIGhvdmVyOmJnLXRoZW1lIGgtNCBhc3BlY3Qtc3F1YXJlIC1tbC0yIHBvcnRyYWl0Oi1tbC0xLjUgYm9yZGVyLTQgYm9yZGVyLWRhcmsgZGFyazpib3JkZXItc2xhdGUtMTAwIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSB0b3AtWzJweF0gbWQ6dG9wLVs2cHhdIHBvcnRyYWl0OmxlZnQtWzUlXSB6LVsxXTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50OmFmdGVyLmxlZnQge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOi1yaWdodC0yO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQucmlnaHQge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOmxlZnQtWzUwJV07XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudC5sZWZ0IHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTpsZWZ0LTA7XFxuICB9XFxuXFxuICAudGltZWxpbmUtaW5uZXItY29udGVudCB7XFxuICAgIEBhcHBseSBweC0xMCByZWxhdGl2ZSBwb3J0cmFpdDpsZWZ0LTQ7XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudC5sZWZ0IC50aW1lbGluZS1pbm5lci1jb250ZW50ID4gcCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6dGV4dC1lbmQ7XFxuICB9XFxuXFxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1bOTAlXSBsYW5kc2NhcGU6cHktNyBmbGV4IHBvcnRyYWl0OmZsZXgtY29sLXJldmVyc2UgZ2FwLTUgb3ZlcmZsb3cteS1jbGlwO1xcbiAgfVxcblxcbiAgLmluZGV4LXByb2plY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSB0ZXh0LXRoZW1lIHRleHQtNnhsIG1kOnRleHQtN3hsIGFic29sdXRlIHRvcC0wIGxlZnQtMCB0cmFuc2xhdGUteC1bLTI1JV0gdHJhbnNsYXRlLXktWy0yNSVdIHotYXV0bztcXG4gIH1cXG5cXG4gIC5pbmZvLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1mdWxsIHAtMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IGdhcC01O1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW91dGVyLXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdy1mdWxsIHB4LTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxhbmRzY2FwZTp0cmFuc2xhdGUteS1bMTAlXTtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNTAwcHg7XFxuICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLFxcbiAgLmltZy1wcm9qZWN0LWlubmVyLXdyYXBwZXItZXZlbiB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIEZpeCBqYWdnZWQgZWRnZXMgKi9cXG4gICAgLyogTW9yZSBhdCBNRURJQSBRVUVSWSBiZWxvdyovXFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1tb2RlIHtcXG4gICAgQGFwcGx5IGgtZnVsbCB3LWZ1bGw7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QsXFxuICAuaW1nLXByb2plY3QtbW9kZSB7XFxuICAgIEBhcHBseSByb3VuZGVkLXNtIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1pcnJvcixcXG4gIC5pbWctcHJvamVjdC1tb2RlLW1pcnJvcixcXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmssXFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLW1pcnJvciB7XFxuICAgIEBhcHBseSByb3VuZGVkLXNtIGFic29sdXRlIHRvcC0wO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW0sXFxuICAuaW1nLXByb2plY3QtbW9kZS1tLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbS1kYXJrIHtcXG4gICAgQGFwcGx5IGgtWzc1JV0gcG9ydHJhaXQ6aC1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIGFic29sdXRlIHRvcC0zIC1yaWdodC0zO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1vZGUsXFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1tIHtcXG4gICAgQGFwcGx5IGFuaW1hdGUtbW9kZS1jeWNsZTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmssXFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLW1pcnJvcixcXG4gIC5pbWctcHJvamVjdC1tb2RlLW0tZGFyayB7XFxuICAgIEBhcHBseSBhbmltYXRlLW1vZGUtY3ljbGUtcjtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLW1pcnJvciB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteS1bY2FsYygxMDAlKzJweCldIC1zY2FsZS15LTEwMCBwb3J0cmFpdDpoaWRkZW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgdmFyKC0tdGhlbWUtMikpO1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XFxuICB9XFxuXFxuICAudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXgtaGlkZGVuO1xcbiAgfVxcblxcbiAgLnRvb2xzLXdyYXBwZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC50b29sLWFib3V0LFxcbiAgW2NsYXNzXj1cXFwidG9vbC1wcm9qZWN0XFxcIl0ge1xcbiAgICBAYXBwbHkgYXNwZWN0LXNxdWFyZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wLWNvbnRhY3Qge1xcbiAgICBAYXBwbHkgcHktMCB0ZXh0LWxlZnQgdGV4dC1ub3dyYXA7XFxuICB9XFxuXFxuICAuaWNvbi1jb250YWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1bNDBweF0gc206aC1bNTBweF0gYXNwZWN0LXNxdWFyZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayxcXG4gIC5pY29uLW1vZGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlLWRhcmsge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRhcms6b3BhY2l0eS0xMDA7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwIGRhcms6b3BhY2l0eS0wO1xcbiAgfVxcblxcbiAgLmljb24taG9tZS1saW5rLFxcbiAgLmljb24tY29udGFjdC1saW5rIHtcXG4gICAgQGFwcGx5IGgtWzMwcHhdIHNtOmgtWzQwcHhdIHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICB9XFxuXFxuICAuc3Ryb2tlLWNvbnRhY3Qge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMjtcXG4gIH1cXG5cXG4gIC5pbml0aWFsLWNvbnRhY3Qge1xcbiAgICBAYXBwbHkgdGV4dC10aGVtZS0yIGRhcms6dGV4dC1saWdodDtcXG4gIH1cXG5cXG4gIC5ib3gtdW5kZXJsaW5lIHtcXG4gICAgQGFwcGx5IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLmJveC11bmRlcmxpbmU6YWZ0ZXIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUgaC1bMnB4XSB3LTAgcm91bmRlZC1mdWxsIGFic29sdXRlIGxlZnQtMCBib3R0b20tWy0ycHhdO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciAuYm94LXVuZGVybGluZTphZnRlciB7XFxuICAgIEBhcHBseSB3LWZ1bGw7XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgI2NvbnRhY3QtY2FyZCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6c2hhZG93LVsycHhfMnB4XzEwcHhfcmdiKDM5XzM5XzQyKV0gbGFuZHNjYXBlOmRhcms6c2hhZG93LVswcHhfMHB4XzEwcHhfcmdiKDI0MV8yNDVfMjQ5KV07XFxuICB9XFxufVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZhZGUtc2lkZSB7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHRyYW5zcGFyZW50LFxcbiAgICB2YXIoLS10aGVtZS0yKSAzMCUgNzAlLFxcbiAgICB0cmFuc3BhcmVudFxcbiAgKTtcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHRyYW5zcGFyZW50LFxcbiAgICB2YXIoLS10aGVtZS0yKSAzMCUgNzAlLFxcbiAgICB0cmFuc3BhcmVudFxcbiAgKTtcXG4gIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgQkVMT1cgKi9cXG59XFxuXFxuI2JnLWxlZnQtbmFtZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiTUVOVVxcXCI7XFxufVxcblxcbiNiZy1sZWZ0LW5hbWU6YWZ0ZXIuYWJvdXQge1xcbiAgY29udGVudDogXFxcIkFCT1VUXFxcIjtcXG59XFxuXFxuI2JnLWxlZnQtbmFtZTphZnRlci5wcm9qZWN0cyB7XFxuICBjb250ZW50OiBcXFwiUFJPSkVDVFNcXFwiO1xcbn1cXG5cXG4jYmctbGVmdC1uYW1lOmFmdGVyLmNvbnRhY3Qge1xcbiAgY29udGVudDogXFxcIkNPTlRBQ1RcXFwiO1xcbn1cXG5cXG4vKiBUcmFuc2l0aW9uICovXFxuYSxcXG4jYnRuLXRpbWVsaW5lLXRvZ2dsZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG59XFxuXFxuLnRvb2wtYWJvdXQsXFxuW2NsYXNzXj1cXFwidG9vbC1wcm9qZWN0XFxcIl0sXFxuLmRhcmstbW9kZS1iYWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbn1cXG5cXG4uZGFyay1tb2RlLWJhbGwuZGFyayB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgNHB4KSk7XFxufVxcblxcbiNidG4tbWVudS1sLFxcbi5pbWctdG9vbCxcXG4jaGVsbG8td3JhcHBlcixcXG4jYWJvdXQsXFxuI3Byb2plY3RzLFxcbiNjb250YWN0IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4jYnRuLW1lbnUtbC5oaWRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKC0xNTAlKTtcXG59XFxuXFxuLmltZy10b29sLnNjYWxlQWJvdXQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4jaGVsbG8td3JhcHBlci5oaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG59XFxuXFxuW2lkXj1cXFwiYmctbGVmdC1cXFwiXSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuW2lkXj1cXFwiYmctbGVmdC1cXFwiXS5zaG93IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblxcbiNhYm91dC5hY3RpdmUsXFxuI3Byb2plY3RzLmFjdGl2ZSxcXG4jY29udGFjdC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuI21lbnUtbCxcXG4jbWVudS1wIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxufVxcblxcbiNtZW51LWwub3BlbixcXG4jbWVudS1wLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2JnLWxlZnQge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZTtcXG59XFxuXFxuI2JnLWxlZnQuc2hyaW5rIHtcXG4gIEBhcHBseSBsYW5kc2NhcGU6cm91bmRlZC1yLWxnO1xcbiAgd2lkdGg6IGNhbGMoNnZ3ICogMC44KTtcXG59XFxuXFxuI2JnLWludHJvLFxcbiNzZWN0aW9uLWludHJvIHtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctaW50cm8uc2hyaW5rLFxcbiNzZWN0aW9uLWludHJvLnNocmluayB7XFxuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XFxufVxcblxcbm5hdixcXG4jc2Nyb2xsLFxcbiNpbmZvLXdyYXBwZXIsXFxuI2luZm8td3JhcHBlciA+IGRpdiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxufVxcblxcbm5hdi5oaWRlLFxcbiNzY3JvbGwuaGlkZSxcXG4jaW5mby13cmFwcGVyLmhpZGUsXFxuI2luZm8td3JhcHBlciA+IGRpdi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qIEFOSU1BVElPTiAqL1xcbltjbGFzc149XFxcImFuaW1hdGVcXFwiXSB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbn1cXG5cXG4uYW5pbWF0ZS1oZWxsbyB7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNXMgMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLWFwcGVhciB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLW1vZGUtY3ljbGUge1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5hbmltYXRlLW1vZGUtY3ljbGUtciB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXItY3ljbGUge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNjYlLFxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi8qIFRhaWx3aW5kIEJvdW5jZSBDdXN0b20gKi9cXG4uYW5pbWF0ZS1ib3VuY2UteCB7XFxuICBhbmltYXRpb246IGJvdW5jZS14IDFzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteSB7XFxuICBhbmltYXRpb246IGJvdW5jZS15IDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS05MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBhbmltYXRpb246IGJvdW5jZS15LTkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS1uOTAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktbjkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS14IHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXktOTAge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LW45MCB7XFxuICAwJSxcXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuLyogTUVESUEgUVVFUlkgKi9cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKTtcXG4gIH1cXG5cXG4gIC5ib3JkZXItd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA4MCUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgaHRtbCB7XFxuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5mYWRlLXNpZGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUgOTAlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICk7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUgOTAlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFja2dyb3VuZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGJnTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctbGVmdFwiKTtcbiAgY29uc3QgYmdSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctcmlnaHRcIik7XG4gIGNvbnN0IGJnSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWludHJvXCIpO1xuXG4gIGZ1bmN0aW9uIHNocmluaygpIHtcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBhcmd1bWVudHMpIHtcbiAgICAgIGNvbnN0IGJnID0gX2dldEJnKG51bSk7XG4gICAgICBiZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRCZyhpbnQpIHtcbiAgICBzd2l0Y2ggKGludCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gYmdMZWZ0O1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gYmdSaWdodDtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGJnSW50cm87XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc2hyaW5rIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYWNrZ3JvdW5kIH07XG4iLCJpbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmNvbnN0IGNhcm91c2VsID0gKCgpID0+IHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRBYm91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZShsaXN0LCBjbGFzc05hbWUsIGhlaWdodCwgc2NhbGUsIHdyYXBwZXIpIHtcbiAgICBjb25zdCBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsIFwicmVsYXRpdmVcIik7XG4gICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICogc2NhbGUgKyBcInB4XCI7XG5cbiAgICAgIGlmIChsaXN0W2ldLnNyYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWctdG9vbFwiLCBcImFic29sdXRlXCIpO1xuICAgICAgICBpbWcuc3JjID0gbGlzdFtpXS5zcmM7XG4gICAgICAgIGltZy5hbHQgPSBsaXN0W2ldLmFsdDtcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1nLnRpdGxlID0gbGlzdFtpXS5hbHQ7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW1nRGFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBpbWdEYXJrLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgbGlzdFtpXS5jbGFzc1swXSxcbiAgICAgICAgICBcImltZy10b29sXCIsXG4gICAgICAgICAgXCJpY29uLW1vZGUtZGFya1wiLFxuICAgICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICAgKTtcbiAgICAgICAgaW1nRGFyay5zdHlsZS5mb250U2l6ZSA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1nRGFyay50aXRsZSA9IGxpc3RbaV0uYWx0O1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGltZ0RhcmsuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uLW1vZGUtZGFya1wiKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQobGlzdFtpXS5jbGFzc1sxXSwgXCJpY29uLW1vZGVcIik7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWdEYXJrLCBpbWcpO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShcbiAgICBoZWlnaHQsXG4gICAgc2NhbGUsXG4gICAgd3JhcHBlcixcbiAgICB3cmFwcGVyT3V0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIGxlbmd0aCxcbiAgICBhdXRvLFxuICAgIHRvb2xOYW1lLFxuICApIHtcbiAgICBjb25zdCB4ID0gaGVpZ2h0ICogc2NhbGU7XG4gICAgbGV0IGFtb3VudCA9IE1hdGguZmxvb3Iod3JhcHBlck91dGVyLmNsaWVudFdpZHRoIC8geCk7XG4gICAgaWYgKGxlbmd0aCA+IGFtb3VudCB8fCBhdXRvID09PSAxKVxuICAgICAgX3Rvb2xBdXRvU2Nyb2xsKFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgd3JhcHBlck91dGVyLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgICB4LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGF1dG8sXG4gICAgICAgIHRvb2xOYW1lLFxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b29sQXV0b1Njcm9sbChcbiAgICBjbGFzc05hbWUsXG4gICAgbGVuZ3RoLFxuICAgIHdyYXBwZXJPdXRlcixcbiAgICB3cmFwcGVyLFxuICAgIHgsXG4gICAgYW1vdW50LFxuICAgIGF1dG8sXG4gICAgdG9vbE5hbWUsXG4gICkge1xuICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGxldCB0b0JlRW5kID0gMDtcbiAgICBsZXQgdHggPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGxldCB0b29sTWlkID0gbnVsbDtcblxuICAgIGFtb3VudCA9IGxlbmd0aCAtIDI7XG4gICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHdyYXBwZXJPdXRlci5zdHlsZS53aWR0aCA9IHggKiAoYW1vdW50IC0gMSkgKyBcInB4XCI7XG4gICAgZWxzZSB3cmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogYW1vdW50ICsgXCJweFwiO1xuXG4gICAgaWYgKGFtb3VudCA8IDUpIG1pZCAtPSAyO1xuICAgIGVsc2UgaWYgKGFtb3VudCA8IDcpIG1pZCAtPSAxO1xuXG4gICAgaWYgKGF1dG8gPT09IDEpIHtcbiAgICAgIHdyYXBwZXJPdXRlci5jbGFzc0xpc3QuYWRkKFwiZmFkZS1zaWRlXCIpO1xuICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt4fXB4KWA7XG4gICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgaWYgKHRvb2xNaWQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZS1kYXJrXCIpO1xuICAgICAgICBlbHNlIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tb2RlXCIpO1xuICAgICAgfVxuICAgICAgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgIHRvb2xOYW1lLnRleHRDb250ZW50ID0gQm9vbGVhbih0b29sTWlkLmFsdClcbiAgICAgICAgPyB0b29sTWlkLmFsdC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIDogdG9vbE1pZC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IHRvQmVFbmQpIHtcbiAgICAgICAgICB0eFtpXSArPSB4ICogKGxlbmd0aCAtIDEpO1xuICAgICAgICAgIHRvb2xzW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgdG9vbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgdHhbaV0gLT0geDtcblxuICAgICAgICBpZiAoYXV0byA9PT0gMSkgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgICAgdG9vbHNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0eFtpXX1weClgO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9CZUVuZCAhPT0gbGVuZ3RoIC0gMSkgdG9CZUVuZCArPSAxO1xuICAgICAgZWxzZSB0b0JlRW5kID0gMDtcblxuICAgICAgaWYgKG1pZCAhPT0gbGVuZ3RoIC0gMSkgbWlkICs9IDE7XG4gICAgICBlbHNlIG1pZCA9IDA7XG5cbiAgICAgIGlmIChhdXRvID09PSAxKSB7XG4gICAgICAgIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgIGlmICh0b29sTWlkID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgICAgICAgIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tb2RlLWRhcmtcIik7XG4gICAgICAgICAgZWxzZSB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0b29sTWlkLmNsYXNzTGlzdC50b2dnbGUoXCJzY2FsZUFib3V0XCIpO1xuICAgICAgICB0b29sTmFtZS50ZXh0Q29udGVudCA9IEJvb2xlYW4odG9vbE1pZC5hbHQpXG4gICAgICAgICAgPyB0b29sTWlkLmFsdC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgOiB0b29sTWlkLnRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEFib3V0KCkge1xuICAgIGNvbnN0IGxpc3QgPSB0b29scy5nZXRMaXN0KCk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gXCJ0b29sLWFib3V0XCI7XG4gICAgY29uc3QgaGVpZ2h0ID0gNDA7XG4gICAgY29uc3Qgc2NhbGUgPSAxLjU7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9vbHMtd3JhcHBlci1hYm91dFwiKTtcbiAgICBjb25zdCB3cmFwcGVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXItb3V0ZXItYWJvdXRcIik7XG4gICAgY29uc3QgdG9vbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2wtbmFtZVwiKTtcblxuICAgIGdlbmVyYXRlSW1hZ2UobGlzdCwgY2xhc3NOYW1lLCBoZWlnaHQsIHNjYWxlLCB3cmFwcGVyKTtcbiAgICBjcmVhdGUoXG4gICAgICBoZWlnaHQsXG4gICAgICBzY2FsZSxcbiAgICAgIHdyYXBwZXIsXG4gICAgICB3cmFwcGVyT3V0ZXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsaXN0Lmxlbmd0aCxcbiAgICAgIDEsXG4gICAgICB0b29sTmFtZSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2VuZXJhdGVJbWFnZSwgY3JlYXRlIH07XG59KSgpO1xuXG5leHBvcnQgeyBjYXJvdXNlbCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGltZywgcmVwbywgZGVtbywgdG9vbHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICB0aGlzLmRlbW8gPSBkZW1vO1xuICAgIHRoaXMudG9vbHMgPSB0b29scztcbiAgfVxufVxuIiwiY29uc3QgZGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBiYWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFyay1tb2RlLWJhbGxcIik7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZGV0ZWN0RGFya01vZGUoKTtcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSBfdG9nZ2xlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RldGVjdERhcmtNb2RlKCkge1xuICAgIGlmIChCb29sZWFuKGxvY2FsU3RvcmFnZS50aGVtZSkpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIF90b2dnbGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgX3RvZ2dsZSgpO1xuICAgIH0gZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlKCkge1xuICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgYmFsbHMuZm9yRWFjaCgoYmFsbCkgPT4ge1xuICAgICAgYmFsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICB9KTtcblxuICAgIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBkYXJrTW9kZSB9O1xuIiwiaW1wb3J0IGltZ0Fycm93VzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Fycm93LXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1Byb2ZpbGU1MDB3IGZyb20gXCIuLi9pbWcvcHJvZmlsZS01MDB3LmpwZ1wiO1xuXG5pbXBvcnQgaW1nTWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL3BvbGwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ01lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvcG9sbC13LTUwdy5wbmdcIjtcblxuaW1wb3J0IGltZ09wZW41MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdPcGVuVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdOYW1lNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbmFtZS01MHcucG5nXCI7XG5pbXBvcnQgaW1nTmFtZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9uYW1lLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZW1haWwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2VtYWlsLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0xpbms1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9saW5rLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdMaW5rVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2xpbmstdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdGYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5cbmNvbnN0IGltYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctc2Nyb2xsXCIpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJvZmlsZVwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbWVudS13cmFwcGVyXCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbmFtZS13cmFwcGVyXCIpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWVtYWlsLXdyYXBwZXJcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1saW5rLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2Nyb2xsLnNyYyA9IGltZ0Fycm93VzUwdztcbiAgICBwcm9maWxlLnNyYyA9IGltZ1Byb2ZpbGU1MDB3O1xuXG4gICAgX3NldEltZ1NyYyhtZW51LCBpbWdNZW51VzUwdywgaW1nTWVudTUwdyk7XG4gICAgX3NldEltZ1NyYyhuYW1lLCBpbWdOYW1lVzUwdywgaW1nTmFtZTUwdyk7XG4gICAgX3NldEltZ1NyYyhlbWFpbCwgaW1nRW1haWxXNTB3LCBpbWdFbWFpbDUwdyk7XG4gICAgX3NldEltZ1NyYyhsaW5rLCBpbWdMaW5rVzUwdywgaW1nTGluazUwdyk7XG5cbiAgICBmYXZpY29uLnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICAgIGZhdmljb24uaHJlZiA9IGltZ0Zhdmljb24zMnc7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJY29uT3BlbihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIF9zZXRJbWdTcmMoZWwsIGltZ09wZW5XNTB3LCBpbWdPcGVuNTB3KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRJbWdTcmMoaWQsIHNyY0RhcmssIHNyY0xpZ2h0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaWQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgICB0YXJnZXRbMF0uc3JjID0gc3JjRGFyaztcbiAgICB0YXJnZXRbMV0uc3JjID0gc3JjTGlnaHQ7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBzZXRJY29uT3BlbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcbmltcG9ydCB7IHRhYkNsaWNrYWJsZSB9IGZyb20gXCIuL3RhYi1jbGlja2FibGVcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bk1lbnVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudS1sXCIpO1xuICBjb25zdCBidG5NZW51QmFja0wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWJhY2stbFwiKTtcblxuICBjb25zdCBidG5BYm91dEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1sXCIpO1xuICBjb25zdCBidG5Qcm9qZWN0c0wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1sXCIpO1xuICBjb25zdCBidG5Db250YWN0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3QtbFwiKTtcblxuICBjb25zdCBidG5NZW51UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtcFwiKTtcbiAgY29uc3QgYnRuTWVudUJhY2tQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudS1iYWNrLXBcIik7XG5cbiAgY29uc3QgYnRuSG9tZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ob21lLXBcIik7XG4gIGNvbnN0IGJ0bkFib3V0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LXBcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLXBcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1wXCIpO1xuXG4gIGNvbnN0IG1lbnVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWxcIik7XG4gIGNvbnN0IG1lbnVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXBcIik7XG4gIGNvbnN0IGhlbGxvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVsbG8td3JhcHBlclwiKTtcbiAgY29uc3QgaW5mb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8td3JhcHBlclwiKTtcblxuICBjb25zdCBiZ0xlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1sZWZ0LW1lbnVcIik7XG4gIGNvbnN0IGJnTGVmdEFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1sZWZ0LWFib3V0XCIpO1xuICBjb25zdCBiZ0xlZnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctbGVmdC1wcm9qZWN0c1wiKTtcbiAgY29uc3QgYmdMZWZ0Q29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctbGVmdC1jb250YWN0XCIpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBjb25zdCBidG5CYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWJhY2tcIik7XG5cbiAgbGV0IGlzT3Blbk1lbnUgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMDtcbiAgbGV0IGlzT3BlblRhYiA9IDA7XG4gIGxldCBiYWNrVGFyZ2V0ID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aHJlc2hvbGQgPSBzY3JvbGwuZ2V0U2Nyb2xsVGhyZXNob2xkKCk7XG5cbiAgICBidG5NZW51TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYnRuTWVudUwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICBtZW51TC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudUwuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICB9KTtcbiAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIGluZm9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgYmdMZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgIGlzT3Blbk1lbnUgPSAxO1xuICAgIH07XG5cbiAgICBidG5NZW51QmFja0wub25jbGljayA9ICgpID0+IHtcbiAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIGluZm9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgYmdMZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgIG1lbnVMLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnVMLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGJ0bk1lbnVMLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgaXNPcGVuTWVudSA9IDA7XG4gICAgfTtcblxuICAgIGJ0bkFib3V0TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX29wZW5UYWIoYWJvdXQsIDEsIGJ0bkFib3V0TCk7XG4gICAgfTtcbiAgICBidG5Qcm9qZWN0c0wub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9vcGVuVGFiKHByb2plY3RzLCAxLCBidG5Qcm9qZWN0c0wpO1xuICAgIH07XG4gICAgYnRuQ29udGFjdEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9vcGVuVGFiKGNvbnRhY3QsIDEsIGJ0bkNvbnRhY3RMKTtcbiAgICB9O1xuXG4gICAgYnRuQmFja3MuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgX2Nsb3NlVGFiKCk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgYnRuTWVudVAub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc09wZW5NZW51ID09PSAxKSB7XG4gICAgICAgIGJ0bk1lbnVCYWNrUC5jbGljaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90b2dnbGVNZW51Q29vbGRvd24oKTtcbiAgICAgIHNjcm9sbC5kaXNhYmxlU2Nyb2xsKCk7XG5cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkgX3RvZ2dsZUJhY2tncm91bmQoMSk7XG5cbiAgICAgIG1lbnVQLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBtZW51UC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBpc09wZW5NZW51ID0gMTtcbiAgICB9O1xuXG4gICAgYnRuTWVudUJhY2tQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlTWVudUNvb2xkb3duKCk7XG4gICAgICBzY3JvbGwuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICBtZW51UC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnVQLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9LCA1MDApO1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIF90b2dnbGVCYWNrZ3JvdW5kKDEpO1xuICAgICAgaWYgKGhlbGxvV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSBfdG9nZ2xlQmFja2dyb3VuZCgxKTtcblxuICAgICAgaXNPcGVuTWVudSA9IDA7XG4gICAgfTtcblxuICAgIGJ0bkhvbWVQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8oMCwgMCk7XG4gICAgfTtcblxuICAgIGJ0bkFib3V0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAyKTtcbiAgICAgICAgX3Njcm9sbFRvKGFib3V0LCAxKTtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0oc2NyZWVuLmhlaWdodCAvIDIpKTtcbiAgICAgIH0gZWxzZSBfc2Nyb2xsVG8oYWJvdXQsIDEpO1xuICAgIH07XG5cbiAgICBidG5Qcm9qZWN0c1Aub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbyhwcm9qZWN0cywgMSk7XG4gICAgfTtcbiAgICBidG5Db250YWN0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Njcm9sbFRvKGNvbnRhY3QsIDApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXNldE9uU2NyZWVuQ2hhbmdlKCkge1xuICAgIGlmIChpc09wZW5UYWIgPT09IDEpIHtcbiAgICAgIGJ0bkJhY2tzWzBdLmNsaWNrKCk7XG4gICAgICBpc09wZW5UYWIgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9vcGVuVGFiKHRhYiwgYmcsIGJ0bikge1xuICAgIGlmIChpc09wZW5UYWIgPT09IDEpIGJ0bkJhY2tzWzBdLmNsaWNrKCk7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBfdG9nZ2xlQmFja2dyb3VuZChiZyk7XG4gICAgdGFiQ2xpY2thYmxlLnRvZ2dsZSh0YWIpO1xuICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlzT3BlblRhYiA9IDE7XG4gICAgYmFja1RhcmdldCA9IFt0YWIsIGJnLCBidG5dO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Nsb3NlVGFiKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGJhY2tUYXJnZXRbMF07XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgX3RvZ2dsZUJhY2tncm91bmQoYmFja1RhcmdldFsxXSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB0YWJDbGlja2FibGUudG9nZ2xlKHRhcmdldCk7XG4gICAgfSwgMTAwMCk7XG4gICAgaXNPcGVuVGFiID0gMDtcbiAgICBiYWNrVGFyZ2V0WzJdLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlQmFja2dyb3VuZChiZykge1xuICAgIGJhY2tncm91bmQuc2hyaW5rKGJnKTtcbiAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgaW5mb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlTWVudUNvb2xkb3duKCkge1xuICAgIGJ0bk1lbnVQLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidG5NZW51QmFja1AuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnRuTWVudVAuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0bk1lbnVCYWNrUC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2Nyb2xsVG8oY29udGVudCwgb2Zmc2V0KSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IDAgJiYgb2Zmc2V0ID09PSAwKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgZWxzZSB7XG4gICAgICBjb250ZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBpZiAob2Zmc2V0ID09PSAxKSB3aW5kb3cuc2Nyb2xsQnkoMCwgLTU2IC0gMjgpO1xuICAgIH1cbiAgICBidG5NZW51QmFja1AuY2xpY2soKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHJlc2V0T25TY3JlZW5DaGFuZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzLVByb2plY3RcIjtcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWxcIjtcbmltcG9ydCB7IGltYWdlIH0gZnJvbSBcIi4vaW1hZ2VcIjtcblxuaW1wb3J0IGltZ1lwZXQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy95cGV0LnBuZ1wiO1xuaW1wb3J0IGltZ1dlYXRoZXIgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLnBuZ1wiO1xuaW1wb3J0IGltZ1dlYXRoZXJNIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvd2VhdGhlci1tLnBuZ1wiO1xuaW1wb3J0IGltZ0hvbWVwYWdlIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UucG5nXCI7XG5pbXBvcnQgaW1nSG9tZXBhZ2VNIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UtbS5wbmdcIjtcbmltcG9ydCBpbWdIb21lcGFnZUQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy9ob21lcGFnZS1kLnBuZ1wiO1xuaW1wb3J0IGltZ0hvbWVwYWdlTUQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy9ob21lcGFnZS1tLWQucG5nXCI7XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXByb2plY3RzXCIpO1xuICBjb25zdCBsYXN0Q2hpbGQgPSBjb250ZW50UHJvamVjdHMubGFzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBfZ2V0UHJvamVjdHMoKTtcbiAgY29uc3QgbGVuZ3RoID0gcHJvamVjdExpc3QubGVuZ3RoO1xuICBjb25zdCBoZWlnaHQgPSA0MDtcbiAgY29uc3Qgc2NhbGUgPSAxLjE7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZ2VuZXJhdGVQcm9qZWN0cygpO1xuICAgIF9jYXJvdXNlbEluaXQoKTtcbiAgICBpbWFnZS5zZXRJY29uT3BlbihcIi5pY29uLWxpbmstd3JhcHBlclwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZW5lcmF0ZVByb2plY3RzKCkge1xuICAgIGxldCBjb3VudCA9IDE7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgICAgY29uc3QgZGl2V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImNvbnRlbnQtd3JhcHBlci1wcm9qZWN0XCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZGl2SW5kZXggPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJpbmRleC1wcm9qZWN0LXdyYXBwZXJcIixcbiAgICAgICAgXCJ0ZXh0LXRyYW5zcGFyZW50XCIsXG4gICAgICAgIFwibW9udHNlcnJhdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICBcImluZGV4LXByb2plY3RcIixcbiAgICAgICAgXCJ0ZXh0LXRoZW1lXCIsXG4gICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJ0cmFuc2xhdGUteC1bLTEwMCVdXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZGl2SW5mbyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImluZm8tcHJvamVjdFwiLFxuICAgICAgICBcInJlbGF0aXZlXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImgzXCIsIFwiei1bMV1cIiwgXCJtb250c2VycmF0XCIpO1xuICAgICAgY29uc3Qgc3BhbiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwic3BhblwiLCBcInRleHQtdGhlbWVcIik7XG4gICAgICBjb25zdCBkaXZEZXNjID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJwXCIsIFwidGV4dC1qdXN0aWZ5XCIsIFwiei1bMl1cIik7XG4gICAgICBjb25zdCBkaXZUb29scyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICBcIm92ZXJmbG93LXgtaGlkZGVuXCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgd3JhcHBlclRvb2xPdXRlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInRvb2xzLXdyYXBwZXItb3V0ZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUb29sID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwidG9vbHMtd3JhcHBlci1wcm9qZWN0XCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZGl2TGlua3MgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwianVzdGlmeS1ldmVubHlcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBhUmVwbyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIFwiZ2FwLTNcIixcbiAgICAgICAgXCJtb250c2VycmF0XCIsXG4gICAgICAgIFwiaG92ZXI6c2NhbGUtWzExMCVdXCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgc3BhblJlcG8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIFwiZmlyc3QtbGV0dGVyOnRleHQtdGhlbWVcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBzcGFuRGVtbyA9IHNwYW5SZXBvLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBjb25zdCBkaXZJbWdPdXRlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImltZy1wcm9qZWN0LW91dGVyLXdyYXBwZXJcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZJbWdJbm5lciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW1nID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJpbWdcIiwgXCJpbWctcHJvamVjdFwiKTtcbiAgICAgIGNvbnN0IGltZ01pcnJvciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaW1nLXByb2plY3QtbWlycm9yXCIpO1xuICAgICAgY29uc3QgaW1nMiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaW1nLXByb2plY3QtbVwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgICAvLyBJbmZvXG4gICAgICBpbmRleC50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgICAgZGl2SW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LmFwcGVuZChpbmRleCk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIi5cIjtcbiAgICAgIHRpdGxlLmFwcGVuZChzcGFuKTtcbiAgICAgIGRpdkRlc2MuaW5uZXJIVE1MID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAvLyBUb29sc1xuICAgICAgY2Fyb3VzZWwuZ2VuZXJhdGVJbWFnZShcbiAgICAgICAgcHJvamVjdC50b29scyxcbiAgICAgICAgYHRvb2wtcHJvamVjdC0ke2NvdW50fWAsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHdyYXBwZXJUb29sLFxuICAgICAgKTtcblxuICAgICAgd3JhcHBlclRvb2xPdXRlci5hcHBlbmQod3JhcHBlclRvb2wpO1xuICAgICAgZGl2VG9vbHMuYXBwZW5kKHdyYXBwZXJUb29sT3V0ZXIpO1xuXG4gICAgICAvLyBMaW5rIGFuZCBEZW1vXG4gICAgICBhUmVwby50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgYVJlcG8ucmVsID0gXCJub3JlZmVycmVyXCI7XG4gICAgICBjb25zdCBhRGVtbyA9IGFSZXBvLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBhUmVwby5ocmVmID0gcHJvamVjdC5yZXBvO1xuICAgICAgc3BhblJlcG8udGV4dENvbnRlbnQgPSBcIkdJVEhVQlwiO1xuICAgICAgYURlbW8uaHJlZiA9IHByb2plY3QuZGVtbztcbiAgICAgIHNwYW5EZW1vLnRleHRDb250ZW50ID0gXCJERU1PXCI7XG5cbiAgICAgIGNvbnN0IGxpbmtXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaC1bMTRweF1cIixcbiAgICAgICAgXCJtZDpoLVsxOHB4XVwiLFxuICAgICAgICBcImFzcGVjdC1zcXVhcmVcIixcbiAgICAgICAgXCJyZWxhdGl2ZVwiLFxuICAgICAgICBcImljb24tbGluay13cmFwcGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW1nTGluayA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcImljb24tbW9kZS1kYXJrXCIsXG4gICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBpbWdMaW5rMiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaWNvbi1tb2RlXCIsIFwiYWJzb2x1dGVcIik7XG5cbiAgICAgIGxpbmtXcmFwcGVyLmFwcGVuZChpbWdMaW5rLCBpbWdMaW5rMik7XG4gICAgICBjb25zdCBsaW5rV3JhcHBlcjIgPSBsaW5rV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGFSZXBvLmFwcGVuZChzcGFuUmVwbywgbGlua1dyYXBwZXIpO1xuXG4gICAgICAvLyBEaXNhYmxlIGRlbW8gbGluayBmb3IgcHJvamVjdCBIb21lcGFnZVxuICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gXCJIb21lcGFnZVwiKSB7XG4gICAgICAgIGFEZW1vLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgYURlbW8udGV4dENvbnRlbnQgPSBcIlZJRVdJTkdcIjtcbiAgICAgIH0gZWxzZSBhRGVtby5hcHBlbmQoc3BhbkRlbW8sIGxpbmtXcmFwcGVyMik7XG5cbiAgICAgIGRpdkxpbmtzLmFwcGVuZChhUmVwbywgYURlbW8pO1xuXG4gICAgICBjb25zdCBkaXZpZGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJkaXZpZGVyLXRoZW1lXCIpO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2SW5kZXgsIHRpdGxlLCBkaXZEZXNjLCBkaXZUb29scywgZGl2TGlua3MsIGRpdmlkZXIpO1xuXG4gICAgICAvLyBQcm9qZWN0IEltYWdlXG4gICAgICAvLyBEZXNrdG9wIGFuZCBNb2JpbGUgd2l0aCBEYXJrIE1vZGVcbiAgICAgIGlmIChwcm9qZWN0LmltZy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGNvbnN0IGRpdkltZ0lubmVyTW9kZSA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgXCJpbWctcHJvamVjdC1pbm5lci13cmFwcGVyLW1vZGVcIixcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpbWdJbm5lck1vZGUgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImltZy1wcm9qZWN0LW1vZGVcIik7XG4gICAgICAgIGNvbnN0IGltZ0lubmVyTW9kZU1pcnJvciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgIFwiaW1nXCIsXG4gICAgICAgICAgXCJpbWctcHJvamVjdC1tb2RlLW1pcnJvclwiLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpbWdJbm5lck1vZGVEYXJrID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgXCJpbWdcIixcbiAgICAgICAgICBcImltZy1wcm9qZWN0LW1vZGUtZGFya1wiLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpbWdJbm5lck1vZGVEYXJrTWlycm9yID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgXCJpbWdcIixcbiAgICAgICAgICBcImltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3JcIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaW1nSW5uZXJNb2RlTSA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgIFwiaW1nXCIsXG4gICAgICAgICAgXCJpbWctcHJvamVjdC1tb2RlLW1cIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaW1nSW5uZXJNb2RlTURhcmsgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgICBcImltZ1wiLFxuICAgICAgICAgIFwiaW1nLXByb2plY3QtbW9kZS1tLWRhcmtcIixcbiAgICAgICAgKTtcblxuICAgICAgICBpbWdJbm5lck1vZGUuc3JjID0gcHJvamVjdC5pbWdbMF07XG4gICAgICAgIGltZ0lubmVyTW9kZU1pcnJvci5zcmMgPSBwcm9qZWN0LmltZ1swXTtcbiAgICAgICAgaW1nSW5uZXJNb2RlRGFyay5zcmMgPSBwcm9qZWN0LmltZ1syXTtcbiAgICAgICAgaW1nSW5uZXJNb2RlRGFya01pcnJvci5zcmMgPSBwcm9qZWN0LmltZ1syXTtcbiAgICAgICAgaW1nSW5uZXJNb2RlTS5zcmMgPSBwcm9qZWN0LmltZ1sxXTtcbiAgICAgICAgaW1nSW5uZXJNb2RlTURhcmsuc3JjID0gcHJvamVjdC5pbWdbM107XG5cbiAgICAgICAgZGl2SW1nSW5uZXJNb2RlLmFwcGVuZChcbiAgICAgICAgICBpbWdJbm5lck1vZGUsXG4gICAgICAgICAgaW1nSW5uZXJNb2RlTWlycm9yLFxuICAgICAgICAgIGltZ0lubmVyTW9kZURhcmssXG4gICAgICAgICAgaW1nSW5uZXJNb2RlRGFya01pcnJvcixcbiAgICAgICAgICBpbWdJbm5lck1vZGVNLFxuICAgICAgICAgIGltZ0lubmVyTW9kZU1EYXJrLFxuICAgICAgICApO1xuICAgICAgICBkaXZJbWdJbm5lci5hcHBlbmQoZGl2SW1nSW5uZXJNb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlc2t0b3BcbiAgICAgICAgaW1nLnNyYyA9IHByb2plY3QuaW1nWzBdO1xuICAgICAgICBpbWdNaXJyb3Iuc3JjID0gcHJvamVjdC5pbWdbMF07XG4gICAgICAgIGRpdkltZ0lubmVyLmFwcGVuZChpbWcsIGltZ01pcnJvcik7XG5cbiAgICAgICAgLy8gTW9iaWxlXG4gICAgICAgIGlmIChwcm9qZWN0LmltZy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBpbWcyLnNyYyA9IHByb2plY3QuaW1nWzFdO1xuICAgICAgICAgIGRpdkltZ0lubmVyLmFwcGVuZChpbWcyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnQgJSAyID09PSAwKSB7XG4gICAgICAgIGRpdkltZ0lubmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1pbm5lci13cmFwcGVyLWV2ZW5cIik7XG4gICAgICAgIGRpdldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImxhbmRzY2FwZTpmbGV4LXJvdy1yZXZlcnNlXCIpO1xuICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdkltZ0lubmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1pbm5lci13cmFwcGVyXCIpO1xuICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXZJbWdXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW1nLXByb2plY3Qtd3JhcHBlclwiLFxuICAgICAgKTtcbiAgICAgIGRpdkltZ1dyYXBwZXIuYXBwZW5kKGRpdkltZ0lubmVyKTtcbiAgICAgIGRpdkltZ091dGVyLmFwcGVuZChkaXZJbWdXcmFwcGVyKTtcbiAgICAgIGRpdldyYXBwZXIuYXBwZW5kKGRpdkluZm8sIGRpdkltZ091dGVyKTtcbiAgICAgIGNvbnRlbnRQcm9qZWN0cy5pbnNlcnRCZWZvcmUoZGl2V3JhcHBlciwgbGFzdENoaWxkKTtcblxuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2Fyb3VzZWxJbml0KCkge1xuICAgIGNvbnN0IHdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29scy13cmFwcGVyLXByb2plY3RcIik7XG4gICAgY29uc3Qgd3JhcHBlcnNPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi50b29scy13cmFwcGVyLW91dGVyLXByb2plY3RcIixcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gYHRvb2wtcHJvamVjdC0ke2kgKyAxfWA7XG4gICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCkubGVuZ3RoO1xuICAgICAgY2Fyb3VzZWwuY3JlYXRlKFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICB3cmFwcGVyc1tpXSxcbiAgICAgICAgd3JhcHBlcnNPdXRlcltpXSxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIDAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKHRhZywgLi4uY2xhc3NMaXN0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFByb2plY3QgTGlzdFxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIllvdXIgUGVyc29uYWwgRXhwZW5zZSBUcmFja2VyXCIsXG4gICAgICAgIFwiQSA8aT5mdWxsIHN0YWNrPC9pPiBwcm9qZWN0IHRoYXQgZmVhdHVyZXMgdXNlciBjcmVhdGUsIGxvZ2luIGFuZCBsb2dvdXQsIHN0b3JlIGFuZCBkaXNwbGF5IGV4cGVuc2UgZGF0YSBhbmQgc2V0dGluZ3MgdGhhdCBhbGxvdyBuYW1lLCBwYXNzd29yZCBhbmQgY3VycmVuY3kgY2hhbmdlLlwiLFxuICAgICAgICBbaW1nWXBldF0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9jczUweC0yMDIzLXByb2plY3RcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWw4M2t5czl5SkpzXCIsXG4gICAgICAgIHRvb2xzLmdldChcbiAgICAgICAgICBcIkhUTUxcIixcbiAgICAgICAgICBcIkNTU1wiLFxuICAgICAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIFwiUHl0aG9uXCIsXG4gICAgICAgICAgXCJTUUxpdGVcIixcbiAgICAgICAgICBcIkZsYXNrXCIsXG4gICAgICAgICAgXCJCb290c3RyYXBcIixcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJXZWF0aGVyIEFwcFwiLFxuICAgICAgICBcIkEgPGk+ZnJvbnQgZW5kPC9pPiBwcm9qZWN0IHRoYXQgcmV0cmlldmVzIGFuZCBkaXNwbGF5cyB1c2VyLXByb3ZpZGVkIGxvY2F0aW9uJ3Mgd2VhdGhlciBpbmZvIGZyb20gV2VhdGhlckFQSS5jb21cIixcbiAgICAgICAgW2ltZ1dlYXRoZXIsIGltZ1dlYXRoZXJNXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4td2VhdGhlci1hcHBcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi13ZWF0aGVyLWFwcC9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIpLFxuICAgICAgKSxcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIkhvbWVwYWdlXCIsXG4gICAgICAgIFwiWWVzLCB5b3UgYXJlIHZpZXdpbmcgaXQhIE15IGZpcnN0IGFuZCBjdXJyZW50IHBvcnRmb2xpbywgYSA8aT5mcm9udCBlbmQ8L2k+IHByb2plY3QgdGhhdCBmZWF0dXJlcyBpbnRlcmFjdGl2ZSBsYXlvdXQsIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBkYXJrIG1vZGUgb3B0aW9uLlwiLFxuICAgICAgICBbaW1nSG9tZXBhZ2UsIGltZ0hvbWVwYWdlTSwgaW1nSG9tZXBhZ2VELCBpbWdIb21lcGFnZU1EXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4taG9tZXBhZ2VcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi1ob21lcGFnZS9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIsIFwiVGFpbHdpbmQgQ1NTXCIpLFxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IHNjcmVlbk9yaWVudGF0aW9uID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzY3JlZW4ub3JpZW50YXRpb24ub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBtZW51LnJlc2V0T25TY3JlZW5DaGFuZ2UoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5cbmNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25JbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbi1pbnRyb1wiKTtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGxcIik7XG4gIGNvbnN0IGluZm9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXdyYXBwZXIgPiBkaXZcIik7XG5cbiAgY29uc3QgdGhyZXNob2xkID0gMTtcbiAgbGV0IHNocmluayA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfc2hyaW5rT25TY3JvbGwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhyZXNob2xkO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nocmlua09uU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHRocmVzaG9sZCAmJiBzaHJpbmsgPT09IDApIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSwgMyk7XG4gICAgICAgIF9zaHJpbmtJbnRybygpO1xuICAgICAgICBzaHJpbmsgPSAxO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCAmJiBzaHJpbmsgPT09IDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSwgMyk7XG4gICAgICAgIF9zaHJpbmtJbnRybygpO1xuICAgICAgICBzaHJpbmsgPSAwO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfc2hyaW5rSW50cm8oKSB7XG4gICAgc2VjdGlvbkludHJvLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XG4gICAgc2Nyb2xsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIGluZm9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDc3MDAyNS9ob3ctdG8tZGlzYWJsZS1zY3JvbGxpbmctdGVtcG9yYXJpbHlcbiAgLy8gbGVmdDogMzcsIHVwOiAzOCwgcmlnaHQ6IDM5LCBkb3duOiA0MCxcbiAgLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XG4gIGNvbnN0IGtleXMgPSB7IDM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxIH07XG5cbiAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZXJuIENocm9tZSByZXF1aXJlcyB7IHBhc3NpdmU6IGZhbHNlIH0gd2hlbiBhZGRpbmcgZXZlbnRcbiAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0ZXN0XCIsXG4gICAgICBudWxsLFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBsZXQgd2hlZWxPcHQgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgbGV0IHdoZWVsRXZlbnQgPVxuICAgIFwib253aGVlbFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgPyBcIndoZWVsXCIgOiBcIm1vdXNld2hlZWxcIjtcblxuICAvLyBjYWxsIHRoaXMgdG8gRGlzYWJsZVxuICBmdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTsgLy8gb2xkZXIgRkZcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2Rlcm4gZGVza3RvcFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7IC8vIG1vYmlsZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGNhbGwgdGhpcyB0byBFbmFibGVcbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0U2Nyb2xsVGhyZXNob2xkLCBkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiY29uc3QgdGFiQ2xpY2thYmxlID0gKCgpID0+IHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0b2dnbGUoYWJvdXQpO1xuICAgIHRvZ2dsZShwcm9qZWN0cyk7XG4gICAgdG9nZ2xlKGNvbnRhY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKHRhYikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBsaW5rcyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbiAgICBjb25zdCBhcnRpY2xlID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpO1xuXG4gICAgY29uc3QgY2xpY2thYmxlcyA9IFtidXR0b25zLCBsaW5rc107XG5cbiAgICBhcnRpY2xlLmNsYXNzTGlzdC50b2dnbGUoXCJsYW5kc2NhcGU6b3ZlcmZsb3ctaGlkZGVuXCIpO1xuICAgIGNsaWNrYWJsZXMuZm9yRWFjaCgoY2xpY2thYmxlKSA9PiB7XG4gICAgICBjbGlja2FibGUuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImxhbmRzY2FwZTpoaWRkZW5cIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHRvZ2dsZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFiQ2xpY2thYmxlIH07XG4iLCJjb25zdCB0aW1lbGluZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lbGluZS1jb250ZW50XCIpO1xuICBjb25zdCB0aW1lbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZWxpbmVcIik7XG4gIGNvbnN0IGJ0blRpbWVsaW5lVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdGltZWxpbmUtdG9nZ2xlXCIpO1xuXG4gIGNvbnN0IGZ1bGxIZWlnaHQgPSB0aW1lbGluZS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGhhbGZTY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjU7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfYWxpZ25UaW1lbGluZSgpO1xuICAgIF9jaGVja1RpbWVsaW5lSGVpZ2h0KCk7XG4gICAgX2luaXRCdG5Ub2dnbGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hbGlnblRpbWVsaW5lKCkge1xuICAgIGxldCB4ID0gMDtcbiAgICBjb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gMCkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICAgIGVsc2UgY29udGVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgICB4ID0gKyF4O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NoZWNrVGltZWxpbmVIZWlnaHQoKSB7XG4gICAgaWYgKHRpbWVsaW5lLmNsaWVudEhlaWdodCA+IGhhbGZTY3JlZW4pIHtcbiAgICAgIHRpbWVsaW5lLnN0eWxlLmhlaWdodCA9IGhhbGZTY3JlZW4gKyBcInB4XCI7XG4gICAgICB0aW1lbGluZS5jbGFzc0xpc3QudG9nZ2xlKFwibGVzc1wiKTtcbiAgICAgIGJ0blRpbWVsaW5lVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRCdG5Ub2dnbGUoKSB7XG4gICAgYnRuVGltZWxpbmVUb2dnbGUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRpbWVsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJsZXNzXCIpO1xuICAgICAgaWYgKHRpbWVsaW5lLmNsYXNzTGlzdC5jb250YWlucyhcImxlc3NcIikpIHtcbiAgICAgICAgYnRuVGltZWxpbmVUb2dnbGUudGV4dENvbnRlbnQgPSBcIlNIT1cgQUxMXCI7XG4gICAgICAgIHRpbWVsaW5lLnN0eWxlLmhlaWdodCA9IGhhbGZTY3JlZW4gKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG5UaW1lbGluZVRvZ2dsZS50ZXh0Q29udGVudCA9IFwiU0hPVyBMRVNTXCI7XG4gICAgICAgIHRpbWVsaW5lLnN0eWxlLmhlaWdodCA9IGZ1bGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRpbWVsaW5lIH07XG4iLCJjb25zdCB0b29scyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9odG1sNS9odG1sNS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJIVE1MXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2NzczMvY3NzMy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDU1NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkphdmFTY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvd2VicGFjay93ZWJwYWNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIldlYnBhY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamVzdC9qZXN0LXBsYWluLnN2Z1wiLFxuICAgICAgYWx0OiBcIkplc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3Mtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2MvYy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiUHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3NxbGl0ZS9zcWxpdGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiU1FMaXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzczogW1wiZGV2aWNvbi1mbGFzay1vcmlnaW5hbFwiLCBcImNvbG9yZWRcIl0sXG4gICAgICBhbHQ6IFwiRmxhc2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvYm9vdHN0cmFwL2Jvb3RzdHJhcC1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJCb290c3RyYXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdnNjb2RlL3ZzY29kZS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0L2dpdC1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJHaXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXCJkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbFwiLCBcImNvbG9yZWRcIl0sXG4gICAgICBhbHQ6IFwiR2l0SHViXCIsXG4gICAgfSxcbiAgXTtcblxuICBmdW5jdGlvbiBnZXRMaXN0KCkge1xuICAgIHJldHVybiBnZXQoXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICAgIFwiR2l0XCIsXG4gICAgICBcIkdpdEh1YlwiLFxuICAgICAgXCJIVE1MXCIsXG4gICAgICBcIkNTU1wiLFxuICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICBcIldlYnBhY2tcIixcbiAgICAgIFwiSmVzdFwiLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IGdldExpc3QgPSBbXTtcblxuICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgYXJndW1lbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvb2wgb2YgbGlzdCkge1xuICAgICAgICBpZiAoYXJndW1lbnQgPT09IHRvb2wuYWx0KSBnZXRMaXN0LnB1c2godG9vbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldExpc3Q7XG4gIH1cblxuICByZXR1cm4geyBnZXRMaXN0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvb2xzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL2pzL3Njcm9sbFwiO1xuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tIFwiLi9qcy9pbWFnZVwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9qcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9qcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL2pzL21lbnVcIjtcbmltcG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSBcIi4vanMvc2NyZWVuLW9yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBkYXJrTW9kZSB9IGZyb20gXCIuL2pzL2RhcmstbW9kZVwiO1xuaW1wb3J0IHsgdGFiQ2xpY2thYmxlIH0gZnJvbSBcIi4vanMvdGFiLWNsaWNrYWJsZVwiO1xuaW1wb3J0IHsgdGltZWxpbmUgfSBmcm9tIFwiLi9qcy90aW1lbGluZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHNjcm9sbC5pbml0KCk7XG4gIGltYWdlLmluaXQoKTtcbiAgY2Fyb3VzZWwuaW5pdCgpO1xuICBwcm9qZWN0cy5pbml0KCk7XG4gIG1lbnUuaW5pdCgpO1xuICBzY3JlZW5PcmllbnRhdGlvbi5pbml0KCk7XG4gIGRhcmtNb2RlLmluaXQoKTtcbiAgdGFiQ2xpY2thYmxlLmluaXQoKTtcbiAgdGltZWxpbmUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=