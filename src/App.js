/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Home from './components/pages/theming/Home';
import { colorPaletteV2 } from './dummy-data/color';


function App() {
    useEffect(() => {

        for (const color in colorPaletteV2){
            document.documentElement.style.setProperty(`--${color}`, colorPaletteV2[color])
        }
        
    }, []);

    return (
        <Home />

    );
}

export default App;
