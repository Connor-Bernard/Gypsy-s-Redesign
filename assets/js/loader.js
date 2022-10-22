/**
 * Copyright (c) 2022
 *
 * Loading bar graphic on page load (scrapped)
 *
 * @summary Event handler for loading bar
 * @author Connor Bernard <connorbernard@berkeley.edu>
 *
 */

// For smooth loading remove this setInterval
loadScreen = setInterval(() => {
    const percentageText = document.querySelector(".percentage").querySelector("p")
    const progressBar = document.querySelector(".progress")
    const progressWidth = getComputedStyle(progressBar).getPropertyValue("--load-progress") || 0
    const totalWidth = getComputedStyle(document.querySelector(".unloaded")).getPropertyValue("width")
    const percentageLoaded = progressWidth / totalWidth * 100
    if(percentageLoaded < 95){
        progressBar.style.setProperty("--load-progress", progressWidth + 20)
        percentageText.textContent = `${parseFloat(percentageLoaded)}%`
    }
}, 1)
window.addEventListener("load", () => {
    clearInterval(loadScreen)
    const percentageText = document.querySelector(".percentage").querySelector("p")
    const progressBar = document.querySelector(".progress")
    const totalWidth = parseFloat(getComputedStyle(document.querySelector(".unloaded")).getPropertyValue("width"))
    finishLoad = setInterval(() => {
        const progressWidth = parseFloat(getComputedStyle(progressBar).getPropertyValue("--load-progress")) || 0
        const percentageLoaded = progressWidth / totalWidth * 100
        if(percentageLoaded < 100){
            progressBar.style.setProperty("--load-progress", progressWidth + 1)
            percentageText.textContent = `${Math.round(parseFloat(percentageLoaded))}%`
        } else {
            clearInterval(finishLoad)
            const loadBackground = document.querySelector(".loadBackground")
            const loader = document.querySelector(".loader")
            loadBackground.style.opacity = 0
            loader.style.opacity = 0
            setTimeout(() => {
                loadBackground.remove()
                loader.remove()
            }, 200)
        }
    }, 2)
})

/* HTML for implementation
<!-- LOADER -->
<div class="loadBackground"></div>
<div class="loader">
    <div class="percentage">
        <p>
            0%
        </p>
    </div>
    <div class="unloaded">
        <div class="progress"></div>
    </div>
</div>
*/
