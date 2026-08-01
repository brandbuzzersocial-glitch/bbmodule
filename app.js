/* ==========================================================================
   BRAND BUZZER ACADEMY — INTERACTIVE APPLICATION ENGINE
   Handles rendering, progress tracking, mandatory team registration,
   password-protected manager review, search, quizzes, and CSV export.
   ========================================================================== */

class AppEngine {
  constructor() {
    this.currentModuleId = 1;
    this.completedModules = new Set(JSON.parse(localStorage.getItem('bb_completed_modules') || '[]'));
    this.bookmarks = new Set(JSON.parse(localStorage.getItem('bb_bookmarks') || '[]'));
    this.checklistState = JSON.parse(localStorage.getItem('bb_checklists') || '{}');
    this.quizScores = JSON.parse(localStorage.getItem('bb_quiz_scores') || '{}');
    this.teamSubmissions = JSON.parse(localStorage.getItem('bb_team_submissions') || '[]');
    this.userProfile = JSON.parse(localStorage.getItem('bb_user_profile') || JSON.stringify({
      fullName: '',
      email: '',
      role: 'Intern / Trainee'
    }));
    // Default Light Theme as requested
    this.theme = localStorage.getItem('bb_theme') || 'light';
    
    // Manager Security Auth State
    this.isManagerAuthenticated = false;
    this.managerPassword = 'Hellobuzz123@';

    this.init();
  }

  init() {
    // Apply Theme (Default Light)
    document.documentElement.setAttribute('data-theme', this.theme);

    // Initial Hash Check or Default Welcome Page (0)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#module-')) {
      const parsedId = parseInt(hash.replace('#module-', ''), 10);
      if (parsedId >= 1 && parsedId <= ACADEMY_MODULES.length) {
        this.currentModuleId = parsedId;
      }
    } else if (hash === '#welcome' || !hash) {
      this.currentModuleId = 0;
    }

    // Render Components
    this.buildSidebarNav();
    this.renderModule(this.currentModuleId);
    this.updateOverallProgress();
    this.updateBookmarkBadge();
    this.updateHeaderProfileBadge();
    this.setupEventListeners();
    this.setupScrollListeners();

