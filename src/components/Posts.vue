<template>
    <div class="posts container">
        <h1>Lista wszystkich postów</h1>
        <div v-for="post in posts">
            <p>{{ post.title }}</p>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'posts',
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