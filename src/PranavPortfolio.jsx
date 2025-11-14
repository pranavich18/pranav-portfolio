
import React from "react";

// Pranav-Joshi-Portfolio.jsx
// Single-file React component for a GitHub Pages / Vercel portfolio.
// TailwindCSS utility classes are used.

export default function PranavPortfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12">
      <header className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">PJ</div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Pranav Joshi</h1>
            <p className="text-sm text-slate-600">M.S. Computer Science — NYU Tandon | Software Engineer & Researcher</p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/pranavich18" target="_blank" rel="noopener noreferrer" className="text-sm underline">GitHub</a>
              <a href="https://www.linkedin.com/in/pranav-joshi-349b1b1b1b6/" target="_blank" rel="noopener noreferrer" className="text-sm underline">LinkedIn</a>
              <a href="mailto:pranavjoshixavierite@gmail.com" className="text-sm underline">Email</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8 grid gap-8">
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            I am a software engineer and researcher focused on data pipelines, distributed systems, and security for
            embedded/IoT domains. My experience includes building data warehousing solutions, microservices on cloud
            platforms, and applied research in EV charging protocols and network algorithms.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <a href="https://github.com/pranavich18?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm underline">All repos</a>
          </div>

          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="font-semibold">Multi-threaded BFS Web Crawler</h3>
              <p className="text-sm text-slate-600">High-performance web crawler with Redis-backed queue and dynamic priority scoring.</p>
              <div className="mt-2 text-xs">
                <a href="https://github.com/pranavich18/web-crawler" target="_blank" rel="noopener noreferrer" className="underline">Source</a>
              </div>
            </li>

            <li>
              <h3 className="font-semibold">LLM Book Recommendation System</h3>
              <p className="text-sm text-slate-600">Semantic recommendations using vector embeddings and LLMs; low-latency vector search optimizations.</p>
              <div className="mt-2 text-xs">
                <a href="https://github.com/pranavich18/llm-book-recommender" target="_blank" rel="noopener noreferrer" className="underline">Source</a>
              </div>
            </li>

            <li>
              <h3 className="font-semibold">Trading Suggestion Platform (Internship)</h3>
              <p className="text-sm text-slate-600">Backtesting + indicators (RSI, MACD, VWAP) built as microservices and deployed on GKE.</p>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Research & Publications</h2>
            <span className="text-sm text-slate-500">First author where noted</span>
          </div>

          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <strong>Survey on Game Theory-Based Security Framework for IoT</strong>
              <div className="mt-1">
                Pranav Joshi, Suresh Kamediya, Ritik Kumar, B. R. Chandavarkar. Submitted to XVIII International
                Conference on Data Science and Intelligent Analysis of Information, 2023.
              </div>
              <div className="mt-1 text-xs">
                <a href="https://link.springer.com/chapter/978-3-031-16178-0_25" target="_blank" rel="noopener noreferrer" className="underline">Springer chapter</a>
              </div>
            </li>

            <li>
              <strong>Fuzzing of EV Protocols (Independent Research)</strong>
              <div className="mt-1">Fuzzing ISO 15118 and OCPP protocols; built two novel testbeds for security analysis; mentored students.</div>
            </li>

            <li>
              <strong>Empirical Evaluation of CoDel Active Queue Management</strong>
              <div className="mt-1">Performance evaluation using NeST and Linux network namespaces; analysis of control law behavior.</div>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold">Experience & Resume</h2>
          <p className="mt-3 text-slate-700">Software Engineer at Wells Fargo (Bangalore) — data warehousing, ETL automation, microservices, cloud deployment.</p>

          <div className="mt-4 flex gap-3">
            <a href="/resume.pdf" className="px-4 py-2 rounded-lg border text-sm">Download Resume (PDF)</a>
            <a href="https://drive.google.com/file/d/11HmTvebuWhkcBE7DsE3bgQ7grgxRT0cr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border text-sm">Drive - Full CV</a>
          </div>
        </section>

        <footer className="bg-white p-6 rounded-2xl shadow-sm text-center">
          <p className="text-sm">Portfolio deployed from GitHub repo.</p>
        </footer>
      </main>
    </div>
  );
}
