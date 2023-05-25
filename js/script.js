const cardData = [
    {
      image: 'image-url-1.jpg',
      artist: 'Artist 1',
      showName: 'Show 1',
      date: '2023-05-25'
    },
    {
      image: 'image-url-2.jpg',
      artist: 'Artist 2',
      showName: 'Show 2',
      date: '2023-05-26'
    },
    {
      image: 'image-url-3.jpg',
      artist: 'Artist 3',
      showName: 'Show 3',
      date: '2023-05-27'
    }
  ];

  function createCard(card) {
    const container = document.getElementById('cardContainer');

    // Create card element
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Add image
    const imageElement = document.createElement('img');
    imageElement.src = card.image;
    cardElement.appendChild(imageElement);

    // Add artist
    const artistElement = document.createElement('div');
    artistElement.classList.add('artist');
    artistElement.textContent = card.artist;
    cardElement.appendChild(artistElement);

    // Add show name
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = card.showName;
    cardElement.appendChild(titleElement);

    const dateElement = document.createElement('div');
    dateElement.classList.add('date');

    const dateObj = new Date(card.date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = dateObj.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
    cardElement.appendChild(dateElement);

    // Add weekday
    const weekdayElement = document.createElement('div');
    weekdayElement.classList.add('weekday');
    weekdayElement.textContent = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    cardElement.appendChild(weekdayElement);

    // Append card to container
    container.appendChild(cardElement);
  }

  // Create cards using data
  cardData.forEach(createCard);
