<template>
    <div class="container flex flex-wrap bottom-border h-40 content-center">
        <div class="w-1/2 inline">
            <h1 class="font-bold text-2xl"> {{ info.name }} </h1>
        </div>
        <div class="w-1/2 inline">
            <p><a :href="'mailto:'+info.email+'?subject=Contact'"><span class="link link-underline link-underline-black text-black font-bold"> {{ info.email }} </span></a></p>
            <p><a :href="'callto:'+info.phone"><span class="link link-underline link-underline-black text-black font-bold"> {{ info.phone }} </span></a></p>
            <p><a href="http://github.com"><span class="link link-underline link-underline-black text-black font-bold">Github</span></a></p>
        </div>
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
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#F2C, #F2C)
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>