    // Mandatory Registration Gate Check
    if (!this.userProfile.fullName || !this.userProfile.email) {
      setTimeout(() => this.openProfileModal(true), 300);
    }
  }

  /* --------------------------------------------------------------------------
     MANDATORY TEAM MEMBER PROFILE
     -------------------------------------------------------------------------- */
  updateHeaderProfileBadge() {
    const nameEl = document.getElementById('header-user-name');
    if (nameEl) {
      if (this.userProfile && this.userProfile.fullName) {
        nameEl.textContent = `${this.userProfile.fullName} (${this.userProfile.role.split(' ')[0]})`;
      } else {
        nameEl.textContent = 'Register Profile';
      }
    }

    // Populate profile modal inputs
    const nameInput = document.getElementById('profile-full-name');
    const emailInput = document.getElementById('profile-email');
    const roleInput = document.getElementById('profile-role');

    if (nameInput) nameInput.value = this.userProfile.fullName || '';
    if (emailInput) emailInput.value = this.userProfile.email || '';
    if (roleInput) roleInput.value = this.userProfile.role || 'Intern / Trainee';
  }

  saveUserProfile(e) {
    if (e) e.preventDefault();

    const fullName = document.getElementById('profile-full-name').value.trim();
    const email = document.getElementById('profile-email').value.trim();
    const role = document.getElementById('profile-role').value;

    if (!fullName || !email) {
      this.showToast('Please provide your Full Name and Work Email.', 'warning');
      return;
    }

    this.userProfile = { fullName, email, role };
    localStorage.setItem('bb_user_profile', JSON.stringify(this.userProfile));

    this.updateHeaderProfileBadge();
    
    // Enable Close Button
    const xBtn = document.getElementById('profile-close-x-btn');
    if (xBtn) xBtn.classList.remove('hidden');

    this.closeProfileModal();
    this.showToast(`Welcome ${fullName}! Academy unlocked.`, 'success');
  }

  openProfileModal(isMandatory = false) {
    const dialog = document.getElementById('profile-modal');
    const xBtn = document.getElementById('profile-close-x-btn');
    const backdrop = document.getElementById('profile-modal-backdrop');

    if (!dialog) return;

    const isRegistered = !!(this.userProfile.fullName && this.userProfile.email);

    if (isMandatory || !isRegistered) {
      if (xBtn) xBtn.classList.add('hidden');
      if (backdrop) backdrop.onclick = null; // Prevent backdrop click closing
    } else {
      if (xBtn) xBtn.classList.remove('hidden');
      if (backdrop) backdrop.onclick = () => this.closeProfileModal();
    }

    dialog.showModal();
  }

  closeProfileModal() {
    // Only allow closing if registration is completed
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.showToast('Registration required to access academy modules.', 'warning');
      return;
    }

    const dialog = document.getElementById('profile-modal');
    if (dialog) dialog.close();
  }

  /* --------------------------------------------------------------------------
     PASSWORD-PROTECTED MANAGER DASHBOARD & REVIEW
     -------------------------------------------------------------------------- */
  openManagerAuthModal() {
    const dialog = document.getElementById('manager-auth-modal');
    const passInput = document.getElementById('manager-pass-input');
    if (dialog) {
      dialog.showModal();
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  }

  closeManagerAuthModal() {
    const dialog = document.getElementById('manager-auth-modal');
    if (dialog) dialog.close();
  }

  authenticateManager(e) {
    if (e) e.preventDefault();

    const passInput = document.getElementById('manager-pass-input');
    const enteredPass = passInput ? passInput.value.trim() : '';

    if (enteredPass === this.managerPassword) {
      this.isManagerAuthenticated = true;
      this.closeManagerAuthModal();
      this.showToast('Manager authenticated! Dashboard unlocked. 🔓', 'success');
      this.openManagerModal();
    } else {
      this.showToast('Access Denied: Incorrect Manager Password.', 'danger');
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  }

  lockManagerSession() {
    this.isManagerAuthenticated = false;
    this.closeManagerModal();
    this.showToast('Manager session locked. 🔒', 'info');
  }

  openManagerModal() {
    // Password Gate Check
    if (!this.isManagerAuthenticated) {
      this.openManagerAuthModal();
      return;
    }

    const dialog = document.getElementById('manager-dashboard-modal');
    const tableContainer = document.getElementById('manager-table-container');
    const countText = document.getElementById('manager-submissions-count');

    if (!dialog || !tableContainer) return;

    countText.textContent = `${this.teamSubmissions.length} Action Records Tracked`;

    if (this.teamSubmissions.length === 0) {
      tableContainer.innerHTML = '<p class="search-empty-state">No team answers or module completions recorded yet. As your team members complete modules and quizzes, their progress appears here!</p>';
    } else {
      let tableHtml = `
        <table class="team-submissions-table">
          <thead>
            <tr>
              <th>Date / Time</th>
              <th>Team Member</th>
              <th>Role</th>
              <th>Module</th>
              <th>Action Type</th>
              <th>Details / Selected Answer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
      `;

      // Render reversed (newest first)
      const sorted = [...this.teamSubmissions].reverse();
      sorted.forEach(sub => {
        const user = sub.user || {};
        const isQuiz = sub.type === 'quiz';
        const badgeClass = isQuiz ? (sub.isCorrect ? 'correct-badge' : 'incorrect-badge') : 'correct-badge';
        const badgeText = isQuiz ? (sub.isCorrect ? 'CORRECT ✓' : 'INCORRECT ✗') : 'COMPLETED ✓';

        tableHtml += `
          <tr>
            <td>${sub.timestamp}</td>
            <td><strong>${user.fullName || 'Anonymous'}</strong><br><span class="field-hint">${user.email || 'No Email'}</span></td>
            <td>${user.role || 'Team Member'}</td>
            <td>Mod ${sub.moduleId}</td>
            <td>${isQuiz ? `Quiz Q${sub.questionIndex + 1}` : 'Module Progress'}</td>
            <td>${isQuiz ? sub.selectedAnswerText : 'Marked Module Complete'}</td>
            <td><span class="status-badge ${badgeClass}">${badgeText}</span></td>
          </tr>
        `;
      });

      tableHtml += `</tbody></table>`;
      tableContainer.innerHTML = tableHtml;
    }

    dialog.showModal();
  }

  closeManagerModal() {
    const dialog = document.getElementById('manager-dashboard-modal');
    if (dialog) dialog.close();
  }

  exportTeamSubmissionsCSV() {
    if (!this.isManagerAuthenticated) {
      this.openManagerAuthModal();
      return;
    }

    if (this.teamSubmissions.length === 0) {
      this.showToast('No team progress data to export.', 'warning');
      return;
    }

    let csvContent = 'Timestamp,Full Name,Email,Role,Module ID,Module Title,Action Type,Question Index,Details/Answer,Status\n';

    this.teamSubmissions.forEach(sub => {
      const u = sub.user || {};
      const isQuiz = sub.type === 'quiz';
      const row = [
        `"${sub.timestamp}"`,
        `"${u.fullName || ''}"`,
        `"${u.email || ''}"`,
        `"${u.role || ''}"`,
        `"${sub.moduleId}"`,
        `"${(sub.moduleTitle || '').replace(/"/g, '""')}"`,
        `"${isQuiz ? 'Quiz Question' : 'Module Completion'}"`,
        `"${isQuiz ? sub.questionIndex + 1 : '-'}"`,
        `"${(isQuiz ? sub.selectedAnswerText : 'Completed Module').replace(/"/g, '""')}"`,
        `"${isQuiz ? (sub.isCorrect ? 'Correct' : 'Incorrect') : 'Completed'}"`
      ];
      csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([content = csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Brand_Buzzer_Team_Progress_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast('Exported team progress CSV file!', 'success');
  }

  /* --------------------------------------------------------------------------
     SIDEBAR NAVIGATION BUILDER
     -------------------------------------------------------------------------- */
  buildSidebarNav() {
    const navContainer = document.getElementById('sidebar-nav-container');
    if (!navContainer) return;

    // Welcome Link Section
    let html = `
      <div class="nav-section">
        <div class="nav-section-title">Getting Started</div>
        <a href="#welcome" 
           class="nav-module-link ${this.currentModuleId === 0 ? 'active' : ''}" 
           onclick="app.navigateToModule(0); return false;">
          <span class="module-title-text">Welcome & Overview</span>
          <span class="module-status-icon">★</span>
        </a>
      </div>
    `;

    // Group by category
    const categories = {};
    ACADEMY_MODULES.forEach(mod => {
      if (!categories[mod.category]) {
        categories[mod.category] = [];
      }
      categories[mod.category].push(mod);
    });

    for (const [catName, modules] of Object.entries(categories)) {
      html += `
        <div class="nav-section">
          <div class="nav-section-title">${catName}</div>
      `;

      modules.forEach(mod => {
        const isCompleted = this.completedModules.has(mod.id);
        const isActive = mod.id === this.currentModuleId;
        const statusClass = isCompleted ? 'completed' : '';
        const activeClass = isActive ? 'active' : '';

        html += `
          <a href="#module-${mod.id}" 
             class="nav-module-link ${activeClass} ${statusClass}" 
             data-module-id="${mod.id}"
             onclick="app.navigateToModule(${mod.id}); return false;">
            <span class="module-title-text">${mod.id}. ${mod.title}</span>
            <span class="module-status-icon">${isCompleted ? '✓' : ''}</span>
          </a>
        `;
      });

      html += `</div>`;
    }

    navContainer.innerHTML = html;
  }

  /* --------------------------------------------------------------------------
     WELCOME HERO INTRO PAGE RENDERER
     -------------------------------------------------------------------------- */
  renderWelcomePage() {
    this.currentModuleId = 0;
    window.location.hash = '#welcome';

    document.getElementById('breadcrumb-category').textContent = 'Academy Overview';
    document.getElementById('breadcrumb-module').textContent = 'Welcome Page';

    // Hide complete & bookmark buttons on welcome page
    document.getElementById('complete-module-btn').style.display = 'none';
    document.getElementById('bookmark-module-btn').style.display = 'none';

    const container = document.getElementById('module-container');
    container.innerHTML = `
      <div class="welcome-hero-banner">
        <div class="welcome-badge-tag">OFFICIAL INTERNAL ACADEMY</div>
        <img src="logo.png" alt="Brand Buzzer Logo" class="welcome-hero-logo">
        <h1 class="welcome-hero-title">WELCOME TO BRAND BUZZER</h1>
        <p class="welcome-hero-subtitle">Master our remote digital marketing agency workflows, paid ad strategies, custom web coding, packaging design systems, AI automations, and operational SOPs.</p>
        <div class="welcome-cta-group">
          <button class="btn btn-hero-primary" onclick="app.navigateToModule(1)">
            Begin Training — Start Module 1 ➔
          </button>
          <button class="btn btn-hero-secondary" onclick="app.openManagerModal()">
            Manager Dashboard
          </button>
        </div>
      </div>

      <div class="welcome-features-grid">
        <div class="welcome-feature-card">
          <div class="feature-card-icon">🚀</div>
          <h3>22 Training Modules</h3>
          <p>Structured masterclasses covering culture, services, client onboarding, ad campaigns, and SOPs.</p>
        </div>
        <div class="welcome-feature-card">
          <div class="feature-card-icon">🎯</div>
          <h3>7 Core Services</h3>
          <p>In-depth workflows for Social Media, Performance Marketing, Custom Web Dev, Complete Branding & Packaging.</p>
        </div>
        <div class="welcome-feature-card">
          <div class="feature-card-icon">🔑</div>
          <h3>24 Business Account SOPs</h3>
          <p>Setup guides for Meta Portfolio, GA4, GTM, Google Ads MCC, Shopify Liquid, and Cloudflare CDN.</p>
        </div>
        <div class="welcome-feature-card">
          <div class="feature-card-icon">📁</div>
          <h3>9 Editable Templates</h3>
          <p>Downloadable CSV & TXT agency templates for onboarding, content calendars, briefs, and publishing.</p>
        </div>
      </div>

      <div class="callout callout-sop">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <span class="callout-title">How To Complete Your Academy Internship Training</span>
          <p>1. Progress through each of the 22 modules sequentially.<br>
          2. Complete the interactive action items in Section 8 of each module.<br>
          3. Test your knowledge in Section 10 quizzes.<br>
          4. Click <strong>"Mark Complete"</strong> at the top of each module to record your graduation progress.</p>
        </div>
      </div>
    `;

    // Update Pagination for Welcome Page
    const prevBtn = document.getElementById('prev-module-btn');
    const nextBtn = document.getElementById('next-module-btn');
    const nextTitle = document.getElementById('next-module-title');

    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'visible';
    nextTitle.textContent = '1. Agency Overview & Culture';
    nextBtn.onclick = () => this.navigateToModule(1);

    this.buildTableOfContents();
    this.buildSidebarNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --------------------------------------------------------------------------
     MODULE CONTENT RENDERER
     -------------------------------------------------------------------------- */
  renderModule(id) {
    if (id === 0) {
      this.renderWelcomePage();
      return;
    }

    // Restore complete & bookmark buttons for regular modules
    document.getElementById('complete-module-btn').style.display = 'inline-flex';
    document.getElementById('bookmark-module-btn').style.display = 'inline-flex';

    const mod = ACADEMY_MODULES.find(m => m.id === id);
    if (!mod) return;

    this.currentModuleId = id;
    window.location.hash = `#module-${id}`;

    // Update Header Breadcrumbs
    document.getElementById('breadcrumb-category').textContent = mod.category;
    document.getElementById('breadcrumb-module').textContent = `Module ${mod.id}: ${mod.title}`;

    // Update Header Bookmark & Complete Buttons
    this.updateModuleHeaderButtons(id);

    // Build Module Inner HTML
    const container = document.getElementById('module-container');
    container.innerHTML = `
      <div class="module-meta-bar">
        <span class="module-badge-num">MODULE ${mod.id} OF 22</span>
        <span class="module-read-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${mod.readTime}
        </span>
      </div>

      <h1 class="module-hero-title">${mod.title}</h1>
      <p class="module-lead-text">${mod.intro}</p>

      <h2 id="section-objectives">1. Learning Objectives</h2>
      <ul>
        ${mod.objectives.map(obj => `<li>${obj}</li>`).join('')}
      </ul>

      <h2 id="section-why-it-matters">2. Why This Matters</h2>
      <p>${mod.whyItMatters}</p>

      <h2 id="section-core-concepts">3. Core Concepts</h2>
      <div class="core-concepts-body">${mod.coreConcepts}</div>

      <h2 id="section-agency-examples">4. Real Agency Examples & SOPs</h2>
      <div class="agency-examples-body">${mod.agencyExamples}</div>

      <h2 id="section-walkthrough">5. Practical Walkthrough</h2>
      <div class="walkthrough-body">${mod.walkthrough}</div>

      <h2 id="section-common-mistakes">6. Common Mistakes to Avoid</h2>
      <ul>
        ${mod.commonMistakes.map(m => `<li><strong>${m.split(':')[0]}:</strong> ${m.split(':').slice(1).join(':') || m}</li>`).join('')}
      </ul>

      <h2 id="section-best-practices">7. Best Practices</h2>
      <ul>
        ${mod.bestPractices.map(bp => `<li>${bp}</li>`).join('')}
      </ul>

      <h2 id="section-checklist">8. Interactive Module Checklist</h2>
      <div class="checklist-container">
        <div class="checklist-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Complete These Action Items
        </div>
        <div class="checklist-items-list">
          ${mod.checklist.map((item, idx) => {
            const itemKey = `mod_${mod.id}_chk_${idx}`;
            const isChecked = !!this.checklistState[itemKey];
            return `
              <div class="checklist-item ${isChecked ? 'checked' : ''}" 
                   onclick="app.toggleChecklistItem('${itemKey}', this)">
                <div class="checklist-checkbox">${isChecked ? '✓' : ''}</div>
                <span>${item}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <h2 id="section-resources">9. Resources & Downloads</h2>
      <div class="resource-grid">
        ${mod.resources.map(res => `
          <div class="resource-card">
            <span class="resource-icon">📁</span>
            <span class="resource-title">${res.name}</span>
            <span class="resource-desc">${res.desc} (${res.type})</span>
          </div>
        `).join('')}
      </div>

      <h2 id="section-quiz">10. Knowledge Check Quiz</h2>
      <div class="quiz-section">
        <div class="quiz-header">
          <h3>Test Your Understanding</h3>
          <p>Answer the questions below to test your mastery of Module ${mod.id}.</p>
        </div>
        ${this.renderQuizQuestions(mod.id, mod.quiz)}
      </div>

      <h2 id="section-summary">11. Module Summary</h2>
      <div class="callout callout-info">
        <div class="callout-icon">📌</div>
        <div class="callout-body">
          <span class="callout-title">Module ${mod.id} Recap</span>
          <p>${mod.summary}</p>
        </div>
      </div>
    `;

    // Update Pagination Footer
    this.updatePaginationControls(id);

    // Build Table of Contents for Desktop Sidebar
    this.buildTableOfContents();

    // Re-highlight Nav
    this.buildSidebarNav();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --------------------------------------------------------------------------
     QUIZ QUESTIONS RENDERER & ANSWER SYNC
     -------------------------------------------------------------------------- */
  renderQuizQuestions(moduleId, quizList) {
    if (!quizList || quizList.length === 0) return '<p>No quiz questions for this module.</p>';

    return quizList.map((q, qIdx) => {
      const savedAttempt = this.quizScores[`mod_${moduleId}_q_${qIdx}`];
      return `
        <div class="quiz-question-card" id="quiz-card-${qIdx}">
          <div class="quiz-question-title">Q${qIdx + 1}: ${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, optIdx) => {
              let btnClass = 'quiz-option-btn';
              if (savedAttempt !== undefined) {
                if (optIdx === q.correct) btnClass += ' correct';
                else if (optIdx === savedAttempt) btnClass += ' incorrect';
              }
              return `
                <button class="${btnClass}" 
                        onclick="app.submitQuizAnswer(${moduleId}, ${qIdx}, ${optIdx}, ${q.correct})">
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          <div class="quiz-explanation" id="quiz-explanation-${qIdx}" style="${savedAttempt !== undefined ? 'display: block;' : 'display: none;'}">
            <strong>Explanation:</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('');
  }

  async submitQuizAnswer(moduleId, questionIdx, selectedIdx, correctIdx) {
    // Mandatory Gate Check
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      this.showToast('Please complete registration to submit answers.', 'warning');
      return;
    }

    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    const qObj = mod ? mod.quiz[questionIdx] : null;

    const key = `mod_${moduleId}_q_${questionIdx}`;
    this.quizScores[key] = selectedIdx;
    localStorage.setItem('bb_quiz_scores', JSON.stringify(this.quizScores));

    const isCorrect = selectedIdx === correctIdx;
    const timestamp = new Date().toLocaleString();

    // Create Record
    const record = {
      type: 'quiz',
      timestamp,
      user: { ...this.userProfile },
      moduleId,
      moduleTitle: mod ? mod.title : `Module ${moduleId}`,
      questionIndex: questionIdx,
      questionText: qObj ? qObj.question : '',
      selectedAnswerIndex: selectedIdx,
      selectedAnswerText: qObj ? qObj.options[selectedIdx] : '',
      correctAnswerIndex: correctIdx,
      isCorrect
    };

    // Store in Local Submissions Array
    this.teamSubmissions.push(record);
    localStorage.setItem('bb_team_submissions', JSON.stringify(this.teamSubmissions));

    // Refresh UI
    const quizCard = document.getElementById(`quiz-card-${questionIdx}`);
    if (quizCard) {
      const options = quizCard.querySelectorAll('.quiz-option-btn');
      options.forEach((btn, idx) => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (idx === correctIdx) btn.classList.add('correct');
        if (idx === selectedIdx && selectedIdx !== correctIdx) btn.classList.add('incorrect');
      });

      const explanation = document.getElementById(`quiz-explanation-${questionIdx}`);
      if (explanation) explanation.style.display = 'block';
    }

    if (isCorrect) {
      this.showToast('Correct answer! Recorded for team manager review. 🎉', 'success');
    } else {
      this.showToast('Answer recorded. Review explanation above.', 'danger');
    }
  }

  /* --------------------------------------------------------------------------
     CHECKLIST STATE TOGGLE
     -------------------------------------------------------------------------- */
  toggleChecklistItem(itemKey, el) {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }

    const isChecked = !this.checklistState[itemKey];
    this.checklistState[itemKey] = isChecked;
    localStorage.setItem('bb_checklists', JSON.stringify(this.checklistState));

    if (isChecked) {
      el.classList.add('checked');
      el.querySelector('.checklist-checkbox').textContent = '✓';
      this.showToast('Item completed! Action saved.', 'success');
    } else {
      el.classList.remove('checked');
      el.querySelector('.checklist-checkbox').textContent = '';
    }
  }

  /* --------------------------------------------------------------------------
     PAGINATION & OVERALL PROGRESS
     -------------------------------------------------------------------------- */
  updatePaginationControls(currentId) {
    const prevBtn = document.getElementById('prev-module-btn');
    const nextBtn = document.getElementById('next-module-btn');
    const prevTitle = document.getElementById('prev-module-title');
    const nextTitle = document.getElementById('next-module-title');

    const total = ACADEMY_MODULES.length;

    if (currentId > 1) {
      const prevMod = ACADEMY_MODULES.find(m => m.id === currentId - 1);
      prevBtn.style.visibility = 'visible';
      prevTitle.textContent = `${prevMod.id}. ${prevMod.title}`;
      prevBtn.onclick = () => this.navigateToModule(currentId - 1);
    } else {
      prevBtn.style.visibility = 'hidden';
    }

    if (currentId < total) {
      const nextMod = ACADEMY_MODULES.find(m => m.id === currentId + 1);
      nextBtn.style.visibility = 'visible';
      nextTitle.textContent = `${nextMod.id}. ${nextMod.title}`;
      nextBtn.onclick = () => this.navigateToModule(currentId + 1);
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }

  navigateToModule(id) {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }
    this.renderModule(id);
    this.closeMobileSidebar();
  }

  toggleModuleCompletion(id) {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }

    if (this.completedModules.has(id)) {
      this.completedModules.delete(id);
      this.showToast(`Module ${id} marked incomplete.`, 'info');
    } else {
      this.completedModules.add(id);
      this.showToast(`Module ${id} marked complete! 🎉`, 'success');

      // Record Module Completion Event
      const record = {
        type: 'completion',
        timestamp: new Date().toLocaleString(),
        user: { ...this.userProfile },
        moduleId: id,
        moduleTitle: (ACADEMY_MODULES.find(m => m.id === id) || {}).title || `Module ${id}`,
        completedCount: this.completedModules.size,
        totalModules: ACADEMY_MODULES.length,
        percent: Math.round((this.completedModules.size / ACADEMY_MODULES.length) * 100)
      };

      this.teamSubmissions.push(record);
      localStorage.setItem('bb_team_submissions', JSON.stringify(this.teamSubmissions));
    }

    localStorage.setItem('bb_completed_modules', JSON.stringify([...this.completedModules]));
    this.updateModuleHeaderButtons(id);
    this.buildSidebarNav();
    this.updateOverallProgress();
  }

  updateModuleHeaderButtons(id) {
    const completeBtn = document.getElementById('complete-module-btn');
    const completeText = document.getElementById('complete-btn-text');
    const bookmarkBtn = document.getElementById('bookmark-module-btn');
    const bookmarkText = document.getElementById('bookmark-btn-text');

    const isCompleted = this.completedModules.has(id);
    if (isCompleted) {
      completeBtn.className = 'btn btn-sm btn-primary';
      completeText.textContent = 'Completed ✓';
    } else {
      completeBtn.className = 'btn btn-sm btn-outline-success';
      completeText.textContent = 'Mark Complete';
    }
    completeBtn.onclick = () => this.toggleModuleCompletion(id);

    const isBookmarked = this.bookmarks.has(id);
    if (isBookmarked) {
      bookmarkBtn.className = 'btn btn-sm btn-outline-accent';
      bookmarkText.textContent = 'Bookmarked ★';
    } else {
      bookmarkBtn.className = 'btn btn-sm btn-ghost';
      bookmarkText.textContent = 'Bookmark';
    }
    bookmarkBtn.onclick = () => this.toggleBookmark(id);
  }

  toggleBookmark(id) {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }

    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
      this.showToast(`Module ${id} removed from bookmarks.`, 'info');
    } else {
      this.bookmarks.add(id);
      this.showToast(`Module ${id} saved to bookmarks! ★`, 'success');
    }

    localStorage.setItem('bb_bookmarks', JSON.stringify([...this.bookmarks]));
    this.updateModuleHeaderButtons(id);
    this.updateBookmarkBadge();
  }

  updateBookmarkBadge() {
    const badge = document.getElementById('bookmark-count-badge');
    const count = this.bookmarks.size;
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  updateOverallProgress() {
    const total = ACADEMY_MODULES.length;
    const completed = this.completedModules.size;
    const percent = Math.round((completed / total) * 100);

    const progressText = document.getElementById('overall-progress-text');
    if (progressText) {
      progressText.textContent = `${completed} / ${total} Modules (${percent}%)`;
    }
  }

  /* --------------------------------------------------------------------------
     TABLE OF CONTENTS GENERATOR (DESKTOP)
     -------------------------------------------------------------------------- */
  buildTableOfContents() {
    const tocList = document.getElementById('toc-list');
    const content = document.getElementById('module-container');
    if (!tocList || !content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) {
      tocList.innerHTML = '<span class="toc-link">No sections</span>';
      return;
    }

    let html = '';
    headings.forEach((h, idx) => {
      if (!h.id) {
        h.id = `heading-${idx}`;
      }
      const isH3 = h.tagName.toLowerCase() === 'h3';
      const cssClass = isH3 ? 'toc-link toc-h3' : 'toc-link';
      html += `<a href="#${h.id}" class="${cssClass}" onclick="app.scrollToHeading('${h.id}'); return false;">${h.textContent}</a>`;
    });

    tocList.innerHTML = html;
  }

  scrollToHeading(id) {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /* --------------------------------------------------------------------------
     GLOBAL SEARCH ENGINE
     -------------------------------------------------------------------------- */
  setupSearchEngine() {
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-modal-input');
    const searchResults = document.getElementById('search-results-list');
    const filterTabs = document.querySelectorAll('.search-tab');

    let currentFilter = 'all';

    filterTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        performSearch(searchInput.value.trim());
      });
    });

    const performSearch = (query) => {
      if (!query || query.length < 2) {
        searchResults.innerHTML = '<div class="search-empty-state">Start typing to search across all 22 training modules...</div>';
        return;
      }

      const qLower = query.toLowerCase();
      const results = [];

      ACADEMY_MODULES.forEach(mod => {
        let matchScore = 0;
        let snippet = '';

        if (mod.title.toLowerCase().includes(qLower)) {
          matchScore += 10;
          snippet = mod.summary;
        } else if (mod.summary.toLowerCase().includes(qLower)) {
          matchScore += 5;
          snippet = mod.summary;
        } else if (mod.intro.toLowerCase().includes(qLower)) {
          matchScore += 3;
          snippet = mod.intro.substring(0, 140) + '...';
        } else if (mod.coreConcepts.toLowerCase().includes(qLower)) {
          matchScore += 2;
          snippet = `Found in Core Concepts of Module ${mod.id}`;
        }

        if (matchScore > 0) {
          results.push({ mod, snippet, matchScore });
        }
      });

      if (results.length === 0) {
        searchResults.innerHTML = `<div class="search-empty-state">No matching topics found for "${query}". Try searching for 'Meta Ads', 'SOPs', or 'AI'.</div>`;
        return;
      }

      results.sort((a, b) => b.matchScore - a.matchScore);

      searchResults.innerHTML = results.map(r => `
        <div class="search-result-item" onclick="app.selectSearchResult(${r.mod.id})">
          <h4>Module ${r.mod.id}: ${r.mod.title}</h4>
          <p>${r.snippet}</p>
        </div>
      `).join('');
    };

    searchInput.addEventListener('input', (e) => performSearch(e.target.value.trim()));
  }

  selectSearchResult(moduleId) {
    this.closeSearchModal();
    this.navigateToModule(moduleId);
  }

  openSearchModal() {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }
    const dialog = document.getElementById('search-modal');
    const input = document.getElementById('search-modal-input');
    if (dialog) {
      dialog.showModal();
      if (input) input.focus();
    }
  }

  closeSearchModal() {
    const dialog = document.getElementById('search-modal');
    if (dialog) dialog.close();
  }

  /* --------------------------------------------------------------------------
     BOOKMARKS DRAWER & MODAL
     -------------------------------------------------------------------------- */
  openBookmarksModal() {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }
    const modal = document.getElementById('bookmarks-modal');
    const container = document.getElementById('bookmarks-list-container');
    if (!modal || !container) return;

    if (this.bookmarks.size === 0) {
      container.innerHTML = '<p class="search-empty-state">No saved bookmarks yet. Click the "Bookmark" button at the top of any module to save it here!</p>';
    } else {
      const bookmarkedMods = ACADEMY_MODULES.filter(m => this.bookmarks.has(m.id));
      container.innerHTML = bookmarkedMods.map(m => `
        <div class="search-result-item" onclick="app.selectBookmark(${m.id})">
          <h4>Module ${m.id}: ${m.title}</h4>
          <p>${m.summary}</p>
        </div>
      `).join('');
    }

    modal.showModal();
  }

  selectBookmark(id) {
    this.closeBookmarksModal();
    this.navigateToModule(id);
  }

  closeBookmarksModal() {
    const modal = document.getElementById('bookmarks-modal');
    if (modal) modal.close();
  }

  /* --------------------------------------------------------------------------
     TEMPLATE DOWNLOAD GENERATOR
     -------------------------------------------------------------------------- */
  downloadTemplate(type) {
    if (!this.userProfile.fullName || !this.userProfile.email) {
      this.openProfileModal(true);
      return;
    }

    let filename = `${type}_template.txt`;
    let content = '';

    switch (type) {
      case 'onboarding_checklist':
        filename = 'Brand_Buzzer_Onboarding_Checklist.csv';
        content = `Step,Task Name,Assigned Department,Status
1,Agreement Signed & Uploaded to Drive,Account Management,Pending
2,Invoice Issued & Payment Verified,Finance,Pending
3,Kickoff Meeting Scheduled,Account Management,Pending
4,Asset Intake Sheet Issued to Client,Creative Team,Pending
5,Google Workspace & Drive Master Directory Created,Tech Team,Pending
6,Meta Business Partner Access Linked,Performance Marketing,Pending
7,Google Ads MCC Linked,Performance Marketing,Pending
8,Google Analytics 4 & Tag Manager Admin Granted,Tech Team,Pending
9,ClickUp Project Board Setup,Account Management,Pending
10,Internal Team Briefing Call Completed,All Departments,Pending
11,Client Slack Connect Channel Enabled,Account Management,Pending
12,Month 1 Content Calendar Kickoff,Creative Team,Pending`;
        break;

      case 'content_calendar':
        filename = 'Brand_Buzzer_Monthly_Content_Calendar.csv';
        content = `Date,Platform,Content Pillar,Funnel Stage,Headline Hook,Visual Format,Copy Caption,Hashtag Set,Status
2026-08-01,Instagram,Educational,TOFU,"3 Mistakes Dental Clinics Make on Meta Ads",Carousel 4:5,"Stop making these mistakes...",#DentalMarketing #Agency,Approved
2026-08-03,LinkedIn,Trust-Building,MOFU,"How We Scaled Grand Vista to $100k Revenue",PDF Document,"Case study breakdown...",#B2B #Performance,Draft
2026-08-05,Instagram,Awareness,TOFU,"Behind the Scenes at Brand Buzzer Agency",Reel 9:16,"A day in the life...",#AgencyLife #RemoteWork,Scheduled`;
        break;

      case 'publishing_checklist':
        filename = 'Brand_Buzzer_PrePublishing_Checklist.txt';
        content = `BRAND BUZZER PRE-PUBLISHING QUALITY ASSURANCE CHECKLIST
------------------------------------------------------
[ ] 1. Correct Social Media Account Handle Selected
[ ] 2. Caption Free of Spelling & Grammar Errors (Grammarly Checked)
[ ] 3. Target User Tag & Location Tag Applied
[ ] 4. Visual Asset Formatted in 4:5 (Post) or 9:16 (Reel/Story)
[ ] 5. Link in Bio Verified Active & Working
[ ] 6. Niche Hashtag Set Added (5-10 Relevant Hashtags)
[ ] 7. Client Approval Sign-Off Recorded in ClickUp
[ ] 8. Scheduled for Peak Audience Engagement Window
[ ] 9. Alt-Text Accessibility Tag Added
[ ] 10. First Comment Loaded (if applicable)`;
        break;

      default:
        filename = `Brand_Buzzer_${type}.txt`;
        content = `BRAND BUZZER AGENCY TEMPLATE — ${type.toUpperCase()}\nCreated for Brand Buzzer Internal Academy.\n\nUse this template file inside your client project directory.`;
        break;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast(`Downloaded ${filename} successfully!`, 'success');
  }

  /* --------------------------------------------------------------------------
     EVENT LISTENERS & SCROLL MECHANICS
     -------------------------------------------------------------------------- */
  setupEventListeners() {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('bb_theme', this.theme);
        this.showToast(`Switched to ${this.theme} mode`, 'info');
      });
    }

    // Search Trigger
    const searchTrigger = document.getElementById('search-trigger-btn');
    if (searchTrigger) {
      searchTrigger.addEventListener('click', () => this.openSearchModal());
    }

    // Bookmarks Trigger
    const bookmarksBtn = document.getElementById('bookmarks-btn');
    if (bookmarksBtn) {
      bookmarksBtn.addEventListener('click', () => this.openBookmarksModal());
    }

    // User Profile Trigger
    const profileBtn = document.getElementById('user-profile-btn');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => this.openProfileModal(false));
    }

    // Password-Protected Manager Dashboard Trigger
    const managerBtn = document.getElementById('manager-dashboard-btn');
    if (managerBtn) {
      managerBtn.addEventListener('click', () => this.openManagerModal());
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (mobileBtn && sidebar && backdrop) {
      mobileBtn.addEventListener('click', () => {
        if (!this.userProfile.fullName || !this.userProfile.email) {
          this.openProfileModal(true);
          return;
        }
        sidebar.classList.toggle('open');
        backdrop.classList.toggle('active');
      });
      backdrop.addEventListener('click', () => this.closeMobileSidebar());
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
    });

    // Sidebar Filter Input
    const filterInput = document.getElementById('sidebar-filter-input');
    if (filterInput) {
      filterInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const links = document.querySelectorAll('.nav-module-link');
        links.forEach(link => {
          const text = link.textContent.toLowerCase();
          link.style.display = text.includes(val) ? 'flex' : 'none';
        });
      });
    }

    this.setupSearchEngine();
  }

  closeMobileSidebar() {
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  setupScrollListeners() {
    const progressBar = document.getElementById('reading-progress-bar');

    window.addEventListener('scroll', () => {
      // Reading progress line
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      if (progressBar) {
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      // Highlight TOC active link
      const headings = document.querySelectorAll('.module-view h2, .module-view h3');
      let currentSection = '';
      headings.forEach(h => {
        const top = h.getBoundingClientRect().top;
        if (top < 120) {
          currentSection = h.id;
        }
      });

      const tocLinks = document.querySelectorAll('.toc-link');
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     TOAST NOTIFICATIONS ENGINE
     -------------------------------------------------------------------------- */
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }
}

// Initialize Application on DOM Ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new AppEngine();
});
