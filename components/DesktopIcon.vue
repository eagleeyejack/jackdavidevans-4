<template>
	<div
		:id="title"
		:index="index"
		class="desktop-icon"
		draggable="true"
		:style="{ left: x + 'px', top: y + 'px' }"
		@dragover.prevent
		@dragstart="isDragging"
		@dragleave="dragLeave(e, dragging)"
		@dragend="dragEnd"
	>
		<div class="desktop-icon__icon">{{ index }}</div>
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
		},
		index: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			x: 10,
			y: this.index * 10 + 110 * (this.index - 1),
			id: null,
			dragging: false
		}
	},
	methods: {
		isDragging() {
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
	width: 110px;
	text-align: center;

	&__icon {
		background: var(--color-grey);
		height: 75px;
		width: 75px;
		margin: 0 auto;
		font-size: 20px;
	}

	&__title {
		display: inline-block;
		background: var(--color-white);
		color: var(--color-black);
		font-size: 16px;
		text-align: center;
		font-family: chicago;
		margin: 10px auto 0;
		padding: 4px;
		max-width: 106px;
	}
}
</style>
