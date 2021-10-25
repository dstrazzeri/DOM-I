const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV //

let nav = document.querySelectorAll("nav a")
for (let i = 0; i < nav.length; i++){
  let index = "nav-item-" + (i + 1);
  nav[i].textContent = siteContent["nav"][index];
}

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);
blogLink.style.color = "green";

const memeLink = document.createElement("a");
memeLink.textContent = "Memes"
memeLink.href = "#";
document.querySelector("nav").prepend(memeLink);
memeLink.style.color = "green";

nav.forEach(nav => {
  nav.style.color = "green";
})

// HEADER //

const h1Content = document.querySelector(".cta h1")
h1Content.innerHTML = "DOM<br>Is<br>Awesome";

const ctaButton = document.querySelector(".cta button")
ctaButton.textContent = siteContent["cta"]["button"];

// HEADER IMG //

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// TOP CONTENT //

const featuresH4 = document.querySelector(".top-content:nth-child(1) h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];
const featuresP = document.querySelector(".top-content:nth-child(1) p");
featuresP.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(".top-content .text-content:nth-child(2) h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];
const aboutP = document.querySelector(".top-content .text-content:nth-child(2) p");
aboutP.textContent = siteContent["main-content"]["about-content"];

// MIDDLE IMAGE //

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// BOTTOM CONTENT //

const servicesH4 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];
const servicesP = document.querySelector(".bottom-content .text-content:nth-child(1) p");
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];
const productP = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productP.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
const visionP = document.querySelector(".bottom-content .text-content:nth-child(3) p");
visionP.textContent = siteContent["main-content"]["vision-content"];

// CONTACT //

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
contactAddress.textContent = siteContent["contact"]["address"];
const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];
const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = siteContent["contact"]["email"];

// FOOTER //

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];