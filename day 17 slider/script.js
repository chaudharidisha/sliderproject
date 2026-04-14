const sliders = [
    {
        img : "https://tse1.mm.bing.net/th/id/OIP.wsnc1RmxBci6TzU3HwaJJAHaEx?pid=Api&P=0&h=180"
    },
    {
        img : "https://tse4.mm.bing.net/th/id/OIP.FvUtm1WDc2d2dBQ7dxgetAHaEK?pid=Api&P=0&h=180"
    },
    {
        img : "https://tse4.mm.bing.net/th/id/OIP.lWfx8hcOESSOpVia8l9iXwHaEK?pid=Api&P=0&h=180"
    }
];

const slidersContainer = document.querySelector('#sliders img');

let currentQuote = 0;

const nextQuote = ()=> {
    slidersContainer.src = sliders[currentQuote].img;

    currentQuote ++;
}

nextQuote();

const prevQuote = ()=> {
    slidersContainer.src = sliders[currentQuote].img;

    currentQuote --;
}

prevQuote();