import { caseStudies } from "./caseStudies.js";

export const SITE_URL = "https://gulumawakuma.github.io";
export const SITE_NAME = "Guluma Wakuma";

export const defaultMeta = {
  title: "Guluma Wakuma | Full-Stack & iOS Software Engineer",
  description:
    "Guluma Wakuma — Full-Stack & iOS Software Engineer in Addis Ababa, Ethiopia. Building scalable web apps, native iOS products, and clean APIs with React, Node.js, and Swift.",
  image: `${SITE_URL}/hero.jpg`,
  imageAlt: "Guluma Wakuma — Full-Stack & iOS Software Engineer",
  url: `${SITE_URL}/`,
};

export const caseStudiesIndexMeta = {
  title: `Case Studies | ${SITE_NAME}`,
  description:
    "Deep dives into flagship projects by Guluma Wakuma — problem, approach, challenges, outcomes, and tech stack.",
  image: `${SITE_URL}/hero.jpg`,
  imageAlt: "Guluma Wakuma case studies",
  url: `${SITE_URL}/case-studies`,
};

export function getCaseStudyMeta(slug) {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return null;

  const image = study.image.startsWith("http")
    ? study.image
    : `${SITE_URL}${study.image.startsWith("/") ? study.image : `/${study.image}`}`;

  return {
    title: `${study.title} Case Study | ${SITE_NAME}`,
    description: study.summary,
    image,
    imageAlt: `${study.title} — ${study.subtitle}`,
    url: `${SITE_URL}/case-studies/${study.slug}`,
  };
}

export function getStaticMetaPages() {
  return [
    { file: "case-studies/index.html", meta: caseStudiesIndexMeta },
    ...caseStudies.map((study) => ({
      file: `case-studies/${study.slug}/index.html`,
      meta: getCaseStudyMeta(study.slug),
    })),
  ];
}
