import React, {useState} from "react";
import '../styles/App.css';

const arr =["Siblings","Friends","Love","Affection","Marriage","Enemy"];
const App = ()=> {
   
const [fname,setFname] = useState("");
const [lname,setLname] = useState("");
const [relationship,setRelationship] = useState("");
const [flag,setFlag] = useState(true);

function calculateRealtionship(e)
{
  e.preventDefault();

      let str1 = fname;
      let str2 = lname;
  
   for(let char of str1)
    {
      if(char.includes(str2))
        {
          str1=str1.replace(char,"");
          str2=str2.replace(char,"");
        }
    }
    if((str1.length)>0 && str2.length>0)
      {
        setRelationship(arr[((str1+str2).length)%6]);
        setFlag(true);
      }
    else
    setFlag(false);
      
}

function resetAll()
{
  // console.log("fname",fname,lname);
  setFname("");
  setLname("");
  setRelationship(" ");
}
        return(
            <div id="main">
              <form>
                <input type ="text" data-testid="input1" placeholder="Enter first name" value={fname} name="name1" onChange={(e)=>setFname(e.target.value)}/>

                <input type ="text" data-testid="input2" placeholder="Enter second name" value={lname} name="name2" onChange={(e)=>setLname(e.target.value)}/>

                <button data-testid="calculate_relationship" type="Submit" onClick={calculateRealtionship}>Calculate Relationship Future</button>
                <button data-testid="clear" type="reset" onClick={resetAll}>Clear</button>
              </form>

              { flag ? <h3 data-testid="answer">{relationship}</h3> : <h3 data-testid="answer">Please Enter valid input</h3>}
              
            </div>
        )
    }


export default App;
