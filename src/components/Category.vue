<template>
    <div class="container mb-5">
        <h2>{{ category.title }}</h2>

        <div v-if="category.category_posts.length === 0">
            <p>Brak postów w tej kategorii</p>
        </div>
        <div v-else>
            <div>Posty w tej kategorii:
                <div class="" v-for="post, key in category.category_posts">
                    <router-link v-bind:to="'/posts/' + key">
                        <div class="my-3 font-weight-bold">{{ post }}</div>
                    </router-link>
                </div>
            </div>
        </div>
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
            console.log(data.category);
        },
    }
</script>

<style scoped>

</style>