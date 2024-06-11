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
.right-\\[-34px\\] {
  right: -34px;
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
.origin-bottom-left {
  transform-origin: bottom left;
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

.img-tool,
#hello-wrapper,
#about,
#projects,
#contact {
  transition: transform 1s ease;
}

.img-tool.scaleAbout {
  transform: scale(1.5);
}

#hello-wrapper.hide {
  transform: translateY(100%);
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

#menu {
  opacity: 0;
  transition: opacity 500ms ease;
}

#menu.open {
  opacity: 1;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n:root {\n  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);\n  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);\n  --bounce-translateY: 25%;\n  --theme: rgb(248, 113, 113);\n  --theme-2: rgb(241, 245, 249);\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-2xl md:text-3xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full w-full max-w-screen-lg landscape:px-5 landscape:md:px-9 landscape:py-7 flex flex-col justify-around landscape:overflow-auto;\n    scrollbar-gutter: stable both-edges;\n  }\n\n  a.disabled,\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n\n  button {\n    @apply px-1 rounded-md;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    @apply w-5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-gradient-to-b from-red-400 border-solid border-x-4 border-y-0 border-theme-2 dark:border-dark;\n  }\n\n  ::-webkit-scrollbar-thumb:hover,\n  ::-webkit-scrollbar-thumb:active {\n    @apply bg-theme;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-fade {\n    @apply bg-red-300;\n  }\n\n  .bg-dark {\n    @apply bg-zinc-800;\n  }\n\n  .bg-dark-fade {\n    @apply bg-zinc-700;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100 dark:bg-dark;\n  }\n\n  .bg-theme-2-fade {\n    @apply bg-slate-200 dark:bg-dark-fade;\n  }\n\n  .text-light {\n    @apply text-zinc-800;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .border-dark {\n    @apply border-zinc-800;\n  }\n\n  .border-theme-2 {\n    @apply border-slate-100;\n  }\n\n  .border-wrapper {\n    @apply h-[calc(100%+16px)] w-[calc(100%+16px)] p-1 rounded-full;\n    background: linear-gradient(to bottom, var(--theme), transparent 80%);\n    /* More at MEDIA QUERY below */\n  }\n\n  .border-inner-wrapper {\n    @apply bg-theme-2 h-full w-full rounded-full;\n  }\n\n  .divider-theme {\n    @apply h-1 w-full rounded-sm;\n  }\n\n  .divider-theme.left {\n    @apply bg-gradient-to-r from-red-400;\n  }\n\n  .divider-theme.right {\n    @apply bg-gradient-to-l from-red-400;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .btn-nav-wrapper {\n    @apply w-36 absolute;\n  }\n\n  .btn-nav {\n    @apply w-36 flex justify-center items-center fixed;\n  }\n\n  .btn-theme {\n    @apply bg-theme-fade hover:bg-theme text-theme-2 dark:text-light;\n  }\n\n  .btn-theme-2 {\n    @apply bg-theme-2-fade hover:bg-theme-2 text-theme;\n  }\n\n  .btn-dark-mode {\n    @apply bg-theme h-[24px] aspect-[2] px-0 rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode:hover {\n    @apply landscape:bg-dark landscape:dark:bg-slate-100;\n  }\n\n  .dark-mode-ball {\n    @apply bg-theme-2 h-[calc(100%-4px)] aspect-square mx-[2px] rounded-md;\n  }\n\n  .article-inner-wrapper {\n    @apply flex flex-col gap-7;\n  }\n\n  .article-title {\n    @apply bg-theme-2 w-full portrait:sticky portrait:top-[55px] z-[96];\n  }\n\n  .timeline {\n    @apply landscape:w-full flex flex-col gap-5 overflow-hidden;\n    transition: height 1s ease;\n  }\n\n  .timeline.less {\n    -webkit-mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n    mask-image: linear-gradient(var(--theme-2) 50%, transparent);\n  }\n\n  .timeline:after {\n    @apply bg-dark dark:bg-slate-100 h-full w-1 absolute top-0 left-[50%] portrait:left-[5%] landscape:translate-x-[-50%] z-auto;\n    content: \"\";\n  }\n\n  .timeline-content {\n    @apply landscape:w-[50%] relative;\n  }\n\n  .timeline-content:after {\n    @apply bg-theme-2 hover:bg-theme h-4 aspect-square -ml-2 portrait:-ml-1.5 border-4 border-dark dark:border-slate-100 rounded-full absolute top-[2px] md:top-[6px] portrait:left-[5%] z-[1];\n    content: \"\";\n    transition: background-color 500ms ease;\n  }\n\n  .timeline-content:after.left {\n    @apply landscape:-right-2;\n  }\n\n  .timeline-content.right {\n    @apply landscape:left-[50%];\n  }\n\n  .timeline-content.left {\n    @apply landscape:left-0;\n  }\n\n  .timeline-inner-content {\n    @apply px-10 relative portrait:left-4;\n  }\n\n  .timeline-content.left .timeline-inner-content > p {\n    @apply landscape:text-end;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] landscape:py-7 flex portrait:flex-col-reverse gap-5 overflow-y-clip;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-6xl md:text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-outer-wrapper {\n    @apply w-full px-3 flex justify-center items-center;\n  }\n\n  .img-project-wrapper {\n    @apply h-full w-full flex justify-center items-center landscape:translate-y-[10%];\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project-inner-wrapper,\n  .img-project-inner-wrapper-even {\n    @apply h-full w-full;\n    outline: 1px solid transparent; /* Fix jagged edges */\n    /* More at MEDIA QUERY below*/\n  }\n\n  .img-project-inner-wrapper-mode {\n    @apply h-full w-full;\n  }\n\n  .img-project,\n  .img-project-mode {\n    @apply rounded-sm relative;\n  }\n\n  .img-project-mirror,\n  .img-project-mode-mirror,\n  .img-project-mode-dark,\n  .img-project-mode-dark-mirror {\n    @apply rounded-sm absolute top-0;\n  }\n\n  .img-project-m,\n  .img-project-mode-m,\n  .img-project-mode-m-dark {\n    @apply h-[75%] portrait:h-full border-2 border-black rounded-md absolute top-3 -right-3;\n  }\n\n  .img-project-mode,\n  .img-project-mode-mirror,\n  .img-project-mode-m {\n    @apply animate-mode-cycle;\n  }\n\n  .img-project-mode-dark,\n  .img-project-mode-dark-mirror,\n  .img-project-mode-m-dark {\n    @apply animate-mode-cycle-r;\n  }\n\n  .img-project-mirror,\n  .img-project-mode-mirror,\n  .img-project-mode-dark-mirror {\n    @apply translate-y-[calc(100%+2px)] -scale-y-100 portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, var(--theme-2));\n    mask-image: linear-gradient(transparent 80%, var(--theme-2));\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n\n  .tool-about,\n  [class^=\"tool-project\"] {\n    @apply aspect-square flex justify-center items-center;\n  }\n\n  .p-contact {\n    @apply py-0 text-left text-nowrap;\n  }\n\n  .icon-contact-wrapper {\n    @apply h-[40px] sm:h-[50px] aspect-square;\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 1s ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0;\n  }\n\n  .icon-home-link,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .stroke-contact {\n    @apply bg-theme-2;\n  }\n\n  .initial-contact {\n    @apply text-theme-2 dark:text-light;\n  }\n}\n\n@layer utilities {\n  #contact-card {\n    @apply landscape:shadow-[2px_2px_10px_rgb(39_39_42)] landscape:dark:shadow-[0px_0px_10px_rgb(241_245_249)];\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.box-underline:after {\n  @apply h-[2px] w-0 bg-theme rounded-full absolute left-1 bottom-0;\n  content: \"\";\n  transition: width 500ms ease;\n}\n\n.box-underline:hover:after {\n  @apply w-[calc(100%-6px)];\n}\n\n.fade-side {\n  -webkit-mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  mask-image: linear-gradient(\n    to right,\n    transparent,\n    var(--theme-2) 30% 70%,\n    transparent\n  );\n  /* More at MEDIA QUERY BELOW */\n}\n\n/* Transition */\na,\n#btn-timeline-toggle {\n  transition: transform 500ms ease;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n.dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n.dark-mode-ball.dark {\n  transform: translateX(calc(100% + 4px));\n}\n\n.img-tool,\n#hello-wrapper,\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n.img-tool.scaleAbout {\n  transform: scale(1.5);\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 500ms ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#bg-left,\n#bg-right {\n  transition:\n    width 1s ease,\n    opacity 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-right.shrink ~ #bg-left {\n  @apply rounded-lg opacity-75;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll,\n#info-wrapper,\n#info-wrapper > div {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide,\n#info-wrapper.hide,\n#info-wrapper > div.hide {\n  opacity: 0;\n}\n\n/* ANIMATION */\n[class^=\"animate\"] {\n  will-change: animation;\n}\n\n.animate-hello {\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  opacity: 0;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.animate-mode-cycle {\n  animation: appear-cycle 5s 2.5s infinite alternate;\n}\n\n.animate-mode-cycle-r {\n  opacity: 0;\n  animation: appear-cycle 5s 2.5s infinite alternate-reverse;\n}\n\n@keyframes appear-cycle {\n  0%,\n  33% {\n    opacity: 1;\n  }\n\n  66%,\n  100% {\n    opacity: 0;\n  }\n}\n\n/* Tailwind Bounce Custom */\n.animate-bounce-x {\n  animation: bounce-x 1s infinite;\n}\n\n.animate-bounce-y {\n  animation: bounce-y 3s infinite;\n}\n\n.animate-bounce-y-90 {\n  transform: rotate(90deg);\n  animation: bounce-y-90 3s infinite;\n}\n\n.animate-bounce-y-n90 {\n  transform: rotate(-90deg);\n  animation: bounce-y-n90 3s infinite;\n}\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-90 {\n  0%,\n  33% {\n    transform: rotate(90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-n90 {\n  0%,\n  33% {\n    transform: rotate(-90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(-90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n/* MEDIA QUERY */\n@media (orientation: landscape) {\n  .img-project-inner-wrapper {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-inner-wrapper-even {\n    transform: rotateY(20deg);\n  }\n\n  .border-wrapper {\n    background: linear-gradient(to bottom left, var(--theme), transparent 80%);\n  }\n}\n\n@media (orientation: portrait) {\n  html {\n    scrollbar-gutter: stable both-edges;\n  }\n}\n\n@media (min-width: 768px) {\n  .fade-side {\n    -webkit-mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n    mask-image: linear-gradient(\n      to right,\n      transparent,\n      var(--theme-2) 10% 90%,\n      transparent\n    );\n  }\n}\n"],"sourceRoot":""}]);
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
  const infoWrapper = document.querySelector("#info-wrapper");

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

      if (window.scrollY < threshold) _toggleBackground(1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSx5QkFBeUIsYUFBYSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxTQUFTLFlBQVksWUFBWSxNQUFNLE1BQU0sUUFBUSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sS0FBSyxRQUFRLFlBQVksS0FBSyxRQUFRLFdBQVcsYUFBYSxLQUFLLFFBQVEsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sS0FBSyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sV0FBVyxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLEtBQUssTUFBTSxVQUFVLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLE9BQU8sT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLE9BQU8sYUFBYSxlQUFlLGVBQWUsT0FBTyxRQUFRLFFBQVEsS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxlQUFlLE9BQU8sUUFBUSxPQUFPLFlBQVksY0FBYyxlQUFlLE9BQU8sUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLFFBQVEsT0FBTyxhQUFhLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxLQUFLLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsZUFBZSxPQUFPLFFBQVEsT0FBTyxhQUFhLGVBQWUsT0FBTyxRQUFRLE9BQU8sYUFBYSxlQUFlLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUss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Q0E7QUFDQSxNQUFNLHdEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLc0I7QUFDTjtBQUNNO0FBQ047O0FBRWU7QUFDTTtBQUNHO0FBQ0Q7QUFDRztBQUNBO0FBQ0c7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseUNBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwrQ0FBUTtBQUNkO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VztBQUNYLENBQUM7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUM3QnhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUMvQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ0Y7QUFDTTtBQUNBO0FBQ1I7QUFDMkI7QUFDbEI7QUFDUTtBQUNUOztBQUV6QztBQUNBLEVBQUUsOENBQU07QUFDUixFQUFFLDRDQUFLO0FBQ1AsRUFBRSxrREFBUTtBQUNWLEVBQUUsa0RBQVE7QUFDVixFQUFFLDBDQUFJO0FBQ04sRUFBRSxxRUFBaUI7QUFDbkIsRUFBRSxtREFBUTtBQUNWLEVBQUUsMkRBQVk7QUFDZCxFQUFFLGtEQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9jbGFzcy1Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvZGFyay1tb2RlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9zY3JlZW4tb3JpZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy90YWItY2xpY2thYmxlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy90b29scy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0LUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIlRydWVUeXBlXCIpO1xufVxuXG46cm9vdCB7XG4gIC0tdGltaW5nLWJvdW5jZS0xMDA6IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAtLXRpbWluZy1ib3VuY2UtNTA6IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAtLWJvdW5jZS10cmFuc2xhdGVZOiAyNSU7XG4gIC0tdGhlbWU6IHJnYigyNDgsIDExMywgMTEzKTtcbiAgLS10aGVtZS0yOiByZ2IoMjQxLCAyNDUsIDI0OSk7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJvZHkgKiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTBtcztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICB9XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG59XG5cbmFydGljbGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG5hcnRpY2xlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbmFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgYXJ0aWNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgYXJ0aWNsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIGFydGljbGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMi4yNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuYXJ0aWNsZSB7XG4gICAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG4gIH1cblxuYS5kaXNhYmxlZCxcbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIDEpO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYS5kaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKiksXG4gIGJ1dHRvbjpkaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMSk7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5hLmRpc2FibGVkLFxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEuMjVyZW07XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2Y4NzE3MSB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC10bzogcmdiYSgyNDgsIDExMywgMTEzLCAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG5cbjp3aGVyZSguZGFyaywgLmRhcmsgKik6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5iZy10aGVtZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRleHQtbGlnaHQge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDE2cHgpO1xuICB3aWR0aDogY2FsYygxMDAlICsgMTZweCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQ4LCAxMTMsIDExMyksIHRyYW5zcGFyZW50IDgwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgYmVsb3cgKi9cbn1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLWlubmVyLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItaW5uZXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbi5kaXZpZGVyLXRoZW1lIHtcbiAgaGVpZ2h0OiAwLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uZGl2aWRlci10aGVtZS5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xuICAtLXR3LWdyYWRpZW50LWZyb206ICNmODcxNzEgdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMjQ4LCAxMTMsIDExMywgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLmRpdmlkZXItdGhlbWUucmlnaHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjZjg3MTcxIHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcbn1cbi5jb250ZW50LXdyYXBwZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4uY29udGVudC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG4gIH1cbn1cbi5idG4tbmF2LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5cmVtO1xufVxuLmJ0bi1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxNjUsIDE2NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZTpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDcwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi10aGVtZS0yOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tdGhlbWUtMjpob3Zlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBhc3BlY3QtcmF0aW86IDI7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIC0tdHctc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAwIDJweCA0cHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5idG4tZGFyay1tb2RlOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxuXG4gIC5idG4tZGFyay1tb2RlOmhvdmVyOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFyay1tb2RlLWJhbGw6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmFydGljbGUtaW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS43NXJlbTtcbn1cbi5hcnRpY2xlLXRpdGxlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hcnRpY2xlLXRpdGxlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYXJ0aWNsZS10aXRsZSB7XG4gIHotaW5kZXg6IDk2O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmFydGljbGUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA1NXB4O1xuICB9XG59XG4udGltZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAudGltZWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4udGltZWxpbmUge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICB9XG4udGltZWxpbmUubGVzcyB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI0MSwgMjQ1LCAyNDkpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjQxLCAyNDUsIDI0OSkgNTAlLCB0cmFuc3BhcmVudCk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xuICB9XG4udGltZWxpbmU6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAuMjVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC50aW1lbGluZTphZnRlciB7XG4gICAgbGVmdDogNSU7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZTphZnRlciB7XG4gICAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi50aW1lbGluZTp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4udGltZWxpbmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC50aW1lbGluZS1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4udGltZWxpbmUtY29udGVudDphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGltZWxpbmUtY29udGVudDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGJvcmRlci13aWR0aDogNHB4O1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6aG92ZXI6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIHRvcDogNnB4O1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcbiAgICBsZWZ0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtO1xuICB9XG59XG4udGltZWxpbmUtY29udGVudDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAudGltZWxpbmUtY29udGVudC5sZWZ0OmFmdGVyIHtcbiAgICByaWdodDogLTAuNXJlbTtcbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50LnJpZ2h0IHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAudGltZWxpbmUtY29udGVudC5sZWZ0IHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cbi50aW1lbGluZS1pbm5lci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAudGltZWxpbmUtaW5uZXItY29udGVudCB7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLnRpbWVsaW5lLWNvbnRlbnQubGVmdCAudGltZWxpbmUtaW5uZXItY29udGVudCA+IHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4uY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBnYXA6IDEuMjVyZW07XG4gIG92ZXJmbG93LXk6IGNsaXA7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICAgIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICB9XG59XG4uaW5kZXgtcHJvamVjdC13cmFwcGVyIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMjUlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uaW5mby1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4uaW1nLXByb2plY3Qtb3V0ZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLmltZy1wcm9qZWN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAxMCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG4gIH1cbi5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIEZpeCBqYWdnZWQgZWRnZXMgKi9cbiAgICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIGJlbG93Ki9cbn1cbi5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLW1vZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZy1wcm9qZWN0LFxuICAuaW1nLXByb2plY3QtbW9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmssXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uaW1nLXByb2plY3QtbSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbS1kYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzVyZW07XG4gIHJpZ2h0OiAtMC43NXJlbTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmltZy1wcm9qZWN0LW0sXG4gIC5pbWctcHJvamVjdC1tb2RlLW0sXG4gIC5pbWctcHJvamVjdC1tb2RlLW0tZGFyayB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uaW1nLXByb2plY3QtbW9kZSxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1tIHtcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uaW1nLXByb2plY3QtbW9kZS1kYXJrLFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLW1pcnJvcixcbiAgLmltZy1wcm9qZWN0LW1vZGUtbS1kYXJrIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLW1pcnJvcixcbiAgLmltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3Ige1xuICAtLXR3LXRyYW5zbGF0ZS15OiBjYWxjKDEwMCUgKyAycHgpO1xuICAtLXR3LXNjYWxlLXk6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIGNhbGMoMTAwJSArIDJweCkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHJnYigyNDEsIDI0NSwgMjQ5KSk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgcmdiKDI0MSwgMjQ1LCAyNDkpKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB2YXIoLS10aGVtZS0yKSk7XG4gIH1cbi50b29scy13cmFwcGVyLW91dGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi50b29scy13cmFwcGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvb2wtYWJvdXQsXG4gIFtjbGFzc149XCJ0b29sLXByb2plY3RcIl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wLWNvbnRhY3Qge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pY29uLWNvbnRhY3Qtd3JhcHBlciB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogNDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWNvbnRhY3Qtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG4uaWNvbi1tb2RlLWRhcmssXG4gIC5pY29uLW1vZGUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgfVxuLmljb24tbW9kZS1kYXJrIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5pY29uLW1vZGUtZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1ob21lLWxpbmssXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmljb24taG9tZS1saW5rLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5zdHJva2UtY29udGFjdCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uc3Ryb2tlLWNvbnRhY3Q6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5pbml0aWFsLWNvbnRhY3Qge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmluaXRpYWwtY29udGFjdDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLi1sZWZ0LTIge1xuICBsZWZ0OiAtMC41cmVtO1xufVxuLi10b3AtMiB7XG4gIHRvcDogLTAuNXJlbTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LVxcXFxbLTQ0cHhcXFxcXSB7XG4gIGxlZnQ6IC00NHB4O1xufVxuLmxlZnQtXFxcXFsyOHB4XFxcXF0ge1xuICBsZWZ0OiAyOHB4O1xufVxuLmxlZnQtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICBsZWZ0OiA1MCU7XG59XG4ubGVmdC1cXFxcW2NhbGNcXFxcKDUwXFxcXCUtNzJweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDcycHgpO1xufVxuLnJpZ2h0LVxcXFxbLTM0cHhcXFxcXSB7XG4gIHJpZ2h0OiAtMzRweDtcbn1cbi5yaWdodC1cXFxcWzI4cHhcXFxcXSB7XG4gIHJpZ2h0OiAyOHB4O1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzYycHhcXFxcXSB7XG4gIHRvcDogNjJweDtcbn1cbi50b3AtXFxcXFtjYWxjXFxcXCg1MFxcXFwlLTE0cHhcXFxcKVxcXFxdIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xufVxuLnotXFxcXFsxXFxcXF0ge1xuICB6LWluZGV4OiAxO1xufVxuLnotXFxcXFsyXFxcXF0ge1xuICB6LWluZGV4OiAyO1xufVxuLnotXFxcXFs5NlxcXFxdIHtcbiAgei1pbmRleDogOTY7XG59XG4uei1cXFxcWzk3XFxcXF0ge1xuICB6LWluZGV4OiA5Nztcbn1cbi56LVxcXFxbOThcXFxcXSB7XG4gIHotaW5kZXg6IDk4O1xufVxuLnotXFxcXFs5OVxcXFxdIHtcbiAgei1pbmRleDogOTk7XG59XG4uei1hdXRvIHtcbiAgei1pbmRleDogYXV0bztcbn1cbi5vcmRlci0xIHtcbiAgb3JkZXI6IDE7XG59XG4ub3JkZXItMiB7XG4gIG9yZGVyOiAyO1xufVxuLm10LTAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ubXQtMFxcXFwuNSB7XG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xufVxuLm10LVxcXFxbLTU2cHhcXFxcXSB7XG4gIG1hcmdpbi10b3A6IC01NnB4O1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXNwZWN0LVxcXFxbM1xcXFxdIHtcbiAgYXNwZWN0LXJhdGlvOiAzO1xufVxuLmFzcGVjdC1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLmgtMVxcXFwvMiB7XG4gIGhlaWdodDogNTAlO1xufVxuLmgtMVxcXFwvNCB7XG4gIGhlaWdodDogMjUlO1xufVxuLmgtMTQge1xuICBoZWlnaHQ6IDMuNXJlbTtcbn1cbi5oLVxcXFxbMTRweFxcXFxdIHtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuLmgtXFxcXFsxNnB4XFxcXF0ge1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uaC1cXFxcWzI0cHhcXFxcXSB7XG4gIGhlaWdodDogMjRweDtcbn1cbi5oLVxcXFxbMjUwXFxcXCVcXFxcXSB7XG4gIGhlaWdodDogMjUwJTtcbn1cbi5oLVxcXFxbMzAwXFxcXCVcXFxcXSB7XG4gIGhlaWdodDogMzAwJTtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMTAwdmgtMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctMVxcXFwvNCB7XG4gIHdpZHRoOiAyNSU7XG59XG4udy0zXFxcXC80IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi53LTM2IHtcbiAgd2lkdGg6IDlyZW07XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiAzMCU7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMFxcXFwlLThweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNDBweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA0MHB4KTtcbn1cbi53LWZpdCB7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF4LXctMnhsIHtcbiAgbWF4LXdpZHRoOiA0MnJlbTtcbn1cbi5tYXgtdy14bCB7XG4gIG1heC13aWR0aDogMzZyZW07XG59XG4ub3JpZ2luLWJvdHRvbS1sZWZ0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstMTAwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjIwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yMjAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy0yNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yNSUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiAtOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS00NSB7XG4gIC0tdHctcm90YXRlOiA0NWRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg0NWRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLVxcXFxbLTI3ZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogLTI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC0yN2RlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtXFxcXFsyN2RlZ1xcXFxdIHtcbiAgLS10dy1yb3RhdGU6IDI3ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDI3ZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS1cXFxcWzUwZGVnXFxcXF0ge1xuICAtLXR3LXJvdGF0ZTogNTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoNTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2NhbGUtNzUge1xuICAtLXR3LXNjYWxlLXg6IC43NTtcbiAgLS10dy1zY2FsZS15OiAuNzU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKC43NSkgc2NhbGVZKC43NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1zY2FsZS15LTEwMCB7XG4gIC0tdHctc2NhbGUteTogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5zZWxlY3Qtbm9uZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qdXN0aWZ5LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmdhcC0xIHtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuLmdhcC0xNCB7XG4gIGdhcDogMy41cmVtO1xufVxuLmdhcC0yIHtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZ2FwLTMge1xuICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4uZ2FwLTcge1xuICBnYXA6IDEuNzVyZW07XG59XG4uc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy14LWhpZGRlbiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy15LWNsaXAge1xuICBvdmVyZmxvdy15OiBjbGlwO1xufVxuLnRleHQtcHJldHR5IHtcbiAgdGV4dC13cmFwOiBwcmV0dHk7XG59XG4ucm91bmRlZC1mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLmJnLWxlZnQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xufVxuLmJnLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG59XG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbn1cbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi5weC03IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtXFxcXFsxMHZ3XFxcXF0ge1xuICBmb250LXNpemU6IDEwdnc7XG59XG4udGV4dC1cXFxcWzI0cHhcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5cXFxcIWxlYWRpbmctXFxcXFswXFxcXC41XFxcXF0ge1xuICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG4ubGVhZGluZy1cXFxcWzBcXFxcLjhcXFxcXSB7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4ubGVhZGluZy1ub25lIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udGV4dC10cmFuc3BhcmVudCB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgI2NvbnRhY3QtY2FyZCB7XG4gICAgLS10dy1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoMzksIDM5LCA0Mik7XG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMnB4IDJweCAxMHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAycHggMnB4IDEwcHggcmdiKDM5LCAzOSwgNDIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xuICB9XG5cbiAgI2NvbnRhY3QtY2FyZDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAgIC0tdHctc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDI0MSwgMjQ1LCAyNDkpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAwcHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMHB4IDBweCAxMHB4IHJnYigyNDEsIDI0NSwgMjQ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgfVxufVxuXG4ubW9udHNlcnJhdCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmO1xufVxuXG4uYm94LXVuZGVybGluZTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMC4yNXJlbTtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XG59XG5cbi5ib3gtdW5kZXJsaW5lOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5mYWRlLXNpZGUge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlLHJnYigyNDEsIDI0NSwgMjQ5KSA3MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlLHZhcigtLXRoZW1lLTIpIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDMwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgNzAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICB2YXIoLS10aGVtZS0yKSAzMCUsdmFyKC0tdGhlbWUtMikgNzAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2IoMjQxLCAyNDUsIDI0OSkgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIEJFTE9XICovXG59XG5cbkBzdXBwb3J0cyAoYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJlZCAwJSwgcmVkIDAlIDElLCByZWQgMiUpKSB7XG4uZmFkZS1zaWRlIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xufVxufVxuXG4vKiBUcmFuc2l0aW9uICovXG5hLFxuI2J0bi10aW1lbGluZS10b2dnbGUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cblxuLnRvb2wtYWJvdXQsXG5bY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdLFxuLmRhcmstbW9kZS1iYWxsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbi5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDRweCkpO1xufVxuXG4uaW1nLXRvb2wsXG4jaGVsbG8td3JhcHBlcixcbiNhYm91dCxcbiNwcm9qZWN0cyxcbiNjb250YWN0IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG59XG5cbi5pbWctdG9vbC5zY2FsZUFib3V0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4jaGVsbG8td3JhcHBlci5oaWRlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuXG4jYWJvdXQuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xufVxuXG4jcHJvamVjdHMuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcbn1cblxuI2NvbnRhY3QuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcbn1cblxuI21lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG59XG5cbiNtZW51Lm9wZW4ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jYmctbGVmdCxcbiNiZy1yaWdodCB7XG4gIHRyYW5zaXRpb246XG4gICAgd2lkdGggMXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlO1xufVxuXG4jYmctbGVmdC5zaHJpbmssXG4jYmctcmlnaHQuc2hyaW5rIHtcbiAgd2lkdGg6IDA7XG59XG5cbiNiZy1yaWdodC5zaHJpbmsgfiAjYmctbGVmdCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuI2JnLWludHJvLFxuI3NlY3Rpb24taW50cm8ge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbn1cblxuI2JnLWludHJvLnNocmluayxcbiNzZWN0aW9uLWludHJvLnNocmluayB7XG4gIGhlaWdodDogY2FsYygoMTAwc3ZoIC8gMikgLSA1NnB4KTtcbn1cblxubmF2LFxuI3Njcm9sbCxcbiNpbmZvLXdyYXBwZXIsXG4jaW5mby13cmFwcGVyID4gZGl2IHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xufVxuXG5uYXYuaGlkZSxcbiNzY3JvbGwuaGlkZSxcbiNpbmZvLXdyYXBwZXIuaGlkZSxcbiNpbmZvLXdyYXBwZXIgPiBkaXYuaGlkZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuW2NsYXNzXj1cImFuaW1hdGVcIl0ge1xuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xufVxuXG4uYW5pbWF0ZS1oZWxsbyB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5hbmltYXRlLWFwcGVhciB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmFuaW1hdGUtbW9kZS1jeWNsZSB7XG4gIGFuaW1hdGlvbjogYXBwZWFyLWN5Y2xlIDVzIDIuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYW5pbWF0ZS1tb2RlLWN5Y2xlLXIge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGFwcGVhci1jeWNsZSA1cyAyLjVzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhci1jeWNsZSB7XG4gIDAlLFxuICAzMyUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA2NiUsXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xuLmFuaW1hdGUtYm91bmNlLXgge1xuICBhbmltYXRpb246IGJvdW5jZS14IDFzIGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1ib3VuY2UteSB7XG4gIGFuaW1hdGlvbjogYm91bmNlLXkgM3MgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15LTkwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBhbmltYXRpb246IGJvdW5jZS15LTkwIDNzIGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1ib3VuY2UteS1uOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBhbmltYXRpb246IGJvdW5jZS15LW45MCAzcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2UteCB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteSB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XG4gIH1cbiAgMTYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LTkwIHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LW45MCB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuLyogTUVESUEgUVVFUlkgKi9cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XG4gIH1cblxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpO1xuICB9XG5cbiAgLmJvcmRlci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYigyNDgsIDExMywgMTEzKSwgdHJhbnNwYXJlbnQgODAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHZhcigtLXRoZW1lKSwgdHJhbnNwYXJlbnQgODAlKTtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBodG1sIHtcbiAgICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZhZGUtc2lkZSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDEwJSxyZ2IoMjQxLCAyNDUsIDI0OSkgOTAlLFxuICAgICAgdHJhbnNwYXJlbnRcbiAgICApO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHZhcigtLXRoZW1lLTIpIDEwJSx2YXIoLS10aGVtZS0yKSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDEwJSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYigyNDEsIDI0NSwgMjQ5KSAxMCUscmdiKDI0MSwgMjQ1LCAyNDkpIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdmFyKC0tdGhlbWUtMikgMTAlLHZhcigtLXRoZW1lLTIpIDkwJSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiKDI0MSwgMjQ1LCAyNDkpIDEwJSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gIH1cblxuQHN1cHBvcnRzIChiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmVkIDAlLCByZWQgMCUgMSUsIHJlZCAyJSkpIHtcbi5mYWRlLXNpZGUge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHZhcigtLXRoZW1lLTIpIDEwJSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHZhcigtLXRoZW1lLTIpIDEwJSA5MCUsXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gIH1cbn1cbn1cblxuLmZpcnN0LWxldHRlclxcXFw6dGV4dC10aGVtZTo6Zmlyc3QtbGV0dGVyIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOnNjYWxlLTExMDpob3ZlciB7XG4gIC0tdHctc2NhbGUteDogMS4xO1xuICAtLXR3LXNjYWxlLXk6IDEuMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMS4xKSBzY2FsZVkoMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5cbi5ob3ZlclxcXFw6c2NhbGUtXFxcXFsxMTBcXFxcJVxcXFxdOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxMTAlO1xuICAtLXR3LXNjYWxlLXk6IDExMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDExMCUpIHNjYWxlWSgxMTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5zbVxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNtXFxcXDpmbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOmgtXFxcXFsxOHB4XFxcXF0ge1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuXG4gIC5tZFxcXFw6aC1cXFxcWzIwcHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLm1kXFxcXDpoLVxcXFxbMjhweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAubWRcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMjVcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnNjYWxlLTEwMCB7XG4gICAgLS10dy1zY2FsZS14OiAxO1xuICAgIC0tdHctc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxKSBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnB4LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtXFxcXFsyOHB4XFxcXF0ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC14bCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcblxuICAueGxcXFxcOmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC54bFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnBvcnRyYWl0XFxcXDpib3R0b20tOCB7XG4gICAgYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpsZWZ0LWZ1bGwge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOm9yZGVyLTEge1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpvcmRlci0yIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6bXQtXFxcXFs1NnB4XFxcXF0ge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcW2NhbGNcXFxcKDEwMHN2aC01NnB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDU2cHgpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1cXFxcWzYwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1cXFxcWzcwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6LXJvdGF0ZS05MCB7XG4gICAgLS10dy1yb3RhdGU6IC05MGRlZztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpyb3RhdGUtMCB7XG4gICAgLS10dy1yb3RhdGU6IDBkZWc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnJvdGF0ZS05MCB7XG4gICAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleC1jb2wtcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTE0IHtcbiAgICBnYXA6IDMuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTcge1xuICAgIGdhcDogMS43NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cm91bmRlZC1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnAtMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cGItMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dGV4dC1cXFxcWzE1dndcXFxcXSB7XG4gICAgZm9udC1zaXplOiAxNXZ3O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgICAucG9ydHJhaXRcXFxcOnNtXFxcXDp3LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0XFxcXDpzbVxcXFw6dy1cXFxcWzgwXFxcXCVcXFxcXSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5wb3J0cmFpdFxcXFw6c21cXFxcOnBiLTcge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICAucG9ydHJhaXRcXFxcOm1kXFxcXDpib3R0b20tMTQge1xuICAgICAgYm90dG9tOiAzLjVyZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5sYW5kc2NhcGVcXFxcOmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDphc3BlY3QtXFxcXFsxXFxcXC44XFxcXF0ge1xuICAgIGFzcGVjdC1yYXRpbzogMS44O1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aC1cXFxcWzEwMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp3LVxcXFxbODBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXgtXFxcXFstMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogLTE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteDogMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteS1cXFxcWzE1MFxcXFwlXFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXk6IDE1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAxNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6ZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6anVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6Z2FwLTIwIHtcbiAgICBnYXA6IDVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpvdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpyb3VuZGVkLXhsIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cm91bmRlZC1sLWxnIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6cm91bmRlZC1yLWxnIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpwLTcge1xuICAgIHBhZGRpbmc6IDEuNzVyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpweS01IHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRleHQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmxhbmRzY2FwZVxcXFw6bWRcXFxcOnctXFxcXFtjYWxjXFxcXCgxMDB2dy0yXFxcXCo1NnB4XFxcXClcXFxcXSB7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA1NnB4KTtcbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCx5QkFBeUI7RUFDekIsK0RBQTREO0FBQzlEOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDhDQUE4QztFQUM5Qyx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjs7QUFFQSxpRUFBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw4TEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLHVCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZCx3RUFBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLCtGQUFjO0VBQWQsd0RBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsaUJBQWM7RUFBZDtBQUFjOztBQUFkOztFQUFBO0lBQUEsbUJBQWM7SUFBZDtFQUFjO0FBQUE7O0FBQWQ7RUFBQSxrQkFBYztFQUFkO0FBQWM7O0FBQWQ7O0VBQUE7SUFBQSxpQkFB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QUEsZ0JBQW1CO0VBQW5CLGdMQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEseUJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFB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QTJuQkE7SUEzbkJBO0VBMm5CQTs7RUEzbkJBO0lBQUEsbUJBMm5CQTtJQTNuQkE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBLG1CQTJuQkE7SUEzbkJBO0VBMm5CQTs7RUEzbkJBO0lBQUEsa0JBMm5CQTtJQTNuQkE7RUEybkJBO0FBQUE7O0FBM25CQTs7RUFBQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBO0FBQUE7O0FBM25CQTs7RUFBQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBLG1CQTJuQkE7SUEzbkJBLHFMQTJuQkE7SUEzbkJBO0VBMm5CQTs7RUEzbkJBO0lBQUEsaUJBMm5CQTtJQTNuQkEsbUxBMm5CQTtJQTNuQkE7RUEybkJBOztFQTNuQkE7SUFBQSxrQkEybkJBO0lBM25CQSxvTEEybkJBO0lBM25CQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7O0lBQUE7TUFBQTtJQTJuQkE7O0lBM25CQTtNQUFBO0lBMm5CQTs7SUEzbkJBO01BQUE7SUEybkJBO0VBQUE7O0VBM25CQTs7SUFBQTtNQUFBO0lBMm5CQTtFQUFBO0FBQUE7O0FBM25CQTs7RUFBQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQSx1QkEybkJBO0lBM25CQSwrS0EybkJBO0lBM25CQTtFQTJuQkE7O0VBM25CQTtJQUFBLHNCQTJuQkE7SUEzbkJBLDhLQTJuQkE7SUEzbkJBO0VBMm5CQTs7RUEzbkJBO0lBQUEsc0JBMm5CQTtJQTNuQkEsOEtBMm5CQTtJQTNuQkE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQSw4QkEybkJBO0lBM25CQTtFQTJuQkE7O0VBM25CQTtJQUFBLCtCQTJuQkE7SUEzbkJBO0VBMm5CQTs7RUEzbkJBO0lBQUE7RUEybkJBOztFQTNuQkE7SUFBQSxvQkEybkJBO0lBM25CQTtFQTJuQkE7O0VBM25CQTtJQUFBO0VBMm5CQTs7RUEzbkJBOztJQUFBO01BQUE7SUEybkJBO0VBQUE7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250L01vbnRzZXJyYXQtRXh0cmFCb2xkLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRpbWluZy1ib3VuY2UtMTAwOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG4gIC0tdGltaW5nLWJvdW5jZS01MDogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XFxuICAtLWJvdW5jZS10cmFuc2xhdGVZOiAyNSU7XFxuICAtLXRoZW1lOiByZ2IoMjQ4LCAxMTMsIDExMyk7XFxuICAtLXRoZW1lLTI6IHJnYigyNDEsIDI0NSwgMjQ5KTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tWzUwbXNdO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0yeGwgbWQ6dGV4dC0zeGw7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtMnhsO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHBvcnRyYWl0OmJnLXRyYW5zcGFyZW50IGgtZnVsbCB3LWZ1bGwgbWF4LXctc2NyZWVuLWxnIGxhbmRzY2FwZTpweC01IGxhbmRzY2FwZTptZDpweC05IGxhbmRzY2FwZTpweS03IGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmQgbGFuZHNjYXBlOm92ZXJmbG93LWF1dG87XFxuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbiAgfVxcblxcbiAgYS5kaXNhYmxlZCxcXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LWRpc2FibGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIEBhcHBseSBweC0xIHJvdW5kZWQtbWQ7XFxuICB9XFxuXFxuICAvKiBTY3JvbGxiYXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgdy01O1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1iIGZyb20tcmVkLTQwMCBib3JkZXItc29saWQgYm9yZGVyLXgtNCBib3JkZXIteS0wIGJvcmRlci10aGVtZS0yIGRhcms6Ym9yZGVyLWRhcms7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgICBAYXBwbHkgYmctdGhlbWU7XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5iZy10aGVtZSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLWZhZGUge1xcbiAgICBAYXBwbHkgYmctcmVkLTMwMDtcXG4gIH1cXG5cXG4gIC5iZy1kYXJrIHtcXG4gICAgQGFwcGx5IGJnLXppbmMtODAwO1xcbiAgfVxcblxcbiAgLmJnLWRhcmstZmFkZSB7XFxuICAgIEBhcHBseSBiZy16aW5jLTcwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTEwMCBkYXJrOmJnLWRhcms7XFxuICB9XFxuXFxuICAuYmctdGhlbWUtMi1mYWRlIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTIwMCBkYXJrOmJnLWRhcmstZmFkZTtcXG4gIH1cXG5cXG4gIC50ZXh0LWxpZ2h0IHtcXG4gICAgQGFwcGx5IHRleHQtemluYy04MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZSB7XFxuICAgIEBhcHBseSB0ZXh0LXJlZC00MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZS0yIHtcXG4gICAgQGFwcGx5IHRleHQtc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLnRleHQtZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC16aW5jLTQwMCBkYXJrOnRleHQtemluYy01MDA7XFxuICB9XFxuXFxuICAuYm9yZGVyLXRoZW1lIHtcXG4gICAgQGFwcGx5IGJvcmRlci1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci1kYXJrIHtcXG4gICAgQGFwcGx5IGJvcmRlci16aW5jLTgwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUtMiB7XFxuICAgIEBhcHBseSBib3JkZXItc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLmJvcmRlci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwJSsxNnB4KV0gdy1bY2FsYygxMDAlKzE2cHgpXSBwLTEgcm91bmRlZC1mdWxsO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS10aGVtZSksIHRyYW5zcGFyZW50IDgwJSk7XFxuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgYmVsb3cgKi9cXG4gIH1cXG5cXG4gIC5ib3JkZXItaW5uZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsO1xcbiAgfVxcblxcbiAgLmRpdmlkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgaC0xIHctZnVsbCByb3VuZGVkLXNtO1xcbiAgfVxcblxcbiAgLmRpdmlkZXItdGhlbWUubGVmdCB7XFxuICAgIEBhcHBseSBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5kaXZpZGVyLXRoZW1lLnJpZ2h0IHtcXG4gICAgQGFwcGx5IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTphYnNvbHV0ZSB0b3AtMCBsZWZ0LTA7XFxuICB9XFxuXFxuICAuY29udGVudC1zZWN0aW9uIHtcXG4gICAgQGFwcGx5IGgtZnVsbCB3LWZ1bGwgbGFuZHNjYXBlOnB5LTE0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLmJ0bi1uYXYtd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LTM2IGFic29sdXRlO1xcbiAgfVxcblxcbiAgLmJ0bi1uYXYge1xcbiAgICBAYXBwbHkgdy0zNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmaXhlZDtcXG4gIH1cXG5cXG4gIC5idG4tdGhlbWUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtZmFkZSBob3ZlcjpiZy10aGVtZSB0ZXh0LXRoZW1lLTIgZGFyazp0ZXh0LWxpZ2h0O1xcbiAgfVxcblxcbiAgLmJ0bi10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTItZmFkZSBob3ZlcjpiZy10aGVtZS0yIHRleHQtdGhlbWU7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZSBoLVsyNHB4XSBhc3BlY3QtWzJdIHB4LTAgcm91bmRlZC1tZCBzaGFkb3ctaW5uZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlOmhvdmVyIHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTpiZy1kYXJrIGxhbmRzY2FwZTpkYXJrOmJnLXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbCB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIGgtW2NhbGMoMTAwJS00cHgpXSBhc3BlY3Qtc3F1YXJlIG14LVsycHhdIHJvdW5kZWQtbWQ7XFxuICB9XFxuXFxuICAuYXJ0aWNsZS1pbm5lci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGZsZXggZmxleC1jb2wgZ2FwLTc7XFxuICB9XFxuXFxuICAuYXJ0aWNsZS10aXRsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHctZnVsbCBwb3J0cmFpdDpzdGlja3kgcG9ydHJhaXQ6dG9wLVs1NXB4XSB6LVs5Nl07XFxuICB9XFxuXFxuICAudGltZWxpbmUge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOnctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC01IG92ZXJmbG93LWhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XFxuICB9XFxuXFxuICAudGltZWxpbmUubGVzcyB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXRoZW1lLTIpIDUwJSwgdHJhbnNwYXJlbnQpO1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGhlbWUtMikgNTAlLCB0cmFuc3BhcmVudCk7XFxuICB9XFxuXFxuICAudGltZWxpbmU6YWZ0ZXIge1xcbiAgICBAYXBwbHkgYmctZGFyayBkYXJrOmJnLXNsYXRlLTEwMCBoLWZ1bGwgdy0xIGFic29sdXRlIHRvcC0wIGxlZnQtWzUwJV0gcG9ydHJhaXQ6bGVmdC1bNSVdIGxhbmRzY2FwZTp0cmFuc2xhdGUteC1bLTUwJV0gei1hdXRvO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50IHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTp3LVs1MCVdIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMiBob3ZlcjpiZy10aGVtZSBoLTQgYXNwZWN0LXNxdWFyZSAtbWwtMiBwb3J0cmFpdDotbWwtMS41IGJvcmRlci00IGJvcmRlci1kYXJrIGRhcms6Ym9yZGVyLXNsYXRlLTEwMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdG9wLVsycHhdIG1kOnRvcC1bNnB4XSBwb3J0cmFpdDpsZWZ0LVs1JV0gei1bMV07XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAudGltZWxpbmUtY29udGVudDphZnRlci5sZWZ0IHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTotcmlnaHQtMjtcXG4gIH1cXG5cXG4gIC50aW1lbGluZS1jb250ZW50LnJpZ2h0IHtcXG4gICAgQGFwcGx5IGxhbmRzY2FwZTpsZWZ0LVs1MCVdO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQubGVmdCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6bGVmdC0wO1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWlubmVyLWNvbnRlbnQge1xcbiAgICBAYXBwbHkgcHgtMTAgcmVsYXRpdmUgcG9ydHJhaXQ6bGVmdC00O1xcbiAgfVxcblxcbiAgLnRpbWVsaW5lLWNvbnRlbnQubGVmdCAudGltZWxpbmUtaW5uZXItY29udGVudCA+IHAge1xcbiAgICBAYXBwbHkgbGFuZHNjYXBlOnRleHQtZW5kO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctWzkwJV0gbGFuZHNjYXBlOnB5LTcgZmxleCBwb3J0cmFpdDpmbGV4LWNvbC1yZXZlcnNlIGdhcC01IG92ZXJmbG93LXktY2xpcDtcXG4gIH1cXG5cXG4gIC5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdGV4dC10aGVtZSB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdHJhbnNsYXRlLXgtWy0yNSVdIHRyYW5zbGF0ZS15LVstMjUlXSB6LWF1dG87XFxuICB9XFxuXFxuICAuaW5mby1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctZnVsbCBwLTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBnYXAtNTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1vdXRlci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHctZnVsbCBweC0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsYW5kc2NhcGU6dHJhbnNsYXRlLXktWzEwJV07XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDUwMHB4O1xcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlcixcXG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyLWV2ZW4ge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiBGaXggamFnZ2VkIGVkZ2VzICovXFxuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgYmVsb3cqL1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LWlubmVyLXdyYXBwZXItbW9kZSB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LFxcbiAgLmltZy1wcm9qZWN0LW1vZGUge1xcbiAgICBAYXBwbHkgcm91bmRlZC1zbSByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3Ige1xcbiAgICBAYXBwbHkgcm91bmRlZC1zbSBhYnNvbHV0ZSB0b3AtMDtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1tLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbSxcXG4gIC5pbWctcHJvamVjdC1tb2RlLW0tZGFyayB7XFxuICAgIEBhcHBseSBoLVs3NSVdIHBvcnRyYWl0OmgtZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBhYnNvbHV0ZSB0b3AtMyAtcmlnaHQtMztcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1tb2RlLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbWlycm9yLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbSB7XFxuICAgIEBhcHBseSBhbmltYXRlLW1vZGUtY3ljbGU7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbW9kZS1kYXJrLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbW9kZS1tLWRhcmsge1xcbiAgICBAYXBwbHkgYW5pbWF0ZS1tb2RlLWN5Y2xlLXI7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtbWlycm9yLFxcbiAgLmltZy1wcm9qZWN0LW1vZGUtZGFyay1taXJyb3Ige1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXktW2NhbGMoMTAwJSsycHgpXSAtc2NhbGUteS0xMDAgcG9ydHJhaXQ6aGlkZGVuO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHZhcigtLXRoZW1lLTIpKTtcXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgdmFyKC0tdGhlbWUtMikpO1xcbiAgfVxcblxcbiAgLnRvb2xzLXdyYXBwZXItb3V0ZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy14LWhpZGRlbjtcXG4gIH1cXG5cXG4gIC50b29scy13cmFwcGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAudG9vbC1hYm91dCxcXG4gIFtjbGFzc149XFxcInRvb2wtcHJvamVjdFxcXCJdIHtcXG4gICAgQGFwcGx5IGFzcGVjdC1zcXVhcmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAucC1jb250YWN0IHtcXG4gICAgQGFwcGx5IHB5LTAgdGV4dC1sZWZ0IHRleHQtbm93cmFwO1xcbiAgfVxcblxcbiAgLmljb24tY29udGFjdC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGgtWzQwcHhdIHNtOmgtWzUwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlLWRhcmssXFxuICAuaWNvbi1tb2RlIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZS1kYXJrIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMCBkYXJrOm9wYWNpdHktMTAwO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZSB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTEwMCBkYXJrOm9wYWNpdHktMDtcXG4gIH1cXG5cXG4gIC5pY29uLWhvbWUtbGluayxcXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XFxuICAgIEBhcHBseSBoLVszMHB4XSBzbTpoLVs0MHB4XSB0ZXh0LVszMHB4XSBzbTp0ZXh0LVs0MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgfVxcblxcbiAgLnN0cm9rZS1jb250YWN0IHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTI7XFxuICB9XFxuXFxuICAuaW5pdGlhbC1jb250YWN0IHtcXG4gICAgQGFwcGx5IHRleHQtdGhlbWUtMiBkYXJrOnRleHQtbGlnaHQ7XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgI2NvbnRhY3QtY2FyZCB7XFxuICAgIEBhcHBseSBsYW5kc2NhcGU6c2hhZG93LVsycHhfMnB4XzEwcHhfcmdiKDM5XzM5XzQyKV0gbGFuZHNjYXBlOmRhcms6c2hhZG93LVswcHhfMHB4XzEwcHhfcmdiKDI0MV8yNDVfMjQ5KV07XFxuICB9XFxufVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmJveC11bmRlcmxpbmU6YWZ0ZXIge1xcbiAgQGFwcGx5IGgtWzJweF0gdy0wIGJnLXRoZW1lIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LTEgYm90dG9tLTA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxufVxcblxcbi5ib3gtdW5kZXJsaW5lOmhvdmVyOmFmdGVyIHtcXG4gIEBhcHBseSB3LVtjYWxjKDEwMCUtNnB4KV07XFxufVxcblxcbi5mYWRlLXNpZGUge1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgdmFyKC0tdGhlbWUtMikgMzAlIDcwJSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICAvKiBNb3JlIGF0IE1FRElBIFFVRVJZIEJFTE9XICovXFxufVxcblxcbi8qIFRyYW5zaXRpb24gKi9cXG5hLFxcbiNidG4tdGltZWxpbmUtdG9nZ2xlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbn1cXG5cXG4udG9vbC1hYm91dCxcXG5bY2xhc3NePVxcXCJ0b29sLXByb2plY3RcXFwiXSxcXG4uZGFyay1tb2RlLWJhbGwge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XFxufVxcblxcbi5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgKyA0cHgpKTtcXG59XFxuXFxuLmltZy10b29sLFxcbiNoZWxsby13cmFwcGVyLFxcbiNhYm91dCxcXG4jcHJvamVjdHMsXFxuI2NvbnRhY3Qge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbi5pbWctdG9vbC5zY2FsZUFib3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcblxcbiNhYm91dC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbn1cXG5cXG4jcHJvamVjdHMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XFxufVxcblxcbiNjb250YWN0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcbn1cXG5cXG4jbWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xcbn1cXG5cXG4jbWVudS5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNiZy1sZWZ0LFxcbiNiZy1yaWdodCB7XFxuICB0cmFuc2l0aW9uOlxcbiAgICB3aWR0aCAxcyBlYXNlLFxcbiAgICBvcGFjaXR5IDFzIGVhc2U7XFxufVxcblxcbiNiZy1sZWZ0LnNocmluayxcXG4jYmctcmlnaHQuc2hyaW5rIHtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4jYmctcmlnaHQuc2hyaW5rIH4gI2JnLWxlZnQge1xcbiAgQGFwcGx5IHJvdW5kZWQtbGcgb3BhY2l0eS03NTtcXG59XFxuXFxuI2JnLWludHJvLFxcbiNzZWN0aW9uLWludHJvIHtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctaW50cm8uc2hyaW5rLFxcbiNzZWN0aW9uLWludHJvLnNocmluayB7XFxuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XFxufVxcblxcbm5hdixcXG4jc2Nyb2xsLFxcbiNpbmZvLXdyYXBwZXIsXFxuI2luZm8td3JhcHBlciA+IGRpdiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxufVxcblxcbm5hdi5oaWRlLFxcbiNzY3JvbGwuaGlkZSxcXG4jaW5mby13cmFwcGVyLmhpZGUsXFxuI2luZm8td3JhcHBlciA+IGRpdi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qIEFOSU1BVElPTiAqL1xcbltjbGFzc149XFxcImFuaW1hdGVcXFwiXSB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbn1cXG5cXG4uYW5pbWF0ZS1oZWxsbyB7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNXMgMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLWFwcGVhciB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLW1vZGUtY3ljbGUge1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5hbmltYXRlLW1vZGUtY3ljbGUtciB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItY3ljbGUgNXMgMi41cyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXItY3ljbGUge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNjYlLFxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi8qIFRhaWx3aW5kIEJvdW5jZSBDdXN0b20gKi9cXG4uYW5pbWF0ZS1ib3VuY2UteCB7XFxuICBhbmltYXRpb246IGJvdW5jZS14IDFzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteSB7XFxuICBhbmltYXRpb246IGJvdW5jZS15IDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS05MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBhbmltYXRpb246IGJvdW5jZS15LTkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS1uOTAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXktbjkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS14IHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXktOTAge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LW45MCB7XFxuICAwJSxcXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuLyogTUVESUEgUVVFUlkgKi9cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5pbWctcHJvamVjdC1pbm5lci13cmFwcGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKTtcXG4gIH1cXG5cXG4gIC5ib3JkZXItd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgdmFyKC0tdGhlbWUpLCB0cmFuc3BhcmVudCA4MCUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgaHRtbCB7XFxuICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5mYWRlLXNpZGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUgOTAlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICk7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB2YXIoLS10aGVtZS0yKSAxMCUgOTAlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFja2dyb3VuZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGJnTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctbGVmdFwiKTtcbiAgY29uc3QgYmdSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctcmlnaHRcIik7XG4gIGNvbnN0IGJnSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWludHJvXCIpO1xuXG4gIGZ1bmN0aW9uIHNocmluaygpIHtcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBhcmd1bWVudHMpIHtcbiAgICAgIGNvbnN0IGJnID0gX2dldEJnKG51bSk7XG4gICAgICBiZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRCZyhpbnQpIHtcbiAgICBzd2l0Y2ggKGludCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gYmdMZWZ0O1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gYmdSaWdodDtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGJnSW50cm87XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc2hyaW5rIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYWNrZ3JvdW5kIH07XG4iLCJpbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmNvbnN0IGNhcm91c2VsID0gKCgpID0+IHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRBYm91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZShsaXN0LCBjbGFzc05hbWUsIGhlaWdodCwgc2NhbGUsIHdyYXBwZXIpIHtcbiAgICBjb25zdCBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsIFwicmVsYXRpdmVcIik7XG4gICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICogc2NhbGUgKyBcInB4XCI7XG5cbiAgICAgIGlmIChsaXN0W2ldLnNyYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWctdG9vbFwiLCBcImFic29sdXRlXCIpO1xuICAgICAgICBpbWcuc3JjID0gbGlzdFtpXS5zcmM7XG4gICAgICAgIGltZy5hbHQgPSBsaXN0W2ldLmFsdDtcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1nLnRpdGxlID0gbGlzdFtpXS5hbHQ7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW1nRGFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBpbWdEYXJrLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgbGlzdFtpXS5jbGFzc1swXSxcbiAgICAgICAgICBcImltZy10b29sXCIsXG4gICAgICAgICAgXCJpY29uLW1vZGUtZGFya1wiLFxuICAgICAgICAgIFwiYWJzb2x1dGVcIixcbiAgICAgICAgKTtcbiAgICAgICAgaW1nRGFyay5zdHlsZS5mb250U2l6ZSA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1nRGFyay50aXRsZSA9IGxpc3RbaV0uYWx0O1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGltZ0RhcmsuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uLW1vZGUtZGFya1wiKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQobGlzdFtpXS5jbGFzc1sxXSwgXCJpY29uLW1vZGVcIik7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWdEYXJrLCBpbWcpO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShcbiAgICBoZWlnaHQsXG4gICAgc2NhbGUsXG4gICAgd3JhcHBlcixcbiAgICB3cmFwcGVyT3V0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIGxlbmd0aCxcbiAgICBhdXRvLFxuICAgIHRvb2xOYW1lLFxuICApIHtcbiAgICBjb25zdCB4ID0gaGVpZ2h0ICogc2NhbGU7XG4gICAgbGV0IGFtb3VudCA9IE1hdGguZmxvb3Iod3JhcHBlck91dGVyLmNsaWVudFdpZHRoIC8geCk7XG4gICAgaWYgKGxlbmd0aCA+IGFtb3VudCB8fCBhdXRvID09PSAxKVxuICAgICAgX3Rvb2xBdXRvU2Nyb2xsKFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgd3JhcHBlck91dGVyLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgICB4LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGF1dG8sXG4gICAgICAgIHRvb2xOYW1lLFxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b29sQXV0b1Njcm9sbChcbiAgICBjbGFzc05hbWUsXG4gICAgbGVuZ3RoLFxuICAgIHdyYXBwZXJPdXRlcixcbiAgICB3cmFwcGVyLFxuICAgIHgsXG4gICAgYW1vdW50LFxuICAgIGF1dG8sXG4gICAgdG9vbE5hbWUsXG4gICkge1xuICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGxldCB0b0JlRW5kID0gMDtcbiAgICBsZXQgdHggPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGxldCB0b29sTWlkID0gbnVsbDtcblxuICAgIGFtb3VudCA9IGxlbmd0aCAtIDI7XG4gICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHdyYXBwZXJPdXRlci5zdHlsZS53aWR0aCA9IHggKiAoYW1vdW50IC0gMSkgKyBcInB4XCI7XG4gICAgZWxzZSB3cmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogYW1vdW50ICsgXCJweFwiO1xuXG4gICAgaWYgKGFtb3VudCA8IDUpIG1pZCAtPSAyO1xuICAgIGVsc2UgaWYgKGFtb3VudCA8IDcpIG1pZCAtPSAxO1xuXG4gICAgaWYgKGF1dG8gPT09IDEpIHtcbiAgICAgIHdyYXBwZXJPdXRlci5jbGFzc0xpc3QuYWRkKFwiZmFkZS1zaWRlXCIpO1xuICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt4fXB4KWA7XG4gICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgaWYgKHRvb2xNaWQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgICAgICB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZS1kYXJrXCIpO1xuICAgICAgICBlbHNlIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tb2RlXCIpO1xuICAgICAgfVxuICAgICAgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgIHRvb2xOYW1lLnRleHRDb250ZW50ID0gQm9vbGVhbih0b29sTWlkLmFsdClcbiAgICAgICAgPyB0b29sTWlkLmFsdC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIDogdG9vbE1pZC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IHRvQmVFbmQpIHtcbiAgICAgICAgICB0eFtpXSArPSB4ICogKGxlbmd0aCAtIDEpO1xuICAgICAgICAgIHRvb2xzW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgdG9vbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgdHhbaV0gLT0geDtcblxuICAgICAgICBpZiAoYXV0byA9PT0gMSkgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgICAgdG9vbHNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0eFtpXX1weClgO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9CZUVuZCAhPT0gbGVuZ3RoIC0gMSkgdG9CZUVuZCArPSAxO1xuICAgICAgZWxzZSB0b0JlRW5kID0gMDtcblxuICAgICAgaWYgKG1pZCAhPT0gbGVuZ3RoIC0gMSkgbWlkICs9IDE7XG4gICAgICBlbHNlIG1pZCA9IDA7XG5cbiAgICAgIGlmIChhdXRvID09PSAxKSB7XG4gICAgICAgIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgIGlmICh0b29sTWlkID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgICAgICAgIHRvb2xNaWQgPSB0b29sc1ttaWRdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tb2RlLWRhcmtcIik7XG4gICAgICAgICAgZWxzZSB0b29sTWlkID0gdG9vbHNbbWlkXS5xdWVyeVNlbGVjdG9yKFwiLmljb24tbW9kZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0b29sTWlkLmNsYXNzTGlzdC50b2dnbGUoXCJzY2FsZUFib3V0XCIpO1xuICAgICAgICB0b29sTmFtZS50ZXh0Q29udGVudCA9IEJvb2xlYW4odG9vbE1pZC5hbHQpXG4gICAgICAgICAgPyB0b29sTWlkLmFsdC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgOiB0b29sTWlkLnRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEFib3V0KCkge1xuICAgIGNvbnN0IGxpc3QgPSB0b29scy5nZXRMaXN0KCk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gXCJ0b29sLWFib3V0XCI7XG4gICAgY29uc3QgaGVpZ2h0ID0gNDA7XG4gICAgY29uc3Qgc2NhbGUgPSAxLjU7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9vbHMtd3JhcHBlci1hYm91dFwiKTtcbiAgICBjb25zdCB3cmFwcGVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXItb3V0ZXItYWJvdXRcIik7XG4gICAgY29uc3QgdG9vbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2wtbmFtZVwiKTtcblxuICAgIGdlbmVyYXRlSW1hZ2UobGlzdCwgY2xhc3NOYW1lLCBoZWlnaHQsIHNjYWxlLCB3cmFwcGVyKTtcbiAgICBjcmVhdGUoXG4gICAgICBoZWlnaHQsXG4gICAgICBzY2FsZSxcbiAgICAgIHdyYXBwZXIsXG4gICAgICB3cmFwcGVyT3V0ZXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsaXN0Lmxlbmd0aCxcbiAgICAgIDEsXG4gICAgICB0b29sTmFtZSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2VuZXJhdGVJbWFnZSwgY3JlYXRlIH07XG59KSgpO1xuXG5leHBvcnQgeyBjYXJvdXNlbCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGltZywgcmVwbywgZGVtbywgdG9vbHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICB0aGlzLmRlbW8gPSBkZW1vO1xuICAgIHRoaXMudG9vbHMgPSB0b29scztcbiAgfVxufVxuIiwiY29uc3QgZGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBiYWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFyay1tb2RlLWJhbGxcIik7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZGV0ZWN0RGFya01vZGUoKTtcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSBfdG9nZ2xlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RldGVjdERhcmtNb2RlKCkge1xuICAgIGlmIChCb29sZWFuKGxvY2FsU3RvcmFnZS50aGVtZSkpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIF90b2dnbGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgX3RvZ2dsZSgpO1xuICAgIH0gZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlKCkge1xuICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgYmFsbHMuZm9yRWFjaCgoYmFsbCkgPT4ge1xuICAgICAgYmFsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICB9KTtcblxuICAgIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBkYXJrTW9kZSB9O1xuIiwiaW1wb3J0IGltZ0Fycm93VzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Fycm93LXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1Byb2ZpbGU1MDB3IGZyb20gXCIuLi9pbWcvcHJvZmlsZS01MDB3LmpwZ1wiO1xuXG5pbXBvcnQgaW1nTWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL3BvbGwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ01lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvcG9sbC13LTUwdy5wbmdcIjtcblxuaW1wb3J0IGltZ09wZW41MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdPcGVuVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdOYW1lNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbmFtZS01MHcucG5nXCI7XG5pbXBvcnQgaW1nTmFtZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9uYW1lLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZW1haWwtNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0VtYWlsVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2VtYWlsLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGltZ0xpbms1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9saW5rLTUwdy5wbmdcIjtcbmltcG9ydCBpbWdMaW5rVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2xpbmstdy01MHcucG5nXCI7XG5cbmltcG9ydCBpbWdGYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5cbmNvbnN0IGltYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctc2Nyb2xsXCIpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJvZmlsZVwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbWVudS13cmFwcGVyXCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbmFtZS13cmFwcGVyXCIpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWVtYWlsLXdyYXBwZXJcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1saW5rLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2Nyb2xsLnNyYyA9IGltZ0Fycm93VzUwdztcbiAgICBwcm9maWxlLnNyYyA9IGltZ1Byb2ZpbGU1MDB3O1xuXG4gICAgX3NldEltZ1NyYyhtZW51LCBpbWdNZW51VzUwdywgaW1nTWVudTUwdyk7XG4gICAgX3NldEltZ1NyYyhuYW1lLCBpbWdOYW1lVzUwdywgaW1nTmFtZTUwdyk7XG4gICAgX3NldEltZ1NyYyhlbWFpbCwgaW1nRW1haWxXNTB3LCBpbWdFbWFpbDUwdyk7XG4gICAgX3NldEltZ1NyYyhsaW5rLCBpbWdMaW5rVzUwdywgaW1nTGluazUwdyk7XG5cbiAgICBmYXZpY29uLnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICAgIGZhdmljb24uaHJlZiA9IGltZ0Zhdmljb24zMnc7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJY29uT3BlbihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIF9zZXRJbWdTcmMoZWwsIGltZ09wZW5XNTB3LCBpbWdPcGVuNTB3KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRJbWdTcmMoaWQsIHNyY0RhcmssIHNyY0xpZ2h0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaWQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgICB0YXJnZXRbMF0uc3JjID0gc3JjRGFyaztcbiAgICB0YXJnZXRbMV0uc3JjID0gc3JjTGlnaHQ7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBzZXRJY29uT3BlbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcbmltcG9ydCB7IHRhYkNsaWNrYWJsZSB9IGZyb20gXCIuL3RhYi1jbGlja2FibGVcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bkFib3V0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1sXCIpO1xuXG4gIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51XCIpO1xuICBjb25zdCBidG5NZW51QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtYmFja1wiKTtcblxuICBjb25zdCBidG5Ib21lUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtcFwiKTtcbiAgY29uc3QgYnRuQWJvdXRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtcFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtcFwiKTtcbiAgY29uc3QgYnRuQ29udGFjdFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWN0LXBcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY29uc3QgaGVsbG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWxsby13cmFwcGVyXCIpO1xuICBjb25zdCBpbmZvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mby13cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBjb25zdCBidG5CYWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWJhY2tcIik7XG5cbiAgbGV0IGlzT3Blbk1lbnUgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMDtcbiAgbGV0IGlzT3BlblRhYiA9IDA7XG4gIGxldCBiYWNrVGFyZ2V0ID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aHJlc2hvbGQgPSBzY3JvbGwuZ2V0U2Nyb2xsVGhyZXNob2xkKCk7XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9vcGVuVGFiKGFib3V0LCAyLCBidG5BYm91dEwpO1xuICAgIH07XG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihwcm9qZWN0cywgMSwgYnRuUHJvamVjdHNMKTtcbiAgICB9O1xuICAgIGJ0bkNvbnRhY3RMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihjb250YWN0LCAyLCBidG5Db250YWN0TCk7XG4gICAgfTtcblxuICAgIGJ0bkJhY2tzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIF9jbG9zZVRhYigpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGJ0bk1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc09wZW5NZW51ID09PSAxKSB7XG4gICAgICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RvZ2dsZU1lbnVDb29sZG93bigpO1xuICAgICAgc2Nyb2xsLmRpc2FibGVTY3JvbGwoKTtcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSBfdG9nZ2xlQmFja2dyb3VuZCgxKTtcblxuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBpc09wZW5NZW51ID0gMTtcbiAgICB9O1xuXG4gICAgYnRuTWVudUJhY2sub25jbGljayA9ICgpID0+IHtcbiAgICAgIF90b2dnbGVNZW51Q29vbGRvd24oKTtcbiAgICAgIHNjcm9sbC5lbmFibGVTY3JvbGwoKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9LCA1MDApO1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIF90b2dnbGVCYWNrZ3JvdW5kKDEpO1xuICAgICAgaWYgKGhlbGxvV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSBfdG9nZ2xlQmFja2dyb3VuZCgxKTtcblxuICAgICAgaXNPcGVuTWVudSA9IDA7XG4gICAgfTtcblxuICAgIGJ0bkhvbWVQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8oMCwgMCk7XG4gICAgfTtcblxuICAgIGJ0bkFib3V0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAyKTtcbiAgICAgICAgX3Njcm9sbFRvKGFib3V0LCAxKTtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0oc2NyZWVuLmhlaWdodCAvIDIpKTtcbiAgICAgIH0gZWxzZSBfc2Nyb2xsVG8oYWJvdXQsIDEpO1xuICAgIH07XG5cbiAgICBidG5Qcm9qZWN0c1Aub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbyhwcm9qZWN0cywgMSk7XG4gICAgfTtcbiAgICBidG5Db250YWN0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Njcm9sbFRvKGNvbnRhY3QsIDApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXNldE9uU2NyZWVuQ2hhbmdlKCkge1xuICAgIGlmIChpc09wZW5UYWIgPT09IDEpIHtcbiAgICAgIGJ0bkJhY2tzWzBdLmNsaWNrKCk7XG4gICAgICBpc09wZW5UYWIgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9vcGVuVGFiKHRhYiwgYmcsIGJ0bikge1xuICAgIGlmIChpc09wZW5UYWIgPT09IDEpIGJ0bkJhY2tzWzBdLmNsaWNrKCk7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBfdG9nZ2xlQmFja2dyb3VuZChiZyk7XG4gICAgdGFiQ2xpY2thYmxlLnRvZ2dsZSh0YWIpO1xuICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlzT3BlblRhYiA9IDE7XG4gICAgYmFja1RhcmdldCA9IFt0YWIsIGJnLCBidG5dO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Nsb3NlVGFiKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGJhY2tUYXJnZXRbMF07XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgX3RvZ2dsZUJhY2tncm91bmQoYmFja1RhcmdldFsxXSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB0YWJDbGlja2FibGUudG9nZ2xlKHRhcmdldCk7XG4gICAgfSwgMTAwMCk7XG4gICAgaXNPcGVuVGFiID0gMDtcbiAgICBiYWNrVGFyZ2V0WzJdLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlQmFja2dyb3VuZChiZykge1xuICAgIGJhY2tncm91bmQuc2hyaW5rKGJnKTtcbiAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgaW5mb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlTWVudUNvb2xkb3duKCkge1xuICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zY3JvbGxUbyhjb250ZW50LCBvZmZzZXQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gMCAmJiBvZmZzZXQgPT09IDApIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIGlmIChvZmZzZXQgPT09IDEpIHdpbmRvdy5zY3JvbGxCeSgwLCAtNTYgLSAyOCk7XG4gICAgfVxuICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCByZXNldE9uU2NyZWVuQ2hhbmdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzcy1Qcm9qZWN0XCI7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gXCIuL2ltYWdlXCI7XG5cbmltcG9ydCBpbWdZcGV0IGZyb20gXCIuLi9pbWcvcHJvamVjdHMveXBldC5wbmdcIjtcbmltcG9ydCBpbWdXZWF0aGVyIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvd2VhdGhlci5wbmdcIjtcbmltcG9ydCBpbWdXZWF0aGVyTSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3dlYXRoZXItbS5wbmdcIjtcbmltcG9ydCBpbWdIb21lcGFnZSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL2hvbWVwYWdlLnBuZ1wiO1xuaW1wb3J0IGltZ0hvbWVwYWdlTSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL2hvbWVwYWdlLW0ucG5nXCI7XG5pbXBvcnQgaW1nSG9tZXBhZ2VEIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UtZC5wbmdcIjtcbmltcG9ydCBpbWdIb21lcGFnZU1EIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UtbS1kLnBuZ1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wcm9qZWN0c1wiKTtcbiAgY29uc3QgbGFzdENoaWxkID0gY29udGVudFByb2plY3RzLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gX2dldFByb2plY3RzKCk7XG4gIGNvbnN0IGxlbmd0aCA9IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgY29uc3QgaGVpZ2h0ID0gNDA7XG4gIGNvbnN0IHNjYWxlID0gMS4xO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2dlbmVyYXRlUHJvamVjdHMoKTtcbiAgICBfY2Fyb3VzZWxJbml0KCk7XG4gICAgaW1hZ2Uuc2V0SWNvbk9wZW4oXCIuaWNvbi1saW5rLXdyYXBwZXJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2VuZXJhdGVQcm9qZWN0cygpIHtcbiAgICBsZXQgY291bnQgPSAxO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICAgIGNvbnN0IGRpdldyYXBwZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJjb250ZW50LXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZGV4ID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW5kZXgtcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICAgIFwidGV4dC10cmFuc3BhcmVudFwiLFxuICAgICAgICBcIm1vbnRzZXJyYXRcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBpbmRleCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAgXCJpbmRleC1wcm9qZWN0XCIsXG4gICAgICAgIFwidGV4dC10aGVtZVwiLFxuICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICAgIFwidHJhbnNsYXRlLXgtWy0xMDAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZm8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJpbmZvLXByb2plY3RcIixcbiAgICAgICAgXCJyZWxhdGl2ZVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoM1wiLCBcInotWzFdXCIsIFwibW9udHNlcnJhdFwiKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInNwYW5cIiwgXCJ0ZXh0LXRoZW1lXCIpO1xuICAgICAgY29uc3QgZGl2RGVzYyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRleHQtanVzdGlmeVwiLCBcInotWzJdXCIpO1xuICAgICAgY29uc3QgZGl2VG9vbHMgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJvdmVyZmxvdy14LWhpZGRlblwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUb29sT3V0ZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b29scy13cmFwcGVyLW91dGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCB3cmFwcGVyVG9vbCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInRvb2xzLXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkxpbmtzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktZXZlbmx5XCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgYVJlcG8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICBcImdhcC0zXCIsXG4gICAgICAgIFwibW9udHNlcnJhdFwiLFxuICAgICAgICBcImhvdmVyOnNjYWxlLVsxMTAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNwYW5SZXBvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICBcImZpcnN0LWxldHRlcjp0ZXh0LXRoZW1lXCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgc3BhbkRlbW8gPSBzcGFuUmVwby5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgY29uc3QgZGl2SW1nT3V0ZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJpbWctcHJvamVjdC1vdXRlci13cmFwcGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZGl2SW1nSW5uZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiKTtcbiAgICAgIGNvbnN0IGltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaW1nLXByb2plY3RcIik7XG4gICAgICBjb25zdCBpbWdNaXJyb3IgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImltZy1wcm9qZWN0LW1pcnJvclwiKTtcbiAgICAgIGNvbnN0IGltZzIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImltZy1wcm9qZWN0LW1cIiwgXCJhYnNvbHV0ZVwiKTtcblxuICAgICAgLy8gSW5mb1xuICAgICAgaW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgICBkaXZJbmRleC5hcHBlbmQoaW5kZXgpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCIuXCI7XG4gICAgICB0aXRsZS5hcHBlbmQoc3Bhbik7XG4gICAgICBkaXZEZXNjLmlubmVySFRNTCA9IHByb2plY3QuZGVzYztcblxuICAgICAgLy8gVG9vbHNcbiAgICAgIGNhcm91c2VsLmdlbmVyYXRlSW1hZ2UoXG4gICAgICAgIHByb2plY3QudG9vbHMsXG4gICAgICAgIGB0b29sLXByb2plY3QtJHtjb3VudH1gLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICB3cmFwcGVyVG9vbCxcbiAgICAgICk7XG5cbiAgICAgIHdyYXBwZXJUb29sT3V0ZXIuYXBwZW5kKHdyYXBwZXJUb29sKTtcbiAgICAgIGRpdlRvb2xzLmFwcGVuZCh3cmFwcGVyVG9vbE91dGVyKTtcblxuICAgICAgLy8gTGluayBhbmQgRGVtb1xuICAgICAgYVJlcG8udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgIGFSZXBvLnJlbCA9IFwibm9yZWZlcnJlclwiO1xuICAgICAgY29uc3QgYURlbW8gPSBhUmVwby5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgYVJlcG8uaHJlZiA9IHByb2plY3QucmVwbztcbiAgICAgIHNwYW5SZXBvLnRleHRDb250ZW50ID0gXCJHSVRIVUJcIjtcbiAgICAgIGFEZW1vLmhyZWYgPSBwcm9qZWN0LmRlbW87XG4gICAgICBzcGFuRGVtby50ZXh0Q29udGVudCA9IFwiREVNT1wiO1xuXG4gICAgICBjb25zdCBsaW5rV3JhcHBlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImgtWzE0cHhdXCIsXG4gICAgICAgIFwibWQ6aC1bMThweF1cIixcbiAgICAgICAgXCJhc3BlY3Qtc3F1YXJlXCIsXG4gICAgICAgIFwicmVsYXRpdmVcIixcbiAgICAgICAgXCJpY29uLWxpbmstd3JhcHBlclwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGltZ0xpbmsgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJpbWdcIixcbiAgICAgICAgXCJpY29uLW1vZGUtZGFya1wiLFxuICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW1nTGluazIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImljb24tbW9kZVwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmQoaW1nTGluaywgaW1nTGluazIpO1xuICAgICAgY29uc3QgbGlua1dyYXBwZXIyID0gbGlua1dyYXBwZXIuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBhUmVwby5hcHBlbmQoc3BhblJlcG8sIGxpbmtXcmFwcGVyKTtcblxuICAgICAgLy8gRGlzYWJsZSBkZW1vIGxpbmsgZm9yIHByb2plY3QgSG9tZXBhZ2VcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IFwiSG9tZXBhZ2VcIikge1xuICAgICAgICBhRGVtby5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIGFEZW1vLnRleHRDb250ZW50ID0gXCJWSUVXSU5HXCI7XG4gICAgICB9IGVsc2UgYURlbW8uYXBwZW5kKHNwYW5EZW1vLCBsaW5rV3JhcHBlcjIpO1xuXG4gICAgICBkaXZMaW5rcy5hcHBlbmQoYVJlcG8sIGFEZW1vKTtcblxuICAgICAgY29uc3QgZGl2aWRlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwiZGl2aWRlci10aGVtZVwiKTtcbiAgICAgIGRpdkluZm8uYXBwZW5kKGRpdkluZGV4LCB0aXRsZSwgZGl2RGVzYywgZGl2VG9vbHMsIGRpdkxpbmtzLCBkaXZpZGVyKTtcblxuICAgICAgLy8gUHJvamVjdCBJbWFnZVxuICAgICAgLy8gRGVza3RvcCBhbmQgTW9iaWxlIHdpdGggRGFyayBNb2RlXG4gICAgICBpZiAocHJvamVjdC5pbWcubGVuZ3RoID4gMikge1xuICAgICAgICBjb25zdCBkaXZJbWdJbm5lck1vZGUgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIFwiaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1tb2RlXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaW1nSW5uZXJNb2RlID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJpbWdcIiwgXCJpbWctcHJvamVjdC1tb2RlXCIpO1xuICAgICAgICBjb25zdCBpbWdJbm5lck1vZGVNaXJyb3IgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgICBcImltZ1wiLFxuICAgICAgICAgIFwiaW1nLXByb2plY3QtbW9kZS1taXJyb3JcIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaW1nSW5uZXJNb2RlRGFyayA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgIFwiaW1nXCIsXG4gICAgICAgICAgXCJpbWctcHJvamVjdC1tb2RlLWRhcmtcIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaW1nSW5uZXJNb2RlRGFya01pcnJvciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgIFwiaW1nXCIsXG4gICAgICAgICAgXCJpbWctcHJvamVjdC1tb2RlLWRhcmstbWlycm9yXCIsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGltZ0lubmVyTW9kZU0gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgICBcImltZ1wiLFxuICAgICAgICAgIFwiaW1nLXByb2plY3QtbW9kZS1tXCIsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGltZ0lubmVyTW9kZU1EYXJrID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgXCJpbWdcIixcbiAgICAgICAgICBcImltZy1wcm9qZWN0LW1vZGUtbS1kYXJrXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgaW1nSW5uZXJNb2RlLnNyYyA9IHByb2plY3QuaW1nWzBdO1xuICAgICAgICBpbWdJbm5lck1vZGVNaXJyb3Iuc3JjID0gcHJvamVjdC5pbWdbMF07XG4gICAgICAgIGltZ0lubmVyTW9kZURhcmsuc3JjID0gcHJvamVjdC5pbWdbMl07XG4gICAgICAgIGltZ0lubmVyTW9kZURhcmtNaXJyb3Iuc3JjID0gcHJvamVjdC5pbWdbMl07XG4gICAgICAgIGltZ0lubmVyTW9kZU0uc3JjID0gcHJvamVjdC5pbWdbMV07XG4gICAgICAgIGltZ0lubmVyTW9kZU1EYXJrLnNyYyA9IHByb2plY3QuaW1nWzNdO1xuXG4gICAgICAgIGRpdkltZ0lubmVyTW9kZS5hcHBlbmQoXG4gICAgICAgICAgaW1nSW5uZXJNb2RlLFxuICAgICAgICAgIGltZ0lubmVyTW9kZU1pcnJvcixcbiAgICAgICAgICBpbWdJbm5lck1vZGVEYXJrLFxuICAgICAgICAgIGltZ0lubmVyTW9kZURhcmtNaXJyb3IsXG4gICAgICAgICAgaW1nSW5uZXJNb2RlTSxcbiAgICAgICAgICBpbWdJbm5lck1vZGVNRGFyayxcbiAgICAgICAgKTtcbiAgICAgICAgZGl2SW1nSW5uZXIuYXBwZW5kKGRpdkltZ0lubmVyTW9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXNrdG9wXG4gICAgICAgIGltZy5zcmMgPSBwcm9qZWN0LmltZ1swXTtcbiAgICAgICAgaW1nTWlycm9yLnNyYyA9IHByb2plY3QuaW1nWzBdO1xuICAgICAgICBkaXZJbWdJbm5lci5hcHBlbmQoaW1nLCBpbWdNaXJyb3IpO1xuXG4gICAgICAgIC8vIE1vYmlsZVxuICAgICAgICBpZiAocHJvamVjdC5pbWcubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgaW1nMi5zcmMgPSBwcm9qZWN0LmltZ1sxXTtcbiAgICAgICAgICBkaXZJbWdJbm5lci5hcHBlbmQoaW1nMik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3QtaW5uZXItd3JhcHBlci1ldmVuXCIpO1xuICAgICAgICBkaXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kc2NhcGU6ZmxleC1yb3ctcmV2ZXJzZVwiKTtcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3QtaW5uZXItd3JhcHBlclwiKTtcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGl2SW1nV3JhcHBlciA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImltZy1wcm9qZWN0LXdyYXBwZXJcIixcbiAgICAgICk7XG4gICAgICBkaXZJbWdXcmFwcGVyLmFwcGVuZChkaXZJbWdJbm5lcik7XG4gICAgICBkaXZJbWdPdXRlci5hcHBlbmQoZGl2SW1nV3JhcHBlcik7XG4gICAgICBkaXZXcmFwcGVyLmFwcGVuZChkaXZJbmZvLCBkaXZJbWdPdXRlcik7XG4gICAgICBjb250ZW50UHJvamVjdHMuaW5zZXJ0QmVmb3JlKGRpdldyYXBwZXIsIGxhc3RDaGlsZCk7XG5cbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Nhcm91c2VsSW5pdCgpIHtcbiAgICBjb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHMtd3JhcHBlci1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHdyYXBwZXJzT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0b29sLXByb2plY3QtJHtpICsgMX1gO1xuICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApLmxlbmd0aDtcbiAgICAgIGNhcm91c2VsLmNyZWF0ZShcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgd3JhcHBlcnNbaV0sXG4gICAgICAgIHdyYXBwZXJzT3V0ZXJbaV0sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICAwLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcsIC4uLmNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBQcm9qZWN0IExpc3RcbiAgZnVuY3Rpb24gX2dldFByb2plY3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJZb3VyIFBlcnNvbmFsIEV4cGVuc2UgVHJhY2tlclwiLFxuICAgICAgICBcIkEgPGk+ZnVsbCBzdGFjazwvaT4gcHJvamVjdCB0aGF0IGZlYXR1cmVzIHVzZXIgY3JlYXRlLCBsb2dpbiBhbmQgbG9nb3V0LCBzdG9yZSBhbmQgZGlzcGxheSBleHBlbnNlIGRhdGEgYW5kIHNldHRpbmdzIHRoYXQgYWxsb3cgbmFtZSwgcGFzc3dvcmQgYW5kIGN1cnJlbmN5IGNoYW5nZS5cIixcbiAgICAgICAgW2ltZ1lwZXRdLFxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS93b29uemYvY3M1MHgtMjAyMy1wcm9qZWN0XCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1sODNreXM5eUpKc1wiLFxuICAgICAgICB0b29scy5nZXQoXG4gICAgICAgICAgXCJIVE1MXCIsXG4gICAgICAgICAgXCJDU1NcIixcbiAgICAgICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICBcIlB5dGhvblwiLFxuICAgICAgICAgIFwiU1FMaXRlXCIsXG4gICAgICAgICAgXCJGbGFza1wiLFxuICAgICAgICAgIFwiQm9vdHN0cmFwXCIsXG4gICAgICAgICksXG4gICAgICApLFxuICAgICAgbmV3IFByb2plY3QoXG4gICAgICAgIFwiV2VhdGhlciBBcHBcIixcbiAgICAgICAgXCJBIDxpPmZyb250IGVuZDwvaT4gcHJvamVjdCB0aGF0IHJldHJpZXZlcyBhbmQgZGlzcGxheXMgdXNlci1wcm92aWRlZCBsb2NhdGlvbidzIHdlYXRoZXIgaW5mbyBmcm9tIFdlYXRoZXJBUEkuY29tXCIsXG4gICAgICAgIFtpbWdXZWF0aGVyLCBpbWdXZWF0aGVyTV0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9vZGluLXdlYXRoZXItYXBwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93b29uemYuZ2l0aHViLmlvL29kaW4td2VhdGhlci1hcHAvXCIsXG4gICAgICAgIHRvb2xzLmdldChcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCIsIFwiV2VicGFja1wiKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJIb21lcGFnZVwiLFxuICAgICAgICBcIlllcywgeW91IGFyZSB2aWV3aW5nIGl0ISBNeSBmaXJzdCBhbmQgY3VycmVudCBwb3J0Zm9saW8sIGEgPGk+ZnJvbnQgZW5kPC9pPiBwcm9qZWN0IHRoYXQgZmVhdHVyZXMgaW50ZXJhY3RpdmUgbGF5b3V0LCByZXNwb25zaXZlIGRlc2lnbiBhbmQgZGFyayBtb2RlIG9wdGlvbi5cIixcbiAgICAgICAgW2ltZ0hvbWVwYWdlLCBpbWdIb21lcGFnZU0sIGltZ0hvbWVwYWdlRCwgaW1nSG9tZXBhZ2VNRF0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9vZGluLWhvbWVwYWdlXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93b29uemYuZ2l0aHViLmlvL29kaW4taG9tZXBhZ2UvXCIsXG4gICAgICAgIHRvb2xzLmdldChcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCIsIFwiV2VicGFja1wiLCBcIlRhaWx3aW5kIENTU1wiKSxcbiAgICAgICksXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzIH07XG4iLCJpbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBzY3JlZW5PcmllbnRhdGlvbiA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2NyZWVuLm9yaWVudGF0aW9uLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgbWVudS5yZXNldE9uU2NyZWVuQ2hhbmdlKCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH07XG4iLCJpbXBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuXG5jb25zdCBzY3JvbGwgPSAoKCkgPT4ge1xuICBjb25zdCBzZWN0aW9uSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24taW50cm9cIik7XG4gIGNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsXCIpO1xuICBjb25zdCBpbmZvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mby13cmFwcGVyID4gZGl2XCIpO1xuXG4gIGNvbnN0IHRocmVzaG9sZCA9IDE7XG4gIGxldCBzaHJpbmsgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX3Nocmlua09uU2Nyb2xsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaHJpbmtPblNjcm9sbCgpIHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAwKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAxKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nocmlua0ludHJvKCkge1xuICAgIHNlY3Rpb25JbnRyby5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIHNjcm9sbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICBpbmZvTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ3NzAwMjUvaG93LXRvLWRpc2FibGUtc2Nyb2xsaW5nLXRlbXBvcmFyaWx5XG4gIC8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gIC8vIHNwYWNlYmFyOiAzMiwgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LCBlbmQ6IDM1LCBob21lOiAzNlxuICBjb25zdCBrZXlzID0geyAzNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMSB9O1xuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XG4gIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGVzdFwiLFxuICAgICAgbnVsbCxcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgbGV0IHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG4gIGxldCB3aGVlbEV2ZW50ID1cbiAgICBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogXCJtb3VzZXdoZWVsXCI7XG5cbiAgLy8gY2FsbCB0aGlzIHRvIERpc2FibGVcbiAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7IC8vIG9sZGVyIEZGXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9kZXJuIGRlc2t0b3BcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XG4gIH1cblxuICAvLyBjYWxsIHRoaXMgdG8gRW5hYmxlXG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGdldFNjcm9sbFRocmVzaG9sZCwgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH07XG59KSgpO1xuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImNvbnN0IHRhYkNsaWNrYWJsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdG9nZ2xlKGFib3V0KTtcbiAgICB0b2dnbGUocHJvamVjdHMpO1xuICAgIHRvZ2dsZShjb250YWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZSh0YWIpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgY29uc3QgbGlua3MgPSB0YWIucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG4gICAgY29uc3QgYXJ0aWNsZSA9IHRhYi5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZVwiKTtcblxuICAgIGNvbnN0IGNsaWNrYWJsZXMgPSBbYnV0dG9ucywgbGlua3NdO1xuXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QudG9nZ2xlKFwibGFuZHNjYXBlOm92ZXJmbG93LWhpZGRlblwiKTtcbiAgICBjbGlja2FibGVzLmZvckVhY2goKGNsaWNrYWJsZSkgPT4ge1xuICAgICAgY2xpY2thYmxlLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJsYW5kc2NhcGU6aGlkZGVuXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCB0b2dnbGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhYkNsaWNrYWJsZSB9O1xuIiwiY29uc3QgdGltZWxpbmUgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZWxpbmUtY29udGVudFwiKTtcbiAgY29uc3QgdGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVsaW5lXCIpO1xuICBjb25zdCBidG5UaW1lbGluZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXRpbWVsaW5lLXRvZ2dsZVwiKTtcblxuICBjb25zdCBmdWxsSGVpZ2h0ID0gdGltZWxpbmUuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBoYWxmU2NyZWVuID0gd2luZG93LmlubmVySGVpZ2h0ICogMC41O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2FsaWduVGltZWxpbmUoKTtcbiAgICBfY2hlY2tUaW1lbGluZUhlaWdodCgpO1xuICAgIF9pbml0QnRuVG9nZ2xlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYWxpZ25UaW1lbGluZSgpIHtcbiAgICBsZXQgeCA9IDA7XG4gICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgaWYgKHggPT09IDApIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgICBlbHNlIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xuICAgICAgeCA9ICsheDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGVja1RpbWVsaW5lSGVpZ2h0KCkge1xuICAgIGlmICh0aW1lbGluZS5jbGllbnRIZWlnaHQgPiBoYWxmU2NyZWVuKSB7XG4gICAgICB0aW1lbGluZS5zdHlsZS5oZWlnaHQgPSBoYWxmU2NyZWVuICsgXCJweFwiO1xuICAgICAgdGltZWxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcImxlc3NcIik7XG4gICAgICBidG5UaW1lbGluZVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QnRuVG9nZ2xlKCkge1xuICAgIGJ0blRpbWVsaW5lVG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aW1lbGluZS5jbGFzc0xpc3QudG9nZ2xlKFwibGVzc1wiKTtcbiAgICAgIGlmICh0aW1lbGluZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsZXNzXCIpKSB7XG4gICAgICAgIGJ0blRpbWVsaW5lVG9nZ2xlLnRleHRDb250ZW50ID0gXCJTSE9XIEFMTFwiO1xuICAgICAgICB0aW1lbGluZS5zdHlsZS5oZWlnaHQgPSBoYWxmU2NyZWVuICsgXCJweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuVGltZWxpbmVUb2dnbGUudGV4dENvbnRlbnQgPSBcIlNIT1cgTEVTU1wiO1xuICAgICAgICB0aW1lbGluZS5zdHlsZS5oZWlnaHQgPSBmdWxsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyB0aW1lbGluZSB9O1xuIiwiY29uc3QgdG9vbHMgPSAoKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvaHRtbDUvaHRtbDUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiSFRNTFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9jc3MzL2NzczMtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiQ1NTXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2phdmFzY3JpcHQvamF2YXNjcmlwdC1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJKYXZhU2NyaXB0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3dlYnBhY2svd2VicGFjay1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJXZWJwYWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2plc3QvamVzdC1wbGFpbi5zdmdcIixcbiAgICAgIGFsdDogXCJKZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIlRhaWx3aW5kIENTU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9jL2Mtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiQ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9weXRob24vcHl0aG9uLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIlB5dGhvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9zcWxpdGUvc3FsaXRlLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIlNRTGl0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3M6IFtcImRldmljb24tZmxhc2stb3JpZ2luYWxcIiwgXCJjb2xvcmVkXCJdLFxuICAgICAgYWx0OiBcIkZsYXNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2Jvb3RzdHJhcC9ib290c3RyYXAtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiQm9vdHN0cmFwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3ZzY29kZS92c2NvZGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdC9naXQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzczogW1wiZGV2aWNvbi1naXRodWItb3JpZ2luYWxcIiwgXCJjb2xvcmVkXCJdLFxuICAgICAgYWx0OiBcIkdpdEh1YlwiLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdCgpIHtcbiAgICByZXR1cm4gZ2V0KFxuICAgICAgXCJUYWlsd2luZCBDU1NcIixcbiAgICAgIFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgICBcIkdpdFwiLFxuICAgICAgXCJHaXRIdWJcIixcbiAgICAgIFwiSFRNTFwiLFxuICAgICAgXCJDU1NcIixcbiAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgXCJXZWJwYWNrXCIsXG4gICAgICBcIkplc3RcIixcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIGxldCBnZXRMaXN0ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGFyZ3VtZW50cykge1xuICAgICAgZm9yIChjb25zdCB0b29sIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50ID09PSB0b29sLmFsdCkgZ2V0TGlzdC5wdXNoKHRvb2wpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnZXRMaXN0O1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0TGlzdCwgZ2V0IH07XG59KSgpO1xuXG5leHBvcnQgeyB0b29scyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9qcy9zY3JvbGxcIjtcbmltcG9ydCB7IGltYWdlIH0gZnJvbSBcIi4vanMvaW1hZ2VcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vanMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vanMvcHJvamVjdHNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9qcy9tZW51XCI7XG5pbXBvcnQgeyBzY3JlZW5PcmllbnRhdGlvbiB9IGZyb20gXCIuL2pzL3NjcmVlbi1vcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgZGFya01vZGUgfSBmcm9tIFwiLi9qcy9kYXJrLW1vZGVcIjtcbmltcG9ydCB7IHRhYkNsaWNrYWJsZSB9IGZyb20gXCIuL2pzL3RhYi1jbGlja2FibGVcIjtcbmltcG9ydCB7IHRpbWVsaW5lIH0gZnJvbSBcIi4vanMvdGltZWxpbmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBzY3JvbGwuaW5pdCgpO1xuICBpbWFnZS5pbml0KCk7XG4gIGNhcm91c2VsLmluaXQoKTtcbiAgcHJvamVjdHMuaW5pdCgpO1xuICBtZW51LmluaXQoKTtcbiAgc2NyZWVuT3JpZW50YXRpb24uaW5pdCgpO1xuICBkYXJrTW9kZS5pbml0KCk7XG4gIHRhYkNsaWNrYWJsZS5pbml0KCk7XG4gIHRpbWVsaW5lLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9