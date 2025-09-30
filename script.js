/* Alterar nome dos jogadores */
document.getElementById("jogadorX").addEventListener("click", () => {
  setName("X");
});
document.getElementById("jogadorO").addEventListener("click", () => {
  setName("O");
});

let nomeX = "";
let nomeO = "";
function setName(x) {
  let nome = document.querySelector(`#jogador${x}`);
  nome.remove();

  let divNome = document.querySelector(`#divJogador${x}`);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", `inputNome${x}`);
  input.setAttribute("class", "inputNome");
  input.setAttribute("maxlength", "10");
  input.value = eval(`nome${x}`);
  divNome.appendChild(input);
  input.focus();
  input.addEventListener("focusout", () => {
    confirmaNome(x);
  });
}

function confirmaNome(x) {
  let novoNome = document.querySelector(`#inputNome${x}`).value;
  if (x == "X") {
    nomeX = novoNome;
  } else if (x == "O") {
    nomeO = novoNome;
  }
  document.querySelector(`#inputNome${x}`).remove();
  let divNome = document.querySelector(`#divJogador${x}`);

  let novoH2 = document.createElement("h2");
  novoH2.setAttribute("id", `jogador${x}`);
  novoH2.setAttribute("class", `nomeJogador`);
  novoH2.innerHTML = novoNome + " " + x;
  divNome.appendChild(novoH2);

  document.getElementById(`jogador${x}`).addEventListener("click", () => {
    setName(x);
  });
}

/* Ativando a função de tela cheia */
document.querySelector("#telaCheia").addEventListener("click", () => {
  estaEmTelaCheia();
});
let body = document.querySelector("body");
let modoTelaCheia = false;

/* verifica se esta em tela cheia */
function estaEmTelaCheia() {
  modoTelaCheia =
    document.fullScreen ||
    document.msFullScreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen;
  telacheia();
}

function telacheia() {
  if (modoTelaCheia == false) {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.webkitRequestFullscreen) {
      /* Safari */
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) {
      /* IE11 */
      body.msRequestFullscreen();
    }
    document.querySelector("#telaCheia").style.backgroundImage =
      "url('imagens/telaCheiaSair.png')";
    modoTelaCheia = true;
  } else if (modoTelaCheia == true) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    document.querySelector("#telaCheia").style.backgroundImage =
      "url('imagens/telaCheiaEntrar.png')";
    modoTelaCheia = false;
  }
}

/* Memoria de cada jogada */
let jogadas = 0;
let temVencedor = false;
let jogadorDaVez = "X";
let A1 = null;
let B1 = null;
let C1 = null;
let A2 = null;
let B2 = null;
let C2 = null;
let A3 = null;
let B3 = null;
let C3 = null;
let podeJogar = true;

/* Controle do jogo com teclado */
function teclaPrecionada(event) {
  switch (event.key) {
    case "Backspace":
      limparJogadas("Limpar");
      break;
    case "7":
      marcarJogada("A1");
      break;
    case "8":
      marcarJogada("B1");
      break;
    case "9":
      marcarJogada("C1");
      break;
    case "4":
      marcarJogada("A2");
      break;
    case "5":
      marcarJogada("B2");
      break;
    case "6":
      marcarJogada("C2");
      break;
    case "1":
      marcarJogada("A3");
      break;
    case "2":
      marcarJogada("B3");
      break;
    case "3":
      marcarJogada("C3");
      break;
    case "Escape":
      alert("esc pressed");
      break;
  }
}

/* Inicia a jogada atravez do click */
document.querySelector("#A1").addEventListener("click", () => {
  marcarJogada("A1");
});
document.querySelector("#B1").addEventListener("click", () => {
  marcarJogada("B1");
});
document.querySelector("#C1").addEventListener("click", () => {
  marcarJogada("C1");
});
document.querySelector("#A2").addEventListener("click", () => {
  marcarJogada("A2");
});
document.querySelector("#B2").addEventListener("click", () => {
  marcarJogada("B2");
});
document.querySelector("#C2").addEventListener("click", () => {
  marcarJogada("C2");
});
document.querySelector("#A3").addEventListener("click", () => {
  marcarJogada("A3");
});
document.querySelector("#B3").addEventListener("click", () => {
  marcarJogada("B3");
});
document.querySelector("#C3").addEventListener("click", () => {
  marcarJogada("C3");
});

