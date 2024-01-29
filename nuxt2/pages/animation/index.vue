// 애니메이션 관련 최적화 API - requestAnimationFrame()

<template>
    <div>
        <div ref="box" class="box" />
        position: <span ref="value">0</span>

        <button type="button" @click="onPause">
            PAUSE
        </button>
    </div>
</template>

<script>
export default {
    name: "AnimationIndex",
    data() {
        return {
            xPos: 0,
            animationId: 0,
            startTime: 0,   // 애니메이션 시작 시간
        }
    },
    methods: {
        render(timestamp) {
            if(!this.startTime) this.startTime = timestamp;
            const currentTime = timestamp - this.startTime;
            console.log('애니메이션 수행 시간: ', currentTime);

            // 5초 후 정지
            if(currentTime > 5000) {
                cancelAnimationFrame(this.animationId);
                return;
            }

            this.$refs.value.innerHTML = this.xPos;
            this.xPos += 1;
            this.$refs.box.style.transform = `translateX(${this.xPos}px)`;

            this.animationId = requestAnimationFrame(this.render);
        },
        onPause() {
            cancelAnimationFrame(this.animationId);

            setTimeout(() => {
                requestAnimationFrame(this.render);
            }, 3000);
        }
    },
    mounted() {
        // this.render();
        requestAnimationFrame(this.render);
    }
}
</script>

<style lang="scss" scoped>
    .box {
        width: 50px;
        height: 50px;
        background: #333;
    }
</style>