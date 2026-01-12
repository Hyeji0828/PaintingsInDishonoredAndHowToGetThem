import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {BACKGROUND_IMGS} from '../constants/config';

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
        <div className='fixed -z-10 w-full h-full bg-black'>
            <AnimatePresence>
            <motion.div
                key={currentBackgroundImg} // 키가 바뀌면 이전 이미지는 exit, 새 이미지는 initial 실행
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }} // 2초 동안 천천히 오버랩
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentBackgroundImg})` }}
            />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default AutoplayBackground;