/* Marcar jogadas */
function marcarJogada(posicao) {
  if (eval(posicao) == null && podeJogar == true) {
    podeJogar = false;

    let background = document.querySelector(`#${posicao}`);
    let vezDoJogador = document.querySelector("#vezDoJogador");
    background.removeAttribute("style");
    background.style.backgroundImage = `url('imagens/${jogadorDaVez}.png')`;
    eval(`p${posicao}(jogadorDaVez)`);
    jogadorDaVez = jogadorDaVez == "X" ? "O" : "X";
    vezDoJogador.innerHTML = `<p>É a vez do ${jogadorDaVez}</p>`;
    jogadas++;
    verificaGanhador();
  }
}

function pA1(jogador) {
  A1 = jogador;
}
function pB1(jogador) {
  B1 = jogador;
}
function pC1(jogador) {
  C1 = jogador;
}
function pA2(jogador) {
  A2 = jogador;
}
function pB2(jogador) {
  B2 = jogador;
}
function pC2(jogador) {
  C2 = jogador;
}
function pA3(jogador) {
  A3 = jogador;
}
function pB3(jogador) {
  B3 = jogador;
}
function pC3(jogador) {
  C3 = jogador;
}

/* Verifica ganhador */

function verificaGanhador() {
  let op1 = false;
  let op2 = false;
  let op3 = false;
  let op4 = false;
  let op5 = false;
  let op6 = false;
  let op7 = false;
  let op8 = false;

  if (A1 != null) {
    op1 = A1 == B1 && A1 == C1;
  }
  if (A2 != null) {
    op2 = A2 == B2 && A2 == C2;
  }
  if (A3 != null) {
    op3 = A3 == B3 && A3 == C3;
  }
  if (A1 != null) {
    op4 = A1 == A2 && A1 == A3;
  }
  if (B1 != null) {
    op5 = B1 == B2 && B1 == B3;
  }
  if (C1 != null) {
    op6 = C1 == C2 && C1 == C3;
  }
  if (A1 != null) {
    op7 = A1 == B2 && A1 == C3;
  }
  if (A3 != null) {
    op8 = A3 == B2 && A3 == C1;
  }

  let possibilidades = [op1, op2, op3, op4, op5, op6, op7, op8];

  possibilidades.forEach(verificando);
  function verificando(item, index) {
    if (item == true && temVencedor == false) {
      switch (index) {
        case 0:
          temVencedor = true;
          mostrandoVitoria("A1", "B1", "C1", A1);
          break;
        case 3:
          temVencedor = true;
          mostrandoVitoria("A1", "A2", "A3", A1);
          break;
        case 6:
          temVencedor = true;
          mostrandoVitoria("A1", "B2", "C3", A1);
          break;
        case 1:
          temVencedor = true;
          mostrandoVitoria("A2", "B2", "C2", A2);
          break;
        case 2:
          temVencedor = true;
          mostrandoVitoria("A3", "B3", "C3", A3);
          break;
        case 7:
          temVencedor = true;
          mostrandoVitoria("A3", "B2", "C1", A3);
          break;
        case 4:
          temVencedor = true;
          mostrandoVitoria("B1", "B2", "B3", B1);
          break;
        case 5:
          temVencedor = true;
          mostrandoVitoria("C1", "C2", "C3", C1);
          break;
      }
    }
  }
  /* Finaliza o jogo com velha em 9 rodadas se ou hover vencedor */
  if (jogadas == 9 && !temVencedor) {
    somarPontos("# Velha #");
  } else if (!temVencedor) {
    podeJogar = true;
  }
}

