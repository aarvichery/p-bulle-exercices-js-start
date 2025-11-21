# 🧪 Exercices JavaScript - Débutants (avec tests jest)

Ce projet contient une série de petits exercices en **JavaScript moderne (ESM)**, conçus pour des **débutants complets**. Chaque exercice est accompagné de **tests unitaires** automatisés avec [jest](https://jestjs.io/), pour valider que la solution fonctionne correctement.

---

## 🚀 Objectifs pédagogiques

- Apprendre les bases de JavaScript (fonctions, conditions, chaînes, etc.)
- Comprendre la syntaxe des modules ESM (`export` / `import`)
- Écrire du code testable
- Découvrir les tests unitaires avec jest

---

## 📁 Structure du projet

```yaml
exercices/
├── amusement-park/
│ ├── amusement-park.js # Fichier à compléter
│ └── amusement-park.spec.js # Tests unitaires
├── annalyns-infiltration/
├── appointment-time/
├── bird-watcher/
```

Chaque dossier contient :

- Un fichier `.js` avec l’énoncé en commentaire + une fonction à écrire
- Un fichier `.spec.js` avec des tests à passer

---

## 🛠️ Installation

1. Faites un fork de ce repo
2. Assurez-vous que votre enseignant a accès en écriture à votre fork
3. Clonez votre fork sur votre poste de travail (à l'école et/ou chez vous).  
   Conseil: clonez sur le disque fixe (p.ex: Documents/Github). Ne clonez _PAS_ sur votre SSD. Cela peut vous éviter des désagréments si votre SSD n'est pas avec vous un jour.
4. Installer les dépendances :

   ```bash
   npm install
   ```

## Ensuite

Faites autant d'exercices que possible pour faire monter votre niveau sur [bullejs](https://bullejs.w3.pm2etml.ch/).

Pour chaque exercice:

- Signalez le début d'activité avec "Prendre" sur [bullejs](https://bullejs.w3.pm2etml.ch/exo).
- Complétez la fonction dans son fichier dans votre repo local. Une fois modifiée, lancez les tests et corrigez si nécessaire jusqu'à ce que tout fonctionne.
- Faites `commit / push`
  - Veillez à bien nommer votre commit
  - Dans la première ligne de la description, indiquez entre `[ ]` le temps _en minutes_ qu'il vous a fallu pour faire le contenu du commit, suivi du status `[WIP]` ou `[DONE]`
- Signalez la fin de l'exercice avec le bouton "Fini". Saisissez l'URL du commit que vous venez de `push`
- Choisissez et démarrez un nouvel exercice sans plus attendre

Bonne chance et bon apprentissage ! 💡

## ✅ Lancer les tests

```bash
npm run test
```

Vitest exécutera tous les tests de chaque dossier.

## ✅ Lancer 1 test spécifique

```bash
npm run test -- exercices/00-hello/00-hello.spec.js
```

## Debugger

Pour bien développer, il faut de bons outils. Parmi ceux-cis, il y a naturellement le debugger! Voici comment l'utiliser:

- placer un point d'arret dans le fichier `exercices/lasagna/lasagna.js`
- ouvrir le fichier `exercices/lasagna/lasagna.spec.js`
- appuyer sur la touche f5
- le debugger va s'arrêter sur votre point d'arret.

Bon débogage

## Sources

© 2021 Exercism — MIT License.
Source: Exercism JavaScript Track (exercism.org)
