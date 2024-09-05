window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload();
    }
});

document.addEventListener('mousemove', (e) => { //move background on mouse movement
    const { clientX: x, clientY: y } = e;
    const backgroundPattern = document.getElementById('menu-background-pattern');

    const moveX = (x / window.innerWidth) * 50;
    const moveY = (y / window.innerHeight) * 50;

    backgroundPattern.style.backgroundPosition = `${moveX}% ${moveY}%`;
});

document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('project-list');

    // Fetch repositories from the GitHub API
    fetch('https://api.github.com/users/mixtapeo/repos')
        .then(response => response.json())
        .then(data => {
            // Clear the list first (in case of re-rendering)
            repoList.innerHTML = '';

            // Iterate over each repository and create a list item with a link
            data.forEach(repo => {
                const listItem = document.createElement('li');
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.name;

                listItem.appendChild(repoLink);
                repoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', () => { //gradient
    const scrollPosition = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / docHeight;

    const startColor = { r: 26, g: 26, b: 26 }; // #1a1a1a
    const midColor = { r: 80, g: 80, b: 160 }; // #5050a0
    const endColor = { r: 255, g: 140, b: 0 }; // #ff8c00

    const firstTransitionColor = {
        r: Math.round(startColor.r + (midColor.r - startColor.r) * scrollPercentage),
        g: Math.round(startColor.g + (midColor.g - startColor.g) * scrollPercentage),
        b: Math.round(startColor.b + (midColor.b - startColor.b) * scrollPercentage),
    };

    const secondTransitionColor = {
        r: Math.round(midColor.r + (endColor.r - midColor.r) * scrollPercentage),
        g: Math.round(midColor.g + (endColor.g - midColor.g) * scrollPercentage),
        b: Math.round(midColor.b + (endColor.b - midColor.b) * scrollPercentage),
    };

    document.body.style.background = `linear-gradient(0deg, rgb(${firstTransitionColor.r}, ${firstTransitionColor.g}, ${firstTransitionColor.b}), rgb(${secondTransitionColor.r}, ${secondTransitionColor.g}, ${secondTransitionColor.b}))`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});