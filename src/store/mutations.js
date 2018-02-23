const mutations = {
    saveLogin(state, preload) {
        state.profile = preload;
    },
    // 处理播放器
    // 打开播放器页面
    OPEN_MUSIC(state) {
        state.fullPage = true;
    },
    CLOSE_MUSIC(state) {
        state.fullPage = false;
    },
    SET_MUSIC_SEQUENCE(state, preload) {
        state.playList = preload;
    },
    SET_MUSIC_CURRENTINDEX(state, preload) {
        state.currentIndex = preload
    },
    SET_MUSIC_PLAYING(state) {
        state.playing = true;
    },
    SET_MUSIC_PAUSE(state) {
        state.playing = false;
    },
    SET_MUSIC_PLAYMODE(state) {
        state.mode = state.mode + 1 > 2 ? 0 : state.mode + 1
    }


}

export default mutations;