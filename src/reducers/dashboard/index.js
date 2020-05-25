const initialState = {
  loading: false,
  albumsData: null,
};

export default function dashboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ALBUM_REQUEST':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'ALBUM_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        albumsData: action.payload,
      });
    case 'ALBUM_FAIL':
      return Object.assign({}, state, {
        loading: false,
      });

    case 'ADD_NOTE_REQUEST':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'ADD_NOTE_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'ADD_NOTE_FAIL':
      return Object.assign({}, state, {
        loading: false,
      });

    default:
      return state;
  }
}
