const links = document.querySelector('.links')
links.textContent = 'Links'

const weather = document.querySelector('.weather__temperature');
weather.textContent = '23°'
weather.innerHTML = '23° <span class="weather__icon">🌧️</span>'

const weatherList = document.querySelector('.weather');
weatherList.classList.add('weather--highlight');

const weatherLocation = document.querySelector('.weather__city');
weatherLocation.textContent = 'Ghent, België'

const currentDatum = document.querySelector('.time__date'); 
const currentTijd = document.querySelector('.time__now');
const greeting = document.querySelector('.greeting');
const now = new Date(); 
const options = { weekday: 'long', day: 'numeric', month: 'long' };
const formattedDate = now.toLocaleDateString('nl-BE', options);
const formattedTime = now.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });

currentDatum.textContent = formattedDate;
currentTijd.textContent = formattedTime;
greeting.textContent = 'Good afternoon, Pieter-Jan'

const afbeeldingsInfo = document.querySelector('.picture')
const spanLocation = document.createElement('span')
const photographer = document.createElement('span')
spanLocation.className = 'picture__location'
spanLocation.textContent = 'San Diego, California'
photographer.className = 'picture__photographer'
photographer.textContent = 'Joshua Earle'

afbeeldingsInfo.appendChild(spanLocation);
afbeeldingsInfo.appendChild(photographer);

const quotes = [
    { 
      text: 'The best way to get started is to quit talking and begin doing.', 
      author: 'Walt Disney'
    },
    { 
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs'
    },
    { 
      text: 'Whether you think you can or you think you can/t, you/re right.', 
      author: 'Henry Ford' 
    }
  ];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector('.quote');
const quoteLengte = document.createElement('span');
quote.className = 'quote__text';
quoteLengte.textContent = `"${randomQuote.text}"`;
const quoteAuthor = document.createElement('span');
quoteAuthor.className = 'quote__author';
quoteAuthor.textContent = randomQuote.author;
quote.appendChild(quoteLengte);
quote.appendChild(quoteAuthor);

const navLinks = [
    { text: 'Notes', href: '#' },
    { text: 'Timer', href: '#' },
    { text: 'Todo', href: '#' },
  ];

const navigationList = document.querySelector('.nav')
navLinks.forEach(link => {
    const listItem = document.createElement('li');
    listItem.className = 'nav__item';
    const href = document.createElement('a');
    href.className = 'nav__link';
    href.textContent = link.text;
    href.href = link.href;
    listItem.appendChild(href);
    navigationList.appendChild(listItem);
  });
  


  
