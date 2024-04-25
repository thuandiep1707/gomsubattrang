import '../assets/styles/shops.scss'

const shops = (main) => {
    history.pushState({}, 'shops')
    main.innerHTML = `shops`
}

export default shops