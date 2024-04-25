import '../assets/styles/checkout.scss'

const checkout = (main) => {
    history.pushState({}, 'checkout')
    main.innerHTML = `checkout`
}

export default checkout
