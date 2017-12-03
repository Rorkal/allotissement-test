# allotissement-test

Projet exposant un webservice d'allotissement.

## Outils requis
 * [Nodejs](https://nodejs.org/en/download/)

## Procédure d'installation

1. Récupérer les sources de l'application avec la commande `git clone https://github.com/Rorkal/allotissement-test.git` ou en téléchargement direct depuis le même lien.

2. Dans le dossier allotissement-test récupéré, exécuter la commande `npm install` pour installer les dépendances.

## Lancement en production

1. Exécuter la commande `npm start` pour lancer le server.
 
2. Interroger l'URL <http://IP_SERVEUR:3000/allotissement/ARTICLES> où:
    * IP_SERVEUR : l'IP du serveur sur lequel est installé le service
    * NO_LOT : La liste d'articles à allotir (par exemple 123456789)

## Lancement du serveur en mode de développement

1. Exécuter la commande `npm run dev` pour lancer le server.

## Lancement du serveur en mode debug

Exécuter la commande `npm run debug` pour lancer le server.

## Lancement des tests

La commande `npm run test` permet de lancer des tests sur les services exposés par le serveur.
