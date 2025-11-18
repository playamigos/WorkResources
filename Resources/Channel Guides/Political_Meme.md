# Political Meme Content Production Guide

## Overview
This guide outlines the workflow for creating political meme videos with AI-generated content, focusing on Telugu-language content with realistic character portrayals.

---

## Input Requirements
- **Screenplay**: Complete script with dialogue and scene descriptions

---

## Production Workflow

### 1. Pre-Production
- [ ] **Analyze Screenplay**: Break down the screenplay into individual shots
- [ ] **Plan Shot Composition**: Determine camera angles, character positions, and backgrounds
- [ ] **Create Storyboard**: Use storyboard references to reduce iteration time and ensure good composition

### 2. Audio Generation
- [ ] **Generate Voiceover/Narration** (if required):
  - Use **Google AI Studio** or **ElevenLabs**
  - For Telugu content: Specify "Native Telugu speaker" in prompts
  - Use Telugu text in Telugu script to avoid English-Telugu accents

### 3. Visual Asset Creation

#### Character Generation
- [ ] **Generate Consistent Character Images**:
  - Use AI image generation tools
  - For real people faces: Modify features slightly to pass AI content filters
  - Maintain character consistency across all shots
  - Keep reference images for each character

#### Background Generation
- [ ] **Generate Consistent Background Images**:
  - Create separate backgrounds for each scene/location
  - Ensure style consistency across all backgrounds
  - Match lighting and mood to screenplay requirements

#### Shot Composition
- [ ] **Compose Final Shot Images**:
  - Combine characters with appropriate backgrounds
  - Ensure proper composition (rule of thirds, visual balance)
  - Use reference storyboards if composition is challenging
  - Verify character positioning matches screenplay direction

### 4. Video Generation

#### Method A: Image-to-Video (Recommended)
- [ ] **Use composed image as first frame** for video generation
- **Pros**: Better composition control
- **Cons**: More steps in workflow

#### Method B: Ingredients-to-Video
- [ ] **Provide character and background images separately** to video model
- **Pros**: Faster workflow
- **Cons**: Less composition control (video models weaker at composition than image models)
- **Note**: This limitation may improve over time with better models

### 5. Dialogue Integration
- [ ] **Video Prompt with Dialogue**:
  - Directly prompt the person to speak the dialogue in the video generation
  - Use **Telugu text in Telugu script** (not transliterated)
  - Include keyword: **"Native Telugu speaker"** in prompts
  - This prevents English-Telugu accent issues

### 6. Post-Production

#### Face Replacement (if needed)
- [ ] **Apply Deepfake Technology**:
  - Use open-source deepfaker tools
  - Replace AI-generated faces with actual person's face
  - **Only after video generation is complete**
  - Ensures compliance with AI generation policies while achieving desired result

#### Final Review
- [ ] Check composition quality across all shots
- [ ] Verify dialogue sync and audio quality
- [ ] Ensure character consistency throughout video
- [ ] Review background continuity

---

## Key Considerations

### Character Design
- **Real People Faces**: AI models typically reject direct real-person face generation
- **Workaround**: Modify facial features slightly during generation, then use deepfake in post-production
- **Consistency**: Maintain character appearance across all shots

### Composition Quality
- **Priority**: Good composition is critical for engaging content
- **Solution**: Use storyboard references to guide composition and reduce iterations
- **Testing**: Generate test shots to validate composition before full production

### Language & Dialogue
- **Telugu Content Specifics**:
  - Always use native Telugu script (తెలుగు)
  - Avoid romanized/transliterated Telugu
  - Specify "Native Telugu speaker" in prompts
  - Test audio generation for proper accent and pronunciation

### Technical Workflow
- **Image Generation**: Stronger at composition than video models
- **Video Generation**: Improving but still limited in complex compositions
- **Hybrid Approach**: Combine strengths of both for best results

---

## Tools & Resources

### Audio Generation
- Google AI Studio
- ElevenLabs

### Video Generation
- Image-to-Video models
- Ingredients-to-Video models

### Post-Production
- Open-source deepfaker tools (for face replacement)
- Video editing software

---

## Tips for Success

1. **Iterate Early**: Test character designs and compositions with sample shots before full production
2. **Reference Library**: Build a library of approved character looks and backgrounds
3. **Batch Processing**: Generate multiple variations simultaneously to compare options
4. **Quality Over Speed**: Prioritize composition and consistency over production speed
5. **Backup Assets**: Save all approved assets for potential reuse in future projects

---

## Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Inconsistent character appearance | Use reference images and maintain detailed prompts |
| Poor composition | Create storyboard reference before generation |
| Wrong accent in dialogue | Use native script and "Native Telugu speaker" keyword |
| AI model rejecting face generation | Modify features during generation, deepfake in post |
| Weak video composition | Use image-to-video method with pre-composed shots |

