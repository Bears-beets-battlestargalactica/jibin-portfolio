export default function SectionPopup({ zone }) {
    const content = {
      about: "👋 Welcome to Jibin’s Portfolio! Use arrow keys to explore.",
      education: "🎓 Studied CS at OSU and APJ Abdul Kalam Tech University",
      skills: "💻 Fluent in Python, C++, Docker, React, ML, Zeek",
      projects: "🚀 Built pith detection, IDS pipelines & privacy ML",
      experience: "💼 TA at OSU | Intern at NeoITO | Analyst at ORTSOC",
      contact: "📬 Drop a message or email: jibinjithinyesudas@gmail.com",
    };
  
    return (
      <div className="fixed bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded shadow-lg text-sm w-[300px] z-50">
        {content[zone]}
      </div>
    );
  }
  