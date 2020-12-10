import * as actions from "../Actions/photoUploadAction"

const PhotosListReducer = (photos = [], action) => {
    switch (action.type) {
        case actions.PHOTOS_UPLOADED: {
            return [...action.photos, ...photos];
        }
        case actions.DELETE_UPLOADED_PHOTO:
            return photos.filter(
                photo => photo.public_id !== action.publicId
            );
        default:
            return [...photos];
    }
};

export default PhotosListReducer;