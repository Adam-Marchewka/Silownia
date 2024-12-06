document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-data');
    const list = document.getElementById('data-list');

    // Pobieranie danych z localStorage
    function getData() {
        return JSON.parse(localStorage.getItem('Data')) || [];
    }

    // Zapisywanie danych w localStorage
    function setData(data) {
        localStorage.setItem('Data', JSON.stringify(data));
    }

    // Dodawanie danych z formularza
    function addData(event) {
        event.preventDefault(); 
        const company = document.getElementById('company').value;
        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;

        const newData = { company, name, type };
        const data = getData();
        data.push(newData);
        setData(data);
        renderData(); 
        if (form) form.reset(); 
    }

    // Renderowanie danych na liście
    function renderData() {
        if (!list) return;

        const data = getData();
        list.innerHTML = '';

        data.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `Firma: ${item.company}, Nazwa: ${item.name}, Typ: ${item.type}`;
            li.style.marginBottom = "5px"
            const deleteButton = document.createElement('button');
            deleteButton.style.border = "none";
            deleteButton.style.borderRadius = "10px";
            deleteButton.style.marginTop = "5px";
            deleteButton.textContent = 'Usuń';
            deleteButton.style.marginLeft = '10px';
            deleteButton.onclick = () => {
                removeData(index);
            };
            li.appendChild(deleteButton);
            list.appendChild(li);
        });
    }

    // Usuwanie danych z listy
    function removeData(index) {
        const data = getData();
        data.splice(index, 1);
        setData(data);
        renderData();
    }

    if (form) {
        form.addEventListener('submit', addData);
    }

    renderData();
});

// Wykres
const myChart = new Chart("myChart", {
    type: "bar",
    data: {},
    options: {}
  });

const xValues = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const yValues = [223, 212, 204, 199, 206, 206, 208, 201, 221, 201, 211, 200];
const barColors = ["silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
        label: 'Mięsiące w 2024',
        backgroundColor: barColors,
        data: yValues
    }]
  },
});