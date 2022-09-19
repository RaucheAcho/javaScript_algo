function milieuDeListe(liste: number[]): number {
  const listePaire = liste.length % 2 === 0;
  return listePaire
    ? liste[liste.length / 2 - 1]
    : liste[Math.floor(liste.length / 2)];
}

console.log(milieuDeListe([2, 4, 7]));
console.log(milieuDeListe([2, 4, 7, 6]));
console.log(milieuDeListe([2, 4, 7, 6, 6]));
console.log(milieuDeListe([2, 4, 7, 6, 6, 8]));
