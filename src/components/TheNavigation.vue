<template>
	<nav>
		<h2>nazwaStrony</h2>
		<div class="input-container">
			<input type="text" placeholder="Szukaj" />
		</div>
		<div class="right-side">
			<img src="../assets/bell.png" alt="bell icon" class="bell-icon" />
			<img
				src="../assets/profile-photo.jpg"
				alt="user profile photo"
				class="profile-photo"
			/>
			<p>Jan Kowalski</p>
		</div>
	</nav>
</template>

<script></script>

<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fff;
	font-family: sans-serif;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

nav h2 {
	width: 200px;
	color: #7c162e;
	text-align: center;
	cursor: pointer;
}
nav .input-container {
	position: relative;
	width: 400px;
}

nav .input-container input {
	width: 100%;
	padding: 10px;
	border: none;
	background-color: #ddd;
	border-radius: 50px;
	outline: none;
	font-size: 1em;
}
nav .right-side {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	cursor: pointer;
}

nav .right-side .profile-photo {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
}
nav .right-side .bell-icon {
	width: 30px;
	height: 30px;
}

nav .right-side img,
p {
	margin: 0 5px;
}

nav .right-side p {
	font-weight: bold;
}
</style>
