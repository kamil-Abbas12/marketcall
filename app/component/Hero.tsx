"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;

      if (orbRef1.current) {
        orbRef1.current.style.transform = `translate(${dx * 24}px, ${dy * 24}px)`;
      }
      if (orbRef2.current) {
        orbRef2.current.style.transform = `translate(${-dx * 18}px, ${-dy * 18}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap');

.hero-section{
font-family:'Outfit',sans-serif;
position:relative;
overflow:hidden;
min-height:620px;
background:#020617;
}

/* Background Gradient */

.hero-bg-gradient{
position:absolute;
inset:0;
background:
radial-gradient(ellipse 80% 60% at 20% -10%, #2563eb33 0%, transparent 60%),
radial-gradient(ellipse 60% 50% at 80% 110%, #06b6d433 0%, transparent 55%),
radial-gradient(ellipse 50% 70% at 50% 50%, #1e3a8acc 0%, transparent 80%),
linear-gradient(160deg,#020617 0%,#0b1120 40%,#0f172a 100%);
animation:bgPulse 8s ease-in-out infinite alternate;
}

@keyframes bgPulse{
0%{filter:brightness(1)}
100%{filter:brightness(1.1)}
}

/* Orbs */

.orb{
position:absolute;
border-radius:50%;
filter:blur(80px);
transition:transform .6s cubic-bezier(.25,.46,.45,.94);
pointer-events:none;
}

.orb-1{
width:520px;
height:520px;
top:-160px;
left:-100px;
background:radial-gradient(circle,#2563eb66 0%,#1d4ed844 50%,transparent 70%);
}

.orb-2{
width:420px;
height:420px;
bottom:-140px;
right:-80px;
background:radial-gradient(circle,#06b6d455 0%,#0891b244 50%,transparent 70%);
}

.orb-3{
width:260px;
height:260px;
top:50%;
left:55%;
background:radial-gradient(circle,#38bdf833 0%,transparent 70%);
}

/* Grid */

.grid-overlay{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(96,165,250,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(96,165,250,.05) 1px,transparent 1px);
background-size:48px 48px;
}

/* Badge */

.hero-badge{
display:inline-flex;
align-items:center;
gap:8px;
padding:6px 16px 6px 8px;
border-radius:100px;
background:rgba(37,99,235,.15);
border:1px solid rgba(59,130,246,.35);
backdrop-filter:blur(12px);
}

.badge-dot{
width:8px;
height:8px;
background:#38bdf8;
border-radius:50%;
box-shadow:0 0 12px #38bdf8;
}

/* Title */

.hero-title{
font-weight:900;
color:white;
}

.hero-gradient-text{
background:linear-gradient(135deg,#38bdf8 0%,#60a5fa 40%,#2563eb 70%,#1d4ed8 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* Text */

.hero-desc{
color:rgba(203,213,225,.75);
}

/* Buttons */

.btn-primary{
background:linear-gradient(135deg,#2563eb 0%,#3b82f6 50%,#06b6d4 100%);
border:none;
color:white;
padding:15px 36px;
border-radius:100px;
font-weight:700;
cursor:pointer;
display:flex;
align-items:center;
gap:8px;
transition:.3s;
}

.btn-primary:hover{
transform:translateY(-2px);
box-shadow:0 10px 30px rgba(59,130,246,.4);
}

.btn-outline{
background:rgba(255,255,255,.05);
border:1px solid rgba(96,165,250,.4);
color:white;
padding:15px 36px;
border-radius:100px;
font-weight:600;
cursor:pointer;
transition:.3s;
}

.btn-outline:hover{
background:rgba(96,165,250,.15);
}

/* Stats */

.stat-item{
display:flex;
flex-direction:column;
align-items:center;
}

.stat-value{
font-size:26px;
font-weight:800;
background:linear-gradient(135deg,#60a5fa,#22d3ee);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.stat-label{
font-size:13px;
color:rgba(255,255,255,.5);
}

.stat-divider{
width:1px;
height:36px;
background:rgba(148,163,184,.2);
}

`}</style>

<section className="hero-section">

<div className="hero-bg-gradient"/>
<div className="grid-overlay"/>

<div className="orb orb-1" ref={orbRef1}/>
<div className="orb orb-2" ref={orbRef2}/>
<div className="orb orb-3"/>

<div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 pt-36 pb-28 gap-7">

<div className="hero-badge">
<div className="badge-dot"/>
<span style={{fontSize:15,color:"#cbd5f5",fontWeight:600}}>
#1 Performance Network
</span>
</div>

<h1
className="hero-title"
style={{
fontSize:"clamp(3rem,5.5vw,5.5rem)",
lineHeight:1.1,
maxWidth:"960px"
}}
>
Elevating success in{" "}
<span className="hero-gradient-text">
performance marketing
</span>
</h1>

<p
className="hero-desc"
style={{
fontSize:"clamp(17px,1.4vw,20px)",
maxWidth:"640px",
lineHeight:1.7
}}
>
Your gateway to new clients. Marketcall powers millions of trusted conversions every year.
</p>

<div className="flex flex-col sm:flex-row gap-4 pt-1">

<button className="btn-primary">
<span>Get clients</span> →
</button>

<button className="btn-outline">
Monetize your traffic →
</button>

</div>

<div
style={{
display:"flex",
alignItems:"center",
gap:"28px",
marginTop:"12px",
padding:"18px 32px",
background:"rgba(255,255,255,0.04)",
border:"1px solid rgba(148,163,184,.15)",
borderRadius:"20px",
backdropFilter:"blur(16px)"
}}
>

<div className="stat-item">
<span className="stat-value">50M+</span>
<span className="stat-label">Conversions/yr</span>
</div>

<div className="stat-divider"/>

<div className="stat-item">
<span className="stat-value">120+</span>
<span className="stat-label">Countries</span>
</div>

<div className="stat-divider"/>

<div className="stat-item">
<span className="stat-value">4.9★</span>
<span className="stat-label">Partner rating</span>
</div>

</div>

</div>
</section>
</>
);
};

export default Hero;