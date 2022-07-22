import { useState,useEffect } from "react";

export default function RandomUser() {
    const [users,setUsers] = useState([])

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => setUsers(data.results))
    },[]);

    console.log(users);

    return (
        <div className="randomusers">
            <ul>

            </ul>
        </div>
    )
};
