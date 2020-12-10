import React from "react";
import HeroComponent from "../../components/hero.component";
import TitleComponent from "../../components/title.component";

// styles
import "../../styles/form.style.css";

const CreateShop = () => {
  return (
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
            <input type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Shop Name
            </label>
            <i class="bar"></i>
          </div>

          <div className="margin-top-auto">
            <div className="button-container">
              <button type="button" className="button button-file">
                <span>Add Shop Logo</span>
              </button>
            </div>

            <div className="button-container">
              <button type="button" className="button button-file">
                <span>Add Banner</span>
              </button>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="button">
              <span>Complete</span>
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default CreateShop;
