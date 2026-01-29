const apiKey = "nCQh6QP9jH6YuFWa1DJG5RVZGC1YTqbQ";
const searchBtn = document.getElementById("search-btn");
const keywordInput = document.getElementById("keyword");
const eventsDiv = document.getElementById("events");

searchBtn.addEventListener("click", () => {
  const keyword = keywordInput.value.trim();
  if (keyword) {
    fetchEvents(keyword);
  }
});

async function fetchEvents(keyword) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${encodeURIComponent(keyword)}&size=12`;

  try {
    console.log("function time");
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!data._embedded) {
      console.log("nvm get fucked");
      return;
    }

    const events = data._embedded.events;
    loadEvents(events);

    } catch (err){
        console.log(err);
        alert('nevermind, get fucked');
    }
}


function loadEvents(events){
    for(let event of events){
        const image = event.images[0].url
        const name = event.name;
        const date = event.dates.start.localDate;
        const venue = event._embedded.venues[0].name;
    
        var cardDiv =  '<img src = ' + image + ' alt = ' + name + '><div class="event-info"> <h3>' + name + '</h3> <p><strong>Date:</strong>' + date + '</p><p><strong>Venue:</strong>' + venue + '</p></div>';
    
        var card = document.createElement("div");
        card.className = "event-card";
    
        card.innerHTML = cardDiv;
    
        eventsDiv.appendChild(card);

    }
};