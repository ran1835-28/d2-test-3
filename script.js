// SAFE TAILWIND CONFIGURATION SETUP
window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cinzel', 'Georgia', 'serif'],
                amiri: ['Amiri', 'serif'],
                scheherazade: ['Scheherazade New', 'serif'],
                ruqaa: ['Aref Ruqaa', 'serif'],
            },
            colors: {
                brand: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#10b981',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                amberGold: '#d97706',
            }
        }
    }
};

// TRANSLATION DICTIONARY (FULLY LOCALIZED INCLUDING MODALS & FOOTER)
const translations = {
    en: {
        headerTitle: "Al-Hikmah Journal",
        headerBadge: "Wisdom & Heritage",
        headerSub: "Islamic Inscriptions, Prophetic Traditions & Golden Age Discoveries",
        streakDays: "Day Streak",
        btnArch3Layer: "3-Layer Arch",
        btnSavedMs: "Saved",
        btnSessionLedger: "Ledger",
        
        lblDomainFocus: "Knowledge Domain Focus:",
        optAll: "📖 All Knowledge Traditions",
        optQuran: "📖 Noble Quran (Revelation)",
        optHadith: "📜 Prophetic Sunnah (Hadith)",
        optWisdom: "🧘 Classical Scholars & Ethics",
        optScience: "🔬 Golden Age Science & History",
        
        lblCalligraphyScript: "Arabic Calligraphy Style:",
        optScriptAmiri: "Amiri (Naskh Classical)",
        optScriptScheherazade: "Scheherazade (Thuluth Regal)",
        optScriptRuqaa: "Aref Ruqaa (Expressive Hand)",
        btnRetrievePair: "Retrieve Knowledge Pair",
        lblEraScrub: "Chronological Timeline Scrub:",
        selectedEraLabelAll: "All Historical Eras",
        eraAll: "All Eras",
        era7th: "7th C. (Revelation)",
        era9th: "9th C. (Baghdad Wisdom)",
        era10th: "10th C. (Golden Age)",
        era11th: "11th-12th C. (Andalusia & Persia)",
        
        lblSpiritual: "Spiritual Inscription:",
        lblEmpirical: "Empirical Finding:",
        lblHarmoniousSynth: "Harmonious Synthesis",
        
        badgeSacredText: "Sacred Text / Inscription",
        badgeHistoricalObs: "Historical & Empirical Observation",
        lblPrimarySource: "Primary Source & Attributed Narrator:",
        lblCitedSource: "Cited Historical / Academic Source:",
        btnChainIsnad: "Chain (Isnad)",
        badgePeerVerified: "Peer-Verified",
        btnSaveInscription: "Save Inscription",
        btnSaveObservation: "Save Observation",
        btnSavedItem: "Saved",
        
        titleSynthesis: "Synthesis & Philosophical Reflection Prompt",
        badgeTafakkur: "Contemplation Engine (Tafakkur)",
        btnCopyPrompt: "Copy Reflection Prompt",
        btnNewSynthesis: "New Synthesis Question",
        btnQuizMode: "Take Knowledge Quiz",

        quizTitle: "Islamic Wisdom & Science Quiz",
        quizSubtitle: "Test your understanding of classical inscriptions, scientific breakthroughs, and historical chains.",
        quizQuestionCount: "Question",
        quizOf: "of",
        quizScore: "Score",
        quizNext: "Next Question",
        quizRestart: "Restart Quiz",
        quizResultsTitle: "Quiz Completed!",
        quizYourScore: "Your Final Score:",
        quizPerfectScore: "MashaAllah! Outstanding mastery of Islamic heritage and science!",
        quizGoodScore: "Great job! Strong knowledge of historical traditions.",
        quizKeepLearning: "Good effort! Keep exploring the Al-Hikmah manuscript ledger.",

        savedTitle: "Saved Manuscripts & Observations",
        savedSubtitle: "Your personal library of bookmarked inscriptions, scientific records, and citations.",
        savedEmpty: "No saved manuscripts yet. Click save on any card to store items here.",
        btnExportCsv: "Export CSV",
        btnExportJson: "Export JSON",
        btnClearAllSaved: "Clear All",
        badgeTypeInscription: "Inscription",
        badgeTypeObservation: "Observation",
        btnDelete: "Remove",

        auditTitle: "Session Audit Ledger & Telemetry",
        auditSubtitle: "Real-time system logging, architectural telemetry, and integrity hashes (MGIS130 Compliance).",
        lblTotalRetrieved: "Total Retrieved",
        lblTotalSaved: "Total Saved",
        lblActiveTheme: "Active Mode",
        lblSystemStatus: "System Status",
        statusHealthy: "Healthy",
        thTimestamp: "Timestamp",
        thAction: "Action / Event",
        thDomain: "Domain",
        thDetail: "Details",
        thProofHash: "Hash",
        auditEmpty: "No session logs generated yet.",
        btnClearLogs: "Clear Logs",
        btnPrintLedger: "Print Report",

        archTitle: "3-Layer Software Architecture Specification",
        archSubtitle: "MGIS130 Enterprise Architecture mapping: User Interface, Business Processing, and Data Access Layers.",
        archLayer1: "Layer 1: User Interface (UI)",
        archLayer1Desc: "Tailwind CSS, Responsive Canvas, Dynamic Themes, Web Speech TTS Synthesis, i18n Localization.",
        archLayer2: "Layer 2: Business Logic & Processing",
        archLayer2Desc: "Equilibrium Engine (Spiritual vs Empirical balance), Contemplation Generator, Isnad Network Graph, Era Chronology Filtering.",
        archLayer3: "Layer 3: Data Access & Persistence",
        archLayer3Desc: "Structured Inscriptions & History DB, Session Ledger Audit Hash Verification, Local Favorites Persistence Engine.",
        btnClose: "Close",

        isnadTitle: "Chain of Transmission (Isnad)",
        isnadSubtitle: "Visualizing biographical evaluation (Ilm al-Rijal) and transmission lineage.",
        isnadStep1Title: "Compiling Scholar (Imam Bukhari / Muslim)",
        isnadStep1Sub: "Authenticated Transmission Node",
        isnadStep2Title: "Primary Transmitter Node (Thiqah / Trustworthy)",
        isnadStep2Sub: "Biographical Grade: High Reliability",
        isnadStep3Title: "Companion Narrator (Sahabi)",
        isnadStep3Sub: "Direct Source Lineage",
        isnadAuthenticity: "Authenticity Grade:",
        isnadGradeSahih: "Sahih (Rigorously Verified)",

        footerCopyright: "© Al-Hikmah Digital Humanities Research Initiative. MGIS130 Compliant Architecture.",
        footerSystemStatus: "System Status:",
        footerActiveSynced: "● Active & Synced",

        toastNewPrompt: "New synthesis question generated!",
        toastCopiedPrompt: "Reflection prompt copied to clipboard!",
        toastCopiedText: "Text & citation copied to clipboard!",
        toastSaved: "Item saved to your Manuscripts Library!",
        toastRemoved: "Item removed from Saved Manuscripts.",
        toastLogsCleared: "Session audit ledger cleared.",
        toastAudioError: "Speech synthesis error or unsupported browser voice."
    },
    ar: {
        headerTitle: "مجلة الحكمة",
        headerBadge: "الحكمة والتراث",
        headerSub: "النقوش الإسلامية، السنة النبوية، والاكتشافات العلمية في العصر الذهبي",
        streakDays: "أيام متتالية",
        btnArch3Layer: "معمارية النظام",
        btnSavedMs: "المحفوظات",
        btnSessionLedger: "سجل الجلسة",
        
        lblDomainFocus: "المجال المعرفي:",
        optAll: "📖 جميع العلوم والمعارف",
        optQuran: "📖 القرآن الكريم (الوحي)",
        optHadith: "📜 السنة النبوية الشريفة",
        optWisdom: "🧘 علم الأخلاق والحكمة الكلاسيكية",
        optScience: "🔬 علوم التاريخ والفيزياء والفلك",
        
        lblCalligraphyScript: "الخط العربي:",
        optScriptAmiri: "النسخ (الخط الأميري الكلاسيكي)",
        optScriptScheherazade: "الثلث (شهرزاد)",
        optScriptRuqaa: "الرقعة (عارف رقعة)",
        btnRetrievePair: "استرجاع زوج معرفي",
        lblEraScrub: "التصفح الزمني والعصور:",
        selectedEraLabelAll: "جميع العصور التاريخية",
        eraAll: "جميع العصور",
        era7th: "القرن ٧ (عصر النبوة والوحي)",
        era9th: "القرن ٩ (بيت الحكمة بغداد)",
        era10th: "القرن ١٠ (العصر الذهبي)",
        era11th: "القرن ١١-١٢ (الأندلس وفارس)",
        
        lblSpiritual: "النقش المقدس:",
        lblEmpirical: "الملاحظة العلمية:",
        lblHarmoniousSynth: "تركيب متوازن ومشهود",
        
        badgeSacredText: "نص مقدس / نقش شريف",
        badgeHistoricalObs: "ملاحظة تاريخية وعلمية تجريبية",
        lblPrimarySource: "المصدر الأصلي والراوي المسند:",
        lblCitedSource: "المصدر الأكاديمي والتاريخي الموثق:",
        btnChainIsnad: "سلسلة الإسناد",
        badgePeerVerified: "مُحقق ومراجع",
        btnSaveInscription: "حفظ النقش",
        btnSaveObservation: "حفظ الملاحظة",
        btnSavedItem: "تم الحفظ",
        
        titleSynthesis: "سؤال التأمل والتركيب الفلسفي",
        badgeTafakkur: "محرك التفكر والاعتبار",
        btnCopyPrompt: "نسخ سؤال التفكر",
        btnNewSynthesis: "توليد سؤال تفكر جديد",
        btnQuizMode: "اختبار المعرفة التفاعلي",

        quizTitle: "اختبار العلوم والحكمة الإسلامية",
        quizSubtitle: "اختبر معرفتك بالنقوش الكلاسيكية، الاكتشافات العلمية، وسلاسل الرواية التاريخية.",
        quizQuestionCount: "السؤال",
        quizOf: "من",
        quizScore: "النتيجة",
        quizNext: "السؤال التالي",
        quizRestart: "إعادة الاختبار",
        quizResultsTitle: "اكتمل الاختبار!",
        quizYourScore: "نتيجتك النهائية:",
        quizPerfectScore: "ما شاء الله! إتقان متميز للتراث والحضارة الإسلامية!",
        quizGoodScore: "عمل ممتاز! معرفة قوية بالتاريخ والعلوم.",
        quizKeepLearning: "جهد طيب! واصل استكشاف مخطوطات مجلة الحكمة.",

        savedTitle: "المخطوطات والملاحظات المحفوظة",
        savedSubtitle: "مكتبتك الخاصة للنصوص المحفوظة، السجلات العلمية، والمراجع التاريخية.",
        savedEmpty: "لا توجد مخطوطات محفوظة حتى الآن. انقر على أيقونة الإشارة المرجعية للحفظ.",
        btnExportCsv: "تصدير CSV",
        btnExportJson: "تصدير JSON",
        btnClearAllSaved: "مسح الكل",
        badgeTypeInscription: "نقش مقدس",
        badgeTypeObservation: "ملاحظة علمية",
        btnDelete: "حذف",

        auditTitle: "سجل تدقيق الجلسة وقياس النظام",
        auditSubtitle: "تسجيل العمليات، التدقيق الهيكلي، والتشفير البرمجي (معيار MGIS130).",
        lblTotalRetrieved: "إجمالي الاسترجاعات",
        lblTotalSaved: "إجمالي المحفوظات",
        lblActiveTheme: "الطراز النشط",
        lblSystemStatus: "حالة النظام",
        statusHealthy: "سليم ونشط",
        thTimestamp: "الرمز الزمني",
        thAction: "الحدث / العملية",
        thDomain: "المجال المعرفي",
        thDetail: "تفاصيل العملية",
        thProofHash: "تشفير الإثبات",
        auditEmpty: "لم يتم إنشاء سجلات تدقيق في هذه الجلسة بعد.",
        btnClearLogs: "مسح سجل التدقيق",
        btnPrintLedger: "طباعة تقرير السجل",

        archTitle: "مواصفات المعمارية البرمجية ثلاثية الطبقات",
        archSubtitle: "تخطيط المعمارية المؤسسية: طبقة الواجهة، طبقة المعالجة، وطبقة البيانات.",
        archLayer1: "الطبقة الأولى: واجهة المستخدم (UI)",
        archLayer1Desc: "تصميم متجاوب، أنماط متغيرة، تحويل النص إلى صوت، ودعم اللغات متعددة.",
        archLayer2: "الطبقة الثانية: المنطق والمعالجة",
        archLayer2Desc: "محرك التوازن بين الروحاني والتجريبي، مولد سؤال التفكر، شبكة الإسناد، والتصفية الزمنية.",
        archLayer3: "الطبقة الثالثة: الوصول إلى البيانات والتخزين",
        archLayer3Desc: "قاعدة بيانات النقوش والسير، التحقق من السجل بدالة التشفير، ومحرك التخزين المحلي.",
        btnClose: "إغلاق",

        isnadTitle: "سلسلة الإسناد والتحليل الراوي",
        isnadSubtitle: "توضيح علم الرجال وتقييم درجات التوثيق والاتصال.",
        isnadStep1Title: "الإمام الجامع (البخاري / مسلم)",
        isnadStep1Sub: "عقدة التوثيق والجمع الرسمية",
        isnadStep2Title: "الراوي الرئيسي (ثقة / عدل ضبط)",
        isnadStep2Sub: "الدرجة الجرح والتعديل: عالية الموثوقية",
        isnadStep3Title: "الراوي الصحابي",
        isnadStep3Sub: "مصدر التلقي المباشر",
        isnadAuthenticity: "درجة الصحة:",
        isnadGradeSahih: "صحيح (مُحقق ومتصل الإسناد)",

        footerCopyright: "© مبادرة بحوث العلوم الرقمية في مجلة الحكمة. معمارية متوافقة مع MGIS130.",
        footerSystemStatus: "حالة النظام:",
        footerActiveSynced: "● نشط ومتزامن",

        toastNewPrompt: "تم توليد سؤال تفكر جديد!",
        toastCopiedPrompt: "تم نسخ سؤال التفكر إلى الحافظة!",
        toastCopiedText: "تم نسخ النص والمصدر إلى الحافظة!",
        toastSaved: "تم حفظ العنصر إلى مكتبة المخطوطات!",
        toastRemoved: "تم إزالة العنصر من المخطوطات المحفوظة.",
        toastLogsCleared: "تم مسح سجل تدقيق الجلسة.",
        toastAudioError: "خطأ في قراءة الصوت أو المتصفح لا يدعم هذا الصوت."
    },
    es: {
        headerTitle: "Revista Al-Hikmah",
        headerBadge: "Sabiduría y Patrimonio",
        headerSub: "Inscripciones Islámicas, Tradiciones Proféticas y Descubrimientos de la Edad de Oro",
        streakDays: "Días Seguidos",
        btnArch3Layer: "Arq. 3 Capas",
        btnSavedMs: "Guardados",
        btnSessionLedger: "Libro Mayor",
        
        lblDomainFocus: "Enfoque del Dominio del Conocimiento:",
        optAll: "📖 Todas las Tradiciones del Conocimiento",
        optQuran: "📖 Noble Corán (Revelación)",
        optHadith: "📜 Sunnah Profética (Hadiz)",
        optWisdom: "🧘 Ética y Sabios Clásicos",
        optScience: "🔬 Ciencia e Historia de la Edad de Oro",
        
        lblCalligraphyScript: "Estilo de Caligrafía Árabe:",
        optScriptAmiri: "Amiri (Naskh Clásico)",
        optScriptScheherazade: "Scheherazade (Thuluth Regal)",
        optScriptRuqaa: "Aref Ruqaa (Mano Expresiva)",
        btnRetrievePair: "Obtener Par de Conocimiento",
        lblEraScrub: "Línea de Tiempo Cronológica:",
        selectedEraLabelAll: "Todas las Eras Históricas",
        eraAll: "Todas las Eras",
        era7th: "Siglo VII (Revelación)",
        era9th: "Siglo IX (Sabiduría de Bagdad)",
        era10th: "Siglo X (Edad de Oro)",
        era11th: "Siglos XI-XII (Andalucía y Persia)",
        
        lblSpiritual: "Inscripción Espiritual:",
        lblEmpirical: "Hallazgo Empírico:",
        lblHarmoniousSynth: "Síntesis Armónica",
        
        badgeSacredText: "Texto Sagrado / Inscripción",
        badgeHistoricalObs: "Observación Histórica y Empírica",
        lblPrimarySource: "Fuente Primaria y Narrador Atribuido:",
        lblCitedSource: "Fuente Histórica / Académica Citada:",
        btnChainIsnad: "Cadena (Isnad)",
        badgePeerVerified: "Verificado por Pares",
        btnSaveInscription: "Guardar Inscripción",
        btnSaveObservation: "Guardar Observación",
        btnSavedItem: "Guardado",
        
        titleSynthesis: "Pregunta de Reflexión Filosófica y Síntesis",
        badgeTafakkur: "Motor de Contemplación (Tafakkur)",
        btnCopyPrompt: "Copiar Pregunta de Reflexión",
        btnNewSynthesis: "Nueva Pregunta de Síntesis",
        btnQuizMode: "Hacer Cuestionario de Conocimiento",

        quizTitle: "Cuestionario de Sabiduría y Ciencia Islámica",
        quizSubtitle: "Pon a prueba tu comprensión de inscripciones clásicas, avances científicos y cadenas históricas.",
        quizQuestionCount: "Pregunta",
        quizOf: "de",
        quizScore: "Puntuación",
        quizNext: "Siguiente Pregunta",
        quizRestart: "Reiniciar Cuestionario",
        quizResultsTitle: "¡Cuestionario Completado!",
        quizYourScore: "Tu Puntuación Final:",
        quizPerfectScore: "¡MashaAllah! ¡Excelente dominio del patrimonio y la ciencia islámica!",
        quizGoodScore: "¡Gran trabajo! Buen conocimiento de las tradiciones históricas.",
        quizKeepLearning: "¡Buen esfuerzo! Sigue explorando el registro de manuscritos de Al-Hikmah.",

        savedTitle: "Manuscritos y Observaciones Guardados",
        savedSubtitle: "Tu biblioteca personal de inscripciones marcadas, registros científicos y citas.",
        savedEmpty: "Aún no hay manuscritos guardados. Haz clic en guardar en cualquier tarjeta.",
        btnExportCsv: "Exportar CSV",
        btnExportJson: "Exportar JSON",
        btnClearAllSaved: "Borrar Todo",
        badgeTypeInscription: "Inscripción",
        badgeTypeObservation: "Observación",
        btnDelete: "Eliminar",

        auditTitle: "Libro Mayor de Auditoría y Telemetría de la Sesión",
        auditSubtitle: "Registro del sistema en tiempo real, telemetría arquitectónica y hashes de integridad (Cumplimiento MGIS130).",
        lblTotalRetrieved: "Total Recuperado",
        lblTotalSaved: "Total Guardado",
        lblActiveTheme: "Modo Activo",
        lblSystemStatus: "Estado del Sistema",
        statusHealthy: "Saludable",
        thTimestamp: "Marca de Tiempo",
        thAction: "Acción / Evento",
        thDomain: "Dominio",
        thDetail: "Detalles",
        thProofHash: "Hash",
        auditEmpty: "Aún no se han generado registros de sesión.",
        btnClearLogs: "Borrar Registros",
        btnPrintLedger: "Imprimir Informe",

        archTitle: "Especificación de Arquitectura de Software de 3 Capas",
        archSubtitle: "Mapeo de arquitectura empresarial MGIS130: Interfaz de Usuario, Procesamiento de Negocio y Acceso a Datos.",
        archLayer1: "Capa 1: Interfaz de Usuario (UI)",
        archLayer1Desc: "Tailwind CSS, Lienzo Responsivo, Temas Dinámicos, Síntesis de Voz Web TTS, Localización i18n.",
        archLayer2: "Capa 2: Lógica de Negocio y Procesamiento",
        archLayer2Desc: "Motor de Equilibrio (Balance Espiritual vs Empírico), Generador de Contemplación, Grafo de Red Isnad, Filtro Cronológico de Eras.",
        archLayer3: "Capa 3: Acceso a Datos y Persistencia",
        archLayer3Desc: "Base de Datos Estructurada de Inscripciones e Historia, Verificación de Hash de Auditoría, Motor de Persistencia Local.",
        btnClose: "Cerrar",

        isnadTitle: "Cadena de Transmisión (Isnad)",
        isnadSubtitle: "Visualización de la evaluación biográfica (Ilm al-Rijal) y el linaje de transmisión.",
        isnadStep1Title: "Sabio Compilador (Imam Bukhari / Muslim)",
        isnadStep1Sub: "Nodo de Transmisión Autenticado",
        isnadStep2Title: "Nodo Transmisor Principal (Thiqah / Confiable)",
        isnadStep2Sub: "Grado Biográfico: Alta Confiabilidad",
        isnadStep3Title: "Narrador Compañero (Sahabi)",
        isnadStep3Sub: "Linaje de Fuente Directa",
        isnadAuthenticity: "Grado de Autenticidad:",
        isnadGradeSahih: "Sahih (Rigurosamente Verificado)",

        footerCopyright: "© Iniciativa de Investigación en Humanidades Digitales Al-Hikmah. Arquitectura compatible con MGIS130.",
        footerSystemStatus: "Estado del Sistema:",
        footerActiveSynced: "● Activo y Sincronizado",

        toastNewPrompt: "¡Nueva pregunta de síntesis generada!",
        toastCopiedPrompt: "¡Pregunta de reflexión copiada al portapapeles!",
        toastCopiedText: "¡Texto y cita copiados al portapapeles!",
        toastSaved: "¡Elemento guardado en tu Biblioteca de Manuscritos!",
        toastRemoved: "Elemento eliminado de Manuscritos Guardados.",
        toastLogsCleared: "Libro mayor de auditoría borrado.",
        toastAudioError: "Error de síntesis de voz o navegador no compatible."
    },
    fr: {
        headerTitle: "Revue Al-Hikmah",
        headerBadge: "Sagesse & Patrimoine",
        headerSub: "Inscriptions Islamiques, Traditions Prophétiques & Découvertes de l'Âge d'Or",
        streakDays: "Jours Conécutifs",
        btnArch3Layer: "Arch. 3 Couches",
        btnSavedMs: "Enregistrés",
        btnSessionLedger: "Registre de Session",
        
        lblDomainFocus: "Domaine de Connaissance :",
        optAll: "📖 Toutes les Traditions de Connaissance",
        optQuran: "📖 Noble Coran (Révélation)",
        optHadith: "📜 Sunnah Prophétique (Hadith)",
        optWisdom: "🧘 Éthique & Savants Classiques",
        optScience: "🔬 Science & Histoire de l'Âge d'Or",
        
        lblCalligraphyScript: "Style de Calligraphie Arabe :",
        optScriptAmiri: "Amiri (Naskh Classique)",
        optScriptScheherazade: "Scheherazade (Thuluth Regale)",
        optScriptRuqaa: "Aref Ruqaa (Main Expressive)",
        btnRetrievePair: "Obtenir une Paire de Connaissances",
        lblEraScrub: "Frise Chronologique :",
        selectedEraLabelAll: "Toutes les Époques Historiques",
        eraAll: "Toutes les Époques",
        era7th: "VIIe S. (Révélation)",
        era9th: "IXe S. (Sagesse de Bagdad)",
        era10th: "Xe S. (Âge d'Or)",
        era11th: "XIe-XIIe S. (Andalousie & Perse)",
        
        lblSpiritual: "Inscription Spirituelle :",
        lblEmpirical: "Constat Empirique :",
        lblHarmoniousSynth: "Synthèse Harmonieuse",
        
        badgeSacredText: "Texte Sacré / Inscription",
        badgeHistoricalObs: "Observation Historique & Empirique",
        lblPrimarySource: "Source Primaire & Narrateur Attribué :",
        lblCitedSource: "Source Historique / Académique Citée :",
        btnChainIsnad: "Chaîne (Isnad)",
        badgePeerVerified: "Vérifié par des Pairs",
        btnSaveInscription: "Enregistrer l'Inscription",
        btnSaveObservation: "Enregistrer l'Observation",
        btnSavedItem: "Enregistré",
        
        titleSynthesis: "Sujet de Réflexion Philosophique & Synthèse",
        badgeTafakkur: "Moteur de Contemplation (Tafakkur)",
        btnCopyPrompt: "Copier le Sujet de Réflexion",
        btnNewSynthesis: "Nouveau Sujet de Synthèse",
        btnQuizMode: "Passer le Quiz de Connaissances",

        quizTitle: "Quiz sur la Sagesse & la Science Islamiques",
        quizSubtitle: "Testez vos connaissances sur les inscriptions classiques, les découvertes scientifiques et les chaînes historiques.",
        quizQuestionCount: "Question",
        quizOf: "sur",
        quizScore: "Score",
        quizNext: "Question Suivante",
        quizRestart: "Recommencer le Quiz",
        quizResultsTitle: "Quiz Terminé !",
        quizYourScore: "Votre Score Final :",
        quizPerfectScore: "MashaAllah ! Maîtrise exceptionnelle du patrimoine et de la science islamiques !",
        quizGoodScore: "Excellent travail ! Solides connaissances des traditions historiques.",
        quizKeepLearning: "Bon effort ! Continuez à explorer les manuscrits d'Al-Hikmah.",

        savedTitle: "Manuscrits & Observations Enregistrés",
        savedSubtitle: "Votre bibliothèque personnelle d'inscriptions, de données scientifiques et de citations.",
        savedEmpty: "Aucun manuscrit enregistré pour le moment. Cliquez sur enregistrer sur une carte.",
        btnExportCsv: "Exporter en CSV",
        btnExportJson: "Exporter en JSON",
        btnClearAllSaved: "Tout Effacer",
        badgeTypeInscription: "Inscription",
        badgeTypeObservation: "Observation",
        btnDelete: "Supprimer",

        auditTitle: "Registre d'Audit de Session & Télémétrie",
        auditSubtitle: "Journalisation en temps réel, télémétrie architecturale et hachages d'intégrité (Conformité MGIS130).",
        lblTotalRetrieved: "Total Récupéré",
        lblTotalSaved: "Total Enregistré",
        lblActiveTheme: "Mode Actif",
        lblSystemStatus: "État du Système",
        statusHealthy: "Opérationnel",
        thTimestamp: "Horodatage",
        thAction: "Action / Événement",
        thDomain: "Domaine",
        thDetail: "Détails",
        thProofHash: "Hachage",
        auditEmpty: "Aucun journal de session généré pour le moment.",
        btnClearLogs: "Effacer les Journaux",
        btnPrintLedger: "Imprimer le Rapport",

        archTitle: "Spécification de l'Architecture Logicielle à 3 Couches",
        archSubtitle: "Cartographie de l'architecture d'entreprise MGIS130 : Interface Utilisateur, Traitement Métier et Accès aux Données.",
        archLayer1: "Couche 1 : Interface Utilisateur (UI)",
        archLayer1Desc: "Tailwind CSS, Canvas Adaptatif, Thèmes Dynamiques, Synthèse Vocale Web TTS, Localisation i18n.",
        archLayer2: "Couche 2 : Logique Métier & Traitement",
        archLayer2Desc: "Moteur d'Équilibre (Balance Spirituelle vs Empirique), Générateur de Contemplation, Graphe de Réseau Isnad, Filtre Chronologique.",
        archLayer3: "Couche 3 : Accès aux Données & Persistance",
        archLayer3Desc: "Base de Données Structurée des Inscriptions, Vérification de Hachage d'Audit, Moteur de Persistance Locale.",
        btnClose: "Fermer",

        isnadTitle: "Chaîne de Transmission (Isnad)",
        isnadSubtitle: "Visualisation de l'évaluation biographique (Ilm al-Rijal) et de la lignée de transmission.",
        isnadStep1Title: "Savant Compilateur (Imam Bukhari / Muslim)",
        isnadStep1Sub: "Nœud de Transmission Authentifié",
        isnadStep2Title: "Nœud Transmetteur Principal (Thiqah / Digne de confiance)",
        isnadStep2Sub: "Grade Biographique : Haute Fiabilité",
        isnadStep3Title: "Compagnon Narrateur (Sahabi)",
        isnadStep3Sub: "Lignée de Source Directe",
        isnadAuthenticity: "Degré d'Authenticité :",
        isnadGradeSahih: "Sahih (Rigoureusement Vérifié)",

        footerCopyright: "© Initiative de recherche en humanités numériques Al-Hikmah. Architecture conforme MGIS130.",
        footerSystemStatus: "État du Système :",
        footerActiveSynced: "● Actif & Synchronisé",

        toastNewPrompt: "Nouveau sujet de réflexion généré !",
        toastCopiedPrompt: "Sujet de réflexion copié dans le presse-papiers !",
        toastCopiedText: "Texte et citation copiés dans le presse-papiers !",
        toastSaved: "Élément enregistré dans votre Bibliothèque de Manuscrits !",
        toastRemoved: "Élément retiré des Manuscrits Enregistrés.",
        toastLogsCleared: "Registre d'audit de session effacé.",
        toastAudioError: "Erreur de synthèse vocale ou navigateur non compatible."
    },
    de: {
        headerTitle: "Al-Hikmah Journal",
        headerBadge: "Weisheit & Kulturerbe",
        headerSub: "Islamische Inschriften, Prophetische Traditionen & Entdeckungen des Goldenen Zeitalters",
        streakDays: "Tage-Serie",
        btnArch3Layer: "3-Schichten Arch.",
        btnSavedMs: "Gespeichert",
        btnSessionLedger: "Sitzungsbuch",
        
        lblDomainFocus: "Wissensdomäne:",
        optAll: "📖 Alle Wissenstraditionen",
        optQuran: "📖 Edler Koran (Offenbarung)",
        optHadith: "📜 Prophetische Sunnah (Hadith)",
        optWisdom: "🧘 Klassische Gelehrte & Ethik",
        optScience: "🔬 Wissenschaft & Geschichte des Goldenen Zeitalters",
        
        lblCalligraphyScript: "Arabischer Kalligrafie-Stil:",
        optScriptAmiri: "Amiri (Klassisches Naskh)",
        optScriptScheherazade: "Scheherazade (Erhabenes Thuluth)",
        optScriptRuqaa: "Aref Ruqaa (Ausdrucksstarke Hand)",
        btnRetrievePair: "Wissenspaar abrufen",
        lblEraScrub: "Chronologische Zeitleiste:",
        selectedEraLabelAll: "Alle historischen Epochen",
        eraAll: "Alle Epochen",
        era7th: "7. Jh. (Offenbarung)",
        era9th: "9. Jh. (Weisheit aus Bagdad)",
        era10th: "10. Jh. (Goldenes Zeitalter)",
        era11th: "11.-12. Jh. (Andalusien & Persien)",
        
        lblSpiritual: "Spirituelle Inschrift:",
        lblEmpirical: "Empirischer Befund:",
        lblHarmoniousSynth: "Harmonische Synthese",
        
        badgeSacredText: "Heiliger Text / Inschrift",
        badgeHistoricalObs: "Historische & Empirische Beobachtung",
        lblPrimarySource: "Primärquelle & Zugeschriebener Erzähler:",
        lblCitedSource: "Zitierte Historische / Akademische Quelle:",
        btnChainIsnad: "Überlieferungskette (Isnad)",
        badgePeerVerified: "Peer-geprüft",
        btnSaveInscription: "Inschrift speichern",
        btnSaveObservation: "Beobachtung speichern",
        btnSavedItem: "Gespeichert",
        
        titleSynthesis: "Philosophische Reflexionsfrage & Synthese",
        badgeTafakkur: "Kontemplations-Engine (Tafakkur)",
        btnCopyPrompt: "Reflexionsfrage kopieren",
        btnNewSynthesis: "Neue Synthesefrage",
        btnQuizMode: "Wissens-Quiz starten",

        quizTitle: "Quiz zu islamischer Weisheit & Wissenschaft",
        quizSubtitle: "Testen Sie Ihr Wissen über klassische Inschriften, wissenschaftliche Durchbrüche und historische Überlieferungsketten.",
        quizQuestionCount: "Frage",
        quizOf: "von",
        quizScore: "Punktzahl",
        quizNext: "Nächste Frage",
        quizRestart: "Quiz neustarten",
        quizResultsTitle: "Quiz abgeschlossen!",
        quizYourScore: "Ihre Endpunktzahl:",
        quizPerfectScore: "MashaAllah! Herausragende Kenntnis des islamischen Kulturerbes und der Wissenschaft!",
        quizGoodScore: "Gute Arbeit! Starke Kenntnisse historischer Traditionen.",
        quizKeepLearning: "Guter Einsatz! Erkunden Sie weiter das Al-Hikmah Manuskript-Register.",

        savedTitle: "Gespeicherte Manuskripte & Beobachtungen",
        savedSubtitle: "Ihre persönliche Bibliothek mit gemerkten Inschriften, wissenschaftlichen Aufzeichnungen und Zitaten.",
        savedEmpty: "Noch keine Manuskripte gespeichert. Klicken Sie auf Speichern bei einer beliebigen Karte.",
        btnExportCsv: "CSV exportieren",
        btnExportJson: "JSON exportieren",
        btnClearAllSaved: "Alles löschen",
        badgeTypeInscription: "Inschrift",
        badgeTypeObservation: "Beobachtung",
        btnDelete: "Entfernen",

        auditTitle: "Sitzungs-Auditbuch & Telemetrie",
        auditSubtitle: "Echtzeit-Systemprotokollierung, architektonische Telemetrie und Integritäts-Hashes (MGIS130 Konformität).",
        lblTotalRetrieved: "Gesamt abgerufen",
        lblTotalSaved: "Gesamt gespeichert",
        lblActiveTheme: "Aktiver Modus",
        lblSystemStatus: "Systemstatus",
        statusHealthy: "Einwandfrei",
        thTimestamp: "Zeitstempel",
        thAction: "Aktion / Ereignis",
        thDomain: "Domäne",
        thDetail: "Details",
        thProofHash: "Hash",
        auditEmpty: "Noch keine Sitzungsprotokolle erstellt.",
        btnClearLogs: "Protokolle löschen",
        btnPrintLedger: "Bericht drucken",

        archTitle: "Spezifikation der 3-Schichten-Softwarearchitektur",
        archSubtitle: "MGIS130 Unternehmensarchitektur-Zuordnung: Benutzeroberfläche, Geschäftslogik und Datenzugriffsschicht.",
        archLayer1: "Schicht 1: Benutzeroberfläche (UI)",
        archLayer1Desc: "Tailwind CSS, Responsive Canvas, Dynamische Themes, Web Speech TTS Sprachausgabe, i18n Lokalisierung.",
        archLayer2: "Schicht 2: Geschäftslogik & Verarbeitung",
        archLayer2Desc: "Gleichgewichts-Engine (Spirituell vs Empirisch), Kontemplationsgenerator, Isnad-Netzwerkgraph, Chronologiefilter.",
        archLayer3: "Schicht 3: Datenzugriff & Persistenz",
        archLayer3Desc: "Strukturierte Datenbank für Inschriften, Sitzungsprotokoll-Hash-Verifizierung, Lokale Speicher-Engine.",
        btnClose: "Schließen",

        isnadTitle: "Überlieferungskette (Isnad)",
        isnadSubtitle: "Visualisierung der biografischen Bewertung (Ilm al-Rijal) und der Überlieferungslinie.",
        isnadStep1Title: "Kompilierender Gelehrter (Imam Bukhari / Muslim)",
        isnadStep1Sub: "Authentifizierter Überlieferungsknoten",
        isnadStep2Title: "Haupt-Überlieferungsknoten (Thiqah / Vertrauenswürdig)",
        isnadStep2Sub: "Biografische Stufe: Hohe Zuverlässigkeit",
        isnadStep3Title: "Gefährte als Erzähler (Sahabi)",
        isnadStep3Sub: "Direkte Quellensammlungs-Linie",
        isnadAuthenticity: "Authentizitätsgrad:",
        isnadGradeSahih: "Sahih (Streng verifiziert)",

        footerCopyright: "© Al-Hikmah Digital Humanities Forschungsinitiative. MGIS130-konforme Architektur.",
        footerSystemStatus: "Systemstatus:",
        footerActiveSynced: "● Aktiv & Synchronisiert",

        toastNewPrompt: "Neue Synthesefrage generiert!",
        toastCopiedPrompt: "Reflexionsfrage in die Zwischenablage kopiert!",
        toastCopiedText: "Text & Zitat in die Zwischenablage kopiert!",
        toastSaved: "Eintrag in Ihrer Manuskript-Bibliothek gespeichert!",
        toastRemoved: "Eintrag aus den gespeicherten Manuskripten entfernt.",
        toastLogsCleared: "Sitzungs-Auditbuch gelöscht.",
        toastAudioError: "Sprachsynthesefehler oder nicht unterstützte Browserstimme."
    },
    tr: {
        headerTitle: "El-Hikmet Dergisi",
        headerBadge: "Hikmet ve Miras",
        headerSub: "İslam Kitabeleri, Nebevi Gelenekler ve Altın Çağ Keşifleri",
        streakDays: "Günlük Seri",
        btnArch3Layer: "3-Katmanlı Mimari",
        btnSavedMs: "Kaydedilenler",
        btnSessionLedger: "Oturum Defteri",
        
        lblDomainFocus: "Bilgi Alanı Odağı:",
        optAll: "📖 Tüm Bilgi Gelenekleri",
        optQuran: "📖 Yüce Kur'an (Vahiy)",
        optHadith: "📜 Nebevi Sünnet (Hadis)",
        optWisdom: "🧘 Klasik Âlimler ve Ahlak",
        optScience: "🔬 Altın Çağ Bilimi ve Tarihi",
        
        lblCalligraphyScript: "Arapça Hat Sanatı Stili:",
        optScriptAmiri: "Amiri (Klasik Nesih)",
        optScriptScheherazade: "Şehrazad (Görkemli Sülüs)",
        optScriptRuqaa: "Aref Ruqaa (İfadeli Rika)",
        btnRetrievePair: "Bilgi Çiftini Getir",
        lblEraScrub: "Kronolojik Zaman Çizelgesi:",
        selectedEraLabelAll: "Tüm Tarihi Dönemler",
        eraAll: "Tüm Dönemler",
        era7th: "7. Yüzyıl (Vahiy Dönemi)",
        era9th: "9. Yüzyıl (Bağdat Hikmeti)",
        era10th: "10. Yüzyıl (Altın Çağ)",
        era11th: "11-12. Yüzyıl (Endülüs ve İran)",
        
        lblSpiritual: "Manevi Kitabe:",
        lblEmpirical: "Deneysel Bulgu:",
        lblHarmoniousSynth: "Uyumlu Sentez",
        
        badgeSacredText: "Kutsal Metin / Kitabe",
        badgeHistoricalObs: "Tarihi ve Deneysel Gözlem",
        lblPrimarySource: "Birincil Kaynak ve Atfedilen Ravi:",
        lblCitedSource: "Alıntılanan Tarihi / Akademik Kaynak:",
        btnChainIsnad: "İsnad Zinciri",
        badgePeerVerified: "Akademik Onaylı",
        btnSaveInscription: "Kitabeyi Kaydet",
        btnSaveObservation: "Gözlemi Kaydet",
        btnSavedItem: "Kaydedildi",
        
        titleSynthesis: "Felsefi Tefekkür ve Sentez Sorusu",
        badgeTafakkur: "Tefekkür Motoru",
        btnCopyPrompt: "Tefekkür Sorusunu Kopyala",
        btnNewSynthesis: "Yeni Sentez Sorusu",
        btnQuizMode: "Bilgi Testini Çöz",

        quizTitle: "İslam Hikmeti ve Bilimi Testi",
        quizSubtitle: "Klasik kitabeler, bilimsel keşifler ve tarihi rivayet zincirleri bilginizi test edin.",
        quizQuestionCount: "Soru",
        quizOf: "/",
        quizScore: "Puan",
        quizNext: "Sonraki Soru",
        quizRestart: "Testi Yeniden Başlat",
        quizResultsTitle: "Test Tamamlandı!",
        quizYourScore: "Toplam Puanınız:",
        quizPerfectScore: "Maşallah! İslam mirası ve bilimi konusunda mükemmel hakimiyet!",
        quizGoodScore: "Harika iş! Tarihi gelenekler hakkında güçlü bilgi.",
        quizKeepLearning: "Güzel çaba! El-Hikmet el yazması kayıtlarını keşfetmeye devam edin.",

        savedTitle: "Kaydedilen El Yazmaları ve Gözlemler",
        savedSubtitle: "Yer imlerine eklenen kitabeler, bilimsel kayıtlar ve kaynakça kütüphaneniz.",
        savedEmpty: "Henüz kaydedilmiş el yazması yok. Kaydetmek için kartlardaki ikona tıklayın.",
        btnExportCsv: "CSV Dışa Aktar",
        btnExportJson: "JSON Dışa Aktar",
        btnClearAllSaved: "Tümünü Temizle",
        badgeTypeInscription: "Kitabe",
        badgeTypeObservation: "Gözlem",
        btnDelete: "Sil",

        auditTitle: "Oturum Denetim Defteri ve Telemetri",
        auditSubtitle: "Gerçek zamanlı sistem günlüğü, mimari telemetri ve doğrulama kodları (MGIS130 Uyumlu).",
        lblTotalRetrieved: "Toplam Getirilen",
        lblTotalSaved: "Toplam Kaydedilen",
        lblActiveTheme: "Aktif Mod",
        lblSystemStatus: "Sistem Durumu",
        statusHealthy: "Sağlıklı",
        thTimestamp: "Zaman Damgası",
        thAction: "Eylem / Olay",
        thDomain: "Alan",
        thDetail: "Detaylar",
        thProofHash: "Hash Kodu",
        auditEmpty: "Henüz oturum günlüğü oluşturulmadı.",
        btnClearLogs: "Günlükleri Temizle",
        btnPrintLedger: "Raporu Yazdır",

        archTitle: "3-Katmanlı Yazılım Mimarisi Özellikleri",
        archSubtitle: "MGIS130 Kurumsal Mimari Haritası: Kullanıcı Arayüzü, İş Mantığı ve Veri Erişim Katmanları.",
        archLayer1: "Katman 1: Kullanıcı Arayüzü (UI)",
        archLayer1Desc: "Tailwind CSS, Duyarlı Tuval, Dinamik Temalar, Web Ses TTS Sentezi, i18n Yerelleştirme.",
        archLayer2: "Katman 2: İş Mantığı ve İşleme",
        archLayer2Desc: "Denge Motoru (Manevi vs Deneysel Denge), Tefekkür Üreticisi, İsnad Ağı Grafiği, Dönem Filtresi.",
        archLayer3: "Katman 3: Veri Erişimi ve Kalıcılık",
        archLayer3Desc: "Yapılandırılmış Kitabeler Veritabanı, Oturum Denetim Hash Doğrulaması, Yerel Depolama Motoru.",
        btnClose: "Kapat",

        isnadTitle: "İsnad / İletim Zinciri",
        isnadSubtitle: "Biyografik değerlendirme (İlm-i Rical) ve rivayet silsilesi görselleştirmesi.",
        isnadStep1Title: "Eseri Derleyen Âlim (İmam Buhari / Müslim)",
        isnadStep1Sub: "Doğrulanmış İletim Düğümü",
        isnadStep2Title: "Ana Ravi Düğümü (Sika / Güvenilir)",
        isnadStep2Sub: "Biyografik Derece: Yüksek Güvenilirlik",
        isnadStep3Title: "Sahabi Ravi",
        isnadStep3Sub: "Doğrudan Kaynak Silsilesi",
        isnadAuthenticity: "Sıhhat Derecesi:",
        isnadGradeSahih: "Sahih (Müttasıl ve Titizlikle Doğrulanmış)",

        footerCopyright: "© El-Hikmet Dijital Beşeri Bilimler Araştırma İnisiyatifi. MGIS130 Uyumlu Mimari.",
        footerSystemStatus: "Sistem Durumu:",
        footerActiveSynced: "● Aktif ve Senkronize",

        toastNewPrompt: "Yeni tefekkür sorusu oluşturuldu!",
        toastCopiedPrompt: "Tefekkür sorusu panoya kopyalandı!",
        toastCopiedText: "Metin ve kaynakça panoya kopyalandı!",
        toastSaved: "Öğe El Yazmaları Kütüphanenize kaydedildi!",
        toastRemoved: "Öğe Kaydedilen El Yazmalarından kaldırıldı.",
        toastLogsCleared: "Oturum denetim defteri temizlendi.",
        toastAudioError: "Ses sentezi hatası veya desteklenmeyen tarayıcı sesi."
    },
    ur: {
        headerTitle: "الحکمۃ جریدہ",
        headerBadge: "حکمت و میراث",
        headerSub: "اسلامی کتبے، احادیث نبوی اور عہدِ زریں کی سائنسی دریافتیں",
        streakDays: "مسلسل دن",
        btnArch3Layer: "تھری لیئر آرکیٹیکچر",
        btnSavedMs: "محفوظ شدہ",
        btnSessionLedger: "سیشن لیجر",
        
        lblDomainFocus: "علمی شعبہ:",
        optAll: "📖 تمام علمی روایات",
        optQuran: "📖 قرآنِ مجید (وحی)",
        optHadith: "📜 سنتِ نبوی (حدیث)",
        optWisdom: "🧘 کلاسیکی علماء اور اخلاقیات",
        optScience: "🔬 عہدِ زریں کی سائنس اور تاریخ",
        
        lblCalligraphyScript: "عربی خطاطی کا انداز:",
        optScriptAmiri: "امیری (کلاسیکی نسخ)",
        optScriptScheherazade: "شہرزاد (شاہی ثلث)",
        optScriptRuqaa: "عارف رقعہ (اظہاری رقعہ)",
        btnRetrievePair: "علمی جوڑا حاصل کریں",
        lblEraScrub: "تاریخی خطِ زمانی:",
        selectedEraLabelAll: "تمام تاریخی ادوار",
        eraAll: "تمام ادوار",
        era7th: "7ویں صدی (دورِ وحی)",
        era9th: "9ویں صدی (بغداد کی حکمت)",
        era10th: "10ویں صدی (عہدِ زریں)",
        era11th: "11ویں-12ویں صدی (اندلس و فارس)",
        
        lblSpiritual: "روحانی تحریر:",
        lblEmpirical: "تجرباتی دریافت:",
        lblHarmoniousSynth: "ہم آہنگ امتزاج",
        
        badgeSacredText: "مقدس متن / کتبہ",
        badgeHistoricalObs: "تاریخی و تجرباتی مشاہدہ",
        lblPrimarySource: "بنیادی ماخذ اور راوی:",
        lblCitedSource: "مستند تاریخی / علمی ماخذ:",
        btnChainIsnad: "سلسلہ اسناد",
        badgePeerVerified: "علمی طور پر تصدیق شدہ",
        btnSaveInscription: "کتبہ محفوظ کریں",
        btnSaveObservation: "مشاہدہ محفوظ کریں",
        btnSavedItem: "محفوظ شدہ",
        
        titleSynthesis: "فلسفیانہ تفکر اور ترکیب کا سوال",
        badgeTafakkur: "انجنِ تفکر",
        btnCopyPrompt: "تفکری سوال کاپی کریں",
        btnNewSynthesis: "نیا تفکری سوال",
        btnQuizMode: "علمی کوئز کھیلیں",

        quizTitle: "اسلامی حکمت و سائنس کوئز",
        quizSubtitle: "کلاسیکی کتبوں، سائنسی دریافتوں اور تاریخی روایتوں کی اپنی معلومات کا امتحان لیں۔",
        quizQuestionCount: "سوال",
        quizOf: "میں سے",
        quizScore: "اسکور",
        quizNext: "اگلا سوال",
        quizRestart: "کوئز دوبارہ شروع کریں",
        quizResultsTitle: "کوئز مکمل ہو گیا!",
        quizYourScore: "آپ کا آخری اسکور:",
        quizPerfectScore: "ماشاء اللہ! اسلامی میراث اور سائنس پر بہترین مہارت!",
        quizGoodScore: "بہت عمدہ! تاریخی روایات کے بارے میں بہترین معلومات۔",
        quizKeepLearning: "اچھی کوشش! الحکمۃ کے مخطوطات کی دریافت جاری رکھیں۔",

        savedTitle: "محفوظ شدہ مخطوطات و مشاہدات",
        savedSubtitle: "آپ کی ذاتی لائبریری جہاں منتخب کتبے، سائنسی ریکارڈز اور حوالہ جات محفوظ ہیں۔",
        savedEmpty: "ابھی تک کوئی مخطوطہ محفوظ نہیں کیا گیا۔ محفوظ کرنے کے لیے کارڈ پر موجود بٹن پر کلک کریں۔",
        btnExportCsv: "CSV ایکسپورٹ کریں",
        btnExportJson: "JSON ایکسپورٹ کریں",
        btnClearAllSaved: "سب صاف کریں",
        badgeTypeInscription: "کتبہ",
        badgeTypeObservation: "مشاہدہ",
        btnDelete: "حذف کریں",

        auditTitle: "سیشن آڈٹ لیجر و ٹیلی میٹری",
        auditSubtitle: "ریئل ٹائم سسٹم لاگنگ اور حفاظتی کوڈز (MGIS130 کی تعمیل)۔",
        lblTotalRetrieved: "کل حاصل کردہ",
        lblTotalSaved: "کل محفوظ شدہ",
        lblActiveTheme: "فعال موڈ",
        lblSystemStatus: "سسٹم کی حالت",
        statusHealthy: "فعال و محفوظ",
        thTimestamp: "وقت",
        thAction: "کارروائی / واقعہ",
        thDomain: "شعبہ",
        thDetail: "تفصیلات",
        thProofHash: "ہیش کوڈ",
        auditEmpty: "اس سیشن میں ابھی تک کوئی لاگ نہیں بنا۔",
        btnClearLogs: "لاگز صاف کریں",
        btnPrintLedger: "رپورٹ پرنٹ کریں",

        archTitle: "تھری لیئر سافٹ ویئر آرکیٹیکچر کی تفصیلات",
        archSubtitle: "MGIS130 انٹرپرائز آرکیٹیکچر: یوزر انٹرفیس، بزنس پروسیسنگ، اور ڈیٹا ایکسیس لیئرز۔",
        archLayer1: "لیئر 1: یوزر انٹرفیس (UI)",
        archLayer1Desc: "ٹیل ونڈ CSS، ریسپونسو کینوس، ڈائنامک تھیمز، ویب اسپیچ TTS، اور ملٹی لینگویج سپورٹ۔",
        archLayer2: "لیئر 2: بزنس لاجک اور پروسیسنگ",
        archLayer2Desc: "ایکویلیبریم انجن، تفکر جنریٹر، اسناد نیٹ ورک گراف، اور ادوار کا فلٹر۔",
        archLayer3: "لیئر 3: ڈیٹا ایکسیس اور پرسٹنس",
        archLayer3Desc: "سٹرکچرڈ کیپشنز و ہسٹری ڈیٹا بیس، سیشن لیجر آڈٹ ہیش، اور لوکل اسٹوریج انجن۔",
        btnClose: "بند کریں",

        isnadTitle: "سلسلہ اسناد اور راوی کا تجزیہ",
        isnadSubtitle: "علم الرجال اور روایت کے اتصال کی تصویری نمائش۔",
        isnadStep1Title: "جامع عالم (امام بخاری / مسلم)",
        isnadStep1Sub: "تصدیق شدہ راوی نقطہ",
        isnadStep2Title: "بنیادی راوی (ثقہ / قابلِ اعتماد)",
        isnadStep2Sub: "سوانحی درجہ: اعلیٰ ترین اعتبار",
        isnadStep3Title: "راوی صحابیؓ",
        isnadStep3Sub: "براہِ راست ماخذی سلسلہ",
        isnadAuthenticity: "صحت کا درجہ:",
        isnadGradeSahih: "صحیح (پختہ تصدیق شدہ)",

        footerCopyright: "© الحکمۃ ڈیجیٹل ہیومینٹیز ریسرچ انیشیٹو۔ MGIS130 سے مطابقت پذیر آرکیٹیکچر۔",
        footerSystemStatus: "سسٹم کی حالت:",
        footerActiveSynced: "● فعال اور متصل",

        toastNewPrompt: "نیا تفکری سوال تیار کیا گیا!",
        toastCopiedPrompt: "تفکری سوال کلپ بورڈ پر کاپی ہو گیا!",
        toastCopiedText: "متن اور حوالہ کلپ بورڈ پر کاپی ہو گئے!",
        toastSaved: "آئٹم آپ کی مخطوطات لائبریری میں محفوظ ہو گیا!",
        toastRemoved: "آئٹم محفوظ شدہ مخطوطات سے ہٹا دیا گیا۔",
        toastLogsCleared: "سیشن آڈٹ لیجر صاف کر دیا گیا۔",
        toastAudioError: "آواز کی ریکارڈنگ کا مسئلہ یا براؤزر سپورٹ نہیں کرتا۔"
    }
};

