<template>
    <div>
        <p>{{ $t('about.title') }}</p>
        <p> Name: {{ info.name }}</p>
        <p> Email: {{ info.email }}</p>
        <p> Phone: {{ info.phone }}</p>
    </div>
</template>
<script>
export default {
    props: {
        info: Object
    }
}
</script>
<style scoped>

</style>