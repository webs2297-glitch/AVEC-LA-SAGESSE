// Configuration Firebase de l'application AVEC LA SAGESSE.
//
// À COMPLÉTER : Firebase Console > roue dentée > Paramètres du projet > Général >
// « Vos applications » > Application Web > « Configuration du SDK » (case « Config »).
// Copiez la valeur de apiKey (qui commence par AIza) à la place de COLLER_ICI_LA_CLE_API.
//
// Ces valeurs identifient seulement le projet : elles ne sont pas secrètes.
// La protection des données vient des règles Firestore (fichier firestore.rules).
//
// Tant que apiKey n'est pas remplie, l'application reste en « mode local »
// (données enregistrées uniquement dans le navigateur, sans synchronisation).
window.FIREBASE_CONFIG = {
  apiKey: "COLLER_ICI_LA_CLE_API",
  authDomain: "avec-la-sagesse.firebaseapp.com",
  projectId: "avec-la-sagesse"
};
