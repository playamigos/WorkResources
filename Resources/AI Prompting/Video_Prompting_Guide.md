# AI Video Prompting Guide
## Latest Models: Google Veo 3.1, Kling AI, Runway Gen-4

### Table of Contents
1. [Introduction](#introduction)
2. [Prompt Segmentation Framework](#prompt-segmentation-framework)
3. [Model-Specific Guidelines](#model-specific-guidelines)
4. [Prompt Examples by Category](#prompt-examples-by-category)
5. [Advanced Techniques](#advanced-techniques)
6. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## Introduction

Modern AI video generation models (Google Veo 3.1, Kling AI, Runway Gen-4) understand complex prompts with detailed descriptions. This guide provides a structured approach to crafting effective video prompts.

### Key Principles
- **Specificity over vagueness**: Detailed descriptions yield better results
- **Temporal coherence**: Describe motion and progression clearly
- **Visual hierarchy**: Lead with the most important elements
- **Cinematic language**: Use film and photography terminology
- **Logical flow**: Structure prompts in a natural reading order

---

## Prompt Segmentation Framework

### The 7-Segment Structure

A well-structured video prompt should include these segments in order:

#### 1. **Shot Type & Camera Movement**
Defines the technical framing and motion of the camera.

**Keywords:**
- Shot types: `close-up`, `medium shot`, `wide shot`, `extreme close-up`, `establishing shot`, `aerial view`, `POV shot`, `over-the-shoulder`
- Camera movements: `slow pan`, `dolly in`, `dolly out`, `tracking shot`, `crane shot`, `handheld`, `steady cam`, `orbit`, `push in`, `pull back`, `tilt up`, `tilt down`
- Speed: `slow motion`, `time-lapse`, `hyper-lapse`, `real-time`

**Example:**
```
Slow dolly-in medium shot
```

#### 2. **Subject & Main Action**
The primary focus of the scene and what they're doing.

**Structure:** [Who/What] + [Doing what] + [How they're doing it]

**Example:**
```
A young woman in her 20s dancing gracefully, her movements fluid and expressive
```

#### 3. **Environment & Setting**
Where the action takes place and atmospheric details.

**Components:**
- Location type: `indoor`, `outdoor`, `urban`, `nature`, `studio`
- Specific details: architecture, landscape features, weather
- Time of day: `dawn`, `golden hour`, `midday`, `dusk`, `night`, `blue hour`

**Example:**
```
in a sunlit art studio with large windows, dust particles visible in the light beams
```

#### 4. **Lighting & Mood**
How the scene is lit and the emotional atmosphere.

**Lighting types:**
- `natural light`, `golden hour lighting`, `soft diffused light`, `dramatic shadows`
- `neon lights`, `candlelight`, `backlighting`, `rim lighting`, `volumetric lighting`
- `high key`, `low key`, `chiaroscuro`, `silhouette`

**Mood descriptors:**
- `cinematic`, `dreamy`, `moody`, `vibrant`, `melancholic`, `ethereal`, `gritty`, `serene`

**Example:**
```
Warm golden hour lighting streaming through windows, creating a dreamy, nostalgic atmosphere
```

#### 5. **Color Palette & Visual Style**
The color scheme and aesthetic treatment.

**Color approaches:**
- Specific: `teal and orange color grading`, `desaturated blues`, `warm sepia tones`
- Mood-based: `vibrant saturated colors`, `muted pastels`, `monochromatic`
- Reference: `Wes Anderson color palette`, `cyberpunk neon`, `earth tones`

**Style references:**
- `cinematic`, `documentary style`, `film noir`, `music video aesthetic`
- `35mm film`, `IMAX quality`, `vintage VHS`, `anamorphic lens`

**Example:**
```
Warm color palette with teal and orange color grading, cinematic film grain
```

#### 6. **Technical Details**
Camera specs and quality indicators.

**Common specifications:**
- Resolution: `4K`, `8K`, `HD`
- Frame rate: `24fps cinematic`, `60fps smooth`, `120fps`
- Lens: `35mm lens`, `50mm portrait lens`, `wide-angle 16mm`, `telephoto`, `fisheye`
- Camera: `RED camera`, `ARRI Alexa`, `Canon C300`, `Blackmagic`
- Quality: `professional cinematography`, `high production value`, `ultra-realistic`

**Example:**
```
Shot on ARRI Alexa, 35mm lens, shallow depth of field, 4K resolution
```

#### 7. **Motion & Dynamics**
Specific movement instructions for both camera and subjects.

**Subject motion:**
- Speed: `slow`, `moderate`, `fast`, `sudden`, `gradual`
- Type: `walking`, `running`, `spinning`, `floating`, `drifting`
- Direction: `towards camera`, `away from camera`, `left to right`, `ascending`, `descending`

**Camera behavior:**
- `camera follows subject smoothly`
- `camera remains static while subject moves`
- `camera rotates around subject`

**Example:**
```
Woman twirls slowly, hair and dress flowing, camera orbits around her gradually
```

---

## Model-Specific Guidelines

### Google Veo 3.1

**Strengths:**
- Excellent understanding of cinematic terminology
- Strong temporal coherence across longer clips
- Superior physics simulation (cloth, water, hair)
- Precise camera movement control

**Optimal Prompt Style:**
- Use cinematic and professional film terminology
- Include specific camera models and lens information
- Emphasize lighting conditions
- Describe motion in stages for longer clips

**Veo 3.1 Example:**
```
Cinematic establishing shot: A sleek silver sports car drives along a coastal highway at sunset. The camera starts as a wide aerial view, then transitions to a low-angle tracking shot following the car. Golden hour lighting creates lens flares and warm reflections on the car's surface. The ocean waves crash against rocks in the background. Teal and orange color grading, shot on ARRI Alexa with anamorphic lenses, 4K, professional cinematography, smooth gimbal movement.
```

**Best for:**
- Narrative content
- Commercial-style footage
- Nature documentaries
- Action sequences with complex physics

---

### Kling AI

**Strengths:**
- Exceptional detail in textures and materials
- Strong character consistency and facial expressions
- Advanced understanding of Asian aesthetics and cultural contexts
- Excellent at fantasy and surreal concepts

**Optimal Prompt Style:**
- Lead with strong visual descriptors
- Include texture and material details
- Use emotion and expression keywords
- Combine realistic and stylized elements freely

**Kling AI Example:**
```
Close-up shot of a young warrior with flowing black hair, eyes glowing with mystical blue energy. She raises her hand and magical particles swirl around her fingers, forming intricate light patterns. Traditional silk robes ripple in an ethereal wind. The background shows an ancient temple with cherry blossoms falling like snow. Dramatic backlighting creates a rim light effect around her silhouette. Rich color palette with deep blues, golds, and pink petals. Cinematic fantasy style, high detail, 4K, smooth motion, particles gradually intensifying.
```

**Best for:**
- Character-focused content
- Fantasy and mythology
- Asian-inspired aesthetics
- Detailed close-ups with expressions

---

### Runway Gen-4

**Strengths:**
- Fastest iteration and generation speed
- Excellent text-to-video coherence
- Strong integration with editing workflows
- Precise control over motion intensity
- Great for abstract and artistic styles

**Optimal Prompt Style:**
- Concise but descriptive
- Use motion intensity keywords
- Include style references
- Specify pace and rhythm

**Runway Gen-4 Example:**
```
Medium tracking shot: A skateboarder performs an ollie trick in slow motion. Urban environment with graffiti walls and concrete ramps. Camera follows parallel to the subject, capturing the board rotating beneath their feet. Sharp focus on the subject with slight motion blur in background. High contrast lighting with afternoon sun creating long shadows. Desaturated color grade with emphasis on reds and blacks. Shot on Canon C300, 60fps slowed to 24fps, gritty documentary style, dynamic composition.
```

**Best for:**
- Social media content
- Music videos
- Abstract visualizations
- Quick iterations and tests

---

## Prompt Examples by Category

### 1. Portrait & Character

#### Example 1: Emotional Close-Up
```
Extreme close-up shot of an elderly man's weathered hands carefully crafting a wooden sculpture. Camera slowly pushes in. Workshop setting with warm tungsten lighting from overhead lamps. Wood shavings fall in slow motion. Shallow depth of field isolates the hands, background softly blurred. Natural skin texture highly detailed. Warm color palette with rich browns and amber tones. Shot on RED camera with 85mm lens, cinematic film grain, contemplative mood, 4K.
```

#### Example 2: Dynamic Character Action
```
Wide shot transitioning to medium shot: A ballet dancer in a white tutu performs a grand jeté leap across an empty theater stage. Camera arcs around her mid-jump, capturing the graceful form. Stage lights create dramatic side lighting with deep shadows. Dust particles visible in light beams. Her expression focused and serene. Slow motion at peak of jump, then returns to real-time. Ethereal atmosphere, desaturated colors except for warm spotlight. Shot on ARRI Alexa, 120fps, professional dance cinematography.
```

### 2. Nature & Landscape

#### Example 1: Atmospheric Landscape
```
Aerial establishing shot: Mountain range at dawn with thick fog rolling through valleys. Camera flies forward smoothly, descending gradually. First light of sunrise breaks through clouds, creating god rays. Forest canopy below partially visible through mist. Color palette transitions from deep blues to warm oranges as sun rises. Volumetric fog effects, highly realistic atmosphere. Time-lapse effect with clouds moving faster than real-time. Shot on DJI Inspire drone, 4K, cinematic nature documentary style.
```

#### Example 2: Weather Phenomenon
```
Wide static shot: Lightning storm over prairie landscape at night. Multiple lightning bolts strike in sequence, illuminating dark storm clouds. Rain visible in foreground, wind causing grass to wave violently. Camera remains steady, creating sense of observer watching nature's power. Deep blues and purples with bright white lightning flashes. Dramatic high contrast. Real-time capture with occasional slow-motion on lightning strikes. Professional storm chasing cinematography, 4K, ultra-realistic.
```

### 3. Urban & Architecture

#### Example 1: City Life
```
POV walking shot through crowded Tokyo street at night. Camera moves forward steadily through Shibuya crossing, neon signs reflected in wet pavement. People pass by on both sides, some in focus, others motion-blurred. Rain falling, umbrellas visible. Vibrant color palette dominated by pinks, blues, and electric greens from signage. Bokeh effects from distant lights. Cinematic street photography style, shot on Sony A7S III, 35mm lens, 24fps, cyberpunk aesthetic, high dynamic range.
```

#### Example 2: Architectural Study
```
Slow dolly shot revealing modern architectural interior: Minimalist concrete space with geometric skylights creating dramatic light patterns on walls. Camera glides smoothly forward, light patterns shifting as sun angle changes. A single person stands in shadow, silhouetted against bright light. Clean lines and stark contrasts. Monochromatic color palette with subtle warm tones from sunlight. Dust particles visible in light beams. Shot on ARRI Alexa, 24mm wide-angle lens, architectural cinematography, contemplative mood, 4K.
```

### 4. Product & Commercial

#### Example 1: Luxury Product
```
360-degree rotating shot: High-end mechanical watch on black reflective surface. Camera orbits slowly around the watch while it also rotates. Dramatic lighting creates specular highlights on metal and glass. Macro detail showing intricate gears visible through transparent case back. Deep blacks with gold and silver accents. Studio lighting setup with key light, fill, and rim lights. Ultra-sharp focus, every detail visible. Shot on RED camera with macro lens, commercial advertising style, 8K resolution, luxury aesthetic.
```

#### Example 2: Food Commercial
```
Overhead shot transitioning to side angle: Chef's hands preparing gourmet dish, ingredients arranged artfully. Steam rises from hot pan. Camera cranes down slowly revealing more of the dish. Warm kitchen lighting with practical lights in background creating bokeh. Rich colors - greens from herbs, reds from tomatoes, golden oil glistening. Drops of water and oil frozen in slow motion as they fall. Professional food photography lighting, shot on Canon C300, 60fps, shallow depth of field, mouth-watering presentation.
```

### 5. Action & Sports

#### Example 1: Extreme Sports
```
Fast-tracking shot: Mountain biker speeds down rocky trail through forest. Camera mounted on drone follows closely from side angle. Dust and small rocks kick up behind wheels. Rider's body language shows intense focus. Sunlight breaks through tree canopy creating dynamic light and shadow patterns. High shutter speed captures sharp detail despite fast motion. Saturated colors - deep greens from forest, brown earth, rider's bright gear. GoPro-style dynamic angles, adrenaline-filled energy, 60fps, 4K, action sports cinematography.
```

#### Example 2: Water Sports
```
Underwater to above-water transition shot: Surfer ducks under wave (duck dive), camera follows through the water then emerges as surfer surfaces. Bubbles and turbulent water visible in underwater portion. Above water shows surfer paddling towards next wave, backlit by afternoon sun. Color palette transitions from deep turquoise underwater to bright golden hour tones above. Slow motion during transition, real-time before and after. Shot on waterproof RED housing, fisheye lens, professional surf cinematography, 120fps.
```

### 6. Abstract & Artistic

#### Example 1: Particle Simulation
```
Close-up abstract shot: Thousands of metallic particles float and swirl in zero gravity, forming and dissolving geometric patterns. Camera slowly rotates around the particle cloud. Lighting creates specular reflections, each particle catching light differently. Color scheme shifts from cool silvers to warm golds. Smooth fluid motion with occasional quick bursts of energy. Black background isolates the particles. Sci-fi aesthetic, rendered style but photorealistic, 4K, mesmerizing and meditative pace.
```

#### Example 2: Liquid Art
```
Macro shot: Colorful ink drops falling into water in slow motion, creating mushroom clouds and tendrils. Camera static, focused on center of tank. Black background. Each drop a different vibrant color - magenta, cyan, yellow - they mix and blend creating new hues. Light from below illuminates the water, making colors glow. Super slow motion, 1000fps slowed to 24fps, capturing every fluid detail. Artistic abstract style, high contrast, ultra-sharp, 4K, experimental cinematography.
```

### 7. Sci-Fi & Fantasy

#### Example 1: Space Scene
```
Epic wide shot: Massive spaceship emerges from behind a ringed planet, small fighter craft flying in formation around it. Camera pulls back revealing scale. Planet surface visible below with city lights on dark side. Stars and nebula in background providing depth. Volumetric lighting from nearby star creates rim light on ships. Cool color palette with blues and purples, warm engine glows. Cinematic science fiction style, inspired by Denis Villeneuve, shot on IMAX cameras, anamorphic lens flares, 8K, realistic space physics.
```

#### Example 2: Magic & Fantasy
```
Medium shot with slow zoom: Young wizard in ancient library raises staff, magical energy spiraling up from ground around them. Books float off shelves in background, pages flipping. Camera slowly pushes in on wizard's face showing intense concentration. Magical light casts moving shadows and color shifts (purple to gold to blue). Dust and small objects levitate in the magical field. Rich, saturated colors, fantasy movie aesthetic, practical lighting combined with magical effects, shot on ARRI Alexa, atmospheric, 4K.
```

---

## Advanced Techniques

### 1. Prompt Layering for Complex Scenes

Break complex scenes into multiple segments within your prompt:

**Structure:**
```
[Primary action] || [Secondary action] || [Background details] || [Atmospheric effects]
```

**Example:**
```
Foreground: Close-up of coffee being poured into ceramic mug, liquid swirling and creating foam || Middle ground: Out-of-focus person reading newspaper at café table || Background: Soft bokeh of café interior, people moving as blurred shapes || Lighting: Morning light through large windows, warm and inviting || Camera: Slow dolly in from side angle, 35mm lens, shallow depth of field, cinematic café aesthetic, 4K.
```

### 2. Temporal Progression

For longer videos, describe how the scene evolves:

**Example:**
```
Opening: Seed in dark soil, camera extreme close-up, static || 0-3 seconds: Time-lapse begins, sprout emerges pushing through soil || 3-5 seconds: Stem grows rapidly upward, first leaves unfurl || 5-7 seconds: Flower bud forms and blooms || 7-10 seconds: Camera slowly pulls back revealing garden context || Throughout: Soft morning light, warm color palette, nature documentary style, ultra-realistic, 4K.
```

### 3. Motion Intensity Control

Use specific keywords to control motion amount:

- **Minimal motion**: `subtle`, `gentle`, `barely moving`, `static with slight`
- **Moderate motion**: `steady`, `flowing`, `gradual`, `smooth`
- **High motion**: `dynamic`, `fast-paced`, `energetic`, `rapid`
- **Extreme motion**: `chaotic`, `explosive`, `whip-pan`, `frenetic`

**Example:**
```
Medium shot with subtle motion: Portrait of woman looking at camera, only her eyes blink occasionally and hair moves slightly in gentle breeze. Everything else remains still. Cinematic portrait style, soft lighting, minimal movement creates contemplative mood.
```

### 4. Reference Stacking

Combine multiple style references for unique results:

**Example:**
```
Wide shot of neon-lit alleyway: Cyberpunk aesthetic meets film noir. Style references: Blade Runner color palette + Wong Kar-wai's cinematography + anime lighting techniques. Character in trench coat walks through rain, neon signs reflected in puddles. Moody atmosphere, high contrast, anamorphic lens, cinematic, 4K.
```

### 5. Negative Prompting (Where Supported)

Specify what to avoid:

**Example:**
```
Prompt: Elegant restaurant interior, well-dressed diners, soft lighting, luxury atmosphere
Avoid: fast food, bright fluorescent lights, plastic furniture, crowds, messy tables
```

### 6. Consistency Keywords

For better coherence:

- `consistent lighting throughout`
- `maintain color palette`
- `smooth continuous motion`
- `stable camera movement`
- `coherent physics`

### 7. Audio-Visual Sync Descriptions

When generating for music or sound:

**Example:**
```
Dancer moves in rhythm to upbeat music (120 bpm). Motion syncs with beat: jump on downbeat, land on upbeat, spin during breakdown. Camera pulses slightly with rhythm. Lighting flashes match drum hits. Energetic and rhythmic motion, music video style, 4K.
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Vague Descriptions
**Bad:** "A person walks in a place"
**Good:** "Medium tracking shot: A young woman in a red coat walks through a snow-covered park at dusk, footprints trailing behind her, camera following from the side"

### ❌ Mistake 2: Conflicting Instructions
**Bad:** "Fast motion, slow-motion, time-lapse of person running"
**Good:** "Person running at normal speed, captured in slow motion (120fps to 24fps) to show athletic form"

### ❌ Mistake 3: Too Many Focus Points
**Bad:** "Show the person, the dog, the building, the sunset, the cars, the trees, all in detail"
**Good:** "Wide shot establishing scene with building and sunset, then medium shot focusing on person walking dog, background softly blurred"

### ❌ Mistake 4: Ignoring Physics
**Bad:** "Person jumps 50 feet in the air casually"
**Good:** "Person performs high jump with athletic form, reaching impressive 6-foot height" OR "Fantasy scene: Superhero leaps impossibly high, defying gravity with magical energy trail"

### ❌ Mistake 5: Inconsistent Style
**Bad:** "Realistic documentary footage with cartoon effects and anime lighting"
**Good:** "Documentary realism with subtle cinematic color grading" OR "Anime-inspired style with semi-realistic rendering and stylized lighting"

### ❌ Mistake 6: Camera Chaos
**Bad:** "Camera spins, pans, tilts, zooms, and orbits all at once"
**Good:** "Camera begins with slow pan right, then transitions to gentle push-in, smooth and controlled movement"

### ❌ Mistake 7: Lighting Impossibility
**Bad:** "Midnight scene with bright sunlight and golden hour glow"
**Good:** "Midnight scene illuminated by full moon and distant city lights, cool blue tones with warm streetlamp accents"

### ❌ Mistake 8: Overloading with Technical Terms
**Bad:** "Shot on RED camera with ARRI lenses using Canon color science and Sony sensor technology with Blackmagic RAW"
**Good:** "Shot on RED camera, 35mm lens, cinematic color grading, 4K resolution"

### ❌ Mistake 9: No Clear Subject
**Bad:** "Things happening in a space with movement and colors"
**Good:** "Close-up of barista's hands creating latte art, pouring steamed milk into espresso, forming delicate leaf pattern"

### ❌ Mistake 10: Unrealistic Duration Expectations
**Bad:** "10-second shot showing sunrise to sunset with full day's activities"
**Good:** "Time-lapse compressed from dawn to dusk, showing shadows moving across landscape, clouds drifting, 8-second duration" OR "Golden hour scene showing specific moment in time"

---

## Quick Reference Cheat Sheet

### Essential Elements Checklist
- [ ] Shot type (wide/medium/close-up)
- [ ] Camera movement (static/pan/dolly/tracking)
- [ ] Subject and main action
- [ ] Setting and environment
- [ ] Lighting type and mood
- [ ] Color palette or grading
- [ ] Technical specs (lens/camera)
- [ ] Motion description

### Power Words by Category

**Camera Movement:**
`dolly in/out`, `tracking shot`, `crane up/down`, `orbit`, `handheld`, `gimbal`, `static`, `slow pan`, `tilt`, `zoom`

**Lighting:**
`golden hour`, `backlighting`, `rim light`, `volumetric`, `soft diffused`, `dramatic shadows`, `natural light`, `neon`, `candlelight`, `high key`, `low key`

**Motion Quality:**
`smooth`, `fluid`, `gradual`, `sudden`, `gentle`, `dynamic`, `flowing`, `steady`, `slow-motion`, `time-lapse`

**Mood:**
`cinematic`, `dreamy`, `moody`, `ethereal`, `gritty`, `serene`, `dramatic`, `nostalgic`, `vibrant`, `melancholic`

**Quality:**
`4K`, `8K`, `professional`, `cinematic`, `high production value`, `ultra-realistic`, `photorealistic`, `film grain`

---

## Pro Tips for Each Model

### Google Veo 3.1 Pro Tips:
1. Use specific camera model names for better quality
2. Include lens focal length for proper perspective
3. Describe lighting in stages for longer clips
4. Reference real cinematographers or films
5. Specify aspect ratio when needed (16:9, 2.39:1, etc.)

### Kling AI Pro Tips:
1. Start with emotion and expression keywords
2. Include texture details (silk, leather, metal, etc.)
3. Use cultural and mythological references
4. Describe particle effects and magical elements clearly
5. Specify both subject and environmental motion separately

### Runway Gen-4 Pro Tips:
1. Keep prompts focused and concise
2. Use motion intensity keywords (subtle, moderate, intense)
3. Test with shorter durations first, then extend
4. Include style references (photographer, artist, genre)
5. Specify pace clearly (slow, fast, rhythmic)

---

## Prompt Templates

### Template 1: Basic Scene
```
[Shot type] of [subject] [action] in [location]. [Lighting description]. [Mood]. [Technical specs].
```

### Template 2: Advanced Scene
```
[Camera movement] [shot type]: [Subject detail] [performing action] [manner of action]. [Setting details] with [environmental elements]. [Lighting type] creates [light effect]. [Color palette description]. [Mood and atmosphere]. [Technical specifications]. [Motion details].
```

### Template 3: Multi-Element Scene
```
[Shot type] establishing [scene]. Foreground: [primary subject and action]. Middle ground: [secondary elements]. Background: [environmental details]. [Camera movement] [direction]. [Lighting style] with [specific effects]. [Color grading]. [Style reference], [technical specs].
```

---

## Final Checklist Before Generating

- [ ] Is my main subject clearly defined?
- [ ] Have I specified camera position and movement?
- [ ] Is the lighting described?
- [ ] Have I included environmental context?
- [ ] Are motion and timing clear?
- [ ] Is the mood/atmosphere specified?
- [ ] Have I included relevant technical details?
- [ ] Are there any conflicting instructions?
- [ ] Is the prompt too complex for a single shot?
- [ ] Would this work in real-world filmmaking?

---

*Last Updated: November 2025*
*For: Google Veo 3.1, Kling AI, Runway Gen-4*
