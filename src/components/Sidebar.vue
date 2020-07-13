<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <img src="../assets/avatar.png">
      <h2>Conor Higgins</h2>
      <h3>Fullstack Engineer, Tech Lead, Wearer of many hats</h3>
    </div>

    <div class="sidebar__contact">
      <span>
        <i class="fas fa-mobile-alt"></i>
        <a href="tel:+353857152262">
          085 715 2262
        </a>
      </span>

      <span>
        <i class="far fa-envelope-open"></i>
        <a href="mailto:info@conorhiggins.com">
          info@conorhiggins.com
        </a>
      </span>
    </div>

    <div class="sidebar__social">
      <a href="https://twitter.com/askhiggins" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>

      <a href="https://github.com/ConorHiggins" target="_blank">
        <i class="fab fa-github"></i>
      </a>

      <a href="https://codepen.io/ch1601" target="_blank">
        <i class="fab fa-codepen"></i>
      </a>

      <a href="https://www.linkedin.com/in/conorhiggins1601/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Sidebar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "../styles/mixins/breakpoints";

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
    // width: 320px;
    padding: 32px;
    background-color: #3f51b5;
    border-radius: 8px;
    color: #ffffff;
    height: 100%;
    box-sizing: border-box;
    flex: 0 0 auto;
    margin-bottom: 32px;

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

    &__contact i {
      margin-right: 8px;
    }

    &__contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
    }

    &__contact span {
      display: flex;
      align-items: center;
      padding: 4px 0;
    }

    &__contact a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      padding: 10px;
    }

    &__social a {
      color: white;
    }

    &__social i {
      margin: 0 8px;
      font-size: 20px;
    }

    &__profile {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 32px;
      text-align: center;
    }
  }

</style>
