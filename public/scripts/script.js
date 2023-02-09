const getRowSection1 = document.querySelector("#row_section_1");
const getRowSection2 = document.querySelector("#row_section_2");

const datasSection1 = [
  {
    url: "images1",
    name: "CREAM CLICKIE SWITCHES",
    price: "$32.40",
    desc: "36 Per Box",
  },
  {
    url: "images2",
    name: "THE ROCKET",
    price: "$35",
    desc: "Desk Toy",
  },
];

const datasSection2 = [
  {
    url: "images1",
    name: "NK87 - DARKSHARE EDITION",
    price: "$45",
    desc: "LIMITED EDITION RUN",
  },
  {
    url: "images2",
    name: "NK65 - AWAKEN EDITION",
    price: "$240",
    desc: "LIMITED EDITION RUN",
  },
  {
    url: "images3",
    name: "CREAM + SWITCHES",
    price: "$205",
    desc: "36 Per Box",
  },
  {
    url: "images4",
    name: "CREAM + INSERT ",
    price: "$12",
    desc: "120 Per Pack",
  },
  {
    url: "images5",
    name: "CHERRY SPELLBOOK",
    price: "$95",
    desc: "PBT Dyesub Keycaps",
  },
  {
    url: "images6",
    name: "GMK STIKER 2",
    price: "$135",
    desc: "Abs Double-Shot Keycaps",
  },
  {
    url: "images7",
    name: "NK65 - TFUE EDITION",
    price: "$205",
    desc: "LIMITED EDITION RUN",
  },
  {
    url: "images8",
    name: "NK87 - TFUE EDITION",
    price: "$205",
    desc: "LIMITED EDITION RUN",
  },
  {
    url: "images9",
    name: "TFUE DESKMAT",
    price: "$40",
    desc: "LIMITED EDITION RUN",
  },
];

function renderHTML(col, section, url, name, price, desc, element) {
  const html = `
      <div class="col-${col}">
            <div class="card">
              <div class="card-header">
    <a href="">
      <img
        src="./public/images/section_${section}/${url}.webp"
        alt="${desc}"
        width="100%"
      />
    </a>
              </div>
              <div class="card-footer">
                <div class="card-footer-desc">
                  <p>${name}</p>
                  <p>${price}</p>
                </div>
                <p class="text-muted">${desc}</p>
              </div>
            </div>
          </div>
    `;

  element.insertAdjacentHTML("afterbegin", html);
}

datasSection2.forEach((data) => {
  const { url, name, price, desc } = data;
  renderHTML(4, 2, url, name, price, desc, getRowSection2);
});

datasSection1.forEach((data) => {
  const { url, name, price, desc } = data;
  renderHTML(5, 1, url, name, price, desc, getRowSection1);
});
