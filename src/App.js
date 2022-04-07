import {useState, useEffect} from "react";
import "./App.css"



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData);
  }, []);

  const deleteUser = (id) => {
    let tempUsers = data.filter((user) => user.id !== id);
    setData(tempUsers);
  };


  const api = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getData = ()=> {
    fetch(api)
    .then((d) => d.json())
    .then((res)=> {
      setData(res);
    })
  }
  return (
    <div>
      <div className="inputdiv"><input className="inputbar" type="text" placeholder="search by name email or role" /></div>
      <div className="headingdiv">
        <div>Select</div>
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Actions</div>
      </div>
      <hr />

      {data.map((e)=> (
        <div className="maindiv" key={e.id}> 
            <div><input type="checkbox" /></div>
            <div>{e.name}</div>
            <div>{e.email}</div>
            <div>{e.role}</div>
          
            <button onClick={()=>{
            deleteUser(e.id)
          }}>Delete</button>
          </div>
      ))}
    </div>
  );
}

export default App;
