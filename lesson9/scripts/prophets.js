const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// fetch data from url
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

// display prophets
const displayProphets = (prophets) => {
    const cards = document.querySelector('section.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}