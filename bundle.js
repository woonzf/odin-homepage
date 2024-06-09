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
  height: 100%;
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.25rem;
}
@media (orientation: portrait) {

  .border-wrapper {
    height: calc(100% + 16px);
    width: calc(100% + 16px);
  }
}
.border-wrapper {
    background: linear-gradient(to bottom left, rgb(248, 113, 113), transparent 70%);
    background: linear-gradient(to bottom left, var(--theme), transparent 70%);
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
  border-radius: 0.375rem;
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
.img-project-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.img-project-inner-wrapper {
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
    /* More at MEDIA QUERY below*/
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
    -webkit-mask-image: linear-gradient(transparent 80%, rgb(241, 245, 249));
    -webkit-mask-image: linear-gradient(transparent 80%, var(--theme-2));
    mask-image: linear-gradient(transparent 80%, rgb(241, 245, 249));
    mask-image: linear-gradient(transparent 80%, var(--theme-2));
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
.right-\\[-44px\\] {
  right: -44px;
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
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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

.box-underline:after {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  position: absolute;
  left: 0.25rem;
  bottom: 0px;
  height: 2px;
  width: 0px;
  border-radius: 9999px;
  content: "";
  transition: width 500ms ease;
}

.box-underline:hover:after {
  width: calc(100% - 6px);
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

.img-tool {
  transition: transform 1s ease;
}

.img-tool.scaleAbout {
  transform: scale(1.5);
}

#menu {
  opacity: 0;
  transition: opacity 500ms ease;
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
  transition:
    width 1s ease, opacity 1s ease;
}

#bg-left.shrink,
#bg-right.shrink {
  width: 0;
}

#bg-right.shrink ~ #bg-left {
  border-radius: 0.5rem;
  opacity: 0.75;
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
  .img-project {
    transform: rotateY(-20deg);
  }

  .img-project-even {
    transform: rotateY(20deg);
  }

  .border-wrapper {
    background: linear-gradient(to bottom left, rgb(248, 113, 113), transparent 40%);
    background: linear-gradient(to bottom left, var(--theme), transparent 40%);
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

.dark\\:text-theme-2:where(.dark, .dark *) {
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

  .md\\:gap-14 {
    gap: 3.5rem;
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

  .portrait\\:-left-2 {
    left: -0.5rem;
  }

  .portrait\\:-top-2 {
    top: -0.5rem;
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

  .portrait\\:h-\\[105\\%\\] {
    height: 105%;
  }

  .portrait\\:h-\\[calc\\(100svh-56px\\)\\] {
    height: calc(100svh - 56px);
  }

  .portrait\\:h-full {
    height: 100%;
  }

  .portrait\\:w-\\[105\\%\\] {
    width: 105%;
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

  .portrait\\:rounded-md {
    border-radius: 0.375rem;
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

  .landscape\\:-translate-x-2 {
    --tw-translate-x: -0.5rem;
    transform: translate(-0.5rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:-translate-y-2 {
    --tw-translate-y: -0.5rem;
    transform: translate(var(--tw-translate-x), -0.5rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:translate-x-2 {
    --tw-translate-x: 0.5rem;
    transform: translate(0.5rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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

  .landscape\\:translate-y-2 {
    --tw-translate-y: 0.5rem;
    transform: translate(var(--tw-translate-x), 0.5rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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

  @media (min-width: 768px) {

    .landscape\\:md\\:w-\\[calc\\(100vw-2\\*56px\\)\\] {
      width: calc(100vw - 2 * 56px);
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;EACjD,yBAAyB;EACzB,+DAA4D;AAC9D;;AAEA;EACE,+CAA+C;EAC/C,8CAA8C;EAC9C,wBAAwB;EACxB,2BAA2B;EAC3B,6BAA6B;AAC/B;;AAEA,iEAAc;;AAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,8LAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,0BAAc;EAAd,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,uBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,+FAAc;EAAd,wDAAc;EAAd;AAAc;;AAAd;EAAA,iBAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA,mBAAc;IAAd;EAAc;AAAA;;AAAd;EAAA,kBAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA,iBAAc;IAAd;EAAc;AAAA;;AAAd;EAAA,kBAAc;EAAd,wCAAc;EAAd;AAAc;;AAAd;EAAA,kBAAc;EAAd,qCAAc;EAAd;AAAc;;AAAd;EAAA,aAAc;EAAd,YAAc;EAAd,WAAc;EAAd,iBAAc;EAAd,sBAAc;EAAd;AAAc;;AAAd;;EAAA;IAAA;EAAc;AAAA;;AAAd;;EAAA;IAAA,cAAc;IAAd,qBAAc;IAAd,sBAAc;IAAd,oBAAc;IAAd;EAAc;;EAAd;;IAAA;MAAA,qBAAc;MAAd;IAAc;EAAA;AAAA;;AAAd;IAAA,mCAAc;EAAA;;AAAd;;EAAA,oBAAc;EAAd,6BAAc;EAAd;AAAc;;AAAd;;EAAA,oBAAc;EAAd,6BAAc;EAAd;AAAc;;AAAd;;IAAA,oBAAc;EAAA;;AAAd;EAAA,uBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd,cAAc;;AAAd;EAAA;AAAc;;AAAd;EAAA,sBAAc;EAAd,oCAAc;EAAd,2DAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,qBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,sEAAc;EAAd,4DAAc;EAAd,uEAAc;EAAd;AAAc;;AAAd;EAAA,sBAAc;EAAd,iCAAc;EAAd;AAAc;;AAAd;;EAAA,kBAAc;EAAd,wCAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;AAkDV;EAAA,kBAAiB;EAAjB,wCAAiB;EAAjB;AAAiB;AAgBjB;EAAA,kBAAgC;EAAhC,wCAAgC;EAAhC;AAAgC;AAAhC;EAAA,kBAAgC;EAAhC,qCAAgC;EAAhC;AAAgC;AAQhC;EAAA,oBAAoB;EAApB,0BAAoB;EAApB;AAAoB;AAIpB;EAAA,oBAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAInB;EAAA,oBAAqB;EAArB,6BAAqB;EAArB;AAAqB;AAoBrB;EAAA,YAA6F;EAA7F,WAA6F;EAA7F,uBAA6F;EAA7F;AAA6F;AAA7F;;EAAA;IAAA,yBAA6F;IAA7F;EAA6F;AAAA;AAD/F;IAEE,gFAA0E;IAA1E,0EAA0E;EAC5E;AAGE;EAAA,kBAA0C;EAA1C,wCAA0C;EAA1C;AAA0C;AAA1C;EAAA,kBAA0C;EAA1C,qCAA0C;EAA1C;AAA0C;AAA1C;EAAA,YAA0C;EAA1C,WAA0C;EAA1C;AAA0C;AAI1C;EAAA,eAA4B;EAA5B,WAA4B;EAA5B;AAA4B;AAI5B;EAAA,qEAAoC;EAApC,4DAAoC;EAApC,uEAAoC;EAApC;AAAoC;AAIpC;EAAA,oEAAoC;EAApC,4DAAoC;EAApC,uEAAoC;EAApC;AAAoC;AAIpC;EAAA,QAAoD;EAApD,SAAoD;EAApD,YAAoD;EAApD;AAAoD;AAApD;;EAAA;IAAA;EAAoD;AAAA;AAIpD;EAAA,aAAqE;EAArE,YAAqE;EAArE,WAAqE;EAArE,mBAAqE;EAArE;AAAqE;AAArE;;EAAA;IAAA,mBAAqE;IAArE;EAAqE;AAAA;AAIrE;EAAA,kBAAoB;EAApB;AAAoB;AAIpB;EAAA,eAAkD;EAAlD,aAAkD;EAAlD,WAAkD;EAAlD,mBAAkD;EAAlD;AAAkD;AAIlD;EAAA,kBAAgE;EAAhE,wCAAgE;EAAhE,2DAAgE;EAAhE,oBAAgE;EAAhE,6BAAgE;EAAhE;AAAgE;AAAhE;EAAA,kBAAgE;EAAhE,wCAAgE;EAAhE;AAAgE;AAAhE;EAAA,oBAAgE;EAAhE,0BAAgE;EAAhE;AAAgE;AAIhE;EAAA,kBAAkD;EAAlD,wCAAkD;EAAlD;AAAkD;AAAlD;EAAA,kBAAkD;EAAlD,qCAAkD;EAAlD;AAAkD;AAAlD;EAAA,oBAAkD;EAAlD,6BAAkD;EAAlD;AAAkD;AAAlD;EAAA,kBAAkD;EAAlD,wCAAkD;EAAlD;AAAkD;AAAlD;EAAA,kBAAkD;EAAlD,qCAAkD;EAAlD;AAAkD;AAIlD;EAAA,kBAAgE;EAAhE,wCAAgE;EAAhE,2DAAgE;EAAhE,eAAgE;EAAhE,YAAgE;EAAhE,uBAAgE;EAAhE,iBAAgE;EAAhE,kBAAgE;EAAhE,kDAAgE;EAAhE,6DAAgE;EAAhE,uFAAgE;EAAhE,uHAAgE;IAChE;AADgE;AAKhE;;EAAA;IAAA,kBAAoD;IAApD,qCAAoD;IAApD;EAAoD;;EAApD;IAAA,kBAAoD;IAApD,wCAAoD;IAApD;EAAoD;AAAA;AAIpD;EAAA,kBAAsE;EAAtE,wCAAsE;EAAtE;AAAsE;AAAtE;EAAA,kBAAsE;EAAtE,qCAAsE;EAAtE;AAAsE;AAAtE;EAAA,gBAAsE;EAAtE,iBAAsE;EAAtE,mBAAsE;EAAtE,wBAAsE;EAAtE;AAAsE;AAItE;EAAA,aAA0B;EAA1B,sBAA0B;EAA1B;AAA0B;AAI1B;EAAA,kBAAmE;EAAnE,wCAAmE;EAAnE;AAAmE;AAAnE;EAAA,kBAAmE;EAAnE,qCAAmE;EAAnE;AAAmE;AAAnE;EAAA,WAAmE;EAAnE;AAAmE;AAAnE;;EAAA;IAAA,gBAAmE;IAAnE;EAAmE;AAAA;AAInE;EAAA,aAA2D;EAA3D,sBAA2D;EAA3D,YAA2D;EAA3D;AAA2D;AAA3D;;EAAA;IAAA;EAA2D;AAAA;AAD7D;IAEE,0BAA0B;EAC5B;AAEA;IACE,wEAAoE;IAApE,oEAAoE;IACpE,gEAA4D;IAA5D,4DAA4D;EAC9D;AAGE;EAAA,kBAA4H;EAA5H,qCAA4H;EAA5H,wDAA4H;EAA5H,kBAA4H;EAA5H,QAA4H;EAA5H,SAA4H;EAA5H,aAA4H;EAA5H,YAA4H;EAA5H;AAA4H;AAA5H;;EAAA;IAAA;EAA4H;AAAA;AAA5H;;EAAA;IAAA,sBAA4H;IAA5H,8KAA4H;IAA5H;EAA4H;AAAA;AAA5H;EAAA,kBAA4H;EAA5H,wCAA4H;EAA5H;AAA4H;AAD9H;IAEE,WAAW;EACb;AAGE;EAAA;AAAiC;AAAjC;;EAAA;IAAA;EAAiC;AAAA;AAIjC;EAAA,kBAA0L;EAA1L,wCAA0L;EAA1L;AAA0L;AAA1L;EAAA,kBAA0L;EAA1L,qCAA0L;EAA1L;AAA0L;AAA1L;EAAA,sBAA0L;EAA1L,iCAA0L;EAA1L,wDAA0L;EAA1L,kBAA0L;EAA1L,QAA0L;EAA1L,UAA0L;EAA1L,oBAA0L;EAA1L,mBAA0L;EAA1L,YAA0L;EAA1L,qBAA0L;EAA1L;AAA0L;AAA1L;EAAA,kBAA0L;EAA1L,wCAA0L;EAA1L;AAA0L;AAA1L;;EAAA;IAAA;EAA0L;AAAA;AAA1L;;EAAA;IAAA,QAA0L;IAA1L;EAA0L;AAAA;AAA1L;EAAA,sBAA0L;EAA1L,oCAA0L;EAA1L;AAA0L;AAD5L;IAEE,WAAW;IACX,uCAAuC;EACzC;AAGE;;EAAA;IAAA;EAAyB;;EAIzB;IAAA;EAA2B;;EAI3B;IAAA;EAAuB;AARE;AAYzB;EAAA,kBAAqC;EAArC,oBAAqC;EAArC;AAAqC;AAArC;;EAAA;IAAA;EAAqC;AAAA;AAIrC;;EAAA;IAAA;EAAyB;AAAA;AAIzB;EAAA,aAAkF;EAAlF,UAAkF;EAAlF,YAAkF;EAAlF;AAAkF;AAAlF;;EAAA;IAAA;EAAkF;AAAA;AAAlF;;EAAA;IAAA,oBAAkF;IAAlF;EAAkF;AAAA;AAIlF;EAAA,oBAAyG;EAAzG,6BAAyG;EAAzG,kDAAyG;EAAzG,kBAAyG;EAAzG,QAAyG;EAAzG,SAAyG;EAAzG,aAAyG;EAAzG,sBAAyG;EAAzG,sBAAyG;EAAzG,6JAAyG;EAAzG,+LAAyG;EAAzG,kBAAyG;EAAzG;AAAyG;AAAzG;;EAAA;IAAA,iBAAyG;IAAzG;EAAyG;AAAA;AAIzG;EAAA,aAAoD;EAApD,WAAoD;EAApD,sBAAoD;EAApD,6BAAoD;EAApD,YAAoD;EAApD;AAAoD;AAIpD;EAAA,aAA8C;EAA9C,WAA8C;EAA9C,mBAA8C;EAA9C;AAA8C;AAI9C;EAAA,aAA2E;EAA3E,WAA2E;EAA3E,mBAA2E;EAA3E;AAA2E;AAA3E;;EAAA;IAAA,sBAA2E;IAA3E,8KAA2E;IAA3E;EAA2E;AAAA;AAD7E;IAGE,kBAAkB;EACpB;AAIE;;EAAA,kBAAqB;EAArB,UAAqB;IACrB,6BAA6B;AADR;AAMrB;;EAAA,kBAA4C;EAA5C,QAA4C;EAA5C;AAA4C;AAA5C;;EAAA;;IAAA;EAA4C;AAAA;AAF9C;;IAGE,wEAAoE;IAApE,oEAAoE;IACpE,gEAA4D;IAA5D,4DAA4D;EAC9D;AAEA;IACE,uEAAuE;EACzE;AAEA;IACE,sEAAsE;EACxE;AAGE;EAAA,OAAmE;EAAnE,UAAmE;EAAnE,YAAmE;EAAnE,uBAAmE;EAAnE,iBAAmE;EAAnE,sBAAmE;EAAnE,8BAAmE;EAAnE;AAAmE;AAKnE;;EAAA;AAAa;AAIb;EAAA,aAAmD;EAAnD,WAAmD;EAAnD,uBAAmD;EAAnD;AAAmD;AAInD;EAAA,aAAwB;EAAxB;AAAwB;AAKxB;;EAAA,aAAqD;EAArD,mBAAqD;EAArD,mBAAqD;EAArD;AAAqD;AAIrD;EAAA,iBAAiC;EAAjC,gBAAiC;EAAjC,mBAAiC;EAAjC;AAAiC;AAIjC;EAAA,mBAAyC;EAAzC;AAAyC;AAAzC;;EAAA;IAAA;EAAyC;AAAA;AAG3C;;IAEE,2BAA2B;EAC7B;AAGE;EAAA;AAAiC;AAAjC;EAAA;AAAiC;AAIjC;EAAA;AAAiC;AAAjC;EAAA;AAAiC;AAKjC;;EAAA,mBAAyC;EAAzC;AAAyC;AAAzC;;EAAA;;IAAA;EAAyC;AAAA;AAIzC;EAAA;AAAiC;AAAjC;;EAAA;IAAA;EAAiC;AAAA;AAIjC;EAAA,kBAAiB;EAAjB,wCAAiB;EAAjB;AAAiB;AAAjB;EAAA,kBAAiB;EAAjB,qCAAiB;EAAjB;AAAiB;AAIjB;EAAA,oBAAmC;EAAnC,6BAAmC;EAAnC;AAAmC;AAAnC;EAAA,oBAAmC;EAAnC,0BAAmC;EAAnC;AAAmC;AAtTvC;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB,iBAAmB;EAAnB,mKAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,gLAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,yBAAmB;KAAnB,sBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AA4Tf;;EAAA;IAAA,yCAA0G;IAA1G,wDAA0G;IAA1G,8EAA0G;IAA1G;EAA0G;;EAA1G;IAAA,4CAA0G;IAA1G,wDAA0G;IAA1G,iFAA0G;IAA1G;EAA0G;AAAA;;AAI9G;EACE,+GAAgD;AAClD;;AAGE;EAAA,kBAAiE;EAAjE,wCAAiE;EAAjE,2DAAiE;EAAjE,kBAAiE;EAAjE,aAAiE;EAAjE,WAAiE;EAAjE,WAAiE;EAAjE,UAAiE;EAAjE,qBAAiE;EACjE,WAAW;EACX;AAFiE;;AAMjE;EAAA;AAAyB;;AAG3B;EACE;;;;;GAKC;EALD;;;;;GAKC;EALD;;;;;GAKC;EACD;;;;;GAKC;EALD;;;;;GAKC;EALD;;;;;GAKC;EACD,8BAA8B;AAChC;;AAdA;AAAA;EACE;;;;;GAKC;EACD;;;;;GAKC;AAEH;AAAA;;AAEA,eAAe;;AAEf;;EAEE,gCAAgC;AAClC;;AAEA;;;EAGE,gCAAgC;AAClC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE;kCAEiB;AACnB;;AAEA;;EAEE,QAAQ;AACV;;AAGE;EAAA,qBAA4B;EAA5B;AAA4B;;AAG9B;;EAEE,0BAA0B;AAC5B;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;;;EAGE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,cAAc;;AAEd;EACE,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,UAAU;EACV,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA,2BAA2B;;AAE3B;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA;EACE;;IAEE,eAAe;IACf,qDAAmD;IAAnD,mDAAmD;EACrD;EACA;IACE,0BAA0B;IAC1B,qDAAkD;IAAlD,kDAAkD;EACpD;AACF;;AAEA;EACE;;IAEE,eAAe;IACf,qDAAmD;IAAnD,mDAAmD;EACrD;EACA;IACE,0BAA+C;IAA/C,+CAA+C;IAC/C,qDAAkD;IAAlD,kDAAkD;EACpD;AACF;;AAEA;EACE;;IAEE,wBAAwB;IACxB,qDAAmD;IAAnD,mDAAmD;EACrD;EACA;IACE,wCAA6D;IAA7D,6DAA6D;IAC7D,qDAAkD;IAAlD,kDAAkD;EACpD;AACF;;AAEA;EACE;;IAEE,yBAAyB;IACzB,qDAAmD;IAAnD,mDAAmD;EACrD;EACA;IACE,yCAA8D;IAA9D,8DAA8D;IAC9D,qDAAkD;IAAlD,kDAAkD;EACpD;AACF;;AAEA,gBAAgB;;AAEhB;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gFAA0E;IAA1E,0EAA0E;EAC5E;AACF;;AAEA;EACE;IACE;;;;;KAKC;IALD;;;;;KAKC;IALD;;;;;KAKC;IACD;;;;;KAKC;IALD;;;;;KAKC;IALD;;;;;KAKC;EACH;;AAbA;AAAA;IACE;;;;;KAKC;IACD;;;;;KAKC;EACH;AAAA;AACF;;AA1fI;EAAA,oBAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;;AAInB;EAAA,oBAAqB;EAArB,6BAAqB;EAArB;AAAqB;;AAhGzB;EAAA,iBAulBA;EAvlBA,iBAulBA;EAvlBA,mKAulBA;EAvlBA;AAulBA;;AAvlBA;EAAA,kBAulBA;EAvlBA,kBAulBA;EAvlBA,qKAulBA;EAvlBA;AAulBA;;AAvlBA;;EAAA;IAAA;EAulBA;AAAA;;AAvlBA;;EAAA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,qBAulBA;IAvlBA,6KAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,eAulBA;IAvlBA,eAulBA;IAvlBA,+JAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,oBAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,iBAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,mBAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,mBAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,kBAulBA;IAvlBA;EAulBA;AAAA;;AAvlBA;;EAAA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;AAAA;;AAvlBA;;EAAA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,iBAulBA;IAvlBA,mLAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;;IAAA;MAAA;IAulBA;;IAvlBA;MAAA;IAulBA;EAAA;AAAA;;AAvlBA;;EAAA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,yBAulBA;IAvlBA,iLAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,yBAulBA;IAvlBA,iLAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,wBAulBA;IAvlBA,gLAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,uBAulBA;IAvlBA,+KAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,sBAulBA;IAvlBA,8KAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,wBAulBA;IAvlBA,gLAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,sBAulBA;IAvlBA,8KAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,8BAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA,+BAulBA;IAvlBA;EAulBA;;EAvlBA;IAAA;EAulBA;;EAvlBA;IAAA,oBAulBA;IAvlBA;EAulBA;;EAvlBA;;IAAA;MAAA;IAulBA;EAAA;AAAA","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n:root {\n  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);\n  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);\n  --bounce-translateY: 25%;\n  --theme: rgb(248, 113, 113);\n  --theme-2: rgb(241, 245, 249);\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-2xl md:text-3xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full w-full max-w-screen-lg landscape:px-5 landscape:md:px-9 landscape:py-7 flex flex-col justify-around landscape:overflow-auto;\n    scrollbar-gutter: stable both-edges;\n  }\n\n  a.disabled,\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n\n  button {\n    @apply px-1 rounded-md;\n  }\n\n  /* Scrollbar */\n\n  ::-webkit-scrollbar {\n    @apply w-5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-gradient-to-b from-red-400 border-solid border-x-4 border-y-0 border-theme-2 dark:border-dark;\n  }\n\n  ::-webkit-scrollbar-thumb:hover,\n  ::-webkit-scrollbar-thumb:active {\n    @apply bg-theme;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-fade {\n    @apply bg-red-300;\n  }\n\n  .bg-dark {\n    @apply bg-zinc-800;\n  }\n\n  .bg-dark-fade {\n    @apply bg-zinc-700;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100 dark:bg-dark;\n  }\n\n  .bg-theme-2-fade {\n    @apply bg-slate-200 dark:bg-dark-fade;\n  }\n\n  .text-light {\n    @apply text-zinc-800;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .border-dark {\n    @apply border-zinc-800;\n  }\n\n  .border-theme-2 {\n    @apply border-slate-100;\n  }\n\n  .border-wrapper {\n    @apply h-full portrait:h-[calc(100%+16px)] w-full portrait:w-[calc(100%+16px)] p-1 rounded-md;\n    background: linear-gradient(to bottom left, var(--theme), transparent 70%);\n  }\n\n  .border-inner-wrapper {\n    @apply bg-theme-2 h-full w-full rounded-md;\n  }\n\n  .divider-theme {\n    @apply h-1 w-full rounded-sm;\n  }\n\n  .divider-theme.left {\n    @apply bg-gradient-to-r from-red-400;\n  }\n\n  .divider-theme.right {\n    @apply bg-gradient-to-l from-red-400;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .btn-nav-wrapper {\n    @apply w-36 absolute;\n  }\n\n  .btn-nav {\n    @apply w-36 flex justify-center items-center fixed;\n  }\n\n  .btn-theme {\n    @apply bg-theme-fade hover:bg-theme text-theme-2 dark:text-light;\n  }\n\n  .btn-theme-2 {\n    @apply bg-theme-2-fade hover:bg-theme-2 text-theme;\n  }\n\n  .btn-dark-mode {\n    @apply bg-theme h-[24px] aspect-[2] px-0 rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode:hover {\n    @apply landscape:bg-dark landscape:dark:bg-slate-100;\n  }\n\n  .dark-mode-ball {\n    @apply bg-theme-2 h-[calc(100%-4px)] aspect-square mx-[2px] rounded-md;\n  }\n\n  .article-inner-wrapper {\n    @apply flex flex-col gap-7;\n  }\n\n  .article-title {\n    @apply bg-theme-2 w-full portrait:sticky portrait:top-[55px] z-[96];\n  }\n\n  .timeline {\n    @apply landscape:w-full flex flex-col gap-5 overflow-hidden;\n    transition: height 1s ease;\n  }\n\n  .timeline.less {\n    -webkit-mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n    mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n  }\n\n  .timeline:after {\n    @apply bg-dark dark:bg-slate-100 h-full w-1 absolute top-0 left-[50%] portrait:left-[5%] landscape:translate-x-[-50%] z-auto;\n    content: \"\";\n  }\n\n  .timeline-content {\n    @apply landscape:w-[50%] relative;\n  }\n\n  .timeline-content:after {\n    @apply bg-theme-2 hover:bg-theme h-4 aspect-square -ml-2 portrait:-ml-1.5 border-4 border-dark dark:border-slate-100 rounded-full absolute top-[2px] md:top-[6px] portrait:left-[5%] z-[1];\n    content: \"\";\n    transition: background-color 500ms ease;\n  }\n\n  .timeline-content:after.left {\n    @apply landscape:-right-2;\n  }\n\n  .timeline-content.right {\n    @apply landscape:left-[50%];\n  }\n\n  .timeline-content.left {\n    @apply landscape:left-0;\n  }\n\n  .timeline-inner-content {\n    @apply px-10 relative portrait:left-4;\n  }\n\n  .timeline-content.left .timeline-inner-content > p {\n    @apply landscape:text-end;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] landscape:py-7 flex portrait:flex-col-reverse gap-5 overflow-y-clip;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-6xl md:text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-wrapper {\n    @apply w-full flex justify-center items-center;\n  }\n\n  .img-project-inner-wrapper {\n    @apply w-full flex justify-center items-center landscape:translate-y-[-10%];\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project,\n  .img-project-even {\n    @apply relative z-[1];\n    /* More at MEDIA QUERY below*/\n  }\n\n  .img-project-mirror,\n  .img-project-mirror-even {\n    @apply absolute top-0 z-auto portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, var(--theme-2));\n    mask-image: linear-gradient(transparent 80%, var(--theme-2));\n  }\n\n  .img-project-mirror {\n    transform: translateY(calc(100% + 2px)) rotateY(-20deg) rotateX(180deg);\n  }\n\n  .img-project-mirror-even {\n    transform: translateY(calc(100% + 2px)) rotateY(20deg) rotateX(180deg);\n  }\n\n  .img-project-m {\n    @apply h-full border-2 border-black rounded-md top-[5%] right-[-5%];\n  }\n\n  .img-project-mirror > .img-project-m,\n  .img-project-mirror-even > .img-project-m {\n    @apply hidden;\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n\n  .tool-about,\n  [class^=\"tool-project\"] {\n    @apply aspect-square flex justify-center items-center;\n  }\n\n  .p-contact {\n    @apply py-0 text-left text-nowrap;\n  }\n\n  .icon-contact-wrapper {\n    @apply h-[40px] sm:h-[50px] aspect-square;\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 1s ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0;\n  }\n\n  .icon-contact-link-wrapper,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] aspect-square;\n  }\n\n  .icon-contact-link-i {\n    @apply text-[30px] sm:text-[40px];\n  }\n\n  .stroke-contact {\n    @apply bg-theme-2;\n  }\n\n  .initial-contact {\n    @apply text-theme-2 dark:text-light;\n  }\n}\n\n@layer utilities {\n  #contact-card {\n    @apply landscape:shadow-[2px_2px_10px_rgb(39_39_42)] landscape:dark:shadow-[0px_0px_10px_rgb(241_245_249)];\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.box-underline:after {\n  @apply h-[2px] w-0 bg-theme rounded-full absolute left-1 bottom-0;\n  content: \"\";\n  transition: width 500ms ease;\n}\n\n.box-underline:hover:after {\n  @apply w-[calc(100%-6px)];\n}\n\n.fade-side {\n  -webkit-mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  /* More at MEDIA QUERY BELOW */\n}\n\n/* Transition */\n\na,\n#btn-timeline-toggle {\n  transition: transform 500ms ease;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n.dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n.dark-mode-ball.dark {\n  transform: translateX(calc(100% + 4px));\n}\n\n.img-tool {\n  transition: transform 1s ease;\n}\n\n.img-tool.scaleAbout {\n  transform: scale(1.5);\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 500ms ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#hello-wrapper {\n  transition: transform 1s ease;\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#bg-left,\n#bg-right {\n  transition:\n    width 1s ease,\n    opacity 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-right.shrink ~ #bg-left {\n  @apply rounded-lg opacity-75;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide {\n  opacity: 0;\n}\n\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n/* ANIMATION */\n\n[class^=\"animate\"] {\n  will-change: animation;\n}\n\n.animate-hello {\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  opacity: 0;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/* Tailwind Bounce Custom */\n\n.animate-bounce-x {\n  animation: bounce-x 1s infinite;\n}\n\n.animate-bounce-y {\n  animation: bounce-y 3s infinite;\n}\n\n.animate-bounce-y-90 {\n  transform: rotate(90deg);\n  animation: bounce-y-90 3s infinite;\n}\n\n.animate-bounce-y-n90 {\n  transform: rotate(-90deg);\n  animation: bounce-y-n90 3s infinite;\n}\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-90 {\n  0%,\n  33% {\n    transform: rotate(90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-n90 {\n  0%,\n  33% {\n    transform: rotate(-90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(-90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n/* MEDIA QUERY */\n\n@media (orientation: landscape) {\n  .img-project {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-even {\n    transform: rotateY(20deg);\n  }\n\n  .border-wrapper {\n    background: linear-gradient(to bottom left, var(--theme), transparent 40%);\n  }\n}\n\n@media (min-width: 768px) {\n  .fade-side {\n    -webkit-mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n    mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/profile-2-640w.jpg */ "./src/img/profile-2-640w.jpg");
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
    profile.src = _img_profile_2_640w_jpg__WEBPACK_IMPORTED_MODULE_1__;

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
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenu = document.querySelector("#btn-menu");
  const btnMenuBack = document.querySelector("#btn-menu-back");

  const btnHomeP = document.querySelector("#btn-home-p");
  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const menu = document.querySelector("#menu");
  const helloWrapper = document.querySelector("#hello-wrapper");

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

    btnAboutL.onclick = () => {
      _openTab(about, 2, btnAboutL);
    };
    btnProjectsL.onclick = () => {
      _openTab(projects, 1, btnProjectsL);
    };
    btnContactL.onclick = () => {
      _openTab(contact, 2, btnContactL);
    };

    btnBacks.forEach((btn) => {
      btn.onclick = () => {
        _closeTab();
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
      }, 500);

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
    helloWrapper.classList.toggle("hide");
    _background__WEBPACK_IMPORTED_MODULE_0__.background.shrink(bg);
  }

  function _toggleMenuCooldown() {
    btnMenu.disabled = true;
    btnMenuBack.disabled = true;
    setTimeout(() => {
      btnMenu.disabled = false;
      btnMenuBack.disabled = false;
    }, 500);
  }

  function _scrollTo(content, offset) {
    if (content === 0 && offset === 0) window.scrollTo(0, 0);
    else {
      content.scrollIntoView();
      if (offset === 1) window.scrollBy(0, -56 - 28);
    }
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
        divider.classList.add("right");
      } else {
        divImgInner.classList.add("img-project");
        divImgInnerMirror.classList.add("img-project-mirror");
        divider.classList.add("left");
      }

      const divImgInnerWrapper = _createElementWithClass(
        "div",
        "img-project-inner-wrapper",
      );
      divImgInnerWrapper.append(divImgInner, divImgInnerMirror);
      divImg.append(divImgInnerWrapper);
      divWrapper.append(divInfo, divImg);
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
        "A <i>front end</i> project that retrieves and displays user-provided location's weather info from WeatherAPI.com",
        [_img_projects_weather_d_450w_png__WEBPACK_IMPORTED_MODULE_5__, _img_projects_weather_m_200w_jpg__WEBPACK_IMPORTED_MODULE_6__],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Homepage",
        "Yes, you are viewing it! My first and current portfolio, a <i>front end</i> project that features interactive layout, responsive design and dark mode option.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLGFBQWEsS0FBSyxPQUFPLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVcsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLE1BQU0sV0FBVyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLFFBQVEsS0FBSyxLQUFLLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxlQUFlLE9BQU8sUUFBUSxPQUFPLFlBQVksY0FBYyxlQUFlLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLFFBQVEsT0FBTyxhQUFhLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxLQUFLLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtB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Ozs7Ozs7Ozs7Ozs7O0FDN0J4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0NwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNGO0FBQ007QUFDQTtBQUNSO0FBQzJCO0FBQ2xCO0FBQ1E7QUFDVDs7QUFFekM7QUFDQSxFQUFFLDhDQUFNO0FBQ1IsRUFBRSw0Q0FBSztBQUNQLEVBQUUsa0RBQVE7QUFDVixFQUFFLGtEQUFRO0FBQ1YsRUFBRSwwQ0FBSTtBQUNOLEVBQUUscUVBQWlCO0FBQ25CLEVBQUUsbURBQVE7QUFDVixFQUFFLDJEQUFZO0FBQ2QsRUFBRSxrREFBUTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2xhc3MtUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2ltYWdlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2NyZWVuLW9yaWVudGF0aW9uLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdGFiLWNsaWNrYWJsZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3RpbWVsaW5lLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvTW9udHNlcnJhdC1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJUcnVlVHlwZVwiKTtcbn1cblxuOnJvb3Qge1xuICAtLXRpbWluZy1ib3VuY2UtMTAwOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgLS10aW1pbmctYm91bmNlLTUwOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgLS1ib3VuY2UtdHJhbnNsYXRlWTogMjUlO1xuICAtLXRoZW1lOiByZ2IoMjQ4LCAxMTMsIDExMyk7XG4gIC0tdGhlbWUtMjogcmdiKDI0MSwgMjQ1LCAyNDkpO1xufVxuXG4vKiAhIHRhaWx3aW5kY3NzIHYzLjQuMyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cblxuLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcbmlucHV0OndoZXJlKFt0eXBlPSdidXR0b24nXSksXG5pbnB1dDp3aGVyZShbdHlwZT0ncmVzZXQnXSksXG5pbnB1dDp3aGVyZShbdHlwZT0nc3VibWl0J10pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cblxuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5ICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwbXM7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxufVxuXG5hcnRpY2xlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuYXJ0aWNsZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIGFydGljbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIGFydGljbGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICBhcnRpY2xlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVyZW07XG4gICAgfVxuICB9XG59XG5cbmFydGljbGUge1xuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xuICB9XG5cbmEuZGlzYWJsZWQsXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCAxKTtcbiAgY29sb3I6IHJnYmEoMTYxLCAxNjEsIDE3MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmEuZGlzYWJsZWQ6d2hlcmUoLmRhcmssIC5kYXJrICopLFxuICBidXR0b246ZGlzYWJsZWQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIDEpO1xuICBjb2xvcjogcmdiYSgxMTMsIDExMywgMTIyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYS5kaXNhYmxlZCxcbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xufVxuXG4vKiBTY3JvbGxiYXIgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxLjI1cmVtO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xuICAtLXR3LWdyYWRpZW50LWZyb206ICNmODcxNzEgdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMjQ4LCAxMTMsIDExMywgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuXG46d2hlcmUoLmRhcmssIC5kYXJrICopOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uYmctdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi50ZXh0LWxpZ2h0IHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJvcmRlci13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5ib3JkZXItd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxNnB4KTtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTZweCk7XG4gIH1cbn1cbi5ib3JkZXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2IoMjQ4LCAxMTMsIDExMyksIHRyYW5zcGFyZW50IDcwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCB2YXIoLS10aGVtZSksIHRyYW5zcGFyZW50IDcwJSk7XG4gIH1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLWlubmVyLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmRpdmlkZXItdGhlbWUge1xuICBoZWlnaHQ6IDAuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbn1cbi5kaXZpZGVyLXRoZW1lLmxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2Y4NzE3MSB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC10bzogcmdiYSgyNDgsIDExMywgMTEzLCAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG4uZGl2aWRlci10aGVtZS5yaWdodCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xuICAtLXR3LWdyYWRpZW50LWZyb206ICNmODcxNzEgdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMjQ4LCAxMTMsIDExMywgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbi5jb250ZW50LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbiAgfVxufVxuLmJ0bi1uYXYtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDlyZW07XG59XG4uYnRuLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDlyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bi10aGVtZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDE2NSwgMTY1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDE2NSwgMTY1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgNzAsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgNzAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTI6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOmhvdmVyOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIGFzcGVjdC1yYXRpbzogMjtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgLS10dy1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IGluc2V0IDAgMnB4IDRweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmJ0bi1kYXJrLW1vZGU6aG92ZXIge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICB9XG5cbiAgLmJ0bi1kYXJrLW1vZGU6aG92ZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4uYXJ0aWNsZS1pbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjc1cmVtO1xufVxuLmFydGljbGUtdGl0bGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmFydGljbGUtdGl0bGU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hcnRpY2xlLXRpdGxlIHtcbiAgei1pbmRleDogOTY7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDU1cHg7XG4gIH1cbn1cbi50aW1lbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi50aW1lbGluZSB7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gIH1cbi50aW1lbGluZS5sZXNzIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjQxLCAyNDUsIDI0OSkgNTAlLCB0cmFuc3BhcmVudCk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGhlbWUtMikgNTAlLCB0cmFuc3BhcmVudCk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNDEsIDI0NSwgMjQ5KSA1MCUsIHRyYW5zcGFyZW50KTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGhlbWUtMikgNTAlLCB0cmFuc3BhcmVudCk7XG4gIH1cbi50aW1lbGluZTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMC4yNXJlbTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnRpbWVsaW5lOmFmdGVyIHtcbiAgICBsZWZ0OiA1JTtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLnRpbWVsaW5lOmFmdGVyIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxufVxuLnRpbWVsaW5lOndoZXJlKC5kYXJrLCAuZGFyayAqKTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGltZWxpbmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbi50aW1lbGluZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi50aW1lbGluZS1jb250ZW50OndoZXJlKC5kYXJrLCAuZGFyayAqKTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGltZWxpbmUtY29udGVudDphZnRlciB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG59XG4udGltZWxpbmUtY29udGVudDpob3ZlcjphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAudGltZWxpbmUtY29udGVudDphZnRlciB7XG4gICAgdG9wOiA2cHg7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIGxlZnQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMC4zNzVyZW07XG4gIH1cbn1cbi50aW1lbGluZS1jb250ZW50OndoZXJlKC5kYXJrLCAuZGFyayAqKTphZnRlciB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4udGltZWxpbmUtY29udGVudDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XG4gIH1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZS1jb250ZW50LmxlZnQ6YWZ0ZXIge1xuICAgIHJpZ2h0OiAtMC41cmVtO1xuICB9XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQucmlnaHQge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50LmxlZnQge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuLnRpbWVsaW5lLWlubmVyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC50aW1lbGluZS1pbm5lci1jb250ZW50IHtcbiAgICBsZWZ0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAudGltZWxpbmUtY29udGVudC5sZWZ0IC50aW1lbGluZS1pbm5lci1jb250ZW50ID4gcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbi5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGdhcDogMS4yNXJlbTtcbiAgb3ZlcmZsb3cteTogY2xpcDtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmNvbnRlbnQtd3JhcHBlci1wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gIH1cbn1cbi5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IGF1dG87XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0yNSU7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC0yNSUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmluZGV4LXByb2plY3Qtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbi5pbmZvLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmltZy1wcm9qZWN0LWlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XG4gICAgLS10dy10cmFuc2xhdGUteTogLTEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0xMCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyIHtcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG4gIH1cbi5pbWctcHJvamVjdCxcbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gICAgLyogTW9yZSBhdCBNRURJQSBRVUVSWSBiZWxvdyovXG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCByZ2IoMjQxLCAyNDUsIDI0OSkpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgdmFyKC0tdGhlbWUtMikpO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHJnYigyNDEsIDI0NSwgMjQ5KSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgdmFyKC0tdGhlbWUtMikpO1xuICB9XG4uaW1nLXByb2plY3QtbWlycm9yIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxuLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgyMGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG4uaW1nLXByb2plY3QtbSB7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiAtNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmltZy1wcm9qZWN0LW1pcnJvciA+IC5pbWctcHJvamVjdC1tLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4gPiAuaW1nLXByb2plY3QtbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4udG9vbHMtd3JhcHBlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b29sLWFib3V0LFxuICBbY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucC1jb250YWN0IHtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaWNvbi1jb250YWN0LXdyYXBwZXIge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1jb250YWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuLmljb24tbW9kZS1kYXJrLFxuICAuaWNvbi1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gIH1cbi5pY29uLW1vZGUtZGFyayB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1tb2RlLWRhcms6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLW1vZGUge1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tY29udGFjdC1saW5rLXdyYXBwZXIsXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWNvbnRhY3QtbGluay13cmFwcGVyLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuLmljb24tY29udGFjdC1saW5rLWkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1jb250YWN0LWxpbmstaSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG4uc3Ryb2tlLWNvbnRhY3Qge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnN0cm9rZS1jb250YWN0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uaW5pdGlhbC1jb250YWN0IHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5pbml0aWFsLWNvbnRhY3Q6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LVxcXFxbLTQ0cHhcXFxcXSB7XG4gIGxlZnQ6IC00NHB4O1xufVxuLmxlZnQtXFxcXFsyOHB4XFxcXF0ge1xuICBsZWZ0OiAyOHB4O1xufVxuLmxlZnQtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICBsZWZ0OiA1MCU7XG59XG4ubGVmdC1cXFxcW2NhbGNcXFxcKDUwXFxcXCUtNzJweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDcycHgpO1xufVxuLnJpZ2h0LVxcXFxbLTQ0cHhcXFxcXSB7XG4gIHJpZ2h0OiAtNDRweDtcbn1cbi5yaWdodC1cXFxcWzI4cHhcXFxcXSB7XG4gIHJpZ2h0OiAyOHB4O1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzYycHhcXFxcXSB7XG4gIHRvcDogNjJweDtcbn1cbi50b3AtXFxcXFtjYWxjXFxcXCg1MFxcXFwlLTE0cHhcXFxcKVxcXFxdIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xufVxuLnotXFxcXFsxXFxcXF0ge1xuICB6LWluZGV4OiAxO1xufVxuLnotXFxcXFsyXFxcXF0ge1xuICB6LWluZGV4OiAyO1xufVxuLnotXFxcXFs5N1xcXFxdIHtcbiAgei1pbmRleDogOTc7XG59XG4uei1cXFxcWzk4XFxcXF0ge1xuICB6LWluZGV4OiA5ODtcbn1cbi56LVxcXFxbOTlcXFxcXSB7XG4gIHotaW5kZXg6IDk5O1xufVxuLnotYXV0byB7XG4gIHotaW5kZXg6IGF1dG87XG59XG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxO1xufVxuLm9yZGVyLTIge1xuICBvcmRlcjogMjtcbn1cbi5tdC0wIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm10LTBcXFxcLjUge1xuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbn1cbi5tdC1cXFxcWy01NnB4XFxcXF0ge1xuICBtYXJnaW4tdG9wOiAtNTZweDtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFzcGVjdC1cXFxcWzNcXFxcXSB7XG4gIGFzcGVjdC1yYXRpbzogMztcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5oLTFcXFxcLzIge1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5oLTFcXFxcLzQge1xuICBoZWlnaHQ6IDI1JTtcbn1cbi5oLTE0IHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG4uaC1cXFxcWzE0cHhcXFxcXSB7XG4gIGhlaWdodDogMTRweDtcbn1cbi5oLVxcXFxbMTZweFxcXFxdIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmgtXFxcXFsyNHB4XFxcXF0ge1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uaC1cXFxcWzI1MFxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDI1MCU7XG59XG4uaC1cXFxcWzMwMFxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDMwMCU7XG59XG4uaC1cXFxcW2NhbGNcXFxcKDEwMHZoLTJcXFxcKjU2cHhcXFxcKVxcXFxdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LTFcXFxcLzQge1xuICB3aWR0aDogMjUlO1xufVxuLnctM1xcXFwvNCB7XG4gIHdpZHRoOiA3NSU7XG59XG4udy0zNiB7XG4gIHdpZHRoOiA5cmVtO1xufVxuLnctXFxcXFszMFxcXFwlXFxcXF0ge1xuICB3aWR0aDogMzAlO1xufVxuLnctXFxcXFtjYWxjXFxcXCgxMDBcXFxcJS04cHhcXFxcKVxcXFxdIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMHZ3LTJcXFxcKjQwcHhcXFxcKVxcXFxdIHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNDBweCk7XG59XG4udy1maXQge1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1heC13LTJ4bCB7XG4gIG1heC13aWR0aDogNDJyZW07XG59XG4ubWF4LXcteGwge1xuICBtYXgtd2lkdGg6IDM2cmVtO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTEwMFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstNTBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTIyMFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtMjIwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjVcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteTogLTI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtMjUlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtNDUge1xuICAtLXR3LXJvdGF0ZTogNDVkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoNDVkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS1cXFxcWy0yN2RlZ1xcXFxdIHtcbiAgLS10dy1yb3RhdGU6IC0yN2RlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgtMjdkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLVxcXFxbMjdkZWdcXFxcXSB7XG4gIC0tdHctcm90YXRlOiAyN2RlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgyN2RlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtXFxcXFs1MGRlZ1xcXFxdIHtcbiAgLS10dy1yb3RhdGU6IDUwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDUwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnNjYWxlLTc1IHtcbiAgLS10dy1zY2FsZS14OiAuNzU7XG4gIC0tdHctc2NhbGUteTogLjc1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCguNzUpIHNjYWxlWSguNzUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tc2NhbGUteS0xMDAge1xuICAtLXR3LXNjYWxlLXk6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKC0xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2VsZWN0LW5vbmUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMSB7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5nYXAtMTAge1xuICBnYXA6IDIuNXJlbTtcbn1cbi5nYXAtMTQge1xuICBnYXA6IDMuNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC0zIHtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLmdhcC01IHtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuLnNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteS1jbGlwIHtcbiAgb3ZlcmZsb3cteTogY2xpcDtcbn1cbi50ZXh0LXByZXR0eSB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xufVxuLnJvdW5kZWQtbWQge1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cbi5iZy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbn1cbi5iZy1yaWdodCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG59XG4ucHgtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufVxuLnB4LTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtXFxcXFsxMHZ3XFxcXF0ge1xuICBmb250LXNpemU6IDEwdnc7XG59XG4udGV4dC1cXFxcWzI0cHhcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5cXFxcIWxlYWRpbmctXFxcXFswXFxcXC41XFxcXF0ge1xuICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG4ubGVhZGluZy1cXFxcWzBcXFxcLjhcXFxcXSB7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4ubGVhZGluZy1ub25lIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udGV4dC10cmFuc3BhcmVudCB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gICNjb250YWN0LWNhcmQge1xuICAgIC0tdHctc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDM5LCAzOSwgNDIpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDJweCAycHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMnB4IDJweCAxMHB4IHJnYigzOSwgMzksIDQyKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgfVxuXG4gICNjb250YWN0LWNhcmQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgICAtLXR3LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigyNDEsIDI0NSwgMjQ5KTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMHB4IDEwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDBweCAwcHggMTBweCByZ2IoMjQxLCAyNDUsIDI0OSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG4gIH1cbn1cblxuLm1vbnRzZXJyYXQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcbn1cblxuLmJveC11bmRlcmxpbmU6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuMjVyZW07XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xufVxuXG4uYm94LXVuZGVybGluZTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uZmFkZS1zaWRlIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDMwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgNzAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHZhcigtLXRoZW1lLTIpIDMwJSx2YXIoLS10aGVtZS0yKSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDMwJSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHJnYigyNDEsIDI0NSwgMjQ5KSAzMCUscmdiKDI0MSwgMjQ1LCAyNDkpIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlLHZhcigtLXRoZW1lLTIpIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDMwJSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgLyogTW9yZSBhdCBNRURJQSBRVUVSWSBCRUxPVyAqL1xufVxuXG5Ac3VwcG9ydHMgKGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZWQgMCUsIHJlZCAwJSAxJSwgcmVkIDIlKSkge1xuLmZhZGUtc2lkZSB7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHZhcigtLXRoZW1lLTIpIDMwJSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHZhcigtLXRoZW1lLTIpIDMwJSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbn1cbn1cblxuLyogVHJhbnNpdGlvbiAqL1xuXG5hLFxuI2J0bi10aW1lbGluZS10b2dnbGUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cblxuLnRvb2wtYWJvdXQsXG5bY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdLFxuLmRhcmstbW9kZS1iYWxsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbi5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDRweCkpO1xufVxuXG4uaW1nLXRvb2wge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuLmltZy10b29sLnNjYWxlQWJvdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbiNtZW51IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xufVxuXG4jbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2hlbGxvLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuI2JnLWxlZnQsXG4jYmctcmlnaHQge1xuICB0cmFuc2l0aW9uOlxuICAgIHdpZHRoIDFzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZTtcbn1cblxuI2JnLWxlZnQuc2hyaW5rLFxuI2JnLXJpZ2h0LnNocmluayB7XG4gIHdpZHRoOiAwO1xufVxuXG4jYmctcmlnaHQuc2hyaW5rIH4gI2JnLWxlZnQge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbiNiZy1pbnRybyxcbiNzZWN0aW9uLWludHJvIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG59XG5cbiNiZy1pbnRyby5zaHJpbmssXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XG59XG5cbm5hdixcbiNzY3JvbGwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2Fib3V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbn1cblxuI3Byb2plY3RzLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbiNjb250YWN0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG5bY2xhc3NePVwiYW5pbWF0ZVwiXSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG59XG5cbi5hbmltYXRlLWhlbGxvIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzIDE7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuLmFuaW1hdGUtYXBwZWFyIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBUYWlsd2luZCBCb3VuY2UgQ3VzdG9tICovXG5cbi5hbmltYXRlLWJvdW5jZS14IHtcbiAgYW5pbWF0aW9uOiBib3VuY2UteCAxcyBpbmZpbml0ZTtcbn1cblxuLmFuaW1hdGUtYm91bmNlLXkge1xuICBhbmltYXRpb246IGJvdW5jZS15IDNzIGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1ib3VuY2UteS05MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgYW5pbWF0aW9uOiBib3VuY2UteS05MCAzcyBpbmZpbml0ZTtcbn1cblxuLmFuaW1hdGUtYm91bmNlLXktbjkwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgYW5pbWF0aW9uOiBib3VuY2UteS1uOTAgM3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXgge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXkge1xuICAwJSxcbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteS05MCB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgMTYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteS1uOTAge1xuICAwJSxcbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbi8qIE1FRElBIFFVRVJZICovXG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaW1nLXByb2plY3Qge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjBkZWcpO1xuICB9XG5cbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZyk7XG4gIH1cblxuICAuYm9yZGVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDI0OCwgMTEzLCAxMTMpLCB0cmFuc3BhcmVudCA0MCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA0MCUpO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmFkZS1zaWRlIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlLHJnYigyNDEsIDI0NSwgMjQ5KSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlLHZhcigtLXRoZW1lLTIpIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDEwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgOTAlLFxuICAgICAgdHJhbnNwYXJlbnRcbiAgICApO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUsdmFyKC0tdGhlbWUtMikgOTAlLFxuICAgICAgdHJhbnNwYXJlbnRcbiAgICApO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgfVxuXG5Ac3VwcG9ydHMgKGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZWQgMCUsIHJlZCAwJSAxJSwgcmVkIDIlKSkge1xuLmZhZGUtc2lkZSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgfVxufVxufVxuXG4uZmlyc3QtbGV0dGVyXFxcXDp0ZXh0LXRoZW1lOjpmaXJzdC1sZXR0ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uZGFya1xcXFw6dGV4dC10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLmhvdmVyXFxcXDpzY2FsZS1cXFxcWzExMFxcXFwlXFxcXF06aG92ZXIge1xuICAtLXR3LXNjYWxlLXg6IDExMCU7XG4gIC0tdHctc2NhbGUteTogMTEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMTEwJSkgc2NhbGVZKDExMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLnNtXFxcXDpmbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOmgtXFxcXFsxOHB4XFxcXF0ge1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuXG4gIC5tZFxcXFw6aC1cXFxcWzIwcHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLm1kXFxcXDpoLVxcXFxbMjhweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAubWRcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMjVcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnNjYWxlLTEwMCB7XG4gICAgLS10dy1zY2FsZS14OiAxO1xuICAgIC0tdHctc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxKSBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOmdhcC0xNCB7XG4gICAgZ2FwOiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnB4LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtXFxcXFsyOHB4XFxcXF0ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC14bCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcblxuICAueGxcXFxcOmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC54bFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnBvcnRyYWl0XFxcXDotbGVmdC0yIHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDotdG9wLTIge1xuICAgIHRvcDogLTAuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6bXQtXFxcXFs1NnB4XFxcXF0ge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcWzEwNVxcXFwlXFxcXF0ge1xuICAgIGhlaWdodDogMTA1JTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcW2NhbGNcXFxcKDEwMHN2aC01NnB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDU2cHgpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1cXFxcWzEwNVxcXFwlXFxcXF0ge1xuICAgIHdpZHRoOiAxMDUlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNjBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpyb3RhdGUtMCB7XG4gICAgLS10dy1yb3RhdGU6IDBkZWc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbC1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtMTQge1xuICAgIGdhcDogMy41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtNyB7XG4gICAgZ2FwOiAxLjc1cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpyb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cGItMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dGV4dC1cXFxcWzE1dndcXFxcXSB7XG4gICAgZm9udC1zaXplOiAxNXZ3O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgICAucG9ydHJhaXRcXFxcOnNtXFxcXDp3LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0XFxcXDpzbVxcXFw6dy1cXFxcWzgwXFxcXCVcXFxcXSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAubGFuZHNjYXBlXFxcXDpmaXhlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6YXNwZWN0LVxcXFxbMVxcXFwuOFxcXFxdIHtcbiAgICBhc3BlY3QtcmF0aW86IDEuODtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmgtXFxcXFsxMDB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dy1cXFxcWzgwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOi10cmFuc2xhdGUteC0yIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAtMC41cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjVyZW0sIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOi10cmFuc2xhdGUteS0yIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAtMC41cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTAuNXJlbSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS14LTIge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVyZW0sIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS14LVxcXFxbLTE1MFxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IC0xNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteC1cXFxcWzE1MFxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXktMiB7XG4gICAgLS10dy10cmFuc2xhdGUteTogMC41cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgMC41cmVtKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXktXFxcXFsxNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAxNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgMTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmZsZXgtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOmdhcC0yMCB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6b3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cm91bmRlZC14bCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnJvdW5kZWQtbC1sZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnJvdW5kZWQtci1sZyB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cC03IHtcbiAgICBwYWRkaW5nOiAxLjc1cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cHktNSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5sYW5kc2NhcGVcXFxcOm1kXFxcXDp3LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNTZweCk7XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGlu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QUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQsd0VBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSwrRkFBYztFQUFkLHdEQUFjO0VBQWQ7QUFBYzs7QUFBZDtFQUFBLGlCQUFjO0VBQWQ7QUFBYzs7QUFBZDs7RUFBQTtJQUFBLG1CQUFjO0lBQWQ7RUFBYztBQUFBOztBQUFkO0VBQUEsa0JBQWM7RUFBZDtBQUFjOztBQUFkOztFQUFBO0lBQUEsaUJBQWM7SUFBZDtFQUFjO0FBQUE7O0FBQWQ7RUFBQSxrQkFBYztFQUFkLHdDQUFjO0VBQWQ7QUFBYzs7QUFBZDtFQUFBLGtCQUFjO0VBQWQscUNBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsYUFBYztFQUFkLFlBQWM7RUFBZCxXQUFjO0VBQWQsaUJBQWM7RUFBZCxzQkFBYztFQUFk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QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiwrS0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsOEtBQW1CO0VBQW5CO0FB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QXVsQkE7RUF2bEJBLG1LQXVsQkE7RUF2bEJBO0FBdWxCQTs7QUF2bEJBO0VBQUEsa0JBdWxCQTtFQXZsQkEsa0JBdWxCQTtFQXZsQkEscUtBdWxCQTtFQXZsQkE7QUF1bEJBOztBQXZsQkE7O0VBQUE7SUFBQTtFQXVsQkE7QUFBQTs7QUF2bEJBOztFQUFBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUEscUJBdWxCQTtJQXZsQkEsNktBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQSxlQXVsQkE7SUF2bEJBLGVBdWxCQTtJQXZsQkEsK0pBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBLG9CQXVsQkE7SUF2bEJBO0VBdWxCQTs7RUF2bEJBO0lBQUEsaUJBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQSxtQkF1bEJBO0lBdmxCQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUEsbUJBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQSxrQkF1bEJBO0lBdmxCQTtFQXVsQkE7QUFBQTs7QUF2bEJBOztFQUFBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7QUFBQTs7QUF2bEJBOztFQUFBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUEsaUJBdWxCQTtJQXZsQkEsbUxBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7O0lBQUE7TUFBQTtJQXVsQkE7O0lBdmxCQTtNQUFBO0lBdWxCQTtFQUFBO0FBQUE7O0FBdmxCQTs7RUFBQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQSx5QkF1bEJBO0lBdmxCQSxpTEF1bEJBO0lBdmxCQTtFQXVsQkE7O0VBdmxCQTtJQUFBLHlCQXVsQkE7SUF2bEJBLGlMQXVsQkE7SUF2bEJBO0VBdWxCQTs7RUF2bEJBO0lBQUEsd0JBdWxCQTtJQXZsQkEsZ0xBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQSx1QkF1bEJBO0lBdmxCQSwrS0F1bEJBO0lBdmxCQTtFQXVsQkE7O0VBdmxCQTtJQUFBLHNCQXVsQkE7SUF2bEJBLDhLQXVsQkE7SUF2bEJBO0VBdWxCQTs7RUF2bEJBO0lBQUEsd0JBdWxCQTtJQXZsQkEsZ0xBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQSxzQkF1bEJBO0lBdmxCQSw4S0F1bEJBO0lBdmxCQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBO0VBdWxCQTs7RUF2bEJBO0lBQUE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBLDhCQXVsQkE7SUF2bEJBO0VBdWxCQTs7RUF2bEJBO0lBQUEsK0JBdWxCQTtJQXZsQkE7RUF1bEJBOztFQXZsQkE7SUFBQTtFQXVsQkE7O0VBdmxCQTtJQUFBLG9CQXVsQkE7SUF2bEJBO0VBdWxCQTs7RUF2bEJBOztJQUFBO01BQUE7SUF1bEJBO0VBQUE7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250L01vbnRzZXJyYXQtRXh0cmFCb2xkLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRpbWluZy1ib3VuY2UtMTAwOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG4gIC0tdGltaW5nLWJvdW5jZS01MDogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XFxuICAtLWJvdW5jZS10cmFuc2xhdGVZOiAyNSU7XFxuICAtLXRoZW1lOiByZ2IoMjQ4LCAxMTMsIDExMyk7XFxuICAtLXRoZW1lLTI6IHJnYigyNDEsIDI0NSwgMjQ5KTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tWzUwbXNdO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0yeGwgbWQ6dGV4dC0zeGw7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtMnhsO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHBvcnRyYWl0OmJnLXRyYW5zcGFyZW50IGgtZnVsbCB3LWZ1bGwgbWF4LXctc2NyZWVuLWxnIGxhbmRzY2FwZTpweC01IGxhbmRzY2FwZTptZDpweC05IGxhbmRzY2FwZTpweS03IGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmQgbGFuZHNjYXBlOm92ZXJmbG93LWF1dG87XFxuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbiAgfVxcblxcbiAgYS5kaXNhYmxlZCxcXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LWRpc2FibGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIEBhcHBseSBweC0xIHJvdW5kZWQtbWQ7XFxuICB9XFxuXFxuICAvKiBTY3JvbGxiYXIgKi9cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgdy01O1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1iIGZyb20tcmVkLTQwMCBib3JkZXItc29saWQgYm9yZGVyLXgtNCBib3JkZXIteS0wIGJvcmRlci10aGVtZS0yIGRhcms6Ym9yZGVyLWRhcms7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgICBAYXBwbHkgYmctdGhlbWU7XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5iZy10aGVtZSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLWZhZGUge1xcbiAgICBAYXBwbHkgYmctcmVkLTMwMDtcXG4gIH1cXG5cXG4gIC5iZy1kYXJrIHtcXG4gICAgQGFwcGx5IGJnLXppbmMtODAwO1xcbiAgfVxcblxcbiAgLmJnLWRhcmstZmFkZSB7XFxuICAgIEBhcHBseSBiZy16aW5jLTcwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTEwMCBkYXJrOmJnLWRhcms7XFxuICB9XFxuXFxuICAuYmctdGhlbWUtMi1mYWRlIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTIwMCBkYXJrOmJnLWRhcmstZmFkZTtcXG4gIH1cXG5cXG4gIC50ZXh0LWxpZ2h0IHtcXG4gICAgQGFwcGx5IHRleHQtemluYy04MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZSB7XFxuICAgIEBhcHBseSB0ZXh0LXJlZC00MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZS0yIHtcXG4gICAgQGFwcGx5IHRleHQtc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLnRleHQtZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC16aW5jLTQwMCBkYXJrOnRleHQtemluYy01MDA7XFxuICB9XFxuXFxuICAuYm9yZGVyLXRoZW1lIHtcXG4gICAgQGFwcGx5IGJvcmRlci1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci1kYXJrIHtcXG4gICAgQGFwcGx5IGJvcmRlci16aW5jLTgwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUtMiB7XFxuICAgIEBhcHBseSBib3JkZXItc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGgtZnVsbCBwb3J0cmFpdDpoLVtjYWxjKDEwMCUrMTZweCldIHctZnVsbCBwb3J0cmFpdDp3LVtjYWxjKDEwMCUrMTZweCldIHAtMSByb3VuZGVkLW1kO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHZhcigtLXRoZW1lKSwgdHJhbnNwYXJlbnQgNzAlKTtcXG4gIH1cXG5cXG4gIC5ib3JkZXItaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1tZDtcXG4gIH1cXG5cXG4gIC5kaXZpZGVyLXRoZW1lIHtcXG4gICAgQGFwcGx5IGgtMSB3LWZ1bGwgcm91bmRlZC1zbTtcXG4gIH1cXG5cXG4gIC5kaXZpZGVyLXRoZW1lLmxlZnQge1xcbiAgICBAYXBwbHkgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC00MDA7XFxuICB9XFxuXFxuICAuZGl2aWRlci10aGVtZS5yaWdodCB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1sIGZyb20tcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBsYW5kc2NhcGU6YWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTpweS0xNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG4tbmF2LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdy0zNiBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5idG4tbmF2IHtcXG4gICAgQGFwcGx5IHctMzYgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZml4ZWQ7XFxuICB9XFxuXFxuICAuYnRuLXRoZW1lIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLWZhZGUgaG92ZXI6YmctdGhlbWUgdGV4dC10aGVtZS0yIGRhcms6dGV4dC1saWdodDtcXG4gIH1cXG5cXG4gIC5idG4tdGhlbWUtMiB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yLWZhZGUgaG92ZXI6YmctdGhlbWUtMiB0ZXh0LXRoZW1lO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUgaC1bMjRweF0gYXNwZWN0LVsyXSBweC0wIHJvdW5kZWQtbWQgc2hhZG93LWlubmVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZTpob3ZlciB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6YmctZGFyayBsYW5kc2NhcGU6ZGFyazpiZy1zbGF0ZS0xMDA7XFxuICB9XFxuXFxuICAuZGFyay1tb2RlLWJhbGwge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMiBoLVtjYWxjKDEwMCUtNHB4KV0gYXNwZWN0LXNxdWFyZSBteC1bMnB4XSByb3VuZGVkLW1kO1xcbiAgfVxcblxcbiAgLmFydGljbGUtaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC03O1xcbiAgfVxcblxcbiAgLmFydGljbGUtdGl0bGUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMiB3LWZ1bGwgcG9ydHJhaXQ6c3RpY2t5IHBvcnRyYWl0OnRvcC1bNTVweF0gei1bOTZdO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lIHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTp3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNSBvdmVyZmxvdy1oaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLmxlc3Mge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS10aGVtZS0yKSA1MCUsIHRyYW5zcGFyZW50KTtcXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lOmFmdGVyIHtcXG4gICAgQGFwcGx5IGJnLWRhcmsgZGFyazpiZy1zbGF0ZS0xMDAgaC1mdWxsIHctMSBhYnNvbHV0ZSB0b3AtMCBsZWZ0LVs1MCVdIHBvcnRyYWl0OmxlZnQtWzUlXSBsYW5kc2NhcGU6dHJhbnNsYXRlLXgtWy01MCVdIHotYXV0bztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6dy1bNTAlXSByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTIgaG92ZXI6YmctdGhlbWUgaC00IGFzcGVjdC1zcXVhcmUgLW1sLTIgcG9ydHJhaXQ6LW1sLTEuNSBib3JkZXItNCBib3JkZXItZGFyayBkYXJrOmJvcmRlci1zbGF0ZS0xMDAgcm91bmRlZC1mdWxsIGFic29sdXRlIHRvcC1bMnB4XSBtZDp0b3AtWzZweF0gcG9ydHJhaXQ6bGVmdC1bNSVdIHotWzFdO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIubGVmdCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6LXJpZ2h0LTI7XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudC5yaWdodCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6bGVmdC1bNTAlXTtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50LmxlZnQge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOmxlZnQtMDtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1pbm5lci1jb250ZW50IHtcXG4gICAgQGFwcGx5IHB4LTEwIHJlbGF0aXZlIHBvcnRyYWl0OmxlZnQtNDtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50LmxlZnQgLnRpbWVsaW5lLWlubmVyLWNvbnRlbnQgPiBwIHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTp0ZXh0LWVuZDtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LVs5MCVdIGxhbmRzY2FwZTpweS03IGZsZXggcG9ydHJhaXQ6ZmxleC1jb2wtcmV2ZXJzZSBnYXAtNSBvdmVyZmxvdy15LWNsaXA7XFxuICB9XFxuXFxuICAuaW5kZXgtcHJvamVjdC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHRleHQtdGhlbWUgdGV4dC02eGwgbWQ6dGV4dC03eGwgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHRyYW5zbGF0ZS14LVstMjUlXSB0cmFuc2xhdGUteS1bLTI1JV0gei1hdXRvO1xcbiAgfVxcblxcbiAgLmluZm8tcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LWZ1bGwgcC0zIGZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgZ2FwLTU7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGFuZHNjYXBlOnRyYW5zbGF0ZS15LVstMTAlXTtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNTAwcHg7XFxuICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdCxcXG4gIC5pbWctcHJvamVjdC1ldmVuIHtcXG4gICAgQGFwcGx5IHJlbGF0aXZlIHotWzFdO1xcbiAgICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIGJlbG93Ki9cXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xcbiAgICBAYXBwbHkgYWJzb2x1dGUgdG9wLTAgei1hdXRvIHBvcnRyYWl0OmhpZGRlbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHZhcigtLXRoZW1lLTIpKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3Ige1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgKyAycHgpKSByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDE4MGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbSB7XFxuICAgIEBhcHBseSBoLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgdG9wLVs1JV0gcmlnaHQtWy01JV07XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yID4gLmltZy1wcm9qZWN0LW0sXFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4gPiAuaW1nLXByb2plY3QtbSB7XFxuICAgIEBhcHBseSBoaWRkZW47XFxuICB9XFxuXFxuICAudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXgtaGlkZGVuO1xcbiAgfVxcblxcbiAgLnRvb2xzLXdyYXBwZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC50b29sLWFib3V0LFxcbiAgW2NsYXNzXj1cXFwidG9vbC1wcm9qZWN0XFxcIl0ge1xcbiAgICBAYXBwbHkgYXNwZWN0LXNxdWFyZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wLWNvbnRhY3Qge1xcbiAgICBAYXBwbHkgcHktMCB0ZXh0LWxlZnQgdGV4dC1ub3dyYXA7XFxuICB9XFxuXFxuICAuaWNvbi1jb250YWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1bNDBweF0gc206aC1bNTBweF0gYXNwZWN0LXNxdWFyZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayxcXG4gIC5pY29uLW1vZGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlLWRhcmsge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRhcms6b3BhY2l0eS0xMDA7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwIGRhcms6b3BhY2l0eS0wO1xcbiAgfVxcblxcbiAgLmljb24tY29udGFjdC1saW5rLXdyYXBwZXIsXFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xcbiAgICBAYXBwbHkgaC1bMzBweF0gc206aC1bNDBweF0gYXNwZWN0LXNxdWFyZTtcXG4gIH1cXG5cXG4gIC5pY29uLWNvbnRhY3QtbGluay1pIHtcXG4gICAgQGFwcGx5IHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdO1xcbiAgfVxcblxcbiAgLnN0cm9rZS1jb250YWN0IHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTI7XFxuICB9XFxuXFxuICAuaW5pdGlhbC1jb250YWN0IHtcXG4gICAgQGFwcGx5IHRleHQtdGhlbWUtMiBkYXJrOnRleHQtbGlnaHQ7XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgI2NvbnRhY3QtY2FyZCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6c2hhZG93LVsycHhfMnB4XzEwcHhfcmdiKDM5XzM5XzQyKV0gbGFuZHNjYXBlOmRhcms6c2hhZG93LVswcHhfMHB4XzEwcHhfcmdiKDI0MV8yNDVfMjQ5KV07XFxuICB9XFxufVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmJveC11bmRlcmxpbmU6YWZ0ZXIge1xcbiAgQGFwcGx5IGgtWzJweF0gdy0wIGJnLXRoZW1lIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LTEgYm90dG9tLTA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxufVxcblxcbi5ib3gtdW5kZXJsaW5lOmhvdmVyOmFmdGVyIHtcXG4gIEBhcHBseSB3LVtjYWxjKDEwMCUtNnB4KV07XFxufVxcblxcbi5mYWRlLXNpZGUge1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIEJFTE9XICovXFxufVxcblxcbi8qIFRyYW5zaXRpb24gKi9cXG5cXG5hLFxcbiNidG4tdGltZWxpbmUtdG9nZ2xlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbn1cXG5cXG4udG9vbC1hYm91dCxcXG5bY2xhc3NePVxcXCJ0b29sLXByb2plY3RcXFwiXSxcXG4uZGFyay1tb2RlLWJhbGwge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XFxufVxcblxcbi5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgKyA0cHgpKTtcXG59XFxuXFxuLmltZy10b29sIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4uaW1nLXRvb2wuc2NhbGVBYm91dCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbiNtZW51IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxufVxcblxcbiNtZW51Lm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2hlbGxvLXdyYXBwZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbiNoZWxsby13cmFwcGVyLmhpZGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbn1cXG5cXG4jYmctbGVmdCxcXG4jYmctcmlnaHQge1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgd2lkdGggMXMgZWFzZSxcXG4gICAgb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG5cXG4jYmctbGVmdC5zaHJpbmssXFxuI2JnLXJpZ2h0LnNocmluayB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuI2JnLXJpZ2h0LnNocmluayB+ICNiZy1sZWZ0IHtcXG4gIEBhcHBseSByb3VuZGVkLWxnIG9wYWNpdHktNzU7XFxufVxcblxcbiNiZy1pbnRybyxcXG4jc2VjdGlvbi1pbnRybyB7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcXG59XFxuXFxuI2JnLWludHJvLnNocmluayxcXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xcbiAgaGVpZ2h0OiBjYWxjKCgxMDBzdmggLyAyKSAtIDU2cHgpO1xcbn1cXG5cXG5uYXYsXFxuI3Njcm9sbCB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxufVxcblxcbm5hdi5oaWRlLFxcbiNzY3JvbGwuaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jYWJvdXQsXFxuI3Byb2plY3RzLFxcbiNjb250YWN0IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4jYWJvdXQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcXG59XFxuXFxuI3Byb2plY3RzLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xcbn1cXG5cXG4jY29udGFjdC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcXG59XFxuXFxuLyogQU5JTUFUSU9OICovXFxuXFxuW2NsYXNzXj1cXFwiYW5pbWF0ZVxcXCJdIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxufVxcblxcbi5hbmltYXRlLWhlbGxvIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtYXBwZWFyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGFwcGVhciAxLjVzIDEgMS41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xcblxcbi5hbmltYXRlLWJvdW5jZS14IHtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXggMXMgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15IHtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXkgM3MgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15LTkwIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktOTAgM3MgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15LW45MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgYW5pbWF0aW9uOiBib3VuY2UteS1uOTAgM3MgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXgge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXkge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteS05MCB7XFxuICAwJSxcXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgMTYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXktbjkwIHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgMTYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG4vKiBNRURJQSBRVUVSWSAqL1xcblxcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmltZy1wcm9qZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtZXZlbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZyk7XFxuICB9XFxuXFxuICAuYm9yZGVyLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHZhcigtLXRoZW1lKSwgdHJhbnNwYXJlbnQgNDAlKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZmFkZS1zaWRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcXG4gICAgICB0cmFuc3BhcmVudFxcbiAgICApO1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlIDkwJSxcXG4gICAgICB0cmFuc3BhcmVudFxcbiAgICApO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhY2tncm91bmQgPSAoKCkgPT4ge1xuICBjb25zdCBiZ0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWxlZnRcIik7XG4gIGNvbnN0IGJnUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLXJpZ2h0XCIpO1xuICBjb25zdCBiZ0ludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbnRyb1wiKTtcblxuICBmdW5jdGlvbiBzaHJpbmsoKSB7XG4gICAgZm9yIChjb25zdCBudW0gb2YgYXJndW1lbnRzKSB7XG4gICAgICBjb25zdCBiZyA9IF9nZXRCZyhudW0pO1xuICAgICAgYmcuY2xhc3NMaXN0LnRvZ2dsZShcInNocmlua1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0QmcoaW50KSB7XG4gICAgc3dpdGNoIChpbnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGJnTGVmdDtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGJnUmlnaHQ7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBiZ0ludHJvO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHNocmluayB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmFja2dyb3VuZCB9O1xuIiwiaW1wb3J0IHsgdG9vbHMgfSBmcm9tIFwiLi90b29sc1wiO1xuXG5jb25zdCBjYXJvdXNlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9pbml0QWJvdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2UobGlzdCwgY2xhc3NOYW1lLCBoZWlnaHQsIHNjYWxlLCB3cmFwcGVyKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLCBcInJlbGF0aXZlXCIpO1xuICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCAqIHNjYWxlICsgXCJweFwiO1xuXG4gICAgICBpZiAobGlzdFtpXS5zcmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLXRvb2xcIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgaW1nLnNyYyA9IGxpc3RbaV0uc3JjO1xuICAgICAgICBpbWcuYWx0ID0gbGlzdFtpXS5hbHQ7XG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGltZy50aXRsZSA9IGxpc3RbaV0uYWx0O1xuXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGltZ0RhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgaW1nRGFyay5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIGxpc3RbaV0uY2xhc3NbMF0sXG4gICAgICAgICAgXCJpbWctdG9vbFwiLFxuICAgICAgICAgIFwiaWNvbi1tb2RlLWRhcmtcIixcbiAgICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICAgICk7XG4gICAgICAgIGltZ0Rhcmsuc3R5bGUuZm9udFNpemUgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGltZ0RhcmsudGl0bGUgPSBsaXN0W2ldLmFsdDtcblxuICAgICAgICBjb25zdCBpbWcgPSBpbWdEYXJrLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1tb2RlLWRhcmtcIik7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGxpc3RbaV0uY2xhc3NbMV0sIFwiaWNvbi1tb2RlXCIpO1xuXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nRGFyaywgaW1nKTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlci5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGUoXG4gICAgaGVpZ2h0LFxuICAgIHNjYWxlLFxuICAgIHdyYXBwZXIsXG4gICAgd3JhcHBlck91dGVyLFxuICAgIGNsYXNzTmFtZSxcbiAgICBsZW5ndGgsXG4gICAgYXV0byxcbiAgICB0b29sTmFtZSxcbiAgKSB7XG4gICAgY29uc3QgeCA9IGhlaWdodCAqIHNjYWxlO1xuICAgIGxldCBhbW91bnQgPSBNYXRoLmZsb29yKHdyYXBwZXJPdXRlci5jbGllbnRXaWR0aCAvIHgpO1xuICAgIGlmIChsZW5ndGggPiBhbW91bnQgfHwgYXV0byA9PT0gMSlcbiAgICAgIF90b29sQXV0b1Njcm9sbChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHdyYXBwZXJPdXRlcixcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgeCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBhdXRvLFxuICAgICAgICB0b29sTmFtZSxcbiAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9vbEF1dG9TY3JvbGwoXG4gICAgY2xhc3NOYW1lLFxuICAgIGxlbmd0aCxcbiAgICB3cmFwcGVyT3V0ZXIsXG4gICAgd3JhcHBlcixcbiAgICB4LFxuICAgIGFtb3VudCxcbiAgICBhdXRvLFxuICAgIHRvb2xOYW1lLFxuICApIHtcbiAgICBjb25zdCB0b29scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBsZXQgdG9CZUVuZCA9IDA7XG4gICAgbGV0IHR4ID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgICBsZXQgdG9vbE1pZCA9IG51bGw7XG5cbiAgICBhbW91bnQgPSBsZW5ndGggLSAyO1xuICAgIGlmIChhbW91bnQgJSAyID09PSAwKSB3cmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogKGFtb3VudCAtIDEpICsgXCJweFwiO1xuICAgIGVsc2Ugd3JhcHBlck91dGVyLnN0eWxlLndpZHRoID0geCAqIGFtb3VudCArIFwicHhcIjtcblxuICAgIGlmIChhbW91bnQgPCA1KSBtaWQgLT0gMjtcbiAgICBlbHNlIGlmIChhbW91bnQgPCA3KSBtaWQgLT0gMTtcblxuICAgIGlmIChhdXRvID09PSAxKSB7XG4gICAgICB3cmFwcGVyT3V0ZXIuY2xhc3NMaXN0LmFkZChcImZhZGUtc2lkZVwiKTtcbiAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7eH1weClgO1xuICAgICAgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIGlmICh0b29sTWlkID09PSBudWxsKSB7XG4gICAgICAgIGlmIChodG1sLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpXG4gICAgICAgICAgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcIi5pY29uLW1vZGUtZGFya1wiKTtcbiAgICAgICAgZWxzZSB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZVwiKTtcbiAgICAgIH1cbiAgICAgIHRvb2xNaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNjYWxlQWJvdXRcIik7XG4gICAgICB0b29sTmFtZS50ZXh0Q29udGVudCA9IEJvb2xlYW4odG9vbE1pZC5hbHQpXG4gICAgICAgID8gdG9vbE1pZC5hbHQudG9VcHBlckNhc2UoKVxuICAgICAgICA6IHRvb2xNaWQudGl0bGUudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09PSB0b0JlRW5kKSB7XG4gICAgICAgICAgdHhbaV0gKz0geCAqIChsZW5ndGggLSAxKTtcbiAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICAgIHRvb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgdG9vbHNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHR4W2ldIC09IHg7XG5cbiAgICAgICAgaWYgKGF1dG8gPT09IDEpIHRvb2xNaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNjYWxlQWJvdXRcIik7XG4gICAgICAgIHRvb2xzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHhbaV19cHgpYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvQmVFbmQgIT09IGxlbmd0aCAtIDEpIHRvQmVFbmQgKz0gMTtcbiAgICAgIGVsc2UgdG9CZUVuZCA9IDA7XG5cbiAgICAgIGlmIChtaWQgIT09IGxlbmd0aCAtIDEpIG1pZCArPSAxO1xuICAgICAgZWxzZSBtaWQgPSAwO1xuXG4gICAgICBpZiAoYXV0byA9PT0gMSkge1xuICAgICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgICBpZiAodG9vbE1pZCA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChodG1sLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpXG4gICAgICAgICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZS1kYXJrXCIpO1xuICAgICAgICAgIGVsc2UgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcIi5pY29uLW1vZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgICAgdG9vbE5hbWUudGV4dENvbnRlbnQgPSBCb29sZWFuKHRvb2xNaWQuYWx0KVxuICAgICAgICAgID8gdG9vbE1pZC5hbHQudG9VcHBlckNhc2UoKVxuICAgICAgICAgIDogdG9vbE1pZC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRBYm91dCgpIHtcbiAgICBjb25zdCBsaXN0ID0gdG9vbHMuZ2V0TGlzdCgpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwidG9vbC1hYm91dFwiO1xuICAgIGNvbnN0IGhlaWdodCA9IDQwO1xuICAgIGNvbnN0IHNjYWxlID0gMS41O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXItYWJvdXRcIik7XG4gICAgY29uc3Qgd3JhcHBlck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29scy13cmFwcGVyLW91dGVyLWFib3V0XCIpO1xuICAgIGNvbnN0IHRvb2xOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29sLW5hbWVcIik7XG5cbiAgICBnZW5lcmF0ZUltYWdlKGxpc3QsIGNsYXNzTmFtZSwgaGVpZ2h0LCBzY2FsZSwgd3JhcHBlcik7XG4gICAgY3JlYXRlKFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2NhbGUsXG4gICAgICB3cmFwcGVyLFxuICAgICAgd3JhcHBlck91dGVyLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbGlzdC5sZW5ndGgsXG4gICAgICAxLFxuICAgICAgdG9vbE5hbWUsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGdlbmVyYXRlSW1hZ2UsIGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY2Fyb3VzZWwgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBpbWcsIHJlcG8sIGRlbW8sIHRvb2xzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuaW1nID0gaW1nO1xuICAgIHRoaXMucmVwbyA9IHJlcG87XG4gICAgdGhpcy5kZW1vID0gZGVtbztcbiAgICB0aGlzLnRvb2xzID0gdG9vbHM7XG4gIH1cbn1cbiIsImNvbnN0IGRhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmstbW9kZS1iYWxsXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAoQm9vbGVhbihsb2NhbFN0b3JhZ2UudGhlbWUpKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgICBfdG9nZ2xlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIF90b2dnbGUoKTtcbiAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZSgpIHtcbiAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGJhbGxzLmZvckVhY2goKGJhbGwpID0+IHtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGFya01vZGUgfTtcbiIsImltcG9ydCBpbWdBcnJvd1c1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9hcnJvdy13LTUwdy5wbmdcIjtcbmltcG9ydCBpbWdQcm9maWxlNjQwdyBmcm9tIFwiLi4vaW1nL3Byb2ZpbGUtMi02NDB3LmpwZ1wiO1xuXG5pbXBvcnQgaW1nTWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL3BvbGwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ01lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvcG9sbC13LTUwdy5wbmdcIjtcblxuaW1wb3J0IGltZ09wZW41MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdPcGVuVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdOYW1lNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbmFtZS01MHcucG5nXCI7XG5pbXBvcnQgaW1nTmFtZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9uYW1lLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZW1haWwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2VtYWlsLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0xpbms1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9saW5rLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdMaW5rVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2xpbmstdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdGYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5cbmNvbnN0IGltYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctc2Nyb2xsXCIpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJvZmlsZVwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbWVudS13cmFwcGVyXCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbmFtZS13cmFwcGVyXCIpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWVtYWlsLXdyYXBwZXJcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1saW5rLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2Nyb2xsLnNyYyA9IGltZ0Fycm93VzUwdztcbiAgICBwcm9maWxlLnNyYyA9IGltZ1Byb2ZpbGU2NDB3O1xuXG4gICAgX3NldEltZ1NyYyhtZW51LCBpbWdNZW51VzUwdywgaW1nTWVudTUwdyk7XG4gICAgX3NldEltZ1NyYyhuYW1lLCBpbWdOYW1lVzUwdywgaW1nTmFtZTUwdyk7XG4gICAgX3NldEltZ1NyYyhlbWFpbCwgaW1nRW1haWxXNTB3LCBpbWdFbWFpbDUwdyk7XG4gICAgX3NldEltZ1NyYyhsaW5rLCBpbWdMaW5rVzUwdywgaW1nTGluazUwdyk7XG5cbiAgICBmYXZpY29uLnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICAgIGZhdmljb24uaHJlZiA9IGltZ0Zhdmljb24zMnc7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJY29uT3BlbihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIF9zZXRJbWdTcmMoZWwsIGltZ09wZW5XNTB3LCBpbWdPcGVuNTB3KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRJbWdTcmMoaWQsIHNyY0RhcmssIHNyY0xpZ2h0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaWQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgICB0YXJnZXRbMF0uc3JjID0gc3JjRGFyaztcbiAgICB0YXJnZXRbMV0uc3JjID0gc3JjTGlnaHQ7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBzZXRJY29uT3BlbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcbmltcG9ydCB7IHRhYkNsaWNrYWJsZSB9IGZyb20gXCIuL3RhYi1jbGlja2FibGVcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bkFib3V0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1sXCIpO1xuXG4gIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51XCIpO1xuICBjb25zdCBidG5NZW51QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtYmFja1wiKTtcblxuICBjb25zdCBidG5Ib21lUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtcFwiKTtcbiAgY29uc3QgYnRuQWJvdXRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtcFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtcFwiKTtcbiAgY29uc3QgYnRuQ29udGFjdFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWN0LXBcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY29uc3QgaGVsbG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWxsby13cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBjb25zdCBidG5CYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWJhY2tcIik7XG5cbiAgbGV0IGlzT3Blbk1lbnUgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMDtcbiAgbGV0IGlzT3BlblRhYiA9IDA7XG4gIGxldCBiYWNrVGFyZ2V0ID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aHJlc2hvbGQgPSBzY3JvbGwuZ2V0U2Nyb2xsVGhyZXNob2xkKCk7XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9vcGVuVGFiKGFib3V0LCAyLCBidG5BYm91dEwpO1xuICAgIH07XG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihwcm9qZWN0cywgMSwgYnRuUHJvamVjdHNMKTtcbiAgICB9O1xuICAgIGJ0bkNvbnRhY3RMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihjb250YWN0LCAyLCBidG5Db250YWN0TCk7XG4gICAgfTtcblxuICAgIGJ0bkJhY2tzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIF9jbG9zZVRhYigpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGJ0bk1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc09wZW5NZW51ID09PSAxKSB7XG4gICAgICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RvZ2dsZU1lbnVDb29sZG93bigpO1xuICAgICAgc2Nyb2xsLmRpc2FibGVTY3JvbGwoKTtcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICB9KTtcblxuICAgICAgaXNPcGVuTWVudSA9IDE7XG4gICAgfTtcblxuICAgIGJ0bk1lbnVCYWNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlTWVudUNvb2xkb3duKCk7XG4gICAgICBzY3JvbGwuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfSwgNTAwKTtcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxKTtcbiAgICAgICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgfVxuXG4gICAgICBpc09wZW5NZW51ID0gMDtcbiAgICB9O1xuXG4gICAgYnRuSG9tZVAub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbygwLCAwKTtcbiAgICB9O1xuXG4gICAgYnRuQWJvdXRQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDIpO1xuICAgICAgICBfc2Nyb2xsVG8oYWJvdXQsIDEpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLShzY3JlZW4uaGVpZ2h0IC8gMikpO1xuICAgICAgfSBlbHNlIF9zY3JvbGxUbyhhYm91dCwgMSk7XG4gICAgfTtcblxuICAgIGJ0blByb2plY3RzUC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Njcm9sbFRvKHByb2plY3RzLCAxKTtcbiAgICB9O1xuICAgIGJ0bkNvbnRhY3RQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8oY29udGFjdCwgMCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0T25TY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKGlzT3BlblRhYiA9PT0gMSkge1xuICAgICAgYnRuQmFja3NbMF0uY2xpY2soKTtcbiAgICAgIGlzT3BlblRhYiA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX29wZW5UYWIodGFiLCBiZywgYnRuKSB7XG4gICAgaWYgKGlzT3BlblRhYiA9PT0gMSkgYnRuQmFja3NbMF0uY2xpY2soKTtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIF90b2dnbGVCYWNrZ3JvdW5kKGJnKTtcbiAgICB0YWJDbGlja2FibGUudG9nZ2xlKHRhYik7XG4gICAgdGFiLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaXNPcGVuVGFiID0gMTtcbiAgICBiYWNrVGFyZ2V0ID0gW3RhYiwgYmcsIGJ0bl07XG4gIH1cblxuICBmdW5jdGlvbiBfY2xvc2VUYWIoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYmFja1RhcmdldFswXTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBfdG9nZ2xlQmFja2dyb3VuZChiYWNrVGFyZ2V0WzFdKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZVwiKS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHRhYkNsaWNrYWJsZS50b2dnbGUodGFyZ2V0KTtcbiAgICB9LCAxMDAwKTtcbiAgICBpc09wZW5UYWIgPSAwO1xuICAgIGJhY2tUYXJnZXRbMl0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVCYWNrZ3JvdW5kKGJnKSB7XG4gICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIGJhY2tncm91bmQuc2hyaW5rKGJnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51Q29vbGRvd24oKSB7XG4gICAgYnRuTWVudS5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnRuTWVudS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Njcm9sbFRvKGNvbnRlbnQsIG9mZnNldCkge1xuICAgIGlmIChjb250ZW50ID09PSAwICYmIG9mZnNldCA9PT0gMCkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIGVsc2Uge1xuICAgICAgY29udGVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgaWYgKG9mZnNldCA9PT0gMSkgd2luZG93LnNjcm9sbEJ5KDAsIC01NiAtIDI4KTtcbiAgICB9XG4gICAgYnRuTWVudUJhY2suY2xpY2soKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHJlc2V0T25TY3JlZW5DaGFuZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzLVByb2plY3RcIjtcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWxcIjtcbmltcG9ydCB7IGltYWdlIH0gZnJvbSBcIi4vaW1hZ2VcIjtcblxuaW1wb3J0IGltZ1lwZXREIGZyb20gXCIuLi9pbWcvcHJvamVjdHMveXBldC1kLTQ1MHcucG5nXCI7XG5pbXBvcnQgaW1nV2VhdGhlckQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLWQtNDUwdy5wbmdcIjtcbmltcG9ydCBpbWdXZWF0aGVyTSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3dlYXRoZXItbS0yMDB3LmpwZ1wiO1xuaW1wb3J0IGltZ0hvbWVEIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UtZC00NTB3LnBuZ1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wcm9qZWN0c1wiKTtcbiAgY29uc3QgbGFzdENoaWxkID0gY29udGVudFByb2plY3RzLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gX2dldFByb2plY3RzKCk7XG4gIGNvbnN0IGxlbmd0aCA9IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgY29uc3QgaGVpZ2h0ID0gNDA7XG4gIGNvbnN0IHNjYWxlID0gMS4xO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2dlbmVyYXRlUHJvamVjdHMoKTtcbiAgICBfY2Fyb3VzZWxJbml0KCk7XG4gICAgaW1hZ2Uuc2V0SWNvbk9wZW4oXCIuaWNvbi1saW5rLXdyYXBwZXJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2VuZXJhdGVQcm9qZWN0cygpIHtcbiAgICBsZXQgY291bnQgPSAxO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICAgIGNvbnN0IGRpdldyYXBwZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJjb250ZW50LXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZGV4ID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW5kZXgtcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICAgIFwidGV4dC10cmFuc3BhcmVudFwiLFxuICAgICAgICBcIm1vbnRzZXJyYXRcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBpbmRleCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAgXCJpbmRleC1wcm9qZWN0XCIsXG4gICAgICAgIFwidGV4dC10aGVtZVwiLFxuICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICAgIFwidHJhbnNsYXRlLXgtWy0xMDAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZm8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJpbmZvLXByb2plY3RcIixcbiAgICAgICAgXCJyZWxhdGl2ZVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoM1wiLCBcInotWzFdXCIsIFwibW9udHNlcnJhdFwiKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInNwYW5cIiwgXCJ0ZXh0LXRoZW1lXCIpO1xuICAgICAgY29uc3QgZGl2RGVzYyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRleHQtanVzdGlmeVwiLCBcInotWzJdXCIpO1xuICAgICAgY29uc3QgZGl2VG9vbHMgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJvdmVyZmxvdy14LWhpZGRlblwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUb29sT3V0ZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b29scy13cmFwcGVyLW91dGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCB3cmFwcGVyVG9vbCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInRvb2xzLXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkxpbmtzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktZXZlbmx5XCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgYVJlcG8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICBcImdhcC0zXCIsXG4gICAgICAgIFwibW9udHNlcnJhdFwiLFxuICAgICAgICBcImhvdmVyOnNjYWxlLVsxMTAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNwYW5SZXBvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICBcImZpcnN0LWxldHRlcjp0ZXh0LXRoZW1lXCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgc3BhbkRlbW8gPSBzcGFuUmVwby5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgY29uc3QgZGl2SW1nID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJpbWctcHJvamVjdC13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgZGl2SW1nSW5uZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiKTtcbiAgICAgIGNvbnN0IGltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaW1nMiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaW1nLXByb2plY3QtbVwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgICAvLyBJbmZvXG4gICAgICBpbmRleC50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgICAgZGl2SW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LmFwcGVuZChpbmRleCk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIi5cIjtcbiAgICAgIHRpdGxlLmFwcGVuZChzcGFuKTtcbiAgICAgIGRpdkRlc2MuaW5uZXJIVE1MID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAvLyBUb29sc1xuICAgICAgY2Fyb3VzZWwuZ2VuZXJhdGVJbWFnZShcbiAgICAgICAgcHJvamVjdC50b29scyxcbiAgICAgICAgYHRvb2wtcHJvamVjdC0ke2NvdW50fWAsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHdyYXBwZXJUb29sLFxuICAgICAgKTtcblxuICAgICAgd3JhcHBlclRvb2xPdXRlci5hcHBlbmQod3JhcHBlclRvb2wpO1xuICAgICAgZGl2VG9vbHMuYXBwZW5kKHdyYXBwZXJUb29sT3V0ZXIpO1xuXG4gICAgICAvLyBMaW5rIGFuZCBEZW1vXG4gICAgICBhUmVwby50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgYVJlcG8ucmVsID0gXCJub3JlZmVycmVyXCI7XG4gICAgICBjb25zdCBhRGVtbyA9IGFSZXBvLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBhUmVwby5ocmVmID0gcHJvamVjdC5yZXBvO1xuICAgICAgc3BhblJlcG8udGV4dENvbnRlbnQgPSBcIkdJVEhVQlwiO1xuICAgICAgYURlbW8uaHJlZiA9IHByb2plY3QuZGVtbztcbiAgICAgIHNwYW5EZW1vLnRleHRDb250ZW50ID0gXCJERU1PXCI7XG5cbiAgICAgIGNvbnN0IGxpbmtXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaC1bMTRweF1cIixcbiAgICAgICAgXCJtZDpoLVsxOHB4XVwiLFxuICAgICAgICBcImFzcGVjdC1zcXVhcmVcIixcbiAgICAgICAgXCJyZWxhdGl2ZVwiLFxuICAgICAgICBcImljb24tbGluay13cmFwcGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW1nTGluayA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcImljb24tbW9kZS1kYXJrXCIsXG4gICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBpbWdMaW5rMiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaWNvbi1tb2RlXCIsIFwiYWJzb2x1dGVcIik7XG5cbiAgICAgIGxpbmtXcmFwcGVyLmFwcGVuZChpbWdMaW5rLCBpbWdMaW5rMik7XG4gICAgICBjb25zdCBsaW5rV3JhcHBlcjIgPSBsaW5rV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGFSZXBvLmFwcGVuZChzcGFuUmVwbywgbGlua1dyYXBwZXIpO1xuXG4gICAgICAvLyBEaXNhYmxlIGRlbW8gbGluayBmb3IgcHJvamVjdCBIb21lcGFnZVxuICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gXCJIb21lcGFnZVwiKSB7XG4gICAgICAgIGFEZW1vLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgYURlbW8udGV4dENvbnRlbnQgPSBcIlZJRVdJTkdcIjtcbiAgICAgIH0gZWxzZSBhRGVtby5hcHBlbmQoc3BhbkRlbW8sIGxpbmtXcmFwcGVyMik7XG5cbiAgICAgIGRpdkxpbmtzLmFwcGVuZChhUmVwbywgYURlbW8pO1xuXG4gICAgICBjb25zdCBkaXZpZGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJkaXZpZGVyLXRoZW1lXCIpO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2SW5kZXgsIHRpdGxlLCBkaXZEZXNjLCBkaXZUb29scywgZGl2TGlua3MsIGRpdmlkZXIpO1xuXG4gICAgICAvLyBQcm9qZWN0IEltYWdlXG4gICAgICBpbWcuc3JjID0gcHJvamVjdC5pbWdbMF07XG4gICAgICBkaXZJbWdJbm5lci5hcHBlbmQoaW1nKTtcblxuICAgICAgaWYgKHByb2plY3QuaW1nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaW1nMi5zcmMgPSBwcm9qZWN0LmltZ1sxXTtcbiAgICAgICAgZGl2SW1nSW5uZXIuYXBwZW5kKGltZzIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXZJbWdJbm5lck1pcnJvciA9IGRpdkltZ0lubmVyLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgaWYgKGNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3QtZXZlblwiKTtcbiAgICAgICAgZGl2SW1nSW5uZXJNaXJyb3IuY2xhc3NMaXN0LmFkZChcImltZy1wcm9qZWN0LW1pcnJvci1ldmVuXCIpO1xuICAgICAgICBkaXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kc2NhcGU6ZmxleC1yb3ctcmV2ZXJzZVwiKTtcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3RcIik7XG4gICAgICAgIGRpdkltZ0lubmVyTWlycm9yLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1taXJyb3JcIik7XG4gICAgICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpdkltZ0lubmVyV3JhcHBlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImltZy1wcm9qZWN0LWlubmVyLXdyYXBwZXJcIixcbiAgICAgICk7XG4gICAgICBkaXZJbWdJbm5lcldyYXBwZXIuYXBwZW5kKGRpdkltZ0lubmVyLCBkaXZJbWdJbm5lck1pcnJvcik7XG4gICAgICBkaXZJbWcuYXBwZW5kKGRpdkltZ0lubmVyV3JhcHBlcik7XG4gICAgICBkaXZXcmFwcGVyLmFwcGVuZChkaXZJbmZvLCBkaXZJbWcpO1xuICAgICAgY29udGVudFByb2plY3RzLmluc2VydEJlZm9yZShkaXZXcmFwcGVyLCBsYXN0Q2hpbGQpO1xuXG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jYXJvdXNlbEluaXQoKSB7XG4gICAgY29uc3Qgd3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb2xzLXdyYXBwZXItcHJvamVjdFwiKTtcbiAgICBjb25zdCB3cmFwcGVyc091dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnRvb2xzLXdyYXBwZXItb3V0ZXItcHJvamVjdFwiLFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBgdG9vbC1wcm9qZWN0LSR7aSArIDF9YDtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKS5sZW5ndGg7XG4gICAgICBjYXJvdXNlbC5jcmVhdGUoXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHdyYXBwZXJzW2ldLFxuICAgICAgICB3cmFwcGVyc091dGVyW2ldLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgMCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3ModGFnLCAuLi5jbGFzc0xpc3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gUHJvamVjdCBMaXN0XG5cbiAgZnVuY3Rpb24gX2dldFByb2plY3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJZb3VyIFBlcnNvbmFsIEV4cGVuc2UgVHJhY2tlclwiLFxuICAgICAgICBcIkEgPGk+ZnVsbCBzdGFjazwvaT4gcHJvamVjdCB0aGF0IGZlYXR1cmVzIHVzZXIgY3JlYXRlLCBsb2dpbiBhbmQgbG9nb3V0LCBzdG9yZSBhbmQgZGlzcGxheSBleHBlbnNlIGRhdGEgYW5kIHNldHRpbmdzIHRoYXQgYWxsb3cgbmFtZSwgcGFzc3dvcmQgYW5kIGN1cnJlbmN5IGNoYW5nZS5cIixcbiAgICAgICAgW2ltZ1lwZXREXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL2NzNTB4LTIwMjMtcHJvamVjdFwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bDgza3lzOXlKSnNcIixcbiAgICAgICAgdG9vbHMuZ2V0KFxuICAgICAgICAgIFwiSFRNTFwiLFxuICAgICAgICAgIFwiQ1NTXCIsXG4gICAgICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICAgICAgXCJQeXRob25cIixcbiAgICAgICAgICBcIlNRTGl0ZVwiLFxuICAgICAgICAgIFwiRmxhc2tcIixcbiAgICAgICAgICBcIkJvb3RzdHJhcFwiLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIldlYXRoZXIgQXBwXCIsXG4gICAgICAgIFwiQSA8aT5mcm9udCBlbmQ8L2k+IHByb2plY3QgdGhhdCByZXRyaWV2ZXMgYW5kIGRpc3BsYXlzIHVzZXItcHJvdmlkZWQgbG9jYXRpb24ncyB3ZWF0aGVyIGluZm8gZnJvbSBXZWF0aGVyQVBJLmNvbVwiLFxuICAgICAgICBbaW1nV2VhdGhlckQsIGltZ1dlYXRoZXJNXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4td2VhdGhlci1hcHBcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi13ZWF0aGVyLWFwcC9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIpLFxuICAgICAgKSxcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIkhvbWVwYWdlXCIsXG4gICAgICAgIFwiWWVzLCB5b3UgYXJlIHZpZXdpbmcgaXQhIE15IGZpcnN0IGFuZCBjdXJyZW50IHBvcnRmb2xpbywgYSA8aT5mcm9udCBlbmQ8L2k+IHByb2plY3QgdGhhdCBmZWF0dXJlcyBpbnRlcmFjdGl2ZSBsYXlvdXQsIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBkYXJrIG1vZGUgb3B0aW9uLlwiLFxuICAgICAgICBbaW1nSG9tZURdLFxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS93b29uemYvb2Rpbi1ob21lcGFnZVwiLFxuICAgICAgICBcImh0dHBzOi8vd29vbnpmLmdpdGh1Yi5pby9vZGluLWhvbWVwYWdlL1wiLFxuICAgICAgICB0b29scy5nZXQoXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSmF2YVNjcmlwdFwiLCBcIldlYnBhY2tcIiwgXCJUYWlsd2luZCBDU1NcIiksXG4gICAgICApLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3Qgc2NyZWVuT3JpZW50YXRpb24gPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNjcmVlbi5vcmllbnRhdGlvbi5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIG1lbnUucmVzZXRPblNjcmVlbkNoYW5nZSgpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBzY3JlZW5PcmllbnRhdGlvbiB9O1xuIiwiaW1wb3J0IHsgYmFja2dyb3VuZCB9IGZyb20gXCIuL2JhY2tncm91bmRcIjtcblxuY29uc3Qgc2Nyb2xsID0gKCgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWludHJvXCIpO1xuICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbFwiKTtcblxuICBjb25zdCB0aHJlc2hvbGQgPSAxO1xuICBsZXQgc2hyaW5rID0gMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9zaHJpbmtPblNjcm9sbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBfc2hyaW5rT25TY3JvbGwoKSB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gdGhyZXNob2xkICYmIHNocmluayA9PT0gMCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxLCAzKTtcbiAgICAgICAgX3Nocmlua0ludHJvKCk7XG4gICAgICAgIHNocmluayA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkICYmIHNocmluayA9PT0gMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxLCAzKTtcbiAgICAgICAgX3Nocmlua0ludHJvKCk7XG4gICAgICAgIHNocmluayA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaHJpbmtJbnRybygpIHtcbiAgICBzZWN0aW9uSW50cm8uY2xhc3NMaXN0LnRvZ2dsZShcInNocmlua1wiKTtcbiAgICBzY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gIH1cblxuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NzcwMDI1L2hvdy10by1kaXNhYmxlLXNjcm9sbGluZy10ZW1wb3JhcmlseVxuICAvLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwLFxuICAvLyBzcGFjZWJhcjogMzIsIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCwgZW5kOiAzNSwgaG9tZTogMzZcbiAgY29uc3Qga2V5cyA9IHsgMzc6IDEsIDM4OiAxLCAzOTogMSwgNDA6IDEgfTtcblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBtb2Rlcm4gQ2hyb21lIHJlcXVpcmVzIHsgcGFzc2l2ZTogZmFsc2UgfSB3aGVuIGFkZGluZyBldmVudFxuICBsZXQgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRlc3RcIixcbiAgICAgIG51bGwsXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICApO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIGxldCB3aGVlbE9wdCA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlO1xuICBsZXQgd2hlZWxFdmVudCA9XG4gICAgXCJvbndoZWVsXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSA/IFwid2hlZWxcIiA6IFwibW91c2V3aGVlbFwiO1xuXG4gIC8vIGNhbGwgdGhpcyB0byBEaXNhYmxlXG4gIGZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpOyAvLyBvbGRlciBGRlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7IC8vIG1vZGVybiBkZXNrdG9wXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9iaWxlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xuICB9XG5cbiAgLy8gY2FsbCB0aGlzIHRvIEVuYWJsZVxuICBmdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZXRTY3JvbGxUaHJlc2hvbGQsIGRpc2FibGVTY3JvbGwsIGVuYWJsZVNjcm9sbCB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJjb25zdCB0YWJDbGlja2FibGUgPSAoKCkgPT4ge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRvZ2dsZShhYm91dCk7XG4gICAgdG9nZ2xlKHByb2plY3RzKTtcbiAgICB0b2dnbGUoY29udGFjdCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUodGFiKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGxpbmtzID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuICAgIGNvbnN0IGFydGljbGUgPSB0YWIucXVlcnlTZWxlY3RvcihcImFydGljbGVcIik7XG5cbiAgICBjb25zdCBjbGlja2FibGVzID0gW2J1dHRvbnMsIGxpbmtzXTtcblxuICAgIGFydGljbGUuY2xhc3NMaXN0LnRvZ2dsZShcImxhbmRzY2FwZTpvdmVyZmxvdy1oaWRkZW5cIik7XG4gICAgY2xpY2thYmxlcy5mb3JFYWNoKChjbGlja2FibGUpID0+IHtcbiAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwibGFuZHNjYXBlOmhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgdG9nZ2xlIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YWJDbGlja2FibGUgfTtcbiIsImNvbnN0IHRpbWVsaW5lID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVsaW5lLWNvbnRlbnRcIik7XG4gIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lbGluZVwiKTtcbiAgY29uc3QgYnRuVGltZWxpbmVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10aW1lbGluZS10b2dnbGVcIik7XG5cbiAgY29uc3QgZnVsbEhlaWdodCA9IHRpbWVsaW5lLmNsaWVudEhlaWdodDtcbiAgY29uc3QgaGFsZlNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9hbGlnblRpbWVsaW5lKCk7XG4gICAgX2NoZWNrVGltZWxpbmVIZWlnaHQoKTtcbiAgICBfaW5pdEJ0blRvZ2dsZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FsaWduVGltZWxpbmUoKSB7XG4gICAgbGV0IHggPSAwO1xuICAgIGNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGlmICh4ID09PSAwKSBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgICAgZWxzZSBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcbiAgICAgIHggPSArIXg7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY2hlY2tUaW1lbGluZUhlaWdodCgpIHtcbiAgICBpZiAodGltZWxpbmUuY2xpZW50SGVpZ2h0ID4gaGFsZlNjcmVlbikge1xuICAgICAgdGltZWxpbmUuc3R5bGUuaGVpZ2h0ID0gaGFsZlNjcmVlbiArIFwicHhcIjtcbiAgICAgIHRpbWVsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJsZXNzXCIpO1xuICAgICAgYnRuVGltZWxpbmVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0blRvZ2dsZSgpIHtcbiAgICBidG5UaW1lbGluZVRvZ2dsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGltZWxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcImxlc3NcIik7XG4gICAgICBpZiAodGltZWxpbmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVzc1wiKSkge1xuICAgICAgICBidG5UaW1lbGluZVRvZ2dsZS50ZXh0Q29udGVudCA9IFwiU0hPVyBBTExcIjtcbiAgICAgICAgdGltZWxpbmUuc3R5bGUuaGVpZ2h0ID0gaGFsZlNjcmVlbiArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0blRpbWVsaW5lVG9nZ2xlLnRleHRDb250ZW50ID0gXCJTSE9XIExFU1NcIjtcbiAgICAgICAgdGltZWxpbmUuc3R5bGUuaGVpZ2h0ID0gZnVsbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGltZWxpbmUgfTtcbiIsImNvbnN0IHRvb2xzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2h0bWw1L2h0bWw1LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkhUTUxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkNTU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmF2YVNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy93ZWJwYWNrL3dlYnBhY2stb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiV2VicGFja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qZXN0L2plc3QtcGxhaW4uc3ZnXCIsXG4gICAgICBhbHQ6IFwiSmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90YWlsd2luZGNzcy90YWlsd2luZGNzcy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJUYWlsd2luZCBDU1NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvYy9jLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvcHl0aG9uL3B5dGhvbi1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJQeXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvc3FsaXRlL3NxbGl0ZS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJTUUxpdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXCJkZXZpY29uLWZsYXNrLW9yaWdpbmFsXCIsIFwiY29sb3JlZFwiXSxcbiAgICAgIGFsdDogXCJGbGFza1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9ib290c3RyYXAvYm9vdHN0cmFwLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkJvb3RzdHJhcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy92c2NvZGUvdnNjb2RlLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXQvZ2l0LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkdpdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3M6IFtcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXCIsIFwiY29sb3JlZFwiXSxcbiAgICAgIGFsdDogXCJHaXRIdWJcIixcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIGdldChcbiAgICAgIFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgICBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAgICAgXCJHaXRcIixcbiAgICAgIFwiR2l0SHViXCIsXG4gICAgICBcIkhUTUxcIixcbiAgICAgIFwiQ1NTXCIsXG4gICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgIFwiV2VicGFja1wiLFxuICAgICAgXCJKZXN0XCIsXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgZ2V0TGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBhcmd1bWVudHMpIHtcbiAgICAgIGZvciAoY29uc3QgdG9vbCBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudCA9PT0gdG9vbC5hbHQpIGdldExpc3QucHVzaCh0b29sKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TGlzdDtcbiAgfVxuXG4gIHJldHVybiB7IGdldExpc3QsIGdldCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9vbHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gXCIuL2pzL2ltYWdlXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2pzL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2pzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vanMvbWVudVwiO1xuaW1wb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfSBmcm9tIFwiLi9qcy9zY3JlZW4tb3JpZW50YXRpb25cIjtcbmltcG9ydCB7IGRhcmtNb2RlIH0gZnJvbSBcIi4vanMvZGFyay1tb2RlXCI7XG5pbXBvcnQgeyB0YWJDbGlja2FibGUgfSBmcm9tIFwiLi9qcy90YWItY2xpY2thYmxlXCI7XG5pbXBvcnQgeyB0aW1lbGluZSB9IGZyb20gXCIuL2pzL3RpbWVsaW5lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgc2Nyb2xsLmluaXQoKTtcbiAgaW1hZ2UuaW5pdCgpO1xuICBjYXJvdXNlbC5pbml0KCk7XG4gIHByb2plY3RzLmluaXQoKTtcbiAgbWVudS5pbml0KCk7XG4gIHNjcmVlbk9yaWVudGF0aW9uLmluaXQoKTtcbiAgZGFya01vZGUuaW5pdCgpO1xuICB0YWJDbGlja2FibGUuaW5pdCgpO1xuICB0aW1lbGluZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==