<template>
  <div class="book-list">

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello this is <demo-1>'
      }
    }
  }
</script>
<style scoped lang="stylus">
  .book-list {
    width: 99%;
    margin: 15px auto;
  }

  /*= common css to all effects =*/
  .single-member {
    width: 265px;
    margin: 30px 1.5%;
    background-color: #fff;
    text-align: center;
    position: relative;
    display inline-block
  }

  .member-image img {
    max-width: 100%;
    vertical-align: middle;
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0 0;
    text-transform: uppercase;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 15px;
    line-height: 22px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 0 30px;
    margin-bottom: 10px;
  }

  .social-touch a {
    display: inline-block;
    width: 27px;
    height: 26px;
    vertical-align: middle;
    margin: 0 2px;
    /*background-image: url(../images/social-icons.png);*/
    background-repeat: no-repeat;
    opacity: 0.7;
    transition: 0.3s;
    color: white;
    width: 100%;
  }

  .social-touch a:hover {
    opacity: 1;
    transition: 0.3s;
  }

  .fb-touch {
    background-position: 0 0;
  }

  .tweet-touch {
    background-position: -35px 0;
  }

  .linkedin-touch {
    background-position: -71px 0;
  }

  .icon-colored .fb-touch {
    background-position: 0 -27px;
  }

  .icon-colored .tweet-touch {
    background-position: -35px -27px;
  }

  .icon-colored .linkedin-touch {
    background-position: -71px -27px;
  }

  /*= common css to all effects end =*/

  /*= effect-2 css =*/
  .effect-2 {
    max-height: 302px;
    min-height: 302px;
    overflow: hidden;
  }

  .effect-2 h3 {
    padding-top: 7px;
    line-height: 33px;
  }

  .effect-2 .member-image {
    border-bottom: 5px solid #1fb554;
    height: 212px;
    overflow: hidden;
    width: 100%;
    transition: 0.4s;
    display: inline-block;
    float: none;
    vertical-align: middle;
  }

  .effect-2 .member-info {
    transition: 0.4s;
  }

  .effect-2 .member-image img {
    width: 100%;
    vertical-align: bottom;
  }

  .effect-2 .social-touch {
    background-color: #1fb554;
    float: left;
    left: 0;
    bottom: 0;
    overflow: hidden;
    padding: 5px 0;
    width: 100%;
    transition: 0.4s;
  }

  .effect-2:hover .member-image {
    height: 81px;
    transition: 0.4s;
  }

  /*= effect-2 css end =*/
</style>
