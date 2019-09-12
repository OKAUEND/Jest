<template>
        <button 
            v-bind:class="ClassName" 
            v-on:click="onClick"
        >
        <slot name="ButtonText"></slot>
        </button>
</template>

<script>
export default {
    name:"Atom-Button",
    props:{
        ClassName:{
            type: String,
            default:'default'
        }
    },
    methods:{
        onClick:function()
        {
            return this.$emit('onClick');
        }
    }

}
</script>

<style scoped>
.default
{
    border: 0px;
    height: 100%;
    background-color:#4c4c4c;
    color:#cfcfcf;
}

.Button-radius
{
    border-radius: 0px 4px 4px 0px;
}

/* Color */
.Button--green
{
    background-color:#02ca0c;
    color:#e9e9e9;
}

.Button--red
{
    background-color:#ca0202;
}

/* Size */
.Button--small
{
    padding: 5px;
}

.Button--medium
{
    padding: 7.5px;
}

.Button--large
{
    padding: 10px;
}

</style>
