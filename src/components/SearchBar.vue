<template>
	<div class="wrapper">
		<div class="search-bar">
			<div class="left-side">
				<img
					src="../assets/profile-photo.jpg"
					alt="user profile photo"
					class="profile-photo"
				/>
				<input type="text" placeholder="Dodaj na tablice" />
			</div>
			<button>Post</button>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.search-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 640px;
	height: 60px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.profile-photo {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
}

.left-side {
	display: flex;
	align-items: center;
}
.left-side input,
img {
	margin-left: 20px;
}

.left-side input {
	font-family: sans-serif;
	width: 100%;
	padding: 10px;
	border: none;
	outline: none;
	font-size: 1em;
}

.search-bar button {
	margin-right: 20px;
	padding: 10px 30px;
	background: #7c162e;
	border-radius: 50px;
	color: #ffffff;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	outline: 0 solid transparent;
	border: none;
}
</style>
