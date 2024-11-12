document.addEventListener(
    "DOMContentLoaded",
    (event) => {
        // Array of particle configuration file paths
        const particleConfigs = ["assets/js/particles1.json", "assets/js/particles2.json", "assets/js/particles3.json", "assets/js/particles4.json", "assets/js/particles5.json", "assets/js/particles6.json", "assets/js/particles7.json"];

        // Randomly select one of the configuration files
        const selectedConfig = particleConfigs[Math.floor(Math.random() * particleConfigs.length)];

        // Load particles.js with the randomly selected configuration file
        particlesJS.load("particles-js", selectedConfig, function () {
            console.log(`particles.js loaded with config: ${selectedConfig}`);
        });
    },
    false
);
