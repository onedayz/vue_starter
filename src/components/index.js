import toy from "./toyComponents";
export default {
    install: app => {
       toy.components.forEach(compo => {
           app.component(compo.name, compo)
       })
    }
}