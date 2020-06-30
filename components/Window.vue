<template>
	<div
		:id="title"
		:index="index"
		class="window"
		draggable="true"
		@dragover.stop
		@dragstart.stop="elementDrag(this.$el)"
		@drag.stop="dragMouseDown"
		@dragend.stop="closeDragElement"
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
			pos1: 0,
			pos2: 0,
			pos3: 0,
			pos4: 0,
			id: null,
			dragging: false
		}
	},
	mounted() {
		console.log(this.$el)
		this.dragInit(this.$el)
	},
	methods: {
		dragInit(elemt: any) {
			elemt.onmousedown = this.dragMouseDown
			elemt.style.background = "red"
		},
		closeDragElement(e: any) {
			/* stop moving when mouse button is released: */
			document.onmouseup = null
			document.onmousemove = null
			e.target.style.background = "orange"
		},
		elementDrag(e: any, elmnt: any) {
			e.preventDefault()
			e.stopPropagation()

			console.log(e.target)

			// calculate the new cursor position:
			this.pos1 = this.pos3 - e.clientX
			this.pos2 = this.pos4 - e.clientY
			this.pos3 = e.clientX
			this.pos4 = e.clientY
			// set the element's new position:

			console.log(elmnt)
			elmnt.style.top = elmnt.offsetTop - this.pos2 + "px"
			elmnt.style.left = elmnt.offsetLeft - this.pos1 + "px"
			elmnt.style.background = "purple"
		},
		dragMouseDown(e: any) {
			e.preventDefault()
			e.stopPropagation()

			console.log("dragmousemouse")

			// get the mouse cursor position at startup:
			this.pos3 = e.clientX
			this.pos4 = e.clientY

			document.onmouseup = this.closeDragElement
			// call a function whenever the cursor moves:
			document.onmousemove = this.elementDrag

			e.target.style.background = "yellow"
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
	user-select: none;

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
