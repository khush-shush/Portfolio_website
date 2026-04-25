const siteData = {
  heroChips: [
    "Machine learning for real-world impact",
    "Healthcare inspired, human centered",
    "Strong communication and leadership",
    "Classical dance discipline meets technical rigor",
  ],
  education: [
    {
      title: "B.Tech in Computer Science",
      meta: "VIT Chennai | Expected 2026",
      copy: "CGPA: 8.35/10",
    },
    {
      title: "High School (Grade XII)",
      meta: "Pragathi PU College | 2022",
      copy: "Scored 89%",
    },
    {
      title: "High School (Grade X)",
      meta: "Vibgyor High Kadugodi | 2020",
      copy: "Scored 91.6% and graduated as class topper.",
    },
    {
      title: "Tests",
      meta: "GRE + IELTS",
      copy: "GRE: Quant 153, Verbal 157, AW 3.5. IELTS: Band 8.",
    },
  ],
  strengths: [
    "Comfortable moving from research to implementation",
    "Drawn to healthcare, safety, and inclusive technology",
    "Calm when projects get messy or high pressure",
    "Strong presenter, collaborator, and team lead",
    "Able to bring personality without losing professionalism",
  ],
  stats: [
    { value: "4+", label: "internships and research experiences" },
    { value: "3500+", label: "images annotated for corrosion detection" },
    { value: "92%", label: "accuracy in herbal plant classification" },
    { value: "90", label: "delegates led as VHMUN chairperson" },
  ],
  credentials: [
    {
      title: "Big Data Analytics Certification",
      meta: "NUS Singapore",
      copy: "Earned through the Global Academic Internship Programme, building on applied analytics and technical problem solving.",
    },
    {
      title: "GRE",
      meta: "Graduate admissions exam",
      copy: "Quantitative 153, Verbal 157, Analytical Writing 3.5.",
    },
    {
      title: "IELTS",
      meta: "English proficiency",
      copy: "Band 8 overall.",
    },
  ],
  languages: ["Telugu", "Kannada", "Hindi", "English"],
  story: [
    {
      title: "Conviction over consensus",
      text: "One of the most defining moments in my life came when I was just fourteen and felt an entire Model UN committee turn against me. I came back the next day, spoke louder, performed better, and won. That experience stayed with me. It taught me that confidence is not the absence of discomfort. It is the choice to keep showing up with clarity anyway.",
    },
    {
      title: "Ambition with a reason",
      text: "A dance trip to Cambodia changed the way I think about success. Seeing my parents stretch themselves so I could perform internationally made me rethink what achievement meant. Since then, I have not wanted success just for the title line. I want my work to honor sacrifice and create opportunities that feel worth the effort behind them.",
    },
    {
      title: "Why I build",
      text: "Computer science became meaningful to me when I began to see it the way I see dance: as discipline, iteration, responsibility, and expression. I am especially drawn to AI in healthcare because the field sits close to my life. Through my parents, I grew up seeing the emotional and operational weight of healthcare decisions, and I want my work to reduce friction where it matters most.",
    },
    {
      title: "How I lead",
      text: "Leadership, for me, is collaborative. Whether I am guiding a dance team, managing an event, chairing a conference, or contributing to a technical project, I care about creating an environment where people think aloud, contribute freely, and strengthen the final result together.",
    },
  ],
  experience: [
    {
      role: "Intern",
      place: "FLEXI EFFICADS PRIVATE LIMITED | Full-time | Bengaluru, Karnataka, India",
      date: "Feb 2026 to Mar 2026",
      bullets: [
        "Completed a Flexi internship focused on industrial automation, HMI interface development, and computer vision.",
        "Designed basic circuit connections for machine HMI interfaces using Siemens TIA Portal.",
        "Configured and integrated text lists within the Siemens HMI interface for dynamic display.",
        "Designed the front-end layout of the HMI interface for a better operator experience and integrated an animated MSN logo for the panel display.",
        "Fine-tuned machine speed and acceleration parameters using the FOSSEE platform and corrected errors in machine code files.",
        "Annotated datasets and trained models using Keyence IV3 vision inspection sensors for automated quality inspection workflows.",
      ],
    },
    {
      role: "Technical Consultant",
      place: "Corporate Gurukul | Full-time | Chennai, Tamil Nadu, India | Remote",
      date: "Aug 2025 to Mar 2026",
      bullets: [
        "Served as a technical counselor responsible for candidate identification and selection for the GAIP and GIP programs.",
        "Conducted end-to-end candidate evaluation to identify students best suited for immersive industry-linked learning programs.",
        "Delivered presentation sessions to student cohorts, clearly explaining program value, structure, outcomes, and expectations.",
        "Guided students in making informed academic and career decisions through mentorship and one-on-one communication.",
        "Built trust and rapport with a diverse student base while supporting participation and program fit.",
      ],
    },
    {
      role: "Campus Ambassador",
      place: "Corporate Gurukul | Chennai, Tamil Nadu, India",
      date: "Aug 2025 to Mar 2026",
      bullets: [
        "Represented Corporate Gurukul as the official campus ambassador, acting as a bridge between the brand and VIT Chennai's student community.",
        "Promoted company initiatives through workshops, seminars, peer outreach, and targeted social media visibility.",
        "Coordinated on-ground campus activities and helped drive strong student participation in events and programs.",
        "Increased campus brand visibility by building and nurturing a strong peer network.",
        "Collaborated with cross-functional teams to align student-facing outreach with organizational goals.",
      ],
    },
    {
      role: "Global Academic Internship Programme",
      place: "NUS Singapore",
      date: "June 2025",
      thumbnail: "assets/nus_certificte.png",
      thumbnailAlt: "NUS certificate",
      thumbnailLabel: "View NUS certificate",
      bullets: [
        "Simulated an underwater pipeline environment in Minecraft to model corrosion scenarios under constrained data conditions.",
        "Collected and annotated more than 3,500 images using Roboflow and applied rotation-based augmentation.",
        "Trained a YOLO model for real-time corrosion detection and integrated DeepSORT for object tracking.",
        "Used HSV thresholding to isolate pipeline structure and designed a vision system for autonomous-style inspection.",
      ],
    },
    {
      role: "Summer Intern (SRIP 2025)",
      place: "Vellore Institute of Technology | Full-time | Hyderabad, Telangana, India | Remote",
      date: "May 2025 to Mar 2026",
      thumbnail: "assets/srip_2025.png",
      thumbnailAlt: "SRIP 2025 certificate of completion",
      thumbnailLabel: "View SRIP 2025 certificate",
      bullets: [
        "Conducted research at the intersection of genomic data science and oncology, developing an integrative machine learning pipeline for cancer type prediction and drug prioritization.",
        "Designed and implemented a multi-stage ML pipeline to classify Breast Cancer, Colorectal Cancer, Non-Small Cell Lung Cancer, Glioma, and Prostate Cancer using genomic alteration profiles.",
        "Applied and benchmarked XGBoost, Liquid Neural Networks, SVM, and Logistic Regression on CBioPortal genomic datasets including the MK Study (2017).",
        "Analyzed BRCA1, KRAS, APC, BRAF, and TP53 to identify biomarkers and molecular patterns driving cancer subtypes.",
        "Used K-Fold cross-validation, hyperparameter tuning, and SMOTE to improve performance and handle class imbalance in clinical datasets.",
        "Contributed to interpretable precision-oncology modeling by connecting genomic insights with scalable cancer classification workflows.",
      ],
    },
    {
      role: "Core Machine Learning Team Contributor",
      place: "SHC Technologies",
      date: "May 2025 to Aug 2025",
      media: [
        {
          src: "assets/shc_completion.png",
          alt: "SHC completion certificate",
          label: "View SHC completion certificate",
        },
        {
          src: "assets/shc_lor.png",
          alt: "SHC letter of recommendation",
          label: "View SHC LOR",
        },
      ],
      bullets: [
        "Interned at SHC Technologies, a healthcare-focused AI company building AI-assisted diagnostic tools, with exposure to real-world machine learning workflows in clinical and pathological imaging.",
        "Annotated multiple cell-type images for object detection tasks using QuPath, helping build high-quality training datasets for medical imaging models.",
        "Assisted in debugging and correcting object-detection codebases to improve model pipeline reliability.",
        "Contributed to a CNN-based histopathological cancer detection model supporting early-stage diagnosis through deep learning.",
        "Received structured training across a wide range of machine learning and deep learning models, strengthening both foundational and applied AI knowledge.",
        "Supported technical documentation and company content creation as part of broader organizational outreach.",
      ],
    },
    {
      role: "Summer Intern (SRIP 2024)",
      place: "Vellore Institute of Technology | Internship | Hyderabad, Telangana, India | Remote",
      date: "May 2024 to Sep 2024",
      thumbnail: "assets/srip_2024.png",
      thumbnailAlt: "SRIP 2024 certificate of completion",
      thumbnailLabel: "View SRIP 2024 certificate",
      bullets: [
        "Conducted applied deep learning research under the Summer Research Internship Programme, developing an ensemble model for classifying Ayurvedic medicinal plant species from leaf images.",
        "Designed and implemented a stacked ensemble combining MobileNetV2, DenseNet121, and EfficientNet with a custom metamodel for robust herb leaf classification.",
        "Trained the pipeline on a cleaned and preprocessed dataset of 20,600 images spanning 170 Ayurvedic medicinal plant species.",
        "Achieved 99 percent training accuracy and 84 percent test accuracy after 110 epochs using the Adam optimizer and sparse categorical cross-entropy loss.",
        "Aggregated predictions from all three base models into a metamodel, improving performance and robustness over the individual architectures.",
        "Positioned the system as a scalable deep learning alternative to traditional plant identification methods such as OCR, dichotomous keys, and manual image processing.",
      ],
    },
    {
      role: "Dancer",
      place: "Self-employed | Performance",
      date: "Apr 2008 to Jul 2025",
      media: [
        {
          src: "assets/cambodia_dance.png",
          alt: "Dance performance in Cambodia",
          label: "View Cambodia certificate",
        },
        {
          src: "assets/chiguru_dance.png",
          alt: "Chiguru dance performance",
          label: "View Chiguru certificate",
        },
        {
          src: "assets/swartaal dance.png",
          alt: "Swaartal dance performance",
          label: "View Swaartal certificate",
        },
      ],
      bullets: [
        "Trained rigorously in Bharatanatyam for more than nine years under accomplished gurus while representing my dance school across national and international stages.",
        "Trained for 8 years under Guru Kanya Ramachandran Tayalia, daughter of the legendary Padmini Ramachandran, and for 1 year under Gayatri Keshavan.",
        "Represented Natyapriya at the Apsara Dance and International Indian Classical Dance Festival in Cambodia in 2019.",
        "Performed at Chiguru, a Government of Karnataka program featured in Times of India, and at Swaartal at Jagriti Theatre in Whitefield.",
        "Performed classical dance at Sarani in Forum Neighbourhood Mall, Whitefield, and represented Natyapriya at Kalakshetra annual day celebrations on 5 or more occasions.",
        "Cleared the Junior Bharatanatyam Examination conducted by KSEEB with First Class, scoring 84 percent.",
      ],
    },
    {
      role: "Event Manager",
      place: "VIT Dance Club | Part-time",
      date: "Jun 2023 to Jul 2024",
      media: [
        {
          src: "assets/event_manager_1.png",
          alt: "VIT Dance Club event management photo one",
          label: "View event photo 1",
        },
        {
          src: "assets/event_manager_2.png",
          alt: "VIT Dance Club event management photo two",
          label: "View event photo 2",
        },
      ],
      bullets: [
        "Drove end-to-end event management and coordination for one of VIT Chennai's most active cultural clubs across logistics, marketing, student coordination, and digital content.",
        "Served as Point of Contact for the Cultural Exchange Event 2023, managing communication and on-ground operations.",
        "Acted as Student Coordinator for Elevate Expressions 2023 and Dancing Duo 2024 during Vibrance.",
        "Supported organization and on-ground execution for Series Shuffle 2023, Move and Groove 2024, VIT's Got Talent 2024, Techno-VIT Expo 2023, Vibrance Expo 2024, and other Vibrance events.",
        "Led outreach to external colleges for Dancepacito and coordinated hostel accommodation for visiting participants.",
        "Contributed as an FFCS member by creating social media content and supporting digital marketing campaigns for club events.",
      ],
    },
    {
      role: "Junior Management Lead",
      place: "ATOM Robotics",
      date: "Sep 2023 to Jan 2024",
      bullets: [
        "Played a multi-functional leadership role spanning team operations, social media strategy, and recruitment for one of the core robotics teams.",
        "Liaised with the Student Welfare Office to secure permissions, furniture, and dedicated workspaces for the team.",
        "Oversaw attendance and accountability across team members, supporting consistent participation and internal discipline.",
        "Helped coordinate internal showcases to support knowledge sharing and project demonstrations within the team.",
        "Led a content team to build Atom Robotics' digital presence and maintain a consistent social media identity.",
        "Organized structured interviews and managed end-to-end recruitment for management roles, including post-selection formalities such as COC, NOC, and membership fee collection.",
      ],
    },
    {
      role: "VHMUN Chairperson",
      place: "VIBGYOR Group of Schools | Part-time",
      date: "Oct 2021 to Nov 2021",
      media: [
        {
          src: "assets/vhmun_chairman.png",
          alt: "VHMUN chairperson certificate",
          label: "View chairperson certificate",
        },
        {
          src: "assets/honourable_mention_vhmun.png",
          alt: "VHMUN honourable mention certificate",
          label: "View honourable mention",
        },
      ],
      bullets: [
        "Served on the Executive Board of a three-day Pan-India Model United Nations conference involving delegates from across India and the Philippines.",
        "Curated and finalized committee agenda topics and conducted background research to equip delegates for substantive debate.",
        "Delivered pre-conference training sessions for more than 90 delegates within a single committee, supporting a collaborative and rigorous learning environment.",
        "Managed committee operations across all three days, keeping sessions structured, engaging, and on schedule.",
        "Evaluated delegate performance and awarded distinctions such as Best Delegate and Honorable Delegate based on diplomacy, research quality, and debate contributions.",
        "Demonstrated leadership and organizational strength in supporting an international-scale conference designed for both individual and collective growth.",
      ],
    },
  ],
  projects: [
    {
      title: "Drug Metabolism Prediction Pipeline Using MolFormer and Physicochemical Modeling",
      tag: "Computational Drug Discovery",
      copy: "An end-to-end AI pipeline that takes a molecule's SMILES representation and produces a metabolization score by combining MolFormer-based CYP enzyme prediction, pharmacogenomic star-allele adjustment, and physicochemical modeling.",
    },
    {
      title: "Integrative Genomic-Based Cancer Prediction",
      tag: "Healthcare AI",
      copy: "A multi-stage genomic machine learning framework for classifying Breast Cancer, Colorectal Cancer, Non-Small Cell Lung Cancer, Glioma, and Prostate Cancer using CBioPortal mutation data, benchmarking XGBoost, Liquid Neural Networks, SVM, and Logistic Regression while introducing LNNs into genomic cancer classification and achieving strong results across binary and multi-class settings.",
    },
    {
      title: "Parkinson's Disease Severity Estimation",
      tag: "Signal Processing + Deep Learning",
      copy: "A non-invasive automated hybrid deep learning system for Parkinson's severity assessment that uses an end-to-end audio pipeline from raw speech to STFT, Mel spectrograms, MFCC and delta features, then applies a CNN-LSTM model for UPDRS-aligned multi-stage classification with 90.29 percent mean accuracy across 5-fold stratified cross-validation.",
    },
    {
      title: "HerbEnsembleNet",
      tag: "Computer Vision",
      copy: "A stacked ensemble deep learning model for Ayurvedic medicinal herb classification that combines MobileNetV2, DenseNet121, and EfficientNet on a 20,600-image dataset across 170 species, using a feedforward metamodel to outperform the individual architectures and improve large-scale plant identification accuracy.",
    },
    {
      title: "Underwater Pipeline Corrosion Detection",
      tag: "Applied Vision Systems",
      copy: "A real-time corrosion detection and tracking pipeline developed under dataset limitations, blending simulation, augmentation, detection, and tracking.",
    },
    {
      title: "Safety Guard",
      tag: "Social Impact Product",
      copy: "An end-to-end AI-powered women and child safety travel platform that combines route tracking, voice authentication, proactive safety check-ins, and Twilio-based emergency alerts, with a Python backend and React frontend built to support intervention even when a user cannot actively use their device.",
    },
    {
      title: "InspiroBot",
      tag: "Inclusivity + Education",
      copy: "An end-to-end accessible AI system that combines real-time sign language recognition with a RAG-powered chatbot, using YOLOv8, OpenCV, LangChain, FAISS, BM25, reranking, and multimodal voice-text-gesture interaction to support inclusive learning and communication for the hearing-impaired community.",
    },
  ],
  focus: [
    {
      title: "Healthcare AI that can leave the lab",
      meta: "Motivation rooted in lived exposure to healthcare systems",
      copy: "I am especially interested in machine learning that can reduce error, improve accessibility, simplify patient communication, and support better decision-making in real environments.",
    },
    {
      title: "Publication-oriented technical work",
      meta: "Cancer prediction and Parkinson's severity research",
      copy: "I am drawn to projects that hold up both as serious technical investigations and as systems that could eventually become genuinely useful.",
    },
    {
      title: "Bridging product and research",
      meta: "From models to usable systems",
      copy: "I like building from experimentation into workflows that people can actually interact with, understand, and trust.",
    },
    {
      title: "Drug discovery and molecular ML",
      meta: "Cheminformatics and pharmacogenomics",
      copy: "I am increasingly interested in molecular machine learning workflows that combine transformer models, structural features, and clinically relevant biochemical context.",
    },
  ],
  tools: [
    {
      name: "Python",
      type: "Core language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "The backbone for most of my ML, data science, automation, and backend experimentation workflows.",
    },
    {
      name: "React",
      type: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Used for building interactive UIs like safety-management and travel-platform frontends.",
    },
    {
      name: "TensorFlow",
      type: "Deep learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      description: "Part of my deep-learning stack for computer vision and biomedical AI projects.",
    },
    {
      name: "Keras",
      type: "Modeling API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      description: "Helpful for rapidly building and training CNN and CNN-LSTM architectures.",
    },
    {
      name: "OpenCV",
      type: "Computer vision",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      description: "Used for real-time webcam inference, image processing, and live visual pipelines.",
    },
    {
      name: "scikit-learn",
      type: "ML toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      description: "Used for classical ML, evaluation, cross-validation, metrics, and data processing workflows.",
    },
    {
      name: "Pandas",
      type: "Data handling",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      description: "My go-to tool for structuring datasets, preprocessing, and experiment analysis.",
    },
    {
      name: "NumPy",
      type: "Numerical computing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      description: "Used throughout signal processing, feature engineering, and model pipelines.",
    },
    {
      name: "Jupyter",
      type: "Experimentation",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      description: "Where I prototype, inspect data, and iterate on research-heavy workflows.",
    },
    {
      name: "Twilio",
      type: "Alerts and communication",
      icon: "https://cdn.simpleicons.org/twilio/F22F46",
      description: "Used in the safety platform to trigger SMS and call-based emergency alerts.",
    },
    {
      name: "YOLOv8",
      type: "Object detection",
      iconText: "YO",
      description: "Used for sign-language detection and industrial inspection-style vision tasks.",
    },
    {
      name: "LangChain",
      type: "RAG orchestration",
      iconText: "LC",
      description: "Used to wire retrieval, prompt construction, and document-grounded chatbot flows.",
    },
    {
      name: "FAISS",
      type: "Vector retrieval",
      iconText: "FS",
      description: "Used for semantic retrieval in the InspiroBot RAG pipeline.",
    },
    {
      name: "RDKit",
      type: "Cheminformatics",
      iconText: "RD",
      description: "Used for heavy-atom features and chemistry-aware molecular processing.",
    },
    {
      name: "Chemprop",
      type: "Molecular modeling",
      iconText: "CP",
      description: "Used for LogP-related physicochemical modeling within the drug-metabolism pipeline.",
    },
    {
      name: "MolFormer",
      type: "Transformer models",
      iconText: "MF",
      description: "Used for CYP enzyme substrate prediction from SMILES strings.",
    },
    {
      name: "Siemens TIA Portal",
      type: "Industrial automation",
      iconText: "TIA",
      description: "Used during the Flexi internship for HMI connections, interface design, and machine setup work.",
    },
    {
      name: "QuPath",
      type: "Pathology imaging",
      iconText: "QP",
      description: "Used for annotating cell-type images for healthcare and pathology-focused detection tasks.",
    },
    {
      name: "Ollama",
      type: "Local LLM runtime",
      iconText: "OL",
      description: "Used to run local language models inside the RAG chatbot stack.",
    },
    {
      name: "GraphHopper",
      type: "Routing and maps",
      iconText: "GH",
      description: "Used for route verification and live travel tracking in the safety platform.",
    },
  ],
  skillGroups: [
    {
      title: "ML and AI",
      items: ["XGBoost", "CNNs", "YOLO", "DeepSORT", "Computer Vision", "Signal Processing", "Ranking systems"],
    },
    {
      title: "Research themes",
      items: ["Healthcare AI", "Genomic prediction", "Model interpretability", "Patient-facing systems", "Autonomous inspection"],
    },
    {
      title: "Human skills",
      items: ["Leadership", "Presentation", "Collaboration", "Event management", "Public speaking", "Creative discipline"],
    },
  ],
  beyond: [
    {
      title: "Bharatanatyam",
      meta: "Discipline, grace, repetition, and stage confidence",
      copy: "Dance has been one of the deepest influences on how I work. It taught me that excellence comes from iteration, respect for craft, and learning how to perform under pressure without losing your center.",
    },
    {
      title: "Model United Nations",
      meta: "Logic, diplomacy, and speaking with conviction",
      copy: "MUN shaped my ability to research deeply, think critically, and speak clearly even in rooms that do not immediately agree with me.",
    },
    {
      title: "Management and team culture",
      meta: "VIT Dance Club + Atom Robotics + VHMUN",
      copy: "I have worked in leadership and event roles where I learned to manage unpredictability, coordinate people, and keep a team moving without becoming rigid or hierarchical.",
    },
    {
      title: "Community service",
      meta: "Healthcare and service-minded volunteering",
      copy: "I volunteered at vaccine drives with BGS Global Hospital in Karnataka orphanages and supported kitchen service at Satya Sai Hospital in Whitefield.",
    },
  ],
  danceHighlights: [
    {
      title: "Apsara Dance and International Indian Classical Dance Festival",
      meta: "Cambodia",
      copy: "An international performance experience that became deeply meaningful both artistically and personally because of the sacrifices my family made to get me there.",
      thumbnail: "assets/cambodia_dance.png",
      thumbnailAlt: "Cambodia dance performance",
    },
    {
      title: "KSEEB Classical Bharatanatyam Junior Exam",
      meta: "Formal training milestone",
      copy: "Passed with 82.5%, reflecting years of structured practice and rigor.",
      thumbnail: "assets/dance_junior_exam_certficate.png",
      thumbnailAlt: "Junior Bharatanatyam exam certificate",
    },
    {
      title: "Chiguru and Swar Taal performances",
      meta: "State and festival stages",
      copy: "Performed on cultural stages that strengthened my stage presence, composure, and commitment to craft.",
      media: [
        {
          src: "assets/chiguru_toi_paper_clipping.png",
          alt: "Times of India clipping for Chiguru performance",
        },
        {
          src: "assets/chiguru_dance.png",
          alt: "Chiguru performance photo",
        },
        {
          src: "assets/swartaal dance.png",
          alt: "Swaartal performance photo",
        },
      ],
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "kukshe654@gmail.com",
      href: "mailto:kukshe654@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 89717 54654",
      href: "tel:+918971754654",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/khushi-jh-05019b271",
      href: "https://www.linkedin.com/in/khushi-jh-05019b271/",
    },
    {
      label: "GitHub",
      value: "github.com/khush-shush",
      href: "https://github.com/khush-shush",
    },
  ],
};

