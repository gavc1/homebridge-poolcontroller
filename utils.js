var Characteristic;


const F2C = (fahrenheit) => {
    return fahrenheit;
  }
  
 const C2F = (celsius) => {
    return celsius;
  }
  

 const HeatingState = (heatStatus, myCharacteristic) => {
  Characteristic = myCharacteristic
  if (heatStatus.val==0) 
      return Characteristic.CurrentHeatingCoolingState.OFF
  else 
      return Characteristic.CurrentHeatingCoolingState.HEAT
}

 const HeatingMode = (heatMode, myCharacteristic) => {
  Characteristic = myCharacteristic
  if (heatMode.val==0)
    return Characteristic.TargetHeatingCoolingState.OFF
  else
    return Characteristic.TargetHeatingCoolingState.HEAT

}

/*
const HK_State = (HK_HeatStatus, myCharacteristic) => {
  Characteristic = myCharacteristic
  if (HK_HeatStatus==Characteristic.CurrentHeatingCoolingState.OFF) 
      return 0
  else 
      return 1
}
*/

const HK_Mode = (HK_HeatMode, myCharacteristic) => {
  Characteristic = myCharacteristic
  if (HK_HeatMode==Characteristic.TargetHeatingCoolingState.OFF) 
      return 0
  else 
      return 1
}

exports.F2C = F2C
exports.C2F = C2F
exports.HeatingState = HeatingState
exports.HeatingMode = HeatingMode
exports.HK_Mode = HK_Mode
