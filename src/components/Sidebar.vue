<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <img src="../assets/avatar.png" alt="Conor Higgins">
      <h2>Conor Higgins</h2>
      <h3>Tech Leadership, Product Engineering, UX Research</h3>
    </div>

    <div class="sidebar__contact">
      <span>
        <font-awesome-icon icon="mobile-alt" />
        <a href="tel:+353857152262">
          +353 85 715 2262
        </a>
      </span>

      <span>
        <font-awesome-icon icon="at" />
        <a href="mailto:info@conorhiggins.com">
          info@conorhiggins.com
        </a>
      </span>
    </div>

    <div class="sidebar__social">
      <a href="https://twitter.com/askhiggins" target="_blank" aria-label="Twitter" rel="noopener">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <span>
          @AskHiggins
        </span>
      </a>

      <a href="https://github.com/ConorHiggins" target="_blank" aria-label="Github" rel="noopener">
        <font-awesome-icon :icon="['fab', 'github']" />
        <span>
          ConorHiggins
        </span>
      </a>

      <a href="https://codepen.io/ch1601" target="_blank" aria-label="Codepen" rel="noopener">
        <font-awesome-icon :icon="['fab', 'codepen']" />
        <span>
          ch1601
        </span>
      </a>

      <a href="https://www.linkedin.com/in/conorhiggins1601/" target="_blank" aria-label="LinkedIn" rel="noopener">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        <span>
          conorhiggins1601
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons'
  import { faTwitter, faGithub, faCodepen, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faMobileAlt, faAt, faTwitter, faGithub, faCodepen, faLinkedinIn)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  export default {
    name: 'Sidebar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "../styles/mixins/breakpoints";
  @import "../styles/variables/colors";

  h1, h3 {
    margin: 0;
  }

  h3 {
    font-weight: 600;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    background-color: $color--primary;
    border-radius: 8px;
    color: $color--white;
    height: 100%;
    box-sizing: border-box;
    flex: 0 0 auto;
    margin-bottom: 32px;

    @include print {
      padding: 24px;
      align-items: baseline;
      border-radius: 4px;
      margin-bottom: 0;
    }

    @include for-tablet-landscape-up {
      width: 320px;
      position: sticky;
      top: 16px;
      margin-bottom: 0;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 16px 0;
      object-fit: cover;
    }

    &__contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;

      span {
        display: flex;
        align-items: center;
        padding: 4px 0;
      }

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      i,
      svg {
        margin-right: 8px;
      }

      @include print {
        flex-direction: row;
        font-size: 14px;
        margin-bottom: 8px;

        span {
          margin-right: 16px;
          padding: 0;
        }

        i,
        svg {
          font-size: 12px;
          margin: 0 8px;
        }
      }
    }


    &__social {
      display: flex;
      align-items: center;
      padding: 10px;

      a {
        color: $color--white;

        span {
          display: none;
        }
      }

      i,
      svg {
        margin: 0 8px;
        font-size: 20px;
      }

      @include print {
        padding: 0;

        a {
          display: flex;
          align-items: center;
          font-size: 14px;
          text-decoration: none;

          i,
          svg {
            font-size: 12px;
          }

          span {
            display: block;
          }
        }

        span {
          margin-right: 16px;
          padding: 0;
        }
      }
    }


    &__profile {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 32px;
      text-align: center;

      @include print {
        position: relative;
        flex-direction: row;
        text-align: left;
        flex-wrap: wrap;
        padding-left: 64px;
        margin-bottom: 24px;

        img {
          width: 48px;
          height: 48px;
          position: absolute;
          left: 0;
          top: 0;
          margin: 0;
        }

        h2, h3 {
          flex: 1 0 100%;
        }

        h3 {
          font-size: 16px;
        }
      }
    }
  }

</style>
