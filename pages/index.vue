<template>
	<div class="container">
		<Header />
		<div class="desktop" @dragover.prevent>
			<DesktopIcon title="Work" :index="1" />
			<DesktopIcon title="Experience" :index="2" />

			<DesktopIcon title="Contact" :index="3" />

			<DesktopIcon title="Games" :index="4" />
			<DesktopIcon title="CV" :index="5" />
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
