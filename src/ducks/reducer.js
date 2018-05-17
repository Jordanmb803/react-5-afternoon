let intial_state = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'

export function reducer(state=intial_state, action) {
    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})    
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})    
        default:
            return state;
    }
}



export function update_loan(loanType){
   return{
       type: UPDATE_LOAN_TYPE,
       payload: loanType
    }
}

export function update_property(property){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}


export default reducer;