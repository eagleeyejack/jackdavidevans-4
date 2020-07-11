<template>
	<div class="system">
		<div class="system__top">
			<div class="system__image-wrap">
				<img class="image--globe" src="/mac-vintage.png" />
			</div>
			<div class="system__wrap">
				<div class="system__version">
					<img class="image--logo" src="/mac.png" />
					<p>Mac OS 8.0</p>
				</div>
			</div>
		</div>
		<div class="system__middle">
			<div>
				<ul>
					<li class="browser__list-item">
						<div class="browser__list-item--title browser__list-item--shared">Browser:</div>
						<div class="browser__list-item--value browser__list-item--shared">
							{{ browserName }}
						</div>
					</li>
					<li class="browser__list-item">
						<div class="browser__list-item--title browser__list-item--shared">Version:</div>
						<div class="browser__list-item--value browser__list-item--shared">{{ browserVersion }}</div>
					</li>
					<li class="browser__list-item">
						<div class="browser__list-item--title browser__list-item--shared">Your OS:</div>
						<div class="browser__list-item--value browser__list-item--shared">{{ browserOs }}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { capitalize } from "../utils/capitalize"
const { detect } = require("detect-browser")
const browser = detect()

export default Vue.extend({
	props: {},
	data() {
		return {
			browserName: "",
			browserVersion: "",
			browserOs: ""
		}
	},
	mounted() {
		this.getBrowser()
	},
	methods: {
		getBrowser() {
			this.browserName = capitalize(browser.name)
			this.browserVersion = browser.version
			this.browserOs = browser.os
		}
	}
})
</script>

<style lang="scss">
.system {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__top {
		display: flex;
		width: 100%;
	}

	&__middle {
		padding: 10px 0;
	}
	&__bottom {
		background: yellow;
	}

	&__wrap {
		width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	&__image-wrap {
		width: 50%;
		text-align: left;
	}

	&__version {
		display: flex;
		flex-direction: row;
		align-items: center;

		p {
			margin-left: 10px;
		}
	}
}

.browser {
	&__list {
	}

	&__list-item {
		display: grid;
		grid-template-columns: 4fr 6fr;

		&--shared {
			padding: 5px 10px;
		}

		&--title {
			text-align: right;
		}
		&--value {
			text-align: left;
		}
	}
}

.image {
	&--logo {
		width: 60px;
	}
	&--globe {
		max-width: 250px;
		width: 100%;
	}
}
</style>
