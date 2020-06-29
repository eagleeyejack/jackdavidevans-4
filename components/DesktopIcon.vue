<template>
	<div
		:id="title"
		draggable="true"
		class="desktop-icon"
		@dragstart="dragStart(title, $event)"
		@dragover.prevent
		@dragenter="dragEnter"
		@dragleave="dragLeave"
		@dragend="dragEnd"
		@drop="dragFinish($event)"
	>
		<div class="desktop-icon__icon"></div>
		<div class="desktop-icon__title">{{ title }}</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		title: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			x: 0,
			y: 0,
			id: null,
			dragging: 0
		}
	},

	methods: {
		dragStart(which: any, e: any) {
			console.log(e)
			e.target.style.translateX = e.pageX
			e.target.style.translateY = e.pageY
			this.x = e.pageX
			this.y = e.pageY
			this.dragging = which
		},
		dragEnter(e: any) {
			/* 
      if (ev.clientY > ev.target.height / 2) {
        ev.target.style.marginBottom = '10px'
      } else {
        ev.target.style.marginTop = '10px'
      }
      */
		},
		dragLeave(e: any) {
			/* 
      ev.target.style.marginTop = '2px'
      ev.target.style.marginBottom = '2px'
      */
		},
		dragEnd(e: any) {
			this.dragging = -1
			e.target.style.translateX = e.screenX
			e.target.style.translateY = e.screenY
		},
		dragFinish(e: any) {
			e.target.style.translateX = e.clientX
			e.target.style.translateY = e.clientY
		}
	}
})
</script>

<style scoped lang="scss">
.desktop-icon {
	background: red;
	position: absolute;
	padding: var(--space-tiny);
	cursor: pointer;

	&__icon {
		background: var(--color-grey);
		height: 75px;
		width: 75px;
		margin: 0 auto;
	}

	&__title {
		background: var(--color-white);
		color: var(--color-black);
		font-size: 16px;
		text-align: center;
		font-family: chicago;
		margin: 10px 0 0 0;
		width: 100%;
	}
}
</style>
