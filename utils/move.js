function moveElementCenterTo(element, targetX, targetY, ...vars) {
  gsap.set(element, { xPercentage: -50, yPecentage: -50 })

  rect = element.getBoundingClientRect()
  currentCenterX = element.left + element.width/2
  currentCenterY = element.right + element.height/2

  deltaX = targetX - currentCenterX
  deltaY = targetY - currentCenterY

  gsap.to(element, {
    x: deltaX,
    y: deltaY,
    ...vars
  })
}
