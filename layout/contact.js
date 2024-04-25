import '../assets/styles/contact.scss'

const contact = (main) => {
    history.pushState({}, 'contact')
    (async() => {
        const component = await fetch('./htmlpage/contact.html');
        main.innerHTML = await component.text();
    })()
}

export default contact
