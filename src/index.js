import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function adjustLayout() {
  // Vérifie si l'écran est en mode mobile (largeur <= 580px)
  if (window.innerWidth <= 550) {
      // Sélectionne le conteneur principal
      const container = document.querySelector('.knowledgesContent');

      // Applique les styles au conteneur principal pour qu'il fonctionne en colonne unique
      if (container) {
          container.style.display = 'flex';
          container.style.flexDirection = 'column';
          container.style.width = '100%';
      }

      // Sélectionne chaque section pour la forcer en pleine largeur et en colonne
      const sections = document.querySelectorAll('.languagesFramworks, .experience, .otherSkills, .hobbies');

      sections.forEach(section => {
          section.style.width = '100%'; // Assure que chaque section prend toute la largeur
          section.style.margin = '0 0 1rem 0'; // Espacement en bas de chaque section
          section.style.padding = '1rem'; // Padding autour pour aérer le contenu
          section.style.boxSizing = 'border-box'; // Inclut le padding dans la largeur totale
          section.style.display = 'block'; // Affiche chaque section comme un bloc
          section.style.clear = 'both'; // Assure que rien ne flotte à côté
      });
  } else {
      // Réinitialise les styles pour le mode bureau
      const container = document.querySelector('.knowledgesContent');
      if (container) {
          container.style.display = ''; // Supprime le style personnalisé
          container.style.flexDirection = ''; // Supprime le style personnalisé
          container.style.width = ''; // Supprime le style personnalisé
      }

      const sections = document.querySelectorAll('.languagesFramworks, .experience, .otherSkills, .hobbies');
      sections.forEach(section => {
          section.style.width = ''; // Supprime le style personnalisé
          section.style.margin = ''; // Supprime le style personnalisé
          section.style.padding = ''; // Supprime le style personnalisé
          section.style.boxSizing = ''; // Supprime le style personnalisé
          section.style.display = ''; // Supprime le style personnalisé
          section.style.clear = ''; // Supprime le style personnalisé
      });
  }
}

// Exécuter la fonction au chargement de la page
window.addEventListener('load', adjustLayout);

// Exécuter la fonction à chaque redimensionnement de la fenêtre
window.addEventListener('resize', adjustLayout);
