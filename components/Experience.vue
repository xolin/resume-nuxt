<template>
    <div class="mt-4 mb-8">
        <h2 class="uppercase text-xl font-light pb-4">{{ $t('experience.title') }}</h2>
        <div class="flex mb-2" v-for="exp in experiences" :key="exp.name">
            <div class="w-1/3">
                <p class="font-bold text-xl mb-2">{{ exp.name }}</p>
                <p class="font-light text-xs"> {{ exp.role }} </p>
                <p class="font-light text-xs"> {{ exp.startDate }} - {{ exp.endDate }}</p>
            </div>
            <div class="w-2/3">
                <p class="font-light text-sm">{{ exp.text }}</p>
            </div>
        </div>
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