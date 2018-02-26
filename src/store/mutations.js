const mutations = {
    saveLogin(state, preload) {
        state.profile = preload;
    },
    // 处理播放器
    // 打开播放器页面
    OPEN_MUSIC(state) {
        state.fullPage = true;
    },
    // 收起播放器页面
    CLOSE_MUSIC(state) {
        state.fullPage = false;
    },
    SET_PAGE_FIXED(state,preload){
        state.pageFixed = preload;
    },
    // 添加音乐列表
    SET_MUSIC_PLAYLIST(state, preload) {
        state.playList = preload;
    },
    SET_MUSIC_SEQUENCE(state, preload) {
        state.sequenceList= [].concat(preload);
    },
    // 添加播放音乐索引
    SET_MUSIC_CURRENTINDEX(state, preload) {
        state.currentIndex = preload
    },
    // 开始播放音乐
    SET_MUSIC_PLAYING(state) {
        state.playing = true;
    },
    // 暂停音乐
    SET_MUSIC_PAUSE(state) {
        state.playing = false;
    },
    // 设置播放模式
    SET_MUSIC_PLAYMODE(state) {
        state.mode = state.mode + 1 > 2 ? 0 : state.mode + 1
    }


}

export default mutations;