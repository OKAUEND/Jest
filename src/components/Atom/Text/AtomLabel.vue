<template>
    <label 
        v-bind:class="ClassName">
            <slot name="slotcontent">
            </slot>
    </label>
</template>

<script>
export default {
    name:"Atom-Label",
    props:{
        ClassName:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
.Label_Large
{
    height: 100%;
    font-weight: bold;
    line-height: 100%;
    color: rgb(211, 211, 211);
}
</style>

