const { combineReducers, createStore } = require("redux")

const intialLaptopState={
    numOfLaptops:100
}

const buyLaptop =()=>{
    return {
        type :"Buy_Laptop"
    }
}

const intialMobilesState={
    numOfMobiles:500
}

const buyMobiles =()=>{
    return {
        type :"Buy_Mobiles"
    }
}


const laptopReducer = (state=intialLaptopState,action)=>{
    switch (action.type) {
        case "Buy_Laptop":
            return{numOfLaptops:state.numOfLaptops-1}
        default:
            return state;
    }
}
const mobilesReducer = (state=intialMobilesState,action)=>{
    switch (action.type) {
        case "Buy_Mobiles":
            return{numOfMobiles:state.numOfMobiles-1}
        default:
            return state;
    }
}

const mainReducer = combineReducers({laptops:laptopReducer,mobiles:mobilesReducer})
const store = createStore(mainReducer);

store.subscribe(() => {
    console.log(store.getState());
  });
store.dispatch(buyLaptop());
store.dispatch(buyMobiles());
store.dispatch(buyMobiles());
store.dispatch(buyMobiles());
store.dispatch(buyMobiles());
store.dispatch(buyMobiles());