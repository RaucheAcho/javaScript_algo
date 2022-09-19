### Suivez moi sur youtube [Chaine YouTube ](https://www.youtube.com/channel/UCR1naYxlVelmMXZlhP-oi2g)

---

Soit un tableau trié d'entiers liste, trouver un entier x à partir de liste tel que la valeur de

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
est la plus petite possible (ici abs désigne la valeur absolue).
S'il y a plusieurs réponses possibles, affichez la plus petite.

**Exemple**

Pour liste = [2, 4, 7], la sortie doit être
milieuDeListe(liste) = 4.

Pour liste = [2, 4, 7, 6], la sortie doit être
milieuDeListe(a) = 4.

Pour liste = [2, 4, 7, 6, 6], la sortie doit être
milieuDeListe(liste) = 7.

Pour liste = [2, 4, 7, 6, 6, 8], la sortie doit être
milieuDeListe(liste) = 7.

**Astuce**

- Math.floor()

**Entré/Sortie**

- **[Temps limite] 4000ms (js)**
- **[entré] array.integer liste**

Un tableau non vide d'entiers, triés par ordre croissant.

_contraintes:_

1 ≤ liste.length ≤ 200,

-106 ≤ liste[i] ≤ 106.

- **[sortie] integer**
