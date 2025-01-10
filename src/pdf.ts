import { mount } from 'svelte'

import Pdf from './pdf.svelte'

const pdf = mount(Pdf, {
  target: document.body,
})

export default pdf