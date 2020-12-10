import React from "react";
import HeroComponent from "../../components/hero.component";
import TitleComponent from "../../components/title.component";

// styles
import "../../styles/form.style.css";

const SignUp = () => {
  return (
    <main className="container">
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

        <section className="form-group-container">
          <div className="form-row">
            <div className="form-group">
              <input type="text" required="required" />
              <label for="input" className="control-label font-bold">
                First Name
              </label>
              <i class="bar"></i>
            </div>

            <div className="form-group">
              <input type="text" required="required" />
              <label for="input" className="control-label font-bold">
                Last Name
              </label>
              <i class="bar"></i>
            </div>
          </div>

          <div className="form-group w-70">
            <input type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Email
            </label>
            <i class="bar"></i>
          </div>

          <div className="form-group w-70">
            <input type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Password
            </label>
            <i class="bar"></i>
          </div>

          <div className="button-container">
            <button type="submit" className="button">
              <span>Next</span>
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default SignUp;
