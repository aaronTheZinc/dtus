import React from "react"
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button,
    Container
} from "shards-react";
import Select from 'react-select'
import './index.css'
import ImageUploader from "react-images-upload";
import PhotosUploaderContainer from '../ImageUploaderNew/PhotosUploader';
const inputStyle = {borderColor:'black', borderWidth:'3px', height: '60px', borderRadius: '15px', textAlign: 'center'}
const descriptionStyle = {borderColor:'black', borderWidth:'3px',borderRadius: '15px'}
const selectVal =  [
    { value: 'CAT-01', label: 'Mens Clothing' },
    { value: 'CAT-02', label: 'Womens Clothing' },
    { value: 'CAT-03', label: 'Home Decor' },
    { value: 'CAT-04', label: 'Mens Shoes' },
    { value: 'CAT-05', label: 'Womens Shoes' },
    { value: 'CAT-06', label: 'Technology' },
    { value: 'CAT-07', label: 'Beauty Products' },
    { value: 'CAT-08', label: 'Health Products' },
    { value: 'CAT-09', label: 'Sports' },
  ]





//   <option value="default">Select</option>
//   <option value="CAT-01">Mens Clothing</option>
//   <option value="CAT-02">Womens Clothing</option>
//   <option value="CAT-03">Home Decor</option>
//   <option value="CAT-04">Mens Shoes</option>
//   <option value="CAT-05">Womens Shoes</option>
//   <option value="CAT-06">Technology</option>
//   <option value="CAT-08">Beauty Product</option>
//   <option value="CAT-08">Health Products</option>
//   <option value="CAT-09">Sports</option>








export const ProductAddView = ({ productVariation ,productShipping,addProduct,onDrop, productName, productPrice, productCat, productDiscription ,handleChange}) => {
    return (
        <Container fluid className="main-content-container px-4 mt-4">
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Product Add</h6>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form onSubmit={addProduct}>
                                    <Row form>

                                        <Col md="4" className="form-group">
                                            <label >Product Name</label>
                                            <FormInput
                                                type="text"
                                                id="productName"
                                                placeholder="Name"
                                                value={productName}
                                                onChange={handleChange("productName")}
                                                style={inputStyle}
                                            />
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <label >Product Price</label>
                                            <FormInput
                                                id="productPrice"
                                                type="number"
                                                placeholder="Price in penny amount 100 = $1 "
                                                value={productPrice}
                                                onChange={handleChange("productPrice")}
                                                style={inputStyle}
                                                style={{borderColor:'black', borderWidth:'3px', height: '60px', borderRadius: '15px', textAlign: 'center', marginTop: '8px'}}
                                            />
                                        </Col>

                                      <Col md="4" className="form-group">
                                            <label >Product Category</label>
                                            <Select options={selectVal} 
                                            value={productCat}
                                            id="feInputState"
                                            style={{backgroundColor:'black', color:'white',borderWidth:'black',marginTop: '80px'}}
                                            onChange={handleChange("productCat")}
                                            
                                            
                                            >
                                                {/* <option value="default">Select</option>
                                                <option value="CAT-01">Mens Clothing</option>
                                                <option value="CAT-02">Womens Clothing</option>
                                                <option value="CAT-03">Home Decor</option>
                                                <option value="CAT-04">Mens Shoes</option>
                                                <option value="CAT-05">Womens Shoes</option>
                                                <option value="CAT-06">Technology</option>
                                                <option value="CAT-08">Beauty Product</option>
                                                <option value="CAT-08">Health Products</option>
                                                <option value="CAT-09">Sports</option> */}
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md="4" className="form-group" >
                                            <label >Shipping</label>
                                            <FormInput
                                            
                                                type="number"
                                                id="productShipping"
                                                placeholder="Expected Shipping Cost"
                                                value={productShipping}
                                                style={inputStyle}
                                                onChange={handleChange("productShipping")}
                                            />
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <label >Variations</label>
                                          
                                            <FormInput
                                                type="text"
                                                id="productVariation"
                                                placeholder="Seperate Each Variation By /. Ex: S/M/L/XL"
                                                value={productVariation}
                                                onChange={handleChange("productVariation")}
                                                style={inputStyle}
                                            />
                                        </Col>


                                    </Row>

                                
                                    <Row form>
                                        {/* Description */}
                                        <Col md="12" className="form-group">
                                            <label >Description</label>
                                            <FormTextarea 
                                            id="Description" 
                                            onChange={handleChange("productDiscription")}
                                            rows="5" 
                                            value={productDiscription}
                                            style={descriptionStyle}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <ImageUploader
                                            withIcon={true}
                                            withPreview
                                            buttonText="Choose images"
                                            onChange={onDrop}
                                            imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
                                            maxFileSize={524288000000000000}
                                        />

                                    </Row>
                                    <Button theme="accent">Add Product</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>


        </Container>
    )
}