// LOCALIZED QUIZ QUESTIONS DICTIONARY
const quizQuestionsDict = {
    en: [
        {
            question: "Where was Fatima al-Fihri's University of Al-Qarawiyyin founded in 859 CE?",
            options: ["Fez, Morocco", "Baghdad, Iraq", "Cairo, Egypt", "Cordoba, Spain"],
            answer: 0
        },
        {
            question: "Which scholar wrote 'The Canon of Medicine' (Al-Qanun fi al-Tibb)?",
            options: ["Ibn Sina (Avicenna)", "Al-Razi (Rhazes)", "Ibn Al-Haytham", "Al-Khwarizmi"],
            answer: 0
        },
        {
            question: "What branch of mathematics was pioneered by Muhammad ibn Musa al-Khwarizmi?",
            options: ["Algebra (Al-Jabr)", "Calculus", "Trigonometry", "Topology"],
            answer: 0
        }
    ],
    ar: [
        {
            question: "أين تأسست جامعة القرويين على يد فاطمة الفهرية عام 859 م؟",
            options: ["فاس، المغرب", "بغداد، العراق", "القاهرة، مصر", "قرطبة، إسبانيا"],
            answer: 0
        },
        {
            question: "من هو العالم الذي ألّف كتاب 'القانون في الطب'؟",
            options: ["ابن سينا", "الرازي", "ابن الهيثم", "الخوارزمي"],
            answer: 0
        },
        {
            question: "ما هو الفرع الرياضي الذي أسسه محمد بن موسى الخوارزمي؟",
            options: ["الجبر", "التفاضل والتكامل", "حساب المثلثات", "التوبولوجيا"],
            answer: 0
        }
    ],
    es: [
        {
            question: "¿Dónde fue fundada la Universidad de Al-Qarawiyyin por Fatima al-Fihri en el 859 d.C.?",
            options: ["Fez, Marruecos", "Bagdad, Irak", "El Cairo, Egipto", "Córdoba, España"],
            answer: 0
        },
        {
            question: "¿Qué sabio escribió 'El Canon de Medicina' (Al-Qanun fi al-Tibb)?",
            options: ["Ibn Sina (Avicena)", "Al-Razi (Razi)", "Ibn Al-Haytham", "Al-Juarismi"],
            answer: 0
        },
        {
            question: "¿Qué rama de las matemáticas fue iniciada por Muhammad ibn Musa al-Khwarizmi?",
            options: ["Álgebra (Al-Jabr)", "Cálculo", "Trigonometría", "Topología"],
            answer: 0
        }
    ],
    fr: [
        {
            question: "Où l'Université Al-Qarawiyyin a-t-elle été fondée par Fatima al-Fihri en 859 apr. J.-C. ?",
            options: ["Fès, Maroc", "Bagdad, Irak", "Le Caire, Égypte", "Cordoue, Espagne"],
            answer: 0
        },
        {
            question: "Quel savant a écrit 'Le Canon de la Médecine' (Al-Qanun fi al-Tibb) ?",
            options: ["Ibn Sina (Avicenne)", "Al-Razi (Rhazès)", "Ibn Al-Haytham", "Al-Khwarizmi"],
            answer: 0
        },
        {
            question: "Quelle branche des mathématiques a été pionnière par Muhammad ibn Musa al-Khwarizmi ?",
            options: ["Algèbre (Al-Jabr)", "Calcul différentiel", "Trigonométrie", "Topologie"],
            answer: 0
        }
    ],
    de: [
        {
            question: "Wo wurde die Universität Al-Qarawiyyin von Fatima al-Fihri im Jahr 859 n. Chr. gegründet?",
            options: ["Fès, Marokko", "Bagdad, Irak", "Kairo, Ägypten", "Córdoba, Spanien"],
            answer: 0
        },
        {
            question: "Welcher Gelehrte schrieb 'Der Kanon der Medizin' (Al-Qanun fi al-Tibb)?",
            options: ["Ibn Sina (Avicenna)", "Al-Razi (Rhazes)", "Ibn Al-Haytham", "Al-Khwarizmi"],
            answer: 0
        },
        {
            question: "Welcher Zweig der Mathematik wurde von Muhammad ibn Musa al-Khwarizmi begründet?",
            options: ["Algebra (Al-Jabr)", "Analysis", "Trigonometrie", "Topologie"],
            answer: 0
        }
    ],
    tr: [
        {
            question: "Fatıma el-Fihri tarafından 859'da kurulan el-Karaviyyin Üniversitesi nerededir?",
            options: ["Fes, Fas", "Bağdat, Irak", "Kahire, Mısır", "Kurtuba, İspanya"],
            answer: 0
        },
        {
            question: "'El-Kanun fi't-Tıbb' (Tıbbın Kanunu) eserini hangi âlim yazmıştır?",
            options: ["İbn Sina (Avicenna)", "Er-Razi", "İbn el-Heysem", "Harezmi"],
            answer: 0
        },
        {
            question: "Muhammed bin Musa el-Harezmi matematiğin hangi dalının öncülüğünü yapmıştır?",
            options: ["Cebir (Al-Jabr)", "Kalkülüs", "Trigonometri", "Topoloji"],
            answer: 0
        }
    ],
    ur: [
        {
            question: "فاطمہ الفہری نے 859ء میں جامعہ القرویین کہاں قائم کی تھی؟",
            options: ["فاس، مراکش", "بغداد، عراق", "قاہرہ، مصر", "قرطبہ، اسپین"],
            answer: 0
        },
        {
            question: "کتاب 'القانون فی الطب' کس عالم نے تحریر کی؟",
            options: ["ابن سینا", "الرازی", "ابن الہیثم", "الخوارزمی"],
            answer: 0
        },
        {
            question: "محمد بن موسیٰ الخوارزمی نے ریاضی کی کس شاخ کی بنیاد رکھی؟",
            options: ["الجبر", "کيلکولس", "تکونيات (Trigonometry)", "ٹوپولوجی"],
            answer: 0
        }
    ]
};

