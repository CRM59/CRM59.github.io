const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");

function start(){
    
}

const buttons = {
    Itinéraires: {
        element: document.getElementById("Itinéraires"),
        bgImage: "IMG/itineraires.png",
        title: "Itinéraires",
        description: "Le projet Itinéraire a pour objectif d’apprendre à manipuler une librairie donnée afin d’élaborer une application permettant de calculer le chemin le plus court d'un point A à un point B.",
        pageWeb: "https://gitlab.com/leo9440022/SAE/-/tree/main/S2/SAE_2_1_Algo/Projet?ref_type=heads"
    },
    SpaceOfQuestion: {
        element: document.getElementById("SpaceOfQuestion"),
        bgImage: "IMG/Space_Of_Questions.png",
        title: "Space Of Questions",
        description: "'Space Of Questions' est un jeu de questions ludo-pédagogique destiné à des élèves de primaire...",
        pageWeb: "https://gitlab.com/leo9440022/SAE/-/tree/main/S1/SAE%201_2%20comparaison%20d'algo/SpaceOfQuestions?ref_type=heads"
    },
    Covoiturage: {
        element: document.getElementById("Covoiturage"),
        bgImage: "IMG/Covoiturage.png",
        title: "Covoiturage",
        description: "Covoiturage est un service de covoiturage et de location de véhicules pour les employés de Blizzard Entertainment...",
        pageWeb: "https://gitlab.com/leo9440022/SAE/-/tree/main/S1/SAE%201.5_1.6%20RdB/Fantuz-Chrobot,%20Devos,%20Okubo,%20Henneron%20site%20RdB%20(Blizzard%20Entertainment)"
    },
    Banko: {
        element: document.getElementById("Banko"),
        bgImage: "IMG/Banko.png",
        title: "Banko",
        description: "Banko est un site web en cours de développement pour gérer et stocker les achats récents en local.",
        pageWeb: "https://gitlab.com/leo9440022/sites-perso/-/tree/main/Banko?ref_type=heads"
    },
    Activities: {
        element: document.getElementById("Activities"),
        bgImage: "IMG/Activities.png",
        title: "Activities",
        description: "Application développée en JavaFX pour afficher des activités provenant d'un fichier CSV...",
        pageWeb: "https://gitlab.com/leo9440022/java-projects/-/tree/main/site-alicia?ref_type=heads"
    },
    BDD: {
        element: document.getElementById("BDD"),
        bgImage: "IMG/exploitation_BDD.png",
        title: "Exploitation BDD",
        description: "Importation et gestion de données d'un fichier CSV volumineux dans PostgreSQL.",
        pageWeb: "https://gitlab.com/leo9440022/SAE/-/tree/main/S2/SAE%202.4%20BDD?ref_type=heads"
    },
    FindUrWay: {
        element: document.getElementById("FindUrWay"),
        bgImage: "IMG/FindUrWay.png",
        title: "Find Ur Way",
        description: "Site répertoriant des sites web en fonction de leur catégorie pour faciliter la recherche de contenu.",
        pageWeb: "https://gitlab.com/leo9440022/sites-perso/-/tree/main/FindUrWay?ref_type=heads"
    },
    SpaceClicker: {
        element: document.getElementById("SpaceClicker"),
        bgImage: "IMG/SpaceClicker.png",
        title: "Space Clicker",
        description: "Jeu clicker permettant de propulser une fusée toujours plus haut dans l'espace.",
        pageWeb: "https://gitlab.com/leo9440022/SAE/-/tree/main/S3/Mini-Projet?ref_type=heads"
    },
    Classification: {
        element: document.getElementById("Classification"),
        bgImage: "IMG/Classification.png",
        title: "Classification",
        description: "Le projet de classification consiste à classifier des données contenues dans un fichier CSV en fonction de critère de tri (dans l'exemple, il s'agit d'Iris triables par taille de pétale et bien plus). Ce projet fût entièrement développé en java et javaFX et les données sont ainsi représentées dans un nuage de points. L'algorithme de classification utilisé est l'algorithme K-NN permettant ainsi de classifier automatiquement les données en fonction des autres.\nCe projet m'a permis de développer les compétences suivantes:\n\n- Autonomie: L'autonomie a été au cœur même de ce projet, me permettant de m'améliorer sur ce point en cherchant par moi-même les réponses à mes questions.\n\n-Développement javaFX: J'ai ainsi appris à m'améliorer dans le développement en javaFX me permettant ainsi de faire des interface assez facilement.\n\n-Résolution de problème: Dû à un grand nombre de problèmes rencontrés durant ce projet, la résolution de problème est l'une des compétences la plus travaillée.\n\n-Travail en équipe: Travailler en équipe était évidemment l'objectif principal de ce projet et cela à permis d'améliorer certains points tels que le travail en méthodes agiles ou l'utilisation de git, par exemple.\n\nLes principaux problèmes rencontrés concernent le nuage de point, car les outils fournis par javaFX ne nous permettait pas vraiment de réaliser le projet comme prévu car trop limité.",
        pageWeb: ""
    },
    LilloChat: {
        element: document.getElementById("LilloChat"),
        bgImage: "IMG/LilloChat.png",
        title: "LilloChat",
        description: "LilloChat est un réseau social élaboré en JEE (ici, développer avec Tomcat) permettant de communiquer entre amis au même titre que le célèbre réseau social Discord. Nous avons la possibilité d'envoyer des messages / images, créer des channels, en rejoindre et même modifier nos informations personnelles (y compris la photo de profil). Ce projet est néanmoins développé sans javascript, spécificité de ce dernier.\n\nCe projet m'a permis de développer les compétences suivantes:\n\n- Autonomie: Tout au long de ce projet, nous avons eu besoin de faire preuve d'une grande autonomie pour résoudre les nombreux conflits.\n\n-Développement JEE: J'ai ainsi appris à m'améliorer dans le développement JEE notamment coté base de données mais également niveau Servlet.\n\n-Travail en équipe: Travailler en équipe était évidemment l'objectif principal de ce projet et cela à permis d'améliorer certains points tels que le travail en méthodes agiles ou l'utilisation de git, par exemple.\n\n-Design: Étant pas très doué en design, ce projet m'a permis de grandement m'améliorer sur ce point en faisant travailler ma réflexion ainsi que ma créativité.\n\nLe principal problème rencontré durant de projet est la fonctionnalité d'envoie de photos. En effet, dans le cadre de ce projet, nous avons dû sauvegarder directement les images dans la bases de données, ce qui n'est pas simple en JEE.",
        pageWeb: ""
    }
};

function activateProject(projectKey) {
    for (let key in buttons) {
        const button = buttons[key].element;
        if (key === projectKey) {
            button.style.backgroundColor = "#576C54";
            button.style.borderColor = "#CFFFB8";
            button.style.boxShadow = "0px 6px 5px rgb(37, 37, 37)";
            projectImage.src = buttons[key].bgImage;
            projectTitle.innerText = buttons[key].title;
            projectDescription.innerText = buttons[key].description;
            pageWeb = buttons[key].pageWeb;
        } else {
            button.style.backgroundColor = "transparent";
            button.style.borderColor = "#F6F6F6";
            button.style.boxShadow = "none";
        }
    }
}

function openGitProject() {
    window.location = pageWeb;
}

function openMail() {
    window.location = "mailto:leof150105@gmail.com";
}

function openGitlab() {
    window.location = "https://gitlab.com/leo9440022";
}

function openLinkedin() {
    window.location = "https://www.linkedin.com/in/l%C3%A9o-fantuz-chrobot-9157b229b/";
}

// Assign event listeners to each button
for (let key in buttons) {
    buttons[key].element.addEventListener("click", () => activateProject(key));
}