# Course Video Functionality

This document explains how to use the enhanced course video system that allows different videos to play when clicking on various links in the course contents sidebar.

## How It Works

The course system now supports multiple video sections, each with its own video URL. When a user clicks on a section in the course contents sidebar, the video player automatically switches to the corresponding video for that section.

## Setting Up a Course

### 1. Course Front Matter

Each course should have the following structure in its front matter:

```yaml
---
layout: course-single
permalink: /courses/your-course/
title: "Your Course Title"
course_subtitle: "Your course subtitle"
author_profile: false
course_video: "https://www.youtube.com/embed/DEFAULT_VIDEO_ID"
course_sections:
  - id: "section-1"
    title: "Section 1 Title"
    video: "https://www.youtube.com/embed/VIDEO_ID_1"
  - id: "section-2"
    title: "Section 2 Title"
    video: "https://www.youtube.com/embed/VIDEO_ID_2"
  - id: "section-3"
    title: "Section 3 Title"
    video: "https://www.youtube.com/embed/VIDEO_ID_3"
course_resources:
  - title: "Resource 1"
    url: "https://example.com/resource1"
  - title: "Resource 2"
    url: "https://example.com/resource2"
---
```

### 2. Required Fields

- **`layout`**: Must be `course-single`
- **`course_video`**: The default video that plays when the course first loads
- **`course_sections`**: An array of sections, each with:
  - **`id`**: Unique identifier for the section
  - **`title`**: Display name for the section
  - **`video`**: YouTube embed URL for the section's video

### 3. Video URLs

Use YouTube embed URLs in this format:
```
https://www.youtube.com/embed/VIDEO_ID
```

Replace `VIDEO_ID` with the actual YouTube video ID from the video URL.

## Features

### Automatic Video Switching
- Click any section in the sidebar to switch to that section's video
- The video player automatically updates to show the new content
- Loading indicator shows while videos are switching

### Visual Feedback
- Active section is highlighted in the sidebar
- Current section indicator shows above the video player
- Smooth scrolling to video when switching sections

### URL Hash Support
- Each section gets a unique URL hash (e.g., `#section-1`)
- Users can bookmark specific sections
- Browser back/forward buttons work with section navigation

### Accessibility
- Keyboard navigation support (Enter/Space to select sections)
- Screen reader friendly with proper ARIA labels
- Focus indicators for better navigation

## Example Course

See `_pages/courses/test-course.md` for a working example of the video functionality.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interface for mobile devices

## Troubleshooting

### Videos Not Switching
1. Check that each section has a valid `video` URL
2. Ensure YouTube embed URLs are correct
3. Verify that the course layout is set to `course-single`

### Loading Issues
- The system includes a loading overlay for better user experience
- If videos take time to load, the loading indicator will show
- Cross-origin restrictions may affect some video platforms

### Styling Issues
- All styles are included in the layout file
- CSS custom properties are used for consistent theming
- Responsive design automatically adjusts for different screen sizes 