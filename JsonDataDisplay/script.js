const randoms = [];

function displayData(data){
    let container = document.createElement('div');
    if(typeOfData(data) === 'object' && isArray(data)){
        

        if(['number', 'string', 'boolean'].includes(typeOfData(data[0]))){
            const div = document.createElement('div');
            div.id = `${typeOfData(data[0])}-div-${generateRandomNumber()}`;
            const ul = document.createElement('ul');
            ul.classList.add('list-unstyled');
            data.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                ul.appendChild(li);
            });
            div.appendChild(ul);
            container.appendChild(div);
        }else if(typeOfData(data[0]) === 'object'){
            if(isDate(data[0])){
                const div = document.createElement('div');
                div.id = `date-div-${generateRandomNumber()}`;
                const ul = document.createElement('ul');
                ul.classList.add('list-unstyled');
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = formatDate(item);
                    ul.appendChild(li);
                });
                div.appendChild(ul)
                container.appendChild(div);
            }else{
                const div = document.createElement('div');
                div.id = `table-div-${generateRandomNumber()}`;
                const table = document.createElement('table');
                table.classList.add('table', 'table-bordered');
                const tableHeadingRow = document.createElement('tr');
                getKeys(data[0]).forEach(item => {
                    const th = document.createElement('th');
                    th.classList.add('p-2');
                    th.innerText = firstLetterCapital(item);
                    tableHeadingRow.appendChild(th);
                });
                table.appendChild(tableHeadingRow);

                data.forEach(item => {
                    const tableDataRow = document.createElement('tr');
                    getKeys(item).forEach(row => {
                        const td = document.createElement('td');
                        td.classList.add('p-2');
                        if(typeOfData(item[row]) === 'object'){
                            const div = document.createElement('div');
                            div.id = `object-div-${generateRandomNumber()}`;
                            const p = document.createElement('p');
                            p.classList.add('d-flex', 'fw-bold', 'me-1');
                            p.innerText = item;
                            const obj = displayData(item[row]);
                            div.appendChild(obj);
                            td.appendChild(div);
                        }else{
                            td.innerText = item[row];
                        }
                        tableDataRow.appendChild(td);
                    });
                    table.appendChild(tableDataRow);
                });
                div.appendChild(table)
                container.appendChild(div);
            }
        }
    }else if(typeOfData(data) === 'object' && !isArray(data)){
        if(data){
            if(isDate(data)){
                const p = document.createElement('p');
                p.innerText = formatDate(data);
                container.appendChild(p);
            }else{
                getKeys(data).forEach(item => {
                    if(typeOfData(data[item]) === 'object'){
                        const div = document.createElement('div');
                        div.id = `object-div-${generateRandomNumber()}`;
                        div.classList.add('d-flex', 'border-bottom', 'py-1');
                        const p = document.createElement('p');
                        p.classList.add('d-flex', 'fw-bold', 'me-1');
                        p.innerText = `${firstLetterCapital(item)}: `;
                        const obj = displayData(data[item]);
                        div.appendChild(p);
                        div.appendChild(obj);
                        container.appendChild(div);
                    }else if(['number', 'string', 'boolean'].includes(typeOfData(data[item]))){
                        const div = document.createElement('div');
                        div.classList.add('d-flex', 'border-bottom', 'py-1');
                        const k = document.createElement('p');
                        k.classList.add('fw-bold', 'me-1');
                        k.innerText = `${firstLetterCapital(item)}: `;
                        const v = document.createElement('p');
                        v.innerText = data[item];
                        div.appendChild(k);
                        div.appendChild(v);
                        container.appendChild(div);
                    }
                });
            }
        }
    }else if(['number', 'string', 'boolean'].includes(typeOfData(data))){
        const p = document.createElement('p');
        p.innerText = data;
        container.appendChild(p);
    }

    return container;
}

function isArray(data){
    return Array.isArray(data);
}

function typeOfData(data){
    return typeof data;
}

function getKeys(obj){
    return Object.keys(obj);
}

function isDate(data){
    return Object.prototype.toString.call(data).includes('Date');
}

