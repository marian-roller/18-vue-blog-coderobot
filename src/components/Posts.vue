<template>
    <div class="posts container">
        <h1 class="text-center">Blog o programowaniu w PHP</h1>
        <div v-for="post in posts" class="my-5 border p-3">
            <h2>{{ post.title }}</h2>
            <p><small>{{ post.created_at }}</small></p>
            <div class="mb-2">
                {{ post.body }}
            </div>
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
            axios.get('http://localhost/~ja/18_php_vue_blog_coderobot/backend/public/index.php/api/posts')
                .then(res => this.posts = res.data)
                .catch(err => console.log(router.onError()));
        }
    }
</script>