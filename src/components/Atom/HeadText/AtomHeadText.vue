<template>
    <component
        v-bind:is="headTagByHeadLevel({Level})"
        >
        {{ Text }}
    </component>
</template>

<script>
export default {
    name:"atom-headtext",
    props:{
        Text:{
            type:String,
            default:""
        },
        Level:{
            type:String,
            default:"1"
        }
    },
    methods:{
        headTagByHeadLevel:function({Level})
        {
            return `h${Level}`
        }
    }
}

</script>

<style scoped>

</style>


