import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function MotionBoxExample() {
    return (
        <MotionBox
            height='40px'
            bg='red.300'
            drag='x'
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            display="flex" justifyContent="center" alignItems="center"
        >
            This is a motion box
        </MotionBox>
    )
}

export default MotionBoxExample;