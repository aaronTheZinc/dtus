import React from "react";
import "../../styles/form.style.css";
// import "../../styles/index.css";
const Downtown = () => {
  return (
    <main className="container dt-container-full">
      <form className="form-container flex-60">
        {/* <div className="form-title font-weight-bold font-size-80">Downtown</div> */}
        <section className="form-group-container bg-t">
          <div className="form-group w-60 filter-invert mb-18">
            <input type="text" required="required" />
            <label
              for="input"
              className="control-label control-label-xl font-bold"
              style={{color:'black'}}
            >
              Shop Name
            </label>
            <i className="bar"></i>
          </div>

          <div className="dt-container w-70">
            <div>
              <input type="email" placeholder="Email" />
            </div>

            <div>
              <input type="password" placeholder="Password" />
            </div>

            <section className="text-center">
              <button type="submit" className="button button-big filter-invert">
                <span>Register</span>
              </button>
            </section>
          </div>
        </section>
      </form>
    </main>
  );
};

export default Downtown;
