---
layout: default
title: Abdul's Resume
permalink: /resume/
---
<style>
---

<style>
body {
    background-color: black !important;
}

#pdf-container {
    width: 100%;
    max-width: 900px;
    margin: 40px auto 60px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

canvas {
    display: block;
    margin: 0 auto !important;
    margin-bottom: -45px !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
    width: 100% !important;    
    height: auto !important;
}

/* Download button styles */
.download-button {
    position: fixed;
    top: 80px;
    right: 40px;
    background-color: #4183c4;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.download-button:hover {
    background-color: #2b5f8e;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.download-icon {
    width: 20px;
    height: 20px;
    fill: black;
}

.site-title-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 100px;
}

.site-logo-section {
    display: flex;
    align-items: center;
}

.site-logo {
    max-height: 50px;
    margin: 0;
    vertical-align: middle;
}

#site-title {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    color: #FFF;
    text-decoration: none;
    margin: 0;
    font-weight: 500;
    line-height: 50px;
    display: flex;
    align-items: center;
}
@media (max-width: 768px) {
    .menu-toggle {
        display: none;
    }

    .contain {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0;
        position: relative;
    }

    .site-title-logo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .site-logo-section {
        display: flex;
        align-items: center;
    }

    .site-logo {
        height: 35px;
        width: auto;
        margin: 0;
    }

    #site-title {
        font-size: 16px;
        white-space: nowrap;
        margin: 0;
    }

    .site-header-nav {
        display: none;
    }
}

/* Extra small screens */
@media (max-width: 320px) {
    .site-logo {
        height: 30px;
    }

    #site-title {
        font-size: 14px;
    }
}


/* Header Container */
.site-header {
    position: fixed;
    width: 100%;
    left: 0 !important;
    top:0;
    z-index: 103;
    background: black;
    transition: all 0.5s ease;
}

/* Site Title Styles */
#site-title {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    color: #FFF;
    text-decoration: none;
    margin-left: 10px;
    font-weight: 500;
}

#site-title:hover {
    opacity: 0.8; /* Slight fade effect on hover */
    transition: all 0.3s ease; /* Smooth transition */
    color: #4183c4; /* Blue color on hover */

}

.contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
}


.site-logo {
    max-height: 50px; /* Adjust height as needed */
    margin-top: 3px;
}

