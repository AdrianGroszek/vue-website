<template>
	<div class="post-container">
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
		<div class="img-container">
			<img src="../assets/post-photo.jpg" alt="" />
		</div>
		<div class="activity-container">
			<img src="../assets/heart.png" alt="Like button" />
			<img src="../assets/chat-comment.png" alt="Chat button" />
		</div>
	</div>
	<div class="post-container">
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
		<div class="img-container">
			<img src="../assets/dog.jpg" alt="" />
		</div>
		<div class="activity-container">
			<img src="../assets/heart.png" alt="Like button" />
			<img src="../assets/chat-comment.png" alt="Chat button" />
		</div>
	</div>
	<div class="post-container">
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
		<div class="img-container">
			<img src="../assets/nature.jpg" alt="" />
		</div>
		<div class="activity-container">
			<img src="../assets/heart.png" alt="Like button" />
			<img src="../assets/chat-comment.png" alt="Chat button" />
		</div>
	</div>
	<div class="post-container">
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
		<div class="img-container">
			<img src="../assets/friends.jpg" alt="" />
		</div>
		<div class="activity-container">
			<img src="../assets/heart.png" alt="Like button" />
			<img src="../assets/chat-comment.png" alt="Chat button" />
		</div>
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
.post-container {
	max-width: 640px;
	background-color: #fff;
	border-radius: 20px;
	margin: 10px 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.user-container {
	display: flex;
	align-items: center;
	height: 60px;
	margin-left: 20px;
}
.user-info {
	font-family: sans-serif;
	margin-left: 40px;
	cursor: pointer;
}
.user-info .user-city-info {
	font-size: 11px;
	color: #8a8a8a;
}
.user-container .profile-photo {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
}
.img-container {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 400px;
}

.img-container img {
	width: 600px;
	height: 380px;
	object-fit: cover;
	border-radius: 20px;
}

.post-container .activity-container {
	display: flex;
	padding-bottom: 15px;
	padding-left: 30px;
}

.post-container .activity-container img {
	height: 25px;
	margin-right: 10px;
	cursor: pointer;
}
</style>
