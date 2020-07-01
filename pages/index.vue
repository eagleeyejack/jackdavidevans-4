<template>
	<div class="container" draggable="false">
		<Header />
		<div class="desktop" draggable="false" @dragover.stop @drop.prevent="drop">
			<DesktopIcon title="Work" :index="1" @click.native="open('work')" />
			<DesktopIcon title="Experience" :index="2" @click.native="open('experience')" />
			<DesktopIcon title="Contact" :index="3" @click.native="open('contact')" />
			<DesktopIcon title="CV" :index="4" @click.native="open('cv')" />

			<Window title="Work" :index="1" :visible="windows.work">
				<div>
					<h1>Llanerch</h1>
				</div>
			</Window>
			<Window title="Experience" :index="2" :visible="windows.experience">
				<div>
					<h1>Exsdd</h1>
				</div>
			</Window>
			<Window title="CV" :index="4" :visible="windows.cv">
				<div>
					<h1>Exsdd</h1>
				</div>
			</Window>
			<Window title="Contact" :index="3" :visible="windows.contact">
				<div>
					<h1>Exsdd</h1>
				</div>
			</Window>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	data() {
		return {
			windows: {
				work: 1,
				experience: 0,
				contact: 0,
				cv: 0,
				games: 0
			}
		}
	},
	methods: {
		open(name: string) {
			Vue.set(this.windows, name, 1)
		}
	}
})
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