.toggle-version-button {
    position: fixed;
    top: 80px;
    left: 50px;
    background-color: #4183c4;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}

.toggle-version-button:hover {
    background-color: #2b5f8e;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Mobile styles for download button */
@media screen and (max-width: 768px) {
    .download-button {
        /* Adjust position for mobile */
        top: 12px;
        right: 12px;
        /* Make button slightly smaller on mobile */
        width: 36px;
        height: 36px;
        /* Ensure it doesn't interfere with mobile header */
        z-index: 999;
    }

    .download-icon {
        /* Adjust icon size for smaller button */
        width: 18px;
        height: 18px;
    }

    /* Increase touch target area for better mobile accessibility */
    .download-button::before {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
    }

    /* Modify hover states for touch devices */
    .download-button:active {
        background-color: #2b5f8e;
        transform: scale(0.95);
        transition: transform 0.1s ease;
    }

    .toggle-version-button {
        top: 18px;
        left: 12px;
        font-size: 12px;
        padding: 6px 12px;
    }
}

/* For very small screens */
@media screen and (max-width: 320px) {
    .download-button {
        top: 55px;
        right: 10px;
        width: 32px;
        height: 32px;
    }

    .download-icon {
        width: 16px;
        height: 16px;
    }

    .toggle-version-button {
        top: 10px;
        left: 10px;
        font-size: 11px;
        padding: 5px 10px;
    }
}


.site-header-nav-item.selected {
    color: var(--color-link-hover, #4183c4);
}
.site-header-nav-item.selected::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: var(--color-link, #4183c4);
}
.site-header-nav-item[title="Research"] {
    visibility: hidden;
}
.site-header-nav-item[title="Projects"] {
    visibility: hidden;
}
.site-header-nav-item[title="Contact"] {
    visibility: hidden;
}
.site-header-nav-item[title="Resume"]::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: var(--color-link, #4183c4);
}
</style>

<header class="site-header">
    <div class="contain">
        <button class="menu-toggle">☰</button>
         <div class="site-title-logo">
            <div class="site-logo-section">
                <a href="/#home" title="Home">
                    <img src="/assets/icon_bg.png" alt="Logo" class="site-logo">
                </a>
            </div>

        <a id="site-title" href="/#home" title="{{ site.name }}">
            Abdul Rahman Shaikh
        </a>
        </div>
        <nav class="site-header-nav" role="navigation">
            {% for nav in site.navs %}
            <a href="{{ nav.href }}"
               class="{% if page.menu == nav.label %} selected {% endif %} site-header-nav-item"
               target="{{ nav.target | default: _self }}"
               title="{{ nav.label }}">
                {{ nav.label }}
            </a>
            {% endfor %}
        </nav>
    </div>
</header>

<button class="toggle-version-button" onclick="toggleVersion()">My CV</button>


<button class="download-button" onclick="downloadPDF()" title="Download Resume">
    <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
</button>

<div id="pdf-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    let currentVersion = 'onePage';
    const fullVersionUrl = '/assets/files/CV.pdf';
    const onePageUrl = '/assets/files/Resume.pdf';
    let currentUrl = onePageUrl;
    const scale = 6;

    function toggleVersion() {
        const button = document.querySelector('.toggle-version-button');
        const container = document.getElementById('pdf-container');
        
        // Clear current PDF
        container.innerHTML = '';
        
        if (currentVersion === 'full') {
            currentVersion = 'onePage';
            currentUrl = onePageUrl;
            button.textContent = 'My CV';
        } else {
            currentVersion = 'full';
            currentUrl = fullVersionUrl;
            button.textContent = 'Resume';
        }
        
        // Load new PDF
        loadPDF();
    }

   function downloadPDF() {
        const link = document.createElement('a');
        link.href = currentUrl;
        link.download = currentVersion === 'full' ? 'CV.pdf' : 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // Function to handle clicks on the canvas
    function setupClickHandler(canvas, viewport, page) {
        canvas.onclick = async function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const scaled_x = (x * canvas.width) / canvas.clientWidth;
            const scaled_y = (y * canvas.height) / canvas.clientHeight;

            try {
                const annotations = await page.getAnnotations();
                
                annotations.forEach(annotation => {
                    if (annotation.subtype === 'Link') {
                        const rect = annotation.rect;
                        const [x1, y1, x2, y2] = viewport.convertToViewportRectangle(rect);
                        
                        if (scaled_x >= x1 && scaled_x <= x2 && 
                            scaled_y >= Math.min(y1, y2) && scaled_y <= Math.max(y1, y2)) {
                            
                            if (annotation.url) {
                                window.open(annotation.url, '_blank');
                            } else if (annotation.unsafeUrl) {
                                window.open(annotation.unsafeUrl, '_blank');
                            } else if (annotation.dest) {
                                console.log('Internal link to:', annotation.dest);
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error handling click:', error);
            }
        };

        canvas.onmousemove = async function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const scaled_x = (x * canvas.width) / canvas.clientWidth;
            const scaled_y = (y * canvas.height) / canvas.clientHeight;

            try {
                const annotations = await page.getAnnotations();
                let isOverLink = false;

                annotations.forEach(annotation => {
                    if (annotation.subtype === 'Link') {
                        const rect = annotation.rect;
                        const [x1, y1, x2, y2] = viewport.convertToViewportRectangle(rect);
                        
                        if (scaled_x >= x1 && scaled_x <= x2 && 
                            scaled_y >= Math.min(y1, y2) && scaled_y <= Math.max(y1, y2)) {
                            isOverLink = true;
                        }
                    }
                });

                canvas.style.cursor = isOverLink ? 'pointer' : 'default';
            } catch (error) {
                console.error('Error handling mousemove:', error);
            }
        };
    }

    async function renderPage(pdf, pageNumber) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const container = document.getElementById('pdf-container');
        container.appendChild(canvas);

        // Removed margin-bottom
        canvas.style.width = '100%';
        canvas.style.height = 'auto';

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;
        setupClickHandler(canvas, viewport, page);
}

    function loadPDF() {
        pdfjsLib.getDocument(currentUrl).promise.then(async function(pdf) {
            const numPages = pdf.numPages;
            for(let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
                await renderPage(pdf, pageNumber);
            }
        }).catch(function(error) {
            console.error('Error loading PDF:', error);
            document.getElementById('pdf-container').innerHTML = 'Error loading PDF. Please try again later.';
        });
    }

    // Initial PDF load
    loadPDF();
</script>