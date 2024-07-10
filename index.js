function distanceFromHqInBlocks(distance){
const hqDistance = 42;
  return Math.abs(distance - hqDistance);
}
function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination);
  if (totalFeet <= 400) {
      return 0; 
    } else if (totalFeet > 400 && totalFeet <= 2000) {
      return (totalFeet - 400) * 0.02; 
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }