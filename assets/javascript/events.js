import * as elementos from "./elements.js"

export function homeButton (){
    elementos.homeButton[0].addEventListener('click', () => {
        if (elementos.page[0].classList.contains('selecthome')) {
            return
          } else {
            elementos.page[0].classList.add('selecthome')
            elementos.page[0].classList.remove('selectUniverse')
            elementos.page[0].classList.remove('selectExploration')
          }
    })
}

export function universeButton(){
    elementos.universeButton[0].addEventListener('click', () => {
        if (elementos.page[0].classList.contains('selectUniverse')) {
            return
        } else {
            elementos.page[0].classList.add('selectUniverse')
            elementos.page[0].classList.remove('selecthome')
            elementos.page[0].classList.remove('selectExploration')
        }
    })
}


export function explorationButton(){
    elementos.explorationButton[0].addEventListener('click', () => {
        if (elementos.page[0].classList.contains('selectExploration')) {
            return
        } else {
            elementos.page[0].classList.add('selectExploration')
            elementos.page[0].classList.remove('selecthome')
            elementos.page[0].classList.remove('selectUniverse')
        }
    })
}


