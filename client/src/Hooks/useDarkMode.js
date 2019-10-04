import React, { useEffect, useState } from 'react';


const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(key, initialValue);

    useEffect((e) => {
        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}

export default useDarkMode;