import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "ShareDoku",
        description:"Description for Sharedoku",
        image: "/projects/sharedoku.png",
        tags: ["Php", "PostgreSQL", "Javascript", "HTML", "CSS"],
        link: "#",
        github: "#"
    }
]
export const Projects = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Bg Glows (Accents) */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/8 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Description of what the projects section is about
                    </p>
                </div>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                        key={idx}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden apsect-video">
                            <img
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110  "
                            >
                            </img>
                            <div
                                className="absolute inset-0
                                bg-linear-to-t from-card via-card/500
                                to-transparent opacity-60"
                            />
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href={project.link} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-background transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={project.github} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-background transition-all"
                                >
                                    <Github className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                        {/* Content */}
                        <div>
                            <div></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};