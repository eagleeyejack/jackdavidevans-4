<template>
	<div class="container" draggable="false">
		<Header />
		<div class="desktop" draggable="false" @dragover.stop @drop.prevent="drop">
			<DesktopIcon title="Work" :index="1" />
			<DesktopIcon title="Experience" :index="2" />
			<DesktopIcon title="Contact" :index="3" />
			<DesktopIcon title="CV" :index="4" />
			<DesktopIcon title="Games" :index="5" />

			<Window title="Work" :index="1">
				<div>
					<h1>Llanerch</h1>
				</div>
			</Window>
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
	background: lightgreen;
}

.desktop {
	position: relative;
	padding: var(--spacing-small);
	height: calc(100% - 26px);
	background: lightblue;
}
</style>
