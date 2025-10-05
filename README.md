# DiagramMind AI — Enterprise Solution Designer

![DiagramMind AI](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format)

A comprehensive enterprise solution design platform powered by Google Gemini 2.5 Flash and Firebase. Transform ideas into professional diagrams, documents, and presentations with AI-driven intelligence and team collaboration features.

## Features

- 🎨 **AI Diagram Generation** - Create architecture, process, sequence, network, and data flow diagrams using Google Gemini 2.5 Flash
- 📊 **Multi-Workspace Management** - Organize projects across workspaces with role-based access control
- 👥 **Team Collaboration** - Invite members with roles (Owner, Admin, Editor, Viewer) and manage permissions
- 💳 **Subscription & Billing** - Track usage and manage plans (Free, Starter, Business) with Stripe integration
- 📈 **Usage Analytics** - Monitor AI-generated diagrams, documents, and decks with real-time metrics
- 🔄 **Interactive Diagrams** - View and interact with React Flow-powered diagram visualizations
- 📝 **Project Management** - Create, organize, and filter projects by workspace, type, and status
- 🎯 **Export Support** - Multiple export formats (DOCX, PDF, PPTX, PNG, SVG) for deliverables

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e2eb89260d9dd939d1be75&clone_repository=68e2ee1f260d9dd939d1be9d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "**App Description** (for Base44 / Gemini App Builder) to use **Google Gemini 2.5 Flash**, which is faster, cheaper, and better at structured JSON generation than Gemini 2.0 Flash.
> 
> Below is your **final, complete enterprise-grade app description** for **DiagramMind AI v1.2 — Powered by Gemini 2.5 Flash + Firebase**, with all capabilities:
> **AI Diagram Generation, AI Docs (SOW/HLD/DDD), AI Decks, User Management, State Management, and Subscription Billing.**
> 
> ---
> 
> ## 🧩 Application Title
> 
> **DiagramMind AI — Enterprise Solution Designer (Powered by Gemini 2.5 Flash + Firebase)**
> 
> ---
> 
> ## 🌍 One-Line Summary
> 
> From idea to architecture to delivery — DiagramMind AI turns your words into **diagrams**, **documents**, and **presentations** with Gemini 2.5 Flash intelligence, Firebase reliability, and Stripe-powered subscriptions.
> 
> ---
> 
> ## 🚀 Full Description
> 
> **DiagramMind AI** is an **AI-driven enterprise solution-design platform** that helps teams move from concept → diagram → document → presentation in minutes.
> It combines **Google Gemini 2.5 Flash**, **React Flow**, and **Firebase** to automate system design, architecture documentation, and client-ready deliverables with built-in team management and billing.
> 
> ---
> 
> ### ⚙️ Core Modules
> 
> #### 1️⃣ AI Diagram Generation (Gemini 2.5 Flash)
> 
> * Converts text or voice prompts into architecture and process diagrams.
> * Uses Gemini 2.5 Flash to generate structured JSON (`nodes`, `edges`) for React Flow.
> * Intelligent auto-layout, semantic color themes, and hierarchy detection.
> * Typical cost: ≈ $0.005 per diagram.
> 
> #### 2️⃣ AI Document Builder
> 
> * Generates **Statements of Work (SOW)**, **High-Level Design (HLD)**, **Detailed Design (DDD)**, and **Technical Docs**.
> * Auto-sections include Scope, Deliverables, Assumptions, Milestones, and Risks.
> * Exports to DOCX / PDF / Markdown.
> 
> #### 3️⃣ AI Presentation Deck Creator
> 
> * Builds executive-style slide decks with titles, bullets, and visual structure.
> * Auto-embeds diagrams and document summaries.
> * Exports to PPTX or PDF instantly.
> 
> #### 4️⃣ Collaboration Workspace
> 
> * Real-time multi-user editing with presence and commenting.
> * Version history and review threads.
> * Roles: Owner / Admin / Editor / Viewer.
> 
> #### 5️⃣ User Management & Team Control
> 
> * Invite members by email and assign roles.
> * Track invites (pending, accepted, expired).
> * Manage teams with Firebase Auth + custom claims and Firestore rules.
> * Integrated team dashboard for role control and activity logs.
> 
> #### 6️⃣ Subscription & Billing Management (Stripe)
> 
> * Subscription plans with AI usage limits and quotas.
> * Integrated Stripe Checkout & Billing Portal.
> * Auto-renew / cancel / upgrade support.
> * Workspace-level usage tracking and monthly resets.
> 
> #### 7️⃣ State Management (Zustand + Realtime)
> 
> * Global app state handled by Zustand with persistent storage.
> * Slices: Auth / Workspace / Project / UI / Presence.
> * Optimistic updates with auto rollback on failure.
> * Realtime presence via Firestore or Liveblocks.
> 
> #### 8️⃣ Knowledge-Aware AI Mode (optional)
> 
> * Trains Gemini on company templates or previous projects.
> * Ensures output matches corporate tone and standards (ServiceNow, Cloud, Finance, etc.).
> 
> ---
> 
> ## 🔧 Technology Architecture
> 
> | Layer         | Technology                                                                                              |
> | ------------- | ------------------------------------------------------------------------------------------------------- |
> | Frontend      | Next.js (React) + React Flow + TailwindCSS + Zustand                                                    |
> | Backend       | Firebase (Functions Node 20 + Firestore + Storage + Auth + Hosting)                                     |
> | AI Models     | **Gemini 2.5 Flash** (fast structured generation)  • **Gemini 1.5 Pro** (for reasoning docs and slides) |
> | Billing       | Stripe Checkout + Billing Portal + Webhook sync                                                         |
> | Collaboration | Liveblocks / Firestore Realtime                                                                         |
> | Exports       | DOCX / PDF / PPTX renderers (Node + Template engine)                                                    |
> 
> ---
> 
> ## 📦 Firebase Data Model (Overview)
> 
> **Collections:**
> `users`, `workspaces`, `projects`, `invites`, `audit`
> **Sub-collections:** `members`, `diagrams`, `documents`, `decks`, `comments`
> 
> Each workspace has a linked plan (`free | starter | business`), Stripe customer/subscription IDs, usage meters, and role-based access controls.
> 
> ---
> 
> ## 💳 Plans & Usage (Stripe Integrated)
> 
> | Plan     | AI Diagrams | AI Docs | AI Decks |    Price |
> | -------- | ----------: | ------: | -------: | -------: |
> | Free     |          10 |       5 |        2 |       $0 |
> | Starter  |         200 |     100 |       50 | $10 / mo |
> | Business |        1000 |     500 |      250 | $25 / mo |
> 
> Usage is enforced server-side in Functions: if usage ≥ limit → the API denies the AI call and shows an upgrade prompt.
> 
> ---
> 
> ## 🔒 Security Model
> 
> * Firebase Auth (Email, Google, Microsoft SSO)
> * Workspace roles via custom claims (owner, admin, editor, viewer)
> * Firestore Rules enforce workspace-scoped access
> * Storage Rules restrict file access to authorized users
> * Stripe webhook signature validation for billing events
> 
> ---
> 
> ## 🧭 User Journey
> 
> 1️⃣ Login / Sign up → Firebase Auth
> 2️⃣ Create Workspace → choose plan or trial
> 3️⃣ Invite teammates via email and assign roles
> 4️⃣ Create Project → enter prompt ("Design ServiceNow HR portal and generate SOW + deck")
> 5️⃣ Gemini 2.5 Flash generates diagram, docs, and deck
> 6️⃣ Edit / collaborate in real time
> 7️⃣ Export final DOCX / PPTX / PDF
> 8️⃣ Track AI usage and manage subscription in billing dashboard
> 
> ---
> 
> ## 💾 Exports & Integrations
> 
> * **DOCX / PDF / PPTX / PNG / SVG / Markdown / Mermaid**
> * Connectors: Google Drive • Confluence • Notion • ServiceNow
> * Stripe Billing Portal for subscription self-management
> 
> ---
> 
> ## 🌈 Vision
> 
> DiagramMind AI is your **AI Architect + Technical Writer + Designer in one platform**.
> Powered by Gemini 2.5 Flash and Firebase, it lets you **think in plain English** and receive enterprise-grade deliverables — visual diagrams, SOWs, design docs, and slides — instantly.
> It combines intelligence, collaboration, and governance to redefine how solution architects, consultants, and engineers design and deliver projects."

