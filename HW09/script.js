let container = document.querySelector('#container');

function generateBlocks() {
  for (let i = 0; i < 5; i++) {
    let div = container.appendChild(document.createElement('div'));
    for (let j = 0; j < 5; j++) {
      let square = document.createElement('div');
      square.className = 'box';
      square.style.backgroundColor = generateRandomColor()   
      div.appendChild(square);
    }
  } 
  setInterval(() => {
    let elements = document.querySelectorAll(".box");
    elements.forEach((box) => {
      box.style.backgroundColor = generateRandomColor();
    });
  }, 1000);
}

generateBlocks()

function generateRandomColor()
{
    let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


