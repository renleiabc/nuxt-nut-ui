<!--
 * @Author: renlei
 * @Date: 2020-04-09 13:44:39
 * @LastEditors: renlei
 * @LastEditTime: 2020-04-09 14:07:44
 * @Description: 
 -->
<template>
  <div class="box">
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
      <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
      <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
    </nut-tab>
  </div>
</template>

<script>
export default {
  methods: {
    tabSwitch(index, event) {
      console.log(index + "--" + event.target);
    }
  }
};
</script>
