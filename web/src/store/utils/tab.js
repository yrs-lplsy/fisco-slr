export default {
    state: {
        isCollapse: true,
        menu: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'House',
                url: 'Home/home',
            },
            {
                path: '/product',
                name: 'product',
                label: '产品信息',
                icon: 'Menu',
                url: 'Menu/menu',
            },
            {

            }
        ],
        tags: [],
    },
    getters: {

    },
    mutations: {
        stateMenu(state, isCollapse){
            state.isCollapse = !isCollapse
        },
        addTag(state, tag){
            state.tags.push(tag)
        },
        closeTag(state, tag){
            let index = state.tags.findIndex(item => item.name === tag.name)
            state.tags.splice(index, 1)
        }
    },
    actions: {

    },
    modules: {

    }
}