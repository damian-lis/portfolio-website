export default (themeMode) => {
  const canvas = document.getElementById('canvas1')
  canvas.getContext('2d').fillStyle = themeMode.borderColor
}
