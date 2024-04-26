function routeNav (id){
    id.forEach(e=>{
      e.onclick = ()=>{
          history.pushState({}, '', e.getAttribute('data'))
      }
    })
  }

export { routeNav }