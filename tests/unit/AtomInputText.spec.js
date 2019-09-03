import { mount } from '@vue/test-utils'
import Input from '@/components/AtomInputText.vue'

describe('AtomInputText.vue',()=>{
    it('値が入力できるか',()=>{
        let wrapper = mount(Input);
        const value = 'valueだよ';
        const input = wrapper.find('input[type="text"]');
        input.setValue(value)//v-model on change
        expect(wrapper.emitted().change[0][0]).toBe(value);
    });

    it('文字列型が期待通り受け取れているか',()=>{
        const stringProps ={ value : "文字列" }
        const StringWrapper = mount (Input,{
            propsData:stringProps
        })
        expect(typeof StringWrapper.vm.$props.value).toBe('string')
    });

    it('数字型が期待通り受け取れているか',()=>{
        const integerProps = { value : 1 }
        const IntegerWrapper = mount (Input,{
            propsData:integerProps
        })
        expect(typeof IntegerWrapper.vm.$props.value).toBe('number')
    });

    it('一定数の文字列の長さに制限をかけることはできるか',()=>{
        const props = { maxlength : 3 };
        const wrapper = mount(Input,{
            propsData: props}
            )
        expect(wrapper.props().maxlength).toBe(3)
    })
})