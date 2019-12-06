import React, { Component } from 'react';
import unique from '../../unique.id'
import Square from '../square/square.component';
import './square.ui.style.css';
import Header from '../header/header.component'
import Specs from '../specs/specs.component';
import Win from '../win/win.component';
import Button from '../button/button.component';

export class SquareUi extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares : [],
            rows: '',
            cols: '',
            gameOver: false,
            start: false
        }
    this.randomVal = this.randomVal.bind(this)
    this.genSquares = this.genSquares.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    }

    randomVal(){
        const  on = [true, false]
         return on[Math.floor(Math.random() * on.length)]
     }

     genSquares({rows, cols}){
         let arr = [];
            
         for(let i = 0; i < rows; i++){
            let subarr = [];
            for(let j = 0; j < cols; j++){
                subarr.push({row: i+1, col: j+1, isOn: this.randomVal(), id: unique(16)})
            }
            arr.push(subarr)
         } 
         return arr
     }

    componentDidMount(){
          }

    handleClick({row, col}){
        this.setState(curState =>({
            squares: [...curState.squares.map(square => square.map(a => {
                if((a.row === row && a.col === col) ||
                   ( a.row === row-1 && a.col === col) ||
                    (a.row === row + 1 && a.col === col) ||
                    (a.row === row && a.col === col+ 1) ||
                    (a.row === row && a.col === col-1) ){
                    a.isOn = !a.isOn
                    return a
                }
                return a
            }))]
        }), () => {
            [this.state.squares.map(square => square.map(a=> a.isOn))]
            .join(',').split(',').every(a=> a === "false") && this.setState({
                gameOver: true
            }) 
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState(curState => (
            {
                start: !curState.start,
                gameOver: false,
                squares: [...this.genSquares(curState)]
            }
        )) 
    }

    handleReset(event){
        event.preventDefault()
        this.setState(curState => (
            {
                start: !curState.start,
            }
        )) 
    }

    render() {
        const {squares, rows, cols, start, gameOver} = this.state
        const style = {gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gridTemplateRows: `repeat(${rows}, 1fr)`,
                        width: `${cols * 3}rem`,
                        height: `${rows * 3}rem`,
                        }

        const board = (
            <div className="SquareUi" style={style}>
                    {squares.map(square => square.map(({id, ...data}) => <Square
                    key={id}
                    {...data}
                    clicked = {this.handleClick}                  />))}
                </div>
        )

        const form = (
            <Specs 
                rows= {rows}
                cols ={cols}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
        )
        return (
            <div>
                <Header />
                {!start && form}
                {(start && !gameOver)  && board}
                {gameOver && <Win />}
                {start &&  <Button type="submit" click ={this.handleReset}>Reset</Button>}
            </div>
            
        );
    }
}

export default SquareUi;
