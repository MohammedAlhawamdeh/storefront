let initalState = {
    categories:[
        {name:'food',description:'Food for you', displayName:'FOOD'},
        {name:'electornics',description:'Gadgets', displayName:'ELECTRONICS'},
        {name:'gaming',description:'latest Games', displayName:'GAMING'},
    ],
    activeCategory:'food'
}

// Action is an object that contains a type and payload properties

export const changeActiveCategory = name =>{
    return ({
        type:'ACTIVE_CATEGORY_CHANGED',
        payload:{
            activeCategory:name
        }
    })
}

// creating reducer
export const categoryReducer = ( state=initalState , action) =>{
        switch(action.type){
            case'ACTIVE_CATEGORY_CHANGED':
            return{
                categories:state.categories,
                activeCategory:action.payload.activeCategory
            }
            default:
                return state
        }
}