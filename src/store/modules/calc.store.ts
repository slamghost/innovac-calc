import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

import store from "@/store";
const moduleName = "calculator"

@Module({ dynamic: true, name: moduleName, namespaced: true, store })
class CalcState extends VuexModule {


    result: string = "";

    get savedResult(): string {
        return this.result;
    }

    @Mutation
    setResult(number: string) {
        this.result = number;
    }

}


export { CalcState };
export default getModule(CalcState);