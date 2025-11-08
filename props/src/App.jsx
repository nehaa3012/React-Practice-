import React, { useState } from 'react'
import Cards from './assets/components/Cards'
function App() {
  const [count, setCount] = useState(0)
  const data = [
  {
    name: "Amazon",
    job: "Senior Software Engineer",
    location: "Mumbai",
    img: "https://imgs.search.brave.com/nKz_jFlZWYDvJs7oFiBzJECedcrSHw9cOGwsTgYKZXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "Google",
    job: "Senior UI/UX Designer",
    location: "New Delhi",
    img: "https://imgs.search.brave.com/Yi1CCu-7zAcOl29bjIgbGkCRzUP5ZpRO76PaakrIZMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZXByaW50YXJ0/LmNvbS9pbWFnZXMv/YmxvZy9oaXN0b3J5/LW9mLWxvZ29zL2dv/b2dsZS8zX2dvb2ds/ZV9sb2dvX3ByZWRl/c2lnbl9ieV9ydXRo/X2tlZGFyLmpwZw",
    tag: "Full-Time",
    position: "Junior Level"
  },
  {
    name: "Facebook",
    job: "Graphic Designer",
    location: "Chennai",
    img: "https://imgs.search.brave.com/Fxq8jAe3bJOk8m9Bzo__vMhiXJrV7nwOGSWoAMQlfbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZmFjZWJvb2st/bG9nby1pY29uLXZl/Y3Rvci1lcHMtZmls/ZV82NTkxOTMtMTMx/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
    tag: "Remote",
    position: "Freshers"
  },
  {
    name: "Apple",
    job: "IOS Developer",
    location: "Bangalore",
    img: "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "Twitter",
    job: "Senior Software Engineer",
    location: "New York",
    img: "https://imgs.search.brave.com/ep1hqk8UpV4LmWRAGDDYofWYOf_21QUZ2IlPVlfWbVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvdHdpdHRl/ci1uZXctbG9nby1v/bGQtZXZvbHV0aW9u/LTI2MG53LTIzMzc2/ODg5NTcuanBn",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "LinkedIn",
    job: "Frontend Engineer",
    location: "Pune",
    img: "https://imgs.search.brave.com/ymFQrHMy4lz2DhuXPBaPpLvHgcE29vOEy-Ur1c5vEYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2xpbmtlZGluLWxv/Z28tcG5nLWltYWdl/cy0xMC5wbmc",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "Microsoft",
    job: "Data Scientist",
    location: "Mumbai",
    img: "https://imgs.search.brave.com/yQDQt2FkloIYigzwri4CYYiD4pIZHbJdHEt0-B0gDWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "Instagram",
    job: "Full-Stack Developer",
    location: "Noida",
    img: "https://imgs.search.brave.com/45GYU1YEHj4UmJEuG8X7ikTD_50olWrlzvZKUelg504/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAy/L0luc3RhZ3JhbS1M/b2dvLTUwMHgyODEu/cG5n",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "Netflix",
    job: "Machine Learning Engineer",
    location: "Gurugram",
    img: "https://imgs.search.brave.com/Cwnh_IGOkqY4RB8W0V2iFCWtXrWyMWu74IwQwud3lDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmL2Iy/LzE5LzhmYjIxOWZh/OWExMmI3NWFlNWJm/MTc4NjE4NWI4NWQx/LmpwZw",
    tag: "Part-Time",
    position: "Senior Level"
  },
  {
    name: "IBM",
    job: "AI Research Engineer",
    location: "Chennai",
    img: "https://imgs.search.brave.com/oIyxiXYOnmTI-MBuTHHwgBIg0Aes3nxYLZ3a_ag2AoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUxL0lCTV9sb2dv/LnN2Zw",
    tag: "Part-Time",
    position: "Senior Level"
  }
];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {data.map((item,index)=>{
        return <Cards data={item} key={index} />
      })}
    </div>
  )
}

export default App

