const page = (
    <div className = "navbar">
           <nav>
        <a href="#">Home</a> |
        <a href="#">Interview</a> |
        <a href="#">Languages</a> |
        <a href="#">Data Structure</a> |
        <a href="#">Algorithm</a>
        <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>


        </ul>
    </nav>
    <h1>Hiking, a ritual</h1>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)