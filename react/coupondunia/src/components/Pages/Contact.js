import React from "react";

export const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_info_item d-flex justify-content-start align-item-center">
                    <img src="./Images/image5.jpg " alt="phone"/>
                    <div className="contact_info_content">
                      <div className="contact_info_title">Phone</div>
                      <div className="contact_info_text">+91 9822 296 134</div>
                    </div>
              </div>
                </div>
                
          </div>
          {/* phone number */}
          
        </div>
      </div>
    </div>
  );
};