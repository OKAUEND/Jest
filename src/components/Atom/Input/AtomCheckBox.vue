<template>
    <input
        type="checkbox"
        v-model="propsObject">
</template>

<script>
export default {
    name:"atom-checkbox",
    props:{
        test:{

        }
    },
    computed:{
        propsObject:{
            get(){
                return this.test 
            },
            set(){
                this.$emit("change",this.test)
            }
        }
    }
}
</script>

<style scoped>

</style>