const SortChange = 'sortHasChange';
const filterChange = 'filterHasChange';

let initialState = {
    sortValue: '---',
    filter: {
        clothes: false,
        cap: false,
        cups: false,
        magnets: false,
        notes: false,
        pens: false,
        icons: false,
        stickers: false,
        umbrellas: false
    },
    items: [
        {
            title: "Бейсболка классическая красная с белым кантом «Эмблема ДВФУ»",
            price: 815,
            desc: "Вышивка белым",
            src: 'https://www.dvfu.ru/upload/medialibrary/f3c/%D0%B11.png'
        },
        {
            title: "Бейсболка Snapback темно-синяя «FEFU»",
            price: 1020,
            desc: "Объемная вышивка голубым",
            src: 'https://www.dvfu.ru/upload/medialibrary/a1e/%D0%B13.png'
        },
        {
            title: "Кружка синяя «На волне»",
            price: 920,
            desc: "Материал: керамика, с soft-touch покрытием, объём: 350 мл",
            src: 'https://www.dvfu.ru/upload/medialibrary/50d/%D0%BA%D1%801.png'
        },
        {
            title: "Магнит мягкий «Остров Русский»",
            price: 230,
            desc: "Материал: винил, размер: 7,5x7 см",
            src: 'https://www.dvfu.ru/upload/medialibrary/9d7/m4.png'
        },
        {
            title: "Тетрадь «Творить и развиваться»",
            price: 275,
            desc: "Размер: 21х30 см, кол-во листов: 96, разлиновка: клетка",
            src: 'https://www.dvfu.ru/upload/medialibrary/ab8/%D0%B11.png'
        },
        {
            title: "Шариковая ручка «ДВФУ»",
            price: 56,
            desc: "Материал: пластик, цвет стержня: синий",
            src: 'https://www.dvfu.ru/upload/medialibrary/3ed/%D1%801.png'
        },
        {
            title: "Умный» зонт «FEFU»",
            price: 3070,
            desc: "Обратный механизм раскрытия, возможность вертикальной установки, стеклокерамические спицы, двойной купол. Цвет: темно-синий/голубой. Диаметр: 106",
            src: 'https://www.dvfu.ru/upload/medialibrary/907/319_%D0%B3.png'
        },

    ]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SortChange: {
            let copyState = {...state}
            copyState.sortValue = action.par
            return copyState
        }
        case filterChange: {
            let copyState = {...state}
            copyState.filter = {...state.filter}
            let value = action.value
            if (value === 'clothes')
                copyState.filter.clothes = !copyState.filter.clothes
            else if (value === 'cap')
                copyState.filter.cap = !copyState.filter.cap
            else if (value === 'cups')
                copyState.filter.cups = !copyState.filter.cups
            else if (value === 'magnets')
                copyState.filter.magnets = !copyState.filter.magnets
            else if (value === 'notes')
                copyState.filter.notes = !copyState.filter.notes
            else if (value === 'pens')
                copyState.filter.pens = !copyState.filter.pens
            else if (value === 'icons')
                copyState.filter.icons = !copyState.filter.icons
            else if (value === 'stickers')
                copyState.filter.stickers = !copyState.filter.stickers
            else if (value === 'umbrellas')
                copyState.filter.umbrellas = !copyState.filter.umbrellas
            return copyState
        }
        default:
            return state
    }
}

export const onSortChangeActionCreator = (par) => ({type: SortChange, par: par})

export const onFilterChangeActionCreator = (value) => ({type: filterChange, value: value})

export default homeReducer