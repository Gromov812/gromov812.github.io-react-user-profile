
export default function (state, action) {



    switch (action.type) {

        case 'RANDOM_NUMBER_1_12':
            return {
                ...state,
                id: Math.floor((Math.random() * (13 - 1)) + 1)
            }

        case 'RELOAD':
            console.log(`action >>>`, action.type, state);
            return {...state,
                id: action.id,
                avatar: action.avatar,
                fname: action.fname,
                lname: action.lname,
                email: action.email,
            }
           


        default: return state;
    }
}