const avatarIsMeT = 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg',
      avatarIsMeF = 'https://image.flaticon.com/icons/png/512/194/194938.png'

const initialState = {
    pageName: 'Users',
    users: [
        {id: 1, username: 'Bohdan', follow: true, avatar: avatarIsMeT, city: 'Odessa', status: 'Hello, i`m learn React'},
        {id: 2, username: 'Oksanka', follow: false, avatar: avatarIsMeF, city: 'Odessa', status: 'Hello, i`m learn React'},
        {id: 3, username: 'Ivan', follow: true, avatar: avatarIsMeT, city: 'Odessa', status: 'Hello, i`m learn React'},
        {id: 4, username: 'Natalie', follow: false, avatar: avatarIsMeF, city: 'Odessa', status: 'Hello, i`m learn React'},
        {id: 5, username: 'Andri' , follow: true, avatar: avatarIsMeT, city: 'Odessa', status: 'Hello, i`m learn React'}
    ]
}

const usersReducer = (state = initialState) => {
    return state;
}

export default usersReducer