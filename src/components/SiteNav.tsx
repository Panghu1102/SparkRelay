"use client";
import { Github,Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
export function SiteNav(){return <nav className="nav glass shell"><div className="nav-inner"><a href="#" className="brand"><span className="brand-mark"><Sparkles size={16}/></span><span>SparkRelay</span></a><div className="nav-links"><a className="nav-link" href="#about">About</a><a className="nav-link" href="#projects">Projects</a><a className="nav-link" href="#principles">Principles</a><a className="nav-link" href="https://github.com/sparkrelay" target="_blank" rel="noreferrer"><Github size={15}/>GitHub</a><ThemeToggle/></div></div></nav>}
