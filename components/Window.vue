<template>
	<div
		v-show="localVisible === 1"
		:id="title.toLowerCase()"
		:index="index"
		:style="{ top: y + 'px', left: x + 'px' }"
		:class="getClassWindow()"
		draggable="true"
	>
		<div class="window__inner">
			<button class="window__close" @click="close(title.toLowerCase())" />
			<div class="window__title">{{ title }}</div>
			<div :class="getClassContents()">
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
			y: 10,
			x: 10,
			window: {
				width: 0,
				height: 0
			}
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
	beforeMount() {
		window.addEventListener("resize", this.handleResize)
		this.handleResize()
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleResize)
	},
	mounted() {
		dragItems.methods.dragElement(this.$el)
		resizeDiv.methods.resizeDiv(`#${this.title.toLowerCase()}`)
		this.localVisible = this.visible
		this.initialPosition()
	},
	methods: {
		getClassContents() {
			return {
				window__contents: this.title !== "System"
			}
		},
		getClassWindow() {
			return {
				"window window--tabletUp": this.window.width > 768,
				window: this.window.width < 768
			}
		},
		initialPosition() {
			if (this.window.width < 768) {
				this.y = this.index * 10 + 20 * this.index
				this.x = this.index * 10 * this.index
			} else {
				this.y = this.index * 10 + 170 * this.index
				this.x = this.index * 10 + 110 * this.index
			}
		},
		handleResize() {
			this.window.width = window.innerWidth
			this.window.height = window.innerHeight
		}
	}
})
</script>

<style scoped lang="scss">
.resizer {
	width: 10px;
	height: 10px;
	opacity: 0;
	position: absolute;
}
.resizer.top-left {
	left: -5px;
	top: -5px;
	cursor: nwse-resize;
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
	padding: var(--space-tiny);
	user-select: none;
	top: 300px;
	left: 300px;
	z-index: 1;
	border: 2px solid var(--color-black);
	max-width: calc(100vw - 40px);
	min-height: 300px;
	width: calc(100vw - 40px);
	z-index: 6;

	&:after {
		content: "";
		position: absolute;
		height: 36px;
		width: calc(100% - 34px);
		left: 34px;
		background: transparent;
		top: 0;
	}

	&--tabletUp {
		min-width: 600px;
		min-height: 400px;
		max-width: 1000px;
		max-height: 700px;
	}

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
		max-height: calc(700px - 50px);
		min-height: calc(400px - 50px);
	}
}
</style>
