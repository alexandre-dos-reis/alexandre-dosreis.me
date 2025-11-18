const handleTechStack = () => {
  const techStack = document.querySelector<HTMLDivElement>("#tech-stack");

  if (!techStack) return null;

  const categoriesList = techStack.querySelector<HTMLUListElement>(
    "#tech-stack-categories",
  )!;

  const selectedCn = (categoriesList.dataset.styleSelected || "").split(" ");
  const unselectedCn = (categoriesList.dataset.styleUnselected || "").split(
    " ",
  );

  const technoList = techStack.querySelector<HTMLUListElement>(
    "#tech-stack-technologies",
  )!;

  const categories = Array.from(
    techStack.querySelectorAll<HTMLLIElement>("[data-category]"),
  );

  const technologies = Array.from(technoList.children) as Array<HTMLLIElement>;

  categories.forEach((c) => {
    const category = c.textContent;
    c.addEventListener("click", () => {
      // update button style
      categories.map((c) => c.classList.remove(...selectedCn));
      categories.map((c) => c.classList.add(...unselectedCn));

      c.classList.remove(...unselectedCn);
      c.classList.add(...selectedCn);

      // update items
      technologies.forEach(
        (t) =>
          (t.hidden =
            category !== "Tous" && t.dataset.techCategory !== category),
      );
    });
  });
};

document.addEventListener("DOMContentLoaded", handleTechStack);
