import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-bs_background">
      <header className="bg-text text-white py-6 px-4 md:px-6
      bg-gradient-to-r from-bs_primary to-bs_secondary
      ">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <span className="text-lg font-bold">studiosuede</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="hover:underline text-sm" href="#curriculum">
              Curriculum
            </Link>
            <Link className="hover:underline text-sm" href="#">
              About Me
            </Link>
            {/* <Link
              className="inline-flex text-sm h-9 items-center justify-center rounded-md bg-bs_accent px-4 py-2 font-medium text-white shadow transition-colors hover:bg-bs_primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
              >
              Start Learning
            </Link> */}
          </nav>
         
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-bs_background text-white py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-4 ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                studiosuede: Synthesis 101 and Intro into Sound Design
              </h1>
              <p className="text-gray-400 text-lg">
                Gain a foundational understanding of synthesis and sound design through my text-based course using examples from popular music.
              </p>
              <div className="flex gap-4">
                {/* <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-bs_accent px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-bs_secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Enroll Now
                </Link> */}
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-bs_accent px-4 py-2 text-sm font-medium text-bs_accent shadow-sm transition-colors hover:bg-bs_accent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#curriculum">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What You&apos;ll Learn</h2>
              <ul className="grid grid-cols-2 gap-4 list-disc">
                <li className="flex items-center gap-2">
                  {/* custom circle */}
                  <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>Synthesis and Sound Design Basics</span>
                </li>
                <li className="flex items-center gap-2">
                <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>Sampling Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>How a Drum Machine Works</span>
                </li>
                <li className="flex items-center gap-2">
                <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>Genre Definition and Characteristics</span>
                </li>
                <li className="flex items-center gap-2">
                <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>Music Theory 101</span>
                </li>
                <li className="flex items-center gap-2">
                <div className="min-w-2 h-2 bg-bs_accent rounded-full"/>
                  <span>and some creative applications for what you&apos;ll learn!</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-bs_primary to-bs_secondary">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-white" id="curriculum">Course Curriculum</h2>
              <p className="text-gray-200 text-lg">
                Explore the comprehensive curriculum of our modern synthesis and sound design course.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Introduction to Synthesis</h3>
    <p className="text-gray-300">
      Discover the essentials of synthesis: oscillators, filters, envelopes, and LFOs. Learn how these elements combine to create sound and explore different synthesis types: subtractive, additive, FM, and wavetable.
    </p>
  </div>

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Basics of Sound Design</h3>
    <p className="text-gray-300">
      Master sound design principles, including sampling techniques, applying audio effects, and various methods of audio processing to shape and enhance your sounds effectively.
    </p>
  </div>

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Sampler Fundamentals</h3>
    <p className="text-gray-300">
      Dive deep into the art of sampling: explore its historical background, understand its key components, and learn various techniques for manipulating and integrating samples into your music.
    </p>
  </div>

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Drum Machine Fundamentals</h3>
    <p className="text-gray-300">
      Gain comprehensive knowledge of drum machines, from their history and anatomy to programming techniques and the diverse styles they can produce, enhancing your rhythmic creations.
    </p>
  </div>

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Understanding Genre in Music Production</h3>
    <p className="text-gray-300">
      Explore the concept of genre in music production, delving into the characteristics of popular electronic music genres through detailed case studies and practical examples.
    </p>
  </div>

  <div className="bg-bs_background text-white p-4 rounded-lg">
    <h3 className="text-xl font-bold">Music Theory Fundamentals</h3>
    <p className="text-gray-300">
      Learn the basics of music theory, covering essential topics such as pitch, melody, harmony, chord progressions, rhythm, meter, and the structural elements that form the foundation of musical compositions.
    </p>
  </div>

</div>

          </div>
        </section>
        <section className="bg-bs_background text-white py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6 space-y-8 flex justify-between items-center flex-wrap">
    <h2 className="text-3xl font-bold md:text-5xl  px-2">About Me</h2>
    <p className="text-xl max-w-[800px]  px-2">
      I built this course to learn the basics of synthesis and sound design. I wanted to share my knowledge with others who are interested in music production and sound design. Currently, the course is still in progress. Once I achieve my main goal of getting a job, I&apos;ll be able to fully dedicate my time to finishing and launching it. I hope you enjoy the course and learn something new!
    </p>
    
  </div>
</section>

      </main>
      <footer className="bg-bs_primary text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
       <p>
        Created by love by <a href="#" className="text-white">blusuede</a>
       </p>
        </div>
      </footer>
    </div>)
  );
}

function AudioWaveformIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
    </svg>)
  );
}


function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function BrushIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path
        d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>)
  );
}


function EqualIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>)
  );
}


function HeadphonesIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>)
  );
}


function KeyboardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 8h.01" />
      <path d="M12 12h.01" />
      <path d="M14 8h.01" />
      <path d="M16 12h.01" />
      <path d="M18 8h.01" />
      <path d="M6 8h.01" />
      <path d="M7 16h10" />
      <path d="M8 12h.01" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MonitorSpeakerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5.5 20H8" />
      <path d="M17 9h.01" />
      <rect width="10" height="16" x="12" y="4" rx="2" />
      <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <circle cx="17" cy="15" r="1" />
    </svg>)
  );
}


function Music2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>)
  );
}
