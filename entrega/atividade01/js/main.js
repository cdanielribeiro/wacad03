// Carregando elemento input Text 
const customName = document.getElementById("customname");

// Carregando o elemento Button
const randomize = document.querySelector(".randomize");

// Carregando o elemento 'p' de class .story'
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  // "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:.   Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
// const storyText = 
"Receita do Chef Daniel de :insertx:. "+
"Bata as claras em neve e reserve. "+
"Misture as gemas, :inserty: e o açúcar até obter uma massa homogênea. "+
"Acrescente o leite e a farinha de :insertz: aos poucos, sem parar de bater. "+
"Por último, adicione as claras em neve e o fermento. "+
"Despeje a massa em uma forma grande de furo central untada e enfarinhada. "+
"Asse em forno médio 356 °F, preaquecido, por aproximadamente 40 minutos ou ao furar o bolo com um garfo, este saia limpo. "+
"Retire o bolo assado da forma e sirva. ";

const insertX = ["Bolo simples", "Bolo Especial", "Bolo da Vóvo"];
const insertY = ["a Margarina", "a Manteiga", " o Óleo"];
const insertZ = ["trigo", "milho", "aveia"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Daniel', name);
  }

  if (document.getElementById("br").checked) {
    
    const temperature =  ' 180 °C';
    newStory = newStory.replaceAll('356 °F', temperature);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
