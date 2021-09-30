<template>
    <div class="mt-4 w-1/3 inline">
        <h2 class="uppercase text-xl font-light pb-4">{{ $t('skills.title') }}</h2>
        <div class="mb-5" v-for="skill in skills" :key="skill.name"> 
            <p class="font-bold text-lg mb-1">{{ skill.name }}</p>
            <ul v-if="skill.frameworks.length">
                <li class="font-light text-sm" v-for="framework in skill.frameworks" :key="framework.name">
                    {{framework.name}}
                </li> 
            </ul>
        </div>
    </div>
</template>
<script>
import data from '../static/data'

export default {
    props: {
        skills: Array
    }
}
</script>