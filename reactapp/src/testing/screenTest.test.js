test('it should return the correct array length', () => {
    // Arrange: Create an array
    const myArray = [1, 2, 3, 4, 5];
  
    // Act: Get the length of the array
    const arrayLength = myArray.length;
  
    // Assert: Check if the length matches the expected value
    expect(arrayLength).toBe(5); // Expecting the array length to be 5
  });
  
  