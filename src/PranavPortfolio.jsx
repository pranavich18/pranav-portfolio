import React from "react";

export default function PranavPortfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-12">
      {/* Container */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold">Pranav Joshi</h1>
            <p className="text-slate-600 mt-1">
              M.S. Computer Science — NYU Tandon | Software Engineer & Researcher
            </p>
            <div className="flex flex-col md:flex-row md:gap-4 gap-2 mt-3 text-sm">
              <a
                href="https://github.com/pranavich18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/pranavjoshi189/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="mailto:pranavjoshixavierite@gmail.com"
                className="text-slate-700 hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Masters' in Computer Science student at NYU with strong interests in
            systems and machine learning. Worked as a Software Development Engineer
            at Wells Fargo, with experience in full-stack development, data
            warehousing, and protocol fuzzing. I’ve contributed to open-source
            applications through Google Summer of Code and published research in
            IoT Security. Passionate about building reliable systems and exploring
            the intersection of machine learning and systems.
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <a
              href="https://github.com/pranavich18?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline"
            >
              All repos
            </a>
          </div>

          <ul className="space-y-4">

            {/* Web Crawler */}
            <li className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-lg">Multi-threaded BFS Web Crawler</h3>
              <p className="text-sm text-slate-600 mt-1">
                A high-performance, thread-safe web crawler built in Python with
                Redis-backed state management, BFS traversal, and domain-aware
                scoring. Designed for reliable large-scale crawling with a
                concurrency-focused architecture.
              </p>

              <ul className="mt-3 text-sm text-slate-700 space-y-1">
                <li>
                  <b>Concurrency:</b> Scalable worker-pool design (tested up to
                  200+ threads) with synchronized URL distribution.
                </li>
                <li>
                  <b>State management:</b> Redis visited-set and queue ensure global
                  de-duplication across concurrent threads.
                </li>
                <li>
                  <b>Traversal & scoring:</b> BFS crawling backed by a dynamic
                  priority scoring system based on depth and domain load.
                </li>
                <li>
                  <b>Responsible crawling:</b> robots.txt checks, MIME filtering,
                  URL normalization.
                </li>
                <li>
                  <b>Query-mode:</b> DuckDuckGo-powered seeding for topic-specific
                  crawl graphs.
                </li>
              </ul>

              <p className="mt-2 text-xs text-slate-500">
                Future work: distributed mode, per-domain rate-limits, Elasticsearch
                storage, crawl analytics dashboard.
              </p>

              <a
                href="https://github.com/pranavich18/web-crawler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-3 inline-block text-indigo-600 hover:underline"
              >
                Source
              </a>
            </li>

            {/* LLM Book Recommender */}
            <li className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-lg">LLM Book Recommendation System</h3>
              <p className="text-sm text-slate-600 mt-1">
                A semantic recommendation pipeline that blends vector embeddings,
                similarity search, and LLM reasoning to provide highly personalized
                book suggestions based on user preferences.
              </p>

              <ul className="mt-3 text-sm text-slate-700 space-y-1">
                <li>
                  <b>Embeddings:</b> Uses dense vector embeddings of book summaries
                  for semantic similarity rather than keyword-based matching.
                </li>
                <li>
                  <b>Vector search:</b> Cosine similarity search over FAISS/NumPy
                  embedding index for millisecond responses.
                </li>
                <li>
                  <b>LLM augmentation:</b> LLM refines, re-ranks, and explains
                  recommendations based on user tone, genre, and reading history.
                </li>
                <li>
                  <b>Pipeline:</b> Ingestion → Embedding → Indexing →
                  Vector Search → LLM Ranking.
                </li>
                <li>
                  <b>Tech:</b> Python, sentence-transformers, FastAPI, FAISS, NumPy.
                </li>
              </ul>

              <p className="mt-2 text-xs text-slate-500">
                Future improvements: hybrid sparse+dense retrieval, user taste
                profiles, on-device embedding caching.
              </p>

              <a
                href="https://github.com/pranavich18/llm-book-recommender"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-3 inline-block text-indigo-600 hover:underline"
              >
                Source
              </a>
            </li>

            {/* Trading Platform
            <li className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-lg">Trading Suggestion Platform (Internship)</h3>
              <p className="text-sm text-slate-600 mt-1">
                Backtesting + technical indicators (RSI, MACD, VWAP) packaged as
                microservices for a cloud-deployed trading insights system on GKE.
              </p>
            </li> */}

          </ul>
        </section>

        {/* Research & Publications */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Research & Publications</h2>
          </div>

          <ul className="space-y-3 text-sm text-slate-700">

            {/* Springer Publication */}
            <li className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <strong>Springer Publication</strong>
              <p className="mt-1">
                <b>First Author:</b> “Survey on Game Theory-Based Security Framework for IoT.”
                Submitted to XVIII International Conference on Data Science and Intelligent Analysis of Information, 2023.
              </p>
              <a
                href="https://link.springer.com/chapter/978-3-031-16178-0_25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-600 hover:underline mt-1 inline-block"
              >
                Springer chapter
              </a>
            </li>
            <br />
            {/* Fuzzing EV Protocols */}
            <li className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <strong>Fuzzing of EV Charging Protocols (Independent Research)</strong>
              <p className="mt-1">
                Security analysis of ISO 15118 and OCPP charging standards through
                fuzzing-based testbeds built using Python, Scapy, CAN utilities, and
                custom protocol mutation frameworks.
              </p>
            </li>

            {/* Major Thesis */}
            <li className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <strong>Empirical Evaluation of CoDel Active Queue Management (Major Thesis)</strong>
              <p className="mt-1">
                Comprehensive experimental evaluation of the CoDel (Controlled Delay)
                AQM algorithm using Linux network namespaces and the NeST tool.
                Analyzed bufferbloat behavior, queue delay stabilization, and control
                law dynamics under varying network loads. Built a full reproducible
                simulation testbed and benchmarked CoDel against traditional queue
                management techniques.
              </p>
              <a
                href="https://drive.google.com/file/d/11HmTvebuWhkcBE7DsE3bgQ7grgxRT0cr/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-600 hover:underline mt-1 inline-block"
              >
                Full Thesis Report (PDF)
              </a>
            </li>

          </ul>
        </section>

        {/* Experience */}
        <section className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 space-y-3">
          <h2 className="text-2xl font-semibold">Experience & Resume</h2>
          <p className="text-slate-700 font-semibold">Software Engineer at Wells Fargo (Bangalore) — 2021–2023</p>
          <p className="text-slate-700 mt-1">
            Engineered a Data Warehousing application that generated deal performance reports for 100+ bankers/relationship managers.
            Automated ETL workflows from 7+ source systems using SQL Server and SSIS packages, reducing processing delays by 30%.
            Managed the full data pipeline (ingestion, transformation, reporting) and integrated with Power BI and OBIEE,
            reducing manual reporting time by 60% and improving decision-making for 100+ stakeholders.
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <a
              href="/pranav-portfolio/resume.pdf"
              className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm transition"
            >
              Download Resume (PDF)
            </a>
            {/* <a
              href="https://drive.google.com/file/d/11HmTvebuWhkcBE7DsE3bgQ7grgxRT0cr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm transition"
            >
              Drive - Full CV
            </a> */}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500">
          Portfolio deployed from GitHub repo.
        </footer>

      </div>
    </div>
  );
}
