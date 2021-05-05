export default (objs, delay) => {
  if (delay) {
    return setTimeout(() => {
      console.log(delay)
      objs.map((obj) => {
        obj.elements.map((element) => {
          if (obj.styleProps) {
            obj.styleProps.map((prop) => {
              element.style[prop.name] = prop.value
            })
          } else if (obj.props) {
            obj.props.map((prop) => {
              element[prop.name] = prop.value
            })
          }
        })
      })
    }, delay)
  } else {
    objs.map((obj) => {
      obj.elements.map((element) => {
        if (obj.styleProps) {
          obj.styleProps.map((prop) => {
            element.style[prop.name] = prop.value
          })
        } else if (obj.props) {
          obj.props.map((prop) => {
            element[prop.name] = prop.value
          })
        }
      })
    })
  }
}