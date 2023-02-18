import React from "react";
import { createRoot } from "react-dom/client";
//import  {saludo} from './HelloWorldApp';
//import { FirstApp } from "./FirstApp";
import { CounterApp } from './Counter';
import { FirstApp } from './FirstApp';
import './styles.css';


// function App(){
//     //document.createElement...
//     return (<h1>Hola Victor</h1>);
// }

// ReactDOM.createRoot( document.getElementById('root') ).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )


 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <CounterApp value={20} /> */}
    <FirstApp title="Hola, Soy vegeta" />
    </React.StrictMode>
);

