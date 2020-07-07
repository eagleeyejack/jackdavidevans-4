<template>
	<div class="header">
		<ul class="dropdown-list">
			<li title="Icon" class="list-item">Icon</li>
			<li title="File" class="list-item" @mouseenter="mouseEnter" @mouseleave="mouseLeave">File</li>
			<li title="About" class="list-item" @mouseenter="mouseEnter" @mouseleave="mouseLeave">About</li>
			<li title="Themes" class="list-item">Themes</li>
		</ul>
		<!-- v-bind  -->
		<Dropdown
			v-show="dropdown['file'] === 1"
			title="File"
			:style="{ left: leftXOption + 'px' }"
			:options="[{ title: 'System', onclick: test() }]"
			@mouseover.native="open('file')"
			@mouseleave.native="close('file')"
		/>
		<Dropdown
			v-show="dropdown['about'] === 1"
			title="About"
			:style="{ left: leftXOption + 'px' }"
			:options="[
				{ title: 'Instagram', link: 'https://google.com' },
				{ title: 'Twitter', link: 'https://google.com' },
				{ title: 'LinkedIn', link: 'https://google.com' },
				{ title: 'Github', link: 'https://google.com' },
				{ title: 'Codepen', link: 'https://google.com' }
			]"
			@mouseover.native="open('about')"
			@mouseleave.native="close('about')"
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
			leftXOption: 0,
			dropdown: {
				icon: 0,
				file: 0,
				about: 0,
				themes: 0
			}
		}
	},
	mounted() {
		this.getTime()
	},
	methods: {
		open(name: string) {
			Vue.set(this.dropdown, name, 1)
		},
		close(name: string) {
			Vue.set(this.dropdown, name, 0)
		},
		test() {
			console.log("this")
		},
		mouseEnter(e: any) {
			this.dropdown = {
				icon: 0,
				file: 0,
				about: 0,
				themes: 0,
				[`${e.target.getAttribute("title").toLowerCase()}`]: 1
			}
			this.leftXOption = e.target.offsetLeft
		},
		mouseLeave() {
			this.dropdown = {
				icon: 0,
				file: 0,
				about: 0,
				themes: 0
			}
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
		cursor: pointer;

		&:hover {
			color: var(--color-white);
			background: var(--color-blue-dark);
		}
	}
}

.datesWrap {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: default;

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
