// loadPattern.js
export const loadPattern = async (category, patternId) => {
  try {
    const indexResponse = await fetch(`/src/data/patterns/${category}/${patternId}/index.json`);
    const problemsResponse = await fetch(`/src/data/patterns/${category}/${patternId}/problems.json`);
    const templateResponse = await fetch(`/src/data/patterns/${category}/${patternId}/template.cpp`);

    const index = await indexResponse.json();
    const problems = await problemsResponse.json();
    const template = await templateResponse.text();

    return { index, problems, template };
  } catch (error) {
    console.error('Error loading pattern:', error);
    return null;
  }
};