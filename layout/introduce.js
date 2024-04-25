import '../assets/styles/introduce.scss'

const introduce = (main) => {
    history.pushState({}, 'introduce')
    (async() => {
        const component = await fetch('./htmlpage/introduce.html');
        main.innerHTML = await component.text();
    })()
}

export default introduce
