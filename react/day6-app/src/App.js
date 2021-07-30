import logo from './logo.svg';
import './App.css';
export default function App() 
{
  return (
    <div>
      <myRegisterComponent/>
    </div>
  );
}
function myRegisterComponent(){
    return(
      <div>
        <form action="#!" id="form1">
                   
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <input type="text" 
                        className="form-control" 
                        id="name" 
                        aria-describedby="emailHelp"
                        placeholder="Enter name" required /> 
                        
                    </div><span id="namespan" style="color: red;"></span>
                  
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        <input type="email" 
                        class="form-control" 
                        id="Email1" 
                        aria-describedby="emailHelp"
                        placeholder="Enter Email" 
                        required/> 
                    </div>
                    <span id="emailspan" style="color: red;"></span>

                   
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <select className="custome-select mb-2" id="mob">
                            <option value="">+91</option>
                            <option value="">+92</option>
                            <option value="">+93</option>
                        </select>
                        <input type="text" className="form-control" id="mobilenumber" placeholder="Enter Phone" required/>
                    </div>
                    <span id="mobile" style="color: red;"></span>
                    
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-building"></i>
                            </span>
                        </div>
                        <select className="form-control" id="user">
                            <option selected disabled>-----Select User Type-----</option>
                            <option>Customer</option>
                            <option id="retail">Retailer</option>
                        </select>
                    </div>
                    
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        id="pass1" required/> 
                    </div>
                    <span id="pass1span" style="color: red;"></span>
                     
                     
                    <div className="form-group input-group m-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-unlock"></i>
                            </span>
                        </div>
                        <input type="password" 
                        className="form-control" 
                        placeholder="Confirm password" 
                        id="pass2" required/> 
                    </div>
                    <span id="pass2span" style="color: red;"></span>
           
                    <button type="submit" className="btn btn-block btn-success m-2" id="button3" onclick="registration()" >Create</button>
                    <p class="text-center mt-2" id="login">Have an Acoount?<a href="login.html" style="padding-left: 5px; font-weight: bold; color: rgb(53, 23, 161);">Log In</a></p>
                </form>
      </div>
    );
};

export default App;
