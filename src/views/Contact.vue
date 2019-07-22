<template>
    <div class="container mb-5">
        <h2>{{ title }}</h2>
        <p>Jeśli masz dla mnie jakąś kasę, to napisz:</p>
        <p>webmaster@coderobot.eu</p>
        <p>W innych sprawach nawet nie próbuj, i tak nie odpowiem.</p>
    </div>
</template>

<script>
    export default {
        name: "contact",
        data: function () {
            return {
                title: "Kontakt"
            };
        },
    }
</script>