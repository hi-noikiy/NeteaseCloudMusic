<template>
  <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions">
  </video-player>
</template>
<script>
export default {
  props: ["op"],
  data() {
    return {
      playerOptions: {
        // videojs options
        // muted: true,
        // language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: this.op.sources,
        poster: this.op.poster
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },

  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>
