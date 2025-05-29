
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Parking System Management",
      description: "It is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed to streamline and manage parking slot bookings efficiently. The system allows users to view available parking slots, book a slot in real-time, and update or cancel their bookings, while the admin can manage all parking data.This project offers a modern solution to reduce parking chaos and ensure better space utilization in parking areas.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUvI89APn_pLT65QWIOGN2oH3lfresyhWgQ&s",
      tags: ["React", "axios", "CSS", "React-router-DOM", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      liveUrl: "https://parking-system-j82e.onrender.com",
      githubUrl: "https://github.com/smita0t7/parking_system"
    },
    {
      title: "Lyrics Founder using React",
      description: "is a modern React-based web application that allows users to search and find lyrics of their favorite songs in just a few clicks. By integrating with a lyrics API (like Lyrics.ovh or Musixmatch), the app provides a seamless way to explore song lyrics by entering the song title or artist name.It’s designed to be minimal, user-friendly, and responsive, offering a smooth experience across all devices.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA4VBMVEX+/P7//f/+/f5zcnXi4eL7+vudrLqbmZuTkpORo7T6+PrW1dfp6Or+///v7e6nrbTKycr5laLydobb2tvExMfT0NHvztH+9ffem6L+7e/yxMr6w8v9ydHzqrL+3uPlsLN6enzUaHLz5eX75enmp6761trtbXvlgoz/0tn12dzNx9C5tsJfX2Kgn6XXdH7/5enmdYH6gI76bYD/kZ74p7Hei5L/mqj8Z3v/u8Tll5/7g5Hoforcgouysb1CREm9rbbn2+Gto6e1tLXT2OG/tbXJ2O4Ah9GKvOCIqsmEkZ6Tp7r7WkEsAAAEF0lEQVR4nO3dj3vSOBgH8Oa1FaRJCaQ9xG3cbnMDZQycbO5uu3P29PT8//+gS/klZdPro+BLyvczN1gbWfi+SVrKfPQeQVGegqI8ANhxSkxuiGZ3PFosDuLLGkHCNiCG7m0R8n5pKWGp1tOWIqFItZ/t7R90lLLh/GpvPEHCo0jKwyQSvGkJPt4kmd+GtbY6ah93nntHx62Ttto/bTQOOsfHnjrq9tovvKNhi9TLfv1s0Lcji7O/vGxW58OT0f7o1cXr0cFps9Ecq/1mo3N5dfpmfHB6cT2ymy72lM3q7LDfp12ehVlWHe/3N9d2BJ3/MT7ZazbUs5te6/aq2+k2r7tXzdfjm6Gdji//PPvrbZ+7u6xItboXN3vn7ae99q0dXY3mlepdKnU5vhze9kbNXvfVdTfLSt4N3t3dcU8DZkoF6vlY0ezc2C702aJOkw32k+yCnx0MSRz6insKEj+7sk9ul/riTWKhafcmX0R2YOTFW6gZ2vG5lbfummxJkTdCFJtAKlvt6asv9HPKmpYIBpUCqqEN6t/HRdQV1XKCoCwT2U8LjZWqzepxoZZ1ZcIco7mf45oImerAHsuC6UFNZH9sLKsv7yZZDVSUNaXFtLXTTeTXJ6LAZhXlhcHPfEabY7OK08iPQ2m0rIWRL31jZKW2EtYkq3qUxrZJGBhfGRPZeybyo1xYi6z+lnZXRpYqq3dxrE2iYx35Rus0jsP3VaMeyGpAYZz6dZnaeZsmSRqHyfs0zV3AnWf14Z+PshJbuiKjpCRZkUwHQRjKxNihJaNQa2N8U63Rg+PKhqrDmtGpCn2ttfQTnU91nlX90weZVgbVOE3DnzGuih2gf5DNKry3MQhp9fSgaj8H87+TyOVHyDWdZSVbufVqnT1+yMZrMWXnU3APrW6YHQdne9W9/UtsVjKvLHPQCyrVIpLs/Orzk//3ua5qK1lFZTm/EoWHedGWtPpSoCxR7aZvrSEu2mBUIvLLpbbJsNZ69YwfVjkAhzC+j+sa7lIBAAAAAACsFfcFJIdwlwoAoDDuC2gO4S4VAAAAAOww7pNhh3CXCgAAAAAACtjKM3e8xQsA8EO4Lwo5hLtUTuEulkO4SwUAAABQOtz/GMEh3KUC2Hnci4BDuEsFJbWVV2W2slMAAAAAAAAAAABQFty/LOcQ7lI5hfuNJIdwl8op3MVyCHepAHbe9/4njzsIa3tx3MMaAAAAAAAAmHC/OeIQ7lIBABTGvWA6hLtUAACwAdwHF4dwlwoAADaA+5dPHMJdKgAAAIDS2corDVvZqaxblH2Q9+VDLH9zf6tYbi2ys9nZ1qW20ybTRxeLO/MmYv5wYrpncWfeNvcj6OGe0fJP+3o3lx4313a1DyvdFPM9uSZQFM9gBgD4DtwXhRzyH2ukpQHvF6qoAAAAAElFTkSuQmCC",
      tags: ["React", "axios", "css", "React-router-DOM"],
      liveUrl: "#",
      githubUrl: "https://github.com/smita0t7/react_project/tree/main/lyrics-finder"
    },
    {
      title: "Movie App using React",
      description: " is a sleek and interactive web application that allows users to browse, search, and explore information about movies. It fetches data from a public movie API (like OMDb or TMDB) and displays movie posters, titles, release dates, and other details in a clean and organized layout.The app is built using modern React features, offering a fast, responsive user experience with intuitive navigation and dynamic content rendering.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20231012180555/Screenshot-from-2023-10-12-18-04-13.jpg",
      tags: ["React", "Axios", "React-router-Dom", "Redux"],
      liveUrl: "#",
      githubUrl: "https://github.com/smita0t7/react_project/tree/main/movie-app"
    },
    {
      title: "Password Verification using React ",
      description: "It is a responsive and user-friendly web application that allows users to enter and verify passwords securely in real-time. The main goal of this project is to demonstrate client-side password validation using modern React features like functional components and hooks.Users must enter a password and confirm it. The app instantly checks if both inputs match and provides visual feedback, ensuring the user enters the correct password before proceeding.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230620115036/gfg.gif",
      tags: ["React", "Javascript", "CSS", "Tost notification"],
      liveUrl: "#",
      githubUrl: "https://github.com/smita0t7/react_project/tree/main/password-verification"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
