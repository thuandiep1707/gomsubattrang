import '../assets/styles/news.scss'

const news = (main) => {
    history.pushState({}, 'news')
    main.innerHTML = `news`
}

export default news
