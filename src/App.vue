<template>
  <div id="app">
    <div class="main">
      <CtjGroup :name="'三国演示'" :tips="'中国古典文学四大名著之一'"></CtjGroup>
      <p>描写的是自东汉末年至魏、蜀、吴三国归晋期间的历史故事。它艺术地再现了激烈的农民起义、封建军阀混战以及勾心斗角的政治角逐步。为了利于少年儿童阅读，本书对《三国演义》原著进行了改写。力求保持原著风采，语言流畅。</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  padding: 30px;
  text-align: left;
  width: 500px;
}
</style>
