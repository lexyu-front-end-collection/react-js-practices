import { useState } from 'react'

function UseState() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [human, setIsHuman] = useState(false);

    const updateName = () => {
        // Error
        // name = ("Tester");
        // console.log(name);

        setName("Tester");
    };

    const resetName = () => {
        setName("Guest");
    };

    const incrAge = () => {
        setAge(age + 1);
    };

    const isHuman = () => {
        setIsHuman(!human);
    };

    return (
        <div>
            <div className='flex justify-evenly'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>isHuman: {human ? "Y" : "N"}</p>
            </div>
            <div className='flex justify-evenly mt-4'>
                <button onClick={updateName}>Set Name</button>
                <button onClick={resetName}>Reset Name</button>
                <button onClick={incrAge}>Incr Age</button>
                <button onClick={isHuman}>is Human</button>
            </div>
        </div>
    );
}

export default UseState;