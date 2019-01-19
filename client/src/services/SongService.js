import Api from '@/services/Api'

export default {
    songIndex (){
        return Api().get('songs')
    },
    
}