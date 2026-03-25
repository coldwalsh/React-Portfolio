import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "ShareDoku",
        description: "A real-time collaborative Sudoku platform where users can solve puzzles together. Features live board sync, user sessions, and a PostgreSQL-backed puzzle engine.",
        image: "/projects/sharedoku.png",
        tags: ["PHP", "PostgreSQL", "JavaScript", "HTML", "CSS"],
        link: "ec2-13-217-198-14.compute-1.amazonaws.com",
        github: "#",
        featured: true,
    },
    {
        title: "Dev Portfolio",
        description: "This very site — a personal portfolio built with React and Tailwind CSS, featuring glassmorphism UI, animated sections, and a dark orange color scheme.",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "Vite"],
        link: "#",
        github: "https://github.com/coldwalsh/React-Portfolio.git",
        featured: false,
    },
    {
        title: "Project Three",
        description: "A brief description of another project you've built. Highlight the problem it solves and the key technologies involved.",
        image: "/projects/project3.png",
        tags: ["Java", "AWS", "PostgreSQL"],
        link: "#",
        github: "#",
        featured: false,
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/8 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of things I've built — from full-stack web apps to systems projects.
                        Each one taught me something new.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all duration-300"
                                        title="Live Demo"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all duration-300"
                                        title="View on GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1 gap-4">
                                {/* Title + inline links */}
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <a
                                            href={project.github}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                            title="GitHub"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.link}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                            title="Live Demo"
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-14 animate-fade-in animation-delay-400">
                    <a
                        href="https://github.com/coldwalsh"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
                    >
                        View all projects on GitHub
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
