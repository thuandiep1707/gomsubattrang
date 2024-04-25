import '../assets/styles/introduce.scss'

const login = (main) => {
    history.pushState({}, 'login')
    (async() => {
        const component = await fetch('./htmlpage/login.html');
        main.innerHTML = await component.text();
    })()
}

const register = (main) => {
    history.pushState({}, 'register')
    (async() => {
        const component = await fetch('./htmlpage/register.html');
        main.innerHTML = await component.text();
    })()
}

export { login, register}
