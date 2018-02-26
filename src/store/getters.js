
const getters = {
    currentMusic: state => state.sequenceList[state.currentIndex] ? state.sequenceList[state.currentIndex] : {},
    miniMusicPlaying: state => state.sequenceList.length > 0 && state.playing ? true : false,
    miniMusicPause: state => state.sequenceList.length > 0 && !state.playing ? true : false,
    nextCurrentIndex: state => state.currentIndex + 1 >= state.sequenceList.length ? 0 : state.currentIndex + 1,
    prevCurrentIndex: state => state.currentIndex - 1 < 0 ? state.sequenceList.length - 1 : state.currentIndex - 1
}
export default getters