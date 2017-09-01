export default (() => {
  const names = [
    'exitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen',
    'webkitExitFullscreen'
  ]
  return names.reduce((prev, curr) =>
    typeof document !== "undefined" && document[curr] ? curr : prev
  )
})()
