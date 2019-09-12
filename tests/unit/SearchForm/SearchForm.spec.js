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
    })

    test('inputが存在するか',()=>{
    })
    test('クリックしたらemitで親にイベントが通知されるか',()=>{
    })

})