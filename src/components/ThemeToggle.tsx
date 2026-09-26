"use client";
import { Moon, Sparkles, Sun } from "lucide-react";
import { useEffect, useState } from "react";
type Mode="auto"|"light"|"dark";
const timed=()=>{const h=new Date().getHours();return h>=7&&h<19?"light":"dark"};
const apply=(m:Mode)=>{const t=m==="auto"?timed():m;document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t};
export function ThemeToggle(){
 const [mode,setMode]=useState<Mode>("auto");
 useEffect(()=>{const s=localStorage.getItem("sparkrelay-theme");const m=s==="light"||s==="dark"||s==="auto"?s:"auto";setMode(m);apply(m)},[]);
 const next=mode==="auto"?"light":mode==="light"?"dark":"auto"; const Icon=mode==="auto"?Sparkles:mode==="light"?Sun:Moon;
 return <button className="button" onClick={()=>{setMode(next);localStorage.setItem("sparkrelay-theme",next);apply(next)}}><Icon size={15}/><span className="theme-label">{mode}</span></button>
}
