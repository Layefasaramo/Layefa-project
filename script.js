const box = document.getElementById("box");
const sliders = document.querySelectorAll("input[type='range']");
const output = document.getElementById("css-output");


let values = {
  tl: 20,
  tr: 20,
  br: 20,
  bl: 20,
  h: 20,
  v: 20
};

function updateBox() {
  const radius = `
${values.tl}% ${values.tr}% ${values.br}% ${values.bl}% /
${values.h}% ${values.v}%
`;

  box.style.borderRadius = radius.trim();

  output.textContent = `border-radius: ${radius.trim()};`;
}

sliders.forEach(slider => {
  slider.addEventListener("input", e => {
    const key = e.target.dataset.pos;
    values[key] = e.target.value;
    updateBox();
  });
});


updateBox();
