# CubeMaker
simple JS framework for making easy cubic base 3D elements

### Step:1
add including files in "final" folder to your project (for style you can use either scss or css file)

### Step:2
attach the cubeMaker.js & cubeMaker.css to your Html document

### Step:3
now for making any cubic 3D object head to your html file, first you have to make a general container for all of your 3D objects
- This container should have `perspective= (desired -FOV ) px` style
#### then
add your object with `threeDme` class

- now for declaring the dimensions add `data-dimensions="(desiredX),(desiredY),(desiredZ)"`

### For example:
lets make a box of 50x60x45 inside a span parent

//add  `<span class="threeDme other-Classes" data-dimensions="50,60,45"></span>` 

![alt text](https://github.com/ArashkKH/CubeMaker/blob/main/asset/code.png)

easy peasy :)

![alt text](https://github.com/ArashkKH/CubeMaker/blob/main/asset/Screenshot%202022-10-02%20154348.jpg)
