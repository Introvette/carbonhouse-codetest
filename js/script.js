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
