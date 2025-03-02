import { useState } from "react";
const First = () =>{
const[name, setName] = useState("");

const Vijaylakshmi = () =>{
    setName ("hi I am VIjaylakshmi....");
}   

const Ajay = () =>{
    setName ("hi I am Ajay....");
} 

const Sravani = () =>{
    setName ("hi I am Sravani....");
} 
 return(
        <div> 
            <p>Student Name is:{name}</p>
            <br/>
            <input type="button" value="Vijaylakshmi" onClick={Vijaylakshmi}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Ajay" onClick={Ajay}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Sravani" onClick={Sravani}/>
            </div>

    )
};
export default First;