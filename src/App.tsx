
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ]

  return (
    <main className="min-h-screen bg-[#080D18] text-[#F8FAFC]">
      <header className="border-b border-white/10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="text-2xl font-bold tracking-[0.2em]"
          >
            CYNNEX
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#94A3B8] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-medium transition-colors hover:bg-[#1D4ED8]"
            >
              Discuss a project ↗
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#B7C3D5] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-[#2563EB] px-5 py-3 text-sm font-medium"
            >
              Discuss a project ↗
            </a>
          </div>
        )}
      </header>

      
<section
  id="home"
  className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:py-32"
>
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    <div className="relative z-10">
      <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
        SOFTWARE · WEB · BUSINESS SOLUTIONS
      </p>

      <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
        Built with purpose.
        <span className="mt-2 block text-[#38BDF8]">
          Designed for progress.
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-[#94A3B8] sm:text-lg">
        We build custom business software and modern web solutions
        that help startups turn ideas into practical digital products
        and businesses work smarter.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[#2563EB] px-6 py-4 text-sm font-semibold transition-colors hover:bg-[#1D4ED8]"
        >
          Discuss a project ↗
        </a>

        <a
          href="#work"
          className="rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-[#F8FAFC] transition-colors hover:border-[#38BDF8]/60"
        >
          Explore our work ↓
        </a>
      </div>

      <p className="mt-12 text-xs font-medium tracking-[0.2em] text-[#64748B]">
        UNDERSTAND THE PROBLEM. BUILD THE RIGHT SOLUTION.
      </p>
    </div>

    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center"
    >
      <div className="absolute inset-[8%] rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className="absolute inset-[8%] rounded-full border border-[#38BDF8]/15" />
      <div className="absolute inset-[17%] rounded-full border border-[#38BDF8]/20" />
      <div className="absolute inset-[27%] rounded-full border border-[#2563EB]/30" />

      <div className="absolute h-[68%] w-[68%] rotate-45 rounded-[2rem] border border-[#38BDF8]/25 bg-gradient-to-br from-[#2563EB]/20 via-[#111827]/40 to-[#38BDF8]/10 shadow-2xl shadow-blue-950/40" />

      <div className="absolute h-[42%] w-[42%] rounded-full bg-gradient-to-br from-[#38BDF8]/80 via-[#2563EB]/60 to-[#111827] opacity-80 blur-sm" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-[#111827]/80 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
        <span className="text-2xl font-bold tracking-[0.15em] text-white">
          CX
        </span>
      </div>

      <div className="absolute right-[14%] top-[23%] h-3 w-3 rounded-full bg-[#38BDF8] shadow-lg shadow-cyan-400/60" />
      <div className="absolute bottom-[22%] left-[16%] h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/60" />
      <div className="absolute bottom-[18%] right-[26%] h-2 w-2 rounded-full bg-white/80" />

      <div className="absolute bottom-[4%] text-center text-[10px] font-medium tracking-[0.25em] text-[#94A3B8] sm:text-xs">
        CONNECTED THINKING. PURPOSEFUL BUILDING.
      </div>
    </div>
  </div>
</section>

<section className="border-t border-white/10 px-6 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
        THE PROBLEM WE SOLVE
      </p>

      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Good businesses deserve better tools.
      </h2>

      <p className="mt-6 text-base leading-8 text-[#94A3B8]">
        When everyday systems get in the way, businesses lose time,
        clarity and opportunities to grow. We build practical digital
        solutions around the way people actually work.
      </p>
    </div>

    <div className="mt-16 grid gap-5 md:grid-cols-3">
      <article className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition-colors hover:border-[#38BDF8]/40">
        <span className="text-sm font-semibold text-[#38BDF8]">
          01 / TIME
        </span>
        <h3 className="mt-6 text-xl font-semibold">
          Repetitive manual work
        </h3>
        <p className="mt-4 leading-7 text-[#94A3B8]">
          Too much time spent on routine tasks that could be simpler
          with the right digital tools.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition-colors hover:border-[#38BDF8]/40">
        <span className="text-sm font-semibold text-[#38BDF8]">
          02 / CLARITY
        </span>
        <h3 className="mt-6 text-xl font-semibold">
          Scattered information
        </h3>
        <p className="mt-4 leading-7 text-[#94A3B8]">
          Important records spread across disconnected files and
          tools, making everyday decisions harder.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition-colors hover:border-[#38BDF8]/40">
        <span className="text-sm font-semibold text-[#38BDF8]">
          03 / EXPERIENCE
        </span>
        <h3 className="mt-6 text-xl font-semibold">
          Outdated digital experiences
        </h3>
        <p className="mt-4 leading-7 text-[#94A3B8]">
          Websites and digital tools that no longer reflect a
          business's needs or serve its customers well.
        </p>
      </article>
    </div>
  </div>
</section>

<section
  id="services"
  className="border-t border-white/10 px-6 py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
          WHAT WE BUILD
        </p>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Digital solutions built around your business.
        </h2>
      </div>

      <p className="max-w-md leading-7 text-[#94A3B8]">
        From your first digital presence to tools that support everyday
        operations, we turn practical needs into purposeful software.
      </p>
    </div>

    <div className="mt-16 grid gap-5 lg:grid-cols-3">
      <article className="group rounded-2xl border border-white/10 bg-[#111827] p-8 transition-colors hover:border-[#38BDF8]/40">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#2563EB]/10 text-xl text-[#38BDF8]">
          ↗
        </div>

        <h3 className="mt-8 text-2xl font-semibold">
          Business websites
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Professional, responsive websites that communicate your
          value, strengthen your online presence and help customers
          connect with your business.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#38BDF8]"
        >
          Discuss your website <span aria-hidden="true">→</span>
        </a>
      </article>

      <article className="group rounded-2xl border border-white/10 bg-[#111827] p-8 transition-colors hover:border-[#38BDF8]/40">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#2563EB]/10 text-xl text-[#38BDF8]">
          ◈
        </div>

        <h3 className="mt-8 text-2xl font-semibold">
          Web applications
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Purpose-built digital experiences for workflows such as
          bookings, registrations, customer management and other
          business needs.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#38BDF8]"
        >
          Discuss an application <span aria-hidden="true">→</span>
        </a>
      </article>

      <article className="group rounded-2xl border border-white/10 bg-[#111827] p-8 transition-colors hover:border-[#38BDF8]/40">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#2563EB]/10 text-xl text-[#38BDF8]">
          ⌘
        </div>

        <h3 className="mt-8 text-2xl font-semibold">
          Custom business software
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Software tailored to specific operational needs, from
          managing records and inventory to organising everyday
          business processes.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#38BDF8]"
        >
          Discuss your solution <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </div>
</section>

<section
  id="work"
  className="border-t border-white/10 px-6 py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
          SELECTED WORK
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
          Ideas in progress. Built with purpose.
        </h2>
      </div>

      <p className="max-w-md leading-7 text-[#94A3B8]">
        We're building a portfolio of practical digital experiences
        that reflect how we think, design and solve problems.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#111827] via-[#14284A] to-[#080D18] p-8">
          <div className="absolute h-64 w-64 rounded-full bg-[#2563EB]/20 blur-3xl" />

          <div className="relative w-full max-w-sm rounded-xl border border-white/15 bg-[#080D18]/80 p-6 shadow-2xl">
            <p className="text-xs tracking-[0.25em] text-[#38BDF8]">
              CYNNEX
            </p>
            <div className="mt-8 h-3 w-3/4 rounded bg-white/80" />
            <div className="mt-3 h-2 w-full rounded bg-white/15" />
            <div className="mt-2 h-2 w-4/5 rounded bg-white/15" />
            <div className="mt-6 flex gap-3">
              <div className="h-8 w-24 rounded-full bg-[#2563EB]" />
              <div className="h-8 w-20 rounded-full border border-white/20" />
            </div>
          </div>

          <span className="absolute bottom-4 right-4 text-xs tracking-widest text-white/50">
            CONCEPT PREVIEW
          </span>
        </div>

        <div className="p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-[#38BDF8]">
              01 / COMPANY
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#94A3B8]">
              In progress
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold">
            Cynnex corporate website
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            A digital home for Cynnex, designed to communicate the
            brand, present its services and help prospective clients
            start meaningful project conversations.
          </p>

          <p className="mt-6 text-sm text-[#64748B]">
            React · TypeScript · Tailwind CSS
          </p>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#111827] via-[#26314B] to-[#080D18] p-8">
          <div className="absolute h-64 w-64 rounded-full bg-[#38BDF8]/10 blur-3xl" />

          <div className="relative w-full max-w-sm rounded-xl border border-white/15 bg-[#080D18]/85 p-6 shadow-2xl">
            <p className="text-xs tracking-[0.25em] text-[#38BDF8]">
              EVENT EXPERIENCE
            </p>
            <div className="mt-8 text-3xl font-semibold leading-tight">
              Bring people
              <span className="block text-[#38BDF8]">together.</span>
            </div>
            <div className="mt-4 h-2 w-full rounded bg-white/15" />
            <div className="mt-2 h-2 w-3/4 rounded bg-white/15" />
            <div className="mt-6 h-9 w-32 rounded-full bg-[#2563EB]" />
          </div>

          <span className="absolute bottom-4 right-4 text-xs tracking-widest text-white/50">
            CONCEPT PREVIEW
          </span>
        </div>

        <div className="p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-[#38BDF8]">
              02 / PORTFOLIO
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#94A3B8]">
              Planned
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold">
            Event website
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            A planned event-focused web experience for presenting
            event details, sharing schedules and helping attendees
            find the information they need.
          </p>

          <p className="mt-6 text-sm text-[#64748B]">
            Responsive design · Event information · Registration concept
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<section
  id="process"
  className="border-t border-white/10 px-6 py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
        HOW WE WORK
      </p>

      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        A clear process. A purposeful result.
      </h2>

      <p className="mt-6 leading-8 text-[#94A3B8]">
        Good software starts with understanding the problem.
        We follow a practical process to keep projects focused,
        transparent and aligned with the intended outcome.
      </p>
    </div>

    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <article className="relative border-t border-[#38BDF8]/40 pt-6">
        <span className="text-sm font-semibold tracking-widest text-[#38BDF8]">
          01
        </span>

        <h3 className="mt-5 text-xl font-semibold">
          Discover
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Understand your business, the people you serve and the
          problem the solution needs to address.
        </p>
      </article>

      <article className="relative border-t border-[#38BDF8]/40 pt-6">
        <span className="text-sm font-semibold tracking-widest text-[#38BDF8]">
          02
        </span>

        <h3 className="mt-5 text-xl font-semibold">
          Plan
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Define the scope, priorities, design direction and
          expectations before development begins.
        </p>
      </article>

      <article className="relative border-t border-[#38BDF8]/40 pt-6">
        <span className="text-sm font-semibold tracking-widest text-[#38BDF8]">
          03
        </span>

        <h3 className="mt-5 text-xl font-semibold">
          Build
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Develop, test and refine the solution against the
          agreed requirements.
        </p>
      </article>

      <article className="relative border-t border-[#38BDF8]/40 pt-6">
        <span className="text-sm font-semibold tracking-widest text-[#38BDF8]">
          04
        </span>

        <h3 className="mt-5 text-xl font-semibold">
          Deliver
        </h3>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          Prepare the solution for launch, walk through the result
          and discuss any ongoing support needed.
        </p>
      </article>
    </div>
  </div>
</section>

      {/* About Cynnex */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
              ABOUT CYNNEX
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Small beginnings.
              <span className="block text-[#38BDF8]">
                Serious intent.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#B7C3D5]">
              Cynnex is a founder-led technology company built around a
              simple idea: useful technology starts with understanding
              people and the problems they need to solve.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#94A3B8]">
              We focus on building practical business software and
              thoughtful web experiences that help turn ideas into
              useful digital solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#38BDF8]">
              OUR MISSION
            </p>

            <p className="mt-5 text-lg leading-8 text-[#F8FAFC]">
              To help businesses solve real operational challenges and
              pursue growth through practical, reliable software and
              well-designed digital experiences.
            </p>

            <div className="mt-9 border-t border-white/10 pt-7">
              <h3 className="text-lg font-semibold">What guides us</h3>

              <ul className="mt-5 space-y-4">
                {[
                  ['Integrity', 'Be honest, transparent and dependable.'],
                  ['Customer understanding', 'Solve the real problem, not just the obvious one.'],
                  ['Engineering excellence', 'Build thoughtfully, test carefully and keep improving.'],
                  ['Accountability', 'Take responsibility for the work and its quality.'],
                  ['Continuous learning', 'Keep learning, adapting and growing.'],
                ].map(([value, description]) => (
                  <li key={value} className="flex gap-3">
                    <span className="mt-1 text-[#38BDF8]">↗</span>
                    <div>
                      <p className="font-medium text-[#F8FAFC]">{value}</p>
                      <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cynnex */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#38BDF8]">
              LET'S TALK
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Have an idea worth building?
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#94A3B8]">
              Tell us what you're working on. Let's explore the problem
              and figure out a practical next step.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827] p-6">
              <p className="text-sm font-semibold text-[#38BDF8]">
                NOT SURE WHERE TO START?
              </p>
              <p className="mt-3 leading-7 text-[#B7C3D5]">
                You don't need a complete plan. Start by explaining
                the challenge, idea or opportunity you have in mind.
              </p>
            </div>
          </div>

          <form
            className="space-y-6 rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault()
              alert('Contact form setup is coming next. Your details have not been sent.')
            }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-[#080D18] px-4 py-3 text-[#F8FAFC] outline-none transition focus:border-[#38BDF8]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#080D18] px-4 py-3 text-[#F8FAFC] outline-none transition focus:border-[#38BDF8]"
              />
            </div>

            <div>
              <label htmlFor="business" className="mb-2 block text-sm font-medium">
                Business or organisation
                <span className="ml-2 text-[#64748B]">(optional)</span>
              </label>
              <input
                id="business"
                name="business"
                type="text"
                placeholder="Your business name"
                className="w-full rounded-lg border border-white/10 bg-[#080D18] px-4 py-3 text-[#F8FAFC] outline-none transition focus:border-[#38BDF8]"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium">
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-lg border border-white/10 bg-[#080D18] px-4 py-3 text-[#F8FAFC] outline-none transition focus:border-[#38BDF8]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Business website">Business website</option>
                <option value="Web application">Web application</option>
                <option value="Custom business software">Custom business software</option>
                <option value="Other enquiry">Other enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What problem are you trying to solve?"
                className="w-full resize-y rounded-lg border border-white/10 bg-[#080D18] px-4 py-3 text-[#F8FAFC] outline-none transition focus:border-[#38BDF8]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2563EB] px-6 py-4 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#111827]"
            >
              Send enquiry ↗
            </button>

            <p className="text-xs leading-5 text-[#94A3B8]">
              Contact form delivery will be connected before launch.
              Submitting this preview will not send your information.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <a
                href="#home"
                className="text-2xl font-bold tracking-[0.2em]"
              >
                CYNNEX<span className="text-[#38BDF8]">.</span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#94A3B8]">
                Software That Moves Business Forward.
                Practical digital solutions, built with purpose.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F8FAFC]">
                Explore
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-[#94A3B8]">
                <li>
                  <a className="transition hover:text-[#38BDF8]" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-[#38BDF8]" href="#work">
                    Our work
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-[#38BDF8]" href="#about">
                    About Cynnex
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-[#38BDF8]" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="max-w-xs">
              <h3 className="text-sm font-semibold text-[#F8FAFC]">
                Built with purpose.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                Thoughtful software for real business challenges.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex font-medium text-[#38BDF8] transition hover:text-white"
              >
                Discuss a project ↗
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Cynnex-es. All rights reserved.
            </p>
            <a
              href="#home"
              className="transition hover:text-[#38BDF8]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}

export default App
