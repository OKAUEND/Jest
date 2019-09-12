<template>
    <span 
        v-bind:class="ClassName">
        {{ Text }}
    </span>
</template>

<script>
export default {
    name:"atom-span",
    props:{
        Text:{
            type:String,
            default:""
        },
        ClassName:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
span{
    display: inline-block;
}

/* 表示位置 */
.--bottom{

}
/* Size */
.--small{
    font-size: 13px;
}

.--medium{
    font-size: 15px;
}

.--large{
    font-size: 20px;
}
</style>