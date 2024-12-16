const bentoItemsDesktop = [
    new GridItem(
        `<div class="center">
        <h3 style="width: 100%">Hey there!<br>I'm Aniruth.</h3>
        <p>
        I'm a first-year TAMS student with interests in computer science, physics, and finance.
        </p>
        </div>`, 
        1, 1, false, ''),


    new GridItem(
        `<div class="center" style="height: 100%">
        <h3 style="width: 100%">What is this? 📌</h3>
        <p>
        This website has links to a bunch of research/passion projects I've worked on, as well as some of my other interests.
        </p>
        </div>`, 
        1, 1, true, ''), 

    new GridItem(
        `<div class="center">
        <h1 style="width: 100%">
            📫 Contact me!
        </h1>
        <p>
        You can reach my via <a href="mailto:aniruth.airlines@gmail.com">email</a> or via <a href="https://www.linkedin.com/in/aniruth-ananthanarayanan/">LinkedIn</a>!
        I check my email pretty often so the best way to reach me is through there.
        </p>
        </div>`, 
        1, 1, true, ''),

    new GridItem(
        `<div class="center">
        </div>`, 
        1, 1, true, 'background-image: url("./assets/pfp.jpg"); background-size: cover; background-position: center;'),
    
    new GridItem(
        `<div class="center">
        <h1 style="width: 100%">Grid.js 🧇</h1>
        <p>
        The underlying JS library behind this portfolio!
        A simple, lightweight library for creating responsive bento box layouts.
        </p>
        </div>`, 
        1, 1, true, ''),  

    new GridItem(
        `<div class="center linkish"  onclick="window.open('https://github.com/AniruthAnanth/SpectroscopyAnalysis')">
        <h1 style="width: 100%">SPARCS ☄️</h1>
        <p>
        SPARCS, or Spectral Processing and Analysis for Recognition of Chemical Species, is my latest research project.

        Working under Dr. Guru Khalsa's mentorship, I hope to develop a machine learning model that can identify chemical species in a gas mixture using spectroscopy data.
        </p>
        </div>`, 
        2, 1, false, ''), 

    new GridItem(
        `<div class="center">
        <h1 style="width: 100%">Fast TMM ⚡</h1>
        <p>
        A small Python library for calculating reflectance and transmittance data for 1 dimensional multilayer media.
        </p>
        </div>`, 
        1, 1, true, ''),

    
    /*    new GridItem(
        `<div class="center">
        </div>`, 
        2, 1, true, 'background-image: url("./assets/c_mod.png"); background-size: cover; background-position: center;'), */
];

const bentoItems = bentoItemsDesktop;

