'use strict'
console.log('Спасибо:)')
const wrapper = document.createElement('div');
wrapper.className = 'wrapper'
const body = document.querySelector('.body');
body.prepend(wrapper)

const header = document.createElement('div');
header.className = 'header'
wrapper.append(header)
const puzzle = document.createElement('h1');
puzzle.className = 'puzzle'
header.append(puzzle)
puzzle.innerHTML = 'Gem Puzzle'
const div_but = document.createElement('div');
div_but.className = 'div_but'
header.append(div_but)
const shuff_but = document.createElement('button');
div_but.append(shuff_but)
shuff_but.innerHTML = 'Shuffle and start'
const save_but = document.createElement('button');
div_but.append(save_but)
save_but.innerHTML = 'Save'
save_but.addEventListener('click', () => {audioB()})
const load_but = document.createElement('button');
div_but.append(load_but)
load_but.innerHTML = 'Load'
load_but.addEventListener('click', () => {audioB()})
const result_but = document.createElement('button');
div_but.append(result_but)
result_but.innerHTML = 'Result'
result_but.addEventListener('click', () => {audioB()})
const sound_but = document.createElement('button');
div_but.append(sound_but)
sound_but.innerHTML = 'Sound'



const main = document.createElement('div');
main.className = 'main'
wrapper.append(main)
const info = document.createElement('div');
info.className = 'info'
main.append(info)
const timeMove = document.createElement('div');
timeMove.className = 'timemove'
info.append(timeMove)
const time = document.createElement('span');
timeMove.append(time)
time.className = 'time'
time.innerHTML = 'Time: 00:00';

const moved = document.createElement('span');
timeMove.append(moved)
moved.className = 'moved'
moved.innerHTML = 'Moves: 0';


const table = document.createElement('table');
table.className = 'table'
main.append(table)


const footer = document.createElement('div');
footer.className = 'footer'
wrapper.append(footer)
const three_but = document.createElement('button');
footer.append(three_but)
three_but.innerHTML = '3x3'
three_but.className = '3'
three_but.addEventListener('click', () => {changeGame(3), audioB()})
const four_but = document.createElement('button');
footer.append(four_but)
four_but.innerHTML = '4x4'
four_but.className = '4'
four_but.addEventListener('click', () => {changeGame(4), audioB()})
const five_but = document.createElement('button');
footer.append(five_but)
five_but.innerHTML = '5x5'
five_but.className = '5'
five_but.addEventListener('click', () => {changeGame(5), audioB()})
const six_but = document.createElement('button');
footer.append(six_but)
six_but.innerHTML = '6x6'
six_but.className = '6'
six_but.addEventListener('click', () => {changeGame(6), audioB()})
const seven_but = document.createElement('button');
footer.append(seven_but)
seven_but.innerHTML = '7x7'
seven_but.className = '7'
seven_but.addEventListener('click', () => {changeGame(7), audioB()})
const eight_but = document.createElement('button');
footer.append(eight_but)
eight_but.innerHTML = '8x8'
eight_but.className = '8'
eight_but.addEventListener('click', () => {changeGame(8), audioB()})


let start = 4

const field = document.querySelector('.table');
const cellsize = 100;
let empty = {
    value: start*start,
    top: start-1,
    left: start-1
}
const cells = [];
cells.push(empty)



