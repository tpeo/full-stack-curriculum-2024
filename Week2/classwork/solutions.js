// 1. Write a JavaScript program to find the longest string in a given array
function findLongestString(arr) {
    let longest = '';
    for (let str of arr) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
    return longest;
  }
  
  // Test for findLongestString
  const testArr1 = ['apple', 'banana', 'cherry', 'date'];
  console.log('Expected: banana, Output:', findLongestString(testArr1));
  
  // 2. Write an arrow function that calculates the area of a rectangle
  const calculateArea = (length, width) => length * width;
  
  // Test for calculateArea
  console.log('Expected: 20, Output:', calculateArea(4, 5));
  
  // 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books:
  const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      readingStatus: true,
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      readingStatus: false,
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false,
    },
  ];
  
  function displayReadingStatus() {
    for (let book of library) {
      const message = `'${book.title}' by ${book.author}. ${
        book.readingStatus
          ? 'Already read the book'
          : 'You still need to read the book'
      }`;
      console.log(message);
    }
  }
  
  // Test for displayReadingStatus
  displayReadingStatus();
  
  // 4. Square the value of every element in an array, then print the result
  function squareAndPrint(arr) {
    const result = arr.map((num) => num ** 2);
    result.forEach((el) => console.log(el));
  }
  
  // Test for squareAndPrint
  const testArr2 = [1, 2, 3, 4, 5];
  squareAndPrint(testArr2);
  
  // 5. Filter array to numbers greater than 5
  function filterGreaterThanFive(arr) {
    return arr.filter((num) => num > 5);
  }
  
  // Test for filterGreaterThanFive
  const testArr3 = [3, 8, 1, 5, 9];
  console.log('Expected: [8, 9], Output:', filterGreaterThanFive(testArr3));