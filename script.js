// Класс игры
class Game {
    // Свойства класса - по сути переменные, которые хранят информацию о состоянии игры
    clicks = 0;
    clickIncome = 1;
    income = 0;
    // В квадратных скобках храним массив конфигов воркеров. Фигурные скобки - это объект, по сути это такая переменная, внутри которой есть еще переменные.
    workerConfig = [
        {
            rootElementId: 'worker1',
            name: 'Loot Bug',
            price: 100,
            income: 1,
            bgcolor: '#FF0000',
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/b/be/LootBug.png)',
        },
        {
            rootElementId: 'worker2',
            name: 'Mini-M.U.L.E.',
            price: 200,
            income: 2,
            bgcolor: '#FF7F00',
            img: "url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/3/35/MiniMule.png)",
        },
        {
            rootElementId: 'worker3',
            name: 'M.U.L.E.',
            price: 300,
            income: 3,
            bgcolor: '#FFFF00',
            img: 'url(https://static.tvtropes.org/pmwiki/pub/images/molly_03.png)',
        },
        {
            rootElementId: 'worker4',
            name: 'Bosco',
            price: 400,
            income: 4,
            bgcolor: "#00FF00",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/9b/Bosco.png)',
        },
        {
            rootElementId: 'worker5',
            name: 'Dwarf',
            price: 500,
            income: 5,
            bgcolor: "#0000FF",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/d/d0/Gunner.png)',
        },
        {
            rootElementId: 'worker6',
            name: 'Huuli Hoarder',
            price: 600,
            income: 6,
            bgcolor: "#4B0082",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/90/Huuli_Hoarder.png)',
        }
    ];
    upgradeConfig = [
        {
            rootElementId: 'upgrade1',
            name: 'Better Pickaxe',
            workerId: 'click',
            description: 'Направьте свою дворфскую ярость через кирку.',
            price: 200,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/9e/Icon_ExtractOre.png)',
        },
        {
            rootElementId: 'upgrade2',
            name: 'Mineral Food',
            workerId: 'worker1',
            description : 'Корм для жуков-сборщиков и не только.',
            price: 300,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/e/e0/Deep_pockets_perk_icon.png)'
        },
        {
            rootElementId: 'upgrade3',
            name: 'Training',
            workerId: 'worker1',
            description : 'Научите жуков-сборщиков базовым командам.',
            price: 600,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/b/b7/Beast_master_perk_icon.png)'
        },
        {
            rootElementId: 'upgrade4',
            name: 'Speed Booster',
            workerId: 'worker2',
            description : "Мини-M.U.L.E. станет вдвое быстрей и эффективней.",
            price: 400,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/8/89/Dash_perk_icon.png)'
        },
        {
            rootElementId: 'upgrade5',
            name: 'Fast Recharge',
            workerId: 'worker2',
            description : 'Быстрая зарядка мини-M.U.L.E. - залог успеха.',
            price: 700,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/98/Icon_Upgrade_ChargeUp.png)',
        },
        {
            rootElementId: 'upgrade6',
            name: 'Cargo Hold',
            workerId: 'worker3',
            description : 'С этим изобретением в M.U.L.E. вместится вдвое больше.',
            price: 500,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/7/77/Expert_depositor_perk_icon.png)',
        },
        {
            rootElementId: 'upgrade7',
            name: 'Steel Armor',
            workerId: 'worker3',
            description : 'Броня M.U.L.E. теперь содержит сталь.',
            price: 800,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/7/74/Elemental_insulation_perk_icon.png)',
        },
        {
            rootElementId: 'upgrade8',
            name: 'Mining Equip',
            workerId: 'worker4',
            description : 'Боско выносливее, лучше, быстрее, сильнее.',
            price: 600,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/7/78/Icon_Upgrade_Digging.png)',
        },
        {
            rootElementId: 'upgrade9',
            name: 'Bigger Caliber',
            workerId: 'worker4',
            description : 'Больше калибра - больше профита, так ведь?',
            price: 900,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/8/84/Icon_Upgrade_Ammo.png)',
        },
        {
            rootElementId: 'upgrade10',
            name: 'Med Bay',
            workerId: 'worker5',
            description : 'Дворф-больница с дворф-медиками! Что может быть лучше?',
            price: 700,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/1/14/Field_medic_perk_icon.png)',
        },
        {
            rootElementId: 'upgrade11',
            name: 'Briefing',
            workerId: 'worker5',
            description : 'Обычный брифинг дворфам, но сколько пользы-то от него!',
            price: 1000,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/98/Icon_Upgrade_ScareEnemies.png)',
        },
        {
            rootElementId: 'upgrade12',
            name: 'Mineral Sweets',
            workerId: 'worker6',
            description : 'Сладости Хьюли-собирателям никогда не помешают.',
            price: 800,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/6/62/Red_sugar_rocks_perk_icon.png)',
        },
        {
            rootElementId: 'upgrade13',
            name: 'Secret Tech',
            workerId: 'worker6',
            description : 'Хьюли трудятся вдвое усердней с этим устройством.',
            price: 1100,
            mod: 2,
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/0/0f/Icon_Upgrade_Special.png)'
        },
    ]
    upgradeExemplars = [];
    // Задаем пустой массив экземпляров воркеров
    workerExemplars = [];
    //Сохраняем ссылки на элементы в HTML-странице
    counterElement = document.getElementById('counter');
    clickElement = document.getElementById('clickobj');
    incomeElement = document.getElementById('income');

    // Конструктор вызывается один раз, когда создаешь экземпляр этого класса
    constructor() {
        // В конструкторе вешаем один раз обработчик на кнопку клика. С помощью слова this мы можем обращаться к полям и методам внутри этого экземпляра
        this.clickElement.addEventListener('click', () => this.changeClicks(this.clickIncome));
        this.initializeWorkers();
        this.initializeUpgrades();
    }
    
    // Метод инициализации воркеров внутри класса
    initializeWorkers() {
        // С помощью forEach мы проходим каждый элемент массива и что-то с ним делаем
        this.workerConfig.forEach((workerConfig) => {
            // Здесь мы находимся внутри стрелочной функции и у нас доступен текущий элемент workerConfig. Далее с помощью ключевого слова new и названия 
            // класса Worker мы создаем экземпляр класса и передаем в его конструктор два аргумента: this - ссылка на экземпляр игры, и workerConfig - ссылка на конфиг
            // текущего элемента цикла. 
            const worker = new Worker(this, workerConfig);
            // Полученный экземпляр мы запихиваем в массив.
            this.workerExemplars.push(worker);
        })
        //Итогом выполнения метода initializeWorkers будет заполненный массив workerExemplars экземплярами класса Worker, для каждого из которого был передан уникальный
        //конфиг из массива workerConfigs
    }

    initializeUpgrades() {
        this.upgradeConfig.forEach((upgradeConfig) => {
            this.generateDivs(upgradeConfig.rootElementId);
            const upgrade = new Upgrade(this, upgradeConfig);
            this.upgradeExemplars.push(upgrade);
        })
    }

    generateDivs(id) {
        let right = document.getElementById('right');
        let buybutton = document.createElement('div');
            right.appendChild(buybutton);
            buybutton.classList.add('buybutton');
            buybutton.id = id;
            const buyimg = document.createElement('div');
                buyimg.classList.add('buyupgradeimg');
                buyimg.setAttribute('data-img', '');
                buybutton.appendChild(buyimg);
            const description = document.createElement('div');
                description.classList.add('description');
                description.setAttribute('data-description', '');
                buybutton.appendChild(description);
            const a = document.createElement('a')
                a.classList.add('plus');
                a.href = '#';
                a.setAttribute('data-buy', '');
                buybutton.appendChild(a);
                const div = document.createElement('div');
                    a.appendChild(div);
                    const plus = document.createElement('div');
                        plus.classList.add('plusimg');
                        div.appendChild(plus);
            const name = document.createElement('span');
                name.setAttribute('data-name', '');
                buybutton.appendChild(name);
            const price = document.createElement('div');
                price.classList.add('price');
                price.innerHTML = 'Price: ';
                buybutton.appendChild(price);
                const price2 = document.createElement('div');
                    price2.classList.add('price2');
                    price2.setAttribute('data-price', '');
                    price.appendChild(price2);
    }

    updateCounterElement() {
        this.counterElement.innerHTML = this.clicks;
    }
    changeClicks(clicksAmount) {
        this.clicks += clicksAmount;
        this.updateCounterElement();
    }
    getIncome() {
        this.income = 0;
        this.workerExemplars.forEach((worker) => {
            worker.update();
        })
        this.upgradeExemplars.forEach((upgrade) => {
            upgrade.update();
        })
        this.incomeElement.innerHTML = this.income;
    }
    // Метод игрового цикла, мы проходим каждого воркера из массива экземпляров воркеров и вызываем у каждого метод update
    tick() {
        this.getIncome();
        this.changeClicks(this.income);
        this.updateCounterElement();
    }

    // Точка входа в игру, в ней запускаем наш бесконечный цикл
    start() {
        setInterval(() => this.tick(), 1_000);
    }
}

