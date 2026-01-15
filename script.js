/**
 * PROJET : NextStep
 * AUTEUR : SAHOUEGNON Israel Jules-Christ
 * RÔLE : Gestion de l'inscription et de la discussion communautaire
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTION DE L'INSCRIPTION (inscription.html)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Bloque le rechargement de la page
            
            // Animation du bouton pour faire professionnel
            const submitBtn = this.querySelector('button');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = "Initialisation de votre accès... <i class='fas fa-spinner fa-spin'></i>";
            submitBtn.disabled = true;

            // Simulation d'une création de compte sécurisée
            setTimeout(() => {
                alert("Félicitations ! Votre profil a été validé par l'écosystème NextStep. Bienvenue dans la communauté, Israel Jules-Christ vous attend.");
                window.location.href = "discussion.html"; // Redirection vers le chat
            }, 2000);
        });
    }

    // 2. GESTION DU CLAVIER (discussion.html)
    const chatInput = document.getElementById('wa-input');
    if (chatInput) {
        // Permet d'envoyer le message en appuyant sur la touche "Entrée"
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// 3. FONCTION D'ENVOI DE MESSAGE (Style WhatsApp)
function sendMessage() {
    const inputField = document.getElementById('wa-input');
    const chatBox = document.getElementById('chat-box');
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        // Supprime le message d'aide (hint) s'il est présent
        const hint = document.querySelector('.chat-hint');
        if (hint) hint.remove();

        // Création de la bulle de message
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('sent'); // Style défini dans le CSS
        
        // Calcul de l'heure actuelle (Format HH:MM)
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        // Contenu de la bulle avec les doubles ticks bleus
        messageBubble.innerHTML = `
            ${messageText}
            <span style="font-size: 10px; opacity: 0.7; display: block; text-align: right; margin-top: 5px;">
                ${time} <i class="fas fa-check-double" style="color: #4fc3f7; margin-left: 5px;"></i>
            </span>
        `;

        // Ajout du message dans la zone de chat
        chatBox.appendChild(messageBubble);

        // Reset du champ de saisie
        inputField.value = "";

        // Scroll automatique vers le bas pour voir le nouveau message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// 4. FONCTION POUR LES BOUTONS ACCESSOIRES (Emoji, Photo, etc.)
// Pour ta démo, on simule une ouverture de galerie
document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-camera') || icon.classList.contains('fa-paperclip')) {
            alert("Accès à la galerie photo / documents activé pour le test étudiant.");
        }
    });
});