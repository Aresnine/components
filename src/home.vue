<template>
    <h1>主入口文件</h1>
    <!-- 被引用的主文件，所有组件都在此引用 -->
    <XButton >默认按钮</XButton>
    <XButton color="blue">蓝色按钮</XButton> 
    <XButton color="gray">灰色按钮</XButton> 
    <XButton color="yellow">黄色按钮</XButton> 
    <XButton color="red">红色按钮</XButton> 
    <XButton color="orange">橙色按钮</XButton> 
    <hr>
    <SFCButton></SFCButton>   
    <JSXButton></JSXButton>  
    <hr>
    <h2>css原子化-图标</h2>
    <button class="text-40px leading-40px flex items-center"><i class="i-ion-accessibility inline-block "></i>按钮</button>
    <i class="i-ion-balloon-outline text-blue text-60px inline-block"></i>
</template>
    
<script setup lang='ts'>
import  XButton from './button'
import  SFCButton from './SFCButton.vue' 
import JSXButton from './JSXButton'


</script>
    
<style>
    
</style>