// Класс воркера
class Worker {
    // Базовые значения
    game;
    price;
    income;
    amount = 0;
    bgcolor;
    workerId;
    mod = 1;
    // Ссылки на HTML-элементы конкретного воркера
    rootElement;
    nameElement;
    buyButtonElement;
    amountElement;
    priceElement;
    imgElement;

    // Конструктор - функция, которая вызывается, когда мы создаем нового воркера. Когда мы делаем new Worker('a', 'b'), то вот в этом конструкторе
    // аргументы game и workerConfig будут равны 'a' и 'b' соответственно
    constructor(game, workerConfig) {
        // Сохраняем данные из переданного в конструктор конфига. в this.game будет хранится ссылка на экземпляр игры, из которой был
        // создан экземпляр данного воркера с помощью new Worker(game, workerConfig)
        this.game = game;
        this.price = workerConfig.price;
        this.income = workerConfig.income;
        this.bgcolor = workerConfig.bgcolor;
        this.workerId = workerConfig.rootElementId;
        // Сохраняем ссылки на все нужнные HTML-элементы
        this.initializeElements(workerConfig.rootElementId);
        // С помощью этих ссылок заполняем данные воркеров на странице
        this.nameElement.innerHTML = workerConfig.name;
        this.amountElement.innerHTML = this.amount;
        this.priceElement.innerHTML = this.price;
        this.imgElement.style.backgroundImage = workerConfig.img;
        // Устанавливаем обработчики на нужные кнопки
        this.buyButtonElement.addEventListener('click', () => this.buyWorker())
    }

