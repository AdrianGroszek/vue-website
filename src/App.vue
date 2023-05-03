<template>
	<div class="app-box" :style="{ 'font-size': fontSize + 'px' }">
		<the-navigation></the-navigation>
		<buttons-bar
			@change-font-size-up="changeFontSizeUp"
			@change-font-size-down="changeFontSizeDown"
		></buttons-bar>
		<friends-bar></friends-bar>
		<reels-component></reels-component>
		<search-bar></search-bar>
		<post-card></post-card>
	</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import ReelsComponent from './components/ReelsComponent.vue';
import SearchBar from './components/SearchBar.vue';
import ButtonsBar from './components/ButtonsBar.vue';
import FriendsBar from './components/FriendsBar.vue';

export default {
	name: 'App',
	data() {
		return {
			mode: 'dark',
			fontSize: 16,
		};
	},
	components: {
		TheNavigation,
		ReelsComponent,
		SearchBar,
		ButtonsBar,
		FriendsBar,
	},
	methods: {
		changeFontSizeUp() {
			if (this.fontSize < 20) {
				this.fontSize += 2;
			}
		},
		changeFontSizeDown() {
			if (this.fontSize > 12) {
				this.fontSize -= 2;
			}
		},
	},
};
</script>

<style>
html {
	font-size: 16px;
	font-family: sans-serif;
}
</style>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
