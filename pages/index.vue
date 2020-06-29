<template>
	<div class="container">
		<Header />
		<div class="desktop">
			<!-- <DesktopIcon title="Work" /> -->
			<DesktopIcon title="Experience" />
			<!-- 
			<DesktopIcon title="Contact" />

			<DesktopIcon title="Games" />
			<DesktopIcon title="CV" /> -->
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

import DesktopIcon from "../components/DesktopIcon.vue"

export default Vue.extend({})
</script>

<style>
.container {
	margin: 0 auto;
	height: 100vh;
}

.desktop {
	background: green;
	padding: var(--spacing-small);
	height: calc(100% - 26px);
}
</style>
