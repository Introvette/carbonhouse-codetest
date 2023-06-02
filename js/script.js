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
        <p class="card-heading"><i class="fab fa-twitter"></i>${postData.cardHeading}</p>
        <p class="card-body">${postData.cardBody}</p>
<p class="card-footer">${postData.cardFooter} <i class="fas fa-comment"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></p>

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
        <a class="tickets"><i class="fas fa-ticket-alt"></i>${postData.tickets}</a>
      </p>
      `;


      postContainer.appendChild(postElement);
    });
  };

  postMethods();
});

function toggleView(view) {
  var gridView = document.getElementById("grid-view");
  var listView = document.getElementById("list-view");

  if (view === 'list-view') {
    gridView.style.display = 'none';
    listView.style.display = 'block';
  } else {
    gridView.style.display = 'grid';
    listView.style.display = 'none';
  }
}
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
window.onload = function() {
  var defaultView = isMobileDevice() ? "list-view" : "grid-view";
  toggleView(defaultView);

  if (isMobileDevice()) {
    var gridViewButton = document.getElementById("grid-view-button");
    gridViewButton.style.display = 'none';
  }
};
