import './App.css'
import {useState} from 'react'
import Test2 from './components/test2/Test2.js'
import Test3 from './components/test3/Test3.js';
import { useEffect } from 'react';


function App(){

  //state
  //let username = 'Pragna Yanduri'
  //let x = useState("Pragna Yanduri") //x = [a,set()]
  let [username,setUsername] = useState("Pragna Yanduri");
  let [person,setPerson] = useState({name:"Shizuka",city:"Banglore"})
  let [counter,setCounter] = useState(0)
  let[status,setStatus] = useState(true);
  let [posts,setPosts] = useState([])
  let [err,setError] = useState('')
  let [users,setUsers] = useState([])
  
  /*let person = {
    name:"Rocky",
    age:20
  }*/

  useEffect(()=>{ //will execute automatically
    // console.log("useEffect() executed")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((postsList)=>setPosts(postsList))
    .catch((err)=>{
     console.log(err.message)
     setError(err.message)
    })
   })

  let skills = ['html','css','javascript','css']

  let students = [{sno:1,name:'Doraemon'},
                  {sno:2,name:'Nobita'},
                  {sno:3,name:'Suneo'}]

  //functions
  function getNewName(){
    //username = "Taylor Swift"
    setUsername("Taylor Swift")
    console.log(username);
  }

  function changePerson(){
    setPerson({...person, name:"Tomato"})
  }

  function incrementCounter(){
    setCounter(counter+1)
  }

  function decrementCounter(){
    setCounter(counter-1)
  }

  function incrementByValue(v){
    setCounter(counter+v)
  }

  function changeStatus(){
    setStatus(!status);
  }

  function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(usersList=>setUsers(usersList))
  }

  useEffect(()=>{
    // console.log("useEffect() executed")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>console.log(posts))
    .catch(err=>console.log(err))
   },[])
 
   console.log("Component Rendered")
   



  //REACT component can return only one element
  return (
    <div className="container">
      <h1>Welcome to REACT Application</h1>

      <p> <button className="button" onClick={getNewName}>Change Name</button> :  {username}</p>
    
      <h3><button className="button" onClick={changePerson}> Change Person Details</button> : {person.name}</h3>
            
      <h3>{person.city}</h3> 

      {skills.map((skill,index) => <h2 key={index}> {skill} </h2>)}

      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((studentObj => 
            <tr key={studentObj.sno}>
              <td>{studentObj.sno}</td>
              <td>{studentObj.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>{counter} &nbsp;&nbsp;&nbsp; 
        <button className="button" onClick={incrementCounter}> + </button> &nbsp;&nbsp;&nbsp;
        <button className="button" onClick={decrementCounter}> - </button> &nbsp;&nbsp;&nbsp;
        <button className="button" onClick={()=>incrementByValue(5)}>Increment by a value</button>
      </h1>

      {status === true ? <h1> <button className = "button" onClick={changeStatus}> Change</button> Good Morning</h1> : <h1> <button className = "button" onClick={changeStatus}> Change</button> Good Evening</h1>}

      

      <br></br>

      <Test2 />
      <Test3 />
      <br></br>
      <button className='button' onClick={getData}>Get some other data</button>
      {
        users.map(userObj=><h4>{userObj.username}</h4>)
      }
      {
        posts.length === 0 && <h1>Loading...</h1> 
      }
      {
        err.length !== 0 ? <h1>{err}</h1> : 
        <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(postObj=><tr key={postObj.id}>
              <td>{postObj.userId}</td>
              <td>{postObj.id}</td>
              <td>{postObj.title}</td>
              <td>{postObj.body}</td>
            </tr>)
          }
        </tbody>
      </table>
}
    
  </div>
  );
}

export default App;

//module.exports = App; --> Common JS Modules approach

//React uses ECMA Script modules where as Nodejs uses Common JS Modules

//for this, remove the bootstrap import in index.js