<template>
	<div class="experience">
		<h1>{{ experience.company }}</h1>
		<h2>{{ experience.position }}</h2>
		<div>{{ experience.date }}</div>
		<ul>
			<li v-for="(listItem, index) in experience.list" :key="index">{{ listItem }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		experience: {
			type: Object,
			required: true
		}
	},
	data() {
		return {}
	}
})
</script>

<style lang="scss" scoped>
.experience {
	text-align: left;
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.4;

	h1 {
		font-size: 32px;
	}

	h2 {
		font-size: 20px;
		font-weight: bold;
	}

	ul {
		padding: 10px 20px;
		li {
			list-style: circle;
		}
	}

	@media (min-width: 450px) {
		margin: var(--space-tiny);
		font-size: 20px;

		h1 {
			font-size: 40px;
		}

		h2 {
			font-size: 30px;
		}

		ul {
			padding: 10px 20px;
		}
	}
}
</style>
