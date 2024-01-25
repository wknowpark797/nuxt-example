<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.content }}

                <button type="button" @click="onRemovePost(post.id)">
                    Remove
                </button>
            </li>
        </ul>

        <input type="text" v-model="inputPost">
        <button type="button" @click="onAddPost">
            Add
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "PostIndex",
    data() {
        return {
            inputPost: ''
        }
    },
    computed: {
        ...mapState(['posts']),
    },
    methods: {
        onAddPost() {
            this.$store.dispatch('add', {
                id: Date.now(),
                content: this.inputPost
            })
            .then(() => {
                this.inputPost = '';
            })
            .catch(() => {

            })
        },
        onRemovePost(postId) {
            this.$store.dispatch('remove', {
                id: postId
            })
        }
    }
}
</script>