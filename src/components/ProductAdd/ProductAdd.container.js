import React from "react"
import { connect } from "react-redux"
import { ProductAddView } from "./ProductAddView"
import request from 'superagent';
import Swal from 'sweetalert2'
import { addNewProduct } from "../../Actions/dashBoardAction"
import cogoToast from "cogo-toast"
import axios from 'axios'
import { cookie } from "request-promise-native";

// dywpwfh3c    name
// 324431287442462  api key
// wNrb3nqgUk6peTj9ldmmJFM4X14 api seacret 
// cloudinary://324431287442462:wNrb3nqgUk6peTj9ldmmJFM4X14@dywpwfh3c/

// preset name : mamguo2s

class ProductAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            pictures: [],
            uploading: {},
            finaleImages: [],
            productData: {
                productVariation: "",
                productShipping: "",
                productName: "",
                productPrice: "",
                productCat: "default",
                productDiscription: ""
            }
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.photoId = 1;
    }

    handleChange = (name) => (event) => {

        const { productData } = this.state
       if(name==='productCat') {
       console.log(event.value)
           this.setState({
               productData: {
                   productCat: event.value
               }
           })
       }else {
        console.log(event.target.value)
        
        this.setState({
            productData: {
                ...productData,
                [name]: event.target.value
            }
        })
        console.log('/',this.state.productData.productName)
    }
    console.log(this.state.productData)

    }

    onDrop(pictureFiles, pictureDataURLs) {
        // console.log(pictureFiles)
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    uploadImages(files) {

        const url = "https://api.cloudinary.com/v1_1/dtus-us/upload"
        const title = "downtown";

        for (let file of files) {
            const photoId = this.photoId++;
            const fileName = file.name;
            alert('d')
            request.post(url)
                .field('upload_preset', "lvjbvnjj")
                .field('file', file)
                .field('multiple', true)
                .field('folder', "downtown")
                .field('tags', title ? `downtown,${title}` : 'downtown')
                .field('context', title ? `photo=${title}` : '')
                .on('progress', (progress) => this.onPhotoUploadProgress(photoId, file.name, progress))
                .end((error, response) => {
                    // console.log(error)
                    this.onPhotoUploaded(photoId, fileName, response);
                });
        }

    }

    onPhotoUploadProgress(id, fileName, progress) {
        const img = {
            [id]: {
                fileName: fileName,
                progress: progress.percent
            }
        }
        const { uploading } = this.state
        this.setState({
            uploading: { ...uploading, ...img }
        })

        Swal.getHtmlContainer().innerHTML = Object.values({ ...uploading, ...img }).map((data) => {
            return `Uploading ${data.fileName} -- ${typeof data.progress === "undefined" ? 100 : Math.floor(data.progress)} % </br>`
        })
    }

    onPhotoUploaded(id, fileName, response) {
        // console.log(response)
        const { productData: { productVariation ,productShipping ,productName, productPrice, productCat, productDiscription }, pictures, uploading, finaleImages } = this.state
        this.setState({
            finaleImages: [...finaleImages, response.body.secure_url]
        })
        console.log(productName, productPrice)
        if (pictures.length === [...finaleImages, response.body.secure_url].length) {
            cogoToast.success(productVariation)
            console.log(this.state.prdocutData)
            const newProduct = {
                "variation": String(productVariation),
                "expectedShipping": productShipping,
                "uid": this.props.uid,
                "category": productCat,
                "name": this.state.productData.productName,
                "price": document.getElementById("productPrice").value,
                "Description": productDiscription,
                "Images": [...finaleImages, response.body.secure_url]
            }
console.log(newProduct)
            Swal.getHtmlContainer().innerHTML = `Please Wait Saving New Product ...`
            Swal.close()
            this.props.addNewProduct(this.props.uid,newProduct)

        }
    }

    addProduct = (event) => {
        event.preventDefault()
        const { pictures, productData:{productVariation ,productShipping ,productName,productPrice,productCat,productDiscription}} = this.state

        if(productName === "" || productPrice==="" || productCat==="default" || productDiscription === "" || productShipping === ""){

            cogoToast.error("Please Fill details for Products")


        }else if(pictures.length===0){

            cogoToast.error("You should Upload at least one product image")
        }
        else{

            Swal.fire({
                position: 'top-end',
                title: "Uploading",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                html: 'Images'
            })
            this.uploadImages(pictures);
        }
    }

    render() {
        const { productData } = this.state
        return (
            <ProductAddView
                onDrop={this.onDrop}
                addProduct={this.addProduct}
                {...productData}
                handleChange={this.handleChange}
            />
        )
    }
}
const mapStateToProps = ({ sessionState: { authUser: { uid } } }) => ({
    uid
})

const mapDispatchToProps = (dispatch) => ({
    addNewProduct: (uid,product) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(product);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          mode: 'no-cors',
          redirect: 'follow'
        };
        
        fetch("https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/uploadProduct?uid=t0bYA5AHyyPLSJ4I2m36HWZ2SQf2", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)