import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ActionSheet } from 'react-weui';
import './index.css';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import todoApp from './store/reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './store/action'

let store = createStore(todoApp);

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducer'));
store.dispatch(addTodo('Learn about state'));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));


// 停止监听state更新
unsubscribe();

class BasicExample extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Demo}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
        </div>
      </Router>
    )
  }
}

const About = ()=> {
  return (
    <div>
      About
    </div>
  )
}

const Topics = ()=> {
  return (
    <div>
      Topics
    </div>
  )
}

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      type: '',
      menus: [{
        label: 'Option 1'
      },{
        label: 'Option 2'
      }]
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ type: 'ios', show: true })}>IOS ActionSheet</Button>
        <Button onClick={() => this.setState({ type: 'android', show: true })}>Android ActionSheet</Button>
        <ActionSheet type={this.state.type} menus={this.state.menus} show={this.state.show} onRequestClose={() => this.setState({ show: false })}/>
      </div>
    )
  }
} 

ReactDOM.render(<BasicExample />, 
  document.getElementById('root')
);
registerServiceWorker();
