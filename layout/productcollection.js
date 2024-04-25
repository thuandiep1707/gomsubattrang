import '../assets/styles/productcollection.scss'

const productcollection = (main) => {
    history.pushState({}, 'productcollection')
    main.innerHTML = `productcollection`
}

export default productcollection