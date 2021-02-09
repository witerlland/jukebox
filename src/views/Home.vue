<template>
  <div class="home">
    <wb-grid 
      :data="pessoas"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import wbGrid from '@/components/wb-grid.vue'

export default {
  name: 'Home',
  components: {
    wbGrid
  },
  computed: {
    pessoas(){
      return this.$store.getters.pessoas
    }
  }
}
</script>
