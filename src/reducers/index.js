import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{
			title: 'No Scrubs',
			duration: '4:05'
		},
		{
			title: 'I Dont know',
			duration: '10:05'
		},
		{
			title: 'Lorem Ipsum',
			duration: '5:00'
		},
		{
			title: 'I Want It Thay Way',
			duration: '3:00'
		}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
