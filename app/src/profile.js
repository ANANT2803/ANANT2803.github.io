import React, { useContext } from "react";
import { UserContext } from "./usercontext";

const Profile = () => {
    const [ user, setUser ] = useContext(UserContext);
    // const [ year, setYear ] = useState(null);
    // const updateYear = (e) => {
    //     e.preventDefault();
    //     setYear(e.target.value);
    //     setUser({year: year});
    // }
    return (
        <div className="profile">
            <h3> Hello, {user.name} </h3>
            <label htmFor="name">Name</label>
            <input id="name" name="name" value={user.name} disabled></input>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={user.email} disabled></input>
            <label htmlFor="branch">Branch</label>
            <input id="branch" name="branch" value={user.branch} disabled></input>
            <label htmlFor="year">Year of Graduation</label>
            <input name="year" id="year" value={user.year}></input>
            <label htmlFor="phone">Year of Graduation</label>
            <input name="phone" id="phone" value={user.phone}  ></input>
            <label htmlFor="password">Password</label>
            <input name="password" id="password" value={user.password} ></input>
        </div>
    )
};

export default Profile;