import {ADD_CONTACT,DELELTE_CONTACT,UP_CONTACT} from './types'

export const AjoutContact = (payload) => ({
    type: ADD_CONTACT,
    payload
})
export const UpdateContact = (payload) => ({
    type: UP_CONTACT,
    payload
})

export const DeleteContact = (payload) => ({
    type: DELELTE_CONTACT,
    payload
})


