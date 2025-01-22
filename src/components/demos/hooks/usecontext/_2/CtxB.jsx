import CtxC from "@/components/demos/hooks/usecontext/_2/CtxC"


function CtxB(props) {
    return (
        <div className='box'>
            <p className='text-3xl'>Component B</p>
            <CtxC ></CtxC>
            <hr className='my-4' />
            <CtxC user={props.user}></CtxC>
        </div>
    )
}

export default CtxB