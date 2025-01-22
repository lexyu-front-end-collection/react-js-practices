import React, { useContext } from 'react'
import { UserContext } from '@/components/demos/hooks/usecontext/_2/CtxA'

function CtxD(props) {

    const user = useContext(UserContext);

    return (
        <div className='box'>
            <p className='text-3xl'>Component D</p>
            <p className='text-xl'>{`Context, ${user}`}</p>
            <hr className='my-4' />
            <p className='text-xl'>{`Props, ${props.user}`}</p>
        </div>
    )
}

export default CtxD