var numberCast2Input=document.querySelector("[name=numberCast2]"),quantity2Input=document.querySelector("[name=quantity2]"),total2=document.querySelector(".total2"),quantity2Label=document.querySelector(".quantity2-label");function calculateCost2(){var t=1e3*numberCast2Input.value;console.log(t),document.getElementById("numberСost2").value=t.toFixed(2)}calculateCost2(),numberCast2Input.addEventListener("input",calculateCost2),quantity2Input.addEventListener("input",calculateCost2),quantity2Input.addEventListener("input",updatequantity2Label);
//# sourceMappingURL=room-for-2.3b0cda5a.js.map
