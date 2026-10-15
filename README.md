# AVEC-LA-SAGESSE

Application web de gestion d'une AVEC : épargne, crédits et remboursements des membres.

- **Administrateur** : enregistre les membres, les versements, les crédits et les remboursements ; traite les demandes (crédit / retrait) et les réclamations ; peut corriger les chiffres.
- **Membre** : se connecte avec son identifiant (son ID, par exemple `MBR-003`) et un mot de passe par défaut qu'il change à sa première connexion. Il consulte seulement son épargne, ses crédits et son historique, envoie des demandes de crédit ou de retrait, et des réclamations.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | L'application |
| `firebase-config.js` | Clé du projet Firebase (à compléter) |
| `firebase-adapter.js` | Connexion et synchronisation avec Firebase |
| `firestore.rules` | Règles de sécurité de la base (à publier dans Firebase) |
| `GUIDE-FIREBASE.md` | Installation pas à pas côté Firebase |

## Mode local et mode en ligne

Tant que `firebase-config.js` n'est pas rempli, l'application fonctionne en **mode local** : les données restent dans le navigateur de l'appareil.
Une fois Firebase configuré (voir `GUIDE-FIREBASE.md`), l'administrateur et les membres se connectent depuis n'importe quel appareil et voient les mêmes données en temps réel.
