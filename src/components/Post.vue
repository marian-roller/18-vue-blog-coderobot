<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p class="mb-0"><small>Utworzony: <strong>{{ post.created_at }}</strong></small></p>
        <p class="mb-0"><small>Zmodyfikowany: <strong>{{ post.updated_at }}</strong></small></p>
        <p>
            <small>Kategorie:
                <span class="bg-light mx-2 border px-1 rounded-sm" v-for="category in post.categories">
                    <strong>{{category}}</strong>
                </span>
            </small>
        </p>
        <p> {{ post.body }}</p>

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