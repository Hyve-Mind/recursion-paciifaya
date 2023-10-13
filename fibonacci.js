  function fibs(n) {
      let arr = [];

      if (n <= 0) {
          return arr;
      }

      let a = 0;
      let b = 1;

      for (let i = 0; i < n; i++) {
          arr.push(a)
          let c = a + b;
          a = b;
          b = c;
      }

      return arr

  }

  console.log(fibs(8)); // returns  [0, 1, 1, 2, 3, 5, 8, 13] //


  // RECURSIVE METHOD //


  function fibss(n) {
      if (n === 1) {
          return [0];
      }

      if (n === 2) {
          return [0, 1]
      }

      let arr = fibss(n - 1);
      arr.push(arr[n - 2] + arr[n - 3]);

      return arr
  }

  console.log(fibss(7)); // returns [0, 1, 1, 2, 3, 5, 8] //
