export const PHOTOS_UPLOADED = "PHOTOS_UPLOADED"
export const UPDATE_UPLOADED_PHOTO = "UPDATE_UPLOADED_PHOTO"
export const DELETE_UPLOADED_PHOTO = "DELETE_UPLOADED_PHOTO"

export const photosUploaded = photos => ({
    type: PHOTOS_UPLOADED,
    photos: photos,
});

export const updateUploadedPhoto = uploadedPhoto => ({
    type: UPDATE_UPLOADED_PHOTO,
    uploadedPhoto: uploadedPhoto,
});

export const deleteUploadedPhoto = publicId => ({
    type: DELETE_UPLOADED_PHOTO,
    publicId: publicId,
});