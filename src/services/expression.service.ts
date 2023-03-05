import { symbols } from "@/utils/symbols";

class ExpressionService {


    /**
     * Format math expression to be evaluated
     * 
     * @param expresion 
     * @param item 
     * @returns 
     */
    formatExpression(expresion: string, item: any) {

        if (this.isLastSymbol(expresion) && item.isSymbol) {
            expresion = expresion.slice(0, -1) + (item.value)
        } else {
            expresion += item.value;
        }
        return expresion;
    }

    /**
    *  Checks if last expression last character is a symbol (operator)
    * @param expresion 
    */
    isLastSymbol(expresion: string) {

        return symbols.includes(expresion.slice(-1));
    }
}

const singleton = new ExpressionService();
export default singleton;