// EXTENDED KNOWLEDGE DATABASE (QUR'ANIC VERSES KEPT STRICTLY IN ARABIC)
const knowledgeDatabase = [
    {
        id: "pair-1",
        domain: "quran",
        era: "7",
        inscription: {
            arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
            translation: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
            source: "Surah Al-Mujadila (58:11)"
        },
        observation: {
            arabic: "الشُّعَاعُ يَخْرُجُ مِنَ الأَجْسَامِ المَضِيئَةِ إِلَى العَيْنِ فَتَبْصُرُهَا",
            translation: "Light rays emit from luminous objects to the eye, rather than rays emanating from the eye—establishing the foundations of modern optics and experimental physics.",
            source: "Ibn al-Haytham (Alhazen), Kitab al-Manazir (Book of Optics, c. 1021 CE)"
        },
        prompt: "How does the Qur'anic imperative to observe nature inspire Ibn al-Haytham's rigorous experimental method in optics?"
    },
    {
        id: "pair-2",
        domain: "hadith",
        era: "7",
        inscription: {
            arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
            translation: "Seeking knowledge is an obligation upon every Muslim.",
            source: "Sunan Ibn Majah, Hadith 224"
        },
        observation: {
            arabic: "جَامِعَةُ القَرَوِيِّينَ بِنَاءٌ أُسِّسَ عَلَى التَّقْوَى لِنَشْرِ العُلُومِ وَالفُنُونِ",
            translation: "Fatima al-Fihri founded the University of Al-Qarawiyyin in Fez, Morocco (859 CE), recognized as the oldest continually operating degree-granting university in the world.",
            source: "Historical Annals of Maghreb Architecture & Higher Learning"
        },
        prompt: "In what ways did the universal mandate to seek knowledge pave the way for institutionalized higher education in the Islamic world?"
    },
    {
        id: "pair-3",
        domain: "science",
        era: "9",
        inscription: {
            arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
            translation: "Indeed, in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding.",
            source: "Surah Ali 'Imran (3:190)"
        },
        observation: {
            arabic: "الْجَبْرُ هُوَ عِلْمُ الْمُقَابَلَةِ وَالتَّسْوِيَةِ بَيْنَ الْمَعَادَلاتِ",
            translation: "Al-Khwarizmi formulated algebra as a distinct mathematical discipline in Baghdad (c. 820 CE), combining algorithmic procedures with geometric proofs.",
            source: "Al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala"
        },
        prompt: "How did Al-Khwarizmi's work bridge practical problem-solving (inheritance, land survey) with abstract mathematical reasoning?"
    },
    {
        id: "pair-4",
        domain: "quran",
        era: "10",
        inscription: {
            arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
            translation: "And We made from water every living thing. Will they not then believe?",
            source: "Surah Al-Anbiya (21:30)"
        },
        observation: {
            arabic: "الْمَاءُ أُصُولُ الْحَيَاةِ وَتَرْكِيبِ الْأَبْدَانِ وَطَهَارَةُ الأَرْوَاحِ",
            translation: "Ibn Sina (Avicenna) documented public health, water sanitation, and contagious pathogen isolation principles in 'The Canon of Medicine'.",
            source: "Ibn Sina (Avicenna), Al-Qanun fi al-Tibb (The Canon of Medicine, c. 1025 CE)"
        },
        prompt: "How did the sacred view of water as life's baseline inform classical Islamic advancements in hygiene, hydrology, and medical science?"
    },
    {
        id: "pair-5",
        domain: "wisdom",
        era: "11",
        inscription: {
            arabic: "العِلْمُ بِلا عَمَلٍ جُنُونٌ ، وَالعَمَلُ بِلا عِلْمٍ لا يَكُونُ",
            translation: "Knowledge without action is madness, and action without knowledge is non-existent.",
            source: "Imam Al-Ghazali, Ayyuha al-Walad (Letter to a Disciple)"
        },
        observation: {
            arabic: "اخْتِرَاعُ الأَدَوَاتِ الْجِرَاحِيَّةِ لِتَصْحِيحِ أَعْطَالِ الْجَسَدِ وَإِنْقَاذِ الأَرْوَاحِ",
            translation: "Al-Zahrawi (Albucasis) invented over 200 surgical instruments in Cordoba, Andalucia, defining European surgical technique for five centuries.",
            source: "Al-Zahrawi, Kitab al-Tasrif (c. 1000 CE)"
        },
        prompt: "How does Al-Ghazali's philosophical mandate for actionable knowledge parallel Al-Zahrawi's practical innovations in surgery?"
    }
];

