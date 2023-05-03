<template>
	<div class="wrapper">
		<div class="friends-container">
			<p class="container-description">Znajomi</p>
			<div class="user-container">
				<img
					src="../assets/Michal.jpg"
					alt="user profile photo"
					class="profile-photo"
				/>
				<div class="user-info">
					<p class="username">Michał Kowalski</p>
					<p class="user-city-info">Zakopane, Polska</p>
				</div>
			</div>
			<div class="user-container">
				<img
					src="../assets/Iza.jpg"
					alt="user profile photo"
					class="profile-photo"
				/>
				<div class="user-info">
					<p class="username">Iza Marecka</p>
					<p class="user-city-info">Bieszczady, Polska</p>
				</div>
			</div>
			<div class="user-container">
				<img
					src="../assets/Kasia.jpg"
					alt="user profile photo"
					class="profile-photo"
				/>
				<div class="user-info">
					<p class="username">Kasia Nowak</p>
					<p class="user-city-info">Warszawa, Polska</p>
				</div>
			</div>
			<div class="user-container">
				<img
					src="../assets/Zofia.jpg"
					alt="user profile photo"
					class="profile-photo"
				/>
				<div class="user-info">
					<p class="username">Zofia Kasprzyk</p>
					<p class="user-city-info">Reda, Polska</p>
				</div>
			</div>
			<p class="more-p">więcej...</p>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	top: 0;
	left: 670px;
	margin-top: 15px;
}
.friends-container {
	display: flex;
	flex-direction: column;
	position: fixed;
	width: 200px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	cursor: pointer;
}
.user-container {
	display: flex;
	align-items: center;
	width: 200px;
	padding: 10px 10px;
	transition: 0.3s;
}
.user-container:hover {
	background-color: #ddd;
}
.user-container img {
	width: 50px;
	height: 50px;
	margin-right: 10px;
	border-radius: 50%;
	object-fit: cover;
}

.friends-container .container-description {
	margin: 20px 30px 10px;
	font-weight: bold;
}

.friends-container .more-p {
	position: relative;
	left: 120px;
	padding: 10px 0;
	transition: color 0.3s;
}

.friends-container .more-p:hover {
	color: #888;
}

.user-city-info {
	font-size: 11px;
	color: #777;
}
</style>
