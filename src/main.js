import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


import { Editor } from 'tiptap'
import { Bold, Italic, Link, HardBreak, Heading } from 'tiptap-extensions'

const editor = new Editor({
  extensions: [
    new Bold(),
    new Italic(),
    new Link(),
    new HardBreak(),
    new Heading()
  ],
})
