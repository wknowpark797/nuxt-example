<template>
    <div>

        <div class="section-wrap">
            <section class="section section01">
                <h1>SECTION 01</h1>
            </section>
            <section class="section section02">
                <h1>SECTION 02</h1>

                <div class="card-wrap">
                    <div class="card card01">CARD 01</div>
                    <div class="card card02">CARD 02</div>
                    <div class="card card03">CARD 03</div>
                    <div class="card card04">CARD 04</div>
                    <div class="card card05">CARD 05</div>
                </div>
            </section>
            <section class="section section03">
                <h1>SECTION 03</h1>
            </section>
        </div>

    </div>
</template>

<script>
export default {
    name: "ScrollIndex",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    beforeDestroy() {

    }
}
</script>

<style lang="scss" scoped>
    .section-wrap {
        .section {
            min-height: 100vh;

            &.section01, &.section03 {
                background: #f3f3f3;
            }
        }

        .card-wrap {
            .card {
                font-size: 20px;
                width: 350px;
                height: 350px;
                border: 3px solid #333;
                border-radius: 20px;
                padding: 20px;
                margin: 0 auto;
                text-align: center;
            }
        }
    }
</style>