export default class Calculadora {
    private time: number;
    private caracter: number;

    public constructor(tempo: number = 0, letras: number = 0) {
        this.time = tempo;
        this.caracter = letras;
    }

    public forMinuto(): number {
        if (this.time == 0 && this.caracter == 0) {
            return 0;
        } 
        this.time /= 60;
        this.caracter /= this.time;
        return this.caracter;
    }
}