import Card from "../components/card"

interface Item {
    id: number;
    bubbleTitle: string;
    username: string;
    position: string;
}

type Props = {
    Title: string;
    data: Item[];
}

export default function MicroPages({Title,data}: Props) {
    return (
         <main>
               <h1>{Title}</h1>
               <div>
                   {
                    data.map(({bubbleTitle, username, position}) => {
                       return <Card bubbleTitle={bubbleTitle} username={username} position={position} />
                    })
                   }
               </div>
         </main>
    )
}