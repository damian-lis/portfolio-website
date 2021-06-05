import { classNames, common, elements } from '/data/global/names.js'

const { m, text, border, w, position } = classNames.utilities

const structure = {
  h: (
    content,
    {
      size = 3,
      mt = 60,
      mb = 20,
      align = 'left',
      smAlign = 'left',
      underline,
    } = {}
  ) => {
    return {
      type: common.header,
      size,
      content: content,
      classes: (() => {
        const classesSet = []

        classesSet.push(m.t(mt))
        classesSet.push(m.b(mb))
        classesSet.push(text[align])
        classesSet.push(text.sm[smAlign])

        underline && classesSet.push(text.underline)

        return classesSet
      })(),
    }
  },

  p: (
    content,
    { my = 10, align = 'justify', smAlign = 'left', lh = 25 } = {}
  ) => {
    return {
      type: common.paragraph,
      element: elements.p,
      content,
      classes: (() => {
        const classesSet = []

        classesSet.push(m.y(my))
        classesSet.push(text[align])
        classesSet.push(text.lh(lh))
        classesSet.push(text.sm[smAlign])

        return classesSet
      })(),
    }
  },

  im: (path, { mt = 10, mb = 20, maxWidth } = {}) => {
    return {
      type: common.image,
      element: elements.img,
      content: `/images/projects/${path}`,
      classes: (() => {
        const classesSet = []

        classesSet.push(border.rounded)
        classesSet.push(w.full)
        classesSet.push(m.t(mt))
        classesSet.push(m.b(mb))
        maxWidth && classesSet.push(w.max(maxWidth))

        return classesSet
      })(),
    }
  },

  c: (content, { lng } = {}) => {
    return {
      type: common.code,
      elements: { pre: elements.pre, code: elements.code },
      content,
      classes: {
        code: [lng ? `language-${lng}` : `language-js`],
        pre: [lng ? `language-${lng}` : `language-js`],
      },
    }
  },

  l: (
    content,
    {
      listAlign = 'justify',
      listSmAlign = 'left',
      listPosition = 'relative',
      itemMb = 15,
      itemMl = 20,
      itemDash = true,
      listSize,
    } = {}
  ) => {
    return {
      type: common.list,
      elements: {
        list: elements.ul,
        item: elements.li,
      },
      content,
      classes: (() => {
        return {
          list: (() => {
            const classesSet = []

            classesSet.push(position[listPosition])
            classesSet.push(text[listAlign])
            classesSet.push(text.sm[listSmAlign])

            listSize && classesSet.push(text.size(listSize))

            return classesSet
          })(),

          item: (() => {
            const classesSet = []
            classesSet.push(m.b(itemMb))
            classesSet.push(m.l(itemMl))
            itemDash && classesSet.push(text.dash)

            return classesSet
          })(),

          lastItem: (() => {
            const classesSet = []
            classesSet.push(m.l(itemMl))
            itemDash && classesSet.push(text.dash)

            return classesSet
          })(),
        }
      })(),
    }
  },

  b: () => {
    return { type: common.break }
  },

  s: (value) => `<strong>${value}</strong>`,

  a: (label, link) => `<a href=${link}>${label}</a>`,
}

const { h, p, im, c, l, b, s, a } = structure

export { h, p, im, c, l, b, s, a }