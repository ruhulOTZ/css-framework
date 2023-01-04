/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Bit from './components/bit/Bit';
import General from './components/general/General';
import Navbar from './components/navbar/Navbar';
import NavbarSettings from './components/navbar/navbarSettings/NavbarSettings';
import SideBar from './components/sideBar/SideBar';
import Wrapper from './components/wrapper/Wrapper';
import { colorPaletteV2 } from './dummy-data/color';


function App() {
    useEffect(() => {

        for (const color in colorPaletteV2){
            document.documentElement.style.setProperty(`--${color}`, colorPaletteV2[color])
        }
        
    }, []);

    return (
        <>
            <Wrapper>
                <General />
            </Wrapper>
            <Wrapper>
                <Bit />
            </Wrapper>
            
            <Wrapper>
                <SideBar />
            </Wrapper>
            
            <Wrapper>
                <Navbar />
                <NavbarSettings />
            </Wrapper>
        </>

    );
}

export default App;
