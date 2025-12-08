import { getCollection, type CollectionEntry } from "astro:content";

export async function getExperience() {
  const jobs = await getCollection("experience");
  
  return jobs.sort((a: CollectionEntry<'experience'>, b: CollectionEntry<'experience'>) => {
    const dateA = a.data.current ? new Date().getTime() + 100000 : a.data.endDate?.getTime() ?? a.data.startDate.getTime();
    const dateB = b.data.current ? new Date().getTime() + 100000 : b.data.endDate?.getTime() ?? b.data.startDate.getTime();
    return dateB - dateA;
  });
}

export async function getFeaturedProjects() {
  const projects = await getCollection("projects", ({ data }: { data: CollectionEntry<'projects'>['data'] }) => {
    return data.featured === true;
  });

  return projects.sort((a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
}