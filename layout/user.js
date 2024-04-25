import '../assets/styles/user.scss'

const user = (main) => {
    history.pushState({}, 'user')
    main.innerHTML = `user`
}

export default user
