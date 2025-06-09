
type Props  = {
    bubbleTitle: string,
    username: string,
    position: string
}

export default function Card({bubbleTitle, username, position}: Props) {
    return (
        <article className="full-w flex justify-start content-center items-center  
        h-[100px] md:w-[250px] lg:w-[300px] 
         rounded-[7px] md:m-2  bg-white my-5 lg:my-[0.2em] p-4 shadow">
             <div className="w-[50px] h-[50px] mr-2 rounded-[50px] cursor-pointer
              hover:text-amber-200
              bg-gray-300 text-center flex-col justify-center content-center ">
             <h3 className="text-[1em] font-bold ">{bubbleTitle}</h3>
             </div>
             <div className="m-[.5em] ">
             <h3 className="text-[1em] font-medium ">{username} </h3>
             <p className="text-gray-500">{position} </p>
             </div>
        </article>
    )
}