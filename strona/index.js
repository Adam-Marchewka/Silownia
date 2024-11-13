document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('form-wish');
    const dataList = document.getElementById('dataList');

    function saveData(event){
        const name = document.getElementById('name').value;
        const company = document.getElementById('company').value;
        const type = document.getElementById('type').value;
    
        const formData = {
            name: name,
            company: company,
            type: type
        };

        const savedData = JSON.parse(localStorage.getItem("formDataList")) || [];

        savedData.push(formData);

        localStorage.setItem('formDataList', JSON.stringify(savedData));

        displayData();

        form.reset();
    }

    function displayData(){
        const savedData = JSON.parse(localStorage.getItem('formDataList')) || [];
        dataList.innerHTML = '';

        savedData.forEach((data, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. Firma: ${data.company}, Nazwa: ${data.name}, Typ: ${data.type}`;
            dataList.appendChild(li);
        });
    }

    form.addEventListener('submit', saveData);
    displayData();
});