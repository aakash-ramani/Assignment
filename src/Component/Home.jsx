import React, { useEffect, useState } from "react";



export  const  Home = ()=>   {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setIsPending(false);
      })
      .catch(() => {
      
        setIsPending(false);
      });
  }, []);

  return ( <>
      {isPending && (
        <div style={{ height: "0%" }}>
          {" "}
          <div className="ring">
            Loading
            <span></span>
          </div>
        </div>
      )}
      {user !== null &&
        user.map((user) => (
          <div key={user.id} id={user.id}>
            <div className="inner">
              <div className="flex">
                  <p className="lstD"><b>ID :- {user.id}</b> </p>
                  <p className="lst"><b>Name :- </b>{user.name} </p>
                  <p className="lst"><b>Email :- </b>{user.email} </p>
                  <p className="lst"><b>Phone NO. :- </b> {user.phone} </p>
                  <p className="lst"><b>UserName :- </b>{user.username} </p>
                  <p className="lst"><b>Website:- </b>{user.website} </p>
                  <br />
                  <h1>Address</h1>
                  <p className="lst"><b>City :- </b>{user.address.city} </p>
                  <p className="lst"><b>street :- </b>{user.address.street} </p>
                  <p className="lst"><b>suite :-</b> {user.address.suite} </p>
                  <p className="lst"><b>Zip Code :- </b>{user.address.zipcode} </p>
                  <br/>
                  <h1>Company Details</h1>
                  <p className="lst"><b>Company Name :- </b> {user.company.name}</p>
                  <p className="lst"><b>Company bs :- </b> {user.company.bs}</p>
                  <p className="lst"><b>Company catchPhrase :- </b> {user.company.catchPhrase}</p>
               
              </div>
            </div>
          </div>
        ))}
      ;
    </>)
}
