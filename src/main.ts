import { mount } from 'svelte'

import login from './login.svelte'

const logi = mount(login, {
  target: document.body,
})

export default logi