export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:  "BQCZiUWYjWO9Z-FKeI_q8aiTJKbOraMU76Snv15xPN0LKQvsYFxYhhnweC6YLexbtFTJvrkRmLIatIp7EF6kKOYzrSj3iYYwytsAV48vMRBKsMzNr7Eel3944mqFrGaC6rAKiG8DNiwSRjeCvhBLHQiDLF7jFlYKvMcfz1IFls9_hsOx"
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
            
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }; 

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        default:
            return state;     

    }
}

export default reducer;