// STATE VARIABLES
let currentLang = 'en';
let currentEra = 'all';
let currentPair = knowledgeDatabase[0];
let favorites = JSON.parse(localStorage.getItem('alhikmah_favorites') || '[]');
let historyLogs = JSON.parse(localStorage.getItem('alhikmah_logs') || '[]');
let quizCurrentIndex = 0;
let quizScore = 0;

// LANGUAGE SWITCHER & FULL UI LOCALIZATION
function updateLanguageUI() {
    const dict = translations[currentLang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    if (currentLang === 'ar' || currentLang === 'ur') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }

    const eraLabel = document.getElementById('selectedEraLabel');
    if (eraLabel) {
        if (currentEra === 'all') {
            eraLabel.textContent = dict.selectedEraLabelAll;
        } else {
            const eraKey = `era${currentEra === '7' ? '7th' : currentEra === '9' ? '9th' : currentEra === '10' ? '10th' : '11th'}`;
            eraLabel.textContent = dict[eraKey] || `${currentEra}th Century Era`;
        }
    }

    renderFavoritesList();
    renderAuditHistory();
    updateSaveButtonsState();
}

function filterEra(era, btn) {
    currentEra = era;
    document.querySelectorAll('.era-btn').forEach(b => {
        b.classList.remove('bg-emerald-50', 'text-emerald-800', 'border-emerald-300', 'font-semibold');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
    });
    if (btn) {
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        btn.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-300', 'font-semibold');
    }

    const dict = translations[currentLang] || translations.en;
    const eraLabel = document.getElementById('selectedEraLabel');
    if (eraLabel) {
        if (era === 'all') {
            eraLabel.textContent = dict.selectedEraLabelAll;
        } else {
            const eraKey = `era${era === '7' ? '7th' : era === '9' ? '9th' : era === '10' ? '10th' : '11th'}`;
            eraLabel.textContent = dict[eraKey] || `${era}th Century Era`;
        }
    }

    retrieveKnowledgePair();
}

