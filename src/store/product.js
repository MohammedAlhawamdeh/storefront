
let initalState = {
    products:[
        {category:'food', name:'pizza',description:'tasty food' , price:'$15',count:20},
        {category:'gaming', name:'overwatch',description:'best game' , price:'$50',count:10},
        {category:'electornics', name:'MAC',description:'best OS' , price:'$1500',count:30},
    ]
}

export const productReducer = (state = initalState ) =>{
    return state
}
