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
            <p class="price">${bar.bar_location}</p>
            <p class="price">${bar.bar_city}</p>
            <p class="price">${bar.bar_description}</p>
        `;
        ul.appendChild(li);
    }
}