// KNOWLEDGE RETRIEVAL ENGINE (STRICTLY PRESERVES ARABIC FOR QURANIC VERSES)
function retrieveKnowledgePair() {
    const domainSelectEl = document.getElementById('domainSelect');
    const selectedDomain = domainSelectEl ? domainSelectEl.value : 'all';
    
    let filtered = knowledgeDatabase.filter(item => {
        const matchDomain = (selectedDomain === 'all' || item.domain === selectedDomain);
        const matchEra = (currentEra === 'all' || item.era === currentEra);
        return matchDomain && matchEra;
    });

    if (filtered.length === 0) {
        filtered = knowledgeDatabase.filter(item => selectedDomain === 'all' || item.domain === selectedDomain);
        if (filtered.length === 0) filtered = knowledgeDatabase;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentPair = filtered[randomIndex];

    const inscAr = document.getElementById('inscriptionArabic');
    const inscTr = document.getElementById('inscriptionTranslation');
    const inscSrc = document.getElementById('inscriptionSource');
    const obsAr = document.getElementById('observationArabic');
    const obsTr = document.getElementById('observationTranslation');
    const obsSrc = document.getElementById('observationSource');
    const synthPrompt = document.getElementById('synthesisPromptText');

    // Quranic / Classical Arabic Inscription ALWAYS preserved in Classical Arabic
    if (inscAr) inscAr.textContent = currentPair.inscription.arabic;
    if (inscTr) inscTr.textContent = currentPair.inscription.translation;
    if (inscSrc) inscSrc.textContent = currentPair.inscription.source;
    if (obsAr) obsAr.textContent = currentPair.observation.arabic;
    if (obsTr) obsTr.textContent = currentPair.observation.translation;
    if (obsSrc) obsSrc.textContent = currentPair.observation.source;
    if (synthPrompt) synthPrompt.textContent = currentPair.prompt;

    updateEquilibriumBar();
    updateSaveButtonsState();
    logAuditEvent("PAIR_RETRIEVED", `Retrieved pair ID: ${currentPair.id} (${currentPair.domain})`);
}

// CALLIGRAPHY STYLE ENGINE
function updateCalligraphyStyle() {
    const scriptSelectEl = document.getElementById('scriptSelect');
    if (!scriptSelectEl) return;
    const selectedStyle = scriptSelectEl.value;
    const inscriptionEl = document.getElementById('inscriptionArabic');
    const observationEl = document.getElementById('observationArabic');
    
    if (inscriptionEl) inscriptionEl.style.fontFamily = selectedStyle;
    if (observationEl) observationEl.style.fontFamily = selectedStyle;
    
    logAuditEvent("STYLE_CHANGE", `Calligraphy font updated to ${selectedStyle}`);
}

// EQUILIBRIUM BAR CALCULATION
function updateEquilibriumBar() {
    const abstractPct = 50 + (Math.floor(Math.random() * 11) - 5);
    const concretePct = 100 - abstractPct;

    const absText = document.getElementById('abstractPctText');
    const concText = document.getElementById('concretePctText');
    const absBar = document.getElementById('abstractBar');
    const concBar = document.getElementById('concreteBar');

    if (absText) absText.textContent = abstractPct + '%';
    if (concText) concText.textContent = concretePct + '%';
    if (absBar) absBar.style.width = abstractPct + '%';
    if (concBar) concBar.style.width = concretePct + '%';
}

// TEXT TO SPEECH (TTS)
function speakText(type) {
    const text = type === 'inscription' ? currentPair.inscription.arabic : currentPair.observation.arabic;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
        logAuditEvent("TTS_PLAY", `Playing audio for ${type}`);
    } else {
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toastAudioError);
    }
}

