import Api from '@/services/Api'

export default {
    register (credentials){
        return Api().post('register', credentials)
    }
}

// Authentication.register({
//     email: 'test@email.com',
//     password: 'password'
// })