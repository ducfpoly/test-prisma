import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import { EmojiList } from '@/configs/emoji.config'
// import { PropsTiptap } from '@/helpers/definitions'
// import { ComponentType } from '@/helpers/definitions'

export const suggestion = {
  items: ({ editor, query }:{editor:any, query:any}) => {
    return editor.storage.emoji.emojis
      .filter(({ shortcodes, tags } : {shortcodes:any[], tags:any[]}) => {
        return (
          shortcodes.find((shortcode:any) => shortcode.startsWith(query.toLowerCase()))
          || tags.find(tag => tag.startsWith(query.toLowerCase()))
        )
      })
      .slice(0, 5)
  },
  allowSpaces: false,
  render: () => {
    let component:any
    let popup:any

    return {
      onStart:(props:any) => {
        component = new ReactRenderer(EmojiList, {
          props,
          editor: props.editor,
        })

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },
      onUpdate(props:any) {
        component.updateProps(props)

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },
      // onKeyDown(props:any) {
      //   if (props.event.key === 'Escape') {
      //     popup[0].hide()
      //     component.destroy()
      //     return true
      //   }
      //   return component.ref?.onKeyDown(props)
      // },
      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}