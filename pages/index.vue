<template>
	<div class="container" draggable="false">
		<Header />
		<div class="desktop" draggable="false" @dragover.stop @drop.prevent="drop">
			<DesktopIcon title="Experience" image="/icons/toolbox.svg" :index="1" @click.native="open('experience')" />
			<DesktopIcon
				title="Contact"
				link="mailto:jackevans38@gmail.com?subject=Let's talk&amp;body=Hello Jack, ..."
				image="/icons/mail.svg"
				:index="2"
			/>

			<!-- <DesktopIcon title="Contact" :index="2" @click.native="open('contact')" /> -->
			<!-- <Window title="Contact" :index="2" :visible="windows.contact" :close="close">
				<Contact />
			</Window> -->
			<Window title="Experience" :index="1" :visible="windows.experience" :close="close">
				<Experience v-for="experience in experiences" :key="experience.company" :experience="experience" />
			</Window>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { experiences } from "static/experience"

import Experience from "../components/Experience.vue"
// import Contact from "../components/Contact.vue"

export default Vue.extend({
	components: {
		Experience
		// Contact
	},
	data() {
		return {
			windows: {
				blogs: 0,
				experience: 0,
				contact: 0,
				cv: 0,
				games: 0
			},
			experiences
		}
	},
	methods: {
		open(name: string) {
			Vue.set(this.windows, name, 1)
		},
		close(name: string) {
			Vue.set(this.windows, name, 0)
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
