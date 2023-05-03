import { createApp } from 'vue';

import App from './App.vue';
import PostCard from './components/PostCard.vue';
import FriendsBar from './components/FriendsBar.vue';

const app = createApp(App);

app.component('post-card', PostCard);
app.component('friends-bar', FriendsBar);

app.mount('#app');
