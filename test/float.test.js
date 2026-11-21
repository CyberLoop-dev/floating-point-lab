import test from"node:test";import assert from"node:assert/strict";import{inspectNumber}from"../public/float.js";
test("shows a 64-bit representation for 0.1",()=>{const r=inspectNumber("0.1","64");assert.equal(r.bits.length,64);assert.equal(r.hex.length,18);assert.equal(r.error,0);});
test("shows binary32 rounding for 16777217",()=>{const r=inspectNumber("16777217","32");assert.equal(r.stored,16777216);assert.equal(r.error,1);assert.equal(r.bits.length,32);});
test("rejects empty and non-numeric input",()=>{assert.throws(()=>inspectNumber(""));assert.throws(()=>inspectNumber("abc"));});
