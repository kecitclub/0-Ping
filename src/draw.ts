import { mount } from 'svelte'

import drw from './draw.svelte'

const draw = mount(drw, {
  target: document.body,
})

export default draw