# Content Standards

## Naming Conventions

### Pattern IDs

- Use kebab-case: `sliding-window`, `two-pointer`
- Keep descriptive but concise
- Match folder names exactly

### Problem IDs

- Use kebab-case: `max-sum-subarray-k`
- Include key problem identifier
- Avoid generic names

### File Names

- `index.json`: Pattern theory
- `problems.json`: Problem list
- `template.cpp`: C++ skeleton
- `notes.md`: Optional deep notes

## JSON Schema Rules

### Pattern (index.json)

```json
{
  "id": "string (required)",
  "title": "string (required)",
  "category": "string (required)",
  "difficulty": "Beginner|Intermediate|Advanced (required)",
  "coreIdea": "string (required, < 100 chars)",
  "mentalModel": "string (required, < 50 chars)",
  "whenToUse": "array of strings (required, 3-5 items)",
  "variations": "array of strings (optional)"
}
```

### Problems (problems.json)

```json
{
  "id": "string (required)",
  "title": "string (required)",
  "difficulty": "Easy|Medium|Hard (required)",
  "leetcode": "url (optional)",
  "whyPattern": "string (required, explains pattern fit)",
  "approach": "array of strings (required, 3-5 steps)",
  "complexity": {
    "time": "string (required)",
    "space": "string (required)"
  }
}
```

## Writing Guidelines

### Problem Explanations

- **Why Pattern**: Explain why this specific pattern solves the problem
- **Approach Steps**: Break down into clear, sequential steps
- **Complexity**: Always include time and space analysis

### Pattern Descriptions

- **Core Idea**: One sentence that captures the essence
- **Mental Model**: How to visualize the approach
- **When to Use**: Specific scenarios where pattern applies
- **Variations**: Different ways to apply the pattern

### Code Templates

- Use clear variable names
- Include comments for each section
- Make it adaptable to different problems
- Follow consistent C++ style

## Quality Checklist

### Pattern Quality

- [ ] Has clear, unique core idea
- [ ] Mental model is intuitive
- [ ] When to use is specific (not generic)
- [ ] Template works for multiple problems

### Problem Quality

- [ ] Why pattern explains the connection
- [ ] Approach steps are logical and complete
- [ ] Complexity analysis is correct
- [ ] LeetCode link is valid

### Code Quality

- [ ] Template compiles without errors
- [ ] Comments explain the logic
- [ ] Variable names are descriptive
- [ ] Handles edge cases appropriately

## Review Process

1. **Self-Review**: Check against quality checklist
2. **Peer Review**: Get feedback from other contributors
3. **Testing**: Verify template works with example problems
4. **Integration**: Ensure it fits the overall system