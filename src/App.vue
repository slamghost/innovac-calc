<template>
  <div id="app" class="container mx-auto">
    <header class="p-4">
      <div class="text-center">
        <h2>Calculator</h2>
      </div>
    </header>
    <main>
        <Calculator />
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//components
import Calculator from "@/components/Calculator/index.vue";

@Component({
  components:{
    Calculator
  }
})
export default class App extends Vue {}
</script>
