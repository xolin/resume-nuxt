<template>
    <div>
        <p>{{ $t('interests.title') }}</p>
        <ul>
            <li v-for="interest in interests" :key="interest.name">  
                {{ interest }}
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