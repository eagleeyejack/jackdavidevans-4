<template>
	<div
		v-show="localVisible === 1"
		:id="title.toLowerCase()"
		:index="index"
		:style="{ top: y + 'px', left: x + 'px' }"
		class="window"
		draggable="true"
	>
		<div class="window__inner">
			<button class="window__close" @click="close(title.toLowerCase())" />
			<div class="window__title">{{ title }}</div>
			<div class="window__contents">
				<slot></slot>
			</div>
			<div class="resizer top-left" />
			<div class="resizer top-right" />
			<div class="resizer bottom-left" />
			<div class="resizer bottom-right" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import dragItems from "../mixins/dragItems"
import resizeDiv from "../mixins/resizeDiv"

export default Vue.extend({
	mixins: [dragItems, resizeDiv],
	props: {
		title: {
			type: String,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		visible: {
			type: Number,
			required: true,
			default: 0
		},
		close: {
			type: Function,
			required: true
		}
	},
	data() {
		return {
			localVisible: 0,
			y: this.index * 10 + 170 * this.index,
			x: this.index * 10 + 210 * this.index
		}
	},
	watch: {
		visible: {
			deep: true,
			handler(visible: number) {
				this.localVisible = visible
			}
		}
	},
	mounted() {
		dragItems.methods.dragElement(this.$el)
		resizeDiv.methods.resizeDiv(`#${this.title.toLowerCase()}`)
		this.localVisible = this.visible
	}
})
</script>

<style scoped lang="scss">
.resizer {
	width: 10px;
	height: 10px;
	border-radius: 50%; /*magic to turn square into circle*/
	background: white;
	border: 3px solid #4286f4;
	position: absolute;
}
.resizer.top-left {
	left: -5px;
	top: -5px;
	cursor: nwse-resize; /*resizer cursor*/
}
.resizer.top-right {
	right: -5px;
	top: -5px;
	cursor: nesw-resize;
}
.resizer.bottom-left {
	left: -5px;
	bottom: -5px;
	cursor: nesw-resize;
}
.resizer.bottom-right {
	right: -5px;
	bottom: -5px;
	cursor: nwse-resize;
}
.window {
	position: absolute;
	top: 0;
	text-align: center;
	background: var(--color-grey);
	min-width: 600px;
	padding: var(--space-tiny);
	user-select: none;
	top: 300px;
	left: 300px;
	z-index: 1;
	border: 2px solid var(--color-black);
	min-height: 500px;

	&__inner {
		height: 100%;
	}

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
		width: 100%;
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
		border: 2px solid var(--color-black);
		height: calc(100% - 26px);
		width: 100%;
		padding: var(--space-tiny);
		overflow: scroll;
	}
}
</style>
