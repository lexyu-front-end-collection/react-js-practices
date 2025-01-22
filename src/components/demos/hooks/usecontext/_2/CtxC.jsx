import CtxD from "@/components/demos/hooks/usecontext/_2/CtxD"


function CtxC(props) {
    return (
        <div className='box'>
            <p className='text-3xl'>Component C</p>
            <CtxD></CtxD>
            <hr className='my-4' />
            <CtxD user={props.user}></CtxD>
        </div>
    )
}

export default CtxC