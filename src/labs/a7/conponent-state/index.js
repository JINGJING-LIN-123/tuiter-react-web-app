//import {useState} from "react";

//const ConponentState = ( ) => {
    //const [count, setCount] = useState(123);
   // const [email, setEmail] = useState('alice@wonderland.com');
    //const [bio, setBio] = useState('Lego enthusiast')
   // const [showBio, setShowBio] =useState(true)
   // const [editingEmail, setEditingEmail] = useState(false)
   // const [profile, setProfile] = useState({
      //  firstName: 'Alice,', lastName:'Wonderland',
       // username:'alice123', password: 'p@ssw0rd'
   // })
   // const changeEmail = (event) => {
       // const newEmail = event.target.value
     //   setEmail(newEmail)
     //   console.log(newEmail);
  //  }
  //  const Up = (e) =>{
       // setCount(count+1);
       // console.log(count);
  //  }

   // const Down = (e) =>{
      //  setCount(count-1);
       // console.log(count);
    //}

    //const setFristName = (e) => {
        //const newFirstName = e.target.value;
      //  const newProfile = {
          //  firstName: newFirstName,
         //   lastName: profile.lastName,
         //   username: profile.username,
        //    password: profile.password
      //  }
      //  setProfile(newProfile)

    //}
   // return(
     //   <>
      //      <h3>Component State</h3>
      //      <h4>Objects</h4>
       //     First Name:
       //     <input
        //        onChange={setFristName}
         //       value={profile.firstName}/><br/>
        //    Last Name: <input value={profile.lastName}/><br/>
         //   Username Name: <input value={profile.username}/><br/>
         //   Password: <input value={profile.password} type={"password"}/><br/>
          //  <pre>
           //     {JSON.stringify(profile)}
          //  </pre>
        //    <input
         //       type="checkbox"
          //      onChange={(e) => setShowBio(e.target.checked)}
           //     checked={showBio}/>

           // {
            //    showBio &&

          //  <>
            //    <h4>Bio</h4>
             //   <textarea
               //     value={bio}
               //     onChange={
                //    (e) => setBio(e.target.value)
              //  }></textarea>
          //  </>
           // }

          //  <h4>Email</h4>
         //   <input type="checkbox"
         //          onChange={(e)=> setEditingEmail(e.target.checked)}
         //          checked={editingEmail}/>
         //   {
         //       editingEmail &&
         //       <input type="email" onChange={changeEmail}/>
          //  }
          //  {
           //     !editingEmail &&
           //     <span>{email}</span>
          //  }
          //  <span>{email}</span>
          //  <input value={email} onChange={changeEmail}/>

          //  <h4>Counter</h4>
           // count = {count}
         //   <button onClick={Up}>Up</button>
         //   <button onClick={Down}>Down</button>
          //  <h1>Email = {email} {count}</h1>
      //  </>
   // )

//}

//export default ConponentState;