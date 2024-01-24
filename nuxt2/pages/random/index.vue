<template>
    <div>
        <p>Random</p>
        {{ data }}

        <div style="height: 1000px" />
    </div>
</template>

<script>
export default {
    name: "RandomIndex",
    head() {
        return {
            title: 'Nuxt2 Random',
            meta: [
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'random page description'
                },
            ]
        }
    },

    // Axios
	async asyncData({ $axios }) {
		const data = await $axios.$get('https://www.themealdb.com/api/json/v1/1/random.php');
		return { data };
	},
}
</script>