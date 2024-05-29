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
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  border-radius: 9999px;
    border: solid 4px rgb(241, 245, 249);
}

::-webkit-scrollbar-thumb:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, 1);
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
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
@media (orientation: portrait) {

  .divider-theme {
    width: 95%;
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
.w-screen {
  width: 100vw;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-ExtraBold.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  body * {\n    @apply transition-colors duration-[50ms];\n  }\n\n  h2 {\n    @apply text-3xl md:text-4xl;\n  }\n\n  h3 {\n    @apply text-xl md:text-2xl;\n  }\n\n  p {\n    @apply py-2 text-justify text-pretty;\n  }\n\n  article {\n    @apply bg-theme-2 portrait:bg-transparent h-full max-w-screen-lg landscape:px-10 landscape:md:px-14 landscape:py-14 flex flex-col gap-7 overflow-y-auto;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    @apply w-[16px];\n  }\n\n  ::-webkit-scrollbar-thumb {\n    @apply bg-theme rounded-full;\n    border: solid 4px rgb(241 245 249);\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    @apply bg-red-300;\n  }\n}\n\n@layer components {\n  .bg-theme {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-2 {\n    @apply bg-slate-100;\n  }\n\n  .text-theme {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-slate-100;\n  }\n\n  .border-theme {\n    @apply border-red-400;\n  }\n\n  .divider-theme {\n    @apply bg-theme h-1 w-[90%] portrait:w-[95%] rounded-full self-center;\n  }\n\n  .content-wrapper {\n    @apply h-full w-full landscape:absolute top-0 left-0;\n  }\n\n  .content-section {\n    @apply h-full w-full landscape:py-14 flex justify-center items-center;\n  }\n\n  .border-img {\n    @apply h-full w-full border-2 border-theme absolute translate-x-3 -translate-y-[calc(100%+12px)] z-auto;\n  }\n\n  .content-wrapper-project {\n    @apply w-[90%] py-7 flex portrait:flex-col-reverse portrait:gap-5;\n  }\n\n  .index-project-wrapper {\n    @apply text-theme text-7xl absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] z-auto;\n  }\n\n  .info-project {\n    @apply w-full p-3 flex flex-col justify-evenly gap-5;\n  }\n\n  .img-project-wrapper {\n    @apply w-full flex justify-center;\n    -webkit-perspective: 500px;\n    perspective: 500px;\n  }\n\n  .img-project,\n  .img-project-even {\n    @apply relative z-[1];\n    /* More at MEDIA QUERY section below*/\n  }\n\n  .img-project-mirror,\n  .img-project-mirror-even {\n    @apply absolute top-0 z-auto portrait:hidden;\n    -webkit-mask-image: linear-gradient(transparent 80%, white);\n    mask-image: linear-gradient(transparent 80%, white);\n  }\n\n  .img-project-mirror {\n    transform: translateY(calc(100% + 2px)) rotateY(-20deg) rotateX(180deg);\n  }\n\n  .img-project-mirror-even {\n    transform: translateY(calc(100% + 2px)) rotateY(20deg) rotateX(180deg);\n  }\n\n  .img-project-m {\n    @apply h-[calc(80%+2px)] portrait:h-full border-2 border-black rounded-md top-[5%] right-[-5%];\n  }\n\n  .img-project-mirror > .img-project-m,\n  .img-project-mirror-even > .img-project-m {\n    @apply hidden;\n  }\n\n  .tools-wrapper-outer-project {\n    @apply w-full flex justify-center overflow-x-hidden;\n  }\n\n  .tools-wrapper-project {\n    @apply flex items-center;\n  }\n}\n\n.montserrat {\n  font-family: \"Montserrat\", system-ui, sans-serif;\n}\n\n.tool-about,\n[class^=\"tool-project\"],\n#dark-mode-ball {\n  transition: transform 750ms ease;\n}\n\n#dark-mode-ball.dark {\n  transform: translateX(140%);\n}\n\n#menu {\n  transition:\n    opacity 500ms ease,\n    transform 750ms ease;\n}\n\n#menu {\n  opacity: 0;\n  transition: opacity 1s ease;\n}\n\n#menu.open {\n  opacity: 1;\n}\n\n#hello-wrapper {\n  transition: transform 1s ease;\n}\n\n#hello-wrapper.hide {\n  transform: translateY(100%);\n}\n\n#bg-left,\n#bg-right {\n  transition: width 1s ease;\n}\n\n#bg-left.shrink,\n#bg-right.shrink {\n  width: 0;\n}\n\n#bg-intro,\n#section-intro {\n  transition: height 1s ease;\n}\n\n#bg-intro.shrink,\n#section-intro.shrink {\n  height: calc((100svh / 2) - 56px);\n}\n\nnav,\n#scroll {\n  transition: opacity 1s ease;\n}\n\nnav.hide,\n#scroll.hide {\n  opacity: 0;\n}\n\n#about,\n#projects,\n#contact {\n  transition: transform 1s ease;\n}\n\n#about.active {\n  transform: translateX(150%);\n}\n\n#projects.active {\n  transform: translateX(-150%);\n}\n\n#contact.active {\n  transform: translateY(-150%);\n}\n\n/* ANIMATION */\n\n.animate-hello {\n  will-change: animation;\n  animation: slide-up 1.5s 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n}\n\n.animate-appear {\n  will-change: animation;\n  animation: appear 1.5s 1 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\nbutton:hover .btn-bg-y {\n  will-change: animation;\n  animation: bounce-y 1s infinite;\n}\n\nbutton:hover .btn-bg-x,\n#scroll {\n  will-change: animation;\n  animation: bounce-x 1s infinite;\n}\n\n/* Tailwind Bounce Custom */\n\n@keyframes bounce-y {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  50% {\n    transform: translateY(25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n}\n\n@keyframes bounce-x {\n  0%,\n  100% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  50% {\n    transform: translateX(10%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n}\n\n/* MEDIA QUERY */\n\n@media (orientation: landscape) {\n  .img-project {\n    transform: rotateY(-20deg);\n  }\n\n  .img-project-even {\n    transform: rotateY(20deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  const margin = 2;

  function init() {
    _initAbout();
  }

  function generateImage(list, className, height, wrapper) {
    const length = list.length;
    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      img.classList.add(className);
      img.src = list[i].src;
      img.alt = list[i].alt;
      img.style.height = height + "px";
      img.style.margin = `0 ${margin}px`;
      wrapper.append(img);
    }
  }

  function create(height, wrapper, wrapperOuter, className, length, auto) {
    const x = height + 2 * margin;
    let amount = Math.floor(wrapperOuter.clientWidth / x);
    if (length > amount || auto === 1)
      _toolAutoScroll(className, length, wrapperOuter, wrapper, x, amount);
  }

  function _initAbout() {
    const list = _tools__WEBPACK_IMPORTED_MODULE_0__.tools.getList();
    const className = "tool-about";
    const height = 50;
    const wrapper = document.querySelector("#tools-wrapper-about");
    const wrapperOuter = document.querySelector("#tools-wrapper-outer-about");
    const toolName = document.querySelector("#tool-name");

    generateImage(list, className, height, wrapper);
    create(50, wrapper, wrapperOuter, className, list.length, 1);
    _toolDisplayName(toolName, list, wrapperOuter, height + margin);
  }

  function _toolAutoScroll(
    className,
    length,
    wrapperOuter,
    wrapper,
    x,
    amount,
  ) {
    const tools = document.querySelectorAll(`.${className}`);
    let toBeEnd = 0;
    let tx = new Array(length).fill(0);

    if (amount >= length - 1) amount = length - 2;
    if (amount % 2 === 0) wrapperOuter.style.width = x * (amount - 1) + "px";
    else wrapperOuter.style.width = x * amount + "px";
    wrapper.style.transform = `translateX(-${x}px)`;

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
        tools[i].style.transform = `translateX(${tx[i]}px)`;
      }

      if (toBeEnd !== length - 1) toBeEnd += 1;
      else toBeEnd = 0;
    }, 2000);
  }

  function _toolDisplayName(toolName, list, wrapperOuter, x) {
    const length = list.length;
    const amount = Math.floor(wrapperOuter.clientWidth / x);

    let mid = Math.floor(length / 2);
    if (amount < 6) mid -= 1;
    toolName.textContent = list[mid].alt.toUpperCase();

    setInterval(() => {
      if (mid !== length - 1) mid += 1;
      else mid = 0;

      toolName.textContent = list[mid].alt.toUpperCase();
    }, 2000);
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
        40,
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
      _carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.create(40, wrappers[i], wrappersOuter[i], className, length, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxZQUFZLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxLQUFLLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxN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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJDQUFNOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBTTs7QUFFWjtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkNBQU07QUFDWjs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKc0I7QUFDTjtBQUNNO0FBQ0o7O0FBRWM7QUFDTztBQUNNO0FBQ0E7QUFDRjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ0Y7QUFDTTtBQUNBO0FBQ1I7QUFDMkI7QUFDbEI7O0FBRTFDO0FBQ0EsRUFBRSw4Q0FBTTtBQUNSLEVBQUUsNENBQUs7QUFDUCxFQUFFLGtEQUFRO0FBQ1YsRUFBRSxrREFBUTtBQUNWLEVBQUUsMENBQUk7QUFDTixFQUFFLHFFQUFpQjtBQUNuQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvY2xhc3MtUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL2ltYWdlLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2pzL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2NyZWVuLW9yaWVudGF0aW9uLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvanMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvTW9udHNlcnJhdC1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJUcnVlVHlwZVwiKTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbn1cblxucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5hcnRpY2xlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjc1cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIGFydGljbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIGFydGljbGUge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIGFydGljbGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gICAgfVxuICB9XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgYm9yZGVyOiBzb2xpZCA0cHggcmdiKDI0MSwgMjQ1LCAyNDkpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMTY1LCAxNjUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMTY1LCAxNjUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uYmctdGhlbWUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uZGl2aWRlci10aGVtZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5kaXZpZGVyLXRoZW1lIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG4uY29udGVudC13cmFwcGVyIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xuICB9XG59XG4uYm9yZGVyLWltZyB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy10cmFuc2xhdGUteDogMC43NXJlbTtcbiAgLS10dy10cmFuc2xhdGUteTogY2FsYyhjYWxjKDEwMCUgKyAxMnB4KSAqIC0xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgY2FsYygoMTAwJSArIDEycHgpICogLTEpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjc1cmVtLCBjYWxjKGNhbGMoMTAwJSArIDEycHgpICogLTEpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG4uY29udGVudC13cmFwcGVyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMS4yNXJlbTtcbiAgfVxufVxuLmluZGV4LXByb2plY3Qtd3JhcHBlciB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogYXV0bztcbiAgLS10dy10cmFuc2xhdGUteDogLTI1JTtcbiAgLS10dy10cmFuc2xhdGUteTogLTI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTI1JSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5pbmZvLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5pbWctcHJvamVjdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcbn1cbi5pbWctcHJvamVjdCxcbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gICAgLyogTW9yZSBhdCBNRURJQSBRVUVSWSBzZWN0aW9uIGJlbG93Ki9cbn1cbi5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IGF1dG87XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5pbWctcHJvamVjdC1taXJyb3IsXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmltZy1wcm9qZWN0LW1pcnJvcixcbiAgLmltZy1wcm9qZWN0LW1pcnJvci1ldmVuIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHdoaXRlKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB3aGl0ZSk7XG4gIH1cbi5pbWctcHJvamVjdC1taXJyb3Ige1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgKyAycHgpKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG4uaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgKyAycHgpKSByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDE4MGRlZyk7XG4gIH1cbi5pbWctcHJvamVjdC1tIHtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IC01JTtcbiAgaGVpZ2h0OiBjYWxjKDgwJSArIDJweCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmltZy1wcm9qZWN0LW0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLmltZy1wcm9qZWN0LW1pcnJvciA+IC5pbWctcHJvamVjdC1tLFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4gPiAuaW1nLXByb2plY3QtbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4udG9vbHMtd3JhcHBlci1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmxlZnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi5sZWZ0LTUge1xuICBsZWZ0OiAxLjI1cmVtO1xufVxuLmxlZnQtXFxcXFs1MFxcXFwlXFxcXF0ge1xuICBsZWZ0OiA1MCU7XG59XG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucmlnaHQtNSB7XG4gIHJpZ2h0OiAxLjI1cmVtO1xufVxuLnJpZ2h0LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzc2cHhcXFxcXSB7XG4gIHRvcDogNzZweDtcbn1cbi56LVxcXFxbMVxcXFxdIHtcbiAgei1pbmRleDogMTtcbn1cbi56LVxcXFxbMlxcXFxdIHtcbiAgei1pbmRleDogMjtcbn1cbi56LVxcXFxbOThcXFxcXSB7XG4gIHotaW5kZXg6IDk4O1xufVxuLnotXFxcXFs5OVxcXFxdIHtcbiAgei1pbmRleDogOTk7XG59XG4ubXItMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLm10LTAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ubXQtMFxcXFwuNSB7XG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXNwZWN0LVxcXFxbMlxcXFwvMVxcXFxdIHtcbiAgYXNwZWN0LXJhdGlvOiAyLzE7XG59XG4uYXNwZWN0LXNxdWFyZSB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG4uaC0xNCB7XG4gIGhlaWdodDogMy41cmVtO1xufVxuLmgtXFxcXFs0MFxcXFwlXFxcXF0ge1xuICBoZWlnaHQ6IDQwJTtcbn1cbi5oLVxcXFxbNjZcXFxcJVxcXFxdIHtcbiAgaGVpZ2h0OiA2NiU7XG59XG4uaC1cXFxcW2NhbGNcXFxcKDEwMHZoLTJcXFxcKjU2cHhcXFxcKVxcXFxdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LTM2IHtcbiAgd2lkdGg6IDlyZW07XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiAzMCU7XG59XG4udy1cXFxcWzc1XFxcXCVcXFxcXSB7XG4gIHdpZHRoOiA3NSU7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMHZ3LTJcXFxcKjQwcHhcXFxcKVxcXFxdIHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNDBweCk7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udy1zY3JlZW4ge1xuICB3aWR0aDogMTAwdnc7XG59XG4uLXRyYW5zbGF0ZS14LTMge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMC43NXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNzVyZW0sIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstMTAwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy0yNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LTMge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwLjc1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDAuNzVyZW0pIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTIyMFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMjIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtMjIwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXktXFxcXFstMjMwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0yMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC0yMzAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteS1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi1yb3RhdGUtOTAge1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnNjYWxlLTc1IHtcbiAgLS10dy1zY2FsZS14OiAuNzU7XG4gIC0tdHctc2NhbGUteTogLjc1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCguNzUpIHNjYWxlWSguNzUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tc2NhbGUteS0xMDAge1xuICAtLXR3LXNjYWxlLXk6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKC0xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2VsZWN0LW5vbmUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMTAge1xuICBnYXA6IDIuNXJlbTtcbn1cbi5nYXAtMTQge1xuICBnYXA6IDMuNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC0zIHtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteS1jbGlwIHtcbiAgb3ZlcmZsb3cteTogY2xpcDtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4uYmctYmxhY2sge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXdoaXRlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbn1cbi5iZy1yaWdodCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuLnB4LTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbn1cbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi5weS0xMCB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59XG4ucHktMTQge1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuLnB5LTUge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG4ucHQtMiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC1cXFxcWzEwdndcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uXFxcXCFsZWFkaW5nLVxcXFxbMFxcXFwuNVxcXFxdIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmxlYWRpbmctXFxcXFswXFxcXC44XFxcXF0ge1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLmxlYWRpbmctbm9uZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtYmxhY2sge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdHJhbnNwYXJlbnQge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ub3BhY2l0eS0wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1vbnRzZXJyYXQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcbn1cblxuLnRvb2wtYWJvdXQsXG5bY2xhc3NePVwidG9vbC1wcm9qZWN0XCJdLFxuI2RhcmstbW9kZS1iYWxsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XG59XG5cbiNkYXJrLW1vZGUtYmFsbC5kYXJrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xufVxuXG4jbWVudSB7XG4gIHRyYW5zaXRpb246XG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLCB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xufVxuXG4jbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2hlbGxvLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuI2JnLWxlZnQsXG4jYmctcmlnaHQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xufVxuXG4jYmctbGVmdC5zaHJpbmssXG4jYmctcmlnaHQuc2hyaW5rIHtcbiAgd2lkdGg6IDA7XG59XG5cbiNiZy1pbnRybyxcbiNzZWN0aW9uLWludHJvIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG59XG5cbiNiZy1pbnRyby5zaHJpbmssXG4jc2VjdGlvbi1pbnRyby5zaHJpbmsge1xuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XG59XG5cbm5hdixcbiNzY3JvbGwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG59XG5cbm5hdi5oaWRlLFxuI3Njcm9sbC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2Fib3V0LFxuI3Byb2plY3RzLFxuI2NvbnRhY3Qge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbn1cblxuI2Fib3V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbn1cblxuI3Byb2plY3RzLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbiNjb250YWN0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uYW5pbWF0ZS1oZWxsbyB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cyAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5hbmltYXRlLWFwcGVhciB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuYnV0dG9uOmhvdmVyIC5idG4tYmcteSB7XG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIGFuaW1hdGlvbjogYm91bmNlLXkgMXMgaW5maW5pdGU7XG59XG5cbmJ1dHRvbjpob3ZlciAuYnRuLWJnLXgsXG4jc2Nyb2xsIHtcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uOiBib3VuY2UteCAxcyBpbmZpbml0ZTtcbn1cblxuLyogVGFpbHdpbmQgQm91bmNlIEN1c3RvbSAqL1xuXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlLXgge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cbn1cblxuLyogTUVESUEgUVVFUlkgKi9cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5pbWctcHJvamVjdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yMGRlZyk7XG4gIH1cblxuICAuaW1nLXByb2plY3QtZXZlbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKTtcbiAgfVxufVxuXG4uaG92ZXJcXFxcOnNjYWxlLVxcXFxbMTEwXFxcXCVcXFxcXTpob3ZlciB7XG4gIC0tdHctc2NhbGUteDogMTEwJTtcbiAgLS10dy1zY2FsZS15OiAxMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxMTAlKSBzY2FsZVkoMTEwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOnRyYW5zbGF0ZS14LVxcXFxbMjVcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAyNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnNjYWxlLTEwMCB7XG4gICAgLS10dy1zY2FsZS14OiAxO1xuICAgIC0tdHctc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxKSBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubWRcXFxcOnB4LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAucG9ydHJhaXRcXFxcOmFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcWzEwMHN2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcW2NhbGNcXFxcKDEwMHN2aC01NnB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDU2cHgpO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp3LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6ZmxleC1jb2wtcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTE0IHtcbiAgICBnYXA6IDMuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Z2FwLTcge1xuICAgIGdhcDogMS43NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktMyB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LVxcXFxbMTV2d1xcXFxdIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmxhbmRzY2FwZVxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6aC1cXFxcWzEwMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteC1cXFxcWy0xNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAtMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB9XG5cbiAgLmxhbmRzY2FwZVxcXFw6dHJhbnNsYXRlLXgtXFxcXFsxNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS14OiAxNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgfVxuXG4gIC5sYW5kc2NhcGVcXFxcOnRyYW5zbGF0ZS15LVxcXFxbMTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteTogMTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDE1MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpmbGV4LXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDppdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpqdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpvdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5sYW5kc2NhcGVcXFxcOm1kXFxcXDp3LVxcXFxbY2FsY1xcXFwoMTAwdnctMlxcXFwqNTZweFxcXFwpXFxcXF0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyICogNTZweCk7XG4gICAgfVxuICB9XG59XG5cbi5kYXJrXFxcXDpiZy1ibGFjazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4uZGFya1xcXFw6Ymctd2hpdGU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmRhcmtcXFxcOnRleHQtd2hpdGU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCx5QkFBeUI7RUFDekIsK0RBQTREO0FBQzlEOztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO0VBQUEsK0ZBQWM7RUFBZCx3REFBYztFQUFkO0FB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InNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udC9Nb250c2VycmF0LUV4dHJhQm9sZC50dGYpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tWzUwbXNdO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0zeGwgbWQ6dGV4dC00eGw7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtMnhsO1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIEBhcHBseSBweS0yIHRleHQtanVzdGlmeSB0ZXh0LXByZXR0eTtcXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMiBwb3J0cmFpdDpiZy10cmFuc3BhcmVudCBoLWZ1bGwgbWF4LXctc2NyZWVuLWxnIGxhbmRzY2FwZTpweC0xMCBsYW5kc2NhcGU6bWQ6cHgtMTQgbGFuZHNjYXBlOnB5LTE0IGZsZXggZmxleC1jb2wgZ2FwLTcgb3ZlcmZsb3cteS1hdXRvO1xcbiAgfVxcblxcbiAgLyogU2Nyb2xsYmFyICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgQGFwcGx5IHctWzE2cHhdO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIEBhcHBseSBiZy10aGVtZSByb3VuZGVkLWZ1bGw7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHJnYigyNDEgMjQ1IDI0OSk7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgQGFwcGx5IGJnLXJlZC0zMDA7XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5iZy10aGVtZSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLTIge1xcbiAgICBAYXBwbHkgYmctc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUge1xcbiAgICBAYXBwbHkgdGV4dC1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUtMiB7XFxuICAgIEBhcHBseSB0ZXh0LXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC5ib3JkZXItdGhlbWUge1xcbiAgICBAYXBwbHkgYm9yZGVyLXJlZC00MDA7XFxuICB9XFxuXFxuICAuZGl2aWRlci10aGVtZSB7XFxuICAgIEBhcHBseSBiZy10aGVtZSBoLTEgdy1bOTAlXSBwb3J0cmFpdDp3LVs5NSVdIHJvdW5kZWQtZnVsbCBzZWxmLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctZnVsbCBsYW5kc2NhcGU6YWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XFxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIGxhbmRzY2FwZTpweS0xNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3JkZXItaW1nIHtcXG4gICAgQGFwcGx5IGgtZnVsbCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXRoZW1lIGFic29sdXRlIHRyYW5zbGF0ZS14LTMgLXRyYW5zbGF0ZS15LVtjYWxjKDEwMCUrMTJweCldIHotYXV0bztcXG4gIH1cXG5cXG4gIC5jb250ZW50LXdyYXBwZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSB3LVs5MCVdIHB5LTcgZmxleCBwb3J0cmFpdDpmbGV4LWNvbC1yZXZlcnNlIHBvcnRyYWl0OmdhcC01O1xcbiAgfVxcblxcbiAgLmluZGV4LXByb2plY3Qtd3JhcHBlciB7XFxuICAgIEBhcHBseSB0ZXh0LXRoZW1lIHRleHQtN3hsIGFic29sdXRlIHRvcC0wIGxlZnQtMCB0cmFuc2xhdGUteC1bLTI1JV0gdHJhbnNsYXRlLXktWy0yNSVdIHotYXV0bztcXG4gIH1cXG5cXG4gIC5pbmZvLXByb2plY3Qge1xcbiAgICBAYXBwbHkgdy1mdWxsIHAtMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IGdhcC01O1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXI7XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDUwMHB4O1xcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QsXFxuICAuaW1nLXByb2plY3QtZXZlbiB7XFxuICAgIEBhcHBseSByZWxhdGl2ZSB6LVsxXTtcXG4gICAgLyogTW9yZSBhdCBNRURJQSBRVUVSWSBzZWN0aW9uIGJlbG93Ki9cXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3IsXFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4ge1xcbiAgICBAYXBwbHkgYWJzb2x1dGUgdG9wLTAgei1hdXRvIHBvcnRyYWl0OmhpZGRlbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgODAlLCB3aGl0ZSk7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA4MCUsIHdoaXRlKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3Ige1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgMnB4KSkgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcXG4gIH1cXG5cXG4gIC5pbWctcHJvamVjdC1taXJyb3ItZXZlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgKyAycHgpKSByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDE4MGRlZyk7XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbSB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDgwJSsycHgpXSBwb3J0cmFpdDpoLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgdG9wLVs1JV0gcmlnaHQtWy01JV07XFxuICB9XFxuXFxuICAuaW1nLXByb2plY3QtbWlycm9yID4gLmltZy1wcm9qZWN0LW0sXFxuICAuaW1nLXByb2plY3QtbWlycm9yLWV2ZW4gPiAuaW1nLXByb2plY3QtbSB7XFxuICAgIEBhcHBseSBoaWRkZW47XFxuICB9XFxuXFxuICAudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0IHtcXG4gICAgQGFwcGx5IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXgtaGlkZGVuO1xcbiAgfVxcblxcbiAgLnRvb2xzLXdyYXBwZXItcHJvamVjdCB7XFxuICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLm1vbnRzZXJyYXQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbC1hYm91dCxcXG5bY2xhc3NePVxcXCJ0b29sLXByb2plY3RcXFwiXSxcXG4jZGFyay1tb2RlLWJhbGwge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XFxufVxcblxcbiNkYXJrLW1vZGUtYmFsbC5kYXJrIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNDAlKTtcXG59XFxuXFxuI21lbnUge1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgb3BhY2l0eSA1MDBtcyBlYXNlLFxcbiAgICB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcXG59XFxuXFxuI21lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG59XFxuXFxuI21lbnUub3BlbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jaGVsbG8td3JhcHBlciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuI2hlbGxvLXdyYXBwZXIuaGlkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcblxcbiNiZy1sZWZ0LFxcbiNiZy1yaWdodCB7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctbGVmdC5zaHJpbmssXFxuI2JnLXJpZ2h0LnNocmluayB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuI2JnLWludHJvLFxcbiNzZWN0aW9uLWludHJvIHtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcbn1cXG5cXG4jYmctaW50cm8uc2hyaW5rLFxcbiNzZWN0aW9uLWludHJvLnNocmluayB7XFxuICBoZWlnaHQ6IGNhbGMoKDEwMHN2aCAvIDIpIC0gNTZweCk7XFxufVxcblxcbm5hdixcXG4jc2Nyb2xsIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG59XFxuXFxubmF2LmhpZGUsXFxuI3Njcm9sbC5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbiNhYm91dCxcXG4jcHJvamVjdHMsXFxuI2NvbnRhY3Qge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbiNhYm91dC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbn1cXG5cXG4jcHJvamVjdHMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XFxufVxcblxcbiNjb250YWN0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcbn1cXG5cXG4vKiBBTklNQVRJT04gKi9cXG5cXG4uYW5pbWF0ZS1oZWxsbyB7XFxuICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzIDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1hcHBlYXIge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYXBwZWFyIDEuNXMgMSAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5idXR0b246aG92ZXIgLmJ0bi1iZy15IHtcXG4gIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICBhbmltYXRpb246IGJvdW5jZS15IDFzIGluZmluaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIgLmJ0bi1iZy14LFxcbiNzY3JvbGwge1xcbiAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIGFuaW1hdGlvbjogYm91bmNlLXggMXMgaW5maW5pdGU7XFxufVxcblxcbi8qIFRhaWx3aW5kIEJvdW5jZSBDdXN0b20gKi9cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZS15IHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLXgge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuLyogTUVESUEgUVVFUlkgKi9cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5pbWctcHJvamVjdCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjBkZWcpO1xcbiAgfVxcblxcbiAgLmltZy1wcm9qZWN0LWV2ZW4ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhY2tncm91bmQgPSAoKCkgPT4ge1xuICBjb25zdCBiZ0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWxlZnRcIik7XG4gIGNvbnN0IGJnUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLXJpZ2h0XCIpO1xuICBjb25zdCBiZ0ludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbnRyb1wiKTtcblxuICBmdW5jdGlvbiBzaHJpbmsoKSB7XG4gICAgZm9yIChjb25zdCBudW0gb2YgYXJndW1lbnRzKSB7XG4gICAgICBjb25zdCBiZyA9IF9nZXRCZyhudW0pO1xuICAgICAgYmcuY2xhc3NMaXN0LnRvZ2dsZShcInNocmlua1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0QmcoaW50KSB7XG4gICAgc3dpdGNoIChpbnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGJnTGVmdDtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGJnUmlnaHQ7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBiZ0ludHJvO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHNocmluayB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmFja2dyb3VuZCB9O1xuIiwiaW1wb3J0IHsgdG9vbHMgfSBmcm9tIFwiLi90b29sc1wiO1xuXG5jb25zdCBjYXJvdXNlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IDI7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEFib3V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlKGxpc3QsIGNsYXNzTmFtZSwgaGVpZ2h0LCB3cmFwcGVyKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICBpbWcuc3JjID0gbGlzdFtpXS5zcmM7XG4gICAgICBpbWcuYWx0ID0gbGlzdFtpXS5hbHQ7XG4gICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9IGAwICR7bWFyZ2lufXB4YDtcbiAgICAgIHdyYXBwZXIuYXBwZW5kKGltZyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKGhlaWdodCwgd3JhcHBlciwgd3JhcHBlck91dGVyLCBjbGFzc05hbWUsIGxlbmd0aCwgYXV0bykge1xuICAgIGNvbnN0IHggPSBoZWlnaHQgKyAyICogbWFyZ2luO1xuICAgIGxldCBhbW91bnQgPSBNYXRoLmZsb29yKHdyYXBwZXJPdXRlci5jbGllbnRXaWR0aCAvIHgpO1xuICAgIGlmIChsZW5ndGggPiBhbW91bnQgfHwgYXV0byA9PT0gMSlcbiAgICAgIF90b29sQXV0b1Njcm9sbChjbGFzc05hbWUsIGxlbmd0aCwgd3JhcHBlck91dGVyLCB3cmFwcGVyLCB4LCBhbW91bnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRBYm91dCgpIHtcbiAgICBjb25zdCBsaXN0ID0gdG9vbHMuZ2V0TGlzdCgpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwidG9vbC1hYm91dFwiO1xuICAgIGNvbnN0IGhlaWdodCA9IDUwO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xzLXdyYXBwZXItYWJvdXRcIik7XG4gICAgY29uc3Qgd3JhcHBlck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29scy13cmFwcGVyLW91dGVyLWFib3V0XCIpO1xuICAgIGNvbnN0IHRvb2xOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29sLW5hbWVcIik7XG5cbiAgICBnZW5lcmF0ZUltYWdlKGxpc3QsIGNsYXNzTmFtZSwgaGVpZ2h0LCB3cmFwcGVyKTtcbiAgICBjcmVhdGUoNTAsIHdyYXBwZXIsIHdyYXBwZXJPdXRlciwgY2xhc3NOYW1lLCBsaXN0Lmxlbmd0aCwgMSk7XG4gICAgX3Rvb2xEaXNwbGF5TmFtZSh0b29sTmFtZSwgbGlzdCwgd3JhcHBlck91dGVyLCBoZWlnaHQgKyBtYXJnaW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Rvb2xBdXRvU2Nyb2xsKFxuICAgIGNsYXNzTmFtZSxcbiAgICBsZW5ndGgsXG4gICAgd3JhcHBlck91dGVyLFxuICAgIHdyYXBwZXIsXG4gICAgeCxcbiAgICBhbW91bnQsXG4gICkge1xuICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGxldCB0b0JlRW5kID0gMDtcbiAgICBsZXQgdHggPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuXG4gICAgaWYgKGFtb3VudCA+PSBsZW5ndGggLSAxKSBhbW91bnQgPSBsZW5ndGggLSAyO1xuICAgIGlmIChhbW91bnQgJSAyID09PSAwKSB3cmFwcGVyT3V0ZXIuc3R5bGUud2lkdGggPSB4ICogKGFtb3VudCAtIDEpICsgXCJweFwiO1xuICAgIGVsc2Ugd3JhcHBlck91dGVyLnN0eWxlLndpZHRoID0geCAqIGFtb3VudCArIFwicHhcIjtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3h9cHgpYDtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IHRvQmVFbmQpIHtcbiAgICAgICAgICB0eFtpXSArPSB4ICogKGxlbmd0aCAtIDEpO1xuICAgICAgICAgIHRvb2xzW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgdG9vbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICB0b29sc1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgdHhbaV0gLT0geDtcbiAgICAgICAgdG9vbHNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0eFtpXX1weClgO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9CZUVuZCAhPT0gbGVuZ3RoIC0gMSkgdG9CZUVuZCArPSAxO1xuICAgICAgZWxzZSB0b0JlRW5kID0gMDtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b29sRGlzcGxheU5hbWUodG9vbE5hbWUsIGxpc3QsIHdyYXBwZXJPdXRlciwgeCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIGNvbnN0IGFtb3VudCA9IE1hdGguZmxvb3Iod3JhcHBlck91dGVyLmNsaWVudFdpZHRoIC8geCk7XG5cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgICBpZiAoYW1vdW50IDwgNikgbWlkIC09IDE7XG4gICAgdG9vbE5hbWUudGV4dENvbnRlbnQgPSBsaXN0W21pZF0uYWx0LnRvVXBwZXJDYXNlKCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAobWlkICE9PSBsZW5ndGggLSAxKSBtaWQgKz0gMTtcbiAgICAgIGVsc2UgbWlkID0gMDtcblxuICAgICAgdG9vbE5hbWUudGV4dENvbnRlbnQgPSBsaXN0W21pZF0uYWx0LnRvVXBwZXJDYXNlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZW5lcmF0ZUltYWdlLCBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNhcm91c2VsIH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzYywgaW1nLCByZXBvLCBkZW1vLCB0b29scykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgIHRoaXMuZGVtbyA9IGRlbW87XG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuICB9XG59XG4iLCJjb25zdCBkYXJrTW9kZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFyay1tb2RlLWJhbGxcIik7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZGV0ZWN0RGFya01vZGUoKTtcbiAgICBidG4ub25jbGljayA9IF90b2dnbGU7XG4gIH1cblxuICBmdW5jdGlvbiBfZGV0ZWN0RGFya01vZGUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIF90b2dnbGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgX3RvZ2dsZSgpO1xuICAgIH0gZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlKCkge1xuICAgIGJhbGwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblxuICAgIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBkYXJrTW9kZSB9O1xuIiwiaW1wb3J0IGltZ0RhcmtNb2RlMjR3IGZyb20gXCIuLi9pbWcvaWNvbnMvZGFyay1tb2RlLTI0dy5wbmdcIjtcbmltcG9ydCBpbWdMaWdodE1vZGUyNHcgZnJvbSBcIi4uL2ltZy9pY29ucy9saWdodC1tb2RlLTI0dy5wbmdcIjtcbmltcG9ydCBpbWdBcnJvdzI0dyBmcm9tIFwiLi4vaW1nL2ljb25zL2Fycm93LTI0dy5wbmdcIjtcbmltcG9ydCBpbWdBcnJvdzIyNHcgZnJvbSBcIi4uL2ltZy9pY29ucy9hcnJvdy0yLTI0dy5wbmdcIjtcbmltcG9ydCBpbWdQb2xsMjR3IGZyb20gXCIuLi9pbWcvaWNvbnMvcG9sbC0yNHcucG5nXCI7XG5pbXBvcnQgaW1nUHJvZmlsZTY0MHcgZnJvbSBcIi4uL2ltZy9wcm9maWxlLTItNjQwdy5qcGdcIjtcblxuY29uc3QgaW1hZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgbGlnaHRNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbGlnaHQtbW9kZVwiKTtcbiAgY29uc3QgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctYXJyb3dcIik7XG4gIGNvbnN0IGFycm93czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1hcnJvdy0yXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctbWVudVwiKTtcbiAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLXByb2ZpbGVcIik7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkYXJrTW9kZS5zcmMgPSBpbWdEYXJrTW9kZTI0dztcbiAgICBsaWdodE1vZGUuc3JjID0gaW1nTGlnaHRNb2RlMjR3O1xuICAgIGFycm93cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuc3JjID0gaW1nQXJyb3cyNHc7XG4gICAgfSk7XG4gICAgYXJyb3dzMi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuc3JjID0gaW1nQXJyb3cyMjR3O1xuICAgIH0pO1xuICAgIG1lbnUuc3JjID0gaW1nUG9sbDI0dztcbiAgICBwcm9maWxlLnNyYyA9IGltZ1Byb2ZpbGU2NDB3O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiIsImltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bkFib3V0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIik7XG4gIGNvbnN0IGJ0bkNvbnRhY3RMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdC1sXCIpO1xuXG4gIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51XCIpO1xuICBjb25zdCBidG5NZW51QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtYmFja1wiKTtcblxuICBjb25zdCBidG5BYm91dFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1wXCIpO1xuICBjb25zdCBidG5Qcm9qZWN0c1AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1wXCIpO1xuICBjb25zdCBidG5Db250YWN0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3QtcFwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICBjb25zdCBoZWxsb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlbGxvLXdyYXBwZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXZcIik7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG4gIGNvbnN0IGJ0bkJhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tYmFja1wiKTtcblxuICBsZXQgaXNPcGVuTWVudSA9IDA7XG4gIGxldCB0aHJlc2hvbGQgPSAwO1xuICBsZXQgaXNUYWJPcGVuID0gMDtcbiAgbGV0IGJhY2tUYXJnZXQgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRocmVzaG9sZCA9IHNjcm9sbC5nZXRTY3JvbGxUaHJlc2hvbGQoKTtcblxuICAgIGJ0bkFib3V0TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX29wZW5UYWIoYWJvdXQsIDIpO1xuICAgIH07XG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfb3BlblRhYihwcm9qZWN0cywgMSk7XG4gICAgfTtcbiAgICBidG5Db250YWN0TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX29wZW5UYWIoY29udGFjdCwgMik7XG4gICAgfTtcblxuICAgIGJ0bkJhY2tzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGJhY2tUYXJnZXRbMF0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgX3RvZ2dsZUJhY2tncm91bmQoYmFja1RhcmdldFsxXSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJhY2tUYXJnZXRbMF0ucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGJ0bk1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc09wZW5NZW51ID09PSAxKSB7XG4gICAgICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RvZ2dsZU1lbnVDb29sZG93bigpO1xuICAgICAgc2Nyb2xsLmRpc2FibGVTY3JvbGwoKTtcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEpO1xuICAgICAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICB9KTtcblxuICAgICAgaXNPcGVuTWVudSA9IDE7XG4gICAgfTtcblxuICAgIGJ0bk1lbnVCYWNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlTWVudUNvb2xkb3duKCk7XG4gICAgICBzY3JvbGwuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHRocmVzaG9sZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNocmluaygxKTtcbiAgICAgICAgaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVsbG9XcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zaHJpbmsoMSk7XG4gICAgICAgIGhlbGxvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgIH1cblxuICAgICAgaXNPcGVuTWVudSA9IDA7XG4gICAgfTtcblxuICAgIGJ0bkFib3V0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAyKTtcbiAgICAgICAgX3Njcm9sbFRvKGFib3V0KTtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0oc2NyZWVuLmhlaWdodCAvIDIpKTtcbiAgICAgIH0gZWxzZSBfc2Nyb2xsVG8oYWJvdXQpO1xuICAgIH07XG5cbiAgICBidG5Qcm9qZWN0c1Aub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9zY3JvbGxUbyhwcm9qZWN0cyk7XG4gICAgfTtcbiAgICBidG5Db250YWN0UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Njcm9sbFRvKGNvbnRhY3QpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXNldE9uU2NyZWVuQ2hhbmdlKCkge1xuICAgIGlmIChpc1RhYk9wZW4gPT09IDEpIHtcbiAgICAgIGJ0bkJhY2tzWzBdLmNsaWNrKCk7XG4gICAgICBpc1RhYk9wZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9vcGVuVGFiKHRhYiwgYmcpIHtcbiAgICBfdG9nZ2xlQmFja2dyb3VuZChiZyk7XG4gICAgdGFiLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaXNUYWJPcGVuID0gMTtcbiAgICBiYWNrVGFyZ2V0ID0gW3RhYiwgYmddO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZUJhY2tncm91bmQoYmcpIHtcbiAgICBoZWxsb1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgYmFja2dyb3VuZC5zaHJpbmsoYmcpO1xuICAgIG5hdi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlTWVudUNvb2xkb3duKCkge1xuICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJ0bk1lbnUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0bk1lbnVCYWNrLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2Nyb2xsVG8oY29udGVudCkge1xuICAgIGNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTU2IC0gMjgpO1xuICAgIGJ0bk1lbnVCYWNrLmNsaWNrKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCByZXNldE9uU2NyZWVuQ2hhbmdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzcy1Qcm9qZWN0XCI7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcblxuaW1wb3J0IGltZ09wZW4gZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTI0dy5wbmdcIjtcbmltcG9ydCBpbWdZcGV0RCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3lwZXQtZC00NTB3LnBuZ1wiO1xuaW1wb3J0IGltZ1dlYXRoZXJEIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvd2VhdGhlci1kLTQ1MHcucG5nXCI7XG5pbXBvcnQgaW1nV2VhdGhlck0gZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLW0tMjAwdy5qcGdcIjtcbmltcG9ydCBpbWdIb21lRCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL2hvbWVwYWdlLWQtNDUwdy5wbmdcIjtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtcHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnRpY2xlLXByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IF9nZXRQcm9qZWN0cygpO1xuICBjb25zdCBsZW5ndGggPSBwcm9qZWN0TGlzdC5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZ2VuZXJhdGVQcm9qZWN0cygpO1xuICAgIF9jYXJvdXNlbEluaXQoKTtcbiAgICBzY3JvbGwuZmxvYXRJbmRleFByb2plY3RzKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmRleC1wcm9qZWN0XCIpLFxuICAgICAgcHJvamVjdHMsXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZW5lcmF0ZVByb2plY3RzKCkge1xuICAgIGxldCBjb3VudCA9IDE7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGNvbnN0IGRpdldyYXBwZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJjb250ZW50LXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZGV4ID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaW5kZXgtcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICAgIFwidGV4dC10cmFuc3BhcmVudFwiLFxuICAgICAgICBcIm1vbnRzZXJyYXRcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBpbmRleCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAgXCJpbmRleC1wcm9qZWN0XCIsXG4gICAgICAgIFwidGV4dC10aGVtZVwiLFxuICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICAgIFwidHJhbnNsYXRlLXgtWy0xMDAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkluZm8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJpbmZvLXByb2plY3RcIixcbiAgICAgICAgXCJyZWxhdGl2ZVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoM1wiLCBcInotWzFdXCIsIFwibW9udHNlcnJhdFwiKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInNwYW5cIiwgXCJ0ZXh0LXRoZW1lXCIpO1xuICAgICAgY29uc3QgZGl2RGVzYyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInotWzJdXCIpO1xuICAgICAgY29uc3QgZGl2VG9vbHMgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJvdmVyZmxvdy14LWhpZGRlblwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUb29sT3V0ZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b29scy13cmFwcGVyLW91dGVyLXByb2plY3RcIixcbiAgICAgICk7XG4gICAgICBjb25zdCB3cmFwcGVyVG9vbCA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInRvb2xzLXdyYXBwZXItcHJvamVjdFwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpdkxpbmtzID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktZXZlbmx5XCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgYVJlcG8gPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICBcImdhcC0zXCIsXG4gICAgICAgIFwibW9udHNlcnJhdFwiLFxuICAgICAgICBcImhvdmVyOnNjYWxlLVsxMTAlXVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNwYW5SZXBvID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc3BhbkRlbW8gPSBzcGFuUmVwby5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgY29uc3QgZGl2SW1nID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJpbWctcHJvamVjdC13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgZGl2SW1nSW5uZXIgPSBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiKTtcbiAgICAgIGNvbnN0IGltZyA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaW1nMiA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiaW1nLXByb2plY3QtbVwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgICBpbmRleC50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgICAgZGl2SW5kZXgudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGRpdkluZGV4LmFwcGVuZChpbmRleCk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIi5cIjtcbiAgICAgIHRpdGxlLmFwcGVuZChzcGFuKTtcbiAgICAgIGRpdkRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG5cbiAgICAgIGNhcm91c2VsLmdlbmVyYXRlSW1hZ2UoXG4gICAgICAgIHByb2plY3QudG9vbHMsXG4gICAgICAgIGB0b29sLXByb2plY3QtJHtjb3VudH1gLFxuICAgICAgICA0MCxcbiAgICAgICAgd3JhcHBlclRvb2wsXG4gICAgICApO1xuXG4gICAgICB3cmFwcGVyVG9vbE91dGVyLmFwcGVuZCh3cmFwcGVyVG9vbCk7XG4gICAgICBkaXZUb29scy5hcHBlbmQod3JhcHBlclRvb2xPdXRlcik7XG5cbiAgICAgIGFSZXBvLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICBhUmVwby5yZWwgPSBcIm5vcmVmZXJyZXJcIjtcbiAgICAgIGNvbnN0IGFEZW1vID0gYVJlcG8uY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIGFSZXBvLmhyZWYgPSBwcm9qZWN0LnJlcG87XG4gICAgICBzcGFuUmVwby50ZXh0Q29udGVudCA9IFwiR0lUSFVCXCI7XG4gICAgICBhRGVtby5ocmVmID0gcHJvamVjdC5kZW1vO1xuICAgICAgc3BhbkRlbW8udGV4dENvbnRlbnQgPSBcIkRFTU9cIjtcblxuICAgICAgY29uc3QgaW1nTGluayA9IF9jcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaW1nXCIsIFwiYXNwZWN0LXNxdWFyZVwiKTtcbiAgICAgIGltZ0xpbmsuc3JjID0gaW1nT3BlbjtcbiAgICAgIGNvbnN0IGltZ0xpbmsyID0gaW1nTGluay5jbG9uZU5vZGUoZmFsc2UpO1xuXG4gICAgICBhUmVwby5hcHBlbmQoc3BhblJlcG8sIGltZ0xpbmspO1xuICAgICAgYURlbW8uYXBwZW5kKHNwYW5EZW1vLCBpbWdMaW5rMik7XG4gICAgICBkaXZMaW5rcy5hcHBlbmQoYVJlcG8sIGFEZW1vKTtcbiAgICAgIGRpdkluZm8uYXBwZW5kKGRpdkluZGV4LCB0aXRsZSwgZGl2RGVzYywgZGl2VG9vbHMsIGRpdkxpbmtzKTtcblxuICAgICAgaW1nLnNyYyA9IHByb2plY3QuaW1nWzBdO1xuICAgICAgZGl2SW1nSW5uZXIuYXBwZW5kKGltZyk7XG5cbiAgICAgIGlmIChwcm9qZWN0LmltZy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGltZzIuc3JjID0gcHJvamVjdC5pbWdbMV07XG4gICAgICAgIGRpdkltZ0lubmVyLmFwcGVuZChpbWcyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGl2SW1nSW5uZXJNaXJyb3IgPSBkaXZJbWdJbm5lci5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGlmIChjb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgZGl2SW1nSW5uZXIuY2xhc3NMaXN0LmFkZChcImltZy1wcm9qZWN0LWV2ZW5cIik7XG4gICAgICAgIGRpdkltZ0lubmVyTWlycm9yLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1taXJyb3ItZXZlblwiKTtcbiAgICAgICAgZGl2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGFuZHNjYXBlOmZsZXgtcm93LXJldmVyc2VcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXZJbWdJbm5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLXByb2plY3RcIik7XG4gICAgICAgIGRpdkltZ0lubmVyTWlycm9yLmNsYXNzTGlzdC5hZGQoXCJpbWctcHJvamVjdC1taXJyb3JcIik7XG4gICAgICB9XG5cbiAgICAgIGRpdkltZy5hcHBlbmQoZGl2SW1nSW5uZXIsIGRpdkltZ0lubmVyTWlycm9yKTtcbiAgICAgIGRpdldyYXBwZXIuYXBwZW5kKGRpdkluZm8sIGRpdkltZyk7XG4gICAgICBjb250ZW50UHJvamVjdHMuYXBwZW5kKGRpdldyYXBwZXIpO1xuXG4gICAgICBjb25zdCBkaXZpZGVyID0gX2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJkaXZpZGVyLXRoZW1lXCIpO1xuICAgICAgZGl2SW5mby5hcHBlbmQoZGl2aWRlcik7XG5cbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Nhcm91c2VsSW5pdCgpIHtcbiAgICBjb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHMtd3JhcHBlci1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHdyYXBwZXJzT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIudG9vbHMtd3JhcHBlci1vdXRlci1wcm9qZWN0XCIsXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0b29sLXByb2plY3QtJHtpICsgMX1gO1xuICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApLmxlbmd0aDtcbiAgICAgIGNhcm91c2VsLmNyZWF0ZSg0MCwgd3JhcHBlcnNbaV0sIHdyYXBwZXJzT3V0ZXJbaV0sIGNsYXNzTmFtZSwgbGVuZ3RoLCAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcsIC4uLmNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBQcm9qZWN0IExpc3RcblxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIllvdXIgUGVyc29uYWwgRXhwZW5zZSBUcmFja2VyXCIsXG4gICAgICAgIFwiQSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgeW91IHRvIHRyYWNrIHlvdXIgZXhwZW5zZXMuXCIsXG4gICAgICAgIFtpbWdZcGV0RF0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9jczUweC0yMDIzLXByb2plY3RcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWw4M2t5czl5SkpzXCIsXG4gICAgICAgIHRvb2xzLmdldChcbiAgICAgICAgICBcIkhUTUxcIixcbiAgICAgICAgICBcIkNTU1wiLFxuICAgICAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIFwiUHl0aG9uXCIsXG4gICAgICAgICAgXCJTUUxpdGVcIixcbiAgICAgICAgICBcIkZsYXNrXCIsXG4gICAgICAgICAgXCJCb290c3RyYXBcIixcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJXZWF0aGVyIEFwcFwiLFxuICAgICAgICBcIkEgd2VhdGhlciBhcHBsaWNhdGlvbiB1c2luZyBXZWF0aGVyIEFQSS5cIixcbiAgICAgICAgW2ltZ1dlYXRoZXJELCBpbWdXZWF0aGVyTV0sXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3dvb256Zi9vZGluLXdlYXRoZXItYXBwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93b29uemYuZ2l0aHViLmlvL29kaW4td2VhdGhlci1hcHAvXCIsXG4gICAgICAgIHRvb2xzLmdldChcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCIsIFwiV2VicGFja1wiKSxcbiAgICAgICksXG4gICAgICBuZXcgUHJvamVjdChcbiAgICAgICAgXCJIb21lcGFnZVwiLFxuICAgICAgICBcIk15IGZpcnN0IHBvcnRmb2xpbyB3ZWJzaXRlLCBJIGFtIGZlYXR1cmluZyBpdCBmb3IgdGhlIGFtb3VudCBvZiBlZmZvcnQgSSd2ZSBwdXQgaW50byBpdC5cIixcbiAgICAgICAgW2ltZ0hvbWVEXSxcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vd29vbnpmL29kaW4taG9tZXBhZ2VcIixcbiAgICAgICAgXCJodHRwczovL3dvb256Zi5naXRodWIuaW8vb2Rpbi1ob21lcGFnZS9cIixcbiAgICAgICAgdG9vbHMuZ2V0KFwiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFTY3JpcHRcIiwgXCJXZWJwYWNrXCIsIFwiVGFpbHdpbmQgQ1NTXCIpLFxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcblxuY29uc3Qgc2NyZWVuT3JpZW50YXRpb24gPSAoKCkgPT4ge1xuICBsZXQgZWxlbWVudFByb2plY3RzID0gbnVsbDtcbiAgbGV0IHNlY3Rpb25Qcm9qZWN0cyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzY3JlZW4ub3JpZW50YXRpb24ub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBtZW51LnJlc2V0T25TY3JlZW5DaGFuZ2UoKTtcbiAgICAgIHNjcm9sbC5yZWZsb2F0SW5kZXhQcm9qZWN0cyhlbGVtZW50UHJvamVjdHMsIHNlY3Rpb25Qcm9qZWN0cyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIGVsZW1lbnRQcm9qZWN0cyA9IGVsZW1lbnQ7XG4gICAgc2VjdGlvblByb2plY3RzID0gc2VjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHNldEluZGV4UHJvamVjdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH07XG4iLCJpbXBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgc2NyZWVuT3JpZW50YXRpb24gfSBmcm9tIFwiLi9zY3JlZW4tb3JpZW50YXRpb25cIjtcblxuY29uc3Qgc2Nyb2xsID0gKCgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWludHJvXCIpO1xuICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbFwiKTtcblxuICBjb25zdCB0aHJlc2hvbGQgPSAxO1xuICBsZXQgc2hyaW5rID0gMDtcblxuICBsZXQgc2Nyb2xsQmFySGVpZ2h0UHJvamVjdHMgPSAwO1xuICBsZXQgcGVyY2VudFByb2plY3RzID0gMDtcbiAgY29uc3QgZGV2aWF0aW9uUHJvamVjdHMgPSA2MDtcbiAgY29uc3QgeFByb2plY3RzID0gLTEwMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9zaHJpbmtPblNjcm9sbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIHNjcmVlbk9yaWVudGF0aW9uLnNldEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbik7XG4gICAgcmVmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbik7XG4gICAgc2VjdGlvbi5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHBlcmNlbnRQcm9qZWN0cyA9IChzZWN0aW9uLnNjcm9sbFRvcCAvIHNjcm9sbEJhckhlaWdodFByb2plY3RzKSAqIDEwMDtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnQubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoIC0gMSlcbiAgICAgICAgICBlbGVtZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgICBgdHJhbnNsYXRlWCgke3hQcm9qZWN0c30lKSB0cmFuc2xhdGVZKCR7ZGV2aWF0aW9uUHJvamVjdHMgKiBNYXRoLnNxcnQoaSkgLSBwZXJjZW50UHJvamVjdHMgKiAwLjd9JSlgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbWVudFtpXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICAgYHRyYW5zbGF0ZVgoJHt4UHJvamVjdHN9JSkgdHJhbnNsYXRlWSgke2RldmlhdGlvblByb2plY3RzICogTWF0aC5zcXJ0KGkpIC0gcGVyY2VudFByb2plY3RzfSUpYDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmbG9hdEluZGV4UHJvamVjdHMoZWxlbWVudCwgc2VjdGlvbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2Nyb2xsQmFySGVpZ2h0UHJvamVjdHMgPVxuICAgICAgICBzZWN0aW9uLnNjcm9sbEhlaWdodCAtIHNlY3Rpb24uY2xpZW50SGVpZ2h0IC0gNTY7XG4gICAgICBjb25zdCBsZW5ndGggPSBlbGVtZW50Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgIGVsZW1lbnRbaV0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgICAgIGB0cmFuc2xhdGVYKCR7eFByb2plY3RzfSUpIHRyYW5zbGF0ZVkoJHtkZXZpYXRpb25Qcm9qZWN0cyAqIE1hdGguc3FydChpKX0lKWA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgICBgdHJhbnNsYXRlWCgke3hQcm9qZWN0c30lKSB0cmFuc2xhdGVZKDAlKWA7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaHJpbmtPblNjcm9sbCgpIHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAwKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCB0aHJlc2hvbGQgJiYgc2hyaW5rID09PSAxKSB7XG4gICAgICAgIGJhY2tncm91bmQuc2hyaW5rKDEsIDMpO1xuICAgICAgICBfc2hyaW5rSW50cm8oKTtcbiAgICAgICAgc2hyaW5rID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nocmlua0ludHJvKCkge1xuICAgIHNlY3Rpb25JbnRyby5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpO1xuICAgIHNjcm9sbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ3NzAwMjUvaG93LXRvLWRpc2FibGUtc2Nyb2xsaW5nLXRlbXBvcmFyaWx5XG4gIC8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gIC8vIHNwYWNlYmFyOiAzMiwgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LCBlbmQ6IDM1LCBob21lOiAzNlxuICBjb25zdCBrZXlzID0geyAzNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMSB9O1xuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XG4gIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGVzdFwiLFxuICAgICAgbnVsbCxcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgbGV0IHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG4gIGxldCB3aGVlbEV2ZW50ID1cbiAgICBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogXCJtb3VzZXdoZWVsXCI7XG5cbiAgLy8gY2FsbCB0aGlzIHRvIERpc2FibGVcbiAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7IC8vIG9sZGVyIEZGXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9kZXJuIGRlc2t0b3BcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XG4gIH1cblxuICAvLyBjYWxsIHRoaXMgdG8gRW5hYmxlXG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBnZXRTY3JvbGxUaHJlc2hvbGQsXG4gICAgZmxvYXRJbmRleFByb2plY3RzLFxuICAgIHJlZmxvYXRJbmRleFByb2plY3RzLFxuICAgIGRpc2FibGVTY3JvbGwsXG4gICAgZW5hYmxlU2Nyb2xsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJjb25zdCB0b29scyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9odG1sNS9odG1sNS1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJIVE1MXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2NzczMvY3NzMy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDU1NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkphdmFTY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvd2VicGFjay93ZWJwYWNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIldlYnBhY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvamVzdC9qZXN0LXBsYWluLnN2Z1wiLFxuICAgICAgYWx0OiBcIkplc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3Mtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2MvYy1vcmlnaW5hbC5zdmdcIixcbiAgICAgIGFsdDogXCJDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiUHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3NxbGl0ZS9zcWxpdGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiU1FMaXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2ZsYXNrL2ZsYXNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgICAgYWx0OiBcIkZsYXNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2Jvb3RzdHJhcC9ib290c3RyYXAtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiQm9vdHN0cmFwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3ZzY29kZS92c2NvZGUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdC9naXQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCIsXG4gICAgICBhbHQ6IFwiR2l0SHViXCIsXG4gICAgfSxcbiAgXTtcblxuICBmdW5jdGlvbiBnZXRMaXN0KCkge1xuICAgIHJldHVybiBnZXQoXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICAgIFwiR2l0XCIsXG4gICAgICBcIkdpdEh1YlwiLFxuICAgICAgXCJIVE1MXCIsXG4gICAgICBcIkNTU1wiLFxuICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICBcIldlYnBhY2tcIixcbiAgICAgIFwiSmVzdFwiLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IGdldExpc3QgPSBbXTtcblxuICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgYXJndW1lbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvb2wgb2YgbGlzdCkge1xuICAgICAgICBpZiAoYXJndW1lbnQgPT09IHRvb2wuYWx0KSBnZXRMaXN0LnB1c2godG9vbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldExpc3Q7XG4gIH1cblxuICByZXR1cm4geyBnZXRMaXN0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvb2xzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL2pzL3Njcm9sbFwiO1xuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tIFwiLi9qcy9pbWFnZVwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9qcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9qcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL2pzL21lbnVcIjtcbmltcG9ydCB7IHNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSBcIi4vanMvc2NyZWVuLW9yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBkYXJrTW9kZSB9IGZyb20gXCIuL2pzL2RhcmstbW9kZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHNjcm9sbC5pbml0KCk7XG4gIGltYWdlLmluaXQoKTtcbiAgY2Fyb3VzZWwuaW5pdCgpO1xuICBwcm9qZWN0cy5pbml0KCk7XG4gIG1lbnUuaW5pdCgpO1xuICBzY3JlZW5PcmllbnRhdGlvbi5pbml0KCk7XG4gIC8vIGRhcmtNb2RlLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9