<template>
	<div class="container">
		<Header />
		<div class="desktop" @dragover.prevent>
			<DesktopIcon title="Work" index="1" />
			<DesktopIcon title="Experience" index="2" />
			<!-- 
			<DesktopIcon title="Contact" />

			<DesktopIcon title="Games" />
			<DesktopIcon title="CV" /> -->
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style>
.container {
	margin: 0 auto;
	height: 100vh;
}

.desktop {
	position: relative;
	padding: var(--spacing-small);
	height: calc(100% - 26px);
}
</style>
