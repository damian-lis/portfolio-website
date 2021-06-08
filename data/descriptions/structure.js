import { classNames, common, elements } from '/data/global/names.js'
import { txtAlign, elPosition, programmingLngs } from '/data/global/names.js'

const { m, text, border, w, position } = classNames.utilities

const structure = {
  h: (
    content,
    {
      size = 3,
      mt = 60,
      mb = 20,
      align = txtAlign.left,
      smAlign = txtAlign.left,
      underline,
    } = {}
  ) => {
    return {
      type: common.header,
      size,
      content,
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
    { my = 10, align = txtAlign.justify, smAlign = txtAlign.left, lh = 25 } = {}
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

  im: (imgPath, { mt = 10, mb = 20, maxWidth } = {}) => {
    return {
      type: common.image,
      element: elements.img,
      path: `/images/projects/${imgPath}`,
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
        code: [
          lng
            ? `${common.language}-${lng}`
            : `${common.language}-${programmingLngs.js}`,
        ],
        pre: [
          lng
            ? `${common.language}-${lng}`
            : `${common.language}-${programmingLngs.js}`,
        ],
      },
    }
  },

  l: (
    content,
    {
      listAlign = txtAlign.justify,
      listSmAlign = txtAlign.left,
      listPosition = elPosition.relative,
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

  s: (content) => `<strong>${content}</strong>`,

  a: (label, path) => `<a href=${path}>${label}</a>`,
}

const { h, p, im, c, l, b, s, a } = structure

export { h, p, im, c, l, b, s, a }
