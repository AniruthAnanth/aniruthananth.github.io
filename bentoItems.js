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
        `<div class="center">
        <h1 style="width: 100%">What is this? 📌</h3>
        <p>
        This website has links to a bunch of research/passion projects I've worked on, as well as some of my other interests. <i>(its a work in progress)</i>
        </p>
        </div>`, 
        1, 1, false, ''), 

    new GridItem(
        `<div class="center">
        <h1 style="width: 100%">
            📫 Contact me!
        </h1>
        <p>
        You can reach me via <a href="mailto:aniruth.airlines@gmail.com">email</a> or via <a href="https://www.linkedin.com/in/aniruth-ananthanarayanan/">LinkedIn</a>!
        I check my email pretty often so the best way to reach me is through there.
        </p>
        </div>`, 
        1, 1, false, ''),

    new GridItem(
        ``, 
        1, 1, true, 'background-image: url("./assets/pfp.jpg"); background-size: cover; background-position: center;'),
    
    new GridItem(
        `<div class="center">
        <h1 style="width: 100%">This Portfolio 🧇</h1>
        <p>
        <i>"A website of me, for me, by me."</i><br><br>The source code is available on Github at <a href="https://github.com/AniruthAnanth/aniruthananth.github.io">this link</a> 
        or you can check out my <a href="https://github.com/AniruthAnanth/">Github account</a>.
        </p>
        </div>`, 
        1, 1, false, ''),  

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
        1, 1, false, ''),

    
    new GridItem(
        `<div class="center">
            <h1 style="width: 100%">Preliminary SPARCS Results</h1>
            <br>
            <p>Mean Absolute Deviation of ~±1.6% when predicting concentrations of compounds from synthetic Raman data.</p>
            <p>Model trained on 4000 spectra, tested on 1000 spectra. Added noise to generated Raman data and performance was stable.</p>
            <img src="./assets/loss.png" style="width: 100%; height: 100%; object-fit: contain;"></img>
            <p>Next steps: Generate more realistic synthetic data with polynomial baselining and improve performance without data preprocessing!  </p>
        </div>`, 
        2, 1, false, 'background-color: white;'),
];

const bentoItems = bentoItemsDesktop;

