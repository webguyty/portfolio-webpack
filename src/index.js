import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./main.scss";

import "./scripts/slider";
import "./scripts/scrollSpy";
import "./scripts/sendEmail";
import { showGraph, showData } from "./scripts/graph";
import "./assets/webguyty-resume.pdf";

showGraph();
showData();

function myFunc(e) {
  e.preventDefault();
  console.log("sent!!");
}
