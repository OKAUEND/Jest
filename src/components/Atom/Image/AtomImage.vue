<template>
    <img 
        class="Test_radius"
        v-bind:src="pathRequier()"
        v-bind:class="ClassName">
</template>

<script>
export default {
    name:"atom-image",
    props:{
        img_path:{
            type:String,
            default:""
        },
        ClassName:{
            type:String,
            default:"img_default"
        }
    },
    methods:{
        pathRequier:function(){
            return require(`@/static/${this.img_path}`)
        }
    }
}
</script>

<style scoped>
/* .img_default
{

} */
.Test_radius
{
    display: inline-block;
    width: 100%;
    height: 100%;
}

/* Size */
.--small
{
    height: 30px;
    width: 30px;
}

.--medium
{
    height: 60px;
    width: 60px;
}

.--large
{
    height: 80px;
    width: 80px;
}

/* radius */
.--radius
{
    border-radius: 50%;
    /* border:1px solid white; */
}

</style>

