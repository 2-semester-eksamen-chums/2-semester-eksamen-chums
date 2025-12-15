console.log("loaded...");

const eventsUrl = "https://qpxfpzldrliwvmichmrh.supabase.co/rest/v1/Events";
const key = "sb_publishable_SEZpXmVn1FJkomllatBYGA_n-d_5JTH";

console.log("min url", eventsUrl);

const options = {
  headers: {
    apikey: key,
  },
};

getData(eventsUrl, options);

function getData(url) {
  fetch(url, options).then((res) =>
    res.json().then((data) => {
      allData = data;
      showEvents(data);
    })
  );
}

function showEvents(events) {
  const eventsListContainer = document.querySelector("#events");
  eventsListContainer.innerHTML = "";
  console.log("events", events);
  events.forEach((event) => {
    eventsListContainer.innerHTML += `
       <article class="events">
        <div class="event-produkt">
        <img src="${event.Img}">
          <h3 class="h3_events">${event.Overskrift}</h3>
          <h4 class="h4_events">${event.Dato}</h4>
          <p class="p_events">${event.Eventinfo}</p>
        </div>
      </article> 
    `;
  });
}

/* Test af vigtige ting */
const id = 1;
const elementUrl = `https://qpxfpzldrliwvmichmrh.supabase.co/rest/v1/Events?id=eq.${id}`;

function getOneElement(url) {
  fetch(elementUrl, options).then((res) => {
    res.json().then((data) => {
      console.log(data[0]);
    });
  });
}

getOneElement(elementUrl);
