const testimonials = [
  {
    name: "Gandalf, S",
    text: "“Investir em energia solar foi a melhor decisão que já tomei. Desde que instalamos nosso sistema fotovoltaico, nossas contas de energia despencaram, e agora estamos economizando significativamente a cada mês. Além disso, a equipe da Nunes Energia foi incrivelmente profissional e eficiente durante todo o processo. Recomendo a todos que buscam uma solução sustentável e econômica.”",
  },
  {
    name: "José, F",
    text: "“Minha experiência com a Nunes Energia foi excepcional do início ao fim. Desde o primeiro contato até a instalação do sistema solar, a equipe mostrou um comprometimento notável com o cliente. A transição para a energia solar foi suave, e agora desfrutamos dos benefícios de uma casa mais sustentável. Estou muito satisfeito com o serviço prestado.”",
  },
  {
    name: "Maria, E",
    text: "“Cada vez que recebo um depoimento eu me sinto muito realizada, é uma parte de um sonho que está sendo realizado a cada dia! Nas formações de Reiki passo muito conhecimento, ensino técnicas mas também passo muito amor, dedicação e respeito. Cada um dos 600 alunos que tive esse ano é um pedaço de mim levado ao mundo um verdadeiro”",
  },
  {
    name: "Lina, N",
    text: "“Eu sempre quis fazer a transição para uma fonte de energia mais sustentável, mas estava preocupado com a complexidade do processo. A Nunes Energia tornou tudo simples e fácil. A equipe guiou-me através de cada etapa, desde a avaliação inicial até a ativação do sistema solar. Agora, estou orgulhoso de minha decisão e do impacto positivo que estou tendo no meio ambiente.”",
  },
  {
    name: "Fabio, E",
    text: "“A qualidade do sistema solar instalado pela Nunes Energia superou minhas expectativas. Meses após a instalação, meu sistema está operando de maneira eficiente, gerando mais energia do que o previsto. Estou impressionado não apenas com a economia de custos, mas também com o desempenho ambiental do sistema.”",
  },
];

let currentCrouselIndex = 0;

let isInterval = setInterval(function () {
  changeTestimonials(currentCrouselIndex++);
}, 4000);

function reloadInterval() {
  clearInterval(isInterval);
  isInterval = setInterval(function () {
    changeTestimonials(++currentCrouselIndex);
  }, 4000);
}

function changeTestimonials(index) {
  index = index % testimonials.length;

  if (currentCrouselIndex != index) currentCrouselIndex = index;

  const name = document.getElementById("nome_testemunho");
  const text = document.getElementById("texto_testemunho");
  name && (name.innerText = testimonials[index].name);
  text && (text.innerText = testimonials[index].text);

  var buttonsCarousel = document.querySelector(".carousel_button_items");

  if (buttonsCarousel) {
    var buttonsList = buttonsCarousel.querySelectorAll("button");

    for (let i = 0; i < buttonsList.length; i++) {
      i == index
        ? buttonsList[i].classList.add("actived")
        : buttonsList[i].classList.remove("actived");
    }
  }
  reloadInterval();
}

changeTestimonials(0);

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll("input:not(:last-child)");
    allInputs.forEach(function (field) {
      field.value = "";
    });
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert(
        "Seus dados foram salvos! Um de nossos representantes comerciais entrará em contato em breve!"
      );
    });
  });
});
