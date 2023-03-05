<template>
  <div class="w-96 mx-auto">
    <div class="grid grid-cols-4 gap-4 mb-3">
      <div class="col-span-2 p-5 border border-gray-800 rounded-md">
        {{ expresion }}
      </div>
      <div class="key--top">M</div>
      <div class="key--top" @click="expresion = ''">C</div>
    </div>
    <div class="grid grid-cols-4 gap-4 mx-auto">
      <div
        class="key"
        v-for="(item, index) in keys"
        :key="index"
        @click="buildExpression(item)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

// utils
import { keys } from "./keys";

//services
import MathService from "@/services/math.service";
import ExpressionService from "@/services/expression.service";

@Component({})
export default class Calculator extends Vue {
  keys = keys;

  expresion: string = "";

  buildExpression(item: any) {
    switch (item.value) {
      case "=":
        try {
          const result = MathService.solveExpression(this.expresion);
          this.expresion = String(result);
        } catch (error: any) {
          this.expresion = "Error";
        }
        break;

      case "C":
        this.expresion = "";
        break;

      default:
        this.expresion = ExpressionService.formatExpression(
          this.expresion,
          item
        );
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
.key {
  @apply border rounded-md border-gray-700 p-5 text-center cursor-pointer bg-slate-500 text-white hover:bg-slate-800;
  &--top {
    @extend .key;
    @apply bg-green-900;
  }
}
</style>
