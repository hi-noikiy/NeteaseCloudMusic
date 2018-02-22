
const getters = {
    currentMusic: state => state.playList[state.currentIndex] ? state.playList[state.currentIndex] : {},
    miniMusicPlaying: state => state.playList.length > 0 && !state.fullPage && state.playing ? true : false,
    miniMusicPause: state => state.playList.length > 0 && !state.fullPage && !state.playing ? true : false,

}
export default getters