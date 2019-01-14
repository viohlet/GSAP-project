import "./styles.css";
import { TweenMax } from "gsap";

document.getElementById("app").innerHTML = `
      
<div id="content">
    <img id="generated" src="img/generated.svg" alt="generated" />
  <h1>Hello Creative Tech Team!</h1>
  <p>You can check out my design portfolio and CV
  <a href="https://violetavenegas6.wixsite.com/site" target="_blank" rel="noopener noreferrer">here</a>
  </p>
  </div>
</div>

<div id="star"> </div>

`;

TweenMax.from("#generated", 1, { scale: 0, ease: Bounce.easeOut });

TweenMax.from(
  "h1",
  1,
  { opacity: 0, scale: 1, x: 90, ease: Back.easeOut.config(3), delay: 1 },
  0.1
);
TweenMax.from(
  "p",
  1,
  { opacity: 0, scale: 1, x: -90, ease: Back.easeOut.config(3), delay: 1 },
  0.1
);

TweenMax.fromTo(
  "#star",
  1,
  {
    rotation: 40
  },
  {
    rotation: -40,
    delay: 1,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  }
);
