import { useState } from "react";
import NavDeskboard from "../components/nav";
import MicroPages from "../microPages";



export default function PainelLayout() {


    const [navValue, setNavValue] = useState('Front');

    const handleActive = (newNavValue: string) => {
        setNavValue(newNavValue)
    }

      return (
        <div>
            <NavDeskboard handleActive={handleActive} navValue={navValue} />
            <MicroPages Title={} data={}/>
            
        </div>
      )
}