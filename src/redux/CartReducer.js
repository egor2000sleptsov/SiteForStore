let initialState = {
    array: [{
        title: "Бейсболка классическая красная с белым кантом «Эмблема ДВФУ»",
        price: 815,
        desc: "Вышивка белым",
        src: 'https://www.dvfu.ru/upload/medialibrary/f3c/%D0%B11.png',
        type: 'cap',
        count: 1

    },
        {
            title: "Бейсболка Snapback темно-синяя «FEFU»",
            price: 1020,
            desc: "Объемная вышивка голубым",
            src: 'https://www.dvfu.ru/upload/medialibrary/a1e/%D0%B13.png',
            type: 'cap',
            count: 1
        },
        {
            title: "Кружка синяя «На волне»",
            price: 920,
            desc: "Материал: керамика, с soft-touch покрытием, объём: 350 мл",
            src: 'https://www.dvfu.ru/upload/medialibrary/50d/%D0%BA%D1%801.png',
            type: 'cups',
            count: 1
        }]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cartReducer