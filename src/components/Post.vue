<template>
    <div class="container">
        <h1>{{ post.title }}</h1>


    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'post',
        data() {
            return {
                post: ""
            }
        },
        created() {
            var id = this.$route.params.id;
            axios.get('http://localhost/~ja/18_php_vue_blog_coderobot/backend/public/index.php/api/posts/' + id)
                .then(res => this.post = res.data)
                .catch(err => console.log(router.onError()));
        },
    }
</script>