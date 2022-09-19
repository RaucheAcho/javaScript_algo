function addition(nombre1: number, nombre2: number): number {
  return nombre1 + nombre2;
}

console.log(addition(2, 3));
console.log(addition(7, 6));

function additionPlus(...listeNombres: number[]) {
  let total = 0;
  listeNombres.forEach((nombre) => {
    total += nombre;
  });
  return total;
}

console.log(additionPlus(1, 2, 4, 5));
console.log(additionPlus(8, 7, 4, 5));
