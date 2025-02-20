<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>3D World</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
</head>
<body>
  <a-scene>
    <a-sky color="#ECECEC"></a-sky>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="blue">
      <a-animation attribute="rotation" dur="3000" to="0 405 0" repeat="indefinite"></a-animation>
    </a-box>
    
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E">
      <a-animation attribute="position" dir="alternate" dur="2000" to="0 1.75 -5" repeat="indefinite"></a-animation>
    </a-sphere>
    
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D">
      <a-animation attribute="rotation" dur="3000" to="0 360 0" repeat="indefinite"></a-animation>
    </a-cylinder>

    <a-light type="ambient" color="#445451"></a-light>
    <a-light type="point" intensity="2" position="2 4 4"></a-light>
  </a-scene>
  <script src="script.js"></script>
</body>
</html>
