<template>
    <div class="posts container mb-5">
        <div v-for="post in posts" class="mb-5 border p-3 rounded bg-light">
            <h2>{{ post.title }}</h2>
            <p><small>{{ post.created_at }}</small></p>
            <div class="mb-2" v-html="post.body"></div>
            <router-link v-bind:to="'/posts/' + post.id" class="btn btn-sm btn-secondary">Czytaj więcej</router-link>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'posts',
        components: {

        },
        data: function () {
            return {
                posts: []
            };
        },
        created() {
            axios.get('http://php.coderobot.eu/backend/public/api/posts')
                .then(res => this.posts = res.data)
                .catch(err => console.log(router.onError()));
        }
    }
</script>