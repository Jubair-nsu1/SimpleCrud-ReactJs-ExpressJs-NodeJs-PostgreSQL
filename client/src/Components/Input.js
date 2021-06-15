import React, { Fragment,useState } from "react";

const Input = ()  => {
    const [description,setDescription] = useState(" ");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
    };

    return(
       <Fragment>
         <h1 className="text-center mt-5">React Crud Operation</h1>
         
         <div class="container p-2 my-5 bg-dark text-white">
          <form className="text-center mt-5" onSubmit={onSubmitForm}> 
            
             <input type="text" className="form-control l-2" placeholder="Enter Product Name"/>
             <input type="text" className="form-control mt-2" placeholder="Enter Description" onChange={e => setDescription(e.target.value)}/>                      
             <input type="text" className="form-control mt-2" placeholder="Enter Price"/>

            <button className="btn btn-primary mt-2">Add Description</button>
          </form>
         </div>
       </Fragment> 
    ); 
};

export default Input;