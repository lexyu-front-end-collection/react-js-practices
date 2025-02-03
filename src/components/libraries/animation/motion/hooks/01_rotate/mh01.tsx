import { useAnimate } from 'motion/react'

const box = {
    width: 300,
    height: 300,
    backgroundColor: "#ff0088",
    borderRadius: 7,
}

function M01() {
    const [scope, animate] = useAnimate()
    const resetAndPlay = async () => {

        await animate(scope.current, {
            rotate: 0,
            opacity: 1,
        }, {
            duration: 0
        })

        await animate(scope.current, {
            rotate: 2160,
            opacity: 0,
        }, {
            duration: 3,
            ease: "linear",
        })
    }

    return (
        <>
            <button onClick={resetAndPlay}>
                Reset and Play
            </button>
            <div className='flex h-1/2 justify-center items-center'>
                <div ref={scope} style={box}></div>
                {/* <motion.div
                style={box}
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 5,
                }}
            /> */}
            </div>
        </>
    )
}

export default M01