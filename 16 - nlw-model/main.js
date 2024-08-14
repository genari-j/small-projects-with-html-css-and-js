/* 1ª Ação: abre e fecha o ícone menu Mobile */

// Variável 'nav' criada solicitando uma consulta para encontrar os documentos HTML (header e nav)
// O documento está sendo encontrado e "armazenado" na const 'nav' abaixo
const nav = document.querySelector('#header nav')

/* Variável criada solicitando uma consulta para encontrar dentro do documento HTML 'nav' todas
as classes 'toggle' devido o 'ALL' na query abaixo */
// Itens encontrados e armazenados na const toggle
const toggle = document.querySelectorAll("nav .toggle")

/* Devido ao FOR, a const element vai "rodar" uma vez e buscar o primeiro elemento ..
Em seguida vai rodar mais uma vez e buscar o segundo elemento .. */
// Iria girar todas as vezes se baseando na quantia de elementos. Exemplo: imagine que 'toggle' tivesse 1000 elementos.
for (const div of toggle) {
    /* Imagine dessa forma, (Abaixo está sendo adicionado um evento ouvinte 'click' e uma
    função pedindo para adiconar e em seguida remover a class 'show' ) */
    div.addEventListener('click', function () { nav.classList.toggle('show') })
}

/* Final da primeira ação */





/* 2ª Ação: Fecha o menu e volta para a página após vc clicar na sua escolhe */

// Variável criada para encontrar meus documentos HTML 'header e ul'
const list = document.querySelector('#header ul')

// Varíavel criada para encontrar meus documentos HTML 'nav ul li'
const titles = document.querySelectorAll("nav ul li")

// Função criada para fechar o menu, após escolher o título desejado
for (const div of titles) {
    div.addEventListener('click', function () { nav.classList.remove('show') })
}

/* Final da segunda ação */





/* 3ª Ação: Mudar o header da página quando girar o scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        // Scroll é maior que a altura do Header
        header.classList.add('scroll')
    } else {
        // Scroll é menor que a altura do Header
        header.classList.remove('scroll')
    }
})





/* 4ª Ação: Criando o scrollreveal na página */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

/* Cada ID do HTML está incluso na função abaixo pegando as classes indicada para aplicar o
estilo ( tempo de aparecimento ) */
scrollReveal.reveal(
    `#company .image, #company .text,
    #administrative .image, #administrative .text,
    #finances .image, #finances .text,
    #recrutament .image, #recrutament .text,
    #commercial .image, #commercial .text,
    #vendor header, #vendor .vendor,
    #services header, #services .card,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 })

/* Final */





/* 5ª Ação: Botão voltar para o topo */

/* Variável recebendo a class back to top do HTML */
const backToTopButton = document.querySelector('.back-to-top')
/* Adicionando uma função no botão desejado (scroll) */
window.addEventListener('scroll', function () {
    /* Se a tela identificar a rolagem do scroll abaixo de 800, a class show será inserida */
    if (window.scrollY >= 800) {
        /* Classe adicionada */
        backToTopButton.classList.add('show')
        /* Se não */
    } else {
        /* Classe show removida */
        backToTopButton.classList.remove('show')
    }
})

/* Final */






/* Menu ativo conforme a sessão visível da página */

/* Selecionando todas as sessões do main */
const sections = document.querySelectorAll('main section[id]')

/* Criando a função */
function activateMenu() {
    /* Window page mais a conta na frente, irá dividir a tela mais ou menos no tamanho da sessão */
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    /* Para cada sessão das sessões */
    for (const section of sections) {
        /* Pegando o topo da sessão */
        const sectionTop = section.offsetTop
        /* Pegando a altura */
        const sectionHeight = section.offsetHeight
        /* Pegando o id */
        const sectionId = section.getAttribute('id')


        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function () {
    activateMenu()
})