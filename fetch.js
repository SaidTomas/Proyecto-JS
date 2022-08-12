

const useFetch = () => {
    const url = 'https://api.mercadolibre.com/sites/MLA/search?q=ropa'
    const titulo = document.getElementById ('tituloremeras');
    fetch(url).then(res => res.json())
        .then(data => {
            var productos = data.results
            titulo.innerHTML = productos[0].title
        });
}