function move(index, typeGame){
    

        const cell = cells[index];
        const leftDiff = Math.abs(empty.left - cell.left);
        const topDiff = Math.abs(empty.top - cell.top);
        if (leftDiff + topDiff > 1) {
            return
        }
        changeMoves()
        audioM()
        cell.element.style.left = `${empty.left * (100/typeGame)}%`
        cell.element.style.top = `${empty.top * (100/typeGame)}%`
        const emptyLeft = empty.left;
        const emptyTop = empty.top;
        empty.left = cell.left
        empty.top = cell.top
        cell.left = emptyLeft
        cell.top = emptyTop
        const won = cells.every(cell => {
            return cell.value-1 === cell.top * typeGame + cell.left})
        if (won){showWon()}

}

    
 function mix(typeGame){
    let numbers = [... Array(typeGame*typeGame - 1).keys()]
    .sort(() => Math.random() - 0.5);
    let checkarr = 0
    for (let j=0;j<numbers.length-1;j++){
        for (let k=1;k<numbers.length-j;k++)
    if (numbers[j+k]<numbers[j]){checkarr += 1}
    }
    
    checkarr += start
    
    if (typeGame%2!==0){if (checkarr%2==0){
        return mix(typeGame)
    }}
    else {if (checkarr%2!==0){
        return mix(typeGame)
    }}
    

    for (let i=0;i<=(typeGame*typeGame - 2);i++){
    let cell = document.createElement('div');
    let value = numbers[i] + 1;
    cell.className = 'cell'
    cell.id = i;
    cell.innerHTML = numbers[i] + 1;
    
    let left = i % typeGame
    let top = (i-left) / typeGame

    cells[i] = {
        value: value,
        left: left,
        top: top,
        element: cell
    }
   cells[typeGame*typeGame - 1] = {
    value: start*start,
    top: start-1,
    left: start-1
    }
    
    
    
    cell.style.width = `${100/typeGame}%`
    cell.style.height = `${100/typeGame}%`
    cell.style.left = `${left * (100/typeGame)}%`
    cell.style.top = `${top * (100/typeGame)}%`
    console.log(typeGame)

    cell.draggable = !0;
        cell.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('id', event.target.id);
        })

    field.append(cell)

    cell.addEventListener('click', () => {
        move(i, typeGame);
        })
    
}}


mix(start)

shuff_but.addEventListener('click', () => {
    document.querySelector('table').innerHTML = "";
    movesStep = -1
    changeMoves()
    audioB()
    empty.left = start - 1
    empty.top = start - 1
    times = 0;
    if (!startTime) {startTime = true};
    document.querySelector('.time').innerHTML = `Time: 00:00`
    mix(start)})

function changeGame (game){
        document.querySelector('table').innerHTML = "";
        start = game
        empty.left = start - 1
        empty.top = start - 1
        movesStep = -1
        changeMoves()
        times = 0;
        if (!startTime) {startTime = true};
        document.querySelector('.time').innerHTML = `Time: 00:00`
        cells[start*start - 1] = {
            value: start*start,
            top: start-1,
            left: start-1
            }
            cells.splice(start*start, cells.length-(start*start))
        mix(game)
        

}

// time and moves
let movesStep = 0;
let times = 0;

let startTime = true;


function createDate(times) {
    const date = new Date(2022, 0, 1);
    date.setSeconds(times);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, '$1');
}


function Timer() {
    setInterval(() => {
        startTime && times++;
        document.querySelector('.time').innerHTML = `Time: ${createDate(times)}`
    }, 1000)
}


function changeMoves() {
    movesStep++;
    document.querySelector('.moved').innerHTML = `Moves: ${movesStep}`;
}

Timer();

// sound
let play = true;
sound_but.addEventListener('click', () => {
    play = !play;

    if (play) {
        sound_but.innerHTML = 'Sound';
        audioB ()
    } else {
        sound_but.innerHTML = 'Silence';
    }
});
let audioMove = new Audio('game_board_003_52379.mp3');
function audioM (){
    if (play){audioMove.play()}
    else return
}
let audioBut = new Audio('joystick-trigger-button-press_gyyt5ied.mp3');
function audioB (){
    if (play){audioBut.play()}
    else return
}

// drug and drop

table.addEventListener('dragover', (event) => {
    event.preventDefault();
})

table.addEventListener('drop', (event) => {
    let dragElem = document.getElementById(event.dataTransfer.getData('id'));

    if (!dragElem) {
        return;
    }
    const idNumber = Number(dragElem.id)

    move(idNumber, start)
})

// Won
function showWon() {
    const wonShadow = document.createElement('div');
    wonShadow.className = 'wonShadow'
    body.append(wonShadow)
    const won = document.createElement('div');
    won.className = 'won'
    wonShadow.append(won)
    const wonInfo = document.createElement('h2');
    wonInfo.innerHTML = `Hooray! You solved the puzzle in ${createDate(times)} and ${movesStep} moves!`;
    won.append(wonInfo);
    wonSh = document.querySelector('.wonShadow');
    wonSh.addEventListener('click', wonDel)
    startTime = false;
    
}

let wonSh

function wonDel(){
    if (wonSh){
            wonSh.remove()
            
            
        }
}