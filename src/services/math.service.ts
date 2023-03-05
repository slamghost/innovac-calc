import stringMath from "string-math";

class MathService {

    /**
     * 
     * @param expresion 
     * @returns 
     */
    solveExpression(expresion: string) {

        return stringMath(expresion);
    }   

}

const singleton = new MathService();
export default singleton;