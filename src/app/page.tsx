import { ArrowUpRight, Boxes, Code2, Github, Globe2, Lightbulb, Radio, Sparkles, Users } from "lucide-react";
import { SiteNav } from "../components/SiteNav";

const projects=[
 {name:"SparkRelay",tag:"Organization",description:"A home for small ideas that deserve to become useful software.",icon:Sparkles},
 {name:"Station",tag:"In progress",description:"A place for tools, experiments, and services built around the SparkRelay ecosystem.",icon:Radio},
 {name:"Hub",tag:"In progress",description:"The connective layer between projects, contributors, and the open-source community.",icon:Boxes}
];

export default function Home(){return <>
<SiteNav/>
<main>
<section className="hero shell"><div className="hero-orb"/><div className="hero-grid"><div>
<span className="eyebrow"><Sparkles size={14}/> Independent open-source organization</span>
<h1>Small sparks.<br/><span className="gradient-text">Connected.</span></h1>
<p className="hero-copy">SparkRelay is a small, independent technology organization building practical software, experiments, and open-source projects for the open web.</p>
<div className="actions"><a className="button primary" href="#projects">Explore projects <ArrowUpRight size={16}/></a><a className="button" href="https://github.com/sparkrelay" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div>
</div><div className="mark glass" aria-hidden="true"><div className="mark-inner"><Sparkles size={43} strokeWidth={1.7}/></div></div></div></section>

<section id="about" className="section shell"><div className="section-heading"><h2>What is SparkRelay?</h2><p>A place to turn curiosity into software — without making every idea bigger or more complicated than it needs to be.</p></div><div className="grid-3">
<article className="card glass"><div className="card-icon"><Lightbulb size={20}/></div><h3>Ideas → Experiments</h3><p>We prototype quickly, learn from the result, and keep the parts that are genuinely useful.</p></article>
<article className="card glass"><div className="card-icon"><Code2 size={20}/></div><h3>Useful by default</h3><p>Projects should solve real problems, teach something interesting, or make the web a little more capable.</p></article>
<article className="card glass"><div className="card-icon"><Users size={20}/></div><h3>Open by design</h3><p>Source code, discussion, and collaboration are part of the project rather than an afterthought.</p></article>
</div></section>

<section id="projects" className="section shell"><div className="section-heading"><h2>Projects</h2><p>The ecosystem is still young. These are the first pieces of the relay.</p></div><div className="grid-3">{projects.map(p=>{const Icon=p.icon;return <a className="project glass" href="https://github.com/sparkrelay" target="_blank" rel="noreferrer" key={p.name}><div><span className="project-tag">{p.tag}</span><div className="project-title"><Icon size={21}/><h3>{p.name}</h3></div><p>{p.description}</p></div><span className="project-link">View on GitHub <ArrowUpRight size={15}/></span></a>})}</div></section>

<section id="principles" className="section shell"><div className="quote glass"><p>“One spark is small. A relay is how it keeps moving.”</p></div></section>
<section className="section shell cta-section"><div className="glass cta"><div><div className="cta-title"><Globe2 size={17}/> Build in the open</div><p>Follow the organization on GitHub to see what is being built, what is experimental, and where you can contribute.</p></div><a className="button primary" href="https://github.com/sparkrelay" target="_blank" rel="noreferrer">Open GitHub <Github size={16}/></a></div></section>
</main>
<footer className="footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} SparkRelay</span><span>Small sparks, connected into something useful.</span></div></footer>
</>}
