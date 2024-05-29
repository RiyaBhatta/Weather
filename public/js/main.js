const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const real_temp = document.getElementById('real_temp');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plz enter city name`;
        data_hide.classList.add('data_hide');
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ec4dd048334ac55231026099827033cd`;
            const response = await fetch(url);
            const data = await response.json();
            const Arr = [data];
            city_name.innerText = `${Arr[0].name}, ${Arr[0].sys.country}`;
            real_temp.innerText = Arr[0].main.temp;
            data_hide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Plz enter a valid city name`;
            data_hide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);