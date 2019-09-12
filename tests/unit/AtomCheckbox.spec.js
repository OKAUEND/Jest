import { mount } from '@vue/test-utils'
import Checkbox from '@/components/Atom/Input/AtomCheckbox.vue'

describe('AtomCheckbox.vue',()=>{
    it('Checkをすることができるか',()=>{
        const wrapper = mount(Checkbox)
        wrapper.setChecked(true)
        expect(wrapper.element.checked).toBe(true)
    })

    it('propsを受け取れているか',()=>{
        const ObjectData = {
            test:{
                ID:1,
                Name:"TEST",
                ItemLevel:1,
                ImagePath:"icon/logo.png",
                ProductionCount:1,
            }
        }
        const wrapper = mount(Checkbox,{
            propsData:ObjectData
        })
        expect(wrapper.props('test')).toEqual(ObjectData.test)
    })

    it('check時にemitでpropsのデータが返されてくるか',()=>{
        const ObjectData = {
            test:{
                ID:1,
                Name:"TEST",
                ItemLevel:1,
                ImagePath:"icon/logo.png",
                ProductionCount:1,
            }
        }
        const wrapper = mount(Checkbox,{
            propsData:ObjectData
        })
        wrapper.setChecked(true)
        wrapper.trigger('click')
        expect(wrapper.emitted().change[0][0]).toEqual(ObjectData.test)
    })
})