export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }
    route(event){
        event = event || window.event //Verifica se eu passei um evento, se eu nao passei pega um evento geral do browser
        event.preventDefault() //Resposavel por previnir meu evento padrao
        window.history.pushState({}, "", event.target.href) //ta puxando o meu historico e avisando que troquei de página, essa página nova é o meu href
        
        this.handle()
    }

     handle(){
        const { pathname } = window.location //Puxando o pathname que me encontro, mesma coisa de const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

} //classe



