function getData(){
    return JSON.parse(localStorage.getItem('Data')) || [];
};

function saveData(){
    localStorage.setItem('Data', JSON.stringify(data));
};

function addData(dane){
    const data = getData();
    data.push(dane);
    saveData(data);
};

document.addEventListener('DOMContentLoaded', ()=>{
    const dataForm = document.getElementById('form-data');
    if(dataForm){
        dataForm.addEventListener('submit', function(event){
            event.preventDefault();
            const name = document.getElementById('name');
            const company = document.getElementById('company');
            const type = document.getElementById('type');

            const newName = name.value.trim();
            const newCompany = company.value.trim();
            const newType = type.value.trim();

            addWish(newName);
            addWish(newCompany);
            addWish(newType);

            window.location.href = 'strona.html';
        })
    } else {
        displayData();
    }
})

function displayData(){
    const dataList = document.getElementById('dataList');
    const data = getData();
    dataList.innerHTML = '';

    for(i=0; i<data.length; i++){
        const listItem = document.getElementById('li');
    }
}