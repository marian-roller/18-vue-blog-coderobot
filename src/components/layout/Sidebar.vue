<template>
    <div class="container sidebar-container">
        <Categories />
    </div>
</template>

<script>
    import Categories from '@/components/Categories.vue';
    export default {
        name: 'sidebar',
        components: {
            Categories
        }
    }
</script>

<style scoped>
    .sidebar-container {}
</style>