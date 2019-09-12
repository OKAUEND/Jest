<template>
        <input 
            type="text" 
            v-model="input_text"
            v-bind:placeholder="placeholder"
            v-bind:class="ClassName"
            v-bind:Pattern="Pattern"
            v-bind:maxlength="maxlength"
            >
</template>

<script>
export default {
    name:"Atom-input",
    props:{
        value:{
            type:[String, Number]
        },
        placeholder:{
            type:String
        },
        ClassName:{
            type: String,
            default:'default'
        },
        Pattern:{
            type:String,
            default:""
        },
        maxlength:{
            type:Number,
        }

    },
    computed:{
        input_text:{
            get:function(){
                return this.value
            },
            set:function(value){
                this.$emit("change",value)
            }
        }
    }
}
</script>

<style scoped>
.default
{
    border:0px;
    background-color: #2c2c2c;
    font-size:20px;
    color:#d3d3d3;
    box-sizing:border-box;
    height: 100%;
    width: 100%;
    padding:5px;
}

.Countform{
    border:0px;
    background-color: #d3d3d3;
    color: #2c2c2c;
    height: 50%;
    width: 30px;
    padding:5px;
}

</style>
