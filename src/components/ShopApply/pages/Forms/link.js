import React, {Component} from 'react'
import linkShop from './downtown'
import backend from '../../../../services/BackendClient'
import firebase from 'firebase'
import cogoToast from 'cogo-toast'
// import img from '../../assets/linkl.png'
import '../../styles/index.scss'

class Link extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRes = this.handleRes.bind(this)

    this.state = {
      email:'',
      shopName: '',
      password: ''
    }
  }
  handleRes = async() => {
    const {email, shopName, password} = this.state
    const backendRes = await backend.linkShop(email,shopName);
     const server_res = backendRes.data
     
    if (backendRes.data.err) {
      alert(server_res.err)
      const {err} = server_res;
         if(err) {
           cogoToast.error('This Shop Already Exist. Please pick a new name.')
         }
    } else if(server_res.status) {
      setTimeout(() =>{
          window.open('/login', '_self')
     }, 2000); //Time before execution
     cogoToast.success('You Have Linked A Shop to Your Downtown Account!')
  
    }
  
  
  }
    onSubmit = async(event) => {
      event.preventDefault()
      
        const {email, shopName, password} = this.state
      const authDidComplete = await firebase.auth().signInWithEmailAndPassword(email, password) .then((user) => {
     return true
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          cogoToast.error(errorMessage)

            return false
        });

        
      if (authDidComplete) {
            this.handleRes()
      } 


    }
    handleChange = (name)=>(event) => {
      console.log(name, '--', this.state.shopName)
      this.setState(
        {
          [name]: event.target.value
        }
        );
      console.log(event.target.value)
    }
    componentDidMount() {

    }
    render() {
        return (
            <main className="LinkContainer dt-container-full">
              <div style={{backgroundColor:'black', width:'700px', height:'800px'}}>

                <img src='https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' style={{width:'700px' , height:'100%'}} />

              </div>
      <form className="form-container flex-60" >
        <b>
        <div className="form-title font-weight-bold  "style={{color:'black'}}>Downtown</div>
        </b>
        <section className="form-group-container bg-t">
          <div className="form-group w-60 filter-invert mb-18">
            <input type="text" required="required" onChange={this.handleChange('shopName')} />
            <label
            style={{marginTop: '15px'}}
              for="input"
              className="control-label control-label-xl font-bold"
            
            > <span></span>
              Shop Name
            </label>
            <i className="bar"></i>
          </div>

          <div className="dt-container w-70">
            <div>
              <input type="email" placeholder="Email" onChange={this.handleChange('email')} />
            </div>

            <div>
              <input type="password" placeholder="Password" onChange={this.handleChange('password')} />
            </div>

            <section className="text-center particletext bubbles">
              <button type="submit" className="button button-big filter-invert " style={{backgroundColor:'black'}} onClick={this.onSubmit}>
                <span style={{color:'white'}}>Register</span>
              </button>
            </section>
          </div>
        </section>
      </form>
    </main>
  );
        
    }
}
export default Link