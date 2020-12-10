import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import { dashBoardReducer } from "./dashBoardReducer"
import PhotosListReducer from "./photosListReducer"
import UploadedPhotosReducer from "./uploadedPhotosReducer"

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  dashboard: dashBoardReducer,
  messageState: messageReducer,
  photoList:PhotosListReducer,
  uploadedPhotoes:UploadedPhotosReducer
});

export default rootReducer;