function formatDate(date){
    return `${date.getFullYear()} / ${(date.getMonth() + 1)} / ${date.getDate()}`;
}

function formatDateTime(date){
    return `${date.getFullYear()} / ${(date.getMonth() + 1)} / ${date.getDate()} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

function generateRandomNumber(){
    let number = 0;
    do{
        number = Math.round(Math.random() * 1000) + 1;
    }while(randoms.includes(number));
    return number;
}

function firstLetterCapital(str){
    return `${str.charAt(0).toUpperCase()}${str.substr(1, str.length)}`;
}



const i = 10;
const s = "ahmad";
const f = 10.8987897;
const b = false;
const d = new Date();
const integers = [1, 2, 3, 4, 5, 6];
const strings = ["string1", "string2", "string3"];
const bools = [true, false, true, false];
const dates = [new Date(), new Date(), new Date()];
const floats = [1.1, 2.2, 3.3, 4.4, 5.5];
const objects = [
    {
        name: "object1",
        value: floats
    },
    {
        name: "object2",
        value: integers
    },
    {
        name: "object3",
        value: strings
    }
];


const company = {
    "company": {
        "name": "Acme Inc.",
        "employees": [
            {
                "firstName": "John",
                "lastName": "Doe",
                "age": 35,
                "position": "Manager",
                "salary": 100000.00,
                "phoneNumbers": ["555-555-1212", "555-555-1213"],
                "email": "john.doe@acme.com"
            },
            {
                "firstName": "Jane",
                "lastName": "Smith",
                "age": 32,
                "position": "Developer",
                "salary": 90000.00,
                "phoneNumbers": ["555-555-1214"],
                "email": "jane.smith@acme.com"
            },
            {
                "firstName": "Bob",
                "lastName": "Johnson",
                "age": 40,
                "position": "Salesperson",
                "salary": 80000.00,
                "phoneNumbers": ["555-555-1215", "555-555-1216"],
                "email": "bob.johnson@acme.com"
            }
        ],
        "active": true
    },
    "departments": [
        {
            "name": "Marketing",
            "employees": [
                {
                    "firstName": "Tom",
                    "lastName": "Johnson",
                    "age": 45,
                    "position": "Director",
                    "salary": 150000.00,
                    "phoneNumbers": ["555-555-1217"],
                    "email": "tom.johnson@acme.com"
                },
                {
                    "firstName": "Sara",
                    "lastName": "Jones",
                    "age": 30,
                    "position": "Specialist",
                    "salary": 75000.00,
                    "phoneNumbers": ["555-555-1218"],
                    "email": "sara.jones@acme.com"
                }
            ],
            "budget": 500000.00,
            "active": true
        },
        {
            "name": "Research",
            "employees": [
                {
                    "firstName": "Mike",
                    "lastName": "Brown",
                    "age": 37,
                    "position": "Lead",
                    "salary": 110000.00,
                    "phoneNumbers": ["555-555-1219"],
                    "email": "mike.brown@acme.com"
                }
            ],
            "budget": 200000.00,
            "active": false
        }
    ]
};


const school = {
    name: "Central School",
    established: new Date("2010-01-01"),
    location: {
        address: "123 Main St.",
        city: "Anytown",
        state: "Anystate",
    },
    studentCount: 500,
    averageGPA: 3.5,
    sportsTeams: [
        {
        name: "Soccer",
        coach: "Mr. Smith",
        winPercentage: 0.8,
        },
        {
        name: "Basketball",
        coach: "Ms. Johnson",
        winPercentage: 0.7,
        },
    ],
    classes: [
        {
        name: "Math",
        teacher: "Mrs. Brown",
        company: company,
        students: [
            {
            name: "Alice",
            grade: "A",
            },
            {
            name: "Bob",
            grade: "B",
            },
        ],
        },
        {
        name: "English",
        teacher: "Mr. Davis",
        company: company,
        students: [
            {
            name: "Carol",
            grade: "A",
            },
            {
            name: "Dave",
            grade: "C",
            },
        ],
        },
    ],
};



const container = displayData(company);
document.getElementById('data').appendChild(container);
