<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://aframe.io/releases/1.7.0/aframe.min.js"></script>
        <script src="https://unpkg.com/@c-frame/aframe-physics-system@4.2.2/dist/aframe-physics-system.min.js"></script>
        <script src="https://unpkg.com/aframe-environment-component@1.3.x/dist/aframe-environment-component.min.js"></script>
        <script src="https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js"></script>
</head>
<body>
  <a-scene>
    <a-assets>
      <img id="moontext" src="images/8k_sun.jpg">
      <img id="moontext1" src="images/8k_mercury.jpg">
      <img id="moontext2" src="images/8k_venus_surface.jpg">
      <img id="moontext3" src="images/earth.jpg.jpg">
      <img id="moontext4" src="images/2k_moon.jpg">
      <img id="moontext5" src="images/8k_mars.jpg">
      <img id="moontext6" src="images/8k_jupiter.jpg">
      <img id="moontext7" src="images/8k_saturn.jpg">
      <img id="moontext8" src="images/2k_uranus.jpg">
      <img id="moontext9" src="images/2k_neptune.jpg">

    </a-assets>
    <a-sphere
    src="#moontext"
    radius="2"
    position="0 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true; opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext1"
    radius="2"
    position="5 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true; opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext2"
    radius="2"
    position="10 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true; opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext3"
    radius="2"
    position="15 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true;opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext4"
    radius="2"
    position="20 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true;opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext5"
    radius="2"
    position="25 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true; opacity: 1"></a-sphere>
        <a-sphere
    src="#moontext6"
    radius="2"
    position="30 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true; opacity: 1"></a-sphere>
    <a-sphere
    src="#moontext7"
    radius="2"
    position="35 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true;opacity: 1"></a-sphere>
    <a-sphere
    src="#moontext8"
    radius="2"
    position="40 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true;opacity: 1"></a-sphere>
    <a-sphere
    src="#moontext9"
    radius="2"
    position="45 5 0"
    animation="property: rotation; to: 0 360 0; loop:true; dur:10000; easing: linear"
    material="shader: flat; transparent: true;opacity: 1"></a-sphere>
    <a-entity camera look-controls wasd-controls position="15 5 20">
      <a-cursor></a-cursor>
    </a-entity>
    <a-text  value="Solar Museum" position="13 8 3" width="40" ></a-text>
    <a-text id="hoverText" value="The Sun contains \n 99.8% of \n the entire solar\n system's mass." position="-1.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText1" value=" Mercury is the \n smallest planet and \n has no atmosphere,\n causing extreme \n temperature swings." position="3.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText2" value="Venus is the \n hottest planet \n due to its\n  thick atmosphere \n of carbon dioxide \n trapping heat." position="8.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText3" value=" Earth is the only\n planet known to \n support life and has\n liquid water on its\n surface." position="13.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText4" value="he Moon is \n Earth’s only natural satellite.\n It's about 1/4 the size of Earth\n, orbits at ~384,400 km, and takes 27.3 days to orbit. It causes tides and has no atmosphere." position="18.5 1 0" width="10" visible="false"></a-text>
    <a-text id="hoverText5" value="Mars has the largest\n volcano in the solar\n system—Olympus/\n Mons." position="23.5 2 0" width="10" visible="true"></a-text>
    <a-text id="hoverText6" value="Jupiter is the \n largest\n planet and has a \n massive\n storm called the Great\n Red Spot." position="28.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText7" value=" Saturn is known \nfor its stunning ring\n system made of ice and\n rock particles." position="33.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText8" value="Uranus rotates on \n its side, likely\n due to a massive ancient\n collision." position="38.5 1 0" width="10" visible="true"></a-text>
    <a-text id="hoverText9" value="Neptune has the strongest\n winds in the solar system,\n reaching over 1,100 mph (1,770 km/h)." position="43.5 1 0" width="10" visible="true"></a-text>
    
  <a-entity environment="preset: starry; dressingAmount: 500"></a-entity>
  </a-scene>
</body>
</html>
