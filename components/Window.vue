<template>
	<div :id="title" :index="index" class="window" draggable="true">
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
		}
	},
	data() {
		return {}
	},
	mounted() {
		dragItems.methods.dragElement(this.$el)
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
