// Multi-language Support
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.createLanguageSelector();
        this.applyTranslations();
        this.bindEvents();
    }

    async loadTranslations() {
        // English translations (default)
        this.translations.en = {
            // Navigation
            'nav.home': 'Home',
            'nav.service': 'Service',
            'nav.about': 'About',
            'nav.certificates': 'Certificates',
            'nav.portfolio': 'Portfolio',
            'nav.testimonials': 'Testimonials',
            'nav.blog': 'Blog',
            'nav.contact': 'Contact',
            
            // Home section
            'home.title': 'Data Science Specialist',
            'home.name': 'Segni Girma',
            'home.subtitle': 'Transforming Data into Actionable Insights',
            'home.ml': 'Machine Learning',
            'home.analysis': 'Data Analysis',
            'home.ai': 'AI Solutions',
            'home.view-projects': 'View Projects',
            'home.download-cv': 'Download CV',
            
            // Expertise section
            'expertise.title': 'My Expertise',
            'expertise.subtitle': 'Provide Wide Range of Digital Services',
            'expertise.competitive': 'Competitive Programmer',
            'expertise.competitive-desc': 'Competitive programming is a fun way to challenge yourself and improve your coding skills. It involves solving algorithmic problems under time constraints.',
            'expertise.data-science': 'Data Science',
            'expertise.data-science-desc': 'Data science combines statistics, computer science, and domain knowledge to extract insights from data.',
            'expertise.python': 'Python Developer',
            'expertise.python-desc': 'A Python developer specializes in writing server-side web applications, scripting, and data analysis using Python.',
            'common.read-more': 'Read More',
            
            // Skills section
            'skills.title': 'My Skills',
            'skills.subtitle': 'Beautiful & Unique Digital Experiences',
            'skills.description': '⏱️ Competitive Programmer: Solve algorithmic challenges with optimized code under time constraints<br>📊 Data Science: Extract insights using statistical analysis & machine learning<br>🐍 Python Dev: Build apps/automation with Django, Flask, Pandas & NumPy<br>🌐 Holistic Skills: Blend coding efficiency, analytical rigor & software development',
            
            // Portfolio section
            'portfolio.title': 'Creative Work',
            'portfolio.subtitle': 'Check My Portfolio',
            'portfolio.all': 'All',
            'portfolio.ml': 'Machine Learning',
            'portfolio.viz': 'Data Visualization',
            'portfolio.analysis': 'Data Analysis',
            'portfolio.nlp': 'NLP',
            
            // Contact section
            'contact.title': 'Get in Touch',
            'contact.subtitle': 'Any Questions? Feel Free to Contact',
            'contact.name': 'Name',
            'contact.email': 'E-mail',
            'contact.mobile': 'Mobile No.',
            'contact.message': 'Message',
            'contact.submit': 'Submit',
            
            // Certificates section
            'certificates.title': 'Academic Excellence',
            'certificates.subtitle': 'Certificates & Educational Journey',
            'certificates.description': 'Showcasing my continuous learning path and professional certifications in data science and technology',
            'certificates.timeline-title': 'Educational Timeline',
            'certificates.degree-title': 'Bachelor\'s in Computer Science',
            'certificates.university': 'Adama Science and Technology University',
            'certificates.degree-desc': 'Specialized in Data Science, Machine Learning, and Software Development with focus on Python programming and statistical analysis.',
            'certificates.certification-title': 'Professional Certifications',
            'certificates.cert-desc': 'Continuous professional development through industry-recognized certifications and specialized training programs.',
            'certificates.gallery-title': 'Certificate Gallery',
            'certificates.view-cert': 'View Certificate',
            'certificates.cert1-title': 'Data Science Specialization',
            'certificates.cert1-issuer': 'Coursera - Johns Hopkins University',
            'certificates.cert2-title': 'Machine Learning Course',
            'certificates.cert2-issuer': 'Stanford University - Andrew Ng',
            'certificates.cert3-title': 'Python for Data Science',
            'certificates.cert3-issuer': 'IBM - Cognitive Class',
            'certificates.cert4-title': 'Deep Learning Specialization',
            'certificates.cert4-issuer': 'deeplearning.ai',
            'certificates.add-cert': 'Add New Certificate',
            'certificates.achievements-title': 'Academic Achievements',
            'certificates.gpa': 'Cumulative GPA',
            'certificates.certifications': 'Certifications',
            'certificates.projects': 'Projects Completed',
            'certificates.honors': 'Academic Honors',
            'certificates.cert-details': 'Certificate Details:',
            'certificates.cert1-detail1': 'Completed 10-course specialization in data science',
            'certificates.cert1-detail2': 'Mastered R programming, statistical inference, and machine learning',
            'certificates.cert1-detail3': 'Capstone project: Predictive modeling for business analytics',
            'certificates.completion-date': 'Completion Date:',
            'certificates.credential-id': 'Credential ID:',
            'certificates.upload-title': 'Add New Certificate',
            'certificates.cert-name': 'Certificate Name',
            'certificates.cert-name-placeholder': 'Enter certificate name',
            'certificates.issuing-org': 'Issuing Organization',
            'certificates.issuing-org-placeholder': 'Enter issuing organization',
            'certificates.issue-date': 'Issue Date',
            'certificates.cert-file': 'Certificate File',
            'certificates.description': 'Description',
            'certificates.description-placeholder': 'Brief description of the certificate',
            'certificates.save-cert': 'Save Certificate',
            'common.cancel': 'Cancel'
        };

        // Spanish translations
        this.translations.es = {
            // Navigation
            'nav.home': 'Inicio',
            'nav.service': 'Servicio',
            'nav.about': 'Acerca de',
            'nav.certificates': 'Certificados',
            'nav.portfolio': 'Portafolio',
            'nav.testimonials': 'Testimonios',
            'nav.blog': 'Blog',
            'nav.contact': 'Contacto',
            
            // Home section
            'home.title': 'Especialista en Ciencia de Datos',
            'home.name': 'Segni Girma',
            'home.subtitle': 'Transformando Datos en Insights Accionables',
            'home.ml': 'Aprendizaje Automático',
            'home.analysis': 'Análisis de Datos',
            'home.ai': 'Soluciones de IA',
            'home.view-projects': 'Ver Proyectos',
            'home.download-cv': 'Descargar CV',
            
            // Expertise section
            'expertise.title': 'Mi Experiencia',
            'expertise.subtitle': 'Proporciono Amplia Gama de Servicios Digitales',
            'expertise.competitive': 'Programador Competitivo',
            'expertise.competitive-desc': 'La programación competitiva es una forma divertida de desafiarte y mejorar tus habilidades de codificación.',
            'expertise.data-science': 'Ciencia de Datos',
            'expertise.data-science-desc': 'La ciencia de datos combina estadísticas, informática y conocimiento del dominio para extraer insights de los datos.',
            'expertise.python': 'Desarrollador Python',
            'expertise.python-desc': 'Un desarrollador Python se especializa en escribir aplicaciones web del lado del servidor, scripting y análisis de datos.',
            'common.read-more': 'Leer Más',
            
            // Skills section
            'skills.title': 'Mis Habilidades',
            'skills.subtitle': 'Experiencias Digitales Hermosas y Únicas',
            'skills.description': '⏱️ Programador Competitivo: Resuelvo desafíos algorítmicos con código optimizado<br>📊 Ciencia de Datos: Extraigo insights usando análisis estadístico y ML<br>🐍 Desarrollador Python: Construyo apps/automatización con Django, Flask, Pandas<br>🌐 Habilidades Holísticas: Combino eficiencia de código, rigor analítico y desarrollo',
            
            // Portfolio section
            'portfolio.title': 'Trabajo Creativo',
            'portfolio.subtitle': 'Revisa Mi Portafolio',
            'portfolio.all': 'Todo',
            'portfolio.ml': 'Aprendizaje Automático',
            'portfolio.viz': 'Visualización de Datos',
            'portfolio.analysis': 'Análisis de Datos',
            'portfolio.nlp': 'PLN',
            
            // Contact section
            'contact.title': 'Ponte en Contacto',
            'contact.subtitle': '¿Alguna Pregunta? Siéntete Libre de Contactar',
            'contact.name': 'Nombre',
            'contact.email': 'Correo',
            'contact.mobile': 'Teléfono',
            'contact.message': 'Mensaje',
            'contact.submit': 'Enviar',
            
            // Certificates section
            'certificates.title': 'Excelencia Académica',
            'certificates.subtitle': 'Certificados y Trayectoria Educativa',
            'certificates.description': 'Mostrando mi camino de aprendizaje continuo y certificaciones profesionales en ciencia de datos y tecnología',
            'certificates.timeline-title': 'Cronología Educativa',
            'certificates.degree-title': 'Licenciatura en Ciencias de la Computación',
            'certificates.university': 'Universidad de Ciencia y Tecnología de Adama',
            'certificates.degree-desc': 'Especializado en Ciencia de Datos, Aprendizaje Automático y Desarrollo de Software con enfoque en programación Python y análisis estadístico.',
            'certificates.certification-title': 'Certificaciones Profesionales',
            'certificates.cert-desc': 'Desarrollo profesional continuo a través de certificaciones reconocidas por la industria y programas de capacitación especializados.',
            'certificates.gallery-title': 'Galería de Certificados',
            'certificates.view-cert': 'Ver Certificado',
            'certificates.cert1-title': 'Especialización en Ciencia de Datos',
            'certificates.cert1-issuer': 'Coursera - Universidad Johns Hopkins',
            'certificates.cert2-title': 'Curso de Aprendizaje Automático',
            'certificates.cert2-issuer': 'Universidad Stanford - Andrew Ng',
            'certificates.cert3-title': 'Python para Ciencia de Datos',
            'certificates.cert3-issuer': 'IBM - Cognitive Class',
            'certificates.cert4-title': 'Especialización en Aprendizaje Profundo',
            'certificates.cert4-issuer': 'deeplearning.ai',
            'certificates.add-cert': 'Agregar Nuevo Certificado',
            'certificates.achievements-title': 'Logros Académicos',
            'certificates.gpa': 'Promedio Acumulativo',
            'certificates.certifications': 'Certificaciones',
            'certificates.projects': 'Proyectos Completados',
            'certificates.honors': 'Honores Académicos',
            'certificates.cert-details': 'Detalles del Certificado:',
            'certificates.cert1-detail1': 'Completó especialización de 10 cursos en ciencia de datos',
            'certificates.cert1-detail2': 'Dominó programación R, inferencia estadística y aprendizaje automático',
            'certificates.cert1-detail3': 'Proyecto final: Modelado predictivo para análisis de negocios',
            'certificates.completion-date': 'Fecha de Finalización:',
            'certificates.credential-id': 'ID de Credencial:',
            'certificates.upload-title': 'Agregar Nuevo Certificado',
            'certificates.cert-name': 'Nombre del Certificado',
            'certificates.cert-name-placeholder': 'Ingrese nombre del certificado',
            'certificates.issuing-org': 'Organización Emisora',
            'certificates.issuing-org-placeholder': 'Ingrese organización emisora',
            'certificates.issue-date': 'Fecha de Emisión',
            'certificates.cert-file': 'Archivo del Certificado',
            'certificates.description': 'Descripción',
            'certificates.description-placeholder': 'Breve descripción del certificado',
            'certificates.save-cert': 'Guardar Certificado',
            'common.cancel': 'Cancelar'
        };

        // French translations
        this.translations.fr = {
            // Navigation
            'nav.home': 'Accueil',
            'nav.service': 'Service',
            'nav.about': 'À propos',
            'nav.certificates': 'Certificats',
            'nav.portfolio': 'Portfolio',
            'nav.testimonials': 'Témoignages',
            'nav.blog': 'Blog',
            'nav.contact': 'Contact',
            
            // Home section
            'home.title': 'Spécialiste en Science des Données',
            'home.name': 'Segni Girma',
            'home.subtitle': 'Transformer les Données en Insights Exploitables',
            'home.ml': 'Apprentissage Automatique',
            'home.analysis': 'Analyse de Données',
            'home.ai': 'Solutions IA',
            'home.view-projects': 'Voir Projets',
            'home.download-cv': 'Télécharger CV',
            
            // Expertise section
            'expertise.title': 'Mon Expertise',
            'expertise.subtitle': 'Fournir une Large Gamme de Services Numériques',
            'expertise.competitive': 'Programmeur Compétitif',
            'expertise.competitive-desc': 'La programmation compétitive est un moyen amusant de se défier et d\'améliorer ses compétences en codage.',
            'expertise.data-science': 'Science des Données',
            'expertise.data-science-desc': 'La science des données combine statistiques, informatique et connaissance du domaine pour extraire des insights.',
            'expertise.python': 'Développeur Python',
            'expertise.python-desc': 'Un développeur Python se spécialise dans l\'écriture d\'applications web côté serveur, scripting et analyse de données.',
            'common.read-more': 'Lire Plus',
            
            // Skills section
            'skills.title': 'Mes Compétences',
            'skills.subtitle': 'Expériences Numériques Belles et Uniques',
            'skills.description': '⏱️ Programmeur Compétitif: Résoudre des défis algorithmiques avec du code optimisé<br>📊 Science des Données: Extraire des insights avec analyse statistique et ML<br>🐍 Développeur Python: Construire apps/automatisation avec Django, Flask, Pandas<br>🌐 Compétences Holistiques: Mélanger efficacité de code, rigueur analytique et développement',
            
            // Portfolio section
            'portfolio.title': 'Travail Créatif',
            'portfolio.subtitle': 'Consultez Mon Portfolio',
            'portfolio.all': 'Tout',
            'portfolio.ml': 'Apprentissage Automatique',
            'portfolio.viz': 'Visualisation de Données',
            'portfolio.analysis': 'Analyse de Données',
            'portfolio.nlp': 'TAL',
            
            // Contact section
            'contact.title': 'Entrer en Contact',
            'contact.subtitle': 'Des Questions? N\'hésitez pas à Contacter',
            'contact.name': 'Nom',
            'contact.email': 'E-mail',
            'contact.mobile': 'Téléphone',
            'contact.message': 'Message',
            'contact.submit': 'Envoyer',
            
            // Certificates section
            'certificates.title': 'Excellence Académique',
            'certificates.subtitle': 'Certificats et Parcours Éducatif',
            'certificates.description': 'Présentation de mon parcours d\'apprentissage continu et des certifications professionnelles en science des données et technologie',
            'certificates.timeline-title': 'Chronologie Éducative',
            'certificates.degree-title': 'Licence en Informatique',
            'certificates.university': 'Université des Sciences et Technologies d\'Adama',
            'certificates.degree-desc': 'Spécialisé en Science des Données, Apprentissage Automatique et Développement Logiciel avec focus sur la programmation Python et l\'analyse statistique.',
            'certificates.certification-title': 'Certifications Professionnelles',
            'certificates.cert-desc': 'Développement professionnel continu grâce à des certifications reconnues par l\'industrie et des programmes de formation spécialisés.',
            'certificates.gallery-title': 'Galerie de Certificats',
            'certificates.view-cert': 'Voir Certificat',
            'certificates.cert1-title': 'Spécialisation en Science des Données',
            'certificates.cert1-issuer': 'Coursera - Université Johns Hopkins',
            'certificates.cert2-title': 'Cours d\'Apprentissage Automatique',
            'certificates.cert2-issuer': 'Université Stanford - Andrew Ng',
            'certificates.cert3-title': 'Python pour la Science des Données',
            'certificates.cert3-issuer': 'IBM - Cognitive Class',
            'certificates.cert4-title': 'Spécialisation en Apprentissage Profond',
            'certificates.cert4-issuer': 'deeplearning.ai',
            'certificates.add-cert': 'Ajouter Nouveau Certificat',
            'certificates.achievements-title': 'Réalisations Académiques',
            'certificates.gpa': 'Moyenne Cumulative',
            'certificates.certifications': 'Certifications',
            'certificates.projects': 'Projets Complétés',
            'certificates.honors': 'Honneurs Académiques',
            'certificates.cert-details': 'Détails du Certificat:',
            'certificates.cert1-detail1': 'Complété spécialisation de 10 cours en science des données',
            'certificates.cert1-detail2': 'Maîtrisé programmation R, inférence statistique et apprentissage automatique',
            'certificates.cert1-detail3': 'Projet final: Modélisation prédictive pour l\'analyse d\'affaires',
            'certificates.completion-date': 'Date d\'Achèvement:',
            'certificates.credential-id': 'ID de Credential:',
            'certificates.upload-title': 'Ajouter Nouveau Certificat',
            'certificates.cert-name': 'Nom du Certificat',
            'certificates.cert-name-placeholder': 'Entrez le nom du certificat',
            'certificates.issuing-org': 'Organisation Émettrice',
            'certificates.issuing-org-placeholder': 'Entrez l\'organisation émettrice',
            'certificates.issue-date': 'Date d\'Émission',
            'certificates.cert-file': 'Fichier du Certificat',
            'certificates.description': 'Description',
            'certificates.description-placeholder': 'Brève description du certificat',
            'certificates.save-cert': 'Sauvegarder Certificat',
            'common.cancel': 'Annuler'
        };

        // Afaan Oromoo translations
        this.translations.om = {
            // Navigation
            'nav.home': 'Mana',
            'nav.service': 'Tajaajila',
            'nav.about': 'Waa\'ee',
            'nav.certificates': 'Ragaalee',
            'nav.portfolio': 'Hojii Koo',
            'nav.testimonials': 'Dhugaa Baasuu',
            'nav.blog': 'Barreeffama',
            'nav.contact': 'Qunnamtii',
            
            // Home section
            'home.title': 'Ogeessa Saayinsii Daataa',
            'home.name': 'Segni Girma',
            'home.subtitle': 'Daataa gara Hubannoo Hojiirra Ooluu Jijjiiruu',
            'home.ml': 'Barumsa Maashinii',
            'home.analysis': 'Xiinxala Daataa',
            'home.ai': 'Furmaata AI',
            'home.view-projects': 'Pirojektoota Ilaali',
            'home.download-cv': 'CV Buufadhu',
            
            // Expertise section
            'expertise.title': 'Ogummaa Koo',
            'expertise.subtitle': 'Tajaajila Dijitaalaa Bal\'aa Dhiyeessuu',
            'expertise.competitive': 'Programmer Dorgommii',
            'expertise.competitive-desc': 'Programming dorgommii karaa nama nama of qoruu fi dandeettii koodii fooyyessuu dha.',
            'expertise.data-science': 'Saayinsii Daataa',
            'expertise.data-science-desc': 'Saayinsii daataa istaatiistiksii, saayinsii kompiitaraa fi beekumsa naannoo walitti makuun hubannoo daataa keessaa baasuu dha.',
            'expertise.python': 'Misooma Python',
            'expertise.python-desc': 'Misoomaan Python aplikeeshiniiwwan weeb gama server, scripting fi xiinxala daataa Python fayyadamuun barreessuu irratti adda.',
            'common.read-more': 'Dabalata Dubbisi',
            
            // Skills section
            'skills.title': 'Dandeettii Koo',
            'skills.subtitle': 'Muuxannoo Dijitaalaa Bareedaa fi Addaa',
            'skills.description': '⏱️ Programmer Dorgommii: Qormaata algorithm koodii fooyya\'een yeroo murtaa\'e keessatti furuu<br>📊 Saayinsii Daataa: Xiinxala istaatiistiksii fi barumsa maashinii fayyadamuun hubannoo baasuu<br>🐍 Misooma Python: Django, Flask, Pandas fi NumPy fayyadamuun aplikeeshiniiwwan/automation ijaaruu<br>🌐 Dandeettii Guutuu: Gahumsa koodii, cimina xiinxalaa fi misooma sooftiweerii makuu',
            
            // Portfolio section
            'portfolio.title': 'Hojii Kalaqaa',
            'portfolio.subtitle': 'Portfolio Koo Ilaali',
            'portfolio.all': 'Hunda',
            'portfolio.ml': 'Barumsa Maashinii',
            'portfolio.viz': 'Mul\'isa Daataa',
            'portfolio.analysis': 'Xiinxala Daataa',
            'portfolio.nlp': 'NLP',
            
            // Contact section
            'contact.title': 'Qunnamtii Uumuu',
            'contact.subtitle': 'Gaaffii Qabdaa? Bilisa ta\'ii Qunnamaa',
            'contact.name': 'Maqaa',
            'contact.email': 'Imeelii',
            'contact.mobile': 'Bilbila',
            'contact.message': 'Ergaa',
            'contact.submit': 'Ergi',
            
            // Certificates section
            'certificates.title': 'Ol\'aanummaa Barnoota',
            'certificates.subtitle': 'Ragaalee fi Imala Barnoota',
            'certificates.description': 'Karaa barnoota itti fufiinsaa fi ragaalee ogummaa saayinsii daataa fi teeknooloojii keessatti argaman agarsiisuu',
            'certificates.timeline-title': 'Seera Yeroo Barnoota',
            'certificates.degree-title': 'Digirii Jalqabaa Saayinsii Kompiitaraa',
            'certificates.university': 'Yunivarsiitii Saayinsii fi Teeknooloojii Adaamaa',
            'certificates.degree-desc': 'Saayinsii Daataa, Barumsa Maashinii fi Misooma Sooftiweerii irratti xiyyeeffachuun Python programming fi xiinxala istaatiistiksii irratti hundaa\'e.',
            'certificates.certification-title': 'Ragaalee Ogummaa',
            'certificates.cert-desc': 'Guddina ogummaa itti fufiinsa ragaalee industirii beekamoo fi sagantaalee leenjii addaa ta\'aniin.',
            'certificates.gallery-title': 'Galarii Ragaalee',
            'certificates.view-cert': 'Ragaa Ilaali',
            'certificates.cert1-title': 'Addaan Baasuu Saayinsii Daataa',
            'certificates.cert1-issuer': 'Coursera - Yunivarsiitii Johns Hopkins',
            'certificates.cert2-title': 'Koorsii Barumsa Maashinii',
            'certificates.cert2-issuer': 'Yunivarsiitii Stanford - Andrew Ng',
            'certificates.cert3-title': 'Python Saayinsii Daataaf',
            'certificates.cert3-issuer': 'IBM - Cognitive Class',
            'certificates.cert4-title': 'Addaan Baasuu Barumsa Gadi Fagoo',
            'certificates.cert4-issuer': 'deeplearning.ai',
            'certificates.add-cert': 'Ragaa Haaraa Dabaluu',
            'certificates.achievements-title': 'Milkaa\'inoota Barnoota',
            'certificates.gpa': 'GPA Waliigalaa',
            'certificates.certifications': 'Ragaalee',
            'certificates.projects': 'Pirojektoota Xumuraman',
            'certificates.honors': 'Ulfina Barnoota',
            'certificates.cert-details': 'Bal\'ina Ragaa:',
            'certificates.cert1-detail1': 'Addaan baasuu koorsii 10 saayinsii daataa keessatti xumure',
            'certificates.cert1-detail2': 'Programming R, xiinxala istaatiistiksii fi barumsa maashinii irratti ogummaa argatte',
            'certificates.cert1-detail3': 'Pirojektii xumuraa: Moodeelii tilmaama daldalaa xiinxalaaf',
            'certificates.completion-date': 'Guyyaa Xumuraa:',
            'certificates.credential-id': 'Eenyummaa Ragaa:',
            'certificates.upload-title': 'Ragaa Haaraa Dabaluu',
            'certificates.cert-name': 'Maqaa Ragaa',
            'certificates.cert-name-placeholder': 'Maqaa ragaa galchi',
            'certificates.issuing-org': 'Dhaabbata Kennu',
            'certificates.issuing-org-placeholder': 'Dhaabbata kennu galchi',
            'certificates.issue-date': 'Guyyaa Kennuu',
            'certificates.cert-file': 'Faayilii Ragaa',
            'certificates.description': 'Ibsa',
            'certificates.description-placeholder': 'Ibsa gabaabaa ragaa',
            'certificates.save-cert': 'Ragaa Olkaa\'i',
            'common.cancel': 'Dhiisi'
        };

        // Amharic translations
        this.translations.am = {
            // Navigation
            'nav.home': 'ቤት',
            'nav.service': 'አገልግሎት',
            'nav.about': 'ስለኔ',
            'nav.certificates': 'ሰርተፊኬቶች',
            'nav.portfolio': 'ስራዎች',
            'nav.testimonials': 'ምስክርነቾች',
            'nav.blog': 'ብሎግ',
            'nav.contact': 'ግንኙነት',
            
            // Home section
            'home.title': 'የዳታ ሳይንስ ስፔሻሊስት',
            'home.name': 'ሰኝ ግርማ',
            'home.subtitle': 'ዳታን ወደ ተግባራዊ ግንዛቤ መቀየር',
            'home.ml': 'ማሽን ለርኒንግ',
            'home.analysis': 'የዳታ ትንተና',
            'home.ai': 'የAI መፍትሄዎች',
            'home.view-projects': 'ፕሮጀክቶችን ይመልከቱ',
            'home.download-cv': 'CV አውርድ',
            
            // Expertise section
            'expertise.title': 'የእኔ ልምድ',
            'expertise.subtitle': 'ሰፊ የዲጂታል አገልግሎቶች መስጠት',
            'expertise.competitive': 'ተወዳዳሪ ፕሮግራመር',
            'expertise.competitive-desc': 'ተወዳዳሪ ፕሮግራሚንግ ራስን ለመሞከር እና የኮዲንግ ክህሎትን ለማሻሻል አስደሳች መንገድ ነው።',
            'expertise.data-science': 'የዳታ ሳይንስ',
            'expertise.data-science-desc': 'የዳታ ሳይንስ ስታቲስቲክስ፣ የኮምፒውተር ሳይንስ እና የመስክ እውቀትን በማጣመር ከዳታ ግንዛቤ ለማውጣት ነው።',
            'expertise.python': 'የPython ዲቨሎፐር',
            'expertise.python-desc': 'የPython ዲቨሎፐር በሰርቨር ጎን ዌብ አፕሊኬሽኖች፣ ስክሪፕቲንግ እና የዳታ ትንተና ላይ ያተኮረ ነው።',
            'common.read-more': 'ተጨማሪ አንብብ',
            
            // Skills section
            'skills.title': 'የእኔ ክህሎቶች',
            'skills.subtitle': 'ቆንጆ እና ልዩ የዲጂታል ልምዶች',
            'skills.description': '⏱️ ተወዳዳሪ ፕሮግራመር: በተወሰነ ጊዜ ውስጥ የተመቻቸ ኮድ በመጠቀም የአልጎሪዝም ፈተናዎችን መፍታት<br>📊 የዳታ ሳይንስ: የስታቲስቲካል ትንተና እና ማሽን ለርኒንግ በመጠቀም ግንዛቤዎችን ማውጣት<br>🐍 የPython ዲቨሎፐር: Django፣ Flask፣ Pandas እና NumPy በመጠቀም አፕሊኬሽኖች/ኦቶሜሽን መገንባት<br>🌐 አጠቃላይ ክህሎቶች: የኮድ ቅልጥፍና፣ የትንተና ጥብቅነት እና የሶፍትዌር ልማት ማዋሃድ',
            
            // Portfolio section
            'portfolio.title': 'ፈጠራ ስራ',
            'portfolio.subtitle': 'የእኔን ፖርትፎሊዮ ይመልከቱ',
            'portfolio.all': 'ሁሉም',
            'portfolio.ml': 'ማሽን ለርኒንግ',
            'portfolio.viz': 'የዳታ ቪዥዋላይዜሽን',
            'portfolio.analysis': 'የዳታ ትንተና',
            'portfolio.nlp': 'NLP',
            
            // Contact section
            'contact.title': 'ግንኙነት ይፍጠሩ',
            'contact.subtitle': 'ጥያቄዎች አሉዎት? በነፃነት ያግኙን',
            'contact.name': 'ስም',
            'contact.email': 'ኢሜይል',
            'contact.mobile': 'ስልክ ቁጥር',
            'contact.message': 'መልእክት',
            'contact.submit': 'ላክ',
            
            // Certificates section
            'certificates.title': 'የአካዳሚክ ብቃት',
            'certificates.subtitle': 'ሰርተፊኬቶች እና የትምህርት ጉዞ',
            'certificates.description': 'በዳታ ሳይንስ እና ቴክኖሎጂ ውስጥ ያለኝን ቀጣይ የመማር መንገድ እና ሙያዊ ሰርተፊኬቶች ማሳየት',
            'certificates.timeline-title': 'የትምህርት ጊዜ መስመር',
            'certificates.degree-title': 'በኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ',
            'certificates.university': 'አዳማ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ',
            'certificates.degree-desc': 'በዳታ ሳይንስ፣ ማሽን ለርኒንግ እና ሶፍትዌር ልማት ላይ በማተኮር በፓይቶን ፕሮግራሚንግ እና ስታቲስቲካል ትንተና ላይ ያተኮረ።',
            'certificates.certification-title': 'ሙያዊ ሰርተፊኬቶች',
            'certificates.cert-desc': 'በኢንዱስትሪ የተመሰከሩ ሰርተፊኬቶች እና ልዩ የስልጠና ፕሮግራሞች በኩል ቀጣይ ሙያዊ እድገት።',
            'certificates.gallery-title': 'የሰርተፊኬት ጋለሪ',
            'certificates.view-cert': 'ሰርተፊኬት ይመልከቱ',
            'certificates.cert1-title': 'የዳታ ሳይንስ ስፔሻላይዜሽን',
            'certificates.cert1-issuer': 'ኮርሴራ - ጆንስ ሆፕኪንስ ዩኒቨርሲቲ',
            'certificates.cert2-title': 'የማሽን ለርኒንግ ኮርስ',
            'certificates.cert2-issuer': 'ስታንፎርድ ዩኒቨርሲቲ - አንድሪው ንግ',
            'certificates.cert3-title': 'ፓይቶን ለዳታ ሳይንስ',
            'certificates.cert3-issuer': 'አይቢኤም - ኮግኒቲቭ ክላስ',
            'certificates.cert4-title': 'የዲፕ ለርኒንግ ስፔሻላይዜሽን',
            'certificates.cert4-issuer': 'deeplearning.ai',
            'certificates.add-cert': 'አዲስ ሰርተፊኬት ጨምር',
            'certificates.achievements-title': 'የአካዳሚክ ስኬቶች',
            'certificates.gpa': 'አጠቃላይ ጂፒኤ',
            'certificates.certifications': 'ሰርተፊኬቶች',
            'certificates.projects': 'የተጠናቀቁ ፕሮጀክቶች',
            'certificates.honors': 'የአካዳሚክ ክብሮች',
            'certificates.cert-details': 'የሰርተፊኬት ዝርዝሮች:',
            'certificates.cert1-detail1': '10 ኮርሶችን የዳታ ሳይንስ ስፔሻላይዜሽን አጠናቀቀ',
            'certificates.cert1-detail2': 'የR ፕሮግራሚንግ፣ ስታቲስቲካል ኢንፈረንስ እና ማሽን ለርኒንግ ተቆጣጠረ',
            'certificates.cert1-detail3': 'የካፕስቶን ፕሮጀክት: ለቢዝነስ አናሊቲክስ ፕሪዲክቲቭ ሞዴሊንግ',
            'certificates.completion-date': 'የማጠናቀቂያ ቀን:',
            'certificates.credential-id': 'የምስክር ወረቀት መለያ:',
            'certificates.upload-title': 'አዲስ ሰርተፊኬት ጨምር',
            'certificates.cert-name': 'የሰርተፊኬት ስም',
            'certificates.cert-name-placeholder': 'የሰርተፊኬት ስም ያስገቡ',
            'certificates.issuing-org': 'አውጪ ድርጅት',
            'certificates.issuing-org-placeholder': 'አውጪ ድርጅት ያስገቡ',
            'certificates.issue-date': 'የመውጣት ቀን',
            'certificates.cert-file': 'የሰርተፊኬት ፋይል',
            'certificates.description': 'መግለጫ',
            'certificates.description-placeholder': 'የሰርተፊኬቱ አጭር መግለጫ',
            'certificates.save-cert': 'ሰርተፊኬት አስቀምጥ',
            'common.cancel': 'ሰርዝ'
        };
    }

    createLanguageSelector() {
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        langSelector.innerHTML = `
            <select id="language-select" class="form-select">
                <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                <option value="es" ${this.currentLang === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
                <option value="fr" ${this.currentLang === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
            </select>
        `;
        
        // Insert before theme toggle in navbar
        const navbar = document.querySelector('.navbar .container-fluid');
        const themeToggle = document.getElementById('theme-toggle');
        navbar.insertBefore(langSelector, themeToggle);
    }

    bindEvents() {
        document.addEventListener('change', (e) => {
            if (e.target.id === 'language-select') {
                this.currentLang = e.target.value;
                localStorage.setItem('language', this.currentLang);
                this.applyTranslations();
            }
        });
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLang][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});