    initializeElements(rootElementId) {
        // Получили наш корневой элемент
        this.rootElement = document.getElementById(rootElementId);
        // С помощью querySelector ищем элементы внутри корневого элемента по названию атрибута data-*
        this.nameElement = this.rootElement.querySelector('[data-name]');
        this.buyButtonElement = this.rootElement.querySelector('[data-buy]');
        this.amountElement = this.rootElement.querySelector('[data-amount]');
        this.priceElement = this.rootElement.querySelector('[data-price]');
        this.imgElement = this.rootElement.querySelector('[data-img]');
    }

    buyWorker() {
        // Проверяем наоборот, если денег мало, то с помощью return досрочно заканчиваем выполнение метода buyWorker. Это 
        // позволяет сократить код внутри блока в фигурных скобках. Хорошая практика типа.
        if(this.game.clicks < this.price) {
            return;
        } 

        // Поскольку у нас в this.game лежит экземпляр класса Game, то мы можем вызывать его методы и менять значения свойств!
        this.game.changeClicks(-this.price);
        
        this.price = Math.round(this.price * 1.15);
        this.priceElement.innerHTML = this.price;

        this.amount++;
        this.amountElement.innerHTML = this.amount;
        this.game.getIncome();
    }

    // Метод, который вызывается извне в экземпляре класса игры в методе tick
    update() {
        const currentTickIncome = this.amount * this.income * this.mod;
        this.game.income += currentTickIncome;
        if(this.game.clicks >= this.price * 0.7) {
            this.rootElement.style = 'display: block';
            this.rootElement.style.backgroundColor = this.bgcolor;
        }
    }
}

class Upgrade {
    game;
    price;
    workerId;
    mod;
    rootElement;
    nameElement;
    buyButtonElement;
    priceElement;
    descriptionElement;
    imgElement;
    bought = false;
    constructor(game, upgradeConfig) {
        this.game = game;
        this.price = upgradeConfig.price;
        this.workerId = upgradeConfig.workerId;
        this.mod = upgradeConfig.mod;
        this.initializeUpgradeElements(upgradeConfig.rootElementId);
        this.nameElement.innerHTML = upgradeConfig.name;
        this.priceElement.innerHTML = this.price;
        this.descriptionElement.innerHTML = upgradeConfig.description;
        this.imgElement.style.backgroundImage = upgradeConfig.img;
        this.buyButtonElement.addEventListener('click', () => this.buyUpgrade())
    }

    initializeUpgradeElements(rootElementId) {
        this.rootElement = document.getElementById(rootElementId);
        this.nameElement = this.rootElement.querySelector('[data-name]');
        this.buyButtonElement = this.rootElement.querySelector('[data-buy]');
        this.priceElement = this.rootElement.querySelector('[data-price]');
        this.descriptionElement = this.rootElement.querySelector('[data-description]');
        this.imgElement = this.rootElement.querySelector('[data-img]');
    }

    buyUpgrade() {
        if(this.bought == true){
            return;
        }
        if(this.game.clicks < this.price){
            return;
        }
        if(this.workerId == 'click') {
            this.game.clickIncome *= this.mod;
        } else {
            this.worker = this.game.workerExemplars.find(x => x.workerId === this.workerId);
            this.worker.mod *= this.mod;
        }
        this.game.changeClicks(-this.price);
        this.bought = true;
        this.game.getIncome();
        this.rootElement.remove(this.rootElementId);
    }

    update() {
        if(this.game.clicks >= this.price * 0.85) {
            this.rootElement.style = 'display: block'
        }
        if(this.game.clicks >= this.price) {
            this.rootElement.style.backgroundColor = '#66ff00'
        } else {
            this.rootElement.style.backgroundColor = '#FF0000'
        }
    }
};
const game = new Game();
game.start();