const chispum = require("./chispum");


describe("chispum", () => {
    test("debería imprimir 1 si se recibe 1", () =>{
        const expected = 1;
        const result = chispum(1);
        expect(expected).toBe(result);
    });
    test("Debería imprimir chis si recibe un multiplo de 3",() =>{
        const expected = "chis";
        const result = chispum(9);
    });
    test("Debería imprimir pum si recibe multiplos de 5",() =>{
        const expected = "pum";
        const result = chispum(20);
    });
    test("Debería imprimir chispum si recibe multiplos de 3 y 5",() =>{
        const expected = "chis";
        const result = chispum(45);
    });
});