<template>
    <div class="SimpleShow">
        <item-icon
            v-bind:img_path="ImagePath"
            class="--small --radius">
        </item-icon>
        <item-text
            v-bind:Text="ItemName"
            class="--small">
        </item-text>
    </div>
</template>

<script>
import ItemIcon from '@/components/Atom/Image/AtomImage.vue'
import ItemText from '@/components/Atom/Text/AtomSpan.vue'
export default {
    name:"mole-simpleItem",
    components:{
        ItemIcon,
        ItemText
    },
    props:{
        ImagePath:{
            type:String,
            default:""
        },
        ItemName:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
.SimpleShow{
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height: 100%;
}

/* Size */

</style>

