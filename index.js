async function weather(){
    let data = await fetch("http://localhost:3000/cities")
    let cities = await data.json();
    let select = document.getElementById("select")
    cities.map((val)=>{
        let option = document.createElement('option')
        option.text = val.name
        select.appendChild(option)    
    })   

    select.addEventListener('change',async function () {
        let selectCity = this.value;

        let tempData = cities.find((city)=> city.name === selectCity)
        if(tempData){
            let background = document.getElementById("main")
            if (tempData.condition == "Sunny") {
                background.style.backgroundImage =`url("https://i.pinimg.com/originals/a3/28/c6/a328c6402672e2e31586a639d4a9645f.gif")`;
            }
            else if(tempData.condition == "Rainy"){
                background.style.backgroundImage = `url("https://i.pinimg.com/originals/62/cb/bf/62cbbf3021778f2f6db1320a261fb88b.gif")`
            }
            else if(tempData.condition == "Cloudy" || tempData.condition == "Partly Cloudy"){
                background.style.backgroundImage = `url("https://media.baamboozle.com/uploads/images/230543/b41f5b54-dd80-4bb1-a56e-49396e0b14f2.gif")`;
            }

            let temperature = tempData.temperature;
            let tempElement = document.getElementById("temp")
            tempElement.textContent = `${temperature}°C`


            let weather = document.getElementById("weather")
            weather.textContent = tempData.condition;


            let quote = document.getElementById("quote")
            quote.textContent = tempData.quote;

        }
    })

}






