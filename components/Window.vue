<template>
	<div
		:id="title"
		:index="index"
		class="window"
		draggable="true"
		:style="{ left: x + 'px', top: y + 'px' }"
		@dragover.prevent
		@dragstart="isDragging"
		@dragleave="dragLeave(e, dragging)"
		@dragend="dragEnd"
	>
		<div>
			<button class="window__close" />
			<div class="window__title">{{ title }}</div>
			<div class="window__contents">
				<slot></slot>
			</div>
		</div>
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
			x: 500,
			y: this.index * 100 + 110 * (this.index - 1),
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
.window {
	position: absolute;
	top: 0;
	text-align: center;
	background: var(--color-grey);
	min-width: 600px;
	padding: var(--space-tiny);

	&__title {
		display: inline-block;
		color: var(--color-black);
		font-size: 16px;
		text-align: center;
		font-family: chicago;
		position: relative;
		width: 100%;
		cursor: grab;
		padding-bottom: var(--space-tiny);
	}

	&__close {
		position: absolute;
		left: var(--space-tiny);
		border: 0;
		background: var(--color-red);
		cursor: pointer;
		z-index: 2;
		width: 15px;
		height: 15px;
	}

	&__contents {
		background: var(--color-white);
		min-height: 300px;
		border: 2px solid var(--color-black);
	}
}
</style>