// SYNTHESIS PROMPT GENERATOR & COPY
function generateNewSynthesisPrompt() {
    retrieveKnowledgePair();
    const dict = translations[currentLang] || translations.en;
    showToast(dict.toastNewPrompt);
}

function copySynthesisPrompt() {
    const promptTextEl = document.getElementById('synthesisPromptText');
    if (!promptTextEl) return;
    navigator.clipboard.writeText(promptTextEl.textContent).then(() => {
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toastCopiedPrompt);
    });
}

// FAVORITES / SAVED MANUSCRIPTS MANAGEMENT
function saveCurrentItem(type) {
    const dict = translations[currentLang] || translations.en;
    let itemToSave;

    if (type === 'quote' || type === 'inscription') {
        itemToSave = {
            id: currentPair.id + '-insc',
            type: dict.badgeTypeInscription || 'Inscription',
            text: currentPair.inscription.arabic + " — " + currentPair.inscription.translation,
            source: currentPair.inscription.source,
            dateSaved: new Date().toLocaleDateString()
        };
    } else {
        itemToSave = {
            id: currentPair.id + '-obs',
            type: dict.badgeTypeObservation || 'Observation',
            text: currentPair.observation.arabic + " — " + currentPair.observation.translation,
            source: currentPair.observation.source,
            dateSaved: new Date().toLocaleDateString()
        };
    }

    const existingIndex = favorites.findIndex(f => f.id === itemToSave.id);
    if (existingIndex >= 0) {
        favorites.splice(existingIndex, 1);
        showToast(dict.toastRemoved);
        logAuditEvent("ITEM_REMOVED", `Removed item: ${itemToSave.id}`);
    } else {
        favorites.push(itemToSave);
        showToast(dict.toastSaved);
        logAuditEvent("ITEM_SAVED", `Saved item: ${itemToSave.id}`);
    }

    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    renderFavoritesList();
    updateSaveButtonsState();
}

