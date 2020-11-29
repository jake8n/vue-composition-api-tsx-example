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
  render (h: CreateElement) {
    return <h1 onClick={this.click}>jake {this.message}</h1>
  }
});
