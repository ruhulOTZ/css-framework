/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Settings from './components/settings/Settings';
import SideBar from './components/sideBar/SideBar';
import { colorPaletteV2 } from './dummy-data/color';


function App() {
    useEffect(() => {

        for (const color in colorPaletteV2){
            document.documentElement.style.setProperty(`--${color}`, colorPaletteV2[color])
        }
        
    }, []);

    return (
        <>
            <div style={{    padding: '20px', background: 'lavender', marginBottom: '20px'}}>
                <SideBar />
            </div>
            
            <div style={{    padding: '20px', background: 'lavender', marginBottom: '20px'}}>
                <Navbar />
                <Settings />
            </div>
        </>

    );
}

export default App;
