<template>
	<div class="header">
		<ul class="dropdown-list">
			<li class="list-item">Icon</li>
			<li class="list-item" @mouseenter="mouseEnter" @mouseleave="mouseLeave">File</li>
			<li class="list-item">About</li>
			<li class="list-item">Themes</li>
		</ul>
		<!-- v-bind  -->
		<Dropdown
			v-show="hover"
			:style="{ left: leftXOption + 'px' }"
			:options="['System', 'Stickies']"
			@mouseover.native="hover = true"
			@mouseleave.native="hover = false"
		/>

		<div class="datesWrap">
			<div class="time">{{ time }}</div>
			<div class="date">{{ date }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import dayjs from "dayjs"

import Dropdown from "../components/Dropdown.vue"

export default Vue.extend({
	components: {
		Dropdown
	},
	data() {
		return {
			time: dayjs().format("hh:mm:ss A"),
			date: dayjs().format("ddd MMM MM YYYY"),
			hover: false,
			leftXOption: 0
		}
	},
	mounted() {
		this.getTime()
	},
	methods: {
		mouseEnter(event: any) {
			this.hover = true
			this.leftXOption = event.target.offsetLeft
		},
		mouseLeave() {
			this.hover = false
		},
		setTime() {
			this.time = dayjs().format("hh:mm:ss A")
		},
		getTime() {
			setInterval(this.setTime, 1000)
		}
	}
})
</script>

<style lang="scss">
.header {
	display: flex;
	background: var(--color-grey);
	height: 26px;
	border-bottom: 2px solid var(--color-black);
	padding: 0 1rem;
	font-size: 16px;
	justify-content: space-between;
	font-family: chicago;
}

.dropdown-list {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;

	.list-item {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 var(--space-tiny);

		&:hover {
			background: var(--color-grey-dark);
		}
	}
}

.datesWrap {
	display: flex;
	justify-content: center;
	align-items: center;

	.time {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: var(--space-tiny);
		border-left: 2px solid var(--color-black);
	}

	.date {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: var(--space-tiny);
		border-left: 2px solid var(--color-black);
	}
}
</style>
