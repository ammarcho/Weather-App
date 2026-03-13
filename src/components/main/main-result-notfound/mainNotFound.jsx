import "./mainNotFound.css"
import notFound from "/src/assets/message/not-found.png"

export function MainNotFound(){
    return(
        <div className="MainNotFound-class">
            <img src={notFound} alt="" />
            <h1>Search City</h1>
            <h2>Find out the weather conditions of the city</h2>
        </div>
    )
}