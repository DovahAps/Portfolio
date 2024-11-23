import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0, 136, 255)", "rgb(175, 255, 153)"];



export let singlePage = false;



export const info = {
    firstName: "Marcelo",
    lastName: "Alves",
    initials: "M.Alves", 
    position: "Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'amateur de café'
        },
        {
            emoji: '🌎',
            text: 'en France'
        },
        {
            emoji: "💼",
            text: "OpenClassrooms"
        },
        {
            emoji: "📧",
            text: "marceloaj96@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/profile.php?id=100088905925549",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/macoach.fitness",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DovahAps",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/marcelo-alves-725b68221/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/malvescoach",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Bonjour! Je m'appelle Marcelo, étudiant à OpenClassrooms. Je suis une personne motivée et adaptable !",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'SEO'],
            exposedTo: ['nodejs','canva']
        }
    ,
    hobbies: [
        {
            label: 'livres',
            emoji: '📖'
        },
        {
            label: 'jeux vidéo',
            emoji: '⚔️'
        },
        {
            label: 'films',
            emoji: '🎥'
        },
        {
            label: 'sport',
            emoji: '⚽'
        }

    ],
    portfolio: [ 
        {
            title: "Recherche de hotel Booki",
            live: "", 
            source: "https://github.com/DovahAps/P2-Open-Classrooms.git", 
            image: mock1
        },
        {
            title: "Architecte Sophie Bluel",
            live: "",
            source: "https://github.com/DovahAps/P3-Alves-FrontEnd.git",
            image: mock2
        },
        {
            title: "Optimisation, debugage et SEO",
            live: "",
            source: "https://github.com/DovahAps/P4-Alves-Marcelo-.git",
            image: mock3
        },
        {
            title: "Location d'appartements Kasa",
            live: "",
            source: "https://github.com/DovahAps/P5-Kasa-app.git",
            image: mock4
        },
        {
            title: "Notation de livres Mon Vieux Grimoire",
            live: "",
            source: "https://github.com/DovahAps/P7-book-app.git",
            image: mock5
        }
    ]
}