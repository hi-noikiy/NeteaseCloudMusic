import {playMode} from "assets/js/common.js";
const state = {
    profile:{},
    fullPage:false,
    playing:false,
    playList:[],
    sequenceList:[],
    mode:playMode.sequence,    
    currentIndex:-1
}
export default state;