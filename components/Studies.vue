<template>
    <div class="mt-4 w-1/3 inline">
        <h2 class="uppercase text-xl font-light pb-4">{{ $t('studies.title') }}</h2>
        <div class="mb-5" v-for="study in studies" :key="study.name"> 
            <p class="font-bold text-lg mb-1">{{ study.name }}</p>
            <p class="font-light text-xs"> {{ study.school }} </p>
            <p class="font-light text-xs"> {{ study.startDate }} - {{ study.endDate }}</p> 
        </div>
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