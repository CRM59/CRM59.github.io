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