function routeNav1 (){
    document.querySelectorAll('.nav1 li').forEach(e=>{
      e.onclick = ()=>{
          history.pushState({}, '', e.getAttribute('data'))
      }
    })
  }
  
function routeNav3 (){
  document.querySelectorAll('.nav3_list li').forEach(e=>{
    e.onclick = ()=>{
        history.pushState({}, '', e.getAttribute('data'))
    }
  })
}

export { routeNav1, routeNav3 }