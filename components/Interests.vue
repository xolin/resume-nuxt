<template>
    <div class="mt-4 w-1/3 inline">
        <h2 class="uppercase text-xl font-light pb-4">{{ $t('interests.title') }}</h2>
        <ul>
            <li v-for="interest in interests" :key="interest.name">  
                <p class="font-light text-sm">{{ interest }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        interests: Array
    }
}
</script>
<style scoped>

</style>