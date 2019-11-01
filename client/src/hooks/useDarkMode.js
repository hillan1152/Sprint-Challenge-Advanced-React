import { useEffect, useState } from 'react'



export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(key, initialValue);

    useEffect(() => {
        if (darkMode === true){
            document.querySelector('body').classList.add('darkMode');
        } else {
            document.querySelector('body').classList.remove('darkMode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}