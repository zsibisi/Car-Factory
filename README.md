# Car-Factory

In the index.js file, a constructor function called Car was defined to create new objects with properties such as make, model, and year. A method named getDescription was added to the Car prototype to return a string containing information about the car.

Next, the ElectricCar function was defined as a subclass of Car, inheriting its properties and methods. An additional property called range representing the range of the electric car in miles was included in the ElectricCar definition.

The getDescription method of the ElectricCar prototype was overridden to provide a new implementation that includes information about the range of the electric car.

An instance of ElectricCar was created with the make "Tesla", model "Model S", year 2019, and range 300. By calling the getDescription method on the instance, a string containing the make, model, year, and range of the electric car was obtained.

Overall, the code implemented the necessary classes and methods to create and describe cars and electric cars, and successfully generated the desired output when calling the getDescription method on the ElectricCar instance.
