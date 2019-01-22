import { combineReducers } from 'redux';
import action from '../actions';

const songsReducer = () => {
    return [
        {title: 'Generic List', length: 24, id: '_cc13'},
        {title: 'The Last Hour', length: 12, id: '_ac81'},
        {title: 'The Wall Street Journal', length: 60, id: '_aa01'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECTED_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songsList: songsReducer,
    selectedSong: selectedSongReducer
});