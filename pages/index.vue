<template>
  <div class="container mx-auto p-6">

    <About :info="data.about" />
    <hr>
    <Experience :experiences="data.experience" />
    <hr>
    <div class="flex flex-wrap ">
      <Studies :studies="data.studies" />
      <Skills :skills="data.skills" />
      <Interests :interests="data.interests" />
    </div>
  </div>
</template>

<script>
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Studies from '../components/Studies.vue'
import Interests from '../components/Interests.vue'
import Skills from '../components/Skills.vue'
import data from "../../data"

export default {
  components: { About, Experience, Studies, Interests, Skills },
  data() {
    return {
      data: data
    }
  }
}
</script>
