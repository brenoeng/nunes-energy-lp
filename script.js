const testimonials = [
  {
    name: "Gandalf, S",
    text: "“Investir em energia solar foi a melhor decisão que já tomei. Desde que instalamos nosso sistema fotovoltaico, nossas contas de energia despencaram, e agora estamos economizando significativamente a cada mês. Além disso, a equipe da Nunes Energia foi incrivelmente profissional e eficiente durante todo o processo. Recomendo a todos que buscam uma solução sustentável e econômica.”",
  },
  {
    name: "José, F",
    text: "“Minha experiência com a Nunes Energy foi excepcional do início ao fim. Desde o primeiro contato até a instalação do sistema solar, a equipe mostrou um comprometimento notável com o cliente. A transição para a energia solar foi suave, e agora desfrutamos dos benefícios de uma casa mais sustentável. Estou muito satisfeito com o serviço prestado.”",
  },
  {
    name: "Maria, E",
    text: "“Minha trajetória com a Nunes Energy foi marcada por um profissionalismo notável do princípio ao fim. Desde o primeiro contato até a conclusão da instalação do sistema solar, a equipe demonstrou um comprometimento excepcional com o cliente. A transição para a energia solar foi gerida de forma eficiente, e agora, colhemos os frutos de uma residência mais sustentável. Estou extremamente satisfeito com a qualidade e o profissionalismo demonstrados durante todo o processo. A Nunes Energy se destaca como uma escolha confiável e profissional para quem busca uma transição tranquila para a energia solar.”",
  },
  {
    name: "Lina, N",
    text: "“Eu sempre quis fazer a transição para uma fonte de energia mais sustentável, mas estava preocupado com a complexidade do processo. A Nunes Energy tornou tudo simples e fácil. A equipe guiou-me através de cada etapa, desde a avaliação inicial até a ativação do sistema solar. Agora, estou orgulhoso de minha decisão e do impacto positivo que estou tendo no meio ambiente.”",
  },
  {
    name: "Fabio, E",
    text: "“A qualidade do sistema solar instalado pela Nunes Energy superou minhas expectativas. Meses após a instalação, meu sistema está operando de maneira eficiente, gerando mais energia do que o previsto. Estou impressionado não apenas com a economia de custos, mas também com o desempenho ambiental do sistema.”",
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

    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
    })
      .then((resp) => {
        return resp.json();
      })
      .then(() => {
        let allInputs = document.querySelectorAll("input:not(:last-child)");
        allInputs.forEach(function (field) {
          field.value = "";
        });
        alert(
          "Seus dados foram salvos! Um de nossos representantes comerciais entrará em contato em breve!"
        );
      });
  });
});
