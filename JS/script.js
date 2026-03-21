document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DICTIONNAIRE DE TRADUCTION (i18n)
    // ==========================================
    const translations = {
        fr: {
            "nav_profil": "// Profil",
            "nav_skills": "// Compétences",
            "nav_experience": "// Expérience",
            "nav_perso": "// Personnel",
            "nav_projets": "// Scolaire",
            "nav_contact": "// Contact",
            "hero_title": "Bonjour, je suis Léo.",
            "hero_subtitle": "Développeur Full-Stack",
            "hero_desc": "Étudiant en 3ème année de BUT Informatique à Villeneuve d'Ascq. Créateur d'expériences numériques, actuellement développeur Full-Stack en alternance chez Nextoo.",
            "hero_btn_projects": "Mon parcours",
            "hero_btn_cv": "Mon CV",
            "section_about": "À propos",
            "about_text": "Passionné par le code créatif, j'aime transformer des idées complexes en interfaces fluides et intuitives. Curieux de nature, j'explore constamment de nouvelles technologies pour enrichir mon panel de compétences Full-Stack.",
            "skill_curiosity": "Curiosité",
            "skill_passion": "Passion",
            "skill_autonomy": "Autonomie",
            "skill_patience": "Patience",
            "section_stack": "Stack Technique globale",
            "section_experience": "Parcours Professionnel",
            "section_perso": "Projets Personnels",
            "section_projects": "Projets Scolaires",
            "section_contact": "Contact",
            
            "company_nextoo_desc": "Entreprise de Services du Numérique (ESN) spécialisée dans l'accompagnement et la transformation digitale sur-mesure.",
            "title_my_journey": "Mon parcours chez eux",
            "company_nextoo_journey": "J'ai débuté mon aventure chez Nextoo en mars 2025 à travers un stage intensif au sein de la « Nextoo Academy ». À l'issue de cette période hautement formatrice, j'ai eu l'opportunité de poursuivre l'aventure en alternance dès septembre 2026. J'ai d'abord intégré le projet Portail Nextoo Formateur (PNF), avant de rejoindre en parallèle le projet Gestion Des Stocks (GDS) en novembre 2026. Cette évolution m'a permis d'acquérir une forte autonomie et de consolider mon expertise Full-Stack et DevOps.",

            // --- PROJETS NEXTOO ---
            "proj_nextoo_academy_title": "Stage - Nextoo Academy",
            "proj_nextoo_academy_desc": "Immersion technique et formation interne intensive (Mars 2025 - Aujourd'hui).",
            "proj_nextoo_academy_long": "<strong>Période :</strong> De Mars 2025 à Aujourd’hui<br><strong>Rôle :</strong> Développeur Full-Stack<br><strong>Méthodologie :</strong> Agile (Scrum)<br><br>Dans le cadre de mon stage, j’ai intégré la Nextoo Academy. Ce programme m’a permis d’enrichir considérablement mes compétences Full-Stack et d'élargir mon bagage technique aux pratiques DevOps et à la conformité RGPD.<br><br><strong>Missions et réalisations :</strong><ul><li>Développement en Java-EE (JPA/Hibernate, Spring Boot, API REST, POO avancée).</li><li>Développement Front-End en Vue.js (Promesses, i18n).</li><li>Mise en place de tests automatisés (JUnit, Mockito) et application des règles de Clean Code via SonarQube.</li><li>Initiation DevOps : Conteneurisation Docker, pipelines GitLab-CI, déploiement PostgreSQL.</li><li>Suivi de formation Scrum By Nextoo (Rituels, rôles, manifeste).</li></ul>",
            "proj_nextoo_academy_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>GitLab-CI</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Agile Scrum</span>",

            "proj_nextoo_pnf_title": "Alternance - Projet PNF",
            "proj_nextoo_pnf_desc": "Développement du \"Portail Nextoo Formateur\" (Septembre 2026 - Aujourd'hui).",
            "proj_nextoo_pnf_long": "<strong>Période :</strong> Septembre 2026 à Aujourd’hui<br><strong>Rôle :</strong> Développeur Full-Stack<br><strong>Méthodologie :</strong> Agile (Scrum)<br><br>Durant mon alternance, j’ai intégré le projet PNF permettant aux tuteurs de la Nextoo Academy de suivre l'avancée de leurs stagiaires (assignation de formations, commentaires, suivi de compétences).<br><br><strong>Missions et réalisations :</strong><ul><li>Développement Full-Stack (Java/Spring Boot, Vue.js, PostgreSQL).</li><li>Découverte de l'écosystème DevOps avancé (Trivy, ArgoCD, Liquibase pour l'automatisation des BDD).</li><li>Participation active à l'ensemble des cérémonies Scrum et documentation via Jira/Confluence/Swagger.</li></ul>",
            "proj_nextoo_pnf_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>ArgoCD / Trivy</span> <span class='skill-badge'>Liquibase</span> <span class='skill-badge'>Swagger</span>",

            "proj_nextoo_gds_title": "Alternance - Projet GDS",
            "proj_nextoo_gds_desc": "Développement du projet \"Gestion des Stocks\" (Novembre 2026 - Aujourd'hui).",
            "proj_nextoo_gds_long": "<strong>Période :</strong> Novembre 2026 à Aujourd’hui<br><strong>Rôle :</strong> Développeur Full-Stack<br><strong>Méthodologie :</strong> Agile (Scrum)<br><br>En parallèle du projet PNF, j’ai réintégré le projet GDS, visant à recenser le matériel et les véhicules de l’entreprise, tout en assurant le suivi de leurs attributions et de leur maintenance.<br><br><strong>Missions et réalisations :</strong><ul><li>Consolidation d'expertise sur la stack Java/Spring et Vue.js avec une forte exigence sur la qualité du code.</li><li>Intervention poussée sur la chaîne d'intégration et de déploiement continu (CI/CD).</li><li>Gestion des environnements locaux et distants, utilisation de Postman/Bruno pour l'architecture d'API.</li></ul>",
            "proj_nextoo_gds_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Docker / CI-CD</span> <span class='skill-badge'>Liquibase</span> <span class='skill-badge'>Bruno</span>",

            // --- PROJETS PERSONNELS ---
            "proj_scarlea_title": "Scarlea",
            "proj_scarlea_desc": "Application mobile React-Native de suivi du cycle menstruel.",
            "proj_scarlea_long": "<strong>Période :</strong> De Mars 2026 à Aujourd’hui<br><strong>Rôle :</strong> Développeur Full-Stack<br><br>En parallèle de mon alternance, je réalise \"Scarlea\", une application mobile centralisant le suivi des cycles menstruels et des conseils (santé, beauté). 100% gratuite, elle m'a permis de gérer un projet de A à Z en autonomie complète.<br><br><strong>Missions et réalisations :</strong><ul><li>Développement back-end en Java (Spring Boot, Spring MVC, JPA/Hibernate, API REST).</li><li>Développement d'interfaces mobiles en JavaScript avec React-Native (Expo-Router).</li><li>Mise en place de l'infrastructure Docker (Windows/Linux) et versioning de la base PostgreSQL avec Liquibase.</li><li>Conception stratégique, choix d'architecture et gestion de projet via Jira et GitHub.</li></ul>",
            "proj_scarlea_tech": "<span class='skill-badge'>Spring Boot</span> <span class='skill-badge'>React-Native (Expo)</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>Liquibase</span>",

            // --- PROJETS SCOLAIRES ---
            "proj_startup_title": "Startup Week - TransmissionPro",
            "proj_startup_desc": "Application médicale avec transcription vocale (React.js / Spring).",
            "proj_startup_long": "<strong>Période :</strong> Du 9 au 13 Mars 2026<br><strong>Rôle :</strong> Développeur Full-Stack<br><strong>Méthodologie :</strong> Agile (Scrum)<br><br>Lors de ma 3ème année de BUT, au sein d’une équipe de 5, j’ai travaillé sur “TransmissionPro”, une application permettant aux soignants de réaliser leurs transmissions médicales via transcription vocale (API OpenAI).<br><br><strong>Missions et réalisations :</strong><ul><li>Sécurisation de l'application via Spring Security (filtres de requêtes, CORS).</li><li>Développement Front-End avec React.js et React-Router (SPA).</li><li>Déploiement PostgreSQL sous Docker et versioning avec Liquibase.</li><li>Pilotage de projet et API via GitLab Issues et Bruno.</li></ul>",
            "proj_startup_tech": "<span class='skill-badge'>Spring Boot</span> <span class='skill-badge'>React.js</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>Liquibase</span> <span class='skill-badge'>OpenAI API</span>",

            "proj_lillochat_title": "LilloChat",
            "proj_lillochat_desc": "Réseau social JEE sans JavaScript (Apache Tomcat, PostgreSQL).",
            "proj_lillochat_long": "<strong>Période :</strong> Février-Mars 2025<br><strong>Rôle :</strong> Développeur JEE<br><br>Lors de ma 2ème année de BUT, j'ai conçu en binôme une plateforme de discussion en environnement JEE, adossée à un serveur Apache Tomcat et une BDD PostgreSQL. Contrainte majeure : concevoir l'intégralité de l'application sans utiliser le moindre script JavaScript.<br><br><strong>Missions et réalisations :</strong><ul><li>Développement en Java Enterprise Edition (POO).</li><li>Intégration HTML/CSS et gestion de version avec Git.</li><li>Utilisation des Sockets sous Apache Tomcat.</li></ul>",
            "proj_lillochat_tech": "<span class='skill-badge'>Java EE</span> <span class='skill-badge'>Apache Tomcat</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>HTML/CSS</span>",

            "proj_steveio_title": "Steve.io",
            "proj_steveio_desc": "Jeu web SPA en JavaScript natif (Clone d'Agar.io).",
            "proj_steveio_long": "<strong>Période :</strong> Mars 2025<br><strong>Rôle :</strong> Développeur JavaScript<br><br>Jeu web reprenant les mécaniques du célèbre Agar.io, revisité dans l'univers de Minecraft. Contrainte technique : conception sous forme de Single Page Application (SPA) en utilisant exclusivement du JavaScript natif (sans framework).<br><br><strong>Missions et réalisations :</strong><ul><li>Développement orienté objet en JavaScript natif.</li><li>Création d'une architecture Front-End dynamique.</li><li>Travail en équipe sur 3 semaines avec gestion de branches Git.</li></ul>",
            "proj_steveio_tech": "<span class='skill-badge'>JavaScript Natif</span> <span class='skill-badge'>HTML/CSS</span> <span class='skill-badge'>Git</span>",

            "proj_space_clicker_title": "Space Clicker",
            "proj_space_clicker_desc": "Jeu incrémental en Java exécuté dans la console.",
            "proj_space_clicker_long": "<strong>Période :</strong> Mars 2025<br><strong>Rôle :</strong> Développeur Back-End<br><strong>Méthodologie :</strong> Agile Scrum<br><br>Conception et développement d'un clicker (jeu incrémental) en Java, doté d'une interface textuelle s'exécutant dans la console, réalisé lors d'un défi intensif de 3 jours.<br><br><strong>Missions et réalisations :</strong><ul><li>Développement Java (Programmation Orientée Objet).</li><li>Application rigoureuse de la méthodologie Scrum (Daily, Sprints de 2h, Review, Planning).</li><li>Travail d'équipe avec administration de dépôts Git.</li></ul>",
            "proj_space_clicker_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>Agile Scrum</span> <span class='skill-badge'>Git</span>",

            "proj_itineraires_title": "Itinéraires",
            "proj_itineraires_desc": "Calcul d'itinéraires multi-critères (prix, temps, CO2) en JavaFX.",
            "proj_itineraires_long": "La SAE 2.01/2.02 a pour objectif de calculer les plus courts trajets entre villes, en considérant le prix, le temps et le taux de CO2.<br><br><strong>Compétences :</strong><ul><li>Figma pour la maquette.</li><li>IHM avec JavaFX.</li><li>Algorithmes en Java (Graphes).</li></ul>",
            "proj_itineraires_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>JavaFX</span>",
            
            "proj_space_title": "Space Of Questions",
            "proj_space_desc": "Jeu éducatif Java pour primaires avec gestion de données.",
            "proj_space_long": "Jeu de questions ludo-pédagogique. 4 modes de jeu.<br><br><strong>Compétences :</strong><ul><li>Stockage et manipulation (CSV).</li><li>Débogage autonome.</li></ul>",
            "proj_space_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>CSV</span>",
            
            "proj_carpool_title": "Covoiturage",
            "proj_carpool_desc": "Service web complet HTML/CSS pour gestion de flotte en entreprise.",
            "proj_carpool_long": "Service de covoiturage à destination des employés.<br><br><strong>Compétences :</strong><ul><li>Maîtrise HTML & CSS.</li><li>Interface responsive.</li></ul>",
            "proj_carpool_tech": "<span class='skill-badge'>HTML5</span> <span class='skill-badge'>CSS3</span>"
        },
        en: {
            "nav_profil": "// Profile",
            "nav_skills": "// Skills",
            "nav_experience": "// Experience",
            "nav_perso": "// Personal",
            "nav_projets": "// School",
            "nav_contact": "// Contact",
            "hero_title": "Hi, I'm Léo.",
            "hero_subtitle": "Full-Stack Developer",
            "hero_desc": "3rd-year IT student in Villeneuve d'Ascq. Creator of digital experiences, currently Full-Stack Developer as a work-study student at Nextoo.",
            "hero_btn_projects": "My Journey",
            "hero_btn_cv": "My Resume",
            "section_about": "About me",
            "about_text": "Passionate about creative coding, I love transforming complex ideas into smooth and intuitive interfaces. Naturally curious, I constantly explore new technologies to expand my Full-Stack skillset.",
            "skill_curiosity": "Curiosity",
            "skill_passion": "Passion",
            "skill_autonomy": "Autonomy",
            "skill_patience": "Patience",
            "section_stack": "Global Tech Stack",
            "section_experience": "Professional Journey",
            "section_perso": "Personal Projects",
            "section_projects": "School Projects",
            "section_contact": "Contact",
            
            "company_nextoo_desc": "Digital Services Company (ESN) specialized in tailor-made digital transformation and support.",
            "title_my_journey": "My journey with them",
            "company_nextoo_journey": "I started my adventure at Nextoo in March 2025 through an intensive internship within the 'Nextoo Academy'. Following this highly formative period, I continued as a work-study student from September 2026. I first joined the Nextoo Trainer Portal (PNF) project, before simultaneously working on the Inventory Management (GDS) project in November 2026. This progression allowed me to gain strong autonomy and solidify my Full-Stack and DevOps expertise.",

            "proj_nextoo_academy_title": "Internship - Nextoo Academy",
            "proj_nextoo_academy_desc": "Technical immersion and intensive internal training.",
            "proj_nextoo_academy_long": "<strong>Period:</strong> From March 2025 to Present<br><strong>Role:</strong> Full-Stack Developer<br><strong>Methodology:</strong> Agile (Scrum)<br><br>As part of my internship at Nextoo, I joined the Nextoo Academy. This internal training program allowed me to considerably enrich my skills in Full-Stack development and broaden my technical background in DevOps practices.<br><br><strong>Missions & Achievements:</strong><ul><li>JAVA-EE Development (JPA/Hibernate, Spring Boot, REST APIs).</li><li>Vue.js Development (promises, i18n).</li><li>Docker Containerization and GitLab-CI pipelines.</li><li>Automated Unit Testing (JUnit, Mockito).</li><li>Scrum By Nextoo training.</li></ul>",
            "proj_nextoo_academy_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>GitLab-CI</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Agile</span>",

            "proj_nextoo_pnf_title": "Work-Study - PNF Project",
            "proj_nextoo_pnf_desc": "Development of the 'Nextoo Trainer Portal'.",
            "proj_nextoo_pnf_long": "<strong>Period:</strong> From September 2026 to Present<br><strong>Role:</strong> Full-Stack Developer<br><strong>Methodology:</strong> Agile (Scrum)<br><br>During my work-study at Nextoo, I joined the PNF project allowing Nextoo Academy tutors to track their trainees' progress.<br><br><strong>Missions & Achievements:</strong><ul><li>Advanced Full-Stack Development (Java/Spring, JS/Vue.js).</li><li>Continuous Deployment and GitOps (ArgoCD, GitLab-CI).</li><li>Database schema automation with Liquibase.</li></ul>",
            "proj_nextoo_pnf_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>ArgoCD</span> <span class='skill-badge'>Liquibase</span>",

            "proj_nextoo_gds_title": "Work-Study - GDS Project",
            "proj_nextoo_gds_desc": "Development of the 'Inventory Management' project.",
            "proj_nextoo_gds_long": "<strong>Period:</strong> From November 2026 to Present<br><strong>Role:</strong> Full-Stack Developer<br><strong>Methodology:</strong> Agile (Scrum)<br><br>In parallel with the PNF project, I rejoined the GDS project, aimed at inventorying the company's equipment and vehicles.<br><br><strong>Missions & Achievements:</strong><ul><li>Java-EE Development (JPA/Hibernate, Spring REST).</li><li>Complex Vue.js Front-End Development.</li><li>Integration of advanced CI/CD pipelines (ArgoCD, Trivy).</li></ul>",
            "proj_nextoo_gds_tech": "<span class='skill-badge'>Java / Spring Boot</span> <span class='skill-badge'>Vue.js</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>Liquibase</span>",

            "proj_scarlea_title": "Scarlea",
            "proj_scarlea_desc": "React-Native menstrual cycle tracking mobile application.",
            "proj_scarlea_long": "<strong>Period:</strong> March 2026 to Present<br><strong>Role:</strong> Full-Stack Developer<br><br>Creation of a 100% free mobile application centralizing menstrual cycle tracking and wellness tips. A personal project designed from scratch.<br><br><strong>Missions & Achievements:</strong><ul><li>Back-End Development (Java, Spring Boot, API REST).</li><li>Mobile Front-End Development in React-Native (Expo-Router).</li><li>Docker infrastructure and DB versioning with Liquibase.</li></ul>",
            "proj_scarlea_tech": "<span class='skill-badge'>Spring Boot</span> <span class='skill-badge'>React-Native</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>Docker</span>",

            "proj_startup_title": "Startup Week - TransmissionPro",
            "proj_startup_desc": "Medical application with voice transcription (React.js / Spring).",
            "proj_startup_long": "<strong>Period:</strong> March 9 to 13, 2026<br><strong>Role:</strong> Full-Stack Developer<br><br>During a 5-day hackathon, I worked on 'TransmissionPro', an app allowing healthcare workers to write medical reports via voice transcription (OpenAI API).<br><br><strong>Missions & Achievements:</strong><ul><li>App security via Spring Security (CORS, filters).</li><li>Front-End development with React.js (SPA).</li><li>PostgreSQL deployment under Docker and Liquibase versioning.</li></ul>",
            "proj_startup_tech": "<span class='skill-badge'>Spring Boot</span> <span class='skill-badge'>React.js</span> <span class='skill-badge'>Docker</span> <span class='skill-badge'>Liquibase</span>",

            "proj_lillochat_title": "LilloChat",
            "proj_lillochat_desc": "JEE social network without JavaScript (Apache Tomcat).",
            "proj_lillochat_long": "<strong>Period:</strong> Feb-March 2025<br><strong>Role:</strong> JEE Developer<br><br>Developed a chat platform in a JEE environment, backed by an Apache Tomcat server and PostgreSQL. Major constraint: no JavaScript allowed.<br><br><strong>Missions & Achievements:</strong><ul><li>Java Enterprise Edition Development (OOP).</li><li>HTML/CSS integration.</li><li>Socket programming under Apache Tomcat.</li></ul>",
            "proj_lillochat_tech": "<span class='skill-badge'>Java EE</span> <span class='skill-badge'>Tomcat</span> <span class='skill-badge'>PostgreSQL</span> <span class='skill-badge'>HTML/CSS</span>",

            "proj_steveio_title": "Steve.io",
            "proj_steveio_desc": "Vanilla JavaScript SPA web game (Agar.io clone).",
            "proj_steveio_long": "<strong>Period:</strong> March 2025<br><strong>Role:</strong> JavaScript Developer<br><br>Web game recreating Agar.io mechanics in a Minecraft universe. Technical constraint: Single Page Application (SPA) using exclusively native JavaScript (no frameworks).<br><br><strong>Missions & Achievements:</strong><ul><li>Object-Oriented Programming in native JS.</li><li>Dynamic Front-End architecture.</li></ul>",
            "proj_steveio_tech": "<span class='skill-badge'>Vanilla JS</span> <span class='skill-badge'>HTML/CSS</span> <span class='skill-badge'>Git</span>",

            "proj_space_clicker_title": "Space Clicker",
            "proj_space_clicker_desc": "Java incremental game executed in the console.",
            "proj_space_clicker_long": "<strong>Period:</strong> March 2025<br><strong>Role:</strong> Back-End Developer<br><strong>Methodology:</strong> Agile Scrum<br><br>Design and development of an incremental game in Java with a console-based text interface, built during a 3-day intensive challenge.<br><br><strong>Missions & Achievements:</strong><ul><li>Java Development (OOP).</li><li>Strict application of Scrum methodology (2h Sprints, Dailies).</li></ul>",
            "proj_space_clicker_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>Agile Scrum</span> <span class='skill-badge'>Git</span>",

            "proj_itineraires_title": "Itineraries",
            "proj_itineraires_desc": "Multi-criteria routing calculation (price, time, CO2) in JavaFX.",
            "proj_itineraires_long": "Calculates shortest paths between cities. <strong>Skills:</strong> Figma, JavaFX, Algorithms.",
            "proj_itineraires_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>JavaFX</span>",
            
            "proj_space_title": "Space Of Questions",
            "proj_space_desc": "Educational Java game for primary schools with data management.",
            "proj_space_long": "Quiz game. <strong>Skills:</strong> Advanced Java, CSV.",
            "proj_space_tech": "<span class='skill-badge'>Java</span> <span class='skill-badge'>CSV</span>",
            
            "proj_carpool_title": "Carpooling",
            "proj_carpool_desc": "Full HTML/CSS web service for corporate fleet management.",
            "proj_carpool_long": "Carpooling service. <strong>Skills:</strong> HTML5 & CSS3.",
            "proj_carpool_tech": "<span class='skill-badge'>HTML5</span> <span class='skill-badge'>CSS3</span>"
        }
    };

    let currentLang = 'fr';
    const langToggleBtn = document.getElementById('langToggle');

    function updateLanguage(lang) {
        currentLang = lang;
        langToggleBtn.innerText = lang === 'fr' ? 'EN' : 'FR';
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });

        playHeroAnimation();
    }

    langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(newLang);
    });

    // ==========================================
    // 2. ANIMATION HERO (Anime.js)
    // ==========================================
    function playHeroAnimation() {
        const textWrapper = document.querySelector('.ml11 .letters');
        if(textWrapper) {
            textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
            anime.remove('.ml11 .line, .ml11 .letter');
            
            anime.timeline({loop: false})
              .add({ targets: '.ml11 .line', scaleY: [0,1], opacity: [0.5,1], easing: "easeOutExpo", duration: 700 })
              .add({ targets: '.ml11 .line', translateX: [0, textWrapper.getBoundingClientRect().width + 10], easing: "easeOutExpo", duration: 700, delay: 100 })
              .add({ targets: '.ml11 .letter', opacity: [0,1], easing: "easeOutExpo", duration: 600, offset: '-=775', delay: (el, i) => 34 * (i+1) })
              .add({ targets: '.ml11 .line', opacity: 0, duration: 800, easing: "easeOutExpo", delay: 200 });
        }
    }
    
    playHeroAnimation();

    // ==========================================
    // 3. PARTICLES.JS
    // ==========================================
    if(document.getElementById('particles-js') && typeof particlesJS !== "undefined"){
        particlesJS('particles-js', {
          "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#818cf8" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#818cf8", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "grab" },
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 140, "line_linked": { "opacity": 0.4 } },
              "push": { "particles_nb": 4 }
            }
          },
          "retina_detect": true
        });
    }

    // ==========================================
    // 4. SCROLL REVEAL & TILT & MAGNETIC
    // ==========================================
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(reveal => revealOnScroll.observe(reveal));

    if(typeof VanillaTilt !== 'undefined'){
        VanillaTilt.init(document.querySelectorAll(".js-tilt"), { max: 10, speed: 400, glare: true, "max-glare": 0.2, scale: 1.02 });
    }

    document.querySelectorAll('.btn-magnetic, .magnetic-icon').forEach(elem => {
        elem.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const moveX = (x - rect.width / 2) * 0.2; 
            const moveY = (y - rect.height / 2) * 0.2;
            
            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        elem.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

    // ==========================================
    // 5. BOUTON RETOUR EN HAUT
    // ==========================================
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) backToTopBtn.classList.add("show");
        else backToTopBtn.classList.remove("show");
    });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // ==========================================
    // 6. GESTION DE LA MODALE ET DE L'IMAGE
    // ==========================================
    const modal = document.getElementById("projectModal");
    const closeModalBtn = document.querySelector(".close-modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalTech = document.getElementById("modalTech");
    const modalImage = document.getElementById("modalImage"); // Balise img de la popup
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectKey = card.getAttribute("data-project"); 
            
            // 1. Gestion des textes (Titre et Description)
            modalTitle.setAttribute("data-i18n", `proj_${projectKey}_title`);
            modalDesc.setAttribute("data-i18n", `proj_${projectKey}_long`);
            modalTitle.innerHTML = translations[currentLang][`proj_${projectKey}_title`];
            modalDesc.innerHTML = translations[currentLang][`proj_${projectKey}_long`];

            // 2. Gestion des badges techniques
            const techKey = `proj_${projectKey}_tech`;
            if (translations[currentLang][techKey]) {
                modalTech.innerHTML = translations[currentLang][techKey];
                modalTech.style.display = "flex"; 
            } else {
                modalTech.style.display = "none";
            }

            // 3. Récupération et affichage de l'image du projet
            const cardImg = card.querySelector(".project-image img");
            if(cardImg && cardImg.src) {
                modalImage.src = cardImg.src;
                modalImage.alt = cardImg.alt || "Image du projet";
                modalImage.style.display = "block"; // Affiche l'image
            } else {
                modalImage.style.display = "none"; // Cache s'il n'y a pas d'image
            }

            // 4. Affichage de la modale
            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    const closeModal = () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    };

    closeModalBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});