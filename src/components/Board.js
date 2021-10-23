import React, { useState } from "react";
import History from "./History";

let arrayLength = []
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '', type2: '', type3: '', type4: '', type5: '', type6: '',
            type7: '', type8: '', type9: '', typeBool: true, turn: 'X', winner: '' , isWin:'false' , isTurn:''
        }
        
        // this.state = { types: '', typeBools: true }
        this.inc = this.inc.bind(this)
        this.inc2 = this.inc2.bind(this)
        this.inc3 = this.inc3.bind(this)
        this.inc4 = this.inc4.bind(this)
        this.inc5 = this.inc5.bind(this)
        this.inc6 = this.inc6.bind(this)
        this.inc7 = this.inc7.bind(this)
        this.inc8 = this.inc8.bind(this)
        this.inc9 = this.inc9.bind(this)
        this.winn = this.winn.bind(this)

    }
    
    winn() {
        if (this.state.type === 'X' && this.state.type2 === 'X' && this.state.type3 === 'X'
            || this.state.type4 === 'X' && this.state.type5 === 'X' && this.state.type6 === 'X'
            || this.state.type7 === 'X' && this.state.type8 === 'X' && this.state.type9 === 'X'
            || this.state.type === 'X' && this.state.type4 === 'X' && this.state.type7 === 'X'
            || this.state.type2 === 'X' && this.state.type5 === 'X' && this.state.type8 === 'X'
            || this.state.type3 === 'X' && this.state.type6 === 'X' && this.state.type9 === 'X'
            || this.state.type === 'X' && this.state.type5 === 'X' && this.state.type9 === 'X'
            || this.state.type3 === 'X' && this.state.type5 === 'X' && this.state.type7 === 'X') {
            this.setState({ winner: 'X' , isWin:'' , isTurn:'false'});
        }
        if (this.state.type === 'O' && this.state.type2 === 'O' && this.state.type3 === 'O'
            || this.state.type4 === 'O' && this.state.type5 === 'O' && this.state.type6 === 'O'
            || this.state.type7 === 'O' && this.state.type8 === 'O' && this.state.type9 === 'O'
            || this.state.type === 'O' && this.state.type4 === 'O' && this.state.type7 === 'O'
            || this.state.type2 === 'O' && this.state.type5 === 'O' && this.state.type8 === 'O'
            || this.state.type3 === 'O' && this.state.type6 === 'O' && this.state.type9 === 'O'
            || this.state.type === 'O' && this.state.type5 === 'O' && this.state.type9 === 'O'
            || this.state.type3 === 'O' && this.state.type5 === 'O' && this.state.type7 === 'O') {
            this.setState({ winner: 'O' , isWin:'', isTurn:'false'});
        }
    }
    inc() {
        if (this.state.type === '') {
            if (this.state.typeBool === true) {
                this.setState({ type: 'X', typeBool: false, turn: 'O' });
                arrayLength.push(['X','1'])
            } else {
                this.setState({ type: 'O', typeBool: true, turn: 'X' });
                arrayLength.push(['O','1'])
            }
        }
        // console.log(arrayLength[0][1]);
        setTimeout(() => {
            this.winn()
        }, 1);
    }
    inc2() {
        if (this.state.type2 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type2: 'X', typeBool: false, turn: 'O' });
                arrayLength.push(['X','2'])
            } else {
                this.setState({ type2: 'O', typeBool: true, turn: 'X' });
                arrayLength.push(['O','2'])
            }
        }
        // console.log(arrayLength[0][1]);
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc3() {
        if (this.state.type3 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type3: 'X', typeBool: false, turn: 'O' });
                arrayLength.push(['X','3'])
            } else {
                this.setState({ type3: 'O', typeBool: true, turn: 'X' });
                arrayLength.push(['O','3'])
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc4() {
        if (this.state.type4 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type4: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type4: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc5() {
        if (this.state.type5 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type5: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type5: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc6() {
        if (this.state.type6 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type6: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type6: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc7() {
        if (this.state.type7 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type7: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type7: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc8() {
        if (this.state.type8 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type8: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type8: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    inc9() {
        if (this.state.type9 === '') {
            if (this.state.typeBool === true) {
                this.setState({ type9: 'X', typeBool: false, turn: 'O' });
                arrayLength.push('X')
            } else {
                this.setState({ type9: 'O', typeBool: true, turn: 'X' });
                arrayLength.push('O')
            }
        }
        setTimeout(() => {
            this.winn()
        }, 1);

    }
    onHistoryClick = (val) => {
        let loc = this.state.type2
        // arrayLength.pop()
        // let s = arrayLength[0]
        // let s = arrayLength[0]
        this.setState({ loc: val});
    };

    render() {
        return (
            <div>
                <div id="grid">
                    <div onClick={this.inc}>{this.state.type}</div>
                    <div onClick={this.inc2}>{this.state.type2}</div>
                    <div onClick={this.inc3}>{this.state.type3}</div>
                    <div onClick={this.inc4}>{this.state.type4}</div>
                    <div onClick={this.inc5}>{this.state.type5}</div>
                    <div onClick={this.inc6}>{this.state.type6}</div>
                    <div onClick={this.inc7}>{this.state.type7}</div>
                    <div onClick={this.inc8}>{this.state.type8}</div>
                    <div onClick={this.inc9}>{this.state.type9}</div>
                </div>
                <div className={this.state.isTurn}>
                    '{this.state.turn}' Turn
                </div>
                <div className={this.state.isWin}>
                    '{this.state.winner}' wins
                </div>
                <div>
                    <br/>
                    History:
                    {arrayLength.map((val, index) => {
                        console.log(val);
                    return (
                        <History method={this.onHistoryClick} arr={arrayLength} val={val} key={index} />
                    );
                })}
                    
                </div>
            </div>
        )
    }
}

export default Board;
{/* <Winner type={this.state.type} type2={this.state.type2} type3={this.state.type3} type4={this.state.type4}
                    type5={this.state.type5} type6={this.state.type6} type7={this.state.type7} type8={this.state.type8}
                    type9={this.state.type9} winner={this.state.winner} turn={this.state.turn}/> */}