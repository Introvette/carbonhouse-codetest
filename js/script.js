function initMap() {
  let uluru = { lat: -25.344, lng: 131.036 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  let marker = new google.maps.Marker({ position: uluru, map: map });
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cardData = [
    {
      cardHeading: "@ CHVENUE",
      cardBody: "Catch unforgettable music moments @ acllive and @3TENaustin in Austin, TX. With over 130 concerts per year, discover world-renowned and local artists up close! #ACLLIVE #3TENACLLIVE",
      cardFooter: "8:14 PM / 3 APR 2023"
    },
    {
      cardHeading: "@ CHVENUE",
      cardBody: "Tickets for @Thundercat's IOn Yo Girl's City Tour go on sale tomorrow/ 5/5 @ 10AM local time!! Get yours here",
      cardFooter: "7:35 PM / 2 APR 2023"
    },
    {
      cardHeading: "@ CHVENUE",
      cardBody: "Tickets for @Thundercat's IOn Yo Girl's City Tour go on sale tomorrow/ 5/5 @ 10AM local time!! Get yours here",
      cardFooter: "9:08 AM / 1 APR 2023"
    },
  ];

  const postContainer = document.querySelector(".socials-card-container");

  const postMethods = () => {
    cardData.map((postData) => {
      const postElement = document.createElement("div");
      postElement.classList.add("socials-card");
      postElement.innerHTML = `
        <p class="card-heading"><i class="fa fa-twitter"></i>${postData.cardHeading}</p>
        <p class="card-body">${postData.cardBody}</p>
        <p class="card-footer">${postData.cardFooter}</p>
      `;
      postContainer.appendChild(postElement);
    });
  };

  postMethods();
});

document.addEventListener("DOMContentLoaded", function () {
  const cardData = [
    {
      cardImage: "assets/img/weeknd.jpeg",
      cardArtist: "THE WEEKND",
      Tour: "After Hours Tour",
      cardDate: "JULY 28, 2023",
      cardDay: "FRIDAY"
    },
    {
      cardImage: "assets/img/bts.jpeg",
      cardArtist: "BTS",
      Tour: "Map Of The Soul Tour",
      cardDate: "JULY 30, 2023",
      cardDay: "SATURDAY"
    },
    {
      cardImage: "assets/img/dua.jpg",
      cardArtist: "DUA LIPA",
      Tour: "Future Nostalgia Tour",
      cardDate: "AUGUST 12, 2023",
      cardDay: "SATURDAY"
    },
    {
      cardImage: "assets/img/gaga.jpg",
      cardArtist: "LADY GAGA",
      Tour: "The Chromatica Ball",
      cardDate: "AUGUST 18, 2023",
      cardDay: "FRIDAY"
    },
    {
      cardImage: "assets/img/harry.jpg",
      cardArtist: "HARRY STYLES",
      Tour: "Love On Tour",
      cardDate: "AUGUST 29, 2023",
      cardDay: "TUESDAY"
    },
    {
      cardImage: "assets/img/swift.jpg",
      cardArtist: "TAYLOR SWIFT",
      Tour: "Eras Tour",
      cardDate: "SEPTEMBER 01, 2023",
      cardDay: "FRIDAY"
    },

  ];

  const postContainer = document.querySelector(".cards-container");

  const postMethods = () => {
    cardData.map((postData) => {
      const postElement = document.createElement("div");
      postElement.classList.add("card");
      postElement.innerHTML = `
      <img class="card-image" src="${postData.cardImage}" />
      <div class="content">
        <div class="day-bar-container">
          <div class="day-bar"><p>${postData.cardDay}</p></div>
        </div>
        <div class="date-bar">
          <p>${postData.cardDate}</p>
        </div>
        <h2 class="card-text">${postData.cardArtist}</h2>
        <p class="card-text">${postData.Tour}</p>
      </div>
      `;
      postContainer.appendChild(postElement);
    });
  };


// const gridButton = document.getElementById('gridButton');
// const listButton = document.getElementById('listButton');
// const gridContainer = document.getElementById('gridContainer');
// const listContainer = document.getElementById('listContainer');


// gridButton.addEventListener('click', switchToGridView);
// listButton.addEventListener('click', switchToListView);


// function switchToGridView() {
//   gridContainer.classList.remove('hidden');
//   listContainer.classList.add('hidden');
// }


// function switchToListView() {
//   listContainer.classList.remove('hidden');
//   gridContainer.classList.add('hidden');
// }

// function renderCards() {
//   listContainer.innerHTML = '';

//   cardData.forEach((card) => {
//     const cardElement = document.createElement('div');
//     cardElement.classList.add('card');

//     cardElement.innerHTML = `
//       <div class="card-image">
//         <img src="${card.cardImage}">
//       </div>
//       <div class="card-content">
//         <div class="card-artist">${card.cardArtist}</div>
//         <div class="card-tour">${card.Tour}</div>
//         <div class="card-date">${card.cardDate}</div>
//         <div class="card-day">${card.cardDay}</div>
//       </div>
//     `;


//     listContainer.appendChild(cardElement);
//   });
// }

// renderCards();

  postMethods();
});
