/*
* File: app.ts
* Author: Tukolicza Péter
* Copyright: 2024, Tukolicza Péter
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/axiin
* Licenc: GNU GPL
*/


class Ellipszoid {
    sideAInput?: HTMLInputElement | null;
    sideBInput?: HTMLInputElement | null;
    sideCInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;


    constructor() {
        this.bindHtml();
        this.HandleEvent();

    }


    bindHtml() {
        this.sideAInput = document.querySelector("#sideA")
        this.sideBInput = document.querySelector("#sideB")
        this.sideCInput = document.querySelector("#sideC")
        this.areaInput = document.querySelector("#area")
        this.calcButton = document.querySelector("#calcButton")
    }

    HandleEvent(){
        this.calcButton?.addEventListener("click", () => {
            this.startCalc();
        })
    }

    startCalc() {
        const sideA = Number(this.sideAInput?.value);
        const sideB = Number(this.sideBInput?.value);
        const sideC = Number(this.sideCInput?.value);
        const area = this.calcArea(sideA, sideB, sideC);
        this.renderResult(area)
    }

    calcArea(sideA: number, sideB: number, sideC: number): number {
        return (4/3) * Math.PI * sideA * sideB * sideC;
    }

    renderResult(area: number) {
        if (this.areaInput) {
            this.areaInput.value = String(area)
        }
    }

}
new Ellipszoid();