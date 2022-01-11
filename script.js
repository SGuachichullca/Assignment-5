$(document).ready(function () {

    //Adds a new row to the grid
    $('#addRow').click(function () {
        console.log("add row");
        const existingRow = document.querySelector(".row");
        console.log(existingRow);
        const grid = document.querySelector(".grid");
        console.log(grid);
        let rowBoxes = existingRow.querySelectorAll(".box")
        console.log(rowBoxes);
        
        rowBoxes.forEach(element => {
            let color = element.style.backgroundColor
            if (color !== "") {
                element.classList.remove(color);
                element.classList.add('white');
            }
        }
        );


        let newRow = existingRow.cloneNode(true);
        $(newRow.childNodes).css('backgroundColor', 'white');
       
        console.log(newRow);
        
        grid.appendChild(newRow);

        console.log();
    })


    //Deletes the last row
    $('#deleteRow').click(function () {
        console.log("delete row");
        let rows = document.querySelectorAll('.row');
        console.log(rows);
        let lastRow = rows[rows.length - 1];
        lastRow.parentNode.removeChild(lastRow);
    })

    //Adds a new column to the gride
    $('#addCol').click(function () {
        console.log("add column");
        let rows = document.querySelectorAll('.row');
        console.log(rows);
        let box = document.querySelector('.box');
        let newBox = box.cloneNode(true);
        console.log(newBox);
        let color = box.style.backgroundColor
            if (color !== "") {
                newBox.classList.remove(color);
                newBox.classList.add('white');
            }
        $(newBox).css('backgroundColor', 'white');

        rows.forEach(element => {
            console.log(element);
            console.log(newBox);
            element.appendChild(newBox.cloneNode(true));
        });
    })

    //Deletes the last column
    $('#deleteCol').click(function () {
        console.log("delete column");
        let rows = document.querySelectorAll('.row');
        console.log(rows);
        rows.forEach(element => {
            element.lastChild.remove();
        });
    })

    //Changes box color upon clicking
    document.querySelector(".grid").addEventListener("click", function (e) {     
        if (e.target.classList.contains("box")) {
            console.log("click works");
            const prevColor = e.target.style.backgroundColor;
            const color = document.querySelector("#colorChoiceInd").value;
            if (prevColor === "") {
                $(e.target).removeClass('white');
            } else {
                $(e.target).removeClass(prevColor);
            }
            $(e.target).css('background-color', color);
            $(e.target).addClass(color);
        }
    })


    //Fills all white boxes with selected color
    $('#fillWhite').click(function () {
        const whiteBoxes = document.querySelectorAll(".box" && ".white")
        const fillColor = document.querySelector("#colorChoiceAllWhite").value;

        whiteBoxes.forEach(element => {
            element.classList.remove('white');
            element.classList.add(fillColor);
        });

        $(whiteBoxes).css('background-color', fillColor)
    }) 

    //Fills all boxes with selected color
    $('#fillAll').click(function () {
        const allBoxes = document.querySelectorAll(".box")
        const fillColor = document.querySelector("#colorChoiceAll").value;

        allBoxes.forEach(element => {
            var prevColor = element.style.backgroundColor
            if (prevColor === "") {
                prevColor = 'white';
            }
            element.classList.remove(prevColor);
            element.classList.add(fillColor);
        });

        $(allBoxes).css('background-color', fillColor);
    }) 


    //Drag to color
    var mouseStillDown = false

    document.querySelector('.grid').addEventListener("mousedown", function (e) {
        if(e.target.classList.contains("box")) {
            mouseStillDown = true
            let prevColor = e.target.style.backgroundColor;
                if (prevColor === "") {
                    e.target.classList.remove('white');
                } else {
                    e.target.classList.remove(prevColor);
                }
                let dragColor = document.querySelector('#colorChoiceDrag').value;
                e.target.style.backgroundColor = dragColor;
                e.target.classList.add(dragColor);
        }
    })

    document.querySelector('.grid').addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("box")) {
            if (mouseStillDown === true) {
                let prevColor = e.target.style.backgroundColor;
                if (prevColor === "") {
                    e.target.classList.remove('white');
                } else {
                    e.target.classList.remove(prevColor);
                }
                let dragColor = document.querySelector('#colorChoiceDrag').value;
                e.target.style.backgroundColor = dragColor;
                e.target.classList.add(dragColor);
            }
        }
    })

    document.querySelector('.grid').addEventListener("mouseup", function (e) {
        mouseStillDown = false
    })

})

//Resets grid
function reset() {
    location.reload();
}