import Card from "../components/card"

export default function MicroPages({Title,data}) {
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