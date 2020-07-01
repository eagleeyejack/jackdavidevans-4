<template>
	<div>
		<Nuxt />
	</div>
</template>

<style lang="scss">
html {
	font-family: chicago, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
		Arial, sans-serif;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background-color: var(--color-blue);
}

body {
	font-family: chicago;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.button {
	&--green {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #3b8070;
		color: #3b8070;
		text-decoration: none;
		padding: 10px 30px;

		&:hover {
			color: #fff;
			background-color: #3b8070;
		}
	}

	&--grey {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #35495e;
		color: #35495e;
		text-decoration: none;
		padding: 10px 30px;
		margin-left: 15px;

		&:hover {
			color: #fff;
			background-color: #35495e;
		}
	}
}

:root {
	--color-white: #fff;
	--color-black: #000;
	--color-blue: #859ee2;
	--color-blue-dark: #333399;
	--color-grey: #dddddd;
	--color-grey-dark: #a8a8a8;
	--color-grey-darker: #c4c4c4;
	--color-red: #ff123e;

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
