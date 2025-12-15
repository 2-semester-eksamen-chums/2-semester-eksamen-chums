console.log("produkt loaded...");

const id = new URLSearchParams(window.location.search).get("id");
// const id = 1;
const productUrl = `https://qpxfpzldrliwvmichmrh.supabase.co/rest/v1/Produkt?id=eq.${id}`;
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFweGZwemxkcmxpd3ZtaWNobXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MzQyMzYsImV4cCI6MjA4MTAxMDIzNn0.M7GmfE9t16amOwQIvW6fmAaX6h3wSNxSXeNLDhIbgL4";

const options = {
  headers: {
    apikey: key,
  },
};

console.log("product: ", productUrl);

//get the data
getData();

async function getData() {
  console.log("getData...");
  const response = await fetch(productUrl, options);
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  show(data[0]);
}

function show(data) {
  const productcontainer = document.querySelector("#productContainer");
  productcontainer.innerHTML = `
 <div class="grid_1_1_produkt">
            <div class="produkt_intro">
                <h1>${data.Overskrift}</h1>
                <p>Location: ${data.Location}</p>
                <br>
                <p>Time and date: ${data.Time}</p>
                <br>
                <p>Price: ${data.Price}</p>
                <br>
                <button class="knap">Book your spot</button>
            </div>
            <div>
                <img src="${data.Img}" alt="Vinglas" class="produkt_img">
            </div>
        </div>
        <div class="produkt_description">
            <h2>Description:</h2>
            <p>${data.Info}</p>
        </div>
    `;
}
