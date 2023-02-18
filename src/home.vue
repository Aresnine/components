<template>
    <h1>主入口文件</h1>
    <!-- 被引用的主文件，所有组件都在此引用 -->
    <XButton></XButton> 
    <SFCButton></SFCButton>   
    <JSXButton></JSXButton>  
</template>
    
<script setup lang='ts'>
import  XButton from './button'
import  SFCButton from './SFCButton.vue' 
import JSXButton from './JSXButton'
console.log("🚀 ~ file: home.vue:11 ~ XButton", XButton.name)
console.log("🚀 ~ file: home.vue:11 ~ XButton", SFCButton.name)
console.log("🚀 ~ file: home.vue:11 ~ XButton", JSXButton.name)

</script>
    
<style>
    
</style>