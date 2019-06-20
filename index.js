"use strict";

const assert = require('assert');

const sum = arr => arr.reduce((acc,val)=>acc+val,0);

const getPosts = (fetch,id) => {
  return fetch("https://pokeapi.co/docs/v2.html/#pokemon1/"+id)
}

//tests

if (typeof describe === "function") {
  describe("#Test fetch", () => {
    let count = 0;

    const fakeFetch = (url) =>
    {
      const arr=url.split('/');
      let id=Number(arr[arr.length-1]);
      if ( id<=0 || id >30)
      return "Out of range"
      else
      return url;
    }
    it("Miss typed address", () => {
      assert.equal(getPosts(fakeFetch,15), "https://pokeapi.co/docs/v2.html/#pokemon1/15");
    });
    it("Out of range",()=>{
      assert.equal(getPosts(fakeFetch,31),"Out of range")
    })
    })
  } else {
  
    console.log("Only run the test on this one")
  }
