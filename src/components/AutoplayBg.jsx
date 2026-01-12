import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {BACKGROUND_IMGS} from '../constants/config';
import Breadcrumb from './Breadcrumb';

const AutoplayBackground = ({children, interval = 3000}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=> {
        intervalRef.current = setInterval(() => {
            setCurrentImgIndex(prevIndex => 
            (prevIndex + 1) % BACKGROUND_IMGS.length
            );
        }, interval);
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [interval]);

    const currentBackgroundImg = BACKGROUND_IMGS[currentImgIndex];

    return (
        <div className='relative min-h-screen'>
            <div className='fixed -z-10 w-full h-full bg-black pointer-events-none'>
                <AnimatePresence initial={false}>
                <motion.div
                    key={currentBackgroundImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentBackgroundImg})` }}
                />
                </AnimatePresence>
                <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center'/>
            </div>

            <main className="relative z-10 w-full">
                <Breadcrumb/>
                {children}
            </main>
        </div>
        
    );
};

export default AutoplayBackground;

