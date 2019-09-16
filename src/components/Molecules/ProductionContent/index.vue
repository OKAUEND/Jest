<template>
    <div class="ProductionItem">
        <div class="left">
            <!-- 製作物のアイコン -->
            <item-image
                v-bind:img_path=ItemData.ImagePath
                class="--medium"
                >
            </item-image>
        </div>
        <div class="cneter">
            <!-- レベルとアイテム名と素材 -->
            <div class="ParentItem">
                <!-- レベルとアイテム名 -->
                <head-string
                    v-bind:Text="ItemData.Name"
                    Level="2"
                >
                </head-string>
                <span-text
                    v-bind:Text="CreatingItemLevel()"
                    class="--bottom"
                >
                </span-text>
            </div>
            <div class="ChildrenList">
                <!-- 素材の種類と素材数 -->
                <div v-for="item of ItemData.ChildItem"
                :key="item.id" class="childitems">
                    <child-list
                        v-bind:ImagePath="item.childimage"
                        v-bind:ItemName="item.childname">
                    </child-list>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="inputform">
                <!-- 個数ボタン 
                    対応1~999までとする-->
                <atom-button
                    v-on:onClick="decrementValue">
                    <template
                        v-slot:ButtonText
                        >
                        -
                    </template>
                </atom-button>
                <atom-input
                    v-bind:value="input_count"
                    ClassName="Countform"
                    v-bind:Pattern="Pattern"
                    v-bind:maxlength="maxlength"
                    v-on:change="changeProductionCount">
                </atom-input>
                <atom-button
                    v-on:onClick="incrementValue">
                    <template
                        v-slot:ButtonText
                        >
                        +
                    </template>
                </atom-button>
            </div>
        </div>
    </div>
</template>

<script>
// Atom
import HeadString from '@/components/Atom//HeadText/AtomHeadText.vue'
import SpanText from '@/components/Atom//Text/AtomSpan.vue'
import ItemImage from '@/components/Atom//Image/AtomImage.vue'
import AtomButton from '@/components/Atom//Button/AtomButton.vue'
import AtomInput from '@/components/Atom//Input/AtomInputText.vue'

// Molecules
import ChildList from '@/components/Molecules/ChildrenItem/index.vue'
export default {
    name:"mole-productioncontent",
    components:{
        HeadString,
        SpanText,
        ItemImage,
        AtomButton,
        AtomInput,
        ChildList
    },
    model:{
        prop:"ItemData"
    },
    props:{
        ItemData:{
            ID:{
                type:Number,
                default:0
            },
            ItemName:{
                type:String,
                default:"TEST"
            },
            ItemLevel:{
                type:Number,
                default:0 
            },
            ImagePath:{
                type:String,
                default:"icon/logo.png"
            },
            ProductionCount:{
                type:Number,
                default:1
            },
            ChildItem:[
                {
                    id:{
                        type:Number,
                        default:0
                    },
                    childimage:{
                        type:String,
                        default:"icon/logo.png"
                    },
                    childname:{
                        type:String,
                        default:"Default"
                    }
                }
            ]
            // あとは後で作る
        }
    },
    data:function(){
        return{
            Pattern:"^[1-9][0-9]*",
            maxlength:3,
        }
    },
    computed:{
        input_count:{
            get(){
                return this.ItemData.ProductionCount
            },
            set(num){
                const ProductionCount = Number(num)
                this.$emit('change', { ...this.ItemData, ProductionCount })
            }
        }
    },
    methods:{
        CreatingItemLevel:function(){
            return `ITEM LEVEL ${this.ItemData.ItemLevel}`
        },
        changeProductionCount(value){
            this.input_count = value
        },
        incrementValue:function(){
            this.input_count += 1
        },
        decrementValue:function(){
            if(this.input_count > 1)
            {
                this.input_count -= 1
            }
        }
    },

}
</script>

<style scoped>

.ProductionItem
{
    display: flex;
    flex-direction: row;
}

.ParentItem{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: 50%;
}

.ChildrenList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 50%;
}

.childitems{
    display: inline-block;
    /* height: 20px; */
}

.inputform{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 75%;
}

.left{
    background-color: brown;
}

.center{
    background-color:cornflowerblue;
}

.right{
    background-color: olive;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
