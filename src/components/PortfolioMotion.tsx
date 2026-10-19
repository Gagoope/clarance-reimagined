import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Database, Globe, Layers, Server, Workflow } from "lucide-react";
import { heroTech } from "@/data/portfolio";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div aria-hidden className="scroll-progress" style={{ scaleX: scrollYProgress }} />;
}

export function HeroAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 65]);
  return <motion.div aria-hidden className="hero-atmosphere" style={reduceMotion ? undefined : { y }}><div className="hero-aurora" /><div className="hero-particles" /></motion.div>;
}

/** A decorative schematic of the existing portfolio's integration expertise. */
export function SystemsVisual() {
  const nodes = [
    { label: "Business systems", icon: Workflow, className: "system-business" },
    { label: "REST APIs", icon: Globe, className: "system-api" },
    { label: "SQL Server", icon: Database, className: "system-database" },
    { label: "SAP Business One", icon: Layers, className: "system-sap" },
  ];
  return (
    <div className="systems-visual" role="img" aria-label="Business systems connected through REST APIs to SQL Server and SAP Business One">
      <div className="systems-caption"><span className="system-status" />Connected systems<Server className="h-4 w-4" aria-hidden /></div>
      <div className="systems-map" aria-hidden>
        <svg viewBox="0 0 400 300" className="system-connectors" fill="none"><path d="M92 70 H200 V150 M308 70 H200 M92 230 H200 V150 M308 230 H200" /><path className="system-signal" d="M92 70 H200 V150 M308 70 H200 M92 230 H200 V150 M308 230 H200" /></svg>
        <span className="system-hub"><Server className="h-6 w-6" /></span>
        {nodes.map(({ label, icon: Icon, className }) => <div key={label} className={`system-node ${className}`}><Icon className="h-5 w-5" /><span>{label}</span></div>)}
      </div>
      <div className="systems-stack" aria-hidden>{heroTech.slice(1, 4).map(t => <span key={t}>{t}</span>)}</div>
    </div>
  );
}