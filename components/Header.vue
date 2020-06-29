<template>
	<div class="header">
		<ul class="dropdown">
			<li>Icon</li>
			<li>File</li>
			<li>About</li>
			<li>Themes</li>
		</ul>
	</div>
</template>

<style lang="scss">
.header {
	display: flex;
	background: var(--color-grey);
	height: 26px;
	border-bottom: 2px solid var(--color-black);
	padding: 0 1rem;
	font-size: 16px;
}

.dropdown {
	background: blue;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(4, 2fr);
}
</style>
