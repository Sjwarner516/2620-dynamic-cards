import { destination } from './data/destination.js';

const stadiums = destination[0].football_stadiums;
const myTarget = document.querySelector('#destinationcards');

for (let x = 0; x < stadiums.length; x++) {
    const stadium = stadiums[x]; // ✅ THIS LINE is critical

    let card = document.createElement('div');
    card.className = 'bg-white shadow-md rounded-lg overflow-hidden flex flex-col';

    let img = document.createElement('img');
    img.setAttribute('src',`./images/${stadium.image}`); 

    img.setAttribute('alt', stadium.stadium_name);
    img.className = 'h-48 w-full object-cover';

    let content = document.createElement('div');
    content.className = 'p-4 flex flex-col flex-grow';

    let title = document.createElement('h2');
    title.className = 'text-xl font-semibold mb-2';
    title.textContent = stadium.stadium_name;

    let desc = document.createElement('p');
    desc.className = 'text-gray-600 mb-4 flex-grow';
    desc.textContent = stadium.team_description;

    let price = document.createElement('p');
    price.className = 'text-lg font-bold text-black-600 mb-4';
    price.textContent = `Cost: $${stadium.ticket_cost}`;

    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'flex justify-between gap-2';

    let btn1 = document.createElement('button');
    btn1.textContent = 'Game Schedule';
    btn1.className = 'bg-pink-600 text-white px-4 py-2 rounded hover:translate-y-[1px] transition-transform duration-150';

    let btn2 = document.createElement('button');
    btn2.textContent = 'Buy Ticket';
    btn2.className = 'bg-green-300 text-white px-4 py-2 rounded hover:translate-y-[1px] transition-transform duration-150';

    buttonWrapper.appendChild(btn1);
    buttonWrapper.appendChild(btn2);

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(price);
    content.appendChild(buttonWrapper);

    card.appendChild(img);
    card.appendChild(content);

    myTarget.appendChild(card);
}

