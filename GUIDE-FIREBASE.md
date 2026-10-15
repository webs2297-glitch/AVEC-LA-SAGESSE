# Mettre l'application en ligne avec Firebase

Tant que ces étapes ne sont pas faites, l'application fonctionne en « mode local » : les données restent dans le navigateur de l'appareil et ne sont pas partagées.
Une fois faites, l'administrateur et les membres se connectent depuis n'importe quel appareil et voient les mêmes données, en temps réel.

Faites ces étapes une seule fois, dans la console Firebase du projet **AVEC LA SAGESSE** (console.firebase.google.com).

## 1. Activer la connexion
1. Menu de gauche : **Création** (ou « Build ») > **Authentication** > **Commencer**.
2. Onglet **Méthode de connexion** > **E-mail/Mot de passe** > activez la première option (pas le lien par e-mail) > **Enregistrer**.

## 2. Créer la base de données
1. Menu de gauche : **Création** > **Firestore Database** > **Créer une base de données**.
2. Choisissez un emplacement proche (par exemple `eur3` pour l'Europe), puis le mode **Production**, puis **Activer**.

## 3. Publier les règles de sécurité
1. Dans Firestore, ouvrez l'onglet **Règles**.
2. Remplacez tout le contenu par celui du fichier `firestore.rules` de ce dépôt.
3. Dans ce texte, remplacez `votre-email@exemple.com` par **votre adresse e-mail d'administrateur, en minuscules**.
4. Cliquez sur **Publier**.

Ces règles garantissent qu'un membre ne peut lire que sa propre fiche, ses réclamations et ses demandes, et qu'il ne peut rien modifier.

## 4. Renseigner la clé du projet
1. Roue dentée > **Paramètres du projet** > **Général** > « Vos applications » > votre application Web > **Configuration du SDK**.
2. Copiez la valeur de `apiKey` (elle commence par `AIza`).
3. Sur GitHub, ouvrez le fichier `firebase-config.js`, cliquez sur le crayon, remplacez `COLLER_ICI_LA_CLE_API` par cette valeur (en gardant les guillemets), puis enregistrez (Commit).

Cette clé n'est pas secrète : elle identifie seulement le projet.

## 5. Créer le compte administrateur
1. Ouvrez l'application, onglet **Créer le compte administrateur**.
2. Saisissez **la même adresse e-mail que dans les règles** et un mot de passe.
3. Firebase vous envoie un e-mail : cliquez sur le lien de vérification (regardez aussi les courriers indésirables).
4. Revenez sur l'application et connectez-vous avec cet e-mail.

Si des données existent déjà dans ce navigateur, l'application propose de les envoyer vers la base en ligne : acceptez.

## 6. Donner un accès aux membres
- Un nouveau membre reçoit automatiquement son accès : son identifiant est son ID (par exemple `MBR-003`) et le mot de passe par défaut est celui que vous saisissez à sa création.
- Pour un membre déjà enregistré (ou qui a oublié son mot de passe), utilisez le bouton « clé » du tableau pour définir un nouveau mot de passe par défaut.
- Au premier accès, le membre doit choisir son propre mot de passe.

## Bon à savoir
- L'offre gratuite (Spark) suffit largement pour une AVEC : environ 50 000 lectures et 20 000 écritures par jour.
- L'adresse e-mail d'administrateur est contrôlée côté serveur : personne d'autre ne peut devenir administrateur, même en créant un compte.
- Le mot de passe d'un membre ne peut pas être consulté, seulement redéfini.
