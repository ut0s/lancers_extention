// main timer
// const _ = setInterval(workControllBox2Button, 10000);
workControllBox2Button();

function workControllBox2Button() {
  // debug
  // document.body.style.backgroundColor = `rgb(${getRandomInt(0, 256)},
  //   ${getRandomInt(0, 256)} ,
  // ${getRandomInt(0, 256)})`;

  for (const e of document.getElementsByClassName("workControlleBox")) {
    // console.log(e.innerHTML);
    for (let i = 0; i < e.options.length; i++) {
      let value = e.options[i].value;
      let text = e.options[i].text;
      console.log(typeof value);
      console.log(text);

      if (value !== "") {
        let btn = document.createElement("a");
        btn.href = value;
        btn.innerHTML = `${text}<br>`;
        e.parentElement.insertBefore(btn, e);
      }
      e.hidden = true;
    }
  }
}

//The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
