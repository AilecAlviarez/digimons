let container = document.querySelector("#id");
const input = document.querySelector("#input");
let searching = document.querySelector("#search");
// method to get Digimons
async function getDigimon(params) {
  let url = "https://digimon-api.vercel.app/api/digimon";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
//render Digimons to html
function renderDigimon(digimons) {
  let html = "";
  digimons.forEach((digimon) => {
    let htmlsegment = `
    <div class="col-lg-4>
       <div class="card h-100">
            <img class="figure-img img-fluid rounded" src="${digimon.img}" alt="">
          <div class="card-body">
            <h5 class="card-title">${digimon.name}</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">${digimon.level}</small>
          </div>
        </div>
      </div>
      </div>
      `;
    html += htmlsegment;
  });

  container.innerHTML = html;
}
let digimonsrender = async () => await getDigimon();

digimonsrender().then((res) => {
  renderDigimon(res);
});
const filterDigimonsByName = (digimons) => {
  return digimons.filter((digimon) => {
    return digimon.name == input.value;
  });
  const removeDigimonsChilds = () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
};
searching.addEventListener("click", async function click(e) {
  e.preventDefault();
  console.log(input.value);
  let digimons = await getDigimon();
  let responseFilter = filterDigimonsByName(digimons);
  removeDigimonsChilds();
  renderDigimon(responseFilter);
});
