function render() {
    const productsStore = localStorageUtill.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render()
}

let CATALOG = []

// https://api.jsonserve.com/ZxY-WD

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        render()
    })
    .catch(error => console.log(error))