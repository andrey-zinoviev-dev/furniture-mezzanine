import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageStub } from "@/components/page-stub";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageStub
      route={{
        href: `/projects/${project.slug}/`,
        title: project.title,
        kind: "case",
        kindLabel: "Кейс",
        description: project.summary,
      }}
    />
  );
}
