export default (() => {
  const names = [
    'requestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen',
    'webkitRequestFullscreen'
  ]
  return names.reduce((prev, curr) =>
    typeof document !== "undefined" && document.documentElement[curr] ? curr : prev
  )
})()
