import { useState } from "react";
import NavDeskboard from "../components/nav";
import MicroPages from "../microPages";
import UseData from "./hook/useData";

export default function PainelLayout() {

    const [navValue, setNavValue] = useState('Front');
    const {FrontData,BackData,FullData,UIUXData} = UseData();
    const handleActive = (newNavValue: string) => {
        setNavValue(newNavValue)
    }

      return (
        <div className="flex flex-col lg:flex-row">
            <NavDeskboard handleActive={handleActive} navValue={navValue} />
            <div className={navValue === 'Front' ? 'block' : 'hidden'}>
              <MicroPages Title='Frontend Team' data={FrontData}/>
            </div>
            <div className={navValue === 'Back' ? 'block' : 'hidden'}>
               <MicroPages Title='Backend Team' data={BackData}/>
            </div>
            <div className={navValue === 'Full' ? 'block' : 'hidden'}>
               <MicroPages Title='Fullstack Team' data={FullData}/>
            </div>
            <div className={navValue === 'UIUX' ? 'block' : 'hidden'}>
               <MicroPages Title='UI/UX Team' data={UIUXData}/>
            </div>
        </div>
      )
}