const perguntas = [

    {
        pergunta: "O que significa a sigla IA?",

        opcoes: [
            "Internet Avançada",
            "Inteligência Artificial",
            "Informação Automatizada",
            "Integração Algorítmica"
        ],

        correta: 1,

        explicacao:
            "IA significa Inteligência Artificial, área da computação dedicada à criação de sistemas capazes de realizar tarefas que normalmente exigem inteligência humana."
    },

    {
        pergunta: "Qual é um exemplo de aplicação de Inteligência Artificial?",

        opcoes: [
            "Assistentes virtuais",
            "Uma tomada elétrica",
            "Uma lâmpada comum",
            "Um cabo USB"
        ],

        correta: 0,

        explicacao:
            "Assistentes virtuais utilizam técnicas de Inteligência Artificial para compreender comandos e fornecer respostas."
    },

    {
        pergunta: "O que é Machine Learning?",

        opcoes: [
            "Um tipo de computador",
            "Uma linguagem de programação",
            "Uma área da IA que permite aprender com dados",
            "Um sistema operacional"
        ],

        correta: 2,

        explicacao:
            "Machine Learning, ou aprendizado de máquina, permite que sistemas aprendam padrões a partir de dados."
    },

    {
        pergunta: "O que são dados de treinamento em IA?",

        opcoes: [
            "Dados usados para ensinar um modelo",
            "Arquivos usados apenas para backup",
            "Senhas de usuários",
            "Programas de edição"
        ],

        correta: 0,

        explicacao:
            "Dados de treinamento são exemplos utilizados para que um modelo de IA aprenda padrões e relações."
    },

    {
        pergunta: "O que é uma rede neural artificial?",

        opcoes: [
            "Uma rede social",
            "Um modelo inspirado no funcionamento dos neurônios",
            "Um tipo de cabo de internet",
            "Um antivírus"
        ],

        correta: 1,

        explicacao:
            "Redes neurais artificiais são modelos computacionais inspirados, de forma simplificada, no funcionamento de redes de neurônios biológicos."
    },

    {
        pergunta: "O que é IA generativa?",

        opcoes: [
            "Uma IA que apenas armazena arquivos",
            "Uma tecnologia capaz de gerar conteúdo",
            "Um sistema para aumentar a velocidade da internet",
            "Um tipo de hardware"
        ],

        correta: 1,

        explicacao:
            "IA generativa pode criar conteúdos como textos, imagens, áudios, vídeos e código a partir de instruções e dados aprendidos."
    },

    {
        pergunta: "Qual destes pode ser produzido por uma IA generativa?",

        opcoes: [
            "Texto",
            "Imagem",
            "Código",
            "Todas as alternativas"
        ],

        correta: 3,

        explicacao:
            "Sistemas de IA generativa podem produzir diferentes tipos de conteúdo, incluindo textos, imagens e código."
    },

    {
        pergunta: "O que é um algoritmo?",

        opcoes: [
            "Uma sequência de instruções para resolver um problema",
            "Um tipo de monitor",
            "Uma peça de computador",
            "Um arquivo de imagem"
        ],

        correta: 0,

        explicacao:
            "Um algoritmo é uma sequência organizada de instruções ou etapas utilizada para resolver um problema ou realizar uma tarefa."
    },

    {
        pergunta: "Por que os dados são importantes para a Inteligência Artificial?",

        opcoes: [
            "Porque ajudam os modelos a identificar padrões",
            "Porque substituem o computador",
            "Porque aumentam o tamanho da tela",
            "Porque eliminam a necessidade de algoritmos"
        ],

        correta: 0,

        explicacao:
            "Dados de qualidade são fundamentais para treinar, avaliar e melhorar muitos sistemas de Inteligência Artificial."
    },

    {
        pergunta: "Qual é uma boa prática ao utilizar informações produzidas por uma IA?",

        opcoes: [
            "Aceitar tudo sem verificar",
            "Compartilhar qualquer informação imediatamente",
            "Verificar informações importantes em fontes confiáveis",
            "Nunca utilizar IA"
        ],

        correta: 2,

        explicacao:
            "É importante verificar informações relevantes, pois sistemas de IA podem produzir respostas incorretas ou imprecisas."
    }

];


// VARIÁVEIS DO QUIZ

let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


// ELEMENTOS DO HTML

const perguntaElemento =
    document.getElementById("pergunta");

const opcoesElemento =
    document.getElementById("opcoes");

const feedbackElemento =
    document.getElementById("feedback");

