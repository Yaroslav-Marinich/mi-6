var numberCastLuxeInput=document.querySelector("[name=numberCastLuxe]"),numberCostLuxeInput=document.querySelector("[name=numberCostLuxe]"),totalLuxe=document.querySelector(".totalLuxe"),quantityLuxeLabel=document.querySelector(".quantityLuxe");function calculateCostLuxe(){var e=numberCastLuxeInput.value,u=numberCostLuxeInput.value,t=e*u;console.log(e),console.log(u),console.log(t),document.getElementById("numberСostLuxe").value=t.toFixed(2)}calculateCostLuxe(),numberCastLuxeInput.addEventListener("input",calculateCostLuxe),numberCostLuxeInput.addEventListener("input",calculateCostLuxe);
//# sourceMappingURL=room-luxe.4dbe6b97.js.map
