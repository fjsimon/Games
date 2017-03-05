$(function() {

  var board1 = [];

  // var board1_solved = [
  //   [1,2,7,4,5,6,9,8,3],
  //   [8,9,4,1,2,3,5,6,7],
  //   [3,5,6,7,8,9,1,4,2],
  //   [4,3,9,6,1,5,7,2,8],
  //   [7,1,8,3,4,2,6,9,5],
  //   [2,6,5,9,7,8,3,1,4],
  //   [5,7,1,2,6,4,8,3,9],
  //   [9,8,2,5,3,1,4,7,6],
  //   [6,4,3,8,9,7,2,5,1],
  // ];
  //
  // var board1 = [
  //   [1,2,0,4,5,0,0,8,0],
  //   [0,0,4,0,0,3,5,0,0],
  //   [3,0,6,7,0,0,0,4,2],
  //   [4,0,9,0,0,5,7,2,0],
  //   [0,1,0,3,4,0,6,0,5],
  //   [2,0,5,9,0,0,3,1,4],
  //   [0,7,0,0,0,0,8,0,0],
  //   [9,0,0,5,0,0,0,0,6],
  //   [0,4,3,8,0,7,2,0,1],
  // ];

  var solve = function(i, j, cells) {
      if(i === 9) {
        i = 0;
        if(++j === 9){
          return true;
        }
      }

      if(cells[i][j] !== 0) {
        return solve(i+1, j, cells);
      }

      for(var val = 1; val <= 9; ++val) {
        if(legal(i,j,val,cells)){
          cells[i][j] = val;
          print(cells);
          if(solve(i+1, j, cells)) {
            return true;
          }
        }
      }

      cells[i][j] = 0; //reset on backtrack
      return false;
  };

  var legal = function(i, j, val, cells) {

    //ROWS
    for(var k = 0; k < 9; ++k){
      if(val === cells[k][j]) {
        return false;
      }
    }

    // COLS
    for(var k = 0; k < 9; ++k){
      if(val === cells[i][k]) {
        return false;
      }
    }

    //SQUARES
    var boxRowOffset = (Math.floor(i / 3) * 3) ;
    var boxColOffset = (Math.floor(j / 3) * 3) ;
    for(var k = 0; k < 3; k++){
      for(var m = 0; m < 3; m++){
        if(val === cells[boxRowOffset+k][boxColOffset+m]) {
          return false;
        }
      }
    }

    return true; // no violations, so it's legal
  };

  var print = function(board){
    /*seed the sudoku board*/
    for(var i=0; i < 9; i++) {
      for(var j=0; j < 9; j++) {
        //  var a = getSquare(i, j);
        //  var b = getCell(i, j);
        //  var $cell = $('.sudoku #c'+ a + b);

        if (board[i][j] !== 0) {
            var $cell = $('[data-id='+ (i+1) + (j+1)+']');
            $cell.text(''+board[i][j]);

            // $cell.closest('.cell').addClass('filled');
            // $cell.text(''+ board1[i][j]);
         }
      }
    }
  };

  var matrixify = function(arr, rows, cols) {
    var matrix = [];
    if (rows * cols === arr.length) {
        for(var i = 0; i < arr.length; i+= cols) {
            matrix.push(arr.slice(i, cols + i));
        }
    }

    return matrix;
  };

  var listToMatrix = function(list, elementsPerSubArray) {
      var matrix = [], i, k;
      for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
              k++;
              matrix[k] = [];
          }
          matrix[k].push(parseInt(list[i]));
      }
      return matrix;
  };

  var readSingleFile = function(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        var array = contents.split(',');
        board1 = listToMatrix(array, 9);
        print(board1);

        // alert( "Got the file. \n"
        //       +"name: " + f.name + "\n"
        //       +"type: " + f.type + "\n"
        //       +"size: " + f.size + " bytes \n"
        //       + "starts with: " + contents.substr(1, contents.indexOf("n")));

      }
      r.readAsText(f);
    } else {
      alert("Failed to load file");
    }
  };



  // print(board1);

  $( "a.cell-value" ).on( "click", function() {
      $("a").not(this).removeClass("selected");
      $(this).toggleClass("selected");
  });

  $( "#solve" ).on( "click", function() {
      var b = board1;
      if(solve(0, 0, b)){
        print(b);
      }
  });

  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);

});
