const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data);
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function displayTitle(data) {
  const mainDiv = document.querySelector("#body");
  for (i = 0; i < 2; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = data.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-header";
    addH5.innerText = data.data[i].title + " ";
    cardDiv.appendChild(addH5);
    // cardDiv.innerText = data.data[i].title;
    mainDiv.appendChild(cardDiv);
  }
}

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk", options)
  .then((response) => response.json())
  .then((data2) => {
    displayTitle(data2);
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function displayTitle(data2) {
  const mainDiv = document.querySelector("#body");
  for (i = 0; i < 2; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = data2.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-header";
    addH5.innerText = data2.data[i].title + " ";
    cardDiv.appendChild(addH5);
    // cardDiv.innerText = data.data[i].title;
    mainDiv.appendChild(cardDiv);
  }
}
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd", options)
  .then((response) => response.json())
  .then((data3) => {
    displayTitle(data3);
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function displayTitle(data3) {
  const mainDiv = document.querySelector("#body");
  for (i = 0; i < 2; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = data3.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-header";
    addH5.innerText = data3.data[i].title + " ";
    cardDiv.appendChild(addH5);
    // cardDiv.innerText = data.data[i].title;
    mainDiv.appendChild(cardDiv);
  }
}
