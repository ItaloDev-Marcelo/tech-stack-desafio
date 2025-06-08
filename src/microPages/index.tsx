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
         <main className="py-2 px-4 h-[100vh] lg:py-7 lg:px-20">
               <h1 className="text-[3em] my-7 md:mb-7 lg:text-[2em] text-gray-500">{Title}</h1>
               <div className="mt-2 md:mb-0 md:flex md:flex-wrap lg:gap-5">
                   {
                    data.map(({bubbleTitle, username, position}) => {
                       return <Card bubbleTitle={bubbleTitle} username={username} position={position} />
                    })
                   }
               </div>
         </main>
    )
}