import "./mainHome.css"
import searchCity from "/src/assets/message/search-city.png"


export function MainHome(){
    return(
        <div className="MainHome-class">
            <img src={searchCity} alt="" />
            <h1>Search City</h1>
            <h2>Find out the weather conditions of the city</h2>
        </div>
    )
}