<template>
	<div class="experience">
		Hello
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	components: {},
	props: {},
	data() {
		return {}
	}
})
</script>

<style lang="scss" scoped>
.experience {
	margin: var(--space-tiny);
	text-align: left;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.4;

	h1 {
		font-size: 40px;
	}

	h2 {
		font-size: 30px;
		font-weight: bold;
	}

	ul {
		padding: 10px 20px;
		li {
			list-style: circle;
		}
	}
}
</style>
