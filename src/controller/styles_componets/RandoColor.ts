import { useState } from "react";

const GenerateColor = (cor: string) => {
    let genecolor = Number(cor)
    genecolor += 1
    let newCor=genecolor.toString().substring(0,6);
    console.log(newCor)
    return newCor;

};
export default GenerateColor;