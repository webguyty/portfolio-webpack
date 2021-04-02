import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './main.scss';

import './scripts/slider';
import './scripts/scrollSpy';
import trackerApp from './scripts/trackerApp';
import sendEmail from './scripts/sendEmail';
import { showGraph, showData } from './scripts/graph';
import './assets/webguyty-resume.pdf';

// Initialize functions for covid graph section
//
//
showGraph();
showData();

// Send message component
document.getElementById('form').addEventListener('submit', e => sendEmail(e));
