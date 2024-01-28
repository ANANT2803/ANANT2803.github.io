import React, { useState, useContext } from "react";
import { UserContext } from "./usercontext";

const Profile = () => {
    const [ user, setUser ] = useContext(UserContext);
    const [ inputState, setInputState ] = useState(true);
    const [ editButtonVisible, setEditButtonVisible ] = useState(true);
    const [ saveButtonVisible, setSaveButtonVisible ] = useState(false);

    const [ branch, setBranch ] = useState(user.branch);
    const [ year, setYear ] = useState(user.year);
    const [ phone, setPhone ] = useState(user.phone);

    const edit = () => {
        setInputState(false);
        setEditButtonVisible(false);
        setSaveButtonVisible(true);
    }

    const save = (e) => {
        e.preventDefault();
        setUser({ name: user.name,
                branch: branch,
                year: year,
                email: user.email,
                phone: phone,
                password: user.password,
                role: user.role });
        setInputState(true);
        setEditButtonVisible(true);
        setSaveButtonVisible(false);
    }

    return (
        <div className="profile">
            <h3>You are registered as {user.role === "Student" ? `a Student` : `an Alumni`}</h3>
            <div className="Details">
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={user.name} readOnly></input>
                    <label htmlFor="branch">Branch</label>
                    <input id="branch" name="branch" value={branch} onChange={(e) => {setBranch(e.target.value)}} type="text" readOnly={inputState}></input>
                    <label htmlFor="year">Year</label>
                    <input id="year" name="year" value={year} onChange={(e) => {setYear(e.target.value)}} type="number" readOnly={inputState}></input>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={user.email} readOnly></input>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" readOnly={inputState}></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" value={user.password} type="password" readOnly></input>
                    <br />
                    { editButtonVisible && <button type="button" onClick={edit}>Edit</button> }
                    { saveButtonVisible && <button type="submit" onClick={save}>Save</button> }
                </form>
            </div>
        </div>
    )
};

export default Profile;
