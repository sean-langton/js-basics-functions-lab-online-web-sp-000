// Code your solution in this file!
function distanceFromHqInBlocks (value) {
  return Math.abs(42-value)
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let distanceTraveled = distanceTravelledInFeet(start, end)
  if (distanceTraveled > 2500) {
    return 'cannot travel that far'
  } else if (distanceTraveled > 2000) {
    return 25
  } else if (distanceTraveled > 400) {
    return (distanceTraveled - 400) * .02
  } else {
    return 0
  }
}