const tabButtons = [...document.querySelectorAll(".tab-button")];
const tabPanels = [...document.querySelectorAll(".tab-panel")];

tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

function switchTab(name) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === name);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === name);
  });
}

function renderHeroChips() {
  const root = document.getElementById("hero-chips");
  root.innerHTML = siteData.heroChips.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderEducation() {
  document.getElementById("education-list").innerHTML = siteData.education.map(createStackItem).join("");
}

function renderStrengths() {
  document.getElementById("strength-list").innerHTML = siteData.strengths.map((item) => `<span class="pill">${item}</span>`).join("");
}

function renderStats() {
  document.getElementById("stats-grid").innerHTML = siteData.stats.map((item) => `
    <article class="stat-card">
      <strong data-count="${item.value}">${item.value}</strong>
      <span>${item.label}</span>
    </article>
  `).join("");
}

function renderStory() {
  document.getElementById("story-blocks").innerHTML = siteData.story.map((item) => `
    <article class="story-item">
      <h3>${item.title}</h3>
      <p class="story-text">${item.text}</p>
    </article>
  `).join("");
}

function renderCredentials() {
  document.getElementById("credential-list").innerHTML = siteData.credentials.map(createStackItem).join("");
}

function renderLanguages() {
  const root = document.getElementById("language-list");
  if (!root) return;
  root.innerHTML = siteData.languages.map((language) => `<span class="pill">${language}</span>`).join("");
}

function renderExperience() {
  const root = document.getElementById("experience-list");
  if (!root) return;

  root.innerHTML = siteData.experience.map((item) => {
    const bullets = Array.isArray(item.bullets)
      ? item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")
      : "";

    return `
      <article class="timeline-item">
        <div class="timeline-inner">
          <div class="timeline-header">
            <div>
              <h3>${item.role || ""}</h3>
              <span class="stack-meta">${item.place || ""}</span>
            </div>
            <span class="timeline-meta">${item.date || ""}</span>
          </div>
          <ul class="bullet-list">${bullets}</ul>
          ${renderMediaMarkup(item)}
        </div>
      </article>
    `;
  }).join("");
}

function renderProjects() {
  document.getElementById("project-grid").innerHTML = siteData.projects.map((item) => `
    <article class="project-card">
      <div class="project-header">
        <h3>${item.title}</h3>
        <span class="project-tag">${item.tag}</span>
      </div>
      <p class="project-copy">${item.copy}</p>
    </article>
  `).join("");
}

function renderFocus() {
  document.getElementById("focus-list").innerHTML = siteData.focus.map(createStackItem).join("");
}

function renderTools() {
  const root = document.getElementById("tool-grid");
  const nameEl = document.getElementById("tool-name");
  const typeEl = document.getElementById("tool-type");
  const descriptionEl = document.getElementById("tool-description");

  if (!root || !nameEl || !typeEl || !descriptionEl) return;

  root.innerHTML = siteData.tools.map((tool, index) => `
    <button class="tool-button ${index === 0 ? "active" : ""}" type="button" data-tool-index="${index}" aria-label="${tool.name}">
      <span class="tool-icon-wrap">
        ${tool.icon ? `<img class="tool-icon" src="${tool.icon}" alt="${tool.name} icon">` : `<span class="tool-monogram">${tool.iconText || tool.name.slice(0, 2).toUpperCase()}</span>`}
      </span>
      <span class="tool-label">${tool.name}</span>
    </button>
  `).join("");

  const setActiveTool = (index) => {
    const tool = siteData.tools[index];
    if (!tool) return;

    root.querySelectorAll(".tool-button").forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.toolIndex) === index);
    });

    nameEl.textContent = tool.name;
    typeEl.textContent = tool.type;
    descriptionEl.textContent = tool.description;
  };

  root.addEventListener("click", (event) => {
    const button = event.target.closest(".tool-button");
    if (!button) return;
    setActiveTool(Number(button.dataset.toolIndex));
  });

  root.addEventListener("pointerover", (event) => {
    const button = event.target.closest(".tool-button");
    if (!button) return;
    setActiveTool(Number(button.dataset.toolIndex));
  });

  setActiveTool(0);
}

