import { CreateElement } from 'vue';
import { defineComponent } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  created () {
    console.log('hello from app')
  },
  methods: {
    handleClick() {
      console.log('clicked!')
    }
  },
  render (h: CreateElement) {
    return (
      <div>
        <h1>Welcome</h1>
        <HelloWorld message="hello" click={this.handleClick} />
      </div>
    )
  }
})
