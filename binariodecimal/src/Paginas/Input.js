import React, { useState } from "react";

export default function Input() {
    const [bin, setBin] = useState(0);
    const [bindec, setbindec] = useState(0);

    const conversor_binario_decimal = () => {
        let binario = bin;
        let decimal = 0;
        var diferente = 0;

        let arraybinario = binario.split("");

        for(let b = 0; b < arraybinario.length; b++) {
            if(arraybinario[b] != 0 && arraybinario[b] != 1) diferente = 1;
        }
        
        if(diferente == 1) {
            alert("Digite somete 0 e 1");
        } else if(binario.length > 8) {
            alert("Digite um número de no máximo 8 digitos");
        } else {
            for(let c = 0; c < binario.length; c++) {
                decimal += Math.pow(2, c) * binario[binario.length - c - 1];
            }
            setbindec(decimal);
        }
    }

    return(
        <div className="Input">
            <h1>Conversor de binário para decimal</h1>
            <label>Número binário:</label>&nbsp;
            <input type="text" id="binario" onChange={(event) => setBin(event.target.value)}></input><br/><br/>
            <button onClick={conversor_binario_decimal}>Converter</button><br/><br/>
            <label>Resultado em decimal</label><br/>
            <label>{bindec}</label>
        </div>
    );
}