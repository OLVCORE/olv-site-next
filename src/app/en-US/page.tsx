// English page version
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { Locale, i18n } from '@/i18n';

export default function HomePage() {
  const locale = 'en-US' as Locale;
  
  return (
    <MainLayout locale={locale}>
      <div className="container mx-auto py-12">
        <section className="hero-section mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Integrating Strategy, Operations and Results
              </h1>
              <p className="text-xl mb-6">
                35 years integrating strategy, operations, and results. We are specialists in Supply Chain, Foreign Trade, International Logistics and Business Development.
              </p>
              <p className="text-lg mb-6">
                We act as the consulting arm of the OLV Ecosystem, offering complete support for companies that want to import, export, expand their business, operate safely and with high performance in the global market.
              </p>
              <p className="text-lg mb-8">
                Our mission is to simplify complex operations, accelerate business and integrate strategies with results. We act as an extension of your business, without our own assets, focusing exclusively on delivering value.
              </p>
              <p className="text-lg font-semibold">
                From SISCOMEX Radar to Shipping. From Strategy to Execution. From Bureaucracy to Results.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/images/hero-banner.jpg" 
                  alt="OLV Internacional – Banner Hero"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pillars-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Operating Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Legally Compliant Operations",
                description: "Conducting import and export processes within Brazilian and international regulations."
              },
              {
                title: "Structured Tax Reduction",
                description: "Strategic tax planning to reduce tax burden in foreign trade operations."
              },
              {
                title: "Integrated Logistics Planning",
                description: "Complete organization of international logistics flow, from origin to destination."
              },
              {
                title: "Strategic Planning",
                description: "Structuring international operations for Brazilian companies."
              },
              {
                title: "Total Monitoring",
                description: "End-to-end management of operational stages, from negotiation to final delivery."
              },
              {
                title: "Risk Management",
                description: "Identification, prevention and mitigation of customs, exchange, logistics and contractual risks."
              },
              {
                title: "Business Development",
                description: "Structuring offers, defining channels and opening new markets abroad."
              },
              {
                title: "Compliance and Governance",
                description: "Structuring compliance and governance models for the National and International market."
              },
              {
                title: "Applied Automation and Technology",
                description: "Use of intelligent digital platforms to simulate, integrate and optimize international operations with artificial intelligence and public data."
              },
              {
                title: "Customized Project Consulting",
                description: "Custom diagnosis with practical solutions directed to the reality of each client, without fixed structures or rigid packages."
              },
              {
                title: "Market Intelligence and Data Analysis",
                description: "Use of private and governmental data (Comex Stat, Federal Revenue, SIASG, etc.) for strategic decision making."
              },
              {
                title: "Capacity Building and Technical Training for SMEs",
                description: "Training, mentoring and technical support for internal teams of companies that wish to internalize Comex and Supply Chain skills."
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="solutions-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Strategic Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Strategic Foreign Trade Consulting</h3>
              <p className="mb-4">
                In-depth analysis of scenarios, structuring of international operations and design of customized strategies for each company profile. We develop complete roadmaps for safe, efficient and scalable internationalization.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Feasibility analysis for target markets
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Structuring global business models
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  International strategic planning
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                See more solutions →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Operational Solutions for Export and Import</h3>
              <p className="mb-4">
                Complete management of all operational foreign trade processes, from qualifications and registrations to foreign exchange closing, documentation and customs clearance, with a focus on compliance and efficiency.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  SISCOMEX Radar qualification and maintenance
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Complete import and export operations
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Document management and parameterization analysis
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                See more solutions →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Integrated Supply Chain Management</h3>
              <p className="mb-4">
                Planning and optimization of the entire international supply chain, from supplier identification to final customer delivery, focusing on cost reduction, risk minimization and increased efficiency.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Integrated management of global suppliers
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Optimization of international logistics flows
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Inventory control and demand planning
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                See more solutions →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Technology Applied to Competitiveness</h3>
              <p className="mb-4">
                Implementation of technological solutions that automate processes and generate strategic insights for data-based decision making. Our approach combines technological tools with human expertise.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Automation of foreign trade processes
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Integration of global systems and platforms
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Data analysis and market intelligence
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                See more solutions →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Compliance and Governance</h3>
              <p className="mb-4">
                Implementation of compliance and corporate governance structures adapted to international operations, ensuring compliance with local and international laws, reducing regulatory and reputational risks.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Structuring international compliance programs
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Adaptation to FCPA, UK Bribery Act and local legislation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Risk management in multinational operations
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                See more solutions →
              </Link>
            </div>
          </div>
        </section>

        <section className="human-factor-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Human Factor</h2>
          <p className="text-lg text-center mb-8">
            Our approach is based on the combination of technical expertise with emotional intelligence. We believe that behind every operation there are people, and understanding their needs is essential to deliver exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Human Expertise</h3>
              <p>Our multidisciplinary team combines technical knowledge with interpersonal skills to build trust relationships and deliver personalized solutions.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Long-term Partnership</h3>
              <p>We are not just service providers, but strategic partners committed to sustainable growth and the continued success of our clients.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-3">Cultural Sensitivity</h3>
              <p>We understand the cultural nuances of different markets and facilitate communication and negotiation in diverse international environments.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}