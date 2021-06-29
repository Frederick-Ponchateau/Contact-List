import {ADD_CONTACT,DELELTE_CONTACT,UP_CONTACT} from '../Actions/types';

initStateContact=[ ];

const contacts = (state= initStateContact , action) => {
    console.log(action)
    switch (action.type) {
        case ADD_CONTACT:
            return [...state,action.payload]
        break;
        case DELELTE_CONTACT:
            
        const newContacts = state.filter(contact => contact.id !== action.payload )
          
            return newContacts;
          //  return action.payload
        break;
        case UP_CONTACT:
                            /********** Boucle sur mon state avec map *******/
            const newData = state.map(contact=>{ 
                /********** Si il y a un id qui  correspond on change le contenu du state ************/
                if(contact.id === action.payload.id){
                    return action.payload
                }
                return contact })
            
            return newData
        break;
        default:
            return state
        break;
    }
    
}

export default contacts
