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
      heading: "@ CHVENUE",
      body: "Catch unforgettable music moments @ acllive and @3TENaustin in Austin, TX. With over 130 concerts per year, discover world-renowned and local artists up close! #ACLLIVE #3TENACLLIVE",
    },
    {
      heading: "@ CHVENUE",
      body: "Tickets for @Thundercat's IOn Yo Girl's City Tour go on sale tomorrow/ 5/5 @ 10AM local time!! Get yours here",
    },
    {
      heading: "@ CHVENUE",
      body: "Tickets for blah blah blah blah blah blah blah blah blah blah blah I can't see the rest blah blah blah",
    },
  ];

  const postContainer = document.querySelector(".socials-card-container");

  const postMethods = () => {
    cardData.map((postData) => {
      const postElement = document.createElement("div");
      postElement.classList.add("socials-card");
      postElement.innerHTML = `
        <p class="card-heading"><i class="fa fa-twitter"></i>${postData.heading}</p>
        <p class="card-body">${postData.body}</p>
      `;
      postContainer.appendChild(postElement);
    });
  };

  postMethods();
});
