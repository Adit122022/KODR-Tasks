console.log(React)
// React.createElement('h1', {className: 'heading', style: {color: 'red'}}, 'Hello from React')
const h1 =React.createElement('h1',{} ,'Hello from React')
const h2 =React.createElement('h2',null ,'Hello from React')
// const root =document.querySelector('#root')
const RootDIV = ReactDOM.createRoot(root)

RootDIV.render(h1)
