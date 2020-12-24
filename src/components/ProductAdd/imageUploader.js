import { keys } from '@material-ui/core/styles/createBreakpoints';
import React, {Component} from 'react'
import ImageUploader from 'react-images-upload';
import './index.css'
import ImageUploading from 'react-images-uploading';
import { Upload } from 'antd';
const ImageContainer = ({images}) => {
    return(

   
    images.map(function(image, index){
        return <img className='ImageView' src={images[0]} key={index}style={{width:'300px', height:'300px'}} />;
      })


)}

const UploadImage = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
   
    return (
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper" >
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              <div style={{display:'flex'}}>
              {imageList.map((image, index) => (
                <div key={index} className="image-item" >
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update Image</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
)
              }
class uploader extends Component {
    constructor(props) {
        super(props);
         this.state = {
            pictures:[],
            hasImages: false,
            testm: null
         }
         this.onDrop = this.onDrop.bind(this);
    }

    removeImage = (index) => {
        const  {images, hasImages} = this.state;

            if (images[index] || hasImages) {
                const arr = images;
                 delete arr[index];
                 this.setState({images: arr})
            } else {
                return
            }
    }

    onDrop(pictureFiles, pictureDataURLs) {
        // console.log(pictureFiles)
        console.log('im data --', pictureDataURLs)
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    
    

    render() {

        return (
        <div id='main'>
    
      <div>

   <UploadImage/>
      </div>
        
        </div>
        )
    }
}



export default uploader