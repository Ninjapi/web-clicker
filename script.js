// Класс игры
class Game {
    // Свойства класса - по сути переменные, которые хранят информацию о состоянии игры
    clicks = 0;
    clickIncome = 1;
    income = 0;
    // В квадратных скобках храним массив конфигов воркеров. Фигурные скобки - это объект, по сути это такая переменная, внутри которой есть еще переменные.
    workerConfigs = [
        {
            rootElementId: 'worker1',
            name: 'Loot Bug',
            price: 10,
            income: 1,
            bgcolor: '#FF0000',
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/b/be/LootBug.png)',
        },
        {
            rootElementId: 'worker2',
            name: 'Mini-M.U.L.E.',
            price: 20,
            income: 2,
            bgcolor: '#FF7F00',
            img: "url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/3/35/MiniMule.png)",
        },
        {
            rootElementId: 'worker3',
            name: 'M.U.L.E.',
            price: 30,
            income: 3,
            bgcolor: '#FFFF00',
            img: 'url(https://static.tvtropes.org/pmwiki/pub/images/molly_03.png)',
        },
        {
            rootElementId: 'worker4',
            name: 'Bosco',
            price: 40,
            income: 4,
            bgcolor: "#00FF00",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/9b/Bosco.png)'
        },
        {
            rootElementId: 'worker5',
            name: 'Dwarf',
            price: 50,
            income: 5,
            bgcolor: "#0000FF",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/d/d0/Gunner.png)'
        },
        {
            rootElementId: 'worker6',
            name: 'Huuli Hoarder',
            price: 60,
            income: 6,
            bgcolor: "#4B0082",
            img: 'url(https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/9/90/Huuli_Hoarder.png)'
        }
    ];
    // Задаем пустой массив экземпляров воркеров
    workerExemplars = [];
    //Сохраняем ссылки на элементы в HTML-странице
    counterElement = document.getElementById('counter');
    clickElement = document.getElementById('clickobj');
    incomeElement = document.getElementById('income')

    // Конструктор вызывается один раз, когда создаешь экземпляр этого класса
    constructor() {
        // В конструкторе вешаем один раз обработчик на кнопку клика. С помощью слова this мы можем обращаться к полям и методам внутри этого экземпляра
        this.clickElement.addEventListener('click', () => this.changeClicks(this.clickIncome));
        this.initializeWorkers();
    }
    
    // Метод инициализации воркеров внутри класса
    initializeWorkers() {
        // С помощью forEach мы проходим каждый элемент массива и что-то с ним делаем
        this.workerConfigs.forEach((workerConfig) => {
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

    updateCounterElement() {
        this.counterElement.innerHTML = this.clicks;
    }

    changeClicks(clicksAmount) {
        this.clicks += clicksAmount;
        this.updateCounterElement();
    }

    // Метод игрового цикла, мы проходим каждого воркера из массива экземпляров воркеров и вызываем у каждого метод update
    tick() {
        this.workerExemplars.forEach((worker) => {
            worker.update();
        })
        // Всех прошли, можно и обновить значения на странице
        this.updateCounterElement();
        this.incomeElement.innerHTML = this.income;
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
    img;
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
        this.img = workerConfig.img;
        // Сохраняем ссылки на все нужнные HTML-элементы
        this.initializeElements(workerConfig.rootElementId);
        // С помощью этих ссылок заполняем данные воркеров на странице
        this.nameElement.innerHTML = workerConfig.name;
        this.amountElement.innerHTML = this.amount;
        this.priceElement.innerHTML = this.price;
        this.imgElement.style.backgroundImage = this.img;
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
        this.game.income += this.income;
        
        this.price = Math.round(this.price * 1.15);
        this.priceElement.innerHTML = this.price;

        this.amount++;
        this.amountElement.innerHTML = this.amount;
    }

    // Метод, который вызывается извне в экземпляре класса игры в методе tick
    update() {
        const currentTickIncome = this.amount * this.income;
        this.game.changeClicks(currentTickIncome);
        
        if(this.game.clicks >= this.price * 0.7) {
            this.rootElement.style = 'display: block';
            this.rootElement.style.backgroundColor = this.bgcolor;
        }
    }
}

// Поскольку сами объявления классов ключевым словом class ничего не делают, то код фактически начнет отрабатывать после объявлений.
// Поэтому мы создаем экземпляр класса Game и вызываем его метод start.
const game = new Game();
game.start();