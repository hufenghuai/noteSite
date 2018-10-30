<template>
    <div class="footer-tab">
      <router-link to="/bookrack" tag="div" class="tab-item">
        <span>书架</span>
      </router-link>
      <router-link to="/handpick" tag="div" class="tab-item">
        <span>精选</span>
      </router-link>
      <router-link to="/find" tag="div" class="tab-item">
        <span>发现</span>
      </router-link>
      <router-link to="/me" tag="div" class="tab-item">
        <span>我</span>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">

export default {}
</script>

<style scoped>
  .footer-tab {
    position: absolute;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    border-top: 2px solid #eff0f2;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
</style>
