function render() {
    const productsStore = localStorageUtill.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render()
}

let CATALOG = []

//server/catalog.json

fetch('https://api.jsonserve.com/ZxY-WD')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        render()
    })
    .catch(error => console.log(error))