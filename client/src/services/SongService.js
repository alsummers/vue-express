import Api from '@/services/Api'

export default {
    songIndex (){
        return Api().get('songs')
    },
    post (song) {
        return Api().post('songs', song)
    }
    
}