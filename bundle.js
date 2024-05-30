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
  display: flex;
  height: 100%;
  max-width: 1024px;
  flex-direction: column;
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

/* Scrollbar */

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, 1);
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
    border: solid 4px rgb(241, 245, 249);
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
  width: 90%;
  align-self: center;
  border-radius: 9999px;
}
@media (min-width: 768px) {

  .divider-theme {
    width: 70%;
  }
}
@media (min-width: 1024px) {

  .divider-theme {
    width: 90%;
  }
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
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}
@media (orientation: portrait) {

  .content-wrapper-project {
    flex-direction: column-reverse;
    gap: 1.25rem;
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
  justify-content: center;
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
  height: calc(80% + 2px);
  border-radius: 0.375rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
@media (orientation: portrait) {

  .img-project-m {
    height: 100%;
  }
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
.text-transparent {
  color: transparent;
}
.opacity-0 {
  opacity: 0;
}

.montserrat {
  font-family: "Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
}

.tool-about,
[class^="tool-project"],
#dark-mode-ball {
  transition: transform 750ms ease;
}

.img-tool {
  transition: transform 1s ease;
}

.img-tool.scaleAbout {
  transform: scale(1.5);
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

#scroll {
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

.hover\\:scale-\\[110\\%\\]:hover {
  --tw-scale-x: 110%;
  --tw-scale-y: 110%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(110%) scaleY(110%);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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

  .portrait\\:w-\\[70\\%\\] {
    width: 70%;
  }

  .portrait\\:w-full {
    width: 100%;
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

  .landscape\\:flex-row-reverse {
    flex-direction: row-reverse;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n:root {\n  --timing-bounce-100: cubic-bezier(0, 0, 0.2, 1);\n  --timing-bounce-50: cubic-bezier(0.8, 0, 1, 1);\n  --bounce-translateY: 25%;\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-3xl md:text-4xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  p {\n    @apply py-2 text-justify text-pretty;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full max-w-screen-lg landscape:px-10 landscape:md:px-14 landscape:py-14 flex flex-col gap-7 overflow-y-auto;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    @apply w-[16px];\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-red-300 rounded-full;\n    border: solid 4px rgb(241 245 249);\n  }\n\n  ::-webkit-scrollbar-thumb:hover,\n  ::-webkit-scrollbar-thumb:active {\n    @apply bg-theme;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .divider-theme {\n    @apply bg-theme h-1 w-[90%] md:w-[70%] lg:w-[90%] rounded-full self-center;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .btn-nav-wrapper {\n    @apply w-36 absolute;\n  }\n\n  .btn-nav {\n    @apply w-36 flex justify-center items-center fixed;\n  }\n\n  .border-img {\n    @apply h-full w-full border-2 border-theme absolute translate-x-3 -translate-y-[calc(100%+12px)] z-auto;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] py-7 flex portrait:flex-col-reverse portrait:gap-5;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-wrapper {\n    @apply w-full flex justify-center;\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project,\n  .img-project-even {\n    @apply relative z-[1];\n    /* More at MEDIA QUERY section below*/\n  }\n\n  .img-project-mirror,\n  .img-project-mirror-even {\n    @apply absolute top-0 z-auto portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, white);\n    mask-image: linear-gradient(transparent 80%, white);\n  }\n\n  .img-project-mirror {\n    transform: translateY(calc(100% + 2px)) rotateY(-20deg) rotateX(180deg);\n  }\n\n  .img-project-mirror-even {\n    transform: translateY(calc(100% + 2px)) rotateY(20deg) rotateX(180deg);\n  }\n\n  .img-project-m {\n    @apply h-[calc(80%+2px)] portrait:h-full border-2 border-black rounded-md top-[5%] right-[-5%];\n  }\n\n  .img-project-mirror > .img-project-m,\n  .img-project-mirror-even > .img-project-m {\n    @apply hidden;\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n\n  .tool-about,\n  [class^=\"tool-project\"] {\n    @apply aspect-square flex justify-center items-center;\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n#dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n.img-tool {\n  transition: transform 1s ease;\n}\n\n.img-tool.scaleAbout {\n  transform: scale(1.5);\n}\n\n#dark-mode-ball.dark {\n  transform: translateX(140%);\n}\n\n#menu {\n  transition:\n    opacity 500ms ease,\n    transform 750ms ease;\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 1s ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#hello-wrapper {\n  transition: transform 1s ease;\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#bg-left,\n#bg-right {\n  transition: width 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide {\n  opacity: 0;\n}\n\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n/* ANIMATION */\n\n.animate-hello {\n  will-change: animation;\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  will-change: animation;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n#scroll {\n  will-change: animation;\n  animation: bounce-x 1s infinite;\n}\n\n.animate-bounce-y {\n  will-change: animation;\n  animation: bounce-y 3s infinite;\n}\n\n.animate-bounce-y-r {\n  will-change: animation;\n  animation: bounce-y-r 3s infinite;\n}\n\n.animate-bounce-y-90 {\n  transform: rotate(90deg);\n  will-change: animation;\n  animation: bounce-y-90 3s infinite;\n}\n\n.animate-bounce-y-n90 {\n  transform: rotate(-90deg);\n  will-change: animation;\n  animation: bounce-y-n90 3s infinite;\n}\n\n/* Tailwind Bounce Custom */\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-r {\n  0%,\n  33% {\n    transform: none;\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: translateY(calc(var(--bounce-translateY) * -1));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-90 {\n  0%,\n  33% {\n    transform: rotate(90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n@keyframes bounce-y-n90 {\n  0%,\n  33% {\n    transform: rotate(-90deg);\n    animation-timing-function: var(--timing-bounce-100);\n  }\n  16% {\n    transform: rotate(-90deg) translateY(var(--bounce-translateY));\n    animation-timing-function: var(--timing-bounce-50);\n  }\n}\n\n/* MEDIA QUERY */\n\n@media (orientation: landscape) {\n  .img-project {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-even {\n    transform: rotateY(20deg);\n  }\n}\n"],"sourceRoot":""}]);
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
      const img = document.createElement("img");

      img.classList.add("img-tool");
      img.src = list[i].src;
      img.alt = list[i].alt;
      img.style.height = height + "px";

      div.classList.add(className);
      div.style.height = height * scale + "px";
      div.append(img);

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
        toolMid.classList.toggle("scaleAbout");
        toolName.textContent = toolMid.alt.toUpperCase();
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
        backTarget[0].classList.toggle("active");
        _toggleBackground(backTarget[1]);
        setTimeout(() => {
          backTarget[0].querySelector("article").scrollTo(0, 0);
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

  function resetOnScreenChange() {
    if (isTabOpen === 1) {
      btnBacks[0].click();
      isTabOpen = 0;
    }
  }

  function _openTab(tab, bg) {
    _toggleBackground(bg);
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

  function _scrollTo(content) {
    content.scrollIntoView();
    window.scrollBy(0, -56 - 28);
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
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _img_icons_open_24w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/open-24w.png */ "./src/img/icons/open-24w.png");
/* harmony import */ var _img_projects_ypet_d_450w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/projects/ypet-d-450w.png */ "./src/img/projects/ypet-d-450w.png");
/* harmony import */ var _img_projects_weather_d_450w_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/projects/weather-d-450w.png */ "./src/img/projects/weather-d-450w.png");
/* harmony import */ var _img_projects_weather_m_200w_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/projects/weather-m-200w.jpg */ "./src/img/projects/weather-m-200w.jpg");
/* harmony import */ var _img_projects_homepage_d_450w_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/projects/homepage-d-450w.png */ "./src/img/projects/homepage-d-450w.png");











const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  const projects = document.querySelector("#article-projects");
  const projectList = _getProjects();
  const length = projectList.length;
  const height = 40;
  const scale = 1.1;

  function init() {
    _generateProjects();
    _carouselInit();
    _scroll__WEBPACK_IMPORTED_MODULE_3__.scroll.floatIndexProjects(
      document.querySelectorAll(".index-project"),
      projects,
    );
  }

  function _generateProjects() {
    let count = 1;

    for (const project of projectList) {
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

      index.textContent = count;
      divIndex.textContent = count;
      divIndex.append(index);
      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      _carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.generateImage(
        project.tools,
        `tool-project-${count}`,
        height,
        scale,
        wrapperTool,
      );

      wrapperToolOuter.append(wrapperTool);
      divTools.append(wrapperToolOuter);

      aRepo.target = "_blank";
      aRepo.rel = "noreferrer";
      const aDemo = aRepo.cloneNode(false);
      aRepo.href = project.repo;
      spanRepo.textContent = "GITHUB";
      aDemo.href = project.demo;
      spanDemo.textContent = "DEMO";

      const imgLink = _createElementWithClass("img", "aspect-square");
      imgLink.src = _img_icons_open_24w_png__WEBPACK_IMPORTED_MODULE_4__;
      const imgLink2 = imgLink.cloneNode(false);

      aRepo.append(spanRepo, imgLink);
      aDemo.append(spanDemo, imgLink2);
      divLinks.append(aRepo, aDemo);
      divInfo.append(divIndex, title, divDesc, divTools, divLinks);

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

      divImg.append(divImgInner, divImgInnerMirror);
      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);

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
        [_img_projects_ypet_d_450w_png__WEBPACK_IMPORTED_MODULE_5__],
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
        [_img_projects_weather_d_450w_png__WEBPACK_IMPORTED_MODULE_6__, _img_projects_weather_m_200w_jpg__WEBPACK_IMPORTED_MODULE_7__],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        _tools__WEBPACK_IMPORTED_MODULE_1__.tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new _class_Project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Homepage",
        "My first portfolio website, I am featuring it for the amount of effort I've put into it.",
        [_img_projects_homepage_d_450w_png__WEBPACK_IMPORTED_MODULE_8__],
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
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");



const screenOrientation = (() => {
  let elementProjects = null;
  let sectionProjects = null;

  function init() {
    screen.orientation.onchange = () => {
      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.resetOnScreenChange();
      _scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.refloatIndexProjects(elementProjects, sectionProjects);
    };
  }

  function setIndexProjects(element, section) {
    elementProjects = element;
    sectionProjects = section;
  }

  return { init, setIndexProjects };
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
/* harmony import */ var _screen_orientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-orientation */ "./src/js/screen-orientation.js");



const scroll = (() => {
  const sectionIntro = document.querySelector("#section-intro");
  const scroll = document.querySelector("#scroll");

  const threshold = 1;
  let shrink = 0;

  let scrollBarHeightProjects = 0;
  let percentProjects = 0;
  const deviationProjects = 60;
  const xProjects = -100;

  function init() {
    _shrinkOnScroll();
  }

  function getScrollThreshold() {
    return threshold;
  }

  function floatIndexProjects(element, section) {
    _screen_orientation__WEBPACK_IMPORTED_MODULE_1__.screenOrientation.setIndexProjects(element, section);
    refloatIndexProjects(element, section);
    section.onscroll = () => {
      percentProjects = (section.scrollTop / scrollBarHeightProjects) * 100;
      const length = element.length;
      for (let i = 0; i < length; i++) {
        if (i === length - 1)
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i) - percentProjects * 0.7}%)`;
        else
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i) - percentProjects}%)`;
      }
    };
  }

  function refloatIndexProjects(element, section) {
    setTimeout(() => {
      scrollBarHeightProjects =
        section.scrollHeight - section.clientHeight - 56;
      const length = element.length;
      for (let i = 0; i < length; i++) {
        if (window.innerHeight < window.innerWidth)
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i)}%)`;
        else
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(0%)`;
      }
    }, 500);
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

  return {
    init,
    getScrollThreshold,
    floatIndexProjects,
    refloatIndexProjects,
    disableScroll,
    enableScroll,
  };
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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
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

/***/ "./src/img/icons/open-24w.png":
/*!************************************!*\
  !*** ./src/img/icons/open-24w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dadd74c34ffd5ac9e179.png";

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









document.addEventListener("DOMContentLoaded", () => {
  _js_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll.init();
  _js_image__WEBPACK_IMPORTED_MODULE_2__.image.init();
  _js_carousel__WEBPACK_IMPORTED_MODULE_3__.carousel.init();
  _js_projects__WEBPACK_IMPORTED_MODULE_4__.projects.init();
  _js_menu__WEBPACK_IMPORTED_MODULE_5__.menu.init();
  _js_screen_orientation__WEBPACK_IMPORTED_MODULE_6__.screenOrientation.init();
  // darkMode.init();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxXQUFXLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FB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O0FBQ0EsTUFBTSwyQ0FBTTs7QUFFWjtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkNBQU07QUFDWjs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKc0I7QUFDTjtBQUNNO0FBQ0o7O0FBRWM7QUFDTztBQUNNO0FBQ0E7QUFDRjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LHNFQUFzRTtBQUN0RSxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7QUN2SWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNGO0FBQ007QUFDQTtBQUNSO0FBQzJCO0FBQ2xCOztBQUUxQztBQUNBLEVBQUUsOENBQU07QUFDUixFQUFFLDRDQUFLO0FBQ1AsRUFBRSxrREFBUTtBQUNWLEVBQUUsa0RBQVE7QUFDVixFQUFFLDBDQUFJO0FBQ04sRUFBRSxxRUFBaUI7QUFDbkI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2NsYXNzLVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9kYXJrLW1vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9qcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3NjcmVlbi1vcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Rvb2xzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01vbnRzZXJyYXQtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbjpyb290IHtcbiAgLS10aW1pbmctYm91bmNlLTEwMDogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIC0tdGltaW5nLWJvdW5jZS01MDogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIC0tYm91bmNlLXRyYW5zbGF0ZVk6IDI1JTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbn1cblxucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5hcnRpY2xlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjc1cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIGFydGljbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIGFydGljbGUge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIGFydGljbGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gICAgfVxuICB9XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDE2NSwgMTY1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDE2NSwgMTY1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gICAgYm9yZGVyOiBzb2xpZCA0cHggcmdiKDI0MSwgMjQ1LCAyNDkpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuLmJnLXRoZW1lIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0yIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmRpdmlkZXItdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBoZWlnaHQ6IDAuMjVyZW07XG4gIHdpZHRoOiA5MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmRpdmlkZXItdGhlbWUge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuZGl2aWRlci10aGVtZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbi5jb250ZW50LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbiAgfVxufVxuLmJ0bi1uYXYtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDlyZW07XG59XG4uYnRuLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDlyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJvcmRlci1pbWcge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDAuNzVyZW07XG4gIC0tdHctdHJhbnNsYXRlLXk6IGNhbGMoY2FsYygxMDAlICsgMTJweCkgKiAtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNzVyZW0sIGNhbGMoKDEwMCUgKyAxMnB4KSAqIC0xKSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgY2FsYyhjYWxjKDEwMCUgKyAxMnB4KSAqIC0xKSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmNvbnRlbnQtd3JhcHBlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDEuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBnYXA6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IGF1dG87XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0yNSU7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC0yNSUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaW5mby1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4uaW1nLXByb2plY3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG59XG4uaW1nLXByb2plY3QsXG4gIC5pbWctcHJvamVjdC1ldmVuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgc2VjdGlvbiBiZWxvdyovXG59XG4uaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiBhdXRvO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuaW1nLXByb2plY3QtbWlycm9yLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB3aGl0ZSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgd2hpdGUpO1xuICB9XG4uaW1nLXByb2plY3QtbWlycm9yIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxuLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgyMGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG4uaW1nLXByb2plY3QtbSB7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiAtNSU7XG4gIGhlaWdodDogY2FsYyg4MCUgKyAycHgpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5pbWctcHJvamVjdC1tIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5pbWctcHJvamVjdC1taXJyb3IgPiAuaW1nLXByb2plY3QtbSxcbiAgLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuID4gLmltZy1wcm9qZWN0LW0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRvb2xzLXdyYXBwZXItb3V0ZXItcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnRvb2xzLXdyYXBwZXItcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9vbC1hYm91dCxcbiAgW2NsYXNzXj1cInRvb2wtcHJvamVjdFwiXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwcHg7XG59XG4uYm90dG9tLVxcXFxbNTZweFxcXFxdIHtcbiAgYm90dG9tOiA1NnB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LVxcXFxbLTI4cHhcXFxcXSB7XG4gIGxlZnQ6IC0yOHB4O1xufVxuLmxlZnQtXFxcXFstNDVweFxcXFxdIHtcbiAgbGVmdDogLTQ1cHg7XG59XG4ubGVmdC1cXFxcWzI4cHhcXFxcXSB7XG4gIGxlZnQ6IDI4cHg7XG59XG4ubGVmdC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LVxcXFxbY2FsY1xcXFwoNTBcXFxcJS0xNzJweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDE3MnB4KTtcbn1cbi5sZWZ0LVxcXFxbY2FsY1xcXFwoNTBcXFxcJS03MnB4XFxcXClcXFxcXSB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzJweCk7XG59XG4ucmlnaHQtXFxcXFstMjhweFxcXFxdIHtcbiAgcmlnaHQ6IC0yOHB4O1xufVxuLnJpZ2h0LVxcXFxbLTQ1cHhcXFxcXSB7XG4gIHJpZ2h0OiAtNDVweDtcbn1cbi5yaWdodC1cXFxcWzI4cHhcXFxcXSB7XG4gIHJpZ2h0OiAyOHB4O1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzg0cHhcXFxcXSB7XG4gIHRvcDogODRweDtcbn1cbi50b3AtXFxcXFtjYWxjXFxcXCg1MFxcXFwlLTE0cHhcXFxcKVxcXFxdIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xufVxuLnotXFxcXFsxXFxcXF0ge1xuICB6LWluZGV4OiAxO1xufVxuLnotXFxcXFsyXFxcXF0ge1xuICB6LWluZGV4OiAyO1xufVxuLnotXFxcXFs5OFxcXFxdIHtcbiAgei1pbmRleDogOTg7XG59XG4uei1cXFxcWzk5XFxcXF0ge1xuICB6LWluZGV4OiA5OTtcbn1cbi5tci0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tdC0wXFxcXC41IHtcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hc3BlY3QtXFxcXFsyXFxcXC8xXFxcXF0ge1xuICBhc3BlY3QtcmF0aW86IDIvMTtcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5oLTE0IHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG4uaC1cXFxcWzQwXFxcXCVcXFxcXSB7XG4gIGhlaWdodDogNDAlO1xufVxuLmgtXFxcXFs2NlxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDY2JTtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMTAwdmgtMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctMzYge1xuICB3aWR0aDogOXJlbTtcbn1cbi53LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbNzVcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNDBweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiA0MHB4KTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tdHJhbnNsYXRlLXgtMyB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0wLjc1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC43NXJlbSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy0xMDBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFszMFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS0zIHtcbiAgLS10dy10cmFuc2xhdGUteTogMC43NXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAwLjc1cmVtKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy0yMjBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteTogLTIyMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTIyMCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiAtOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiA5MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5zY2FsZS03NSB7XG4gIC0tdHctc2NhbGUteDogLjc1O1xuICAtLXR3LXNjYWxlLXk6IC43NTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoLjc1KSBzY2FsZVkoLjc1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXNjYWxlLXktMTAwIHtcbiAgLS10dy1zY2FsZS15OiAtMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnNlbGVjdC1ub25lIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTEwIHtcbiAgZ2FwOiAyLjVyZW07XG59XG4uZ2FwLTE0IHtcbiAgZ2FwOiAzLjVyZW07XG59XG4uZ2FwLTIge1xuICBnYXA6IDAuNXJlbTtcbn1cbi5nYXAtMyB7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm92ZXJmbG93LXktY2xpcCB7XG4gIG92ZXJmbG93LXk6IGNsaXA7XG59XG4ucm91bmRlZC1mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLmJnLWJsYWNrIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy13aGl0ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctbGVmdCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG59XG4uYmctcmlnaHQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbn1cbi5weC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG59XG4ucHgtMiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4ucHktMTAge1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuLnB0LTIge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtXFxcXFsxMHZ3XFxcXF0ge1xuICBmb250LXNpemU6IDEwdnc7XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLlxcXFwhbGVhZGluZy1cXFxcWzBcXFxcLjVcXFxcXSB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5sZWFkaW5nLVxcXFxbMFxcXFwuOFxcXFxdIHtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbi5sZWFkaW5nLW5vbmUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZXh0LWJsYWNrIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRyYW5zcGFyZW50IHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm9wYWNpdHktMCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tb250c2VycmF0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWY7XG59XG5cbi50b29sLWFib3V0LFxuW2NsYXNzXj1cInRvb2wtcHJvamVjdFwiXSxcbiNkYXJrLW1vZGUtYmFsbCB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xufVxuXG4uaW1nLXRvb2wge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuLmltZy10b29sLnNjYWxlQWJvdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbiNkYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xufVxuXG4jbWVudSB7XG4gIHRyYW5zaXRpb246XG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLCB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xufVxuXG4jbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2hlbGxvLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuI2JnLWxlZnQsXG4jYmctcmlnaHQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xufVxuXG4jYmctbGVmdC5zaHJpbmssXG4jYmctcmlnaHQuc2hyaW5rIHtcbiAgd2lkdGg6IDA7XG59XG5cbiNiZy1pbnRybyxcbiNzZWN0aW9uLWludHJvIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG59XG5cbiNiZy1pbnRyby5zaHJpbmssXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XG59XG5cbm5hdixcbiNzY3JvbGwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2Fib3V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbn1cblxuI3Byb2plY3RzLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbiNjb250YWN0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uYW5pbWF0ZS1oZWxsbyB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5hbmltYXRlLWFwcGVhciB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuI3Njcm9sbCB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXggMXMgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15IHtcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uOiBib3VuY2UteSAzcyBpbmZpbml0ZTtcbn1cblxuLmFuaW1hdGUtYm91bmNlLXktciB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXktciAzcyBpbmZpbml0ZTtcbn1cblxuLmFuaW1hdGUtYm91bmNlLXktOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXktOTAgM3MgaW5maW5pdGU7XG59XG5cbi5hbmltYXRlLWJvdW5jZS15LW45MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXktbjkwIDNzIGluZmluaXRlO1xufVxuXG4vKiBUYWlsd2luZCBCb3VuY2UgQ3VzdG9tICovXG5cbkBrZXlmcmFtZXMgYm91bmNlLXgge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXkge1xuICAwJSxcbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UteS1yIHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDI1JSAqIC0xKSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpICogLTEpKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LTkwIHtcbiAgMCUsXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15LW45MCB7XG4gIDAlLFxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XG4gIH1cbn1cblxuLyogTUVESUEgUVVFUlkgKi9cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5pbWctcHJvamVjdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XG4gIH1cblxuICAuaW1nLXByb2plY3QtZXZlbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKTtcbiAgfVxufVxuXG4uaG92ZXJcXFxcOnNjYWxlLVxcXFxbMTEwXFxcXCVcXFxcXTpob3ZlciB7XG4gIC0tdHctc2NhbGUteDogMTEwJTtcbiAgLS10dy1zY2FsZS15OiAxMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxMTAlKSBzY2FsZVkoMTEwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMjVcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnNjYWxlLTEwMCB7XG4gICAgLS10dy1zY2FsZS14OiAxO1xuICAgIC0tdHctc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxKSBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnB4LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC54bFxcXFw6YmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnhsXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAucG9ydHJhaXRcXFxcOmFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcWzEwMHN2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcW2NhbGNcXFxcKDEwMHN2aC01NnB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDU2cHgpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleC1jb2wtcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTE0IHtcbiAgICBnYXA6IDMuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTcge1xuICAgIGdhcDogMS43NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktMyB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LVxcXFxbMTV2d1xcXFxdIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmxhbmRzY2FwZVxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aC1cXFxcWzEwMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteC1cXFxcWy0xNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAtMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXgtXFxcXFsxNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAxNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS15LVxcXFxbMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteTogMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDE1MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpmbGV4LXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpqdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpvdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5sYW5kc2NhcGVcXFxcOm1kXFxcXDp3LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNTZweCk7XG4gICAgfVxuICB9XG59XG5cbi5kYXJrXFxcXDpiZy1ibGFjazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4uZGFya1xcXFw6Ymctd2hpdGU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmRhcmtcXFxcOnRleHQtd2hpdGU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxc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QTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQSxvQkFtWUE7SUFuWUE7RUFtWUE7O0VBbllBO0lBQUE7RUFtWUE7O0VBbllBO0lBQUE7RUFtWUE7QUFBQTs7QUFuWUE7O0VBQUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQSx1QkFtWUE7SUFuWUEsK0tBbVlBO0lBbllBO0VBbVlBOztFQW5ZQTtJQUFBLHNCQW1ZQTtJQW5ZQSw4S0FtWUE7SUFuWUE7RUFtWUE7O0VBbllBO0lBQUEsc0JBbVlBO0lBbllBLDhLQW1ZQTtJQW5ZQTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7SUFBQTtFQW1ZQTs7RUFuWUE7O0lBQUE7TUFBQTtJQW1ZQTtFQUFBO0FBQUE7O0FBbllBO0VBQUEsa0JBbVlBO0VBbllBLGtDQW1ZQTtFQW5ZQTtBQW1ZQTs7QUFuWUE7RUFBQSxrQkFtWUE7RUFuWUEsd0NBbVlBO0VBbllBO0FBbVlBOztBQW5ZQTtFQUFBLG9CQW1ZQTtFQW5ZQSw2QkFtWUE7RUFuWUE7QUFtWUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udC9Nb250c2VycmF0LUV4dHJhQm9sZC50dGYpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS10aW1pbmctYm91bmNlLTEwMDogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxuICAtLXRpbWluZy1ib3VuY2UtNTA6IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xcbiAgLS1ib3VuY2UtdHJhbnNsYXRlWTogMjUlO1xcbn1cXG5cXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gIGJvZHkgKiB7XFxuICAgIEBhcHBseSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi1bNTBtc107XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIEBhcHBseSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bDtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgQGFwcGx5IHRleHQteGwgbWQ6dGV4dC0yeGw7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgQGFwcGx5IHB5LTIgdGV4dC1qdXN0aWZ5IHRleHQtcHJldHR5O1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yIHBvcnRyYWl0OmJnLXRyYW5zcGFyZW50IGgtZnVsbCBtYXgtdy1zY3JlZW4tbGcgbGFuZHNjYXBlOnB4LTEwIGxhbmRzY2FwZTptZDpweC0xNCBsYW5kc2NhcGU6cHktMTQgZmxleCBmbGV4LWNvbCBnYXAtNyBvdmVyZmxvdy15LWF1dG87XFxuICB9XFxuXFxuICAvKiBTY3JvbGxiYXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgdy1bMTZweF07XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgQGFwcGx5IGJnLXJlZC0zMDAgcm91bmRlZC1mdWxsO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCByZ2IoMjQxIDI0NSAyNDkpO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lO1xcbiAgfVxcbn1cXG5cXG5AbGF5ZXIgY29tcG9uZW50cyB7XFxuICAuYmctdGhlbWUge1xcbiAgICBAYXBwbHkgYmctcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS0yIHtcXG4gICAgQGFwcGx5IGJnLXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LXRoZW1lIHtcXG4gICAgQGFwcGx5IHRleHQtcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LXRoZW1lLTIge1xcbiAgICBAYXBwbHkgdGV4dC1zbGF0ZS0xMDA7XFxuICB9XFxuXFxuICAuYm9yZGVyLXRoZW1lIHtcXG4gICAgQGFwcGx5IGJvcmRlci1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmRpdmlkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUgaC0xIHctWzkwJV0gbWQ6dy1bNzAlXSBsZzp3LVs5MCVdIHJvdW5kZWQtZnVsbCBzZWxmLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBsYW5kc2NhcGU6YWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTpweS0xNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG4tbmF2LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdy0zNiBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5idG4tbmF2IHtcXG4gICAgQGFwcGx5IHctMzYgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZml4ZWQ7XFxuICB9XFxuXFxuICAuYm9yZGVyLWltZyB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGJvcmRlci0yIGJvcmRlci10aGVtZSBhYnNvbHV0ZSB0cmFuc2xhdGUteC0zIC10cmFuc2xhdGUteS1bY2FsYygxMDAlKzEycHgpXSB6LWF1dG87XFxuICB9XFxuXFxuICAuY29udGVudC13cmFwcGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1bOTAlXSBweS03IGZsZXggcG9ydHJhaXQ6ZmxleC1jb2wtcmV2ZXJzZSBwb3J0cmFpdDpnYXAtNTtcXG4gIH1cXG5cXG4gIC5pbmRleC1wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdGV4dC10aGVtZSB0ZXh0LTd4bCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdHJhbnNsYXRlLXgtWy0yNSVdIHRyYW5zbGF0ZS15LVstMjUlXSB6LWF1dG87XFxuICB9XFxuXFxuICAuaW5mby1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctZnVsbCBwLTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBnYXAtNTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyO1xcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA1MDBweDtcXG4gICAgcGVyc3BlY3RpdmU6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LFxcbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xcbiAgICBAYXBwbHkgcmVsYXRpdmUgei1bMV07XFxuICAgIC8qIE1vcmUgYXQgTUVESUEgUVVFUlkgc2VjdGlvbiBiZWxvdyovXFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yLFxcbiAgLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcXG4gICAgQGFwcGx5IGFic29sdXRlIHRvcC0wIHotYXV0byBwb3J0cmFpdDpoaWRkZW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDgwJSwgd2hpdGUpO1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB3aGl0ZSk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwJSArIDJweCkpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVYKDE4MGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgyMGRlZykgcm90YXRlWCgxODBkZWcpO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW0ge1xcbiAgICBAYXBwbHkgaC1bY2FsYyg4MCUrMnB4KV0gcG9ydHJhaXQ6aC1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHRvcC1bNSVdIHJpZ2h0LVstNSVdO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LW1pcnJvciA+IC5pbWctcHJvamVjdC1tLFxcbiAgLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuID4gLmltZy1wcm9qZWN0LW0ge1xcbiAgICBAYXBwbHkgaGlkZGVuO1xcbiAgfVxcblxcbiAgLnRvb2xzLXdyYXBwZXItb3V0ZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy14LWhpZGRlbjtcXG4gIH1cXG5cXG4gIC50b29scy13cmFwcGVyLXByb2plY3Qge1xcbiAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XFxuICB9XFxuXFxuICAudG9vbC1hYm91dCxcXG4gIFtjbGFzc149XFxcInRvb2wtcHJvamVjdFxcXCJdIHtcXG4gICAgQGFwcGx5IGFzcGVjdC1zcXVhcmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XFxuICB9XFxufVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvb2wtYWJvdXQsXFxuW2NsYXNzXj1cXFwidG9vbC1wcm9qZWN0XFxcIl0sXFxuI2RhcmstbW9kZS1iYWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbn1cXG5cXG4uaW1nLXRvb2wge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbi5pbWctdG9vbC5zY2FsZUFib3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuI2RhcmstbW9kZS1iYWxsLmRhcmsge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xcbn1cXG5cXG4jbWVudSB7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBvcGFjaXR5IDUwMG1zIGVhc2UsXFxuICAgIHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbn1cXG5cXG4jbWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG5cXG4jbWVudS5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNoZWxsby13cmFwcGVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4jaGVsbG8td3JhcHBlci5oaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG59XFxuXFxuI2JnLWxlZnQsXFxuI2JnLXJpZ2h0IHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2U7XFxufVxcblxcbiNiZy1sZWZ0LnNocmluayxcXG4jYmctcmlnaHQuc2hyaW5rIHtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4jYmctaW50cm8sXFxuI3NlY3Rpb24taW50cm8ge1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XFxufVxcblxcbiNiZy1pbnRyby5zaHJpbmssXFxuI3NlY3Rpb24taW50cm8uc2hyaW5rIHtcXG4gIGhlaWdodDogY2FsYygoMTAwc3ZoIC8gMikgLSA1NnB4KTtcXG59XFxuXFxubmF2LFxcbiNzY3JvbGwge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG5cXG5uYXYuaGlkZSxcXG4jc2Nyb2xsLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuI2Fib3V0LFxcbiNwcm9qZWN0cyxcXG4jY29udGFjdCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuI2Fib3V0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XFxufVxcblxcbiNwcm9qZWN0cy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuI2NvbnRhY3QuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxufVxcblxcbi8qIEFOSU1BVElPTiAqL1xcblxcbi5hbmltYXRlLWhlbGxvIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNXMgMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLWFwcGVhciB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMS41cyAxIDEuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbiNzY3JvbGwge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXggMXMgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15IHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGJvdW5jZS15IDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS1yIHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGJvdW5jZS15LXIgM3MgaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlLWJvdW5jZS15LTkwIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGJvdW5jZS15LTkwIDNzIGluZmluaXRlO1xcbn1cXG5cXG4uYW5pbWF0ZS1ib3VuY2UteS1uOTAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGJvdW5jZS15LW45MCAzcyBpbmZpbml0ZTtcXG59XFxuXFxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xcblxcbkBrZXlmcmFtZXMgYm91bmNlLXgge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXkge1xcbiAgMCUsXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtMTAwKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteS1yIHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTEwMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1ib3VuY2UtdHJhbnNsYXRlWSkgKiAtMSkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10aW1pbmctYm91bmNlLTUwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2UteS05MCB7XFxuICAwJSxcXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgMTYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkodmFyKC0tYm91bmNlLXRyYW5zbGF0ZVkpKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS01MCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXktbjkwIHtcXG4gIDAlLFxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdGltaW5nLWJvdW5jZS0xMDApO1xcbiAgfVxcbiAgMTYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKHZhcigtLWJvdW5jZS10cmFuc2xhdGVZKSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRpbWluZy1ib3VuY2UtNTApO1xcbiAgfVxcbn1cXG5cXG4vKiBNRURJQSBRVUVSWSAqL1xcblxcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmltZy1wcm9qZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtZXZlbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFja2dyb3VuZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGJnTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctbGVmdFwiKTtcbiAgY29uc3QgYmdSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctcmlnaHRcIik7XG4gIGNvbnN0IGJnSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWludHJvXCIpO1xuXG4gIGZ1bmN0aW9uIHNocmluaygpIHtcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBhcmd1bWVudHMpIHtcbiAgICAgIGNvbnN0IGJnID0gX2dldEJnKG51bSk7XG4gICAgICBiZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRCZyhpbnQpIHtcbiAgICBzd2l0Y2ggKGludCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gYmdMZWZ0O1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gYmdSaWdodDtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGJnSW50cm87XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc2hyaW5rIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYWNrZ3JvdW5kIH07XG4iLCJpbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmNvbnN0IGNhcm91c2VsID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEFib3V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlKGxpc3QsIGNsYXNzTmFtZSwgaGVpZ2h0LCBzY2FsZSwgd3JhcHBlcikge1xuICAgIGNvbnN0IGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy10b29sXCIpO1xuICAgICAgaW1nLnNyYyA9IGxpc3RbaV0uc3JjO1xuICAgICAgaW1nLmFsdCA9IGxpc3RbaV0uYWx0O1xuICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcblxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKiBzY2FsZSArIFwicHhcIjtcbiAgICAgIGRpdi5hcHBlbmQoaW1nKTtcblxuICAgICAgd3JhcHBlci5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGUoXG4gICAgaGVpZ2h0LFxuICAgIHNjYWxlLFxuICAgIHdyYXBwZXIsXG4gICAgd3JhcHBlck91dGVyLFxuICAgIGNsYXNzTmFtZSxcbiAgICBsZW5ndGgsXG4gICAgYXV0byxcbiAgICB0b29sTmFtZSxcbiAgKSB7XG4gICAgY29uc3QgeCA9IGhlaWdodCAqIHNjYWxlO1xuICAgIGxldCBhbW91bnQgPSBNYXRoLmZsb29yKHdyYXBwZXJPdXRlci5jbGllbnRXaWR0aCAvIHgpO1xuICAgIGlmIChsZW5ndGggPiBhbW91bnQgfHwgYXV0byA9PT0gMSlcbiAgICAgIF90b29sQXV0b1Njcm9sbChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHdyYXBwZXJPdXRlcixcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgeCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBhdXRvLFxuICAgICAgICB0b29sTmFtZSxcbiAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9vbEF1dG9TY3JvbGwoXG4gICAgY2xhc3NOYW1lLFxuICAgIGxlbmd0aCxcbiAgICB3cmFwcGVyT3V0ZXIsXG4gICAgd3JhcHBlcixcbiAgICB4LFxuICAgIGFtb3VudCxcbiAgICBhdXRvLFxuICAgIHRvb2xOYW1lLFxuICApIHtcbiAgICBjb25zdCB0b29scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBsZXQgdG9CZUVuZCA9IDA7XG4gICAgbGV0IHR4ID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgICBsZXQgdG9vbE1pZCA9IG51bGw7XG5cbiAgICBpZiAoYW1vdW50ID49IGxlbmd0aCAtIDEpIGFtb3VudCA9IGxlbmd0aCAtIDI7XG4gICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHdyYXBwZXJPdXRlci5zdHlsZS53aWR0aCA9IHggKiAoYW1vdW50IC0gMSkgKyBcInB4XCI7XG4gICAgZWxzZSB3cmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogYW1vdW50ICsgXCJweFwiO1xuXG4gICAgaWYgKGFtb3VudCA8IDUpIG1pZCAtPSAyO1xuICAgIGVsc2UgaWYgKGFtb3VudCA8IDcpIG1pZCAtPSAxO1xuXG4gICAgaWYgKGF1dG8gPT09IDEpIHtcbiAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7eH1weClgO1xuICAgICAgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIHRvb2xNaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNjYWxlQWJvdXRcIik7XG4gICAgICB0b29sTmFtZS50ZXh0Q29udGVudCA9IHRvb2xNaWQuYWx0LnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gdG9CZUVuZCkge1xuICAgICAgICAgIHR4W2ldICs9IHggKiAobGVuZ3RoIC0gMSk7XG4gICAgICAgICAgdG9vbHNbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICB0b29sc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHRvb2xzW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB0eFtpXSAtPSB4O1xuXG4gICAgICAgIGlmIChhdXRvID09PSAxKSB0b29sTWlkLmNsYXNzTGlzdC50b2dnbGUoXCJzY2FsZUFib3V0XCIpO1xuICAgICAgICB0b29sc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3R4W2ldfXB4KWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b0JlRW5kICE9PSBsZW5ndGggLSAxKSB0b0JlRW5kICs9IDE7XG4gICAgICBlbHNlIHRvQmVFbmQgPSAwO1xuXG4gICAgICBpZiAobWlkICE9PSBsZW5ndGggLSAxKSBtaWQgKz0gMTtcbiAgICAgIGVsc2UgbWlkID0gMDtcblxuICAgICAgaWYgKGF1dG8gPT09IDEpIHtcbiAgICAgICAgdG9vbE1pZCA9IHRvb2xzW21pZF0ucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgICAgdG9vbE1pZC5jbGFzc0xpc3QudG9nZ2xlKFwic2NhbGVBYm91dFwiKTtcbiAgICAgICAgdG9vbE5hbWUudGV4dENvbnRlbnQgPSB0b29sTWlkLmFsdC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRBYm91dCgpIHtcbiAgICBjb25zdCBsaXN0ID0gdG9vbHMuZ2V0TGlzdCgpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwidG9vbC1hYm91dFwiO1xuICAgIGNvbnN0IGhlaWdodCA9IDQwO1xuICAgIGNvbnN0IHNjYWxlID0gMS41O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXItYWJvdXRcIik7XG4gICAgY29uc3Qgd3JhcHBlck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29scy13cmFwcGVyLW91dGVyLWFib3V0XCIpO1xuICAgIGNvbnN0IHRvb2xOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29sLW5hbWVcIik7XG5cbiAgICBnZW5lcmF0ZUltYWdlKGxpc3QsIGNsYXNzTmFtZSwgaGVpZ2h0LCBzY2FsZSwgd3JhcHBlcik7XG4gICAgY3JlYXRlKFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2NhbGUsXG4gICAgICB3cmFwcGVyLFxuICAgICAgd3JhcHBlck91dGVyLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbGlzdC5sZW5ndGgsXG4gICAgICAxLFxuICAgICAgdG9vbE5hbWUsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGdlbmVyYXRlSW1hZ2UsIGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY2Fyb3VzZWwgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBpbWcsIHJlcG8sIGRlbW8sIHRvb2xzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuaW1nID0gaW1nO1xuICAgIHRoaXMucmVwbyA9IHJlcG87XG4gICAgdGhpcy5kZW1vID0gZGVtbztcbiAgICB0aGlzLnRvb2xzID0gdG9vbHM7XG4gIH1cbn1cbiIsImNvbnN0IGRhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXJrLW1vZGUtYmFsbFwiKTtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9kZXRlY3REYXJrTW9kZSgpO1xuICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgX3RvZ2dsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICBfdG9nZ2xlKCk7XG4gICAgfSBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGUoKSB7XG4gICAgYmFsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXG4gICAgaWYgKCFodG1sLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRhcmtNb2RlIH07XG4iLCJpbXBvcnQgaW1nRGFya01vZGUyNHcgZnJvbSBcIi4uL2ltZy9pY29ucy9kYXJrLW1vZGUtMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ0xpZ2h0TW9kZTI0dyBmcm9tIFwiLi4vaW1nL2ljb25zL2xpZ2h0LW1vZGUtMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ0Fycm93MjR3IGZyb20gXCIuLi9pbWcvaWNvbnMvYXJyb3ctMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ0Fycm93MjI0dyBmcm9tIFwiLi4vaW1nL2ljb25zL2Fycm93LTItMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ1BvbGwyNHcgZnJvbSBcIi4uL2ltZy9pY29ucy9wb2xsLTI0dy5wbmdcIjtcbmltcG9ydCBpbWdQcm9maWxlNjQwdyBmcm9tIFwiLi4vaW1nL3Byb2ZpbGUtMi02NDB3LmpwZ1wiO1xuXG5jb25zdCBpbWFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctZGFyay1tb2RlXCIpO1xuICBjb25zdCBsaWdodE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1saWdodC1tb2RlXCIpO1xuICBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1hcnJvd1wiKTtcbiAgY29uc3QgYXJyb3dzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLWFycm93LTJcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1tZW51XCIpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJvZmlsZVwiKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGRhcmtNb2RlLnNyYyA9IGltZ0RhcmtNb2RlMjR3O1xuICAgIGxpZ2h0TW9kZS5zcmMgPSBpbWdMaWdodE1vZGUyNHc7XG4gICAgYXJyb3dzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5zcmMgPSBpbWdBcnJvdzI0dztcbiAgICB9KTtcbiAgICBhcnJvd3MyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5zcmMgPSBpbWdBcnJvdzIyNHc7XG4gICAgfSk7XG4gICAgbWVudS5zcmMgPSBpbWdQb2xsMjR3O1xuICAgIHByb2ZpbGUuc3JjID0gaW1nUHJvZmlsZTY0MHc7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBpbWFnZSB9O1xuIiwiaW1wb3J0IHsgYmFja2dyb3VuZCB9IGZyb20gXCIuL2JhY2tncm91bmRcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL3Njcm9sbFwiO1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgYnRuQWJvdXRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKTtcbiAgY29uc3QgYnRuQ29udGFjdEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWN0LWxcIik7XG5cbiAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnVcIik7XG4gIGNvbnN0IGJ0bk1lbnVCYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudS1iYWNrXCIpO1xuXG4gIGNvbnN0IGJ0bkFib3V0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LXBcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLXBcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1wXCIpO1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG4gIGNvbnN0IGhlbGxvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVsbG8td3JhcHBlclwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdlwiKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbiAgY29uc3QgYnRuQmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1iYWNrXCIpO1xuXG4gIGxldCBpc09wZW5NZW51ID0gMDtcbiAgbGV0IHRocmVzaG9sZCA9IDA7XG4gIGxldCBpc1RhYk9wZW4gPSAwO1xuICBsZXQgYmFja1RhcmdldCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhyZXNob2xkID0gc2Nyb2xsLmdldFNjcm9sbFRocmVzaG9sZCgpO1xuXG4gICAgYnRuQWJvdXRMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihhYm91dCwgMik7XG4gICAgfTtcbiAgICBidG5Qcm9qZWN0c0wub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9vcGVuVGFiKHByb2plY3RzLCAxKTtcbiAgICB9O1xuICAgIGJ0bkNvbnRhY3RMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihjb250YWN0LCAyKTtcbiAgICB9O1xuXG4gICAgYnRuQmFja3MuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgYmFja1RhcmdldFswXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBfdG9nZ2xlQmFja2dyb3VuZChiYWNrVGFyZ2V0WzFdKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmFja1RhcmdldFswXS5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZVwiKS5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgYnRuTWVudS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGlzT3Blbk1lbnUgPT09IDEpIHtcbiAgICAgICAgYnRuTWVudUJhY2suY2xpY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdG9nZ2xlTWVudUNvb2xkb3duKCk7XG4gICAgICBzY3JvbGwuZGlzYWJsZVNjcm9sbCgpO1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSk7XG4gICAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIH1cblxuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBpc09wZW5NZW51ID0gMTtcbiAgICB9O1xuXG4gICAgYnRuTWVudUJhY2sub25jbGljayA9ICgpID0+IHtcbiAgICAgIF90b2dnbGVNZW51Q29vbGRvd24oKTtcbiAgICAgIHNjcm9sbC5lbmFibGVTY3JvbGwoKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxKTtcbiAgICAgICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgfVxuXG4gICAgICBpc09wZW5NZW51ID0gMDtcbiAgICB9O1xuXG4gICAgYnRuQWJvdXRQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDIpO1xuICAgICAgICBfc2Nyb2xsVG8oYWJvdXQpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLShzY3JlZW4uaGVpZ2h0IC8gMikpO1xuICAgICAgfSBlbHNlIF9zY3JvbGxUbyhhYm91dCk7XG4gICAgfTtcblxuICAgIGJ0blByb2plY3RzUC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Njcm9sbFRvKHByb2plY3RzKTtcbiAgICB9O1xuICAgIGJ0bkNvbnRhY3RQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfc2Nyb2xsVG8oY29udGFjdCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0T25TY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKGlzVGFiT3BlbiA9PT0gMSkge1xuICAgICAgYnRuQmFja3NbMF0uY2xpY2soKTtcbiAgICAgIGlzVGFiT3BlbiA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX29wZW5UYWIodGFiLCBiZykge1xuICAgIF90b2dnbGVCYWNrZ3JvdW5kKGJnKTtcbiAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpc1RhYk9wZW4gPSAxO1xuICAgIGJhY2tUYXJnZXQgPSBbdGFiLCBiZ107XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlQmFja2dyb3VuZChiZykge1xuICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICBiYWNrZ3JvdW5kLnNocmluayhiZyk7XG4gICAgbmF2LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51Q29vbGRvd24oKSB7XG4gICAgYnRuTWVudS5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnRuTWVudS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnRuTWVudUJhY2suZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zY3JvbGxUbyhjb250ZW50KSB7XG4gICAgY29udGVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtNTYgLSAyOCk7XG4gICAgYnRuTWVudUJhY2suY2xpY2soKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHJlc2V0T25TY3JlZW5DaGFuZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzLVByb2plY3RcIjtcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL3Njcm9sbFwiO1xuXG5pbXBvcnQgaW1nT3BlbiBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tMjR3LnBuZ1wiO1xuaW1wb3J0IGltZ1lwZXREIGZyb20gXCIuLi9pbWcvcHJvamVjdHMveXBldC1kLTQ1MHcucG5nXCI7XG5pbXBvcnQgaW1nV2VhdGhlckQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLWQtNDUwdy5wbmdcIjtcbmltcG9ydCBpbWdXZWF0aGVyTSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3dlYXRoZXItbS0yMDB3LmpwZ1wiO1xuaW1wb3J0IGltZ0hvbWVEIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UtZC00NTB3LnBuZ1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FydGljbGUtcHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gX2dldFByb2plY3RzKCk7XG4gIGNvbnN0IGxlbmd0aCA9IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgY29uc3QgaGVpZ2h0ID0gNDA7XG4gIGNvbnN0IHNjYWxlID0gMS4xO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2dlbmVyYXRlUHJvamVjdHMoKTtcbiAgICBfY2Fyb3VzZWxJbml0KCk7XG4gICAgc2Nyb2xsLmZsb2F0SW5kZXhQcm9qZWN0cyhcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kZXgtcHJvamVjdFwiKSxcbiAgICAgIHByb2plY3RzLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2VuZXJhdGVQcm9qZWN0cygpIHtcbiAgICBsZXQgY291bnQgPSAxO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICBjb25zdCBkaXZXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiY29udGVudC13cmFwcGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZJbmRleCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImluZGV4LXByb2plY3Qtd3JhcHBlclwiLFxuICAgICAgICBcInRleHQtdHJhbnNwYXJlbnRcIixcbiAgICAgICAgXCJtb250c2VycmF0XCIsXG4gICAgICApO1xuICAgICAgY29uc3QgaW5kZXggPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIFwiaW5kZXgtcHJvamVjdFwiLFxuICAgICAgICBcInRleHQtdGhlbWVcIixcbiAgICAgICAgXCJhYnNvbHV0ZVwiLFxuICAgICAgICBcInRyYW5zbGF0ZS14LVstMTAwJV1cIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZJbmZvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW5mby1wcm9qZWN0XCIsXG4gICAgICAgIFwicmVsYXRpdmVcIixcbiAgICAgICk7XG4gICAgICBjb25zdCB0aXRsZSA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDNcIiwgXCJ6LVsxXVwiLCBcIm1vbnRzZXJyYXRcIik7XG4gICAgICBjb25zdCBzcGFuID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJzcGFuXCIsIFwidGV4dC10aGVtZVwiKTtcbiAgICAgIGNvbnN0IGRpdkRlc2MgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInBcIiwgXCJ6LVsyXVwiKTtcbiAgICAgIGNvbnN0IGRpdlRvb2xzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIFwib3ZlcmZsb3cteC1oaWRkZW5cIixcbiAgICAgICk7XG4gICAgICBjb25zdCB3cmFwcGVyVG9vbE91dGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwidG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgd3JhcHBlclRvb2wgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b29scy13cmFwcGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBkaXZMaW5rcyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJqdXN0aWZ5LWV2ZW5seVwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFSZXBvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJnYXAtM1wiLFxuICAgICAgICBcIm1vbnRzZXJyYXRcIixcbiAgICAgICAgXCJob3ZlcjpzY2FsZS1bMTEwJV1cIixcbiAgICAgICk7XG4gICAgICBjb25zdCBzcGFuUmVwbyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNwYW5EZW1vID0gc3BhblJlcG8uY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIGNvbnN0IGRpdkltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwiaW1nLXByb2plY3Qtd3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGRpdkltZ0lubmVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIik7XG4gICAgICBjb25zdCBpbWcgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiKTtcbiAgICAgIGNvbnN0IGltZzIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImltZ1wiLCBcImltZy1wcm9qZWN0LW1cIiwgXCJhYnNvbHV0ZVwiKTtcblxuICAgICAgaW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgICBkaXZJbmRleC5hcHBlbmQoaW5kZXgpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCIuXCI7XG4gICAgICB0aXRsZS5hcHBlbmQoc3Bhbik7XG4gICAgICBkaXZEZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICBjYXJvdXNlbC5nZW5lcmF0ZUltYWdlKFxuICAgICAgICBwcm9qZWN0LnRvb2xzLFxuICAgICAgICBgdG9vbC1wcm9qZWN0LSR7Y291bnR9YCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgd3JhcHBlclRvb2wsXG4gICAgICApO1xuXG4gICAgICB3cmFwcGVyVG9vbE91dGVyLmFwcGVuZCh3cmFwcGVyVG9vbCk7XG4gICAgICBkaXZUb29scy5hcHBlbmQod3JhcHBlclRvb2xPdXRlcik7XG5cbiAgICAgIGFSZXBvLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICBhUmVwby5yZWwgPSBcIm5vcmVmZXJyZXJcIjtcbiAgICAgIGNvbnN0IGFEZW1vID0gYVJlcG8uY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIGFSZXBvLmhyZWYgPSBwcm9qZWN0LnJlcG87XG4gICAgICBzcGFuUmVwby50ZXh0Q29udGVudCA9IFwiR0lUSFVCXCI7XG4gICAgICBhRGVtby5ocmVmID0gcHJvamVjdC5kZW1vO1xuICAgICAgc3BhbkRlbW8udGV4dENvbnRlbnQgPSBcIkRFTU9cIjtcblxuICAgICAgY29uc3QgaW1nTGluayA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiYXNwZWN0LXNxdWFyZVwiKTtcbiAgICAgIGltZ0xpbmsuc3JjID0gaW1nT3BlbjtcbiAgICAgIGNvbnN0IGltZ0xpbmsyID0gaW1nTGluay5jbG9uZU5vZGUoZmFsc2UpO1xuXG4gICAgICBhUmVwby5hcHBlbmQoc3BhblJlcG8sIGltZ0xpbmspO1xuICAgICAgYURlbW8uYXBwZW5kKHNwYW5EZW1vLCBpbWdMaW5rMik7XG4gICAgICBkaXZMaW5rcy5hcHBlbmQoYVJlcG8sIGFEZW1vKTtcbiAgICAgIGRpdkluZm8uYXBwZW5kKGRpdkluZGV4LCB0aXRsZSwgZGl2RGVzYywgZGl2VG9vbHMsIGRpdkxpbmtzKTtcblxuICAgICAgaW1nLnNyYyA9IHByb2plY3QuaW1nWzBdO1xuICAgICAgZGl2SW1nSW5uZXIuYXBwZW5kKGltZyk7XG5cbiAgICAgIGlmIChwcm9qZWN0LmltZy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGltZzIuc3JjID0gcHJvamVjdC5pbWdbMV07XG4gICAgICAgIGRpdkltZ0lubmVyLmFwcGVuZChpbWcyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGl2SW1nSW5uZXJNaXJyb3IgPSBkaXZJbWdJbm5lci5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGlmIChjb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgZGl2SW1nSW5uZXIuY2xhc3NMaXN0LmFkZChcImltZy1wcm9qZWN0LWV2ZW5cIik7XG4gICAgICAgIGRpdkltZ0lubmVyTWlycm9yLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1taXJyb3ItZXZlblwiKTtcbiAgICAgICAgZGl2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGFuZHNjYXBlOmZsZXgtcm93LXJldmVyc2VcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3RcIik7XG4gICAgICAgIGRpdkltZ0lubmVyTWlycm9yLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1taXJyb3JcIik7XG4gICAgICB9XG5cbiAgICAgIGRpdkltZy5hcHBlbmQoZGl2SW1nSW5uZXIsIGRpdkltZ0lubmVyTWlycm9yKTtcbiAgICAgIGRpdldyYXBwZXIuYXBwZW5kKGRpdkluZm8sIGRpdkltZyk7XG4gICAgICBjb250ZW50UHJvamVjdHMuYXBwZW5kKGRpdldyYXBwZXIpO1xuXG4gICAgICBjb25zdCBkaXZpZGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJkaXZpZGVyLXRoZW1lXCIpO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2aWRlcik7XG5cbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Nhcm91c2VsSW5pdCgpIHtcbiAgICBjb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHMtd3JhcHBlci1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHdyYXBwZXJzT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0b29sLXByb2plY3QtJHtpICsgMX1gO1xuICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApLmxlbmd0aDtcbiAgICAgIGNhcm91c2VsLmNyZWF0ZShcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgd3JhcHBlcnNbaV0sXG4gICAgICAgIHdyYXBwZXJzT3V0ZXJbaV0sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICAwLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcsIC4uLmNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBQcm9qZWN0IExpc3RcblxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIllvdXIgUGVyc29uYWwgRXhwZW5zZSBUcmFja2VyXCIsXG4gICAgICAgIFwiQSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgeW91IHRvIHRyYWNrIHlvdXIgZXhwZW5zZXMuXCIsXG4gICAgICAgIFtpbWdZcGV0RF0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9jczUweC0yMDIzLXByb2plY3RcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWw4M2t5czl5SkpzXCIsXG4gICAgICAgIHRvb2xzLmdldChcbiAgICAgICAgICBcIkhUTUxcIixcbiAgICAgICAgICBcIkNTU1wiLFxuICAgICAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIFwiUHl0aG9uXCIsXG4gICAgICAgICAgXCJTUUxpdGVcIixcbiAgICAgICAgICBcIkZsYXNrXCIsXG4gICAgICAgICAgXCJCb290c3RyYXBcIixcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJXZWF0aGVyIEFwcFwiLFxuICAgICAgICBcIkEgd2VhdGhlciBhcHBsaWNhdGlvbiB1c2luZyBXZWF0aGVyIEFQSS5cIixcbiAgICAgICAgW2ltZ1dlYXRoZXJELCBpbWdXZWF0aGVyTV0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9vZGluLXdlYXRoZXItYXBwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93b29uemYuZ2l0aHViLmlvL29kaW4td2VhdGhlci1hcHAvXCIsXG4gICAgICAgIHRvb2xzLmdldChcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCIsIFwiV2VicGFja1wiKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJIb21lcGFnZVwiLFxuICAgICAgICBcIk15IGZpcnN0IHBvcnRmb2xpbyB3ZWJzaXRlLCBJIGFtIGZlYXR1cmluZyBpdCBmb3IgdGhlIGFtb3VudCBvZiBlZmZvcnQgSSd2ZSBwdXQgaW50byBpdC5cIixcbiAgICAgICAgW2ltZ0hvbWVEXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4taG9tZXBhZ2VcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi1ob21lcGFnZS9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIsIFwiVGFpbHdpbmQgQ1NTXCIpLFxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcblxuY29uc3Qgc2NyZWVuT3JpZW50YXRpb24gPSAoKCkgPT4ge1xuICBsZXQgZWxlbWVudFByb2plY3RzID0gbnVsbDtcbiAgbGV0IHNlY3Rpb25Qcm9qZWN0cyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzY3JlZW4ub3JpZW50YXRpb24ub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBtZW51LnJlc2V0T25TY3JlZW5DaGFuZ2UoKTtcbiAgICAgIHNjcm9sbC5yZWZsb2F0SW5kZXhQcm9qZWN0cyhlbGVtZW50UHJvamVjdHMsIHNlY3Rpb25Qcm9qZWN0cyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIGVsZW1lbnRQcm9qZWN0cyA9IGVsZW1lbnQ7XG4gICAgc2VjdGlvblByb2plY3RzID0gc2VjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHNldEluZGV4UHJvamVjdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH07XG4iLCJpbXBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfSBmcm9tIFwiLi9zY3JlZW4tb3JpZW50YXRpb25cIjtcblxuY29uc3Qgc2Nyb2xsID0gKCgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWludHJvXCIpO1xuICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbFwiKTtcblxuICBjb25zdCB0aHJlc2hvbGQgPSAxO1xuICBsZXQgc2hyaW5rID0gMDtcblxuICBsZXQgc2Nyb2xsQmFySGVpZ2h0UHJvamVjdHMgPSAwO1xuICBsZXQgcGVyY2VudFByb2plY3RzID0gMDtcbiAgY29uc3QgZGV2aWF0aW9uUHJvamVjdHMgPSA2MDtcbiAgY29uc3QgeFByb2plY3RzID0gLTEwMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9zaHJpbmtPblNjcm9sbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIHNjcmVlbk9yaWVudGF0aW9uLnNldEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbik7XG4gICAgcmVmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbik7XG4gICAgc2VjdGlvbi5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHBlcmNlbnRQcm9qZWN0cyA9IChzZWN0aW9uLnNjcm9sbFRvcCAvIHNjcm9sbEJhckhlaWdodFByb2plY3RzKSAqIDEwMDtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnQubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoIC0gMSlcbiAgICAgICAgICBlbGVtZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgICBgdHJhbnNsYXRlWCgke3hQcm9qZWN0c30lKSB0cmFuc2xhdGVZKCR7ZGV2aWF0aW9uUHJvamVjdHMgKiBNYXRoLnNxcnQoaSkgLSBwZXJjZW50UHJvamVjdHMgKiAwLjd9JSlgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbWVudFtpXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICAgYHRyYW5zbGF0ZVgoJHt4UHJvamVjdHN9JSkgdHJhbnNsYXRlWSgke2RldmlhdGlvblByb2plY3RzICogTWF0aC5zcXJ0KGkpIC0gcGVyY2VudFByb2plY3RzfSUpYDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2Nyb2xsQmFySGVpZ2h0UHJvamVjdHMgPVxuICAgICAgICBzZWN0aW9uLnNjcm9sbEhlaWdodCAtIHNlY3Rpb24uY2xpZW50SGVpZ2h0IC0gNTY7XG4gICAgICBjb25zdCBsZW5ndGggPSBlbGVtZW50Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgIGVsZW1lbnRbaV0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgICAgIGB0cmFuc2xhdGVYKCR7eFByb2plY3RzfSUpIHRyYW5zbGF0ZVkoJHtkZXZpYXRpb25Qcm9qZWN0cyAqIE1hdGguc3FydChpKX0lKWA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgICBgdHJhbnNsYXRlWCgke3hQcm9qZWN0c30lKSB0cmFuc2xhdGVZKDAlKWA7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaHJpbmtPblNjcm9sbCgpIHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAwKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAxKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nocmlua0ludHJvKCkge1xuICAgIHNlY3Rpb25JbnRyby5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIHNjcm9sbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ3NzAwMjUvaG93LXRvLWRpc2FibGUtc2Nyb2xsaW5nLXRlbXBvcmFyaWx5XG4gIC8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gIC8vIHNwYWNlYmFyOiAzMiwgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LCBlbmQ6IDM1LCBob21lOiAzNlxuICBjb25zdCBrZXlzID0geyAzNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMSB9O1xuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XG4gIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGVzdFwiLFxuICAgICAgbnVsbCxcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgbGV0IHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG4gIGxldCB3aGVlbEV2ZW50ID1cbiAgICBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogXCJtb3VzZXdoZWVsXCI7XG5cbiAgLy8gY2FsbCB0aGlzIHRvIERpc2FibGVcbiAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7IC8vIG9sZGVyIEZGXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9kZXJuIGRlc2t0b3BcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XG4gIH1cblxuICAvLyBjYWxsIHRoaXMgdG8gRW5hYmxlXG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBnZXRTY3JvbGxUaHJlc2hvbGQsXG4gICAgZmxvYXRJbmRleFByb2plY3RzLFxuICAgIHJlZmxvYXRJbmRleFByb2plY3RzLFxuICAgIGRpc2FibGVTY3JvbGwsXG4gICAgZW5hYmxlU2Nyb2xsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJjb25zdCB0b29scyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9odG1sNS9odG1sNS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJIVE1MXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2NzczMvY3NzMy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDU1NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkphdmFTY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvd2VicGFjay93ZWJwYWNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIldlYnBhY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamVzdC9qZXN0LXBsYWluLnN2Z1wiLFxuICAgICAgYWx0OiBcIkplc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3Mtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2MvYy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiUHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3NxbGl0ZS9zcWxpdGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiU1FMaXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2ZsYXNrL2ZsYXNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkZsYXNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2Jvb3RzdHJhcC9ib290c3RyYXAtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiQm9vdHN0cmFwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3ZzY29kZS92c2NvZGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdC9naXQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0SHViXCIsXG4gICAgfSxcbiAgXTtcblxuICBmdW5jdGlvbiBnZXRMaXN0KCkge1xuICAgIHJldHVybiBnZXQoXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICAgIFwiR2l0XCIsXG4gICAgICBcIkdpdEh1YlwiLFxuICAgICAgXCJIVE1MXCIsXG4gICAgICBcIkNTU1wiLFxuICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICBcIldlYnBhY2tcIixcbiAgICAgIFwiSmVzdFwiLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IGdldExpc3QgPSBbXTtcblxuICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgYXJndW1lbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvb2wgb2YgbGlzdCkge1xuICAgICAgICBpZiAoYXJndW1lbnQgPT09IHRvb2wuYWx0KSBnZXRMaXN0LnB1c2godG9vbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldExpc3Q7XG4gIH1cblxuICByZXR1cm4geyBnZXRMaXN0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvb2xzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL2pzL3Njcm9sbFwiO1xuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tIFwiLi9qcy9pbWFnZVwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9qcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9qcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL2pzL21lbnVcIjtcbmltcG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSBcIi4vanMvc2NyZWVuLW9yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBkYXJrTW9kZSB9IGZyb20gXCIuL2pzL2RhcmstbW9kZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHNjcm9sbC5pbml0KCk7XG4gIGltYWdlLmluaXQoKTtcbiAgY2Fyb3VzZWwuaW5pdCgpO1xuICBwcm9qZWN0cy5pbml0KCk7XG4gIG1lbnUuaW5pdCgpO1xuICBzY3JlZW5PcmllbnRhdGlvbi5pbml0KCk7XG4gIC8vIGRhcmtNb2RlLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9