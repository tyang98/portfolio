---
project: "aMaze"
tags: ["C", "C#"]
link: "https://pages.github.coecis.cornell.edu/ece3140-sp2021/cl859-txy3/"
startDate: "2020-04-27"
endDate: "2020-05-18"
---

A 3D marble maze game whose tilt and movement is controlled by the FRDM-KL25Z board. Players can try moving the marble throughout different types of mazes.
We continuously poll from data collected from our board's accelerometer and smooth the data before writing it to serial. The game is implemented using [Godot Engine](https://godotengine.org/), a game engine, and our C# code reads the accelerometer data and utilize it to move the marble maze based on the movements performed with the board. </p>
