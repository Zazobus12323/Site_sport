function rost (){
    return document.getElementById('1').value
}
function wight (){
    const wight = document.getElementById('2')
    return wight.value
}
function desired_wight (){
    const wight = document.getElementById('3')
    return wight.value
}
function vozrast (){
    const vz = document.getElementById('0')
    return vz.value
}

function kalOnDay (vozrast, rost, wight, gender){
    if(gender === 'male'){
        //для мужчин: ПБМ = 10 x вес (кг) + 6.25 x рост (см) — 5 x возраст (лет) + 5;
        return 10 * wight + 6.25 * rost - 5 * vozrast + 5
    }
    else if(gender === 'female'){
        //Для женщин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) – 161
        return 10 * wight, + 6,25 * rost - 5 * vozrast - 161
    }
}