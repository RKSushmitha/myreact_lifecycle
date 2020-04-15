import React from 'react';
import './App.css';

// const ErrorComponent = () => <div>{props.ignore}</div>

class Counter extends React.Component {
  constructor(props){
    console.log('Constuctor')
    super(props)
    this.state = {
      counter :0,
      seed : 0
    }
    this.increment = () =>
      this.setState({counter : this.state.counter+1 }) 
    
    this.decrement = () =>
      this.setState({counter : this.state.counter-1 }) 
  }
  static getDerivedStateFromProps(props,state){
    if(props.seed && state.seed!== props.seed){
      return {
        seed : props.seed,
        counter : props.seed
      }
    }
    return null
  }

  componentDidMount(){
    console.log('Component Did mount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Should component update - Donot render()')
    if(nextProps.ignoreProp && 
      this.props.ignoreProp !== nextProps.ignoreProp){
        console.log('Should component update - Donot render()')
        return false
      }
      console.log('Should component update - render()')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('get Snapshot before update')
    return null
  }


  render(){
    console.log('Render')

  return (
    <div>
      <button onClick = {this.increment}>Increment</button>
      <button onClick = {this.decrement}>Decrement</button>
    <div>
     <h1>Counter : {this.state.counter}</h1>
     </div>
     {/* <ErrorComponent /> */}
    </div>
  );
}
componentDidUpdate(prevProps,prevState,snapshot){
  console.log('Component Did Update')
}
componentWillUnmount(){
  console.log('Component Will Unmount')
}
// componentDidCatch(error, info){
//   console.log('Component Did catch')
//   this.setState({error,info})
// }
}
export default Counter;
