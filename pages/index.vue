<template>
  <div>
    <About :info="data.about" />
    <Experience :experiences="data.experience" />
    <Studies :studies="data.studies" />
    <Interests :interests="data.interests" />
  </div>
</template>

<script>
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Studies from '../components/Studies.vue'
import Interests from '../components/Interests.vue'
import data from "../static/data"

export default {
  components: { About, Experience, Studies, Interests },
  data() {
    return {
      data: data
    }
  }
}
</script>