### Code Generation Prompt

> "Based on the content model I created for "**App Description** (for Base44 / Gemini App Builder) to use **Google Gemini 2.5 Flash**, which is faster, cheaper, and better at structured JSON generation than Gemini 2.0 Flash.
> 
> Below is your **final, complete enterprise-grade app description** for **DiagramMind AI v1.2 — Powered by Gemini 2.5 Flash + Firebase**, with all capabilities:
> **AI Diagram Generation, AI Docs (SOW/HLD/DDD), AI Decks, User Management, State Management, and Subscription Billing.**
> 
> ---
> 
> ## 🧩 Application Title
> 
> **DiagramMind AI — Enterprise Solution Designer (Powered by Gemini 2.5 Flash + Firebase)**
> 
> ---
> 
> ## 🌍 One-Line Summary
> 
> From idea to architecture to delivery — DiagramMind AI turns your words into **diagrams**, **documents**, and **presentations** with Gemini 2.5 Flash intelligence, Firebase reliability, and Stripe-powered subscriptions.
> 
> ---
> 
> ## 🚀 Full Description
> 
> **DiagramMind AI** is an **AI-driven enterprise solution-design platform** that helps teams move from concept → diagram → document → presentation in minutes.
> It combines **Google Gemini 2.5 Flash**, **React Flow**, and **Firebase** to automate system design, architecture documentation, and client-ready deliverables with built-in team management and billing.
> 
> ---
> 
> ### ⚙️ Core Modules
> 
> #### 1️⃣ AI Diagram Generation (Gemini 2.5 Flash)
> 
> * Converts text or voice prompts into architecture and process diagrams.
> * Uses Gemini 2.5 Flash to generate structured JSON (`nodes`, `edges`) for React Flow.
> * Intelligent auto-layout, semantic color themes, and hierarchy detection.
> * Typical cost: ≈ $0.005 per diagram.
> 
> #### 2️⃣ AI Document Builder
> 
> * Generates **Statements of Work (SOW)**, **High-Level Design (HLD)**, **Detailed Design (DDD)**, and **Technical Docs**.
> * Auto-sections include Scope, Deliverables, Assumptions, Milestones, and Risks.
> * Exports to DOCX / PDF / Markdown.
> 
> #### 3️⃣ AI Presentation Deck Creator
> 
> * Builds executive-style slide decks with titles, bullets, and visual structure.
> * Auto-embeds diagrams and document summaries.
> * Exports to PPTX or PDF instantly.
> 
> #### 4️⃣ Collaboration Workspace
> 
> * Real-time multi-user editing with presence and commenting.
> * Version history and review threads.
> * Roles: Owner / Admin / Editor / Viewer.
> 
> #### 5️⃣ User Management & Team Control
> 
> * Invite members by email and assign roles.
> * Track invites (pending, accepted, expired).
> * Manage teams with Firebase Auth + custom claims and Firestore rules.
> * Integrated team dashboard for role control and activity logs.
> 
> #### 6️⃣ Subscription & Billing Management (Stripe)
> 
> * Subscription plans with AI usage limits and quotas.
> * Integrated Stripe Checkout & Billing Portal.
> * Auto-renew / cancel / upgrade support.
> * Workspace-level usage tracking and monthly resets.
> 
> #### 7️⃣ State Management (Zustand + Realtime)
> 
> * Global app state handled by Zustand with persistent storage.
> * Slices: Auth / Workspace / Project / UI / Presence.
> * Optimistic updates with auto rollback on failure.
> * Realtime presence via Firestore or Liveblocks.
> 
> #### 8️⃣ Knowledge-Aware AI Mode (optional)
> 
> * Trains Gemini on company templates or previous projects.
> * Ensures output matches corporate tone and standards (ServiceNow, Cloud, Finance, etc.).
> 
> ---
> 
> ## 🔧 Technology Architecture
> 
> | Layer         | Technology                                                                                              |
> | ------------- | ------------------------------------------------------------------------------------------------------- |
> | Frontend      | Next.js (React) + React Flow + TailwindCSS + Zustand                                                    |
> | Backend       | Firebase (Functions Node 20 + Firestore + Storage + Auth + Hosting)                                     |
> | AI Models     | **Gemini 2.5 Flash** (fast structured generation)  • **Gemini 1.5 Pro** (for reasoning docs and slides) |
> | Billing       | Stripe Checkout + Billing Portal + Webhook sync                                                         |
> | Collaboration | Liveblocks / Firestore Realtime                                                                         |
> | Exports       | DOCX / PDF / PPTX renderers (Node + Template engine)                                                    |
> 
> ---
> 
> ## 📦 Firebase Data Model (Overview)
> 
> **Collections:**
> `users`, `workspaces`, `projects`, `invites`, `audit`
> **Sub-collections:** `members`, `diagrams`, `documents`, `decks`, `comments`
> 
> Each workspace has a linked plan (`free | starter | business`), Stripe customer/subscription IDs, usage meters, and role-based access controls.
> 
> ---
> 
> ## 💳 Plans & Usage (Stripe Integrated)
> 
> | Plan     | AI Diagrams | AI Docs | AI Decks |    Price |
> | -------- | ----------: | ------: | -------: | -------: |
> | Free     |          10 |       5 |        2 |       $0 |
> | Starter  |         200 |     100 |       50 | $10 / mo |
> | Business |        1000 |     500 |      250 | $25 / mo |
> 
> Usage is enforced server-side in Functions: if usage ≥ limit → the API denies the AI call and shows an upgrade prompt.
> 
> ---
> 
> ## 🔒 Security Model
> 
> * Firebase Auth (Email, Google, Microsoft SSO)
> * Workspace roles via custom claims (owner, admin, editor, viewer)
> * Firestore Rules enforce workspace-scoped access
> * Storage Rules restrict file access to authorized users
> * Stripe webhook signature validation for billing events
> 
> ---
> 
> ## 🧭 User Journey
> 
> 1️⃣ Login / Sign up → Firebase Auth
> 2️⃣ Create Workspace → choose plan or trial
> 3️⃣ Invite teammates via email and assign roles
> 4️⃣ Create Project → enter prompt ("Design ServiceNow HR portal and generate SOW + deck")
> 5️⃣ Gemini 2.5 Flash generates diagram, docs, and deck
> 6️⃣ Edit / collaborate in real time
> 7️⃣ Export final DOCX / PPTX / PDF
> 8️⃣ Track AI usage and manage subscription in billing dashboard
> 
> ---
> 
> ## 💾 Exports & Integrations
> 
> * **DOCX / PDF / PPTX / PNG / SVG / Markdown / Mermaid**
> * Connectors: Google Drive • Confluence • Notion • ServiceNow
> * Stripe Billing Portal for subscription self-management
> 
> ---
> 
> ## 🌈 Vision
> 
> DiagramMind AI is your **AI Architect + Technical Writer + Designer in one platform**.
> Powered by Gemini 2.5 Flash and Firebase, it lets you **think in plain English** and receive enterprise-grade deliverables — visual diagrams, SOWs, design docs, and slides — instantly.
> It combines intelligence, collaboration, and governance to redefine how solution architects, consultants, and engineers design and deliver projects.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom enterprise design system
- **CMS**: Cosmic CMS for content management
- **Diagram Visualization**: React Flow for interactive diagrams
- **TypeScript**: Full type safety with strict mode
- **Icons**: Lucide React for modern icon set
- **Image Optimization**: imgix for responsive images

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager installed (`npm install -g bun`)
- A Cosmic account with bucket credentials

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd diagrammind-ai
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Workspaces with Usage Metrics

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getWorkspaces() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'workspaces'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Workspace[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch workspaces')
  }
}
```

### Fetching Projects with Connected Workspace

```typescript
export async function getProjects() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1) // Includes workspace data
    
    return response.objects as Project[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}
