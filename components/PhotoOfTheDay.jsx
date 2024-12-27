"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";


function PhotoOfTheDay({ images }) {

    return (
        <div className="mt-16 flex flex-wrap items-center justify-center px-[5vw] text-center sm:flex-nowrap sm:px-[2vw]">
            <div className="flex min-w-[50vw] items-center justify-center">
                <h2 className="my-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:w-[35vw] md:text-6xl lg:text-7xl"> 
                    Photos of the Day 

                </h2>
            </div>
            <ImagesSlider className="h-80 rounded-2xl px-2 sm:h-[25rem]" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="z-50 flex flex-col items-center justify-center"
                >
                    <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
                    </motion.p>
                </motion.div>
            </ImagesSlider>

        </div>
    )
}

export default PhotoOfTheDay
