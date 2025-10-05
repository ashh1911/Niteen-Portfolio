import { ExternalLink, Mail, BookOpen, Award, GraduationCap, Download, Youtube, Trophy, Users } from 'lucide-react';
import ContactForm from './components/ContactForm';
import NavigationDrawer from './components/NavigationDrawer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <NavigationDrawer />

      {/* Hero Section */}
      <header id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
                <div>
                  <div className="text-emerald-400 font-medium tracking-wide text-sm uppercase">Niteen Kumar</div>
                  <div className="text-slate-400 text-sm">Computational Neuroscience & Applied Mathematics</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Bridging Theory &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Computation</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                Advancing our understanding of complex dynamical systems through rigorous mathematical analysis and computational modeling in neuronal physiology.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://scholar.google.com/citations?user=1AVHRmMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://orcid.org/0000-0003-0960-0136"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-slate-700"
            >
              <Award className="w-5 h-5" />
              ORCID
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://mox.polimi.it/people/people-details/?id_staff=100114&nome_staff="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-slate-700"
            >
              Institution Profile
              <ExternalLink className="w-4 h-4" />
            </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/Niteen.png"
                    alt="Niteen Kumar - Professor of Computational Neuroscience and Applied Mathematics"
                    className="w-64 h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Research Overview */}
        <section id="research-overview" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Research Overview</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am a professor of computational neuroscience and applied mathematics, with research spanning dynamical systems theory, numerical modeling, and their applications to neuronal physiology. My work focuses on developing and analyzing extended neuron models.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              My broader research interests include bifurcation and stability analysis of nonlinear systems, optimal control of neuronal spiking, and state estimation in complex dynamical models using advanced filtering techniques. I also investigate coupled PDE–ODE formulations in transport processes, dispersion phenomena, and numerical methods for Helmholtz-type equations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/SACMS_Part_B2_Researcher_CV.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Research Focus Areas */}
        <section id="research-focus" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Research Focus</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 md:p-10 border border-slate-100 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dr. Niteen Kumar's research lies at the intersection of computational mathematics, neutron transport modeling, and neuroscience-inspired dynamical systems. His work focuses on developing and improving the <strong>Nodal Integral Method (NIM)</strong> and <strong>Jacobian-Free Newton–Krylov (JFNK)</strong> solvers for nonlinear and multiscale systems.
            </p>
            <p className="text-slate-700 mb-4 font-semibold">Current themes include:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multiscale Numerical Schemes</h3>
              <p className="text-slate-700 leading-relaxed">
                Multiscale-capable numerical schemes for hyperbolic and wave equations with applications to complex physical systems.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Positivity-Preserving Methods</h3>
              <p className="text-slate-700 leading-relaxed">
                Positivity-preserving Modified Patankar Runge–Krylov (MPRK) methods for reactor kinetics and nonlinear systems.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl p-8 border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preconditioning Strategies</h3>
              <p className="text-slate-700 leading-relaxed">
                Preconditioning strategies and matrix-free solvers for improving computational efficiency in large-scale systems.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-sky-50 to-slate-50 rounded-xl p-8 border border-sky-100 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Domain Decomposition</h3>
              <p className="text-slate-700 leading-relaxed">
                Domain decomposition–based nodal integration techniques for large-scale problems in fluid and wave propagation.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8 border border-violet-100 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300 hover:-translate-y-1 md:col-span-2">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">PDE–ODE Coupled Systems</h3>
              <p className="text-slate-700 leading-relaxed">
                Dispersion correction and wavefield modeling for stability and accuracy in PDE–ODE coupled systems across multiscale environments.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Collaborative Research Network</h3>
            <p className="text-slate-700 leading-relaxed">
              Through collaborations with <strong>Prof. Martin J. Gander</strong> (University of Geneva), <strong>Prof. Andreas Meister</strong> (University of Kassel), and <strong>Dr. Prashant Sharan</strong> (Los Alamos National Laboratory), his work advances the numerical analysis of complex physical systems—from fluid and wave propagation to dynamical stability in multiscale environments.
            </p>
          </div>
        </section>

        {/* Achievement Gallery */}
        <section id="achievements" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Achievements & Recognition</h2>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pioneering Research at IIT Bombay</h3>
                  <p className="text-slate-700 leading-relaxed">
                    First researcher in his department at IIT Bombay to initiate preconditioning-based improvements to the Nodal Integral Method.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Novel Numerical Algorithms</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Developed two novel numerical algorithms during his Ph.D., resulting in multiple publications in <em>Progress in Nuclear Energy</em>, <em>Computers & Mathematics with Applications</em>, and <em>Pure and Applied Geophysics</em>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">International Postdoctoral Research</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Served as Postdoctoral Fellow at both IIT Bombay and the University of Geneva, contributing to multiscale modeling and domain decomposition research.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Visiting Faculty, University of Kassel</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Taught Numerical Solution of Partial Differential Equations and co-developed the MPRK solver for point reactor kinetics at University of Kassel, Germany.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Resource Group Member</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Member, Technical Resource Group, Solar Decathlon India (2021–2024) — mentoring university teams on solar-powered building design.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">International Travel Awards</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Recipient of multiple Government of India travel grants (DST) to present at international conferences in Turkey, France, Czech Republic, and Iceland.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">MHRD Fellowship</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Awarded Integrated M.Sc.–Ph.D. Fellowship by MHRD, India, recognizing academic excellence and research potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Keynote Speaker</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Keynote Speech, International Seminar on Indian Trade: Status and Recent Trends (2021).
                  </p>
                  {/* Watch Presentation Button */}
                   <a
                href="https://www.youtube.com/live/FDfUlS1tYPU?si=mDFFtEcMOal6FACU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-slate-200"
              >
                <Youtube className="w-5 h-5 text-red-600" />
                Watch Presentation
                <ExternalLink className="w-4 h-4" />
              </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Expertise</h3>
                  <p className="text-slate-700 leading-relaxed">
                    12+ years of experience in numerical modeling, simulation, and scientific computation using MATLAB, Python, C/C++, and Fortran.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-amber-100 shadow-lg shadow-amber-100/50">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0">
                <Trophy className="w-9 h-9 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Team Shunya - The Energy Specialists</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Co-founder of Team Shunya (IIT Bombay) — represented India in Solar Decathlon Europe 2014 (Paris) and Solar Decathlon China 2018 (Dezhou), achieving international recognition for sustainable housing innovation. Featured in prestigious publications for groundbreaking work in zero-energy solar-powered architecture.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-amber-700 border border-amber-200">
                  <Award className="w-4 h-4" />
                  Solar Decathlon International Recognition
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/WhatsApp Image 2025-10-03 at 18.16.36_90e9c18b.jpg"
                alt="Team Shunya - The Energy Specialists featured in publication showcasing sustainable housing innovation"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium opacity-90">
                  Team Shunya members at IIT Bombay, featured in "The Energy Specialists"
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-amber-200">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Project Highlight:</strong> Designed a zero-energy, solar-powered house that addresses India's growing energy and housing demands. The innovative POWERHOUSE project integrates sustainable design principles with cutting-edge solar technology, earning recognition at the Solar Decathlon in Versailles, France.
              </p>
            </div>
          </div>
        </section>

        {/* Teaching & Mentorship */}
        <section id="teaching" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Teaching & Mentorship</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 shadow-lg shadow-slate-300/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
                <GraduationCap className="w-4 h-4" />
                Academic Philosophy
              </div>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                I am deeply engaged in teaching and mentorship, guiding students in applied mathematics, dynamical systems, and computational neuroscience.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                I emphasize bridging theoretical foundations with practical implementation, encouraging students to develop both analytical insight and computational proficiency.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-center md:text-left">
              <p className="mb-2">Professor of Computational Neuroscience & Applied Mathematics</p>
              <p className="text-sm text-slate-500">Advancing the frontiers of dynamical systems and neuronal modeling</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://scholar.google.com/citations?user=1AVHRmMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="https://orcid.org/0000-0003-0960-0136"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="ORCID"
              >
                <Award className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="https://mox.polimi.it/people/people-details/?id_staff=100114&nome_staff="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Institution Profile"
              >
                <ExternalLink className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
