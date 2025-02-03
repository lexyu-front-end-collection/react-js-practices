import { motion, useAnimation } from 'motion/react'

const box = {
    width: 300,
    height: 300,
    borderRadius: 100,
    backgroundColor: "yellowgreen",
}

function FM03() {
    const controls = useAnimation();

    const resetAndPlay = async () => {
        controls.set({
            x: 50,
            y: 50,
            rotate: 0,
            skew: 0,
        })

        await controls.start({
            x: 250,
            y: 800,
            rotate: 90,
            skew: 15,
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        })

    }

    return (
        <div>
            <button onClick={resetAndPlay}
                className="p-2 m-2 bg-blue-500 text-white rounded"
            >
                Reset and Play
            </button>
            <motion.div
                style={box}
                initial={{ x: 50, y: 50 }}
                animate={controls}
            />
            {/* <motion.div className='m03-box'
                initial={{ x: 50, y: 50 }}
                animate={{
                    x: 200,
                    y: 350,
                    rotate: 90,
                    skew: 15,
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                }}
            /> */}
        </div>
    )
}

export default FM03