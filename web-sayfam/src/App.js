import logo from './logo.svg';
import './App.css';
import {Header} from '../src/components/Header'
import {Head} from '../src/components/Head'
import { useRef, useState } from 'react';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { HireMe } from './components/HireMe';

function App() {
  const[check,setCheck]=useState(false);
  const[dil,setDil]=useState("Türkçe");
  const setCheck1=()=>{
    setCheck(!check)
}
const dilChange=()=>{
  dil=="Türkçe"? setDil("İngilizce") :setDil("Türkçe")
}
  const ref=useRef(null);
  const ref1=useRef(null);
  const ref2=useRef(null);
  const handleS=()=>{
    console.log("q")
    ref.current?.scrollIntoView({ behavior: "smooth"})}
    const handleP=()=>{
      ref1.current?.scrollIntoView({ behavior: "smooth"})}
      const handleH=()=>{
        ref2.current?.scrollIntoView({ behavior: "smooth"})}
  return (
    <div>
   <Header dilChange={dilChange} dil={dil} check={check} setCheck1={setCheck1} s={handleS} p={handleP} h={handleH}/>
   <Head check={check}  s={handleS} p={handleP} h={handleH}/>
   <Skills check={check}  ref3={ref} s={handleS} p={handleP} h={handleH}  />
   <Projects check={check}  ref1={ref1} s={handleS} p={handleP} h={handleH}/>
   <HireMe  check={check}  ref2={ref2} s={handleS} p={handleP} h={handleH}/>
    </div>
  );
}

export default App;
