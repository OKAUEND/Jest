import { mount, shallowMount } from '@vue/test-utils'
import SearchForm from '@/components/Molecules/SearchForm/index.vue'
import atomButton from '@/components/Atom/button/atomButton.vue'
import atomInput from '@/components/Atom/Input/AtomInputText.vue'

describe('SearchForm.vue',()=>{
    test('Dataに値を設定できるか',()=>{
        const warpper = shallowMount(SearchForm)
        warpper.setData({InputText:"TEST"})
        expect(warpper.vm.InputText).toBe("TEST")
    })

    test('Buttonが存在するか',()=>{
        const warpper = shallowMount(SearchForm)
        expect(warpper.find(atomButton).exists()).toBe(true)
    })

    test('inputが存在するか',()=>{
        const warpper = shallowMount(SearchForm)
        expect(warpper.find(atomInput).exists()).toBe(true)
    })
    test('クリックしたらemitで親にイベントが通知されるか',()=>{
        const warpper = shallowMount(SearchForm)
        const TEXT = 'TEXT'
        warpper.setData({InputText:TEXT})
        warpper.find(atomButton).vm.$emit("onClick")
        expect(warpper.emitted().change).toBeTruthy()
        expect(warpper.emitted().change[0][0]).toEqual(TEXT)
    })

})