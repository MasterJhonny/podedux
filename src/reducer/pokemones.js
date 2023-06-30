import { SET_POKEMONS } from '../actions/types';
const initialState = {
    pokemones: []
}

export const pokemonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemones: action.payload
            }
        default:
            return state;
    }
}