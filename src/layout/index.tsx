import { useState } from "react";
import NavDeskboard from "../components/nav";
import MicroPages from "../microPages";
import UseData from "./hook/useData";



export default function PainelLayout() {


    const [navValue, setNavValue] = useState('Front');
    
    const {FrontData,BackData,FullData,UIUXData} = UseData()

    const handleActive = (newNavValue: string) => {
        setNavValue(newNavValue)
    }

      return (
        <div>
            <NavDeskboard handleActive={handleActive} navValue={navValue} />
            <MicroPages Title='Frontend Team' data={FrontData}/>
            <MicroPages Title='Backend Team' data={BackData}/>
            <MicroPages Title='Fullstack Team' data={FullData}/>
            <MicroPages Title='UI/UX Team' data={UIUXData}/>
        </div>
      )
}