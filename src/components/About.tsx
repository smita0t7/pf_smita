
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Responsive Design",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 3+ years of experience creating digital experiences 
            that are not only beautiful but also functional and user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Started as a curious student who loved solving problems with code. Over the years, 
            I've worked on various projects ranging from small business websites to complex 
            web applications. I believe in continuous learning and staying up-to-date with 
            the latest technologies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends, contributing to 
            open-source projects, or mentoring aspiring developers in my community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
