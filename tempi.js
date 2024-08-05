const UNITS={
    celsius:"C",
    farahneite:"F", 
}
function convertTemp(temp,unit) {
    if(unit===UNITS.farahneite) {
        return temp*1.8+32;
    }
    else if(unit===UNITS.celsius) {
        return (temp-32)/1.8;
    }
    else{
        throw newError("Cannot convert")
    }
}
function Opp(unit){
    return unit===UNITS.celsius? UNITS.farahneite: UNITS.celsius;
}
function check(temp,unit){
    if(unit===UNITS.farahneite){
        return temp<=32;
    }
    if(unit===UNITS.celsius){
        return temp<=0
    }
    else{
        throw newError("Cannot check")
    }
}
export {UNITS,convertTemp,Opp,check}
