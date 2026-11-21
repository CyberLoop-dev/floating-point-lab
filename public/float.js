export function inspectNumber(input,precision="64"){
  const value=Number(input);if(String(input).trim()===""||Number.isNaN(value))throw new Error("Enter a valid numeric value.");
  const single=precision==="32",bytes=single?4:8,view=new DataView(new ArrayBuffer(bytes));
  if(single){view.setFloat32(0,value,false);}else{view.setFloat64(0,value,false);}
  const stored=single?view.getFloat32(0,false):view.getFloat64(0,false);
  const bits=single?view.getUint32(0,false).toString(2).padStart(32,"0"):view.getBigUint64(0,false).toString(2).padStart(64,"0");
  const expBits=single?8:11,fractionBits=single?23:52,bias=single?127:1023;
  const sign=bits[0],exponent=bits.slice(1,1+expBits),fraction=bits.slice(1+expBits),expValue=parseInt(exponent,2);
  let ulp;if(expValue===2**expBits-1)ulp=NaN;else if(expValue===0)ulp=2**(1-bias-fractionBits);else ulp=2**(expValue-bias-fractionBits);
  const hex=single?"0x"+view.getUint32(0,false).toString(16).padStart(8,"0"):"0x"+view.getBigUint64(0,false).toString(16).padStart(16,"0");
  return {input:value,stored,precision:single?"binary32":"binary64",bits,sign,exponent,fraction,hex,error:Math.abs(stored-value),ulp,exponentValue:expValue,bias};
}
