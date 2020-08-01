<template>
	<div>
		<Nuxt />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
	beforeMount() {
		console.log(process.browser, "browser")
		console.log(process.client, "client")

		console.log(window, "window")
		// eslint-disable-next-line nuxt/no-globals-in-created
		const theme = window.localStorage.getItem("theme")
		console.log(theme, "theme")
		if (theme) {
			console.log("inside theme")
			// eslint-disable-next-line nuxt/no-globals-in-created

			document.body.style.backgroundColor = JSON.parse(theme)

			setTimeout(function () {
				// eslint-disable-next-line nuxt/no-globals-in-created
				document.body.style.opacity = "1"
			}, 200)
		} else {
			// eslint-disable-next-line nuxt/no-globals-in-created
			document.body.style.backgroundColor = "#859ee2"

			localStorage.setItem("theme", "#859ee2")

			setTimeout(function () {
				// eslint-disable-next-line nuxt/no-globals-in-created
				document.body.style.opacity = "1"
			}, 200)
		}
	}
})
</script>

<style lang="scss">
@font-face {
	font-family: "HKGrotesk-Light";
	font-weight: 200;
	src: url("/fonts/HKGrotesk-Light.woff") format("woff");
}

@font-face {
	font-family: "HKGrotesk-Regular";
	font-weight: 400;
	font-style: normal;
	src: url("/fonts/HKGrotesk-Regular.woff") format("woff");
}

@font-face {
	font-family: "HKGrotesk-Medium";
	font-weight: 500;
	src: url("/fonts/HKGrotesk-Medium.woff") format("woff");
}

@font-face {
	font-family: "HKGrotesk-Bold";
	font-weight: 700;
	src: url("/fonts/HKGrotesk-Bold.woff") format("woff");
}

html {
	max-height: 100vh;
	font-family: "HKGrotesk-Bold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	/* background-color: var(--color-blue); */
}

#__nuxt {
	overscroll-behavior: none;
	overflow: hidden;
}

body {
	transition: 0.3s ease all;
	opacity: 0;
	font-family: var(--font-grotesk-reg);
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

:root {
	--color-white: #fff;
	--color-black: #000;
	--color-blue: #859ee2;
	--color-blue-dark: #333399;
	--color-grey: #dddddd;
	--color-grey-dark: #a8a8a8;
	--color-grey-darker: #c4c4c4;
	--color-red: #f02d50;

	--font-grotesk-reg: "HKGrotesk-Regular";
	--font-grotesk-bold: "HKGrotesk-Bold";

	--space-tiny: 10px;
	--space-small: 16px;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
	font-size: 10px;
}
</style>
