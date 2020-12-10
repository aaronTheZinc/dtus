import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import HeroComponent from "../../components/hero.component";
import TitleComponent from "../../components/title.component";
import request, { head } from 'superagent'
import ImageUploader from "react-images-upload";
import uploadcare from 'uploadcare-widget'
export const SignUpView = ({mainIsShow, setInput,incomplete, click, isComplete, errText, secondaryErr, logoIsUL, bannerUL, logoOnDrop, bannerOnDrop, shopComplete,launchView}) => (
<div>
   {mainIsShow &&
       
           <main className="SignUpcontainer" >
             <HeroComponent
               title="Jump Start Your"
               titleTwo="Business"
               style={{
                 backgroundColor: "rgba(0,0,0,0.4)",
                 backgroundBlendMode: "overlay",
                 backgroundImage:
                   "url(https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
               }}
             />
             <form className="form-container">
               <TitleComponent title="Sign up" />
       
               <section className="form-group-container" >
                 <div className="form-row"style={{marginTop: '50px'}} >
                   <div className="form-group">
                     <input onChange={evt => setInput(evt, 'firstName')} id='firstName' type="text" required="required" />
                     <label  for="input" className="control-label font-bold">
                       First Name
                     </label>
                     <i class="bar"></i>
                   </div>
       
                   <div className="form-group">
                     <input id='lastName' type="text" required="required"  onChange={evt => setInput(evt, 'lastName')}  />
                     <label for="input" className="control-label font-bold">
                       Last Name
                     </label>
                     <i class="bar"></i>
                   </div>
                 </div>
       
                 <div className="form-group w-70">
                   <input onChange={evt => setInput(evt, 'email')} id='email' type="text" required="required" />
                   <label for="input" className="control-label font-bold">
                     Email
                   </label>
                   <i class="bar"></i>
                 </div>
       
                 <div className="form-group w-70">
                   <input onChange={evt => setInput(evt, 'password')} id='password' type="text" required="required" />
                   <label for="input" className="control-label font-bold">
                     Password
                   </label>
                   <i class="bar"></i>
                 </div>
                
                {
                  incomplete == true &&
                  
                  <div style={{textAlign:'center'}}>
                  <div style={{ maxWidth: 500 , alignContent:'center', textAlign:'center'}}>
                  
                  <Alert severity="error">{errText}</Alert>
                </div>
                </div>
                  
                }
       
                 <div className="button-container">
                   <a type="submit"  className="button"  onClick={click}>
                     <span>Next</span>
                   </a>
                 </div>
               </section>
             </form>
           </main>
   }
       
        {!mainIsShow &&
           <main className="SignUpcontainer">
             <HeroComponent
               title="Create Your Shop and"
               titleTwo="add your Products!"
               // titleThree="Products!"
               style={{
                 backgroundColor: "rgba(0,0,0,0.4)",
                 backgroundBlendMode: "overlay",
                 backgroundImage:
                   "url(https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
               }}
             />
             <form className="form-container">
               <TitleComponent title="Create Your Shop" />
               <section className="form-group-container">
                 <div className="form-group w-70">
                   <input id='shopName' type="text" required="required" />
                   <label for="input" className="control-label font-bold">
                     Shop Name
                   </label>
       
                   <i class="bar"></i>
                   { !isComplete &&
                   
                  <div style={{textAlign:'center', marginTop:'40px'}}>
                  <div style={{ maxWidth: 500 , alignContent:'center', textAlign:'center'}}>
                  
                   <Alert severity="error">{secondaryErr}</Alert>
                </div>
                </div>
                   }
                 </div>
       
                 <div className="margin-top-auto">
                   <div className="button-container">
                     <button type="button" className="button button-file">
                       <span>Add Shop Logo</span>
                       {!logoIsUL &&
                     
                      <ImageUploader
                       withIcon={false}
                       buttonText="Choose images"
                       onChange={logoOnDrop}
                       imgExtension={[".jpg", ".gif", ".png", ".gif", 'jpeg']}
                       maxFileSize={5242880}
                      / >
                    
                       }
                       {logoIsUL &&
       
       <Alert severity="success">You Have Added Your Logo!</Alert>
                       
                       }
                    
           
                     </button>
                   </div>
       
                   <div className="button-container">
                     <button type="button" className="button button-file">
                       <span>Add Banner</span>
                       {
                       !bannerUL &&
                       <ImageUploader
                       withIcon={false}
                       buttonText="Choose images"
                       onChange={bannerOnDrop}
                       imgExtension={[".jpg", ".gif", ".png", ".gif", 'jpeg']}
                       maxFileSize={5242880}
                      / >
                       }
                       {
                      bannerUL &&
                         
                     
                         <Alert severity="success">You Have Added Your Banner!</Alert>
                       }
                     </button>
                   </div>
                 </div>
       
                 <div className="button-container">
                   <button  className="button"  onClick={ shopComplete }>
                     <span>Complete</span>
                   </button>
                 </div>
               </section>
             </form>
           </main>
   
}
</div>
)

