
type Props  = {
    bubbleTitle: string,
    username: string,
    position: string
}

export default function Card({bubbleTitle, username, position}: Props) {
    return (
        <article>
             <div className="bubble">
             <h3>{bubbleTitle}</h3>
             </div>
             <h3>{username} </h3>
             <p>{position} </p>
        </article>
    )
}