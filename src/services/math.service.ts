import stringMath from "string-math";

class MathService {

    /**
     *  Solve string math expression wihtout using eval function
     * 
     * @param expresion math expression
     * @returns result
     */
    solveExpression(expresion: string) {

        return stringMath(expresion);
    }   

}

const singleton = new MathService();
export default singleton;