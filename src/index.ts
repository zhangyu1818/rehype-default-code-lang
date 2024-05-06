import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'hast'

export interface Options {
  defaultLang?: string
}

export const rehypeDefaultCodeLang: Plugin<[Options], Root> = (options) => {
  const { defaultLang } = options
  return function (tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index == null || node.tagName !== 'pre') {
        return
      }

      const head = node.children[0]

      if (
        !head ||
        head.type !== 'element' ||
        head.tagName !== 'code' ||
        !head.properties
      ) {
        return
      }
      const emptyLang =
        !head.properties.className ||
        (Array.isArray(head.properties.className) &&
          head.properties.className.length === 0)

      if (emptyLang) {
        head.properties.className = [`language-${defaultLang}`]
      }
    })
  }
}
