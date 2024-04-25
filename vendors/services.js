async function getCollection (){
    let data = await fetch('https://660a67010f324a9a2884edd1.mockapi.io/gomsuColection')
                .then(res => res.json())
                .then(data => data[0])
    delete data['id']
    return data
}

export { getCollection }