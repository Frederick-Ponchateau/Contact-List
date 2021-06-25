import {ADD_CONTACT} from '../Actions/types';

initStateContact=[ {
    id: 1,
    name: 'Amy Farha',
    avatar_url: 'https://img.icons8.com/ios/452/contacts.png',
    subtitle: 'Vice President'
  }];

const contacts = (state= initStateContact , action) => {
    console.log(action)
    switch (action.type) {
     /*   case AFF_MODAL:
            return action.payload;
        break;*/
        case ADD_CONTACT:
            return [...state,action.payload]
        break;
        default:
            return state
        break;
    }
    
}

export default contacts
