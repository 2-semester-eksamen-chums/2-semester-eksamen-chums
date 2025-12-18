console.log("loaded...");
/*Scriptet er blevet indlæst*/

const eventsUrl = "https://qpxfpzldrliwvmichmrh.supabase.co/rest/v1/Events";

const key = "sb_publishable_SEZpXmVn1FJkomllatBYGA_n-d_5JTH";
/*Vi giver adgang via "key" til at hnete supabase url, og taler til tabellen "Events"*/

console.log("min url", eventsUrl);

const options = {
  headers: {
    apikey: key,
  },
};
/*API nøglen sendes med i requesten, så Supabase tillader adgang*/

getData(eventsUrl, options);
/*Starter funktionen der henter dataen*/

function getData(url) {
  fetch(url, options).then((res) =>
    res.json().then((data) => {
      allData = data;
      showEvents(data);
    })
  );
}
/*Fetch laver et kald til Supabase*/
/*JSon betyder det er konverteret til dette */
/*"showevents" betyder at dataen sendes videre til funktionen, og den vises på siden*/
/*ID bruges til at vise det rigtige event*/

function showEvents(events) {
  const eventsListContainer = document.querySelector("#events");
  eventsListContainer.innerHTML = ""; /*rydder indholder, så det kan gentages*/
  console.log("events", events);
  events.forEach((event) => {
    /*gennemgår hver event fra databasen*/
    eventsListContainer.innerHTML += `
    <a href="produkt.html?id=${event.id}"> 
       <article class="events">
        <div class="event-produkt">
        <img src="${event.Img}">
          <h3 class="h3_events">${event.Overskrift}</h3>
          <h4 class="h4_events">${event.Dato}</h4>
          <p class="p_events">${event.Eventinfo}</p>
          <p class="p_events"> Read more... </p>
        </div>
      </article> 
      </a>
    `;
  });
}

// /* Test af vigtige ting */
// const id = 1;
// const elementUrl = `https://qpxfpzldrliwvmichmrh.supabase.co/rest/v1/Events?id=eq.${id}`;

// function getOneElement(url) {
//   fetch(elementUrl, options).then((res) => {
//     res.json().then((data) => {
//       console.log(data[0]);
//     });
//   });
// }

// getOneElement(elementUrl);
