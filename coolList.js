const colorArray = [
  "#1b75bb",
  "rgb(246, 165, 41)",
  "rgb(81, 182, 185)",
  "rgb(244, 115, 14)",
  "rgb(57, 167, 100)",
];

const colorArray2 = [
  "#c9e8ff",
  "rgb(255, 225, 181)",
  "rgb(188, 253, 255)",
  "rgb(255, 214, 183)",
  "rgb(203, 255, 223)",
];

function randomcolorIndex() {
  const colorIndex = Math.floor(Math.random() * 4);
  return colorIndex;
}

function create(branch, divRow) {
  const colorIndex = randomcolorIndex();
  console.log(colorIndex);
  const Btn = document.createElement("a");
  Btn.textContent = "Apply Now";
  Btn.className = "button";
  Btn.style.backgroundColor = colorArray2[colorIndex];
  Btn.style.borderColor = colorArray[colorIndex];
  Btn.style.color = colorArray[colorIndex];

  const Fee = document.createElement("p");
  Fee.textContent = "Fee starting at $999";

  const Content = document.createElement("div");
  Content.className = "content";
  const contentHeader = document.createElement("h4");
  contentHeader.className = "content-header";
  contentHeader.style.color = colorArray[colorIndex];

  contentHeader.textContent = branch.short;
  const contentDesc = document.createElement("p");
  contentDesc.className = "content-desc";
  contentDesc.textContent = branch.name;
  Content.appendChild(contentHeader);
  Content.appendChild(contentDesc);
  Content.appendChild(Btn);
  Content.appendChild(Fee);
  divRow.appendChild(Content);
}

async function fn() {
  try {
    const request = await fetch("https://api.msigma.in/btech/v2/branches");
    let data = await request.json();
    console.log(data);

    const mainDiv = document.querySelector("body");

    for (let index = 0; index < data.branches.length; index++) {
      let branch = data.branches[index];

      const divRow = document.createElement("div");
      divRow.className = "divRow";
      create(branch, divRow);

      if (index < data.branches.length) {
        index += 1;
        branch = data.branches[index];
        create(branch, divRow);
      }

      mainDiv.appendChild(divRow);
    }
  } catch (error) {
    console.log(error);
  }
}

fn();
