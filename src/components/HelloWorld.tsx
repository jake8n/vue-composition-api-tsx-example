import { CreateElement } from 'vue';
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      required: true,
    },
    click: {
      type: Function as PropType<() => void>
    }
  },
  created () {
    console.log(this)
  },
  render (h: CreateElement, props: any) {
    console.log(this)
    return <h1 onClick={props.click}>jake {props.message}</h1>
  }
});
