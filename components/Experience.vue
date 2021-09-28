<template>
    <div>
        <p>{{ $t('experience.title') }}</p>
        <p v-for="exp in experiences" :key="exp.name">  
            {{ exp.name }} : {{ exp.startDate }} - {{ exp.endDate }} ( {{ exp.role }} )
        </p>
    </div>
</template>
<script>
export default {
    props: {
        experiences: Array
    }
}
</script>
<style scoped>

</style>