"use client";

import { ProjectCard } from "@/components/project-card";
import { ProjectPreviewModal, ProjectPreviewData } from "@/components/project-preview-modal";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<ProjectPreviewData | null>(null);

  const totalProjects = DATA.projects.length;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PROJECTS_PER_PAGE, totalProjects);
  const currentProjects = DATA.projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smoothly scroll to top of projects section
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">My Projects</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve worked on a variety of projects, from simple websites to complex web
              applications. Click any project to view its screenshots and details.
            </p>
          </div>
        </div>

        {/* Project Grid (Only current page items are rendered to keep DOM & network light) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={"video" in project ? (project.video as string) : undefined}
              links={project.links}
              onPreview={() =>
                setSelectedProject({
                  title: project.title,
                  href: project.href,
                  description: project.description,
                  dates: project.dates,
                  tags: project.technologies,
                  image: project.image,
                  images: "images" in project ? (project.images as readonly string[]) : undefined,
                  video: "video" in project ? (project.video as string) : undefined,
                  links: project.links,
                })
              }
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/50 max-w-[800px] mx-auto w-full">
            <p className="text-xs text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-foreground">{endIndex}</span> of{" "}
              <span className="font-semibold text-foreground">{totalProjects}</span> projects
            </p>

            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ChevronLeft className="size-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0 text-xs font-medium"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* On-Demand Lazy Loaded Modal: unmounted until selectedProject is active */}
      {selectedProject && (
        <ProjectPreviewModal
          key={selectedProject.title}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
