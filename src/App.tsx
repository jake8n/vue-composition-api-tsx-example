import Vue, { CreateElement } from 'vue';
import { defineComponent } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      console.log('clicked!')
    }
  },
  render (h: CreateElement) {
    return (
      <div>
        <HelloWorld message="jake" click={this.handleClick} />
      </div>
    )
  }
})
