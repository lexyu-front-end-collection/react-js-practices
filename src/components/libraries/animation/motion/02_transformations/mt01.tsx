import { motion } from "framer-motion"

const box = {
    width: 300,
    height: 300,
    borderRadius: 100,
    backgroundColor: "yellowgreen",
}

function FM02() {
    return (
        <div>
            <motion.div
                style={box}
                animate={{
                    x: 100,
                    y: 50,
                    rotate: 90,
                    skew: 30,
                }}
            />
        </div>
    )
}

export default FM02