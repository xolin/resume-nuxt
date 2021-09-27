<template>
  <div>
    <About/>
    <Experience/>
    <Studies/>
    <Interests/>
  </div>
</template>

<script>
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Studies from '../components/Studies.vue'
import Interests from '../components/Interests.vue'

export default {
  components: { About, Experience, Studies, Interests },
}
</script>
