<template>
	<div
		v-show="localVisible === 1"
		:id="title"
		:index="index"
		:style="{ top: y + 'px', left: x + 'px' }"
		class="window"
		draggable="true"
	>
		<div>
			<button class="window__close" @click="close" />
			<div class="window__title">{{ title }}</div>
			<div class="window__contents">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import dragItems from "../mixins/dragItems"

export default Vue.extend({
	mixins: [dragItems],
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
		}
	},
	data() {
		return {
			localVisible: 0,
			y: this.index * 10 + 110 * (this.index - 1),
			x: this.index * 10 + 110 * (this.index - 1)
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
		console.log(this.index * 10 + 10 * (this.index - 1))
		this.localVisible = this.visible
	},
	methods: {
		close() {
			this.localVisible = 0
			console.log("ding")
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
	top: 300px;
	left: 300px;
	z-index: 1;
	border: 2px solid var(--color-black);

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
