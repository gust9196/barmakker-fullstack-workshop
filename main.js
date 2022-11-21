fetch('https://barmakker-api.onrender.com/bars')
    .then(response => response.json())
    .then(function (bars) {
        renderBars(bars);
    });

function renderBars(bars) {
    const ul = document.querySelector('ul#bar');
    console.log(ul);
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        console.log(bar)
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text">${bar.bar_name}</p>
            <p class="bar_location">${bar.bar_location}</p>
            <p class="bar_city">${bar.bar_city}</p>
            <p class="bar_description">${bar.bar_description}</p>
            <p class="opening_hours">${bar.opening_hours}</p>
            <p class="prices">${bar.prices}</p>
            <p class="games">${bar.games}</p>
            <p class="billiard">${bar.billiard}</p>
            <p class="smoking_allowed">${bar.smoking_allowed}</p>
            <p class="happy_hour">${bar.happy_hours}</p>
            <p class="viser_sport">${bar.viser_sport}</p>
        `;
        ul.appendChild(li);
    }
}