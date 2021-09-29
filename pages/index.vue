<template>
  <div class="container mx-auto p-6">

    <About :info="data.about" />
    <hr>
    <Experience :experiences="data.experience" />
    <hr>
    <div class="flex flex-wrap ">
      <Studies :studies="data.studies" />
      <Interests :interests="data.interests" />
    </div>
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
