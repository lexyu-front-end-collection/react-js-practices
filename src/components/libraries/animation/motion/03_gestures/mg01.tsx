import { motion } from "motion/react"

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}

function FMG01() {
    return (
        <div className="flex h-1/3 items-center justify-center">
            <motion.button
                style={box}
                whileHover={{ scale: 2.0 }}
                whileTap={{ scale: 0.90 }}
                onHoverStart={() => console.log('hover started!')}
            />
        </div>
    )
}

export default FMG01