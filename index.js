function render() {
    const productsStore = localStorageUtill.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render()
}

let CATALOG = []

render()

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
    })
    .catch(error => console.log(error);)