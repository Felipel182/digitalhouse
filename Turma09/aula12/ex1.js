const getDaysWeek = () => {
    return [
        'Domingo',
        'Segunda',
        'terca',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];
}

const getData = () => {
    return [
        getDaysWeek(),
        [
            { 
                day: '01',
                cats: 0,
                dogs: 0
            },
            { 
                day: '02',
                cats: 0,
                dogs: 3
            },
            { 
                day: '03',
                cats: 6,
                dogs: 1
            },
            { 
                day: '04',
                cats: 3,
                dogs: 3
            }, 
            { 
                day: '05',
                cats: 1,
                dogs: 1
            }, 
            { 
                day: '06',
                cats: 7,
                dogs: 6
            }, 
            { 
                day: '07',
                cats: 9,
                dogs: 7
            },                                  
        ],
        [
            {
                day: '08',
                cats: 0,
                dogs: 0
            },
            { 
                day: '09',
                cats: 5,
                dogs: 6
            },
            { 
                day: '10',
                cats: 1,
                dogs: 1
            },
            { 
                day: '11',
                cats: 0,
                dogs: 0
            },
            { 
                day: '12',
                cats: 4,
                dogs: 4
            }, 
            { 
                day: '13',
                cats: 5,
                dogs: 1
            },  
            { 
                day: '14',
                cats: 2,
                dogs: 3
            },                 
        ],
        [
            {
                day: '15',
                cats: 0,
                dogs: 0
            },
            { 
                day: '16',
                cats: 1,
                dogs: 2
            },
            { 
                day: '17',
                cats: 6,
                dogs: 7
            },
            { 
                day: '18',
                cats: 1,
                dogs: 2
            },
            { 
                day: '19',
                cats: 2,
                dogs: 2
            },
            { 
                day: '20',
                cats: 0,
                dogs: 1
            },
            { 
                day: '21',
                cats: 1,
                dogs: 0
            },                                                  
        ],    
        [
            {
                day: '22',
                cats: 0,
                dogs: 0
            },
            { 
                day: '23',
                cats: 2,
                dogs: 2
            },
            { 
                day: '24',
                cats: 1,
                dogs: 1
            },
            { 
                day: '25',
                cats: 4,
                dogs: 4
            },
            { 
                day: '26',
                cats: 3,
                dogs: 0
            },
            { 
                day: '27',
                cats: 0,
                dogs: 2
            },
            { 
                day: '28',
                cats: 4,
                dogs: 2
            },                                                 
        ],
        [
            {
                day: '29',
                cats: 0,
                dogs: 0
            },
            { 
                day: '30',
                cats: 1,
                dogs: 1
            },         
        ],    
    ];
}

const getShelters = () => {
    return [
        {
            name: 'Patas',
            cat: true,
            dog: true,
            workdays: {
                domingo: false,
                segunda: true,
                terca: true,
                quarta: true,
                quinta: true,
                sexta: true,
                sabado: false               
            },
            capacity: 40,
        },
        {
            name: 'Bigodes',
            cat: true,
            dog: false,
            workdays: {
                domingo: false,
                segunda: false,
                terca: true,
                quarta: false,
                quinta: true,
                sexta: true,
                sabado: false               
            },
            capacity: 50,
        }, 
        {
            name: 'Fucinhos',
            cat: false,
            dog: true,
            workdays: {
                domingo: false,
                segunda: true,
                terca: false,
                quarta: true,
                quinta: false,
                sexta: false,
                sabado: true               
            },
            capacity: 50,
        },                
    ];
}

const totalPetsReceived = (msg = false) => {
    const data = getData();
    data.shift();

    let totalCats = 0;
    let totalDogs = 0;

    data.forEach((items) => {

        items.forEach((item) => {
            totalCats += item.cats;
            totalDogs += item.dogs;
        });

    });
    
    if (msg) {
        msg = '';
        msg += `O total de animais recebidos no último mês foi de ${totalCats + totalDogs}\n`;
        msg += `Deste total ${totalCats} são gatos e ${totalDogs} são cachorros`;

        return msg;
    }

    return totalCats + totalDogs;
}

const dayMostReceived = (msg = false) => {
    const data = getData();
    data.shift();

    let day;
    let most = 0;
    let titleDay;

    data.forEach((items) => {
        let weekDay = 0;

        items.forEach((item) => {
            const dayTotal = item.cats + item.dogs;

            weekDay++;

            if (dayTotal > most) {
                day = item.day;
                most = dayTotal;

                titleDay = getDaysWeek()[weekDay-1];
            }
        });

    });

    if (msg) {
        msg = '';
        msg += `O dia com o maior número de animais recebidos foi ${day} (${titleDay})\n`;
        msg += `Com um total de ${most} animais`;

        return msg;
    }

    return {
        day,
        most
    }

}

console.log(dayMostReceived(true));