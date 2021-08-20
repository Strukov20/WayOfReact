
const picture = 'https://www.pngix.com/pngfile/big/318-3181134_trainers-coaches-scholars-icon-hd-png-download.png'

const initialState = {
    sidebarItems: [
        {key: 1, id: 1, name: 'Ivan', img: picture},
        {key: 2, id: 2, name: 'Petro', img: picture},
        {key: 3, id: 3, name: 'Katya', img: picture},
        {key: 4, id: 4, name: 'Ola', img: picture},
        {key: 5, id: 5, name: 'Viki', img: picture},
        {key: 6, id: 6, name: 'Danya', img: picture}
    ]
}


export const sidebarReducer = (state = initialState) => {

    return state;
}

export default sidebarReducer;