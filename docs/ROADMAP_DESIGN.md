# Roadmap Design

## Roadmap Philosophy

Roadmaps provide structured learning paths that build upon each other. They guide learners from basics to advanced concepts in a logical progression.

## Roadmap Types

### Beginner Roadmap
- Focus: Fundamental patterns and basic problem-solving
- Duration: 4-6 weeks
- Prerequisites: Basic programming knowledge

### Interview Roadmap
- Focus: High-frequency interview patterns
- Duration: 8-12 weeks
- Prerequisites: Basic DSA knowledge

### Advanced Roadmap
- Focus: Complex algorithms and optimization
- Duration: 12-16 weeks
- Prerequisites: Solid DSA foundation

## Roadmap Structure

Each roadmap is a JSON file with:
```json
{
  "title": "Roadmap Title",
  "description": "Brief description of the roadmap",
  "steps": [
    "Category → Pattern Name",
    "Category → Pattern Name"
  ]
}
```

## Step Format

Use the format: `{Category} → {Pattern Title}`

Examples:
- "Array → Sliding Window"
- "Graph → DFS & BFS"
- "Dynamic Programming → 0/1 Knapsack"

## Progression Logic

### Beginner → Interview
- Builds confidence with fundamental patterns
- Introduces more complex variations
- Prepares for time-constrained problem-solving

### Interview → Advanced
- Deepens understanding of core patterns
- Introduces system-level thinking
- Covers edge cases and optimizations

## Adding New Roadmaps

1. Create new JSON file in `src/data/roadmaps/`
2. Follow the established JSON schema
3. Ensure logical progression
4. Test the learning path with sample users

## Best Practices

- Keep roadmaps focused (5-10 steps max)
- Ensure prerequisite knowledge is clear
- Include variety across categories
- Update based on learner feedback