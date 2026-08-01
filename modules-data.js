/* ==========================================================================
   BRAND BUZZER ACADEMY — MASTER ENCYCLOPEDIC MODULES DATASET
   Comprehensive 22-Module Training Handbook for Brand Buzzer Agency
   ========================================================================== */

const ACADEMY_MODULES = [
  // --------------------------------------------------------------------------
  // MODULE 1
  // --------------------------------------------------------------------------
  {
    id: 1,
    title: "Welcome to Brand Buzzer",
    category: "Agency Foundations",
    readTime: "14 min read",
    summary: "Comprehensive introduction to Brand Buzzer's vision, culture, remote-first philosophy, growth mindset, confidentiality, and daily operational standards.",
    intro: "Welcome to Brand Buzzer! We are thrilled to have you join our team. As a remote-first digital marketing agency, we bridge the gap between creative storytelling, performance marketing, web development, custom software engineering, and modern business automations. This module introduces our founding philosophy, culture, and remote workplace expectations.",
    objectives: [
      "Understand Brand Buzzer's mission, vision, core values, and positioning in the digital agency ecosystem.",
      "Master our remote-first (Work From Home) work philosophy and communication expectations.",
      "Adopt an ownership and continuous growth mindset from Day 1.",
      "Learn agency availability rules, confidentiality protocols, and Slack etiquette."
    ],
    whyItMatters: "Working in a remote-first agency gives you extraordinary freedom and flexibility, but that freedom requires high personal responsibility. Our clients trust Brand Buzzer with their marketing investments, revenue growth, brand reputation, and confidential data. Knowing who we are and how we operate ensures seamless collaboration, trust, and professional growth.",
    coreConcepts: `
      <h3>1. Who We Are & Our Market Positioning</h3>
      <p>Brand Buzzer is a modern, remote-first digital marketing agency. We partner with small-to-medium enterprises (SMEs), startups, hospitality groups, healthcare providers, educational institutions, manufacturers, architects, retail brands, and premium local businesses. We do not position ourselves as a casual vendor or cheap freelancer—we act as an extended marketing, creative, and technology partner for our clients.</p>
      
      <h3>2. Mission & Vision Statements</h3>
      <p><strong>Our Mission:</strong> To empower growing businesses with honest, data-driven, and high-impact digital marketing, design, custom web development, and automation solutions that generate verifiable business revenue.</p>
      <p><strong>Our Vision:</strong> To set the global benchmark for transparent, remote-first agency excellence—where creative storytelling meets cutting-edge technological efficiency.</p>

      <h3>3. The 9 Core Values of Brand Buzzer</h3>
      <ul>
        <li><strong>1. Absolute Transparency:</strong> We never hide behind complex marketing jargon, inflated vanity metrics, or false promises. Honest communication with clients and teammates always wins.</li>
        <li><strong>2. Education Before Selling:</strong> We educate our clients so they understand the true strategic value of what we build together.</li>
        <li><strong>3. Practical Marketing over Trends:</strong> We prioritize tactics that generate real sales leads and revenue over short-lived viral gimmicks.</li>
        <li><strong>4. Quality Over Quantity:</strong> We prefer delivering exceptional, high-converting work for 15 clients rather than mediocre work for 50.</li>
        <li><strong>5. Long-Term Partnerships:</strong> We build long-term retainer relationships based on consistent performance and mutual trust.</li>
        <li><strong>6. Continuous Learning:</strong> Digital marketing changes rapidly. Every team member is expected to stay curious and upgrade their skills constantly.</li>
        <li><strong>7. Responsible Use of AI:</strong> We leverage AI and workflow automations to eliminate repetitive manual work, but human creative empathy, ethical review, and quality control are non-negotiable.</li>
        <li><strong>8. Ownership Mindset:</strong> Don't just complete a task; own the outcome. If you spot a flaw, bring a solution alongside the problem.</li>
        <li><strong>9. Accountability & Reliability:</strong> Do what you said you would do, by the time you said you would do it. Reliability is the cornerstone of remote teamwork.</li>
      </ul>

      <h3>4. Remote-First (WFH) Work Philosophy</h3>
      <p>Remote work at Brand Buzzer is built on mutual trust. We do not track your keystrokes or demand fixed desk hours as long as deliverables are met, communication is crisp, and client deadlines are respected. Our core availability window is <strong>10:00 AM to 5:00 PM (Mon-Fri)</strong>.</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <span class="callout-title">Real Agency Example — Ownership Mindset in Action</span>
          <p>An intern noticed a typo on a live client Facebook ad banner 10 minutes before an ad spend scale-up. Instead of waiting for the graphic designer to wake up or posting "who did this?" in Slack, the intern immediately accessed the source file in Figma, corrected the typo, re-uploaded the asset to the client's Drive folder, and notified the account manager in Slack with an updated link. That is ownership!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li><strong>Set up your dedicated workspace:</strong> Ensure a stable high-speed internet connection, quiet workspace, and proper noise-canceling headphones for team/client video calls.</li>
        <li><strong>Log into Slack & ClickUp:</strong> Set up your profile photo (clear professional headshot) and update your Slack status whenever you step out or enter deep focus mode.</li>
        <li><strong>Review your onboarding roadmap:</strong> Complete Modules 1 through 22 sequentially in this academy. Check off the interactive checklist items at the end of each module.</li>
      </ol>
    `,
    commonMistakes: [
      "Going Dark: Going offline for hours during core availability windows without updating your Slack status or notifying your team lead.",
      "Assuming instead of verifying: Guessing a client's brand guidelines rather than checking the master Brand Buzzer Google Drive.",
      "Treating remote work like a casual hobby instead of a disciplined professional career."
    ],
    bestPractices: [
      "Over-communicate: In remote work, if it isn't written down in Slack or ClickUp, it didn't happen.",
      "Acknowledge messages quickly: A simple 'eyes on this 👀' or 'received, on it! 👍' emoji reaction builds immense team confidence.",
      "Protect confidentiality: Never share client credentials, strategy docs, or unreleased assets publicly."
    ],
    checklist: [
      "Read and signed the Brand Buzzer Non-Disclosure Agreement (NDA)",
      "Set up official agency Google Workspace email & Slack account",
      "Uploaded a clear professional headshot profile photo on Slack and ClickUp",
      "Configured core availability notifications in Slack and Google Calendar"
    ],
    resources: [
      { name: "Brand Buzzer Cultural Charter (PDF)", type: "PDF Guide", desc: "Our founding principles, remote policies, and agency handbook." },
      { name: "Slack Etiquette & Emoji Key", type: "Doc", desc: "Internal guide on how we use channel tags and status icons." }
    ],
    quiz: [
      {
        question: "What is Brand Buzzer's core philosophy regarding client communication?",
        options: [
          "Use complex marketing jargon to sound authoritative",
          "Transparency, honest communication, and educating clients first",
          "Only report positive news and hide negative campaign data",
          "Automate all client communication with AI chatbots"
        ],
        correct: 1,
        explanation: "Brand Buzzer prioritizes transparency, honest reporting, and client education over jargon or hidden data."
      },
      {
        question: "What does an 'Ownership Mindset' mean at Brand Buzzer?",
        options: [
          "Buying equity shares in the agency",
          "Doing only the bare minimum listed in your job contract",
          "Owning outcomes, taking initiative to solve problems, and bringing solutions",
          "Refusing to help teammates outside your department"
        ],
        correct: 2,
        explanation: "An ownership mindset means taking full responsibility for quality outcomes and proactively fixing issues."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2
  // --------------------------------------------------------------------------
  {
    id: 2,
    title: "Understanding Marketing Agencies",
    category: "Agency Foundations",
    readTime: "15 min read",
    summary: "Detailed overview of agency organizational structures, department workflows, financial retainer models, project pricing, and client retention strategies.",
    intro: "To excel at Brand Buzzer, you must understand how marketing agencies function from the inside out. This module explains agency business models, department workflows, retainer structures, financial economics, and why clients hire agencies over freelancers or in-house marketing hires.",
    objectives: [
      "Master the key departments and roles in a full-service digital agency.",
      "Understand the difference between monthly retainer contracts and project-based fees.",
      "Learn the 5 phases of the Client Lifecycle (Acquisition, Onboarding, Execution, Retention, Expansion).",
      "Differentiate between freelancers, in-house teams, and specialized digital agencies."
    ],
    whyItMatters: "Understanding the agency ecosystem helps you see where your specific daily role fits into the larger business machine. Whether you write a line of copy, design a graphic, optimize an ad campaign, or build a web layout, your work directly impacts client retention, agency profit, and client ROI.",
    coreConcepts: `
      <h3>1. Breakdown of Agency Departments</h3>
      <p>A full-service agency relies on cross-functional teamwork across 4 primary pillars:</p>
      <ul>
        <li><strong>1. Account Management & Client Strategy:</strong> The main bridge between the client and internal agency teams. Manages client relationships, sets project roadmaps, hosts weekly review calls, and tracks goals.</li>
        <li><strong>2. Creative & Content Production:</strong> Copywriters, graphic designers, video editors, and content strategists who produce visual, written, and video assets for campaigns.</li>
        <li><strong>3. Performance Marketing & Media Buying:</strong> Specialists who manage ad spend across Meta Ads, Google Ads, LinkedIn Ads, set up conversion tracking pixels, and optimize Return On Ad Spend (ROAS).</li>
        <li><strong>4. Web Development & Technology Operations:</strong> Web developers and automation engineers who build landing pages, custom websites, CRM lead pipelines, and AI workflow automations.</li>
      </ul>

      <h3>2. How Agencies Make Money: Retainers vs Projects</h3>
      <p>Agencies operate on two primary revenue models:</p>
      <ul>
        <li><strong>Monthly Retainer Contract:</strong> Client pays a fixed monthly recurring fee (e.g., $3,000/month) for an agreed scope of ongoing services (e.g., 15 social posts, $10k Meta ad management, bi-weekly reporting, website maintenance). Retainers provide predictable agency revenue and long-term client growth.</li>
        <li><strong>Project-Based Fee:</strong> A fixed one-time fee for a specific deliverable (e.g., $4,500 for a custom WordPress website rebuild or $1,800 for a brand identity suite).</li>
      </ul>

      <h3>3. Why Clients Hire Brand Buzzer vs In-House Hires or Freelancers</h3>
      <p>An in-house Marketing Manager costs $70,000+/year plus benefits, but possesses limited skill breadth (e.g. good at writing, bad at ad buying or web coding). A freelancer is inexpensive, but lacks bandwidth, reliability, and systems. Brand Buzzer provides clients an entire team of senior specialists (strategist, designer, copywriter, media buyer, developer) for less than the cost of one full-time salary!</p>

      <h3>4. The 5 Phases of the Client Lifecycle</h3>
      <p>1. Lead Acquisition -> 2. Smooth Onboarding -> 3. High-Impact Execution -> 4. Long-Term Retention -> 5. Retainer Expansion (Cross-selling services).</p>
    `,
    agencyExamples: `
      <div class="callout callout-info">
        <div class="callout-icon">📊</div>
        <div class="callout-body">
          <span class="callout-title">Retainer Financial Example</span>
          <p>Client: 'Grand Vista Resort' pays Brand Buzzer a $3,500/month retainer. Deliverables: 16 Instagram Reels/Carousels, Meta Ad management ($12k ad spend), Google Search Ads management, and bi-weekly reporting calls. If we deliver 4.5x ROAS ($54k bookings), they gladly stay with us for years!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Open ClickUp and inspect the Brand Buzzer Organizational Chart.</li>
        <li>Identify your key points of contact (Account Lead, Creative Lead, Performance Lead).</li>
        <li>Review active client retainer briefs to understand agreed monthly deliverables.</li>
      </ol>
    `,
    commonMistakes: [
      "Working in a Silo: Designing a graphic without checking ad copy dimensions with the media buyer.",
      "Scope Creep: Doing extra work for a client outside the agreed retainer scope without issuing a formal project add-on fee.",
      "Focusing on vanity metrics (likes/shares) instead of real business outcomes (leads/revenue)."
    ],
    bestPractices: [
      "Always verify retainer deliverables at the start of each month in ClickUp.",
      "Flag scope creep requests immediately to the Account Lead before executing work.",
      "Cross-collaborate: Designers and copywriters should brainstorm visual concepts together."
    ],
    checklist: [
      "Reviewed Brand Buzzer service matrix and retainer package pricing",
      "Understood the difference between Project Scope and Monthly Retainer",
      "Identified all members of your client account team in Slack"
    ],
    resources: [
      { name: "Agency Retainer Scope Matrix", type: "Sheet", desc: "Breakdown of deliverables per retainer tier." }
    ],
    quiz: [
      {
        question: "Why do clients hire an agency like Brand Buzzer instead of an in-house marketing hire?",
        options: [
          "Agencies are always 100% automated by AI",
          "To gain access to a complete team of specialized experts for less than the cost of one full-time employee",
          "Agencies do not charge money for their work",
          "In-house employees are not allowed to use social media"
        ],
        correct: 1,
        explanation: "Agencies provide deep cross-disciplinary expertise (strategy, design, ads, dev) at a fraction of hiring multiple internal salaries."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 3 — MASSIVELY EXPANDED SERVICES
  // --------------------------------------------------------------------------
  {
    id: 3,
    title: "Brand Buzzer Services",
    category: "Agency Foundations",
    readTime: "22 min read",
    summary: "Exhaustive breakdown of Brand Buzzer's 7 core service pillars, full scope of deliverables, custom web coding, complete branding suites, performance marketing mechanics, and service synergies.",
    intro: "As a Brand Buzzer team member, you must know our core offerings inside out. Brand Buzzer is not a basic single-service shop—we deliver end-to-end solutions ranging from custom coded web applications and full-scale packaging branding to multi-channel performance ad campaigns and custom AI automations. This module provides a complete deep-dive into all 7 core agency services.",
    objectives: [
      "Master the comprehensive deliverables of Brand Buzzer's 7 core service offerings.",
      "Understand our full spectrum of Web Development (custom coded HTML/CSS/JS/React/Next.js to WordPress & Shopify).",
      "Master our Complete Branding Suite (from logo suites and typography to product packaging and brand books).",
      "Understand Performance Marketing mechanics across Meta, Google, LinkedIn, and TikTok Ads.",
      "Identify cross-selling and interdepartmental service integration opportunities."
    ],
    whyItMatters: "A client who hired us for social media marketing might also need a custom coded landing page rebuild, a product packaging refresh, or a lead-routing automation. Understanding our full scope allows you to spot client needs, solve deeper business problems, and expand agency retainer value.",
    coreConcepts: `
      <h3>The 7 Core Brand Buzzer Services — Exhaustive Breakdown</h3>

      <h4>1. Social Media Marketing (SMM) & Community Management</h4>
      <p><strong>What it is:</strong> Data-driven organic social media growth, visual content creation, short-form video scripting, and active community management across 9 platforms (Instagram, Facebook, LinkedIn, Pinterest, Threads, X, YouTube, TikTok, Google Business Profile).</p>
      <p><strong>Deliverables Scope:</strong>
        <ul>
          <li>Monthly 30-day content calendar with strategic funnel tagging (TOFU/MOFU/BOFU).</li>
          <li>Custom graphics, multi-slide carousels (4:5 vertical ratio), and infographic design.</li>
          <li>Short-form video production: Reel scripting, dynamic captions, trending audio selection, and video editing (9:16 vertical ratio).</li>
          <li>Caption copywriting with high-converting headline hooks, emojis, and niche hashtag sets.</li>
          <li>Active community management: Responding to comments and DMs within 2-4 hours during business hours.</li>
          <li>UGC (User Generated Content) curation and influencer collaboration management.</li>
          <li>Monthly performance reporting on engagement rate, reach, profile visits, and link clicks.</li>
        </ul>
      </p>

      <h4>2. Performance Marketing & Paid Advertising (PPC)</h4>
      <p><strong>What it is:</strong> High-ROI paid advertising management across Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Shopping, YouTube, Performance Max / PMax), LinkedIn Ads, and TikTok Ads.</p>
      <p><strong>Deliverables Scope:</strong>
        <ul>
          <li>Comprehensive audience research: Broad targeting, interest stacks, custom retargeting lists, and Lookalike Audiences (1-5%).</li>
          <li>Ad creative design & A/B copywriting testing (static image ads, carousel ads, UGC video ads).</li>
          <li>Technical pixel deployment: Meta Pixel, Meta Conversion API (CAPI), Google Tag Manager conversion events, and GA4 event tracking.</li>
          <li>Bid strategy management: Target CPA (tCPA), Target ROAS (tROAS), and Maximize Conversions.</li>
          <li>UTM link tracking setup for precise revenue attribution.</li>
          <li>Bi-weekly campaign optimization, ad fatigue prevention, creative refreshing, and transparent ROAS reporting.</li>
        </ul>
      </p>

      <h4>3. Website Design & Development (ALL KINDS)</h4>
      <p><strong>What it is:</strong> End-to-end web engineering, from custom coded web applications to CMS platforms and e-commerce stores.</p>
      <p><strong>Deliverables Scope:</strong>
        <ul>
          <li><strong>Custom Coded Websites & Web Apps:</strong> HTML5, CSS3, Vanilla JavaScript, React.js, Next.js, Node.js, and custom REST API integrations for lightning-fast performance and bespoke functionality.</li>
          <li><strong>WordPress Development:</strong> Custom WordPress themes, Gutenberg blocks, Elementor Pro layouts, custom plugin integration, and WooCommerce e-commerce development.</li>
          <li><strong>Shopify E-Commerce Stores:</strong> Custom Liquid theme modification, Shopify app integrations, conversion-focused product pages, cart drawer optimization, and payment gateway setup.</li>
          <li><strong>Webflow & Landing Page Builders:</strong> High-speed marketing landing pages built for instant conversion.</li>
          <li><strong>Performance & Technical SEO:</strong> Google PageSpeed Insights mobile optimization (score > 85), WebP image compression, SSL HTTPS security, Cloudflare CDN integration, XML sitemaps, schema markup, and canonical URL structure.</li>
        </ul>
      </p>

      <h4>4. Complete Branding Solutions & Identity Systems</h4>
      <p><strong>What it is:</strong> Crafting full-spectrum visual brand identity systems that make businesses recognizable, premium, and authoritative across physical and digital touchpoints.</p>
      <p><strong>Deliverables Scope:</strong>
        <ul>
          <li><strong>Logo Suite:</strong> Primary logo, secondary logo, brand mark / icon, sub-mark, and favicon in vector formats (.SVG, .EPS, .AI, transparent PNG).</li>
          <li><strong>Typography System:</strong> Primary headline fonts, body copy pairings, web fonts, and font usage hierarchy guidelines.</li>
          <li><strong>Color Palette & Psychology:</strong> Primary, secondary, accent, and neutral color hex codes, RGB, CMYK, and Pantone matches.</li>
          <li><strong>Product Packaging & Label Design:</strong> Retail box design, pouch design, product bottle labels, shipping boxes, tissue paper, and unboxing experience assets (print-ready CMYK with 3mm bleed).</li>
          <li><strong>Print & Collateral:</strong> Business cards, letterheads, envelopes, brochures, flyers, restaurant menus, corporate folders, and physical signage.</li>
          <li><strong>Digital Brand Kit:</strong> Social media avatar templates, banner headers, email signatures, presentation pitch deck templates, and brand style guide book (PDF).</li>
          <li><strong>Brand Voice & Tone Guidelines:</strong> Mission statement, brand story, core values, messaging pillars, and copywriting do's & don'ts.</li>
        </ul>
      </p>

      <h4>5. Press Release & Public Relations (PR) Communications</h4>
      <p><strong>What it is:</strong> Public relations drafting, press release syndication, media distribution, and executive brand positioning to build high Domain Authority (DA) backlinks and media credibility.</p>
      <p><strong>Deliverables Scope:</strong> Professional PR writeups, distribution across 100+ news sites (AP News, MarketWatch, Yahoo Finance, regional news portals), media outreach, and crisis communications frameworks.</p>

      <h4>6. Custom AI Solutions & Business Automations</h4>
      <p><strong>What it is:</strong> Integrating artificial intelligence models and workflow automation platforms (n8n, Zapier, Make) into client operations.</p>
      <p><strong>Deliverables Scope:</strong> Instant lead routing from webforms to sales team WhatsApp/CRM in under 10 seconds, automated AI proposal generation, AI customer support chatbots, meeting transcript summarization, automated reporting pipelines, and custom API webhooks.</p>

      <h4>7. Customized Marketing Solutions</h4>
      <p><strong>What it is:</strong> Tailored hybrid marketing strategies built specifically for niche industries (e.g. dental clinic growth systems, real estate lead pipelines, architecture portfolios, hospitality booking engines).</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🔗</div>
        <div class="callout-body">
          <span class="callout-title">Full Service Agency Synergy Example</span>
          <p>Client: 'Aura Organic Skincare'. We created their full brand identity & product packaging design (Branding), engineered a custom Shopify Liquid store (Web Dev), ran Meta Video Ads showcasing unboxing Reels (Performance Marketing), set up automated lead SMS notifications on n8n (AI Automations), and published press releases on top beauty portals (PR). That is the full power of Brand Buzzer!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Review sample client proposals in Google Drive under <code>Templates/Proposals</code>.</li>
        <li>Study how deliverables are broken down into phase timelines (Week 1 Setup & Discovery, Week 2 Creation & Dev, Week 3 Launch, Week 4 Optimization).</li>
      </ol>
    `,
    commonMistakes: [
      "Promising deliverables outside our core scope without consulting department leads.",
      "Treating Web Dev and Performance Marketing as separate islands instead of connected conversion funnels."
    ],
    bestPractices: [
      "Always connect services back to client revenue (e.g. 'Social posts build trust -> Landing page converts traffic -> Automation closes lead').",
      "Keep deliverable scope descriptions clear, concrete, and quantifiable."
    ],
    checklist: [
      "Memorized the 7 core Brand Buzzer service pillars",
      "Reviewed custom web development capabilities (Custom Code, WP, Shopify)",
      "Reviewed Complete Branding Suite deliverables (Logo, Packaging, Brand Books)",
      "Bookmarked the Agency Service One-Pager document"
    ],
    resources: [
      { name: "Brand Buzzer Services Master Catalog", type: "PDF", desc: "Detailed breakdown of all agency service packages and deliverables." }
    ],
    quiz: [
      {
        question: "Which Brand Buzzer service covers custom coded React/Next.js websites, WordPress, Shopify Liquid development, and page speed optimization?",
        options: [
          "Press Release & Communications",
          "Website Design & Development",
          "Branding Solutions",
          "Organic Pinterest Marketing"
        ],
        correct: 1,
        explanation: "Website Design & Development encompasses custom coded web apps, WordPress, Shopify, Webflow, and page performance optimization."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 4
  // --------------------------------------------------------------------------
  {
    id: 4,
    title: "Understanding Clients",
    category: "Client Management & Onboarding",
    readTime: "15 min read",
    summary: "Frameworks for business discovery, competitor analysis, target audience personas, positioning, and uncovering true client goals.",
    intro: "Before creating a single graphic or launching an ad campaign, we must deeply understand who the client is, who their customers are, and what business problem they need us to solve. Great digital marketing starts with empathy, empirical market research, and financial clarity.",
    objectives: [
      "Master the 4-Pillar Client Discovery process.",
      "Conduct thorough competitor and target audience research.",
      "Define Buyer Personas, Customer Lifetime Value (LTV), and Unique Selling Proposition (USP).",
      "Ask high-impact discovery questions that reveal underlying revenue goals."
    ],
    whyItMatters: "If you don't understand the client's business model, you will produce generic marketing that fails to convert. A luxury architecture firm requires vastly different tone, imagery, and ad targeting than a local quick-service restaurant.",
    coreConcepts: `
      <h3>1. The 4-Pillar Business Discovery Framework</h3>
      <p>When onboarding a new client account, analyze 4 fundamental pillars:</p>
      <ul>
        <li><strong>1. Business Fundamentals & Financials:</strong> How do they make money? What is their Average Order Value (AOV)? What is their Customer Lifetime Value (LTV)? What is their primary high-margin offer?</li>
        <li><strong>2. Target Audience (Buyer Personas):</strong> Who buys from them? What are their demographics (age, income, location), psychographics (desires, fears, values), pain points, and online hangouts?</li>
        <li><strong>3. Competitor Analysis:</strong> Who are their top 3 direct local competitors and top 2 national aspirational brands? What are competitors doing well, and what gaps are they leaving open?</li>
        <li><strong>4. Unique Selling Proposition (USP):</strong> Why should a customer choose this business over everyone else? (Speed, price, quality, proprietary process, customer service?).</li>
      </ul>

      <h3>2. Discovery Questions Every Marketer Must Ask</h3>
      <ul>
        <li>"What is the single most profitable product or service in your business right now?"</li>
        <li>"Who is your ideal dream customer, and who is your worst-fit nightmare customer?"</li>
        <li>"If we generate 50 new qualified leads next week, do you have a sales process ready to close them?"</li>
        <li>"What marketing channels have you tried in the past, and why did they fail or succeed?"</li>
      </ul>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🔍</div>
        <div class="callout-body">
          <span class="callout-title">Client Discovery Transformation</span>
          <p>A boutique gym client told us: 'We want 10,000 Instagram followers.' During discovery, we learned their membership fee is $150/month with an average retention of 12 months ($1,800 LTV). We redirected them from follower growth to local Meta Lead Ads targeting busy moms within 5 miles. Result: 24 new members ($43k lifetime revenue) in 60 days!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Open the <code>Client Discovery Intake Form</code> template in Google Drive.</li>
        <li>Review existing intake responses before starting work on any client account.</li>
        <li>Use Meta Ad Library and Google Search to audit client competitors' active ads.</li>
      </ol>
    `,
    commonMistakes: [
      "Taking client requests literally ('make us viral') without understanding core business metrics.",
      "Skipping competitor research and copying generic industry templates."
    ],
    bestPractices: [
      "Always find the business Customer Lifetime Value (LTV) to determine acceptable Customer Acquisition Cost (CAC).",
      "Document target audience pain points using real client review quotes."
    ],
    checklist: [
      "Completed Target Audience Persona Sheet",
      "Audited Top 3 Direct Competitors (Ads, Website, Social)",
      "Documented Client USP & Primary High-Margin Offer"
    ],
    resources: [
      { name: "Client Discovery Questionnaire (Template)", type: "Doc", desc: "Master list of 15 discovery questions." }
    ],
    quiz: [
      {
        question: "Why is knowing a client's Customer Lifetime Value (LTV) critical for marketing campaigns?",
        options: [
          "It helps us pick the font color for Instagram graphics",
          "It determines how much money the business can profitably spend to acquire a customer (CAC)",
          "LTV is only used by tax accountants",
          "It tells us how many followers they need"
        ],
        correct: 1,
        explanation: "LTV dictates acceptable acquisition costs. A business with a $5,000 LTV can spend far more on ads than one with a $20 LTV."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 5
  // --------------------------------------------------------------------------
  {
    id: 5,
    title: "Client Onboarding",
    category: "Client Management & Onboarding",
    readTime: "15 min read",
    summary: "Step-by-step 12-stage pipeline from sales lead to signed agreement, deposit invoice, kickoff call, internal ClickUp setup, and asset handover.",
    intro: "Onboarding sets the tone for the entire client relationship. A smooth, highly organized onboarding process instills immediate confidence in the client and ensures internal team members have everything required to execute without friction.",
    objectives: [
      "Master Brand Buzzer's 12-step client onboarding pipeline.",
      "Understand agreement signing, invoicing, and payment confirmation protocols.",
      "Conduct professional Kickoff Meetings with clear client expectations.",
      "Set up internal project boards in ClickUp and Slack seamlessly."
    ],
    whyItMatters: "First impressions matter. If onboarding is chaotic, delayed, or unorganized, the client will doubt our competence even if our creative work is stellar. Smooth onboarding builds immediate trust.",
    coreConcepts: `
      <h3>The 12-Step Brand Buzzer Onboarding Pipeline</h3>
      <ol>
        <li><strong>1. Lead Received:</strong> Inbound query via website, referral, or outreach recorded in CRM.</li>
        <li><strong>2. Discovery Call:</strong> 20-30 min call with Account Manager to evaluate fit and goals.</li>
        <li><strong>3. Requirement Gathering:</strong> Collecting specific project parameters and asset scope.</li>
        <li><strong>4. Proposal Sent:</strong> Tailored proposal outlining strategy, deliverables, timeline, and investment.</li>
        <li><strong>5. Agreement Signed:</strong> Digital contract signed via DocuSign / HelloSign.</li>
        <li><strong>6. Invoice Sent:</strong> First month retainer or 50% project deposit invoice issued.</li>
        <li><strong>7. Payment Verified:</strong> Finance team confirms receipt of payment. <em>(No work begins until payment clears!)</em></li>
        <li><strong>8. Kickoff Call Scheduled:</strong> 45-min official welcome call with the project team.</li>
        <li><strong>9. Asset Collection Sheet Issued:</strong> Client provided with secure upload folder link.</li>
        <li><strong>10. Timeline & Roadmap Finalized:</strong> Milestones mapped out in ClickUp.</li>
        <li><strong>11. Internal Team Briefing:</strong> Account Lead briefs designer, media buyer, and copywriter.</li>
        <li><strong>12. Client Communication Setup:</strong> Client added to shared Slack connect channel or weekly update schedule.</li>
      </ol>
    `,
    agencyExamples: `
      <div class="callout callout-warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <span class="callout-title">Golden SOP Rule</span>
          <p>NEVER begin designing, setting up ad accounts, or purchasing domains until the client agreement is signed AND payment has been verified by the finance department. No exceptions!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Check the ClickUp Onboarding template list.</li>
        <li>Duplicate the master board and rename it to <code>[CLIENT NAME] — Onboarding</code>.</li>
        <li>Assign subtasks with clear due dates to team members.</li>
      </ol>
    `,
    commonMistakes: [
      "Starting creative work on verbal promises before payment clears.",
      "Forgetting to send the secure Asset Collection sheet on Kickoff day."
    ],
    bestPractices: [
      "Send a clear 'Welcome Packet' PDF immediately after agreement signing.",
      "Establish communication boundaries (e.g. 'We respond in Slack Mon-Fri 10am-5pm')."
    ],
    checklist: [
      "Signed Agreement on file in Drive",
      "First Invoice Payment Confirmed",
      "ClickUp Project Board Created & Assigned",
      "Client Asset Folder Created on Google Drive"
    ],
    resources: [
      { name: "Brand Buzzer Client Welcome Packet", type: "PDF Template", desc: "Standard welcome deck sent to new clients." }
    ],
    quiz: [
      {
        question: "When is work officially permitted to start on a new client account?",
        options: [
          "As soon as the client says 'looks good' on WhatsApp",
          "Only after the agreement is signed AND first payment is confirmed",
          "Immediately after sending the proposal",
          "When the designer has free time"
        ],
        correct: 1,
        explanation: "No work or asset allocation begins until contracts are signed and funds have cleared finance verification."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 6
  // --------------------------------------------------------------------------
  {
    id: 6,
    title: "Collecting Client Assets",
    category: "Client Management & Onboarding",
    readTime: "14 min read",
    summary: "Standardized protocols for requesting, receiving, organizing, and securing client brand files, media, and credentials.",
    intro: "Missing logos, broken drive links, low-resolution graphics, and forgotten passwords stall agency momentum. This module teaches how to request, systematically store, and organize client assets securely.",
    objectives: [
      "Implement Brand Buzzer's standardized Google Drive folder hierarchy.",
      "Request high-res vector logos, brand typography, and media assets properly.",
      "Master asset file naming conventions and access management."
    ],
    whyItMatters: "Searching through messy email threads for a client logo wastes hours of expensive agency time. Clean folder organization keeps the entire team efficient and prevents embarrassing mistakes like using old logo versions.",
    coreConcepts: `
      <h3>1. Standard Brand Buzzer Google Drive Hierarchy</h3>
      <p>Every client must have a master folder inside the agency Google Drive structured as follows:</p>
      <div class="code-block">
        <div class="code-header">Google Drive Directory SOP</div>
        <div class="code-content">[Client Name] - Master Directory/
├── 01_Brand_Assets/
│   ├── Logos (PNG, SVG, EPS, AI)
│   ├── Fonts/
│   └── Brand_Guidelines.pdf
├── 02_Raw_Media/
│   ├── Product_Photos/
│   ├── HighRes_Videos/
│   └── Team_Headshots/
├── 03_Copy_and_Messaging/
├── 04_Social_Media_Deliverables/
│   └── [YYYY-MM] Content Calendar/
├── 05_Performance_Ads/
├── 06_Web_Development/
└── 07_Reports_and_Analytics/</div>
      </div>

      <h3>2. File Naming Conventions</h3>
      <p>Never leave files named <code>IMG_9482.png</code> or <code>logo final (1).jpg</code>. Standard naming rule:</p>
      <p><code>[ClientName]_[AssetType]_[Variant]_[YYYYMMDD].[ext]</code></p>
      <p>Example: <code>ApexDental_Logo_PrimaryVector_20260801.svg</code></p>
    `,
    agencyExamples: `
      <div class="callout callout-tip">
        <div class="callout-icon">📁</div>
        <div class="callout-body">
          <span class="callout-title">Asset Collection Best Practice</span>
          <p>Always request vector logo files (.SVG, .EPS, .AI) or high-resolution transparent PNGs (at least 2000px wide). If a client sends a low-res JPEG snippet from a WhatsApp screenshot, politely request vector formats from their designer.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Create client master folder using the agency Google Drive template shortcut.</li>
        <li>Send the client the <code>Secure Asset Intake Form</code> link.</li>
        <li>Verify uploaded files against the Asset Checklist before marking complete.</li>
      </ol>
    `,
    commonMistakes: [
      "Downloading client files to your local laptop desktop without backing up to Google Drive.",
      "Accepting low-resolution pixelated photos for high-budget ad campaigns."
    ],
    bestPractices: [
      "Store credentials exclusively in 1Password / Bitwarden—never in plain text Slack messages.",
      "Check that Google Drive folder permissions are set to 'Restricted to Brand Buzzer Team'."
    ],
    checklist: [
      "Master Client Drive folder created with 7 sub-directories",
      "Vector logo files (.SVG / .PNG) uploaded and verified",
      "Brand fonts and color hex codes documented",
      "All credentials stored securely in agency Password Vault"
    ],
    resources: [
      { name: "Client Asset Intake Checklist (Sheet)", type: "Template", desc: "Interactive asset collection tracking spreadsheet." }
    ],
    quiz: [
      {
        question: "What logo file format is preferred for high-quality graphic design and web development?",
        options: [
          "Low-res .JPG screenshot from phone",
          "Vector formats (.SVG, .EPS) or transparent PNG",
          ".BMP file format",
          "Word document embedded graphic"
        ],
        correct: 1,
        explanation: "Vector files (.SVG, .EPS) scale infinitely without pixelation, guaranteeing crisp design output across all screen sizes."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 7
  // --------------------------------------------------------------------------
  {
    id: 7,
    title: "Platform Setup & Business Accounts",
    category: "Client Management & Onboarding",
    readTime: "18 min read",
    summary: "Complete guide to setting up, linking, delegating permissions, and securing access across 24 critical business platforms.",
    intro: "To manage campaigns, build websites, or execute automations, Brand Buzzer needs proper agency permissions across client platforms. This module details the purpose, access levels, security protocols, and SOPs for 24 core platforms.",
    objectives: [
      "Master administrative and partner access delegation across Google, Meta, and Web platforms.",
      "Understand 2-Factor Authentication (2FA) and password security protocols.",
      "Avoid common account restriction, suspension, and verification traps."
    ],
    whyItMatters: "Gaining partner access via Meta Business Portfolio or Google Manager accounts ensures the client retains 100% legal ownership of their digital assets while giving our agency precise management permissions without sharing personal passwords.",
    coreConcepts: `
      <h3>The 24 Core Agency Platforms & Setup SOPs</h3>
      <p>Always request <strong>Partner Access</strong> or <strong>Admin Delegation</strong> rather than asking clients for personal passwords whenever supported!</p>
      
      <div class="resource-grid">
        <div class="resource-card">
          <span class="resource-icon">🌐</span>
          <span class="resource-title">1. Meta Business Portfolio</span>
          <span class="resource-desc">Central hub for Facebook Pages, Instagram Accounts, Meta Pixels, and Ad Accounts. Request access via Partner ID: <code>88291049182</code>.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">📊</span>
          <span class="resource-title">2. Google Analytics 4 (GA4)</span>
          <span class="resource-desc">Tracks web traffic and conversions. Client delegates 'Administrator' or 'Editor' rights to agency Google Manager email.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">🔎</span>
          <span class="resource-title">3. Google Search Console</span>
          <span class="resource-desc">Monitors website indexing, search keywords, and technical SEO health. Add agency email as Full Owner.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">🏷️</span>
          <span class="resource-title">4. Google Tag Manager (GTM)</span>
          <span class="resource-desc">Deploys pixels, event tags, and conversion scripts without editing site code. Request Admin access to Container.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">🎯</span>
          <span class="resource-title">5. Google Ads Account</span>
          <span class="resource-desc">Search, Display & YouTube campaigns. Link client 10-digit Customer ID to Brand Buzzer Google MCC (Manager Account).</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">📍</span>
          <span class="resource-title">6. Google Business Profile</span>
          <span class="resource-desc">Local SEO map listings & reviews. Client grants 'Manager' role to Brand Buzzer Agency account.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">💬</span>
          <span class="resource-title">7. WhatsApp Business API</span>
          <span class="resource-desc">Automated lead messaging & CRM integration via Meta Business Manager.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">💼</span>
          <span class="resource-title">8. LinkedIn Company Page</span>
          <span class="resource-desc">B2B marketing & employer branding. Client grants 'Super Admin' or 'Content Admin' role.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">☁️</span>
          <span class="resource-title">9. Cloudflare</span>
          <span class="resource-desc">DNS routing, SSL security, and CDN caching. Delegated access granted via account email.</span>
        </div>
        <div class="resource-card">
          <span class="resource-icon">🛒</span>
          <span class="resource-title">10. Shopify / WordPress</span>
          <span class="resource-desc">E-commerce & CMS platforms. Request Staff Account access or Collaborator Code.</span>
        </div>
      </div>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🔒</div>
        <div class="callout-body">
          <span class="callout-title">Security & Permission Standard</span>
          <p>Client assets MUST remain owned by the client's email/business entity. Brand Buzzer NEVER registers client domains or ad accounts under agency personal emails. If a client offboards, access is cleanly revoked with zero hostage friction.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Send client the <code>Platform Access Request Checklist</code> detailing our Meta Partner ID and Manager emails.</li>
        <li>Verify access levels across Google Ads MCC, Meta Business Manager, and Analytics.</li>
        <li>Test pixel fires using Google Tag Assistant and Meta Pixel Helper browser extensions.</li>
      </ol>
    `,
    commonMistakes: [
      "Creating client Facebook Pages under an intern's personal Facebook account.",
      "Sharing raw passwords over plain unencrypted email or Slack messages."
    ],
    bestPractices: [
      "Enable 2FA (Two-Factor Authentication) on every account immediately.",
      "Use agency password vault (Bitwarden / 1Password) for storing legacy passwords."
    ],
    checklist: [
      "Meta Business Partner access requested and accepted",
      "Google MCC linked for PPC management",
      "GA4 and Google Search Console editor permissions verified",
      "2FA enabled on all connected platform accounts"
    ],
    resources: [
      { name: "Platform Access Step-by-Step Client Guide", type: "PDF Guide", desc: "Visual guide showing clients how to grant agency access." }
    ],
    quiz: [
      {
        question: "How should Brand Buzzer gain access to a client's Meta Business Suite & Ad Account?",
        options: [
          "Ask the client to text us their personal Facebook password",
          "Send a Partner Access Request using Brand Buzzer's Meta Business ID",
          "Create a fake Facebook profile for the client",
          "Hack into their ad account"
        ],
        correct: 1,
        explanation: "Partner access allows secure management without compromising the client's personal login details or asset ownership."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 8
  // --------------------------------------------------------------------------
  {
    id: 8,
    title: "Social Media Foundations",
    category: "Social Media & Content Strategy",
    readTime: "16 min read",
    summary: "Platform breakdowns, audience demographics, content formats, posting frequencies, and community management rules.",
    intro: "Social media is not one-size-fits-all. What works on TikTok or Instagram Reels will fail on LinkedIn or Pinterest. This module breaks down target audiences, optimal formats, and engagement strategies for 9 major social platforms.",
    objectives: [
      "Master the unique audience, tone, and algorithm mechanics of 9 social channels.",
      "Select the right platform mix based on client industry (B2B vs B2C).",
      "Execute effective community management and response protocols."
    ],
    whyItMatters: "Posting corporate press releases on TikTok or casual meme videos on LinkedIn destroys brand credibility. Matching format to audience expectations is essential for organic growth.",
    coreConcepts: `
      <h3>Platform Matrix & Breakdown</h3>
      <ul>
        <li><strong>Instagram:</strong> Visual storytelling, lifestyle, Reels, Carousels, Stories. Best for B2C, e-commerce, hospitality, fashion, local services. High visual aesthetics required.</li>
        <li><strong>LinkedIn:</strong> Professional networking, B2B thought leadership, long-form articles, PDF carousels, industry insights. Professional, authoritative tone.</li>
        <li><strong>Facebook:</strong> Local community building, older demographics (35-65+), Facebook Groups, local events, video clips. Great for local services, healthcare, real estate.</li>
        <li><strong>YouTube:</strong> Long-form education, podcasts, product reviews, YouTube Shorts. High search intent engine (2nd largest search engine globally).</li>
        <li><strong>Google Business Profile (GBP):</strong> Local SEO, business hours, customer reviews, photo updates, direct calls/directions. Vital for local brick-and-mortar stores.</li>
        <li><strong>Pinterest:</strong> Visual discovery, home decor, architecture, fashion, wedding planning, DIY recipes. High purchase intent drives website traffic.</li>
        <li><strong>X (Twitter) & Threads:</strong> Real-time news, tech conversations, brand banter, public relations, community pulse.</li>
        <li><strong>WhatsApp Business:</strong> Direct customer chat, catalog showcases, broadcast updates, automated FAQs.</li>
      </ul>

      <h3>Community Management SOP</h3>
      <p>Always respond to comments and direct messages (DMs) within 2 to 4 hours during business hours. Engagement boosts algorithmic reach!</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">💬</div>
        <div class="callout-body">
          <span class="callout-title">Community Response Example</span>
          <p>User comment: 'How much is this service?'<br>Bad Response: 'DM sent.'<br>Brand Buzzer SOP Response: 'Hi Sarah! Our pricing starts at $499 depending on your package scope. We just sent you a detailed breakdown in DMs! 😊'</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Review client channel strategy matrix in the campaign brief.</li>
        <li>Set up Meta Business Suite and LinkedIn Page notifications.</li>
        <li>Check community DMs twice daily (10am and 4pm).</li>
      </ol>
    `,
    commonMistakes: [
      "Cross-posting identical image/text copy across all platforms without tweaking formatting.",
      "Ignoring negative comments or deleting constructive feedback instead of handling professionally."
    ],
    bestPractices: [
      "Use PDF document uploads on LinkedIn for high-engaging carousel posts.",
      "Tag location and relevant collaborators on Instagram Reels."
    ],
    checklist: [
      "Optimized bios and profile visuals across all active client channels",
      "Set up instant automated welcome message on Instagram DMs and Facebook Messenger",
      "Configured Google Business Profile notification alerts"
    ],
    resources: [
      { name: "Social Media Platform Aspect Ratio Cheat Sheet", type: "Image Guide", desc: "Optimal dimensions for post graphics, Reels, and banners." }
    ],
    quiz: [
      {
        question: "Which platform is best suited for B2B thought leadership, corporate updates, and industry networking?",
        options: [
          "TikTok",
          "LinkedIn",
          "Pinterest",
          "Snapchat"
        ],
        correct: 1,
        explanation: "LinkedIn is the dominant platform for professional B2B marketing, executive positioning, and recruitment."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 9
  // --------------------------------------------------------------------------
  {
    id: 9,
    title: "Content Strategy",
    category: "Social Media & Content Strategy",
    readTime: "15 min read",
    summary: "How to build high-converting content calendars using 13 strategic pillars and balanced content distribution funnels.",
    intro: "Random posting produces random results. A professional agency operates on structured content pillars that guide the target user from initial brand awareness down to purchase decisions.",
    objectives: [
      "Master Brand Buzzer's 13 Content Pillars.",
      "Build balanced 30-day content calendars in Google Sheets / ClickUp.",
      "Map content to top-of-funnel (TOFU), middle-of-funnel (MOFU), and bottom-of-funnel (BOFU) goals."
    ],
    whyItMatters: "Posting only sales promotions alienates followers, while posting only funny memes generates zero revenue. Balanced content pillars maintain audience engagement while driving conversions.",
    coreConcepts: `
      <h3>The 13 Brand Buzzer Content Pillars</h3>
      <ol>
        <li><strong>1. Educational:</strong> How-to guides, tips, industry secrets, tutorials (TOFU).</li>
        <li><strong>2. Awareness:</strong> Trending topics, relatable industry humor, Reels (TOFU).</li>
        <li><strong>3. Trust-Building:</strong> Client video testimonials, case studies, stats (MOFU/BOFU).</li>
        <li><strong>4. Behind the Scenes (BTS):</strong> Process videos, team work culture, packaging orders.</li>
        <li><strong>5. Case Studies:</strong> Deep dives into specific client transformations and ROI results.</li>
        <li><strong>6. Testimonials:</strong> Quotes, video clips, and review screenshots from real buyers.</li>
        <li><strong>7. Promotional:</strong> Direct offers, discounts, seasonal sales calls-to-action (BOFU).</li>
        <li><strong>8. Community & UGC:</strong> User-generated content, customer spotlights, reposts.</li>
        <li><strong>9. Industry Updates:</strong> News breakdowns, platform updates, expert commentary.</li>
        <li><strong>10. Founder Content:</strong> Executive stories, brand origin, vision, leadership lessons.</li>
        <li><strong>11. Team Culture:</strong> Employee spotlights, work anniversaries, agency life.</li>
        <li><strong>12. Interactive Content:</strong> Polls, quizzes, 'This or That', Q&A sticker posts.</li>
        <li><strong>13. Value-Driven Posts:</strong> Free downloadable resources, checklists, templates.</li>
      </ol>

      <h3>The 80/20 Rule of Content Distribution</h3>
      <p>80% of monthly content must deliver value, entertain, or educate. 20% should pitch products or services directly.</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">📅</div>
        <div class="callout-body">
          <span class="callout-title">Monthly Calendar SOP</span>
          <p>All monthly content calendars must be completed and submitted for internal review by the 20th of the preceding month, allowing 10 days for client review and revisions before Month 1 goes live.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Open the <code>Master Monthly Content Calendar Template</code>.</li>
        <li>Assign each planned post a Content Pillar tag and Target Funnel Stage (TOFU/MOFU/BOFU).</li>
        <li>Draft visual notes, caption text, copy hooks, hashtags, and call-to-actions (CTAs).</li>
      </ol>
    `,
    commonMistakes: [
      "Publishing 100% promotional posts demanding users 'Buy Now!' in every caption.",
      "Failing to plan content in advance, leading to rushed, low-quality last-minute posts."
    ],
    bestPractices: [
      "Include a strong hook in the first 3 seconds or first sentence of every piece of content.",
      "Vary visual formats (e.g. Monday Carousel, Wednesday Reel, Friday Single Image)."
    ],
    checklist: [
      "Content Calendar structured with 13 Content Pillars",
      "80/20 Value vs Sales ratio verified",
      "Submitted for internal team lead approval by 20th of the month"
    ],
    resources: [
      { name: "30-Day Content Calendar Master Template", type: "Sheet", desc: "Editable calendar template with automated status tags." }
    ],
    quiz: [
      {
        question: "What is the recommended ratio between Value/Educational content and Direct Sales promotions?",
        options: [
          "10% Value / 90% Direct Sales",
          "80% Value / 20% Direct Sales",
          "50% Memes / 50% Direct Sales",
          "100% Direct Sales"
        ],
        correct: 1,
        explanation: "The 80/20 rule ensures audience retention and trust while maintaining consistent lead generation."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 10
  // --------------------------------------------------------------------------
  {
    id: 10,
    title: "Content Creation",
    category: "Social Media & Content Strategy",
    readTime: "16 min read",
    summary: "Visual design basics, copy hooks, carousel structures, short-form Reel editing, and AI-assisted creation workflows.",
    intro: "Great strategy fails without strong creative execution. This module teaches how to write captivating hooks, design high-converting carousels, edit engaging video Reels, and leverage AI tools for creative speed.",
    objectives: [
      "Master the Anatomy of a High-Converting Post (Hook, Value Body, CTA).",
      "Design multi-slide Instagram & LinkedIn Carousels.",
      "Plan and edit short-form Reels and TikTok videos.",
      "Utilize AI tools (ChatGPT, Midjourney, Canva AI) responsibly."
    ],
    whyItMatters: "Social media feeds are crowded. You have less than 1.5 seconds to stop a user's thumb from scrolling past your content. The visual hook and initial caption line make or break post performance.",
    coreConcepts: `
      <h3>1. Anatomy of High-Converting Copy</h3>
      <ul>
        <li><strong>The Hook (Line 1):</strong> Call out pain points, challenge common beliefs, or tease high value. (e.g., <em>"Stop making this $5,000 ad mistake..."</em>).</li>
        <li><strong>The Body (Value):</strong> Concise, bulleted, digestible insight. Avoid walls of text.</li>
        <li><strong>The CTA (Call to Action):</strong> Clear directive (e.g., <em>"Comment 'GUIDE' below to get our free blueprint!"</em>).</li>
      </ul>

      <h3>2. Carousel Design Principles</h3>
      <p>Slide 1: High-contrast cover with bold title font.<br>Slides 2-8: 1 core idea per slide with clear visual hierarchy.<br>Final Slide: Strong summary call-to-action.</p>

      <h3>3. Short-Form Video (Reels / Shorts) Rules</h3>
      <p>Use dynamic captions, cut out silence, add visual hook in the first 2 seconds, and leverage trending audio tracks when appropriate.</p>
    `,
    agencyExamples: `
      <div class="callout callout-tip">
        <div class="callout-icon">⚡</div>
        <div class="callout-body">
          <span class="callout-title">AI-Assisted Workflow Example</span>
          <p>Use ChatGPT/Claude to brainstorm 10 headline hook variations -> Select top 2 -> Prompt Midjourney/Flux for visual background assets -> Assemble design in Canva/Figma -> Edit captions with human tone polishing!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Select a topic from the client's content calendar.</li>
        <li>Write 3 hook options and pick the strongest.</li>
        <li>Build 1080x1350px graphics in Figma or Canva following client brand fonts.</li>
        <li>Add hashtag sets (5-10 relevant niche hashtags).</li>
      </ol>
    `,
    commonMistakes: [
      "Using tiny font sizes that are unreadable on mobile screens.",
      "Writing boring opening lines like 'Welcome to our weekly post!'",
      "Over-relying on raw unedited AI text output that sounds robotic."
    ],
    bestPractices: [
      "Always design for 4:5 aspect ratio (1080x1350px) on Instagram for maximum mobile screen space.",
      "Keep text contrast high (dark text on light background or vice versa)."
    ],
    checklist: [
      "Hook tested for mobile readability",
      "Graphics formatted in 4:5 ratio for feeds or 9:16 for Reels/Stories",
      "Spelling and grammar checked via Grammarly",
      "Clear CTA included in both caption and visual"
    ],
    resources: [
      { name: "100 High-Converting Copy Hook Templates", type: "PDF", desc: "Proven headline hooks for social posts and ad creatives." }
    ],
    quiz: [
      {
        question: "What is the recommended aspect ratio for Instagram feed graphics to maximize screen real estate on mobile devices?",
        options: [
          "16:9 Landscape (1920x1080px)",
          "1:1 Square (1080x1080px)",
          "4:5 Vertical (1080x1350px)",
          "9:16 Full Portrait (1080x1920px)"
        ],
        correct: 2,
        explanation: "4:5 vertical (1080x1350px) occupies ~20% more mobile screen space than square posts, increasing scroll-stopping power."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 11 — EXPANDED BRANDING & DESIGN ETHICS
  // --------------------------------------------------------------------------
  {
    id: 11,
    title: "Design Ethics & Quality Assurance",
    category: "Social Media & Content Strategy",
    readTime: "16 min read",
    summary: "Complete branding quality standards: brand consistency, grid alignment, packaging specs, print bleed, WCAG contrast accessibility, copyright laws, and pre-publish QA.",
    intro: "High-quality design is not just about making things look pretty; it's about clear communication, brand authority, legal compliance, and physical print precision. This module establishes Brand Buzzer's visual quality control standards for digital design, brand systems, and product packaging.",
    objectives: [
      "Maintain 100% brand consistency across logos, typography, color palettes, and packaging.",
      "Master layout grid alignment, white space padding, and print bleed specs (CMYK vs RGB).",
      "Understand image licensing, copyright laws, and trademark compliance.",
      "Execute pre-publish digital and print design Quality Assurance (QA)."
    ],
    whyItMatters: "Publishing a graphic with misspelled text, stretched logos, unreadable contrast, or incorrect print bleed margins damages brand equity instantly and wastes client money on ruined physical product runs.",
    coreConcepts: `
      <h3>1. Complete Brand System & Packaging Rules</h3>
      <ul>
        <li><strong>Visual Hierarchy:</strong> The most important element (headline or product name) must be largest and boldest. Secondary info must be smaller.</li>
        <li><strong>White Space (Negative Space):</strong> Give design elements room to breathe. Never cram text against graphic edges or die-cut margins.</li>
        <li><strong>Contrast & Accessibility:</strong> Ensure text color contrasts sharply with background color (WCAG AA compliance).</li>
        <li><strong>Logo Safety Zone:</strong> Maintain padding around client logos. Never stretch, warp, or alter logo aspect ratios!</li>
        <li><strong>RGB vs CMYK & Print Bleed:</strong> Digital designs use RGB space. Physical print products (packaging, business cards, merchandise) MUST be produced in 300 DPI CMYK color space with a 3mm safety bleed margin to prevent white edges during box die-cutting!</li>
      </ul>

      <h3>2. Image Licensing & Copyright Ethics</h3>
      <p>NEVER grab random photos off Google Images! Use licensed stock photography (Unsplash, Pexels, Adobe Stock, Shutterstock) or client-owned assets. Avoid copyright lawsuits!</p>
    `,
    agencyExamples: `
      <div class="callout callout-warning">
        <div class="callout-icon">🚨</div>
        <div class="callout-body">
          <span class="callout-title">Copyright & Packaging Risk Warning</span>
          <p>An intern once used a copyrighted celebrity photo found on Google Images for a client ad, and forgot to convert a packaging box design to CMYK with 3mm bleed. Result: A $2,500 copyright warning and 1,000 misprinted retail boxes! Always follow Brand Buzzer QA checklists before sending files to print!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Open graphic or packaging asset in design software (Figma/Illustrator/Canva).</li>
        <li>Turn on layout grid lines to check 40px edge margins and 3mm print bleeds.</li>
        <li>Use WebAIM Contrast Checker to verify text readability.</li>
        <li>Run export pre-flight check before submitting to client folder.</li>
      </ol>
    `,
    commonMistakes: [
      "Stretching logos non-proportionally when scaling.",
      "Sending RGB files to offset commercial box printers instead of CMYK.",
      "Using copyrighted music or images in commercial client campaigns."
    ],
    bestPractices: [
      "Lock logo aspect ratio when resizing in design software.",
      "Export digital PNGs at 2x resolution for retina mobile displays and vector PDFs for print."
    ],
    checklist: [
      "Brand colors verified against official Hex Code & CMYK sheet",
      "Brand font family used consistently",
      "Text contrast verified for mobile readability",
      "Print assets formatted in 300 DPI CMYK with 3mm safety bleed",
      "All photo assets verified as copyright-free or licensed"
    ],
    resources: [
      { name: "Brand Buzzer Design & Packaging QA Checklist", type: "Doc", desc: "Pre-publish visual checklist for designers." }
    ],
    quiz: [
      {
        question: "What color mode and resolution are required for physical packaging box designs and commercial print deliverables?",
        options: [
          "72 DPI RGB color mode",
          "300 DPI CMYK color mode with safety bleed margins",
          "Black and white 100 DPI",
          "WebP format"
        ],
        correct: 1,
        explanation: "Physical commercial print requires 300 DPI high-res CMYK color mode with 3mm bleed margins to prevent misprints."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 12 — MASSIVELY EXPANDED WEB DEV
  // --------------------------------------------------------------------------
  {
    id: 12,
    title: "Website Design & Development Basics",
    category: "Digital & Performance Marketing",
    readTime: "24 min read",
    summary: "Exhaustive breakdown of ALL website development types: Custom Coded (HTML5/CSS3/JS/React/Next.js/Node), WordPress, Shopify, Webflow, DNS, SSL, Cloudflare, PageSpeed optimization, Technical SEO, and conversion architecture.",
    intro: "A client's website is their digital flagship store and primary sales engine. Brand Buzzer builds all types of websites—from custom hand-coded React/Next.js web applications and bespoke WordPress portals to high-converting Shopify e-commerce stores. This module details our complete web engineering stack, infrastructure, speed optimization, and landing page conversion design.",
    objectives: [
      "Understand all web development types: Custom Code (HTML5/CSS3/JS/React/Next.js/Node), WordPress, Shopify, and Webflow.",
      "Master domain infrastructure, DNS records (A, CNAME, MX, TXT, SPF, DKIM), hosting servers, SSL security, and Cloudflare CDN.",
      "Master high-converting Landing Page Architecture.",
      "Perform Google PageSpeed Insights optimization (Core Web Vitals) and Technical SEO configuration."
    ],
    whyItMatters: "If a paid Meta or Google ad campaign sends traffic to a slow, broken, non-responsive, or ugly landing page, all ad budget is burned without returns. Web engineering establishes the foundation for agency conversion success.",
    coreConcepts: `
      <h3>1. Spectrum of Web Development Technologies at Brand Buzzer</h3>
      <ul>
        <li><strong>Custom Coded Web Apps (HTML5, CSS3, Vanilla JS, React.js, Next.js, Node.js):</strong> Used for enterprise clients, SaaS platforms, custom portals, and high-performance applications requiring sub-second load speeds, complex custom logic, and bespoke API backends.</li>
        <li><strong>WordPress Development (Gutenberg, Elementor Pro, WooCommerce, Custom Themes):</strong> Ideal for service businesses, corporate sites, blogs, real estate listings, and customizable client portals. Easily managed by non-technical clients post-launch.</li>
        <li><strong>Shopify E-Commerce Stores (Liquid, Custom App Ecosystem):</strong> Gold standard for direct-to-consumer (DTC) retail and wholesale e-commerce. High security, scalable checkout, inventory syncing, and custom Liquid theme engineering.</li>
        <li><strong>Webflow & Landing Page Builders:</strong> Rapid deployment of high-speed marketing landing pages for ad funnels.</li>
      </ul>

      <h3>2. Web Infrastructure Demystified</h3>
      <ul>
        <li><strong>Domain Name:</strong> The web address (e.g. <code>brandbuzzer.com</code>) registered via GoDaddy, Namecheap, or Google Domains.</li>
        <li><strong>Web Hosting & Cloud Servers:</strong> Where files live (Hostinger, SiteGround, WP Engine, AWS, Vercel).</li>
        <li><strong>DNS Records:</strong> The phonebook of the internet.
          <ul>
            <li><code>A Record:</code> Points domain name to server IP address.</li>
            <li><code>CNAME Record:</code> Points subdomains (e.g. <code>shop.client.com</code>) to host destinations.</li>
            <li><code>MX Record:</code> Routes domain email traffic to Google Workspace / Microsoft 365.</li>
            <li><code>TXT Record:</code> Used for domain verification, SPF, DKIM, and DMARC email security.</li>
          </ul>
        </li>
        <li><strong>SSL Certificate (HTTPS):</strong> Encrypts connection security. Identified by the padlock icon in browser address bars.</li>
        <li><strong>Cloudflare CDN:</strong> Global edge caching, DDoS protection, DNS routing, and automatic WebP image compression.</li>
      </ul>

      <h3>3. Landing Page Conversion Layout Architecture</h3>
      <p>Hero Section (Headline + Subheadline + Primary CTA + High-Res Visual) -> Social Proof Logos -> Problem/Solution -> Features & Benefits -> Customer Testimonials & Video Reviews -> Pricing / Offer -> FAQ Accordion -> Sticky Bottom CTA.</p>

      <h3>4. Technical SEO & Core Web Vitals SOP</h3>
      <p>Every site must achieve Google PageSpeed mobile score > 85, load under 2.5s, feature XML sitemaps, robots.txt, schema markup (LocalBusiness / Product), title tags, meta descriptions, and canonical URLs.</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🌐</div>
        <div class="callout-body">
          <span class="callout-title">Custom Web Dev vs Speed Transformation</span>
          <p>A client came to us with a bloated WordPress site loading in 8.4 seconds (mobile PageSpeed score: 22), causing a 65% ad bounce rate. We re-engineered the front-end using custom lightweight code & WebP image compression via Cloudflare. Load time dropped to 1.4 seconds (PageSpeed score: 96), and ad conversion rate tripled overnight!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Configure Cloudflare DNS nameservers for client domain.</li>
        <li>Install SSL certificate and enforce HTTPS 301 redirects.</li>
        <li>Deploy code repo to host or setup WordPress/Shopify core environment.</li>
        <li>Compress all media assets to WebP format before uploading.</li>
        <li>Run Google PageSpeed Insights and mobile responsiveness QA.</li>
      </ol>
    `,
    commonMistakes: [
      "Uploading huge uncompressed 10MB JPEG photos that ruin site load speed.",
      "Editing DNS records without backing up existing MX email records (can break client company email!).",
      "Ignoring mobile UX design when over 75% of web visitors browse on smartphones."
    ],
    bestPractices: [
      "Always build mobile-first with responsive flexbox/grid containers.",
      "Verify contact forms submit test leads successfully to client CRM webhooks."
    ],
    checklist: [
      "SSL Certificate active (HTTPS green lock)",
      "Mobile responsiveness verified across iOS and Android screen sizes",
      "PageSpeed Insights mobile score > 85",
      "Contact forms & lead webhooks tested successfully",
      "Google Search Console XML sitemap submitted"
    ],
    resources: [
      { name: "Website Launch & Technical SEO QA Master Checklist", type: "Sheet", desc: "40-point checklist before making any website live." }
    ],
    quiz: [
      {
        question: "Which web development technology stack is best suited for enterprise web apps requiring custom code logic and sub-second load performance?",
        options: [
          "Basic unedited Wix site",
          "Custom Coded HTML5/CSS3/JavaScript/React/Next.js",
          "PDF document download",
          "Word document converted to HTML"
        ],
        correct: 1,
        explanation: "Custom coded React/Next.js frameworks deliver unmatched speed, scalability, custom API integrations, and security."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 13 — MASSIVELY EXPANDED PERFORMANCE MARKETING
  // --------------------------------------------------------------------------
  {
    id: 13,
    title: "Performance Marketing Basics",
    category: "Digital & Performance Marketing",
    readTime: "24 min read",
    summary: "Meta Ads, Google Ads (Search, Display, YouTube, PMax), TikTok Ads, campaign objectives, audience targeting, Meta Pixel + CAPI, conversion tracking, retargeting funnels, and ROAS calculations.",
    intro: "Performance marketing is the primary engine of agency revenue generation. Unlike organic social media, paid advertising guarantees traffic and measurable revenue returns when configured with mathematical precision.",
    objectives: [
      "Master Meta Ads Manager (FB/IG), Google Ads MCC (Search, YouTube, PMax), LinkedIn Ads, and TikTok Ads.",
      "Understand campaign objectives (Leads, Sales, Traffic, Engagement).",
      "Set up Meta Pixel, Conversion API (CAPI), and Google Tag Manager conversion events.",
      "Calculate key metrics: CPM, CTR, CPC, CPA, CVR, and Return On Ad Spend (ROAS)."
    ],
    whyItMatters: "Clients judge performance marketing by one ultimate metric: Return On Ad Spend (ROAS). If a client invests $2,000 in ad spend and generates $10,000 in sales (5x ROAS), they will stay with Brand Buzzer forever.",
    coreConcepts: `
      <h3>1. Key Performance Marketing Formulas & Metrics</h3>
      <ul>
        <li><strong>CPM (Cost Per Mille):</strong> Cost per 1,000 ad impressions. Formula: <code>(Ad Spend / Impressions) * 1000</code>.</li>
        <li><strong>CTR (Click-Through Rate):</strong> Percentage of impressions that resulted in clicks. Target: > 1.5%. Formula: <code>(Clicks / Impressions) * 100</code>.</li>
        <li><strong>CPC (Cost Per Click):</strong> Average cost per link click. Formula: <code>Total Spend / Total Clicks</code>.</li>
        <li><strong>CPA (Cost Per Acquisition / Lead):</strong> Total ad spend divided by total conversions. Target: Lower than client target CAC.</li>
        <li><strong>CVR (Conversion Rate):</strong> Percentage of site visitors who buy or submit a lead form. Formula: <code>(Conversions / Visitors) * 100</code>.</li>
        <li><strong>ROAS (Return On Ad Spend):</strong> <code>(Total Revenue Generated from Ads / Total Ad Spend)</code>. E.g., $10k revenue / $2k spend = 5.0x ROAS.</li>
      </ul>

      <h3>2. Meta Ads vs Google Ads vs TikTok Ads Mechanics</h3>
      <p><strong>Meta Ads (Push Marketing):</strong> Targets users based on demographics, interests, and behavior while they scroll Instagram/Facebook feeds and Reels.<br><strong>Google Search Ads (Pull Marketing):</strong> Targets users actively searching for specific keywords (high intent, e.g. <em>"emergency plumber near me"</em>).<br><strong>Google Performance Max (PMax):</strong> AI-driven Google campaigns running across Search, Display, YouTube, Gmail, and Discovery simultaneously.<br><strong>TikTok Ads:</strong> High-energy short-form video ads targeting younger demographics (Gen Z / Millennials).</p>

      <h3>3. Retargeting Funnel Architecture</h3>
      <p>Top of Funnel (Cold Broad Audience) -> Lead/Product Ad -> User Visits Site but doesn't buy -> Retargeting Ad (Warm Audience offering 10% discount or video testimonials) -> Conversion!</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">📈</div>
        <div class="callout-body">
          <span class="callout-title">Performance Campaign Scaling Example</span>
          <p>Client: E-commerce Luxury Watch Brand. Campaign Budget: $5,000/mo Meta Ads. Creative Strategy: 3 User-Generated Video Reels + 2 Carousel Ads. Meta Pixel set up with Conversion API. Result: $28,500 tracked revenue (5.7x ROAS) with an average CPA of $45 per sale!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Verify Meta Pixel and GA4 conversion tracking using Meta Pixel Helper extension.</li>
        <li>Create Campaign in Meta Ads Manager with <code>Sales</code> or <code>Leads</code> objective.</li>
        <li>Build 3 Ad Sets testing different audiences (Broad, Interest-based, Lookalike 1%).</li>
        <li>Upload 3 distinct ad creatives per Ad Set to test visual formats.</li>
        <li>Monitor CTR and CPA for 72 hours before adjusting bids.</li>
      </ol>
    `,
    commonMistakes: [
      "Choosing the 'Traffic' or 'Boost Post' objective instead of 'Leads' or 'Sales' when client wants revenue.",
      "Running ad campaigns without verified conversion pixel tracking."
    ],
    bestPractices: [
      "Let ad campaigns run for at least 72 hours (learning phase) before tweaking bids.",
      "Always set spend limit guardrails on new ad accounts to avoid accidental overspending!"
    ],
    checklist: [
      "Meta Pixel & Conversion API verified active",
      "Campaign objective set to Leads or Sales",
      "Audience exclusions applied (exclude past 30-day buyers from cold ads)",
      "UTM tracking parameters added to ad links"
    ],
    resources: [
      { name: "ROAS & Performance Metrics Calculator", type: "Sheet Tool", desc: "Automated spreadsheet for calculating CPA, CVR, and ROAS targets." }
    ],
    quiz: [
      {
        question: "If an ad campaign spends $1,000 on Meta Ads and generates $4,000 in tracked online sales, what is the ROAS?",
        options: [
          "1.0x ROAS",
          "2.5x ROAS",
          "4.0x ROAS",
          "400x ROAS"
        ],
        correct: 2,
        explanation: "ROAS = Revenue ($4,000) / Ad Spend ($1,000) = 4.0x ROAS."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 14
  // --------------------------------------------------------------------------
  {
    id: 14,
    title: "AI Solutions & Business Automations",
    category: "AI & Automation",
    readTime: "22 min read",
    summary: "AI & automation fundamentals, platform toolkits, n8n/Zapier workflows, prompt engineering masterclass, and 11 real agency automation use cases.",
    intro: "Artificial Intelligence and workflow automation are core differentiators at Brand Buzzer. We don't just create content; we build intelligent automated systems that save hundreds of operational hours for our agency and our clients.",
    objectives: [
      "Differentiate between Artificial Intelligence (LLMs) and Workflow Automation.",
      "Master the top AI platforms (ChatGPT, Claude, Gemini, Perplexity, Midjourney, Flux).",
      "Build visual workflow automations using n8n, Zapier, and Make.",
      "Master the Brand Buzzer Prompt Engineering Framework.",
      "Implement 11 practical agency automation use cases."
    ],
    whyItMatters: "Automating repetitive work (lead routing, reporting, transcript summaries, draft generation) allows our agency team to focus on high-level strategy and creative quality.",
    coreConcepts: `
      <h3>1. AI vs Automation Mechanics</h3>
      <p><strong>AI (The Brain):</strong> Understands natural language, generates creative text/imagery, analyzes unstructured data.<br><strong>Automation (The Muscle):</strong> Connects web apps together (e.g. <em>"When form is submitted -> Create row in Sheet -> Send WhatsApp notification"</em>).</p>

      <h3>2. The Brand Buzzer Prompt Engineering Framework</h3>
      <p>Never send generic 3-word prompts to AI. Use the 5-Part Framework:</p>
      <div class="code-block">
        <div class="code-header">5-Part Prompt Architecture</div>
        <div class="code-content">[ROLE]: You are a senior direct-response copywriter for premium real estate.
[CONTEXT]: Our client 'Skyline Haven' is launching luxury 3-bedroom penthouses in downtown.
[TASK]: Write 3 engaging Instagram caption options with strong hooks.
[CONSTRAINTS]: Tone must be sophisticated yet urgent. Max 150 words per option. Include 3 bullet benefits.
[FORMAT OUTPUT]: Provide output in structured markdown boxes with suggested hashtag tags.</div>
      </div>

      <h3>3. 11 Core Agency Automation Use Cases</h3>
      <ol>
        <li><strong>1. Instant Lead Routing:</strong> Webform lead -> n8n webhook -> Instant WhatsApp notification to client sales team.</li>
        <li><strong>2. AI Social Caption Generator:</strong> Approved calendar topic -> Claude API drafts copy -> Pushed to ClickUp review.</li>
        <li><strong>3. Automated Client Reporting:</strong> GA4 & Meta data extracted on 1st of month -> PDF report generated and emailed.</li>
        <li><strong>4. Meeting Transcript Summarizer:</strong> Zoom call recorded -> Whisper AI transcribes -> Claude extracts action items.</li>
        <li><strong>5. SEO Content Draft Engine:</strong> Target keyword -> Perplexity researches sources -> AI writes structured outline.</li>
        <li><strong>6. CRM Lead Tagging:</strong> Inbound query analyzed by AI for intent -> Tagged as High Priority or Low Priority in CRM.</li>
        <li><strong>7. Proposal Generator:</strong> Client intake form responses -> Merged into Google Doc proposal template.</li>
        <li><strong>8. AI Image Asset Generation:</strong> Midjourney / Flux prompts generated for stock photography replacement.</li>
        <li><strong>9. Review Monitoring:</strong> Google Business review posted -> Sentiment analyzed -> Draft response sent for approval.</li>
        <li><strong>10. Internal Knowledge Base Chatbot:</strong> MCP & RAG bot answering intern SOP questions from this handbook!</li>
        <li><strong>11. E-commerce Order Sync:</strong> Shopify sale -> Auto-adds customer to Mailchimp VIP campaign.</li>
      </ol>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🤖</div>
        <div class="callout-body">
          <span class="callout-title">Automation ROI Example</span>
          <p>We built an n8n lead routing workflow for a luxury interior design client. Leads were previously emailed manually at end-of-day. With instantaneous WhatsApp notifications within 10 seconds of form submission, their lead-to-call conversion rate jumped from 14% to 42%!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Log into agency n8n / Zapier workspace.</li>
        <li>Create Webhook trigger node.</li>
        <li>Add AI node (OpenAI/Claude API) to format data.</li>
        <li>Add destination node (Slack channel / WhatsApp API).</li>
        <li>Test execution payload and verify zero error logs.</li>
      </ol>
    `,
    commonMistakes: [
      "Publishing raw AI copy without human editing and fact-checking.",
      "Inputting confidential client financial data or passwords into public non-secure AI tools."
    ],
    bestPractices: [
      "Always apply the 5-Part Prompt Framework for high quality AI output.",
      "Build error notification branches in Zapier/n8n so you are alerted if an automation fails."
    ],
    checklist: [
      "Mastered 5-Part Prompt Engineering Framework",
      "n8n / Zapier account login verified",
      "Human-in-the-loop quality check applied to all AI generated deliverables"
    ],
    resources: [
      { name: "Brand Buzzer AI Prompt Library", type: "Doc", desc: "Collection of 50+ pre-tested agency prompts." }
    ],
    quiz: [
      {
        question: "What is the primary role of Human-in-the-Loop (HITL) in AI automation workflows?",
        options: [
          "To slow down the work process",
          "To review, edit, fact-check, and ensure creative quality before client delivery",
          "To type out code manually",
          "AI does not require human review"
        ],
        correct: 1,
        explanation: "Human review is essential to guarantee brand empathy, accuracy, and professional quality control."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 15
  // --------------------------------------------------------------------------
  {
    id: 15,
    title: "Daily Agency Workflow",
    category: "Agency Operations & SOPs",
    readTime: "12 min read",
    summary: "Morning routines, task management in ClickUp, internal communication etiquettes, approval cycles, and end-of-day checklists.",
    intro: "Consistency builds agency operational excellence. This module outlines the daily rhythm expected of every Brand Buzzer team member to ensure smooth execution, zero missed deadlines, and work-life balance.",
    objectives: [
      "Master the Brand Buzzer Morning Routine.",
      "Manage daily tasks, priorities, and deadlines in ClickUp.",
      "Execute internal creative review and client approval workflows.",
      "Complete the End-of-Day (EOD) summary check."
    ],
    whyItMatters: "When everyone follows the same daily rhythm, project handoffs between copywriters, designers, and account managers occur effortlessly without confusion or delays.",
    coreConcepts: `
      <h3>1. The Brand Buzzer Daily Schedule</h3>
      <ul>
        <li><strong>09:00 AM — Morning Check-In:</strong> Post brief 3-bullet plan in Slack <code>#daily-standup</code> (1. Priority for today, 2. Secondary tasks, 3. Blockers/Dependencies).</li>
        <li><strong>09:15 AM — Priority Focus Block:</strong> Tackle high-cognitive deep work (writing copy, building ad campaigns, designing graphics) during morning peak energy.</li>
        <li><strong>01:00 PM — Midday Sync & Messages:</strong> Review Slack messages, clear inbox, update task statuses in ClickUp.</li>
        <li><strong>04:00 PM — Handoffs & Reviews:</strong> Move completed tasks to 'Internal Review' stage in ClickUp for team lead sign-off.</li>
        <li><strong>05:45 PM — End-of-Day (EOD) Update:</strong> Post brief status update in ClickUp tasks and log completed deliverables.</li>
      </ul>

      <h3>2. Task Status Protocol in ClickUp</h3>
      <p><code>Open</code> -> <code>In Progress</code> -> <code>Internal Review</code> -> <code>Client Review</code> -> <code>Approved / Scheduled</code> -> <code>Complete</code>.</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">⏱️</div>
        <div class="callout-body">
          <span class="callout-title">Daily Standup SOP</span>
          <p>Example Slack Standup post:<br><em>"Morning team! 👋 Today's focus:<br>1. Finish 12 graphics for Apex Dental Oct Calendar<br>2. Set up Meta Lead Ad campaign for Grand Vista<br>Blockers: Waiting on high-res photos from Grand Vista (Drive link pending)."</em></p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Open ClickUp 'My Tasks' view filtered by Due Date.</li>
        <li>Update task statuses before beginning work.</li>
        <li>Tag relevant team members in ClickUp task comments for handoffs.</li>
      </ol>
    `,
    commonMistakes: [
      "Leaving tasks in 'In Progress' for days without adding status comment updates.",
      "Waiting until 5:00 PM to inform a team lead about a missing asset due that day."
    ],
    bestPractices: [
      "Flag blockers early in the morning so team leads can assist.",
      "Keep ClickUp task time estimates realistic."
    ],
    checklist: [
      "Morning Standup posted in Slack by 9:15 AM",
      "ClickUp task due dates reviewed and updated",
      "End-of-day task status updates recorded"
    ],
    resources: [
      { name: "ClickUp Daily Task Manager Setup", type: "Guide", desc: "How to configure your personal ClickUp dashboard views." }
    ],
    quiz: [
      {
        question: "When should you notify your team lead if you encounter a blocker or missing asset for a task due today?",
        options: [
          "At 6:00 PM after the workday ends",
          "Immediately in the morning standup or as soon as the blocker is identified",
          "Never—just ignore the deadline",
          "Wait 3 days"
        ],
        correct: 1,
        explanation: "Flagging blockers early allows the team lead to intervene, resolve client dependencies, or reassign tasks."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 16
  // --------------------------------------------------------------------------
  {
    id: 16,
    title: "Remote Work at Brand Buzzer",
    category: "Agency Operations & SOPs",
    readTime: "12 min read",
    summary: "Work From Home guidelines, availability windows, time management, digital etiquette, security, and work-life balance.",
    intro: "Remote work offers flexibility, independence, and zero commute time. However, to maintain a thriving remote culture, we adhere to high standards of communication, self-discipline, and digital security.",
    objectives: [
      "Understand availability windows and status notification rules.",
      "Master remote communication etiquette across Slack and Google Meet.",
      "Implement strong cyber security and file safety practices at home.",
      "Maintain personal productivity and prevent remote burnout."
    ],
    whyItMatters: "Clear rules around availability prevent misunderstandings, build trust, and protect employees from after-hours burnout.",
    coreConcepts: `
      <h3>1. Availability & Core Hours</h3>
      <p>Our agency core operational window is <strong>10:00 AM to 5:00 PM (Mon-Fri)</strong>. During this window, team members are expected to acknowledge Slack messages within 30 minutes unless set to 'Focus Mode' or 'In a Meeting'.</p>

      <h3>2. Slack Etiquette Rules</h3>
      <ul>
        <li><strong>Use Thread Responses:</strong> Always reply inside message threads to keep main channels clean and clutter-free.</li>
        <li><strong>Use Channel Tags Wisely:</strong> Reserve <code>@channel</code> or <code>@here</code> strictly for urgent agency-wide emergencies.</li>
        <li><strong>Set Clear Status Icons:</strong> Update your Slack status when away (e.g. 🍔 Lunch, 🌴 PTO, 🎧 Deep Focus, 🚗 Away).</li>
      </ul>

      <h3>3. Remote Video Call Standards</h3>
      <p>During client or internal video calls: Camera ON, clean background or blurred filter, quiet room, mute microphone when not speaking.</p>
    `,
    agencyExamples: `
      <div class="callout callout-info">
        <div class="callout-icon">🏠</div>
        <div class="callout-body">
          <span class="callout-title">WFH Ergonomics & Health</span>
          <p>We encourage team members to take a 10-minute away-from-screen movement break every 90 minutes. High mental clarity produces superior creative work!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Configure Slack notification schedule (Do Not Disturb auto-enabled after 7:00 PM).</li>
        <li>Set up agency Google Calendar with focus blocks.</li>
      </ol>
    `,
    commonMistakes: [
      "Working on unencrypted public Wi-Fi networks without using a VPN.",
      "Failing to set 'Away' status when stepping out during core hours."
    ],
    bestPractices: [
      "Keep home workstations organized and separate from leisure spaces.",
      "Disconnect completely after working hours to maintain long-term mental energy."
    ],
    checklist: [
      "Slack status notifications configured",
      "Workplace camera and audio microphone tested",
      "VPN installed for remote Wi-Fi security"
    ],
    resources: [
      { name: "Brand Buzzer Remote Employee Handbook", type: "PDF", desc: "Complete guide to remote benefits, policies, and tools." }
    ],
    quiz: [
      {
        question: "Why is using message threads in Slack essential for remote agency teams?",
        options: [
          "It makes messages invisible",
          "It keeps channels organized, prevents chat clutter, and allows clear topic tracking",
          "Threads use less internet bandwidth",
          "Slack requires threads by law"
        ],
        correct: 1,
        explanation: "Thread replies maintain clean channel navigation and prevent team members from losing track of ongoing task discussions."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 17
  // --------------------------------------------------------------------------
  {
    id: 17,
    title: "Reporting & Analytics",
    category: "Agency Operations & SOPs",
    readTime: "15 min read",
    summary: "How to craft monthly client reports, present actionable data insights, and host confident performance review calls.",
    intro: "Data without context is meaningless. Clients don't want a 40-page PDF dump of raw numbers; they want clear answers to three questions: What did we do? What were the results? What are we doing next month to grow?",
    objectives: [
      "Structure high-impact Monthly Performance Reports.",
      "Translate technical analytics into strategic business insights.",
      "Host confident client monthly review calls.",
      "Formulate data-backed optimization recommendations."
    ],
    whyItMatters: "Great reporting proves agency ROI, reinforces trust, and secures ongoing retainer renewals.",
    coreConcepts: `
      <h3>1. The 3-Part Monthly Report Architecture</h3>
      <ul>
        <li><strong>Executive Summary (The 'TL;DR'):</strong> Top 3 wins, key revenue numbers, total leads generated, and spend summary.</li>
        <li><strong>Core Metric Breakdown:</strong> Visual charts comparing Month-over-Month (MoM) progress on Leads, Sales, ROAS, Reach, and Website Traffic.</li>
        <li><strong>Next Month Action Plan:</strong> 3 specific strategic experiments or content optimizations planned for next month.</li>
      </ul>

      <h3>2. Data vs Insight (The Rule of 'So What?')</h3>
      <p><strong>Raw Data:</strong> "Website traffic increased by 22% with 14,000 sessions."<br><strong>Actionable Insight:</strong> "Website traffic grew 22% primarily driven by our top-performing Instagram Reel on dental veneers, which brought 3,100 visitors and generated 18 direct appointment bookings!"</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">📊</div>
        <div class="callout-body">
          <span class="callout-title">Client Reporting Call SOP</span>
          <p>Always send the monthly report deck PDF to the client 24 hours BEFORE the scheduled review call. This gives the client time to review figures and ensures the call focuses on strategy rather than reading slides aloud.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Pull monthly metrics from Looker Studio / Agency Analytics dashboard on the 1st of the month.</li>
        <li>Fill in the <code>Brand Buzzer Monthly Client Presentation Deck</code> template.</li>
        <li>Draft 3 strategic recommendations based on data findings.</li>
      </ol>
    `,
    commonMistakes: [
      "Hiding underperforming campaigns instead of explaining what went wrong and how we are fixing it.",
      "Overwhelming non-technical clients with confusing acronyms without explaining revenue impact."
    ],
    bestPractices: [
      "Always compare current month data against both Previous Month (MoM) and Previous Year (YoY).",
      "Highlight client wins prominently at the start of presentation calls."
    ],
    checklist: [
      "Monthly data verified across GA4, Meta Ads, and CRM",
      "Report presentation deck created in Google Slides",
      "Executive summary and Next Month action steps finalized",
      "Report deck sent to client 24h prior to review call"
    ],
    resources: [
      { name: "Monthly Client Reporting Deck (Google Slides)", type: "Template", desc: "Clean deck layout for client monthly reviews." }
    ],
    quiz: [
      {
        question: "What is the difference between raw data and an actionable insight?",
        options: [
          "There is no difference",
          "Raw data states a statistic; an actionable insight explains why it happened and what business action to take next",
          "Raw data is always written in code",
          "Insights are only for social media"
        ],
        correct: 1,
        explanation: "Insights provide contextual meaning and strategic next steps rather than just listing numbers."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 18
  // --------------------------------------------------------------------------
  {
    id: 18,
    title: "Brand Buzzer SOPs",
    category: "Agency Operations & SOPs",
    readTime: "14 min read",
    summary: "Standard Operating Procedures for folder organization, approval matrices, posting checklists, and issue escalation.",
    intro: "Standard Operating Procedures (SOPs) are the secret to scaling agency quality. By following proven step-by-step checklists, we eliminate human error and maintain elite operational standards across every account.",
    objectives: [
      "Master the Brand Buzzer Escalation Matrix.",
      "Execute the Creative Approval Matrix.",
      "Follow the 10-Point Pre-Publishing Checklist.",
      "Standardize file organization across all client workspaces."
    ],
    whyItMatters: "SOPs ensure that whether a senior director or a new intern manages a task, the end result meets Brand Buzzer's high bar of quality.",
    coreConcepts: `
      <h3>1. Creative Approval Matrix</h3>
      <p>Content Creator / Designer -> Internal Creative Lead Review -> Account Manager Sanity Check -> Client Approval -> Scheduled in Publishing Tool.</p>

      <h3>2. The Escalation Matrix</h3>
      <p>When an issue occurs, follow the clear internal escalation pathway:</p>
      <ul>
        <li><strong>Level 1 (Minor):</strong> Typo in draft, minor design tweak -> Resolve directly with Creator/Designer.</li>
        <li><strong>Level 2 (Moderate):</strong> Client delayed approval, missed deadline -> Escalate to Account Manager.</li>
        <li><strong>Level 3 (Critical):</strong> Live account suspension, downtime, angry client -> Immediately notify Director & Agency Head in Slack <code>#emergency-escalation</code>.</li>
      </ul>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">📋</div>
        <div class="callout-body">
          <span class="callout-title">10-Point Pre-Publishing Checklist</span>
          <ol>
            <li>Correct social media handle selected?</li>
            <li>Caption free of spelling/grammar errors?</li>
            <li>Tag locations and tagged accounts correct?</li>
            <li>High-resolution 4:5 or 9:16 asset attached?</li>
            <li>Link in bio verified working?</li>
            <li>Hashtag set added?</li>
            <li>Client approval sign-off logged in ClickUp?</li>
            <li>Optimal posting time scheduled?</li>
            <li>Alt-text accessibility description added?</li>
            <li>First comment loaded if required?</li>
          </ol>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Bookmark the agency SOP directory in Notion / Drive.</li>
        <li>Refer to the relevant SOP checklist before marking any deliverable complete.</li>
      </ol>
    `,
    commonMistakes: [
      "Bypassing the approval matrix and publishing unapproved content directly to client channels.",
      "Failing to log client feedback in ClickUp task threads."
    ],
    bestPractices: [
      "If an SOP is outdated or can be improved, suggest an update in the agency improvement channel.",
      "Always check off pre-publishing items one by one."
    ],
    checklist: [
      "Pre-Publishing 10-Point Checklist reviewed",
      "Escalation Matrix saved for quick access",
      "Creative Approval Matrix followed for active tasks"
    ],
    resources: [
      { name: "Brand Buzzer Master SOP Directory", type: "Notion/Doc", desc: "Central repository of all agency standard operating procedures." }
    ],
    quiz: [
      {
        question: "Who should be notified immediately if an ad account is suspended or a client website experiences downtime (Level 3 Emergency)?",
        options: [
          "No one—wait 2 weeks to see if it fixes itself",
          "Post on social media about it",
          "Escalate immediately to the Account Lead & Agency Director in #emergency-escalation",
          "Send an email to Google support only"
        ],
        correct: 2,
        explanation: "Critical issues require immediate top-level agency escalation so directors can coordinate technical fixes and client communications."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 19
  // --------------------------------------------------------------------------
  {
    id: 19,
    title: "Real Agency Scenarios",
    category: "Agency Operations & SOPs",
    readTime: "18 min read",
    summary: "Real-world crisis handling: rejected designs, urgent client requests, disabled ad accounts, website downtime, and negative reviews.",
    intro: "Agency life isn't always smooth sailing. Technical glitches, rejected concepts, and account suspensions happen. What separates elite agencies from amateur ones is how calmly, professionally, and systematically we handle real-world challenges.",
    objectives: [
      "Master Brand Buzzer's protocol for handling 9 real-world agency crisis scenarios.",
      "Turn unhappy client situations into opportunities for deeper trust.",
      "De-escalate high-stress situations professionally."
    ],
    whyItMatters: "Remaining calm, objective, and solution-focused under pressure protects agency reputation and turns stressed clients into loyal advocate partners.",
    coreConcepts: `
      <h3>Handling 9 Real-World Agency Scenarios</h3>

      <h4>Scenario 1: Client Rejects a Design Concept Completely</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Never get defensive! Say: <em>"Thank you for the clear feedback! Let's schedule a 10-min alignment sync so we can pinpoint exact visual preferences, reference samples, and color expectations before our redesign."</em></p>

      <h4>Scenario 2: Client Makes an 'Urgent' Request at 7:00 PM</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Acknowledge politely, assess true urgency. If critical emergency (site down), notify on-call lead. If non-critical (new post request), reply: <em>"Received! Our creative team will prioritize this first thing tomorrow morning at 10:00 AM."</em></p>

      <h4>Scenario 3: Delayed Client Invoice Payment</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Account Lead sends polite reminder at Day 3 post-due. If unpaid by Day 7, send formal notice: <em>"Per agency terms, active ad campaigns and creative publishing are paused until invoice receipt is verified."</em></p>

      <h4>Scenario 4: Wrong Post or Image Published by Mistake</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Immediately archive/delete post. Re-verify correct asset. Post correct version. Notify Account Lead and log incident in internal QA audit to prevent repeat.</p>

      <h4>Scenario 5: Client Website Experiences Downtime</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Pause active paid ad campaigns instantly to save ad spend! Contact hosting support / Cloudflare. Restore backup if needed. Resume ads once site status returns 200 OK.</p>

      <h4>Scenario 6: Meta or Google Ad Account Disabled</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Review ad policy violation notes. Submit official appeal via Meta Business Help Center / Google MCC. Inform client transparently: <em>"Meta's automated bot flagged an ad parameter. We have filed an expedited manual review appeal."</em></p>

      <h4>Scenario 7: Client Instagram Account Gets Hacked / Locked</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Guide client through Meta Verified account recovery protocol and identity verification forms. Ensure 2FA is set up upon recovery.</p>

      <h4>Scenario 8: Google Business Profile Suspended</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Audit GBP listing for policy violations (business name stuffing, address mismatched). Prepare utility bill verification documents and submit official reinstatement form.</p>

      <h4>Scenario 9: Client Receives a Harsh 1-Star Negative Review</h4>
      <p><strong>Brand Buzzer Protocol:</strong> Never delete or retaliate aggressively! Draft polite, empathetic professional response: <em>"Hi [Name], we take feedback seriously. Please reach out directly to [Email/Phone] so our management can resolve this for you."</em> Shows prospective customers that the brand cares!</p>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🛡️</div>
        <div class="callout-body">
          <span class="callout-title">De-escalation Rule</span>
          <p>Always address the emotional state of the client first, then present the concrete action plan. Empathy + Action Plan = Crisis De-escalated.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Identify scenario category (Technical, Creative, Billing, Public Relations).</li>
        <li>Consult Brand Buzzer Protocol response scripts.</li>
        <li>Coordinate with Account Lead before replying to client.</li>
      </ol>
    `,
    commonMistakes: [
      "Arguing with an upset client or making excuses.",
      "Leaving active ad campaigns running while a client's website landing page is broken."
    ],
    bestPractices: [
      "Always document crisis incidents and resolution steps in ClickUp.",
      "Stay calm—every technical problem has a solution!"
    ],
    checklist: [
      "Reviewed 9 Crisis Protocols",
      "Saved Emergency Slack Channel link",
      "Understand ad pausing procedures during site outages"
    ],
    resources: [
      { name: "Brand Buzzer Client De-escalation & Response Scripts", type: "Doc", desc: "Word-for-word scripts for handling tough client communications." }
    ],
    quiz: [
      {
        question: "What is the VERY FIRST action you must take if a client's e-commerce website goes down while paid Meta Ads are actively running?",
        options: [
          "Increase ad budget",
          "Immediately pause active paid ad campaigns to prevent burning client ad spend on a broken site",
          "Blame the hosting company on social media",
          "Ignore it and wait for tomorrow"
        ],
        correct: 1,
        explanation: "Pausing ad campaigns immediately protects client budget from being wasted on dead traffic."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 20
  // --------------------------------------------------------------------------
  {
    id: 20,
    title: "Templates & Downloads",
    category: "Resources & Assessment",
    readTime: "10 min read",
    summary: "Access, copy, and export 9 essential agency templates for onboarding, questionnaires, content calendars, briefs, and SOPs.",
    intro: "Efficiency relies on reusable assets. In this module, you can access and download all official Brand Buzzer operational templates to streamline your everyday agency tasks.",
    objectives: [
      "Access and download editable agency templates.",
      "Utilize standard creative briefs, onboarding sheets, and meeting note formats.",
      "Export ready-to-use CSV/Markdown/Doc templates."
    ],
    whyItMatters: "Using standardized templates saves hours of setup time and ensures consistent formatting across all agency deliverables.",
    coreConcepts: `
      <h3>The 9 Official Brand Buzzer Templates</h3>
      <p>Click the download buttons below to download editable template copies directly to your device!</p>

      <div class="resource-grid">
        <div class="template-card resource-card">
          <span class="resource-icon">📋</span>
          <span class="resource-title">1. Client Onboarding Checklist</span>
          <span class="resource-desc">12-step pipeline tracking sheet for new client intake.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('onboarding_checklist')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">📁</span>
          <span class="resource-title">2. Asset Collection Sheet</span>
          <span class="resource-desc">Standard folder structure and file upload intake sheet.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('asset_collection')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">🌐</span>
          <span class="resource-title">3. Website Questionnaire</span>
          <span class="resource-desc">Comprehensive client discovery form for web development projects.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('website_questionnaire')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">📅</span>
          <span class="resource-title">4. Monthly Content Calendar</span>
          <span class="resource-desc">30-day social media planning template with pillar tags.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('content_calendar')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">🎨</span>
          <span class="resource-title">5. Creative Brief Template</span>
          <span class="resource-desc">Design and video production brief format for creative teams.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('creative_brief')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">📊</span>
          <span class="resource-title">6. Monthly Report Deck Outline</span>
          <span class="resource-desc">Executive summary and performance metrics presentation outline.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('monthly_report')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">📝</span>
          <span class="resource-title">7. Client Meeting Notes SOP</span>
          <span class="resource-desc">Standard agenda and action-item recording template.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('meeting_notes')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">✅</span>
          <span class="resource-title">8. Approval Tracker Sheet</span>
          <span class="resource-desc">Client content sign-off and revision tracking log.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('approval_tracker')">Download Template</button>
        </div>

        <div class="template-card resource-card">
          <span class="resource-icon">🚀</span>
          <span class="resource-title">9. Content Publishing Checklist</span>
          <span class="resource-desc">10-point pre-publish quality assurance checklist.</span>
          <button class="btn btn-sm btn-outline-accent" onclick="app.downloadTemplate('publishing_checklist')">Download Template</button>
        </div>
      </div>
    `,
    agencyExamples: `
      <div class="callout callout-tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <span class="callout-title">Template Workflow</span>
          <p>Always duplicate the master template file into your client's specific Google Drive folder before making edits. Never edit the original master template!</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Select the required template from the library above.</li>
        <li>Click 'Download Template' to save the file.</li>
        <li>Import or duplicate into your client project workspace.</li>
      </ol>
    `,
    commonMistakes: [
      "Overwriting master agency template files directly in Google Drive.",
      "Using outdated template versions."
    ],
    bestPractices: [
      "Keep local or Drive template copies organized in your personal workflow folder.",
      "Report broken links or template issues to the agency operations lead."
    ],
    checklist: [
      "Downloaded and reviewed all 9 agency templates",
      "Saved templates folder in personal bookmarks"
    ],
    resources: [
      { name: "Brand Buzzer Master Templates Vault", type: "Drive Folder", desc: "Central repository of all agency templates." }
    ],
    quiz: [
      {
        question: "What is the proper procedure when using a master agency template for a new client?",
        options: [
          "Edit the master template file directly",
          "Duplicate/Make a Copy of the master template into the client's dedicated folder first",
          "Delete the master template when finished",
          "Email the master template to competitors"
        ],
        correct: 1,
        explanation: "Always make a copy so the master template remains pristine for other team members."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 21
  // --------------------------------------------------------------------------
  {
    id: 21,
    title: "Official Resources",
    category: "Resources & Assessment",
    readTime: "10 min read",
    summary: "Curated directory of 16 official platform help centers, documentation hubs, and learning portals for continuous education.",
    intro: "Digital marketing platforms evolve rapidly. Meta, Google, and Shopify update their algorithms, ad policies, and tools constantly. Bookmark these 16 official platform documentation centers for authoritative guidance.",
    objectives: [
      "Access authoritative official support documentation for 16 major platforms.",
      "Stay updated on platform policy changes, algorithm updates, and API documentation."
    ],
    whyItMatters: "When troubleshooting ad account issues or technical bugs, official documentation is always the most accurate and reliable source of truth.",
    coreConcepts: `
      <h3>The 16 Official Platform Knowledge Hubs</h3>

      <div class="resource-grid">
        <a href="https://www.facebook.com/business/help" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">📘</span>
          <span class="resource-title">1. Meta Business Help Center</span>
          <span class="resource-desc">Official support for Facebook Pages, Instagram accounts, and Meta Business Suite.</span>
        </a>

        <a href="https://www.facebook.com/business/m/meta-blueprint" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🎓</span>
          <span class="resource-title">2. Meta Blueprint</span>
          <span class="resource-desc">Official certification and training courses for Meta Advertising.</span>
        </a>

        <a href="https://support.google.com/business/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">📍</span>
          <span class="resource-title">3. Google Business Profile Help</span>
          <span class="resource-desc">Guidelines for local business listings, verification, and reviews.</span>
        </a>

        <a href="https://support.google.com/analytics/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">📊</span>
          <span class="resource-title">4. Google Analytics Help</span>
          <span class="resource-desc">Documentation for GA4 metrics, event tracking, and custom reports.</span>
        </a>

        <a href="https://support.google.com/webmasters/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🔍</span>
          <span class="resource-title">5. Google Search Console Documentation</span>
          <span class="resource-desc">Guides on site indexing, sitemaps, and search performance.</span>
        </a>

        <a href="https://support.google.com/google-ads/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🎯</span>
          <span class="resource-title">6. Google Ads Help Center</span>
          <span class="resource-desc">Official policies, bidding strategies, and quality score guides.</span>
        </a>

        <a href="https://developers.google.com/tag-platform/tag-manager" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🏷️</span>
          <span class="resource-title">7. Google Tag Manager Docs</span>
          <span class="resource-desc">Technical implementation guides for tags, triggers, and variables.</span>
        </a>

        <a href="https://developers.cloudflare.com/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">☁️</span>
          <span class="resource-title">8. Cloudflare Learning Center</span>
          <span class="resource-desc">DNS routing, SSL, web security, and CDN caching guides.</span>
        </a>

        <a href="https://wordpress.org/support/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">📝</span>
          <span class="resource-title">9. WordPress Support Hub</span>
          <span class="resource-desc">Official documentation for WordPress core, themes, and plugins.</span>
        </a>

        <a href="https://help.shopify.com/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🛒</span>
          <span class="resource-title">10. Shopify Help Center</span>
          <span class="resource-desc">E-commerce store setup, checkout customization, and app guides.</span>
        </a>

        <a href="https://www.canva.com/designschool/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">🎨</span>
          <span class="resource-title">11. Canva Design School</span>
          <span class="resource-desc">Tutorials on visual design, branding, and graphic techniques.</span>
        </a>

        <a href="https://www.linkedin.com/help/linkedin/answer/a420556" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">💼</span>
          <span class="resource-title">12. LinkedIn Marketing Help</span>
          <span class="resource-desc">Official documentation for LinkedIn Pages and Campaign Manager.</span>
        </a>

        <a href="https://help.pinterest.com/en/business" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">📌</span>
          <span class="resource-title">13. Pinterest Business Help</span>
          <span class="resource-desc">Visual marketing guides, rich pins, and Pinterest ads documentation.</span>
        </a>

        <a href="https://creatoracademy.youtube.com/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">▶️</span>
          <span class="resource-title">14. YouTube Creator Academy</span>
          <span class="resource-desc">Official channel growth, video SEO, and audience retention lessons.</span>
        </a>

        <a href="https://mailchimp.com/help/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">✉️</span>
          <span class="resource-title">15. Mailchimp Knowledge Base</span>
          <span class="resource-desc">Email marketing automation, template building, and deliverability.</span>
        </a>

        <a href="https://docs.n8n.io/" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">⚡</span>
          <span class="resource-title">16. n8n Workflow Documentation</span>
          <span class="resource-desc">Official node reference and workflow building guides.</span>
        </a>
      </div>
    `,
    agencyExamples: `
      <div class="callout callout-info">
        <div class="callout-icon">📚</div>
        <div class="callout-body">
          <span class="callout-title">Continuous Education</span>
          <p>We recommend spending 30 minutes every Friday reviewing updates on Meta Blueprint and Google Ads Blog to stay ahead of upcoming algorithm changes.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Bookmark this module or individual resource links in your browser.</li>
        <li>Consult official support pages whenever encountering platform error codes.</li>
      </ol>
    `,
    commonMistakes: [
      "Relying on outdated 5-year-old YouTube video blogs instead of official updated documentation."
    ],
    bestPractices: [
      "Always reference official documentation when advising clients on ad policies."
    ],
    checklist: [
      "Bookmarked Meta Business Help & Google Ads Help Centers",
      "Saved official Shopify and WordPress documentation links"
    ],
    resources: [
      { name: "Official Resource Links Directory", type: "Bookmark Collection", desc: "Direct browser bookmark file for all 16 hubs." }
    ],
    quiz: [
      {
        question: "Where should you look first when troubleshooting a technical Meta Pixel error or ad policy rejection?",
        options: [
          "Random social media forums",
          "Official Meta Business Help Center and Meta Developer Docs",
          "Ask AI to guess without checking docs",
          "Give up immediately"
        ],
        correct: 1,
        explanation: "Official Meta documentation provides up-to-date policy and technical troubleshooting steps."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 22
  // --------------------------------------------------------------------------
  {
    id: 22,
    title: "Final Assessment & Handbook Graduation",
    category: "Resources & Assessment",
    readTime: "20 min read",
    summary: "Comprehensive assessment, real agency scenario evaluation, final completion checklist, and handbook graduation.",
    intro: "Congratulations on reaching Module 22! You have completed the comprehensive internal training academy for Brand Buzzer Marketing Agency. This final module evaluates your mastery across agency culture, client onboarding, social media, performance ads, web dev, AI automations, and SOPs.",
    objectives: [
      "Complete the Final Academy Comprehensive Evaluation Quiz.",
      "Review the Master Intern Graduation Checklist.",
      "Complete all 22 modules and master Brand Buzzer operational SOPs."
    ],
    whyItMatters: "Passing this assessment proves that you possess the practical, real-world skills required to independently contribute to Brand Buzzer's clients and team workflows.",
    coreConcepts: `
      <h3>Master Graduation Requirements</h3>
      <p>To complete your academy onboarding, you should:</p>
      <ol>
        <li>Mark all 22 modules as Completed using the <strong>'Mark Complete'</strong> button at the top right of each module.</li>
        <li>Pass the Final Assessment Quiz below.</li>
        <li>Review agency templates and bookmark key handbook sections for daily reference.</li>
      </ol>
    `,
    agencyExamples: `
      <div class="callout callout-sop">
        <div class="callout-icon">🎓</div>
        <div class="callout-body">
          <span class="callout-title">Graduation Milestone</span>
          <p>Once you finish all 22 modules, post your completion status in the internal Slack <code>#general</code> channel! Your team lead will assign your active client accounts and onboarding mentor.</p>
        </div>
      </div>
    `,
    walkthrough: `
      <ol>
        <li>Complete all questions in the final quiz below.</li>
        <li>Ensure your overall academy progress bar shows 100% (22/22 Completed).</li>
        <li>Save key handbook pages to your browser bookmarks for easy access!</li>
      </ol>
    `,
    commonMistakes: [
      "Skipping module checklists before attempting the final assessment."
    ],
    bestPractices: [
      "Keep this academy handbook bookmarked—it serves as your daily reference manual throughout your career at Brand Buzzer!"
    ],
    checklist: [
      "All 22 Academy Modules Marked Complete",
      "Final Comprehensive Assessment Passed",
      "Mastered Brand Buzzer Operational SOPs",
      "Posted completion announcement in Slack #general channel"
    ],
    resources: [
      { name: "Brand Buzzer Master SOP Directory", type: "Official Guide", desc: "Central repository of all agency standard operating procedures." }
    ],
    quiz: [
      {
        question: "What is Brand Buzzer's core philosophy regarding client relationships and digital marketing execution?",
        options: [
          "Charge high fees and deliver minimal communication",
          "Transparency, honest communication, practical marketing, education before selling, and ownership mindset",
          "Rely 100% on unedited automated AI bots with zero human oversight",
          "Focus only on vanity follower counts instead of real client revenue"
        ],
        correct: 1,
        explanation: "Brand Buzzer is built on transparency, practical marketing, client education, quality over quantity, and ownership."
      },
      {
        question: "What should you do if an active client landing page breaks while Meta Ad campaigns are actively spending money?",
        options: [
          "Wait until the end of the week to tell someone",
          "Immediately pause active ad campaigns to protect client budget, then notify leads in #emergency-escalation",
          "Increase the ad budget",
          "Delete the client ad account"
        ],
        correct: 1,
        explanation: "Pausing campaigns instantly prevents wasted ad spend and escalating to leads ensures technical resolution."
      },
      {
        question: "How should files be named in the agency Google Drive?",
        options: [
          "IMG_1942.png or Final_v2_new.jpg",
          "Standard format: [ClientName]_[AssetType]_[Variant]_[YYYYMMDD].[ext]",
          "Whatever random name your computer gives it",
          "No name needed"
        ],
        correct: 1,
        explanation: "Standardized file naming maintains fast agency search, clean organization, and version safety."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ACADEMY_MODULES };
}
