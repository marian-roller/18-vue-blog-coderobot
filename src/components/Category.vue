<template>
    <div>
        <h2>{{ category.title }}</h2>
        <small>Posty:
            <span class="bg-light mx-2 border px-1 rounded-sm" v-for="post in category.posts">
                <strong>{{ post }}</strong>
            </span>
        </small>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'category',
        data() {
            return {
                category: ""
            };
        },
        created() {
            var id = this.$route.params.id;
            axios.get('http://php.coderobot.eu/backend/public/api/categories/' + id)
                .then(res => this.category = res.data)
                .catch(err => console.log(router.onError()));
        },
    }
</script>

<style scoped>

</style>