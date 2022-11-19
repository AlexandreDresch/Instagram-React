import { NavBar } from "./components/NavBar";
import { NavBarMobile } from "./components/NavBarMobile";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { Corpo } from "./components/Corpo";

import './reset.css';

export default function App() {
    const { width } = useWindowDimensions();

    return (
        <>
            {width > 614 ? <NavBar /> : <NavBarMobile />}
            <Corpo />
        </>
        
    )
}