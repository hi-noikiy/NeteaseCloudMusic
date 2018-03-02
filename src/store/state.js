import { playMode } from "assets/js/common.js";
const state = {
    profile: {},
    fullPage: false,
    playing: false,
    playList: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentMusicID: 0,
    pageFixed: false

}
export default state;