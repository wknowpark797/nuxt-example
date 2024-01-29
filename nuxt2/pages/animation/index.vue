// 애니메이션 관련 최적화 API - requestAnimationFrame() 사용예제

<template>
    <div>
        <div ref="box" class="box" />
        <div ref="box2" class="box" />
        
        <button type="button" @click="onPause">일시정지</button>
        <p>Position : <span ref="value">0</span></p>
        <p>애니메이션 수행 시간 : {{ currentTime }}</p>
    </div>
</template>

<script>
export default {
    name: "AnimationIndex",
    data() {
        return {
            xPos: 0,
            animationId: 0,
            animationId2: 0,
            startTime: 0,   // 애니메이션 시작 시간
            currentTime: 0, // 애니메이션 수행 시간
        }
    },
    methods: {
        // requestAnimationFrame 사용
        render(timestamp) {
            if(!this.startTime) this.startTime = timestamp;
            this.currentTime = timestamp - this.startTime;
            
            // 5초 후 정지
            // if(this.currentTime > 5000) {
            //     cancelAnimationFrame(this.animationId);
            //     return;
            // }

            if(this.xPos > 500) {
                cancelAnimationFrame(this.animationId);
                return;
            }

            this.$refs.value.innerHTML = this.xPos;
            this.xPos += 1;
            this.$refs.box.style.transform = `translateX(${this.xPos}px)`;

            this.animationId = requestAnimationFrame(this.render);
        },

        // setInterval 사용
        render2() {
            if(this.xPos > 500) {
                clearInterval(this.animationId2);
                return;
            }
            this.$refs.box2.style.transform = `translateX(${this.xPos}px)`;
        },

        // 일시 정지
        onPause() {
            cancelAnimationFrame(this.animationId);

            setTimeout(() => {
                requestAnimationFrame(this.render);
            }, 3000);
        }
    },
    mounted() {
        requestAnimationFrame(this.render);
        this.animationId2 = setInterval(this.render2, 1000/60);
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