function renderFavoritesList() {
    const favList = document.getElementById('favoritesList');
    const badge = document.getElementById('favCountBadge');
    if (badge) badge.textContent = favorites.length;

    if (!favList) return;
    const dict = translations[currentLang] || translations.en;

    if (favorites.length === 0) {
        favList.innerHTML = `<div class="p-8 text-center text-slate-400 text-xs italic">${dict.savedEmpty}</div>`;
        return;
    }

    favList.innerHTML = favorites.map((fav, index) => `
        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2 hover:border-emerald-300 transition-all">
            <div class="flex items-center justify-between text-xs">
                <span class="px-2 py-0.5 rounded-md font-semibold text-[10px] ${fav.type.includes('Inscription') || fav.type.includes('نقش') ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                    ${fav.type}
                </span>
                <span class="text-slate-400 text-[10px]">${fav.dateSaved}</span>
            </div>
            <p class="text-xs text-slate-800 font-medium leading-relaxed">${fav.text}</p>
            <div class="flex justify-between items-center pt-1 text-[11px] text-slate-500 border-t border-slate-200/60">
                <span class="italic font-serif">${fav.source}</span>
                <button onclick="removeFavorite(${index})" class="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1">
                    <i class="fa-solid fa-trash-can text-[10px]"></i> ${dict.btnDelete || 'Remove'}
                </button>
            </div>
        </div>
    `).join('');
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    const dict = translations[currentLang] || translations.en;
    showToast(dict.toastRemoved);
    renderFavoritesList();
    updateSaveButtonsState();
    logAuditEvent("ITEM_REMOVED", `Removed favorite index ${index}`);
}

