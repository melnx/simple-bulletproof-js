var {prove, verify} = require('./bullet_proof_specific_range')

var res = prove(97, 0, 99)
var valid = verify(res)

console.log("VALID?", valid)
