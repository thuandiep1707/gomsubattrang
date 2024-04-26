async function getCollection (){
    let data = await fetch('https://660a67010f324a9a2884edd1.mockapi.io/gomsuColection')
                .then(res => res.json())
    delete data[0]['id']
    return data[0]
}

export { getCollection }