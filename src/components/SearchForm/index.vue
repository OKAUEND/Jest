<template>
    <div class="SearchForm --medium">
            <atom-input
                v-model="InputText"
                class="SearchInput"
                type="text"
                placeholder="コメント"
                >
            </atom-Input>
            <atom-button 
                v-bind:class="[ButtonClass]"
                v-on:onClick="onEventClick"
                >
                <template
                    v-slot:ButtonText
                    >
                    Search!
                </template>
            </atom-Button>
    </div>
</template>

<script>
import AtomButton from '@/components/Atom/Button/AtomButton.vue'
import AtomInput from '@/components/Atom/Input/AtomInputText.vue'
export default {
    name:'mole-SearchForm',
    components:{
        AtomButton,
        AtomInput,
    },
    data:function(){
        return{
            InputText:"",
            TestText:"TEST",
            ButtonClass:{
                'Button--green':false,
                'Button--red':false,
                'Button--small':true
            },
        }
    },
    methods:
    {
        onEventClick:function()
        {
            this.$emit(this.InputText)
        }
    },
}
</script>

<style scoped>
.SearchForm
{
    display: flex;
    border:0px solid #00000000;
    border-radius: 5px;
    box-shadow: 0 1px 3px #000;
    width: 100%;
    height: 80%
}

</style>


