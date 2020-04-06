<template>
  <div id="profile" class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3 class=" page-header">Profile</h3>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <p class="text-center">

          <button class="btn btn-outline-dark" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
            Bold
          </button>
          <button
            class="btn btn-outline-dark "
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >I
          </button>
          <button
            class="btn btn-outline-dark"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >U
          </button>
        </p>

      </div>
    </editor-menu-bar>
    <div class="col-md-10 offset-md-1">
      <editor-content id="editor_content" :editor="editor"/>
    </div>


    <button @click="sendProfileValue()" class="float-right m-3 btn btn-outline btn-info">Kaydet</button>


  </div>
</template>

<script>
  import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
  import {Bold, Italic, Underline} from 'tiptap-extensions'

  export default {
    components: {
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        profile: '',
        editor: new Editor({
          extensions: [
            new Bold(),
            new Underline(),
            new Italic()
          ],

        }),

      }
    },


    beforeDestroy() {
      if (this.editor) this.editor.destroy();
    },
    methods: {
      sendProfileValue() {
        this.profile = this.editor.getHTML();
        this.$emit('profile', this.profile);
      }
    }

  }
</script>

<style scoped>

  #profile {
    height: 300px;
  }

  #editor_content {
    border: 1px solid #f2f2
  }

</style>
