AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 10 + 5;
        const posZ = Math.random() * 50 + -40;

        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const treasureEntity = document.querySelector("#goldcoins");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("material", "color", "#FFD700");
     
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 0.7 });

      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000,
      });  
       
      
      treasureEntity.appendChild(coinEl);
    }
  });
  