function renderSkills() {
  document.getElementById("skill-groups").innerHTML = siteData.skillGroups.map((group) => `
    <article class="skill-group">
      <h3>${group.title}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderBeyond() {
  document.getElementById("beyond-list").innerHTML = siteData.beyond.map(createStackItem).join("");
}

function renderDanceHighlights() {
  document.getElementById("dance-highlights").innerHTML = siteData.danceHighlights.map(createStackItem).join("");
}

function renderContacts() {
  document.getElementById("contact-list").innerHTML = siteData.contacts.map((item) => `
    <a class="contact-item" href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </a>
  `).join("");
}

function createStackItem(item) {
  return `
    <article class="stack-item">
      <h3>${item.title}</h3>
      <span class="stack-meta">${item.meta}</span>
      <p class="stack-copy">${item.copy}</p>
      ${renderMediaMarkup(item)}
    </article>
  `;
}

function renderMediaMarkup(item) {
  const media = [];

  if (item.thumbnail) {
    media.push({
      src: item.thumbnail,
      alt: item.thumbnailAlt || item.title || item.role || "thumbnail",
      label: item.thumbnailLabel || "View attachment",
    });
  }

  if (Array.isArray(item.media)) {
    media.push(...item.media);
  }

  if (!media.length) return "";

  const safeMedia = media.filter((entry) => entry && entry.src);
  const baseTitle = item.title || item.role || "Preview";

  const buttons = safeMedia.map((entry, index) => {
    const alt = entry.alt || "thumbnail";
    const title = safeMedia.length > 1 ? `${baseTitle} - ${index + 1}` : baseTitle;

    return `
      <button
        class="experience-thumbnail-button"
        type="button"
        data-media-src="${entry.src}"
        data-media-alt="${alt}"
        data-media-title="${title}"
      >
        <span class="experience-thumbnail-label">${entry.label || "View attachment"}</span>
      </button>
    `;
  }).join("");

  return `
    <div class="experience-media ${safeMedia.length > 1 ? "experience-media-grid" : ""}">
      ${buttons}
    </div>
  `;
}

renderHeroChips();
renderEducation();
renderStrengths();
renderStats();
renderCredentials();
renderLanguages();
renderStory();
renderExperience();
renderProjects();
renderFocus();
renderTools();
renderSkills();
renderBeyond();
renderDanceHighlights();
renderContacts();

const revealTargets = [
  ...document.querySelectorAll(".card"),
  ...document.querySelectorAll(".stack-item"),
  ...document.querySelectorAll(".story-item"),
  ...document.querySelectorAll(".timeline-item"),
  ...document.querySelectorAll(".project-card"),
  ...document.querySelectorAll(".skill-group"),
  ...document.querySelectorAll(".stat-card"),
  ...document.querySelectorAll(".contact-item"),
  ...document.querySelectorAll(".dance-figure"),
];

revealTargets.forEach((element) => element.classList.add("reveal"));

const statCounters = [...document.querySelectorAll(".stat-card strong[data-count]")];

function animateCounter(element) {
  const raw = element.dataset.count || element.textContent || "";
  const numeric = Number.parseFloat(raw.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(numeric)) return;

  const suffix = raw.replace(/[0-9.]/g, "");
  const isDecimal = raw.includes(".");
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = numeric * eased;
    const display = isDecimal ? current.toFixed(2) : Math.round(current).toString();
    element.textContent = `${display}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = raw;
    }
  }

  requestAnimationFrame(step);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target.matches(".stat-card")) {
          const counter = entry.target.querySelector("strong[data-count]");
          if (counter && !counter.dataset.animated) {
            counter.dataset.animated = "true";
            animateCounter(counter);
          }
        }
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealTargets.forEach((element) => revealObserver.observe(element));

