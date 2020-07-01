<template>
	<ul class="dropdown-menu">
		<li v-for="option in options" :key="option">{{ `${option}` }}</li>
	</ul>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		options: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			showFile: false
		}
	}
})
</script>

<style scoped lang="scss">
.dropdown-menu {
	position: absolute;
	background: var(--color-grey);
	width: 250px;
	top: 24px;
	border: 2px solid var(--color-black);
	z-index: 2;

	&:hover {
		display: block;
	}

	li {
		padding: var(--space-tiny);

		&:hover {
			background: var(--color-black);
			color: var(--color-white);
		}

		&:first-child {
			padding: var(--space-tiny);
		}
	}
}
</style>
