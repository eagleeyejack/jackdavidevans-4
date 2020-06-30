<template>
	<div
		:id="title"
		:index="index"
		class="desktop-icon"
		draggable="true"
		:style="{ left: x + 'px', top: y + 'px' }"
		@dragover.prevent
		@dragstart="isDragging"
		@dragenter="dragEnter"
		@dragleave="dragLeave(e, dragging)"
		@dragend="dragEnd"
	>
		<div class="desktop-icon__icon"></div>
		<div class="desktop-icon__title">{{ title }}</div>
		{{ index }}
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		title: {
			type: String,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},
	data(index: number) {
		return {
			x: 10,
			y: 10,
			id: null,
			dragging: false
		}
	},
	methods: {
		dragEnter(e: any) {
			/*
      if (ev.clientY > ev.target.height / 2) {
        ev.target.style.marginBottom = '10px'
      } else {
        ev.target.style.marginTop = '10px'
      }
      */
		},
		isDragging(e: any) {
			this.dragging = true
		},
		dragLeave(e: any, dragging: boolean) {
			if (dragging === false && (e.x < 0 || e.y < 0)) {
				this.x = 10
				this.y = 10
			}
		},
		dragEnd(e: any) {
			if (e.x < 0 || e.y < 0) {
				this.x = 10
				this.y = 10
			} else {
				this.x = e.x
				this.y = e.y
			}
		}
	}
})
</script>

<style scoped lang="scss">
.desktop-icon {
	background: red;
	position: absolute;
	cursor: pointer;
	top: 0;
	margin: var(--spacing-tiny);
	height: 110px;

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
		padding: 4px;
	}
}
</style>