const mediaModal = document.getElementById("media-modal");
const mediaModalImage = document.getElementById("media-modal-image");
const mediaModalTitle = document.getElementById("media-modal-title");
const mediaModalClose = document.getElementById("media-modal-close");

function closeMediaModal() {
  if (!mediaModal || !mediaModalImage || !mediaModalTitle) return;
  mediaModal.classList.add("hidden");
  mediaModal.setAttribute("aria-hidden", "true");
  mediaModalImage.src = "";
  mediaModalImage.alt = "";
  mediaModalTitle.textContent = "Preview";
}

function openMediaModal(src, alt, title) {
  if (!mediaModal || !mediaModalImage || !mediaModalTitle) return;
  mediaModalImage.src = src;
  mediaModalImage.alt = alt || "Preview";
  mediaModalTitle.textContent = title || "Preview";
  mediaModal.classList.remove("hidden");
  mediaModal.setAttribute("aria-hidden", "false");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".experience-thumbnail-button");
  if (trigger) {
    openMediaModal(
      trigger.dataset.mediaSrc,
      trigger.dataset.mediaAlt,
      trigger.dataset.mediaTitle
    );
    return;
  }

  const closeTarget = event.target.closest("[data-close-modal='true']");
  if (closeTarget) {
    closeMediaModal();
  }
});

if (mediaModalClose) {
  mediaModalClose.addEventListener("click", closeMediaModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMediaModal();
  }
});

const hero = document.querySelector(".hero");
const pageShell = document.querySelector(".page-shell");

if (hero) {
  hero.classList.add("hero-load");
}

if (hero && pageShell) {
  pageShell.addEventListener("pointermove", (event) => {
    const rect = pageShell.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    document.body.style.setProperty("--pointer-x", `${x}%`);
    document.body.style.setProperty("--pointer-y", `${y}%`);
  });

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const shiftX = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const shiftY = ((event.clientY - rect.top) / rect.height - 0.5) * 16;
    hero.style.transform = `translate3d(${shiftX * 0.4}px, ${shiftY * 0.18}px, 0)`;
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.transform = "translate3d(0, 0, 0)";
  });
}
