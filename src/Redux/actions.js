// action types
export let SHOW_DATA = "SHOW_DATA";
export let ADD_DATA = "ADD_DATA";

// Action Creators

export function showData(data) {
    return {
        type: SHOW_DATA,
        payload: data
    }
}
export function addData (data) {
    return {
        type: ADD_DATA,
        payload: data
    }
}
