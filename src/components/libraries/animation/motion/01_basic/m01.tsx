import { motion } from "motion/react"

const box = {
    width: 200,
    height: 150,
    borderRadius: 70,
    backgroundColor: "yellowgreen",
}

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}

function M01() {
    return (
        <div>
            <motion.div
                style={box}
                animate={{
                    x: 200,
                    y: 200,
                }}
            />
            <motion.hr
                className="my-8"
                animate={{
                    y: 200,
                }}
                style={{
                    width: '100%',
                    marginTop: '20px'
                }}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    scale: 2,
                    x: 200,
                    y: 300,
                }}
                transition={{
                    duration: 0.5,
                    scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5
                    }
                }}
                style={ball}
            />
        </div>
    )
}

export default M01