import react from './../assets/images/react.png';
import js from './../assets/images/js.png';
import node from './../assets/images/node.png';
import jquery from './../assets/images/jquery.png';
import html from './../assets/images/html.png';
import css from './../assets/images/css.png';
import grunt from './../assets/images/grunt.png';
import webpack from './../assets/images/webpack.png';
import git from './../assets/images/git.png';
import npm from './../assets/images/npm.png';
import sass from './../assets/images/sass.png';
import mongo from './../assets/images/mongo.png';
import bootstrap from './../assets/images/bootstrap.png';
import express from './../assets/images/express.png';
import php from './../assets/images/php.png';

const check = '\u25CF';

const data = {
    toolsArray: [
        {id: 0, url: html, alt: 'Html5 Icon', info: 'HTML5', backInfo:`${check} znaczniki semantyczne html5 ${check} uniwersalne bloki wielokrotnego użytku`},
        {id: 1, url: css, alt: 'CSS3 Icon', info: 'CSS3', backInfo:`${check} flex/grid ${check} @keyframes ${check} @media - RWD ${check} metodyka BEM i OOCSS`},
        {id: 2, url: js, alt: 'JS Icon', info: 'Java Script', backInfo:`${check} ES6+ ${check} closures / scope / klasy / promises / API ${check} MVC ${check} Local Storage`},
        {id: 3, url: react, alt: 'ReactJs Icon', info: 'React.js', backInfo:`${check} styled-components ${check} react-router ${check} hooks ${check} redux`},
        {id: 4, url: express, alt: 'ExpressJs Icon', info: 'Express.js', backInfo:`${check} routing ${check} konfiguracja webowa (port, lokalizacja szablonów do generowania widoków) ${check} middleware ${check} error handling`},
        {id: 5, url: node, alt: 'NodeJs Icon', info: 'Node.js', backInfo:`${check} tworzenie serwera`},
        {id: 6, url: mongo, alt: 'MongoDB Icon', info: 'MongoDB', backInfo:`${check} tworzenie bazy danych z wykorzystaniem Mongoose`}
    ],
    toolsImgOnly: [
        {id: 0, url: jquery, alt: 'jQuery Icon', info: 'jQuery'},
        {id: 1, url: bootstrap, alt: 'Bootstrap Icon', info: 'Bootstrap4'},
        {id: 2, url: php, alt: 'PHP Icon', info: 'PHP', small: 'true'},
        {id: 3, url: sass, alt: 'Sass Icon', info: 'Sass (Scss)'},
        {id: 4, url: webpack, alt: 'Webpack Icon', info: 'Webpack'},
        {id: 5, url: grunt, alt: 'GruntJs Icon', info: 'Grunt.js'},
        {id: 6, url: git, alt: 'Git Icon', info: 'Git'},
        {id: 7, url: npm, alt: 'NPM Icon', info: 'NPM'}
    ]
}

export default data;