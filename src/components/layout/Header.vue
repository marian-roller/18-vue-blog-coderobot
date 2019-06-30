<template>
    <div class="mb-5">
        <div class="header-container position-relative">
            <img class="header-image" v-bind:src="imgComputedPath" alt="">

            <div class="overlay-container">
                <div class="header-text position-absolute text-center title-font"
                    v-bind:style="{color: headerContainer.color}">
                    <h1 class="font-weight-bold">{{ headerContainer.header }}</h1>
                    <h2 class="font-weight-bold">{{ headerContainer.subheader }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'header',
        data: function () {
            return {
                headerContainer: [],
                imgPath: "http://php.coderobot.eu/backend/public/img"
            };
        },
        computed: {
            imgComputedPath: function () {
                return this.imgPath + "/" + this.headerContainer.file;
            }
        },
        created() {
            axios.get('http://php.coderobot.eu/backend/public/api')
                .then(res => this.headerContainer = res.data)
                .catch(err => console.log(router.onError()));
        }
    }
</script>

<style scoped>
    .header-container {
        height: 300px;
    }

    .header-image {
        display: block;
        width: 100%;
        height: inherit;
        object-fit: cover;
    }

    .header-text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .overlay-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        transition: .5s ease;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>