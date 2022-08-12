

const useFetch = () => {
    const url = 'https://api.mercadolibre.com/sites/MLA/search?q=ropa%20de%20abrigo'
    const titulo = document.getElementById ('tituloremeras');
    fetch(url).then(res => res.json())
        .then(data => {
            var productos = data.results
            var cards = document.getElementsByClassName ("card")
            for (let i = 0; i < cards.length; i++) {
                var childrenCard = cards [i].children
                childrenCard [0].src = productos[i].thumbnail
                var childrenCardBody =  childrenCard [1].children
                childrenCardBody [0].innerHTML = productos [i].title
                childrenCardBody [1].innerHTML = productos [i].price
            }
            //titulo.innerHTML = productos[0].title
        });
}