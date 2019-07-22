<template>
    <div class="mb-5">
        <h5>Kategorie:</h5>
        <div v-for="category in categories">
            <router-link v-bind:to="'/categories/' + category.id">{{ category.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "categories",
        data: function () {
            return {
                categories: []
            };
        },
        created() {
            axios.get('http://php.coderobot.eu/backend/public/api/categories')
                .then(res => this.categories = res.data)
                .catch(err => console.log(router.onError()));
        }
    }
</script>

<style scoped>

</style>