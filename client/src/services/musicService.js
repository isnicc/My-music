import Api from '@/services/musicApi'

export default {
  getTopList() {
    return Api().get('/top/list?idx=3')
  },
  getMusicUrl(id) {
    return Api().get('/music/url?id=' + id)
  },
  gelyricUrl(id) {
    return Api().get('/lyric?id=' + id)
  },
  getSongDetail(id) {
    return Api().get('/song/detail?ids=' + id)
  },
  getSearch(key) {
    return Api().get('/search?keywords=' + key)
  }
}

