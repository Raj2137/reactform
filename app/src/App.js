
import React, {useState} from 'react';

function App() {

  const [username, setUsername]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  function handelevent(){
       const emailid= "test123@gmail.com"
       const passwordt= "test123456"
       if(email===emailid && passwordt===password){
           alert("You logedin");
       }
       else{
        alert("Please enter your deatils correctly");
       }
  }
  return (
    <div className="flex flex-col justify-center h-screen  items-center  bg-gradient-to-b from bg-lime-200 to-lime-600">
      <div className= "w-[310px] h-[410px]">
      <form>
        {/* Though the username wasn't included in the testcase, I included to make it more visualling */}
        <label >Name: </label><br/>
        <input type="text" placeholder="username" className="inputclass" value={username}onChange={(e)=> setUsername(e.target.value)}/><br/>
        <label >Email: </label><br/>
        <input type="text" placeholder="email" className="inputclass"  value={email} onChange= {(e)=>setEmail(e.target.value)}/><br/>
        <label >password: </label><br/>
        <input type="text" placeholder="password" className="inputclass" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
       
       <div className=" mt-4">
        <button className="bg-blue-500" onClick={handelevent}>Sign up</button>
        </div>

      </form>
      </div>
    </div>
  );
}

export default App;
