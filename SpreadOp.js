import React, { Component } from 'react'

 class SpreadOp extends Component {
  render() {
    const num =[1,2,3,4];
    const numone =[5,6,7,8];
    const combine=[...num, ...numone]
    
    const [one, two, ...rest] = num;
    return (
        
      <div>
        {combine}<br></br><br></br>
        {one}<br></br><br></br>
        {two}<br></br><br></br>
        {rest}
      </div>
    )
  }
}

export default SpreadOp;
