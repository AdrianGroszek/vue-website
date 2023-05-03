<template>
	<div class="wrapper">
		<div class="buttons-container">
			<button class="btn btn-active">Główna</button>
			<button class="btn">Oglądaj</button>
			<button class="btn">Wiadomości</button>
			<button className="btn" @click="optionSelected">Ustawienia</button>
		</div>
	</div>
	<div class="wrapper-settings" :class="showOptions ? 'hidden' : 'active'">
		<div class="block">
			<div class="theme-box">
				<p>Motyw</p>
				<div class="circle-wrapper">
					<div class="light-theme"></div>
					<div class="dark-theme"></div>
				</div>
			</div>
			<div class="font-size-box">
				<p>Rozmiar</p>
				<div class="circle-wrapper">
					<div class="font-down" @click="changeFontSizeDown">-</div>
					<div class="font-up" @click="changeFontSizeUp">+</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showOptions: true,
		};
	},

	methods: {
		optionSelected() {
			this.showOptions ? (this.showOptions = false) : (this.showOptions = true);
		},
		changeFontSizeUp() {
			this.$emit('change-font-size-up');
		},
		changeFontSizeDown() {
			this.$emit('change-font-size-down');
		},
	},
};
</script>

<style scoped>
.hidden {
	display: none;
}
.active {
	display: block;
}
.wrapper {
	position: relative;
	top: 0;
	left: -220px;
	margin-top: 15px;
}
.buttons-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: fixed;
	width: 200px;
	height: 220px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.buttons-container .btn {
	height: 40px;
	width: 160px;
	margin: 3px 0;
	background: #ddd;
	border-radius: 50px;
	color: #222;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	outline: 0 solid transparent;
	border: none;
	transition: 0.3s;
}

.buttons-container .btn-active {
	background-color: #7c162e;
	color: #fff;
}

.btn:hover {
	background-color: #7c162e;
	color: #fff;
}

.wrapper-settings {
	position: relative;
	top: 240px;
	left: -220px;
}
.wrapper-settings .block {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 200px;
	height: 150px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.theme-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50%;
	/* background-color: lime; */
}
.font-size-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50%;
	/* background-color: gold; */
}

.font-size-box p,
.theme-box p {
	padding-left: 15px;
}

.font-size-box .circle-wrapper,
.theme-box .circle-wrapper {
	padding-right: 15px;
}

.theme-box .light-theme {
	width: 45px;
	height: 45px;
	border-radius: 50px;
	margin-left: 5px;
	background-color: #ddd;
	cursor: pointer;
	transition: 0.3s;
}

.theme-box .dark-theme {
	width: 45px;
	height: 45px;
	border-radius: 50px;
	margin-left: 5px;
	background-color: #444;
	cursor: pointer;
	transition: 0.3s;
}

.dark-theme:hover,
.light-theme:hover,
.font-up:hover,
.font-down:hover {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

.font-up,
.font-down {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	margin-left: 5px;
	background-color: #7c162e;
	color: #fff;
	font-size: 36px;
	border-radius: 50px;
	cursor: pointer;
	transition: 0.3s;
}

.circle-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
