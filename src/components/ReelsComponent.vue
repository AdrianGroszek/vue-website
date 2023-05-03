<template>
	<div class="reels-container">
		<div class="reel reel-one"></div>
		<div class="reel reel-two"></div>
		<div class="reel reel-three"></div>
		<div class="reel reel-four"></div>
		<div class="reel reel-five"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style scoped>
.reel {
	width: 120px;
	height: 240px;
	margin: 0 5px;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.3s;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.reel-one {
	background-image: url('https://source.unsplash.com/featured/120x240');
}
.reel-two {
	background-image: url('https://source.unsplash.com/featured/120x241');
}
.reel-three {
	background-image: url('https://source.unsplash.com/featured/120x242');
}
.reel-four {
	background-image: url('https://source.unsplash.com/featured/120x243');
}
.reel-five {
	background-image: url('https://source.unsplash.com/featured/120x244');
}
.reels-container {
	display: flex;
	justify-content: center;
	margin: 75px 0 15px;
}

.reel:hover {
	box-shadow: 0px 0px 10px 0px rgba(124, 22, 46, 1);
}
</style>
