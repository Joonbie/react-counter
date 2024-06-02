// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function MyComponent(){

    // useState function returns an array with 2 elements. A variable and a setter function
    // using array destructuring to get the variable and the setter function
    // Set "Guest" as the defalt initial value
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    

    const updateName = () => {
        setName("Joonbie");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );

}

export default  MyComponent;