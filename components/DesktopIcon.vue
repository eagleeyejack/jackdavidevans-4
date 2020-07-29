<template>
	<a
		v-if="link"
		:id="title"
		:href="link"
		target="_blank"
		:index="index"
		class="desktop-icon"
		draggable="true"
		:style="{ top: y + 'px' }"
	>
		<div class="desktop-icon__icon"><img :src="image" /></div>
		<div class="desktop-icon__title">{{ title }}</div>
	</a>
	<div v-else :id="title" :index="index" class="desktop-icon" draggable="true" :style="{ top: y + 'px' }">
		<div class="desktop-icon__icon"><img :src="image" /></div>
		<div class="desktop-icon__title">{{ title }}</div>
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
		link: {
			type: String,
			required: false,
			default: ""
		},
		index: {
			type: Number,
			required: true
		},
		image: {
			type: String,
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
	mounted() {
		dragItems.methods.dragElement(this.$el)
	},
	methods: {}
})
</script>

<style scoped lang="scss">
.desktop-icon {
	position: absolute;
	cursor: pointer;
	top: 0;
	margin: var(--spacing-tiny);
	height: 110px;
	width: 110px;
	text-align: center;
	left: 10px;

	&__icon {
		height: 75px;
		width: 75px;
		margin: 0 auto;
		font-size: 20px;

		img {
			height: 70px;
			width: 70px;
		}
	}

	&__title {
		display: inline-block;
		background: var(--color-white);
		color: var(--color-black);
		font-size: 16px;
		text-align: center;
		font-family: var(--font-grotesk-bold);
		margin: 10px auto 0;
		padding: 4px;
		max-width: 106px;
	}
}
</style>
