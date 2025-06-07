import Card from "../components/card"

type Props = {
    Title: string,
    data:array
}

export default function MicroPages({Title,data}: Props) {
    return (
         <main>
               <h1>{Title}</h1>
               <div>
                   {
                    data.map((bubbleTitle, username, position) => {
                       return <Card bubbleTitle={bubbleTitle} username={username} position={position} />
                    })
                   }
               </div>
         </main>
    )
}