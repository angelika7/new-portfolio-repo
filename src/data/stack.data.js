import react from './../assets/images/react.png';
import vue from './../assets/images/vuejs.png';
import js from './../assets/images/js.png';
import node from './../assets/images/node.png';
import jquery from './../assets/images/jquery.png';
import html from './../assets/images/html.png';
import css from './../assets/images/css.png';
import gulp from './../assets/images/gulp.png';
import webpack from './../assets/images/webpack.png';
import git from './../assets/images/git.png';
import npm from './../assets/images/npm.png';
import sass from './../assets/images/sass.png';
import mongo from './../assets/images/mongo.png';
import bootstrap from './../assets/images/bootstrap.png';
import express from './../assets/images/express.png';
import shopify from './../assets/images/shopify.png';
import jest from './../assets/images/jest.png';
import storybook from './../assets/images/storybook.png';
import tailwindcss from './../assets/images/tailwindcss.png';
import testcafe from './../assets/images/testcafe.png';
import vuex from './../assets/images/vuex-store.png';
import typescript from './../assets/images/typescript.png';

const check = '\u25CF';

const data = {
    toolsArray: [
        {id: 0, url: vue, alt: 'VueJs Icon', info: 'Vue.js', backInfo:`${check} Composition API ${check} watchers ${check} slots ${check} hooks ${check} dyrektywy`},
        {id: 1, url: vuex, alt: 'Vuex Icon', info: 'Vuex', backInfo:`${check} state ${check} getters ${check} mutations ${check} actions ${check} modules`},
        {id: 2, url: shopify, alt: 'Shopify Icon', info: 'Shopify/Shopify Plus', backInfo:`${check} customizowanie elementów theme ${check} obsługa admina`},
        {id: 3, url: typescript, alt: 'Typescript Icon', info: 'Typescript', backInfo:`${check} klasy ${check} interfejsy ${check} typy generyczne`, small: 'true'},
        {id: 4, url: html, alt: 'Html5 Icon', info: 'HTML5', backInfo:`${check} znaczniki semantyczne html5 ${check} uniwersalne bloki wielokrotnego użytku`},
        {id: 5, url: css, alt: 'CSS3 Icon', info: 'CSS3', backInfo:`${check} flex/grid ${check} @keyframes ${check} @media - RWD ${check} metodyka BEM i OOCSS`},
        {id: 6, url: js, alt: 'JS Icon', info: 'Java Script', backInfo:`${check} ES6+ ${check} closures / scope / klasy / promises / API ${check} MVC ${check} Local Storage`},
        {id: 7, url: react, alt: 'ReactJs Icon', info: 'React.js', backInfo:`${check} styled-components ${check} react-router ${check} hooks ${check} redux`},
        {id: 8, url: express, alt: 'ExpressJs Icon', info: 'Express.js', backInfo:`${check} routing ${check} konfiguracja webowa (port, lokalizacja szablonów do generowania widoków) ${check} middleware ${check} error handling`},
        {id: 9, url: node, alt: 'NodeJs Icon', info: 'Node.js', backInfo:`${check} tworzenie serwera`},
        {id: 10, url: mongo, alt: 'MongoDB Icon', info: 'MongoDB', backInfo:`${check} tworzenie bazy danych z wykorzystaniem Mongoose`}
    ],
    toolsImgOnly: [
        {id: 0, url: tailwindcss, alt: 'TailwindCSS Icon', info: 'TailwindCSS'},
        {id: 1, url: storybook, alt: 'Storybook Icon', info: 'Storybook', small: 'true'},
        {id: 2, url: jest, alt: 'Jest Icon', info: 'Jest'},
        {id: 3, url: testcafe, alt: 'Testcafe Icon', info: 'Testcafe'},
        {id: 4, url: jquery, alt: 'jQuery Icon', info: 'jQuery'},
        {id: 5, url: bootstrap, alt: 'Bootstrap Icon', info: 'Bootstrap4'},
        {id: 6, url: sass, alt: 'Sass Icon', info: 'Sass (Scss)'},
        {id: 7, url: webpack, alt: 'Webpack Icon', info: 'Webpack'},
        {id: 8, url: gulp, alt: 'GulpJs Icon', info: 'Gulp.js'},
        {id: 9, url: git, alt: 'Git Icon', info: 'Git'},
        {id: 10, url: npm, alt: 'NPM Icon', info: 'NPM'}
    ]
}

export default data;