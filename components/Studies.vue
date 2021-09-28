<template>
    <div>
        <p>{{ $t('studies.title') }}</p>
        <p v-for="study in studies" :key="study.name">  
            {{ study.name }} : {{ study.startDate }} - {{ study.endDate }} ( {{ study.school }} )
        </p>
    </div>
</template>
<script>
export default {
    props: {
        studies: Array
    }
}
</script>
<style scoped>

</style>