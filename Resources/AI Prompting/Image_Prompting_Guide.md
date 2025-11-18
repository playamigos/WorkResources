# AI Image Prompting & Editing Guide

A comprehensive guide to crafting effective AI image prompts, editing generated images, and achieving consistent results for professional and creative workflows.

---

## 🖼️ Components of an AI Image Prompt

1. **Subject**: What is the main focus? (person, animal, object, scene)
2. **Attributes**: Key details (age, gender, clothing, color, style, mood)
3. **Action/Expression**: What is happening? (smiling, running, sitting, looking at camera)
4. **Environment/Background**: Where is it? (studio, forest, city, fantasy world)
5. **Lighting**: Specify mood (soft, dramatic, neon, sunset, backlit)
6. **Camera Angle/Composition**: (close-up, wide shot, top-down, rule of thirds)
7. **Style/Medium**: (realistic, cartoon, anime, oil painting, 3D render)
8. **Quality/Resolution**: (high detail, 4K, photorealistic)
9. **Reference Images**: Use image inputs for style, pose, or consistency
10. **Negative Prompts**: What to avoid (blurry, extra limbs, watermark, text)

**Prompt Example:**
```
A young woman in a red dress, sitting on a vintage chair in a sunlit Parisian cafe, smiling and looking at the camera, soft morning light, photorealistic, high detail, 4K, reference image for pose, avoid blurry background.
```

---

## ✏️ Image Editing Guide (AI & Manual)

### Common Editing Tasks & Prompt Strategies

- **Change color of an object**
  - Prompt: "A blue car parked on the street, change car color to red, photorealistic"
  - Manual: Use selection tools and hue/saturation adjustment in Photoshop

- **Make a person face towards camera**
  - Prompt: "A man standing, facing the camera, direct eye contact, neutral expression"
  - Tip: Add "facing viewer" or "looking at camera" for better results

- **Cartoon cars always face camera (like Cars movie)**
  - Reason: Training data bias; most reference images are front-facing for character appeal
  - Solution: Specify "side view" or "profile view" in prompt, add reference image

- **Remove third person from right in image**
  - Prompt: "A group of four people, remove the third person from the right, photorealistic"
  - Manual: Use object removal tools (Content-Aware Fill, Generative Remove, inpainting)

- **When to use storyboard reference**
  - Use when you need specific composition, pose, or scene layout
  - Upload storyboard sketch as reference image for pose and arrangement

- **Advantage of image references in latest AI models (e.g., Google's NanoBanana)**
  - Achieve style, pose, and character consistency
  - Control over composition and details
  - Faster iteration and better matching to creative intent

---

## 👥 Achieving Consistent Characters in Large Groups

1. **Background First**: Generate the scene/background with a prompt
2. **Add Characters Iteratively**: Use the generated image as input, add a reference image of a character, and prompt for placement ("add a person sitting on the left")
3. **Repeat**: Continue adding characters one by one, always using the previous composite as input
4. **Detail Preservation**: As more characters are added, details may degrade. Save each stage and use Photoshop (or similar) to mask and merge high-detail faces or features from each step
5. **Reference Libraries**: Build a library of character reference images for consistency across scenes
6. **Batch Generation**: For large groups, generate smaller clusters and composite them together

---

## 🛠️ Advanced Prompt Engineering Tips

- Use clear, specific language; avoid ambiguity
- Break complex scenes into multiple prompts and composite
- Use negative prompts to avoid unwanted artifacts
- Leverage model strengths (e.g., cartoon, photorealistic, anime)
- Use seed values for reproducibility
- Experiment with prompt order; some models prioritize early tokens
- For style transfer, use multiple reference images
- For animation, keep poses and backgrounds consistent across frames

---

## ⚡ Troubleshooting & Pro Tips

- If results are inconsistent, simplify the prompt and add details gradually
- For unwanted objects, use negative prompts and manual editing
- For pose/angle issues, provide reference images and explicit instructions
- For color issues, specify color in multiple ways ("red shirt", "crimson", "warm tones")
- For composition, use terms like "rule of thirds", "centered", "diagonal arrangement"
- For best results, use high-resolution reference images
- Save all intermediate images for manual compositing and backup

---

## 📚 Useful Resources

- [PromptHero](https://prompthero.com) – Prompt library and examples

---

*This guide will help you master AI image prompting and editing for creative, professional, and production workflows. Experiment, iterate, and combine manual and AI tools for best results!*

---

## 🧭 Project Context Capsule

A compact, repeatable block you prepend to every image prompt to carry the project’s story, style, and constraints. Keep it stable (only change the shot lines) and concise (aim for ~60–80 tokens).

### What to include
- **Project**: one-sentence premise, audience, tone
- **Style Bible**: 5–8 canon tags (genre, medium, palette, texture)
- **Brand/Canon**: 2–3 signature elements (motifs, brand colors, props)
- **Delivery**: aspect ratio, composition norms, output quality
- **Global Negative**: always-on avoids (artifacts you never want)

### Prompt Template
```
[PROJECT CONTEXT]
Project: <1-sentence premise; audience; tone>
Style Bible: <5–8 fixed tags>
Brand/Canon: <2–3 signature elements or brand colors>
Delivery: <AR, composition norms, quality>
Global Negative: <always-on avoid list>

[SHOT SPECIFIC]
Subject & Action: <who + doing what>
Camera & Composition: <lens/angle/shot size/rule-of-thirds/leading lines>
Lighting: <mood, source, time of day>
Environment: <location + key set details>
Fidelity: <photoreal/anime/3D; 4K; high detail>
References: <style ref>, <character ref>, <layout/pose ref>
Seed/Version: <seed or model version if you rely on reproducibility>
```

### Filled Example
```
Project: grounded sci‑fi survival anthology; tense, hopeful; Gen‑Z audience
Style Bible: photoreal, cinematic, 35mm look, muted teal/orange, practical lights, soft haze, shallow DoF
Brand/Canon: cracked visor motif; suit stripe #E63946; field kit with red tag
Delivery: 16:9, rule of thirds, clear subject separation, 4K
Global Negative: no text, no watermark, no extra limbs, no fisheye, no overblown highlights

Subject & Action: young astronaut kneeling, checking a damaged rover cable
Camera & Composition: medium shot, low angle, 35mm, leading lines from cable
Lighting: dusk blue hour, rim light from rover headlamp, soft fill
Environment: windy desert plain with sparse rocks; distant comms tower silhouette
Fidelity: photoreal, high detail, crisp materials and micro‑scratches
References: style board image; character sheet v2 side profile; layout sketch
Seed/Version: seed 1874; model vX.Y
```

### Consistency Tips
- **Front-load context**: put the capsule first (early tokens often weigh more)
- **Freeze wording**: reuse exact canon tags; avoid synonyms
- **Stabilize capsule**: edit only the [SHOT SPECIFIC] block per image
- **Reuse references**: attach the same style/character/layout refs across shots
- **Track seeds**: keep seed/model notes in filenames for reproducibility

### Tool-Specific Hooks (optional)
- **Midjourney**: use style/character refs, fixed `--ar` and `--seed`, weight key terms
- **SDXL/Comfy/Automatic1111**: ControlNet/pose for layout; prompt weighting `((term:1.3))`; fixed seed/scheduler
- **DALL·E/Firefly**: shorter capsule; lean on high-quality references; keep negatives concise

