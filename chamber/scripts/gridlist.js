// fetch data from json
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayBusinesses(data.businessDirectory);
}

getBusinessData();

// display prophets
const displayBusinesses = (businessDirectory) => {
    const cards = document.querySelector('section.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a')
        let image = document.createElement('img');

        name.textContent = `${businessDirectory.name}`;

        address.textContent = `${businessDirectory.address}`;
        phone.textContent = `${businessDirectory.phone}`;

        website.setAttribute('href', `${businessDirectory.website}`);
        website.textContent = `Website`;
        
        image.setAttribute('src', businessDirectory.imageurl);
        image.setAttribute('alt', `${businessDirectory.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);

        cards.appendChild(card);
    })
}