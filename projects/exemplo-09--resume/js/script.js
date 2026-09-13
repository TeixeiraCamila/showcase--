document.addEventListener("DOMContentLoaded", async function () {
  window.scrollTo(0, 0);

  const leavesWrapper = document.getElementById("leavesWrapper");
  if (!leavesWrapper) return;

  const leaves = [
    { file: "leave-01.svg", left: "60%", top: "0" },
    { file: "leave-02.svg", bottom: "0", left: "20%" },
    { file: "leave-03.svg", bottom: "0", left: "35%" },
    { file: "leave-04.svg", left: "95%", top: "40%" },
    { file: "leave-05.svg", left: "80%", top: "0" },
    { file: "leave-06.svg", left: "4%", bottom: "0" },
    { file: "leave-07.svg", bottom: "0" },
    { file: "leave-08.svg", left: "77%", top: "0" },
    { file: "leave-09.svg", left: "98%", top: "40%" },
    { file: "leave-10.svg", bottom: "0", left: "35%" },
    { file: "leave-11.svg", left: "85%", top: "50%" },
    { file: "leave-12.svg", bottom: "30%" },
  ];

  const loadLeaf = async (leafData, index) => {
    try {
      const response = await fetch(`assets/leaves/${leafData.file}`);
      const svgText = await response.text();

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svgElement = svgDoc.documentElement;

      svgElement.querySelectorAll("path").forEach((path) => {
        path.classList.add("leaf-path");
      });

      const leafDiv = document.createElement("div");
      leafDiv.className = "leaf";
      leafDiv.id = `leaf-${index + 1}`;
      leafDiv.style.position = "absolute";

      if (leafData.left) leafDiv.style.left = leafData.left;
      if (leafData.right) leafDiv.style.right = leafData.right;
      if (leafData.top) leafDiv.style.top = leafData.top;
      if (leafData.bottom) leafDiv.style.bottom = leafData.bottom;

      leafDiv.appendChild(svgElement);
      leavesWrapper.appendChild(leafDiv);

      return leafDiv;
    } catch (error) {
      console.error(`Erro ao carregar ${leafData.file}:`, error);
      return null;
    }
  };

  await Promise.all(leaves.map(loadLeaf));

  const allLeaves = document.querySelectorAll(".leaf");

  const showPaths = (leaf) => {
    leaf.querySelectorAll(".leaf-path").forEach((path, pathIndex) => {
      setTimeout(() => {
        path.classList.add("path-visible");
      }, pathIndex * 3);
    });
  };

  const hidePaths = (leaf) => {
    leaf.querySelectorAll(".leaf-path").forEach((path) => {
      path.classList.remove("path-visible");
    });
  };

  const scrollHandler = () => {
    const scrollTop = window.scrollY;

    if (scrollTop === 0) {
      allLeaves.forEach((leaf) => {
        leaf.classList.remove("visible");
        hidePaths(leaf);
      });
      return;
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const leavesToShow = Math.floor(scrollPercent * allLeaves.length * 1.5);

    allLeaves.forEach((leaf, index) => {
      if (index <= leavesToShow) {
        if (!leaf.classList.contains("visible")) {
          leaf.classList.add("visible");
          showPaths(leaf);
        }
      } else {
        leaf.classList.remove("visible");
        hidePaths(leaf);
      }
    });
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollHandler();
        ticking = false;
      });
      ticking = true;
    }
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".section").forEach((section) => {
    sectionObserver.observe(section);
  });
});