
const picture = 'https://www.pngix.com/pngfile/big/318-3181134_trainers-coaches-scholars-icon-hd-png-download.png'

const initialState = {
    sidebarItems: [
        { id: 1, name: 'Ivan', img: picture},
        { id: 2, name: 'Petro', img: picture},
        { id: 3, name: 'Katya', img: picture},
        { id: 4, name: 'Ola', img: picture},
        { id: 5, name: 'Viki', img: picture},
        { id: 6, name: 'Danya', img: picture}
    ]
}


export const sidebarReducer = (state = initialState) => {

    return state;
}

export default sidebarReducer;