```

### Fetching Diagrams with React Flow JSON

```typescript
export async function getDiagramsByProject(projectId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'diagrams',
        'metadata.project': projectId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Diagram[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch diagrams')
  }
}
```

## Cosmic CMS Integration

This application uses four main content types from Cosmic:

### Workspaces
- **Purpose**: Enterprise team spaces with billing and usage tracking
- **Key Fields**: workspace_name, plan_type, stripe_customer_id, usage_diagrams, usage_docs, usage_decks
- **Usage**: Organize teams and track subscription plans with Stripe integration

### Projects
- **Purpose**: Individual solution design initiatives
- **Key Fields**: project_name, description, workspace (object ref), project_type, status, ai_prompt, gemini_model
- **Usage**: Create and manage design projects with AI generation history

### Diagrams
- **Purpose**: Interactive visualizations with React Flow JSON
- **Key Fields**: diagram_title, project (object ref), diagram_type, react_flow_json, generation_prompt, gemini_model, preview_image
- **Usage**: Store and display AI-generated diagrams with full React Flow data

### Team Members
- **Purpose**: Users with roles and workspace assignments
- **Key Fields**: member_name, email, role, workspace (object ref), status, profile_image
- **Usage**: Manage team access and permissions across workspaces

## Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Build command: `bun run build`
5. Publish directory: `.next`
6. Deploy!

## Environment Variables

Create a `.env.local` file with:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

**Important**: Never commit `.env.local` to version control. The `.gitignore` file is configured to exclude all `.env` files.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects pages
│   │   ├── page.tsx       # Projects list
│   │   └── [slug]/        # Individual project
│   ├── diagrams/          # Diagrams pages
│   │   └── [slug]/        # Individual diagram viewer
│   ├── workspaces/        # Workspaces management
│   └── team/              # Team member management
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── WorkspaceSelector.tsx
│   ├── ProjectCard.tsx
│   ├── DiagramCard.tsx
│   ├── DiagramViewer.tsx  # React Flow visualization
│   ├── TeamMemberCard.tsx
│   └── UsageCard.tsx
├── lib/                   # Utilities
│   ├── cosmic.ts          # Cosmic SDK setup
│   └── utils.ts           # Helper functions
└── types.ts               # TypeScript definitions
```

## Features Explained

### Interactive Diagram Visualization
Each diagram uses React Flow to render interactive node-and-edge visualizations from the Gemini-generated JSON stored in Cosmic. Users can pan, zoom, and explore the diagram structure.

### Multi-Workspace Support
The workspace selector in the navigation allows users to switch between different team spaces, filtering projects and team members accordingly.

### Usage Tracking
Each workspace displays real-time usage metrics for AI-generated diagrams, documents, and decks, along with plan limits (Free: 10/5/2, Starter: 200/100/50, Business: 1000/500/250).

### Role-Based Access Control
Team members are displayed with their roles (Owner, Admin, Editor, Viewer) and status (Active, Pending, Suspended), demonstrating enterprise-level access management.

### Export Format Display
Projects show supported export formats (DOCX, PDF, PPTX, PNG, SVG) as visual badges, indicating the deliverables available for each project.

---

Built with [Cosmic](https://www.cosmicjs.com) - The Headless CMS for modern applications.

<!-- README_END -->