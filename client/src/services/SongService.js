import Api from '@/services/Api'

export default {
    songIndex (credentials){
        return Api().get('songs')
    },
    
}