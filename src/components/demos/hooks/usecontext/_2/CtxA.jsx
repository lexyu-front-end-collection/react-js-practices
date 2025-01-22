import React, { useState, createContext } from 'react';
import CtxB from "@/components/demos/hooks/usecontext/_2/CtxB.jsx"
import '@/components/demos/hooks/usecontext/non-ctx.css'


export const UserContext = createContext();

function CtxA() {

    const [ctxUser, setCtxUser] = useState("John Doe");

    const [propUser, setPropUser] = useState("John Doe");


    return (
        <div className='box'>

            <p className='text-3xl'>Component A</p>           
            <p className='text-xl'>{`Hi ${ctxUser}`}</p>

            <hr className='my-4' />

            <p className='text-xl'>Use Context</p>
            <UserContext.Provider value={ctxUser}>
                <CtxB />
            </UserContext.Provider>

            <hr className='my-4' />

            <p className='text-xl'>Using Props</p>
            <CtxB user={propUser} />
        </div>
    )

}

export default CtxA