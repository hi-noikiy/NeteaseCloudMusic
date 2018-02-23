
const getters = {
    currentMusic: state => state.playList[state.currentIndex] ? state.playList[state.currentIndex] : {},
    miniMusicPlaying: state => state.playList.length > 0 && !state.fullPage && state.playing ? true : false,
    miniMusicPause: state => state.playList.length > 0 && !state.fullPage && !state.playing ? true : false,
    nextCurrentIndex: state => state.currentIndex + 1 >= state.playList.length ? 0 : state.currentIndex + 1,
    prevCurrentIndex: state => state.currentIndex - 1 < 0 ? state.playList.length - 1 : state.currentIndex - 1
}
export default getters