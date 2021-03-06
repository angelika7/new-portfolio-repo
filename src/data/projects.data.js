import url1 from './../assets/images/project-salon.png';
import url2 from './../assets/images/project-travel.png';
import url3 from './../assets/images/project-photography.png';
import url4 from './../assets/images/project-cukiernia.png';
import url5 from './../assets/images/project-portfolio.png';
import url6 from './../assets/images/project-weather.png';
import url7 from './../assets/images/project-cafes.png';
import url8 from './../assets/images/project-memo.png';
import url9 from './../assets/images/project-cv.png';
import url10 from './../assets/images/project-books.png';

const appTitle = "What's the weather?";
const check = '\u25CF';

const data = {
    projects: [
        {id: 0, url: url10, alt: 'Zdjęcie aplikacji - Re-reading books', info: 'Aplikacja do sprzedaży książek', title: '"Re-reading books" APP W BUDOWIE', backInfo:`${check} HTML5 (Pug) ${check} CSS3 (SCSS) ${check} JS ${check} Express.js ${check} MongoDB + Mongoose`, isFlipped: false, live: '.', github: '.', isActive: false},
        {id: 1, url: url9, alt: 'Zdjęcie aplikacji - Portfolio v2.0', info: 'Strona internetowa', title: '"Portfolio v2.0"', isFlipped: false, backInfo: `${check} React.js ${check} CSS3 (SCSS) ${check} JS`, live: 'https://angelika7.github.io/new-portfolio-repo/', github: 'https://github.com/angelika7/new-portfolio-repo', isActive: true},
        {id: 2, url: url8, alt: 'Zdjęcie aplikacji - MemoCats App', isActive: true, info: 'Aplikacja memo - gra', title: '"MemoCats App"', isFlipped: false, backInfo: `${check} React.js ${check} Redux ${check} JS ${check} CSS3 + SVG ${check} Firebase`, live: 'https://angelika7.github.io/memo-repo/', github: 'https://github.com/angelika7/memo-repo'},
        {id: 3, url: url7, alt: 'Zdjęcie aplikacji - Because I love coffee...', isActive: true, info: 'Aplikacja do oceniania wrocławskich kawiarni', title: '"Because I love coffee..."', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS + Local Storage ${check} API Zomato ${check} Express.js ${check} Webpack 4`, live: 'https://angelika7.github.io/repo-search-cafes/', github: 'https://github.com/angelika7/repo-search-cafes'},
        {id: 4, url: url6, alt: `Zdjęcie aplikacji - ${appTitle}`, isActive: true, info: 'Kieszonkowa aplikacja pogodowa', title: `"${appTitle}"`, isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) + SVG ${check} JS ${check} API Open Weather Map`, live: 'https://angelika7.github.io/weather-app/', github: 'https://github.com/angelika7/weather-app'},
        {id: 5, url: url5, alt: 'Zdjęcie aplikacji - Portfolio v1.0', isActive: true, info: 'Strona internetowa', title: '"Portfolio v1.0"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS ${check} Express.js ${check} Grunt.js`, live: 'https://my-portfolio-cv.herokuapp.com/', github: 'https://github.com/angelika7/portfolio'},
        {id: 6, url: url4, alt: 'Zdjęcie aplikacji - Manufaktura słodyczy', isActive: true, info: 'Strona internetowa cukierni', title: '"Manufaktura słodyczy"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS + jQuery`, live: 'https://angelika7.github.io/cukiernia-repo/', github: 'https://github.com/angelika7/cukiernia-repo'},
        {id: 7, url: url3, alt: 'Zdjęcie aplikacji - In the woods', isActive: true, info: 'Strona internetowa o fotografii (PSD to HTML)', title: '"In the woods"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} jQuery + WOW.js ${check} Bootstrap 4`, live: 'https://angelika7.github.io/photography-website-repo/', github: 'https://github.com/angelika7/photography-website-repo'},
        {id: 8, url: url2, alt: 'Zdjęcie aplikacji - Lets get lost', isActive: true, info: 'Strona internetowa o podróżach (PSD to HTML)', title: '"Lets get lost"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} jQuery + WOW.js ${check} Grunt.js`, live: 'https://angelika7.github.io/travelling-website-repo/', github: 'https://github.com/angelika7/travelling-website-repo'},
        {id: 9, url: url1, alt: 'Zdjęcie aplikacji - salon fryzjerski - Wiktoria', isActive: true, info: 'Strona internetowa salonu fryzjerskiego', title: '"Wiktoria"', backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS`, isFlipped: false, live: 'https://angelika7.github.io/salon-repo/', github: 'https://github.com/angelika7/salon-repo'}
    ]
}

export default data
