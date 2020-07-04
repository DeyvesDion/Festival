<template>
    <div>
        <div class="header">
            <h1 class="headerTitle">
                Les films à l'affiche
            </h1>
        </div>
        <div class="container">
            <div class="card_">
                <Card></Card>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import Card from "@/components/Card/Card.vue";
export default {
    name: "Programme",
    components: {
        Banner,
        Card,
    },
};
</script>

<style src="./Programme.css" scoped></style>
