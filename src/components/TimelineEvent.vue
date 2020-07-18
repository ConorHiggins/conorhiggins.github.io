<template>
  <div class="timeline-event">

    <span class="timeline-event__node">
      <i :class="item.icon"></i>
    </span>

    <span class="timeline-event__date">
      {{item.when}}
    </span>

    <h3 class="timeline-event__title">
      {{item.title}}
    </h3>

    <h5 class="timeline-event__title" v-if="item.subtitle && item.subtitle.length">
      {{item.subtitle}}
    </h5>

    <p
      v-for="(w, i) in item.what"
      :key="i">
      {{w}}
    </p>

    <div class="timeline-event__tags" v-if="item.skills && item.skills.length">

      <span class="timeline-event__tag"
        v-for="skill in item.skills"
        :key="skill">
        {{skill}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimelineEvent',
    props: [
      'item',
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/mixins/breakpoints";
  @import "../styles/variables/colors";

  .timeline-event {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 32px;
    position: relative;
    margin: 16px 0;
    position: relative;
    page-break-inside: avoid;

    &:before {
      content: ' ';
      position: absolute;
      left: 6px;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: $color--timeline-track;
    }

    &__date {
      font-size: 12px;
    }

    &__node {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: white;
      top: 0;
      left: -5px;
      display: flex;
      align-items: baseline;
      justify-content: center;
      color: $color--secondary;
    }

    &__title {
      font-weight: 600;
      margin-bottom: 4px !important;
    }

    &__tags {
      display: flex;
      align-items: center;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    &__tag {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      border-radius: 12px;
      background-color: $color--tag;
      padding: 4px 12px;
      font-size: 14px;
      margin-bottom: 4px;
    }

    p {
      margin-bottom: 8px;
      page-break-inside: avoid;
      position: relative;
    }

    @include print {

    }
  }
</style>
