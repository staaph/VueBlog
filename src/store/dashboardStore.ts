import { ref, type Ref, watch } from "vue";

export const menuItem: Ref<string> = ref('dashboard');
export const isInfoMenuOpen = ref<boolean>(false)

watch(isInfoMenuOpen, ()=>{
    console.log(isInfoMenuOpen.value)
})