<template>
    <div>
        <h2>{{ category.title }}</h2>

        <div v-if="category.category_posts.length === 0">
            <p>Brak postów w tej kategorii</p>
        </div>
        <div v-else>
            <small>Posty w tej kategorii:
                <div class="" v-for="post, key in category.category_posts">
                    <router-link v-bind:to="'/posts/' + key" class=""><strong>{{ post }}</strong>
                    </router-link>
                </div>
            </small>
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
            console.log(this.category);
        },
    }
</script>

<style scoped>

</style>