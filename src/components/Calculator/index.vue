<template>
  <div class="w-96 mx-auto border border-gray-700 rounded-md p-2">
    <div class="grid grid-cols-4 gap-4 mb-3">
      <div class="col-span-2 py-5 px-2 break-words border border-gray-800 rounded-md text-sm">
        {{ expresion }}
      </div>
      <button class="key--top" @click="saveResultExpression()">M</button>
      <button class="key--top" @click="expresion = ''">C</button>
    </div>
    <div class="grid grid-cols-4 gap-4 mx-auto">
      <button
        class="key"
        v-for="(item, index) in keys"
        :key="index"
        @click="buildExpression(item)"
      >
        {{ item.value }}
      </button>
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

//store
import { CalcModule } from "@/store/modules";

//types
import type { Key } from "@/types/calc.types";

@Component({})
export default class Calculator extends Vue {
  keys = keys;

  expresion: string = "";

  saveResultExpression() {
    try {
      if (this.expresion !== "") {
        CalcModule.setResult(this.expresion);
      } else {
        this.expresion = CalcModule.savedResult;
      }
    } catch (error: any) {
      window.alert(error);
    }
  }

  buildExpression(item: Key) {
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