/* Mostrando onde ocorreu a vitoria */
function mostrandoVitoria(posicao1, posicao2, posicao3, posicaoVencedora) {
  setTimeout(() => {
    document.querySelector(`#${posicao1}`).style.backgroundColor =
      "var(--corVencendo)";
  }, 300);

  setTimeout(() => {
    document.querySelector(`#${posicao2}`).style.backgroundColor =
      "var(--corVencendo)";
  }, 600);

  setTimeout(() => {
    document.querySelector(`#${posicao3}`).style.backgroundColor =
      "var(--corVencendo)";
  }, 900);

  setTimeout(() => {
    somarPontos(posicaoVencedora);
  }, 1200);
}

/* Soma somar pontos */
var pontosJogadorX = 0;
var pontosJogadorO = 0;

function somarPontos(x) {
  if (x == "# Velha #") {
    limparJogadas(x);
  } else {
    let pontosAtuais = eval(`pontosJogador${x}`);
    if (pontosAtuais < 5) {
      pontosAtuais++;

      if (x == "X") {
        pontosJogadorX = pontosAtuais;
      } else if (x == "O") {
        pontosJogadorO = pontosAtuais;
      }

      document.querySelector(
        `#divPontosJogador${x}`
      ).style.backgroundImage = `url('imagens/${pontosAtuais}pontos.png')`;

      /* Verificando se o jogo acabou */
      if (pontosAtuais == 5) {
        let divMostrandoVencedor = document.querySelector("#mostrandoVencedor");
        divMostrandoVencedor.style.display = "initial";
        let intervalo = 250;
        let voltas = 25;
        for (let index = 0; index < voltas; index++) {
          let lado;
          if (index % 2 > 0) {
            lado = "D";
          } else {
            lado = "E";
          }
          let tempo = index * intervalo;
          setTimeout(() => {
            divMostrandoVencedor.style.backgroundImage = `url('imagens/vitoria${lado}.png')`;
          }, tempo);
        }
        pontosJogadorX = 0;
        pontosJogadorO = 0;
        document.querySelector("#divPontosJogadorX").style.backgroundImage =
          "url('imagens/0pontos.png')";
        document.querySelector("#divPontosJogadorO").style.backgroundImage =
          "url('imagens/0pontos.png')";
        setTimeout(() => {
          limparJogadas(x);
          divMostrandoVencedor.style.backgroundImage = "none";
        }, voltas * intervalo);
      } else {
        limparJogadas(x);
      }
    }
  }
}

/* Limpar jogadas */
document.querySelector("#limparjogadas").addEventListener("click", () => {
  limparJogadas("Limpar");
});
function limparJogadas(x) {
  let posicoes = document.querySelectorAll(".posicao");
  posicoes.forEach((element) => {
    element.style.backgroundImage = "none";
    element.style.backgroundColor = "var(--corFundoVazio)";
  });

  A1 = null;
  B1 = null;
  C1 = null;
  A2 = null;
  B2 = null;
  C2 = null;
  A3 = null;
  B3 = null;
  C3 = null;
  jogadas = 0;
  temVencedor = false;
  mostrandoVencedor(x);
}

/* Animação de vitoria */
function mostrandoVencedor(x) {
  let nome;
  if (x != "Limpar") {
    if (x == "# Velha #") {
      nome = x;
    } else {
      nome = document.querySelector(`#jogador${x}`).textContent;
      document.querySelector("#mostrandoVencedor").style.backgroundColor =
        "var(--corBloqueiDeTela)";
    }
    document.querySelector(`#nomeVencedor`).innerHTML = "Vitória de " + nome;

    document.querySelector("#mostrandoVencedor").style.display = "initial";
    setTimeout(() => {
      document.querySelector("#mostrandoVencedor").style.display = "none";
      document.querySelector(`#nomeVencedor`).innerHTML = "";
      podeJogar = true;
    }, 1500);
  }
}
