<template>
  <div class="progress">
    <span class="progress__label">
      {{title}}
    </span>

    <div class="progress__bar">
      <span
        :style="{
          width: percent + '%'
        }">
        <span class="progress__bar-fg"
          :style="{
            backgroundColor: color
          }">
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: [
      'title',
      'percent',
      'color',
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/variables/colors";

  .progress {
    padding: 8px 0;
    display: flex;
    flex-direction: column;

    &:first-child {
      padding-top: 0;
    }

    &__bar {
      background-color: $color--accent;
      position: relative;
      height: 5px;
      border-radius: 2px;

      span {
        display: block;
        height: 100%;
        border-radius: 2px;
      }

      &-fg {
        -webkit-animation: progressBar 2s ease-in-out;
        -webkit-animation-fill-mode: both;
        -moz-animation: progressBar 2s ease-in-out;
        -moz-animation-fill-mode:both;
      }
    }

    @-webkit-keyframes progressBar {
      0% { width: 0; }
      100% { width: 100%; }
    }

    @-moz-keyframes progressBar {
      0% { width: 0; }
      100% { width: 100%; }
    }

    &__label {
      font-weight: 300;
      font-size: 14px;
      flex: 1 0 100%;
      margin-bottom: 5px;
    }
  }
</style>