const contadorElemento =
    document.getElementById("contador");

const pontosElemento =
    document.getElementById("pontos");

const progressoElemento =
    document.getElementById("progresso");

const botaoProxima =
    document.getElementById("proxima");

const quizElemento =
    document.getElementById("quiz");

const resultadoElemento =
    document.getElementById("resultado");

const pontuacaoFinal =
    document.getElementById("pontuacao-final");

const porcentagemElemento =
    document.getElementById("porcentagem");

const mensagemElemento =
    document.getElementById("mensagem");

const botaoReiniciar =
    document.getElementById("reiniciar");


// CARREGAR PERGUNTA

function carregarPergunta() {

    respondeu = false;

    feedbackElemento.textContent = "";

    feedbackElemento.className = "";

    botaoProxima.disabled = true;

    const pergunta =
        perguntas[perguntaAtual];


    perguntaElemento.textContent =
        pergunta.pergunta;


    contadorElemento.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    pontosElemento.textContent =
        `🏆 ${pontos} pontos`;


    const porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;


    progressoElemento.style.width =
        porcentagem + "%";


    opcoesElemento.innerHTML = "";


    pergunta.opcoes.forEach(
        function(opcao, indice) {

            const botao =
                document.createElement("button");

            botao.classList.add("opcao");

            botao.textContent =
                `${String.fromCharCode(65 + indice)}) ${opcao}`;


            botao.addEventListener(
                "click",
                function() {

                    selecionarResposta(
                        indice,
                        botao
                    );

                }
            );


            opcoesElemento.appendChild(botao);

        }
    );
}


// SELECIONAR RESPOSTA

function selecionarResposta(
    indiceSelecionado,
    botaoSelecionado
) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const pergunta =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(".opcao");


    botoes.forEach(
        function(botao) {

            botao.classList.add(
                "desabilitada"
            );

        }
    );


    if (
        indiceSelecionado ===
        pergunta.correta
    ) {

        pontos++;


        botaoSelecionado.classList.add(
            "correta"
        );


        feedbackElemento.textContent =
            "✅ Resposta correta! " +
            pergunta.explicacao;


        feedbackElemento.classList.add(
            "feedback-certo"
        );

    } else {

        botaoSelecionado.classList.add(
            "errada"
        );


        botoes[
            pergunta.correta
        ].classList.add("correta");


        feedbackElemento.textContent =
            "❌ Resposta incorreta! " +
            pergunta.explicacao;


        feedbackElemento.classList.add(
            "feedback-errado"
        );

    }


    pontosElemento.textContent =
        `🏆 ${pontos} pontos`;


    botaoProxima.disabled = false;
}


// PRÓXIMA PERGUNTA

function proximaPergunta() {

    if (!respondeu) {
        return;
    }


    perguntaAtual++;


    if (
        perguntaAtual <
        perguntas.length
    ) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }
}


// MOSTRAR RESULTADO

function mostrarResultado() {

    quizElemento.classList.add(
        "escondido"
    );


    resultadoElemento.classList.remove(
        "escondido"
    );


    const total =
        perguntas.length;


    const porcentagem =
        Math.round(
            (pontos / total) * 100
        );


    pontuacaoFinal.textContent =
        `${pontos}/${total}`;


    porcentagemElemento.textContent =
        `${porcentagem}%`;


    if (porcentagem === 100) {

        mensagemElemento.textContent =
            "🤖 Perfeito! Você domina os principais conceitos de Inteligência Artificial!";

    } else if (porcentagem >= 80) {

        mensagemElemento.textContent =
            "🧠 Excelente! Você conhece muito sobre Inteligência Artificial!";

    } else if (porcentagem >= 60) {

        mensagemElemento.textContent =
            "💡 Muito bom! Você já conhece vários conceitos importantes de IA!";

    } else if (porcentagem >= 40) {

        mensagemElemento.textContent =
            "📚 Você está no caminho certo! Continue aprendendo sobre IA!";

    } else {

        mensagemElemento.textContent =
            "🚀 Que tal estudar um pouco mais sobre Inteligência Artificial e tentar novamente?";
    }
}


// REINICIAR

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    respondeu = false;


    resultadoElemento.classList.add(
        "escondido"
    );


    quizElemento.classList.remove(
        "escondido"
    );


    carregarPergunta();
}


// EVENTOS

botaoProxima.addEventListener(
    "click",
    proximaPergunta
);


botaoReiniciar.addEventListener(
    "click",
    reiniciarQuiz
);


// INICIAR QUIZ

carregarPergunta();