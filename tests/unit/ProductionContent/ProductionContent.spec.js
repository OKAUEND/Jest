import { mount , shallowMount } from '@vue/test-utils'
import ProductionCont from '@/components/Molecules/ProductionContent/index.vue'
import atomButton from '@/components/Atom/button/atomButton.vue'
import atomImage from '@/components/Atom/Image/AtomImage.vue'
import ChildrenItem from '@/components/Molecules/ChildrenItem/index.vue'

const ObjectData = {
    ItemData:{
        ID:1,
        Name:"TEST",
        ItemLevel:1,
        ImagePath:"icon/logo.png",
        ProductionCount:1,
        ChildItem:[
            {
                id:1,
                childimage:"icon/logo.png",
                childname:"1"
            },
            {
                id:2,
                childimage:"icon/logo.png",
                childname:"2"
            },
            {
                id:3,
                childimage:"icon/logo.png",
                childname:"3"
            },
                            {
                id:4,
                childimage:"icon/logo.png",
                childname:"4"
            },
                            {
                id:5,
                childimage:"icon/logo.png",
                childname:"5"
            },
                            {
                id:6,
                childimage:"icon/logo.png",
                childname:"6"
            },
        ]
    }
}

const ObjectData2 = {
    ItemData:{
        ID:1,
        Name:"TEST",
        ItemLevel:1,
        ImagePath:"icon/logo.png",
        ProductionCount:2,
        ChildItem:[
            {
                id:1,
                childimage:"icon/logo.png",
                childname:"1"
            },
            {
                id:2,
                childimage:"icon/logo.png",
                childname:"2"
            },
            {
                id:3,
                childimage:"icon/logo.png",
                childname:"3"
            },
                            {
                id:4,
                childimage:"icon/logo.png",
                childname:"4"
            },
                            {
                id:5,
                childimage:"icon/logo.png",
                childname:"5"
            },
                            {
                id:6,
                childimage:"icon/logo.png",
                childname:"6"
            },
        ]
    }
}
describe('ProductionContent.vue',()=>{
    it('ボタンをクリックしたら、個数が1個減るか',()=>{
        const warpper = shallowMount(ProductionCont,{
            propsData:ObjectData2
        })
        warpper.findAll(atomButton).at(0).vm.$emit('onClick')
        expect(warpper.emitted().change[0][0].ProductionCount).toEqual(ObjectData2.ItemData.ProductionCount - 1)
    })

    it('ボタンをクリックしたら、個数が1個増えるか',()=>{
        const warpper = shallowMount(ProductionCont,{
            propsData:ObjectData
        })
        warpper.findAll(atomButton).at(1).vm.$emit('onClick')
        expect(warpper.emitted().change[0][0].ProductionCount).toEqual(ObjectData.ItemData.ProductionCount + 1)
    })

    it('子の配列分のコンポーネントが生成されるか',()=>{
        const warpper = shallowMount(ProductionCont,{
            propsData:ObjectData
        })
        const childValue = ObjectData.ItemData.ChildItem.length
        expect(warpper.findAll(ChildrenItem).length).toEqual(childValue)
    })
})