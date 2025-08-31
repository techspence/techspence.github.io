# Course Management Guide

This directory contains all the cybersecurity courses for the Techspence website. Each course uses the `course-single` layout template for consistent presentation and functionality.

## Course Structure

### Required Files

1. **Course Content File** (`_pages/courses/course-name.md`)
2. **Course Template** (`_layouts/course-single.html`)
3. **Courses Landing Page** (`_pages/courses-landing.md`)

### Course Metadata

Each course must include the following front matter:

```yaml
---
layout: course-single
permalink: /courses/course-name/
title: "Course Title"
course_subtitle: "Brief description of what the course covers"
author_profile: true
course_duration: "X hours"
course_difficulty: "Beginner/Intermediate/Advanced"
course_category: "Category Name"
course_instructor: "Instructor Name"
course_updated: "Month Year"
course_certificate: "Yes/No"
course_video: "https://www.youtube.com/embed/VIDEO_ID"
course_sections:
  - id: "section-1"
    title: "Section 1 Title"
  - id: "section-2"
    title: "Section 2 Title"
course_resources:
  - title: "Resource 1 Title"
    url: "https://example.com/resource1"
---
```

## Adding a New Course

### Step 1: Create Course File

1. Copy `_course-template.md` to a new file
2. Rename the file to match your course (e.g., `web-security-basics.md`)
3. Update the front matter with your course information
4. Write your course content

### Step 2: Update Landing Page

Add your course to `_pages/courses-landing.md` in the `courses-grid` section:

```html
<div class="course-card">
  <div class="course-image">
    <img src="/assets/img/course-image.png" alt="Course Title">
  </div>
  <div class="course-content">
    <div class="course-category">Category</div>
    <h3 class="course-title">
      <a href="/courses/course-name/">Course Title</a>
    </h3>
    <p class="course-description">Course description...</p>
    <div class="course-meta">
      <span class="meta-item">
        <i class="fas fa-clock"></i>
        Duration
      </span>
      <span class="meta-item">
        <i class="fas fa-signal"></i>
        Difficulty
      </span>
    </div>
    <div class="course-actions">
      <a href="/courses/course-name/" class="btn btn--primary">View Course</a>
    </div>
  </div>
</div>
```

### Step 3: Add Course Image

1. Place course images in `/assets/img/`
2. Use descriptive filenames (e.g., `web-security-course.png`)
3. Recommended size: 400x250 pixels
4. Format: PNG or JPG

## Course Categories

Available categories for organizing courses:

- **Penetration Testing**: Ethical hacking and security assessment
- **Web Security**: Web application and API security
- **Network Security**: Network infrastructure protection
- **Active Directory**: Windows domain security
- **Malware Analysis**: Malware investigation and analysis
- **Incident Response**: Security incident handling

## Course Difficulty Levels

- **Beginner**: No prior experience required
- **Intermediate**: Basic cybersecurity knowledge needed
- **Advanced**: Significant experience required

## Features

### Course Template Features

- **Responsive Design**: Works on all device sizes
- **Course Navigation**: Left sidebar with course sections
- **Progress Tracking**: Visual progress indicator
- **Video Integration**: YouTube video embedding
- **Resource Links**: External resource management
- **Newsletter Signup**: Built-in subscription form
- **Course Metadata**: Instructor, duration, difficulty, etc.

### Landing Page Features

- **Hero Section**: Engaging introduction with statistics
- **Category Browsing**: Organized course categories
- **Course Cards**: Visual course presentation
- **Search and Filter**: Easy course discovery
- **Newsletter Integration**: Lead generation

## Best Practices

### Content Guidelines

1. **Clear Structure**: Use consistent headings and sections
2. **Practical Examples**: Include real-world scenarios
3. **Code Snippets**: Provide working code examples
4. **Visual Aids**: Use images and diagrams when helpful
5. **Progressive Learning**: Build from basic to advanced concepts

### Technical Guidelines

1. **Valid Markdown**: Ensure proper markdown syntax
2. **Working Links**: Test all external links
3. **Image Optimization**: Compress images for web
4. **Mobile Testing**: Verify mobile responsiveness
5. **SEO Optimization**: Use descriptive titles and descriptions

## Maintenance

### Regular Tasks

1. **Update Course Content**: Keep information current
2. **Check External Links**: Ensure resources are still available
3. **Review Course Metadata**: Update dates and information
4. **Monitor Performance**: Track course engagement
5. **Gather Feedback**: Collect student input for improvements

### Troubleshooting

- **Layout Issues**: Check front matter syntax
- **Missing Images**: Verify image paths and files
- **Broken Links**: Test all URLs regularly
- **Styling Problems**: Check CSS for conflicts

## Support

For questions or issues with the course system:

1. Check this README first
2. Review the template files
3. Test in a development environment
4. Contact the development team

---

**Last Updated**: January 2024
**Version**: 1.0 