function clearAllFavorites() {
    favorites = [];
    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    const dict = translations[currentLang] || translations.en;
    renderFavoritesList();
    updateSaveButtonsState();
    showToast(dict.toastRemoved);
    logAuditEvent("ALL_FAVORITES_CLEARED", "Cleared all saved manuscripts");
}

function updateSaveButtonsState() {
    const inscSaved = favorites.some(f => f.id === currentPair.id + '-insc');
    const obsSaved = favorites.some(f => f.id === currentPair.id + '-obs');

    const saveInscBtn = document.getElementById('saveInscriptionBtn');
    const saveObsBtn = document.getElementById('saveObservationBtn');

    const dict = translations[currentLang] || translations.en;

    if (saveInscBtn) {
        if (inscSaved) {
            saveInscBtn.className = "text-xs bg-amber-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveInscBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> <span>${dict.btnSavedItem}</span>`;
        } else {
            saveInscBtn.className = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveInscBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>${dict.btnSaveInscription}</span>`;
        }
    }

    if (saveObsBtn) {
        if (obsSaved) {
            saveObsBtn.className = "text-xs bg-emerald-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveObsBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> <span>${dict.btnSavedItem}</span>`;
        } else {
            saveObsBtn.className = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveObsBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>${dict.btnSaveObservation}</span>`;
        }
    }
}

// MULTI-LANGUAGE QUIZ ENGINE
function openQuizModal() {
    quizCurrentIndex = 0;
    quizScore = 0;
    const qCont = document.getElementById('quizContainer');
    const qRes = document.getElementById('quizResults');
    const qMod = document.getElementById('quizModal');

    if (qCont) qCont.classList.remove('hidden');
    if (qRes) qRes.classList.add('hidden');
    renderQuizQuestion();
    if (qMod) qMod.classList.remove('hidden');
    logAuditEvent("QUIZ_OPEN", "Started interactive quiz.");
}

function closeQuizModal() {
    const qMod = document.getElementById('quizModal');
    if (qMod) qMod.classList.add('hidden');
}

function renderQuizQuestion() {
    const questions = quizQuestionsDict[currentLang] || quizQuestionsDict.en;
    if (quizCurrentIndex >= questions.length) {
        showQuizResults();
        return;
    }

    const q = questions[quizCurrentIndex];
    const qNum = document.getElementById('quizQuestionNum');
    const qTot = document.getElementById('quizTotalNum');
    const qCurScore = document.getElementById('quizCurrentScore');
    const qText = document.getElementById('quizQuestionText');

    if (qNum) qNum.textContent = quizCurrentIndex + 1;
    if (qTot) qTot.textContent = questions.length;
    if (qCurScore) qCurScore.textContent = quizScore;
    if (qText) qText.textContent = q.question;

    const optsContainer = document.getElementById('quizOptions');
    if (optsContainer) {
        optsContainer.innerHTML = '';
        q.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full text-left p-3 rounded-xl border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all text-xs font-medium text-slate-800 flex items-center justify-between";
            btn.innerHTML = `<span>${optText}</span><i class="fa-regular fa-circle text-slate-400"></i>`;
            btn.onclick = () => selectQuizOption(idx);
            optsContainer.appendChild(btn);
        });
    }

    const nextBtn = document.getElementById('nextQuizBtn');
    if (nextBtn) nextBtn.classList.add('hidden');
}

function selectQuizOption(selectedIdx) {
    const questions = quizQuestionsDict[currentLang] || quizQuestionsDict.en;
    const q = questions[quizCurrentIndex];
    const isCorrect = selectedIdx === q.answer;
    if (isCorrect) quizScore++;

    const optsContainer = document.getElementById('quizOptions');
    if (optsContainer) {
        const buttons = optsContainer.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.answer) {
                btn.className = "w-full text-left p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold flex items-center justify-between";
                btn.querySelector('i').className = "fa-solid fa-circle-check text-emerald-600";
            } else if (idx === selectedIdx) {
                btn.className = "w-full text-left p-3 rounded-xl border-2 border-rose-400 bg-rose-50 text-rose-900 font-bold flex items-center justify-between";
                btn.querySelector('i').className = "fa-solid fa-circle-xmark text-rose-500";
            }
        });
    }

    const qCurScore = document.getElementById('quizCurrentScore');
    if (qCurScore) qCurScore.textContent = quizScore;

    const nextBtn = document.getElementById('nextQuizBtn');
    if (nextBtn) nextBtn.classList.remove('hidden');
}

function nextQuizQuestion() {
    quizCurrentIndex++;
    renderQuizQuestion();
}

function showQuizResults() {
    const questions = quizQuestionsDict[currentLang] || quizQuestionsDict.en;
    const qCont = document.getElementById('quizContainer');
    const qRes = document.getElementById('quizResults');
    const qFinalScore = document.getElementById('quizFinalScore');
    const qScoreMsg = document.getElementById('quizScoreMsg');

    if (qCont) qCont.classList.add('hidden');
    if (qRes) qRes.classList.remove('hidden');
    if (qFinalScore) qFinalScore.textContent = `${quizScore}/${questions.length}`;

    const dict = translations[currentLang] || translations.en;
    let msg = dict.quizKeepLearning;
    if (quizScore === questions.length) msg = dict.quizPerfectScore;
    else if (quizScore >= 2) msg = dict.quizGoodScore;

    if (qScoreMsg) qScoreMsg.textContent = msg;
}

function restartQuiz() {
    openQuizModal();
}

// MODAL MANAGEMENT
function openFavoritesModal() { document.getElementById('favoritesModal')?.classList.remove('hidden'); }
function closeFavoritesModal() { document.getElementById('favoritesModal')?.classList.add('hidden'); }

function openHistoryModal() { document.getElementById('historyModal')?.classList.remove('hidden'); }
function closeHistoryModal() { document.getElementById('historyModal')?.classList.add('hidden'); }

function openArchModal() { document.getElementById('archModal')?.classList.remove('hidden'); }
function closeArchModal() { document.getElementById('archModal')?.classList.add('hidden'); }

function openIsnadModal() { document.getElementById('isnadModal')?.classList.remove('hidden'); }
function closeIsnadModal() { document.getElementById('isnadModal')?.classList.add('hidden'); }

// EXPORT & LEDGER AUDIT LOGGING
function logAuditEvent(action, detail) {
    const domainEl = document.getElementById('domainSelect');
    const logEntry = {
        time: new Date().toLocaleTimeString(),
        action: action,
        domain: domainEl ? domainEl.value : 'all',
        detail: detail,
        hash: '0x' + Math.random().toString(16).substr(2, 8)
    };
    historyLogs.push(logEntry);
    localStorage.setItem('alhikmah_logs', JSON.stringify(historyLogs));
    renderAuditHistory();
}

function renderAuditHistory() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;
    const dict = translations[currentLang] || translations.en;

    const totalRetrieved = document.getElementById('auditTotalRetrieved');
    const totalSaved = document.getElementById('auditTotalSaved');
    if (totalRetrieved) totalRetrieved.textContent = historyLogs.length;
    if (totalSaved) totalSaved.textContent = favorites.length;

    if (historyLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 text-xs">${dict.auditEmpty}</td></tr>`;
        return;
    }

    tbody.innerHTML = historyLogs.slice().reverse().map(log => `
        <tr class="hover:bg-slate-50 font-mono text-[11px]">
            <td class="p-2.5 text-slate-500">${log.time}</td>
            <td class="p-2.5 font-bold text-slate-800">${log.action}</td>
            <td class="p-2.5 text-slate-600 capitalize">${log.domain}</td>
            <td class="p-2.5 text-slate-700 max-w-xs truncate">${log.detail}</td>
            <td class="p-2.5 text-amber-700 font-bold">${log.hash}</td>
        </tr>
    `).join('');
}

function clearAuditHistory() {
    historyLogs = [];
    localStorage.setItem('alhikmah_logs', JSON.stringify(historyLogs));
    renderAuditHistory();
    const dict = translations[currentLang] || translations.en;
    showToast(dict.toastLogsCleared);
}

function printAuditLedger() {
    window.print();
}

function exportFavoritesCSV() {
    if (favorites.length === 0) return;
    let csvContent = "data:text/csv;charset=utf-8,Type,Text,Source,DateSaved\n";
    favorites.forEach(f => {
        csvContent += `"${f.type}","${f.text.replace(/"/g, '""')}","${f.source}","${f.dateSaved}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "alhikmah_saved_manuscripts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportFavoritesJSON() {
    if (favorites.length === 0) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(favorites, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", "alhikmah_saved_manuscripts.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// UTILITY TOAST NOTIFICATION
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-lg border border-slate-700 animate-toast flex items-center gap-2 pointer-events-auto';
    toast.innerHTML = `<i class="fa-solid fa-circle-info text-emerald-400"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// EXPLICIT GLOBAL BINDINGS TO ENSURE HTML INLINE EVENT HANDLERS ALWAYS CALL WORKABLE FUNCTIONS
window.openArchModal = openArchModal;
window.closeArchModal = closeArchModal;
window.openFavoritesModal = openFavoritesModal;
window.closeFavoritesModal = closeFavoritesModal;
window.openHistoryModal = openHistoryModal;
window.closeHistoryModal = closeHistoryModal;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.openIsnadModal = openIsnadModal;
window.closeIsnadModal = closeIsnadModal;
window.retrieveKnowledgePair = retrieveKnowledgePair;
window.updateCalligraphyStyle = updateCalligraphyStyle;
window.filterEra = filterEra;
window.speakText = speakText;
window.saveCurrentItem = saveCurrentItem;
window.removeFavorite = removeFavorite;
window.clearAllFavorites = clearAllFavorites;
window.exportFavoritesCSV = exportFavoritesCSV;
window.exportFavoritesJSON = exportFavoritesJSON;
window.copySynthesisPrompt = copySynthesisPrompt;
window.generateNewSynthesisPrompt = generateNewSynthesisPrompt;
window.selectQuizOption = selectQuizOption;
window.nextQuizQuestion = nextQuizQuestion;
window.restartQuiz = restartQuiz;
window.clearAuditHistory = clearAuditHistory;
window.printAuditLedger = printAuditLedger;

// INITIALIZE APP UPON DOM READY
document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            currentLang = e.target.value;
            updateLanguageUI();
            logAuditEvent("LANG_CHANGE", `Language changed to ${currentLang.toUpperCase()}`);
        });
    }

    updateLanguageUI();
    retrieveKnowledgePair();
    renderFavoritesList();
    renderAuditHistory();
    updateSaveButtonsState();
    logAuditEvent("SESSION_START", "Application initialized with clean modern UI.");
});
