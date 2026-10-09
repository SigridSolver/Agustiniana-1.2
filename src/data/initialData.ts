import type { InterviewedStudent, Interviewer, ProjectMetadata, Question } from '../types/index.ts';
import { additionalStudents, additionalPrograms } from './additionalPrograms.ts';

export const initialMetadata: ProjectMetadata = {
  university: 'UniAgustiniana - Universitaria Agustiniana',
  faculty: 'Faculty of Humanities, Social Sciences and Education',
  program: 'Bachelor’s Degree in Foreign Languages (English Emphasis)',
  subject: 'Applied Sociolinguistics & Pedagogical Research',
  city: 'Bogotá D.C., Colombia',
  term: 'Academic Period 2026',
  title: 'Academic Life, Aspirations and Campus Perceptions Across Degree Programs',
  subtitle: 'A cross-program study of academic life, professional aspirations and campus experiences at UniAgustiniana Bogotá',
  generalObjective: 'To analyze student perceptions regarding their academic discipline, favorite subjects, campus spaces, internship opportunities, professional improvement, care for mascot Hugos, exchange destinations, and career practice.',
  methodologyType: 'Qualitative-descriptive survey and semi-structured English interview protocols with verbatim response analysis.',
  sampleDescription: 'Program-specific participant rosters, responses and English levels.'
};

export const initialInterviewers: Interviewer[] = [
  {
    id: 'int-1',
    name: 'Alejandra Cruz',
    role: 'Lead Student Researcher / Project Coordinator',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'a.cruz@uniagustiniana.edu.co',
    reflection: 'Interviewing students across diverse programs in English revealed how their disciplinary passions shape their vocabulary and global goals. Real communicative practice gave them the confidence to speak about their dreams, exchange goals, and campus life.'
  },
  {
    id: 'int-2',
    name: 'Melany Casas',
    role: 'Lead Student Researcher / Fieldwork & Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'm.casas@uniagustiniana.edu.co',
    reflection: 'Working directly with the Cine y Televisión cohort showed that 100% of students cherish our campus green spaces and that language education must connect directly to real media channels like RCN, Caracol, Hollywood, and Netflix.'
  },
  {
    id: 'int-6',
    name: 'María Fernanda Rodríguez',
    role: 'Lead Student Researcher / Architecture Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'mf.rodriguez@uniagustiniana.edu.co',
    reflection: 'Investigating students in Architecture revealed their deep commitment to spatial design, physical model making, and urban sustainability. Connecting English communication with technical architectural terminology demonstrated the global exchange and professional goals of future architects.'
  },
  {
    id: 'int-7',
    name: 'Helen Sofía Molina',
    role: 'Lead Student Researcher / Architecture Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'hs.molina@uniagustiniana.edu.co',
    reflection: 'Interviewing the 8 architecture students showed their dedication to studio workshops and international aspirations to study in Spain, Japan, Germany, and the USA. English proficiency directly empowers their international mobility dreams.'
  },
  {
    id: 'int-8',
    name: 'Jorge Bustos',
    role: 'Lead Student Researcher / Engineering Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'j.bustos@uniagustiniana.edu.co',
    reflection: 'Fieldwork research with the Engineering students demonstrated strong analytical passion for software architecture, coding flexibility, and international ambitions in tech enterprises, highlighting the critical role of English for global engineering careers.'
  },
  {
    id: 'int-9',
    name: 'Andres Parra',
    role: 'Lead Student Researcher / Engineering Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'a.parra@uniagustiniana.edu.co',
    reflection: 'Analyzing the 8 Engineering student responses showcased their interest in robotics, electronics, algorithm optimization, and ethical wildlife care for mascot Ugus. Fluency in technical English is their principal bridge to multinational tech giants.'
  },
  {
    id: 'int-10',
    name: 'Valerin Sophia Conde Hernández',
    role: 'Lead Student Researcher / Hospitality & Tourism Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'vs.conde@uniagustiniana.edu.co',
    reflection: 'Fieldwork investigation with Tourism and Hospitality students highlighted the decisive role of bilingualism and customer empathy. Connecting English communication with etiquette, customer care, and international hotel management directly opens career pathways abroad.'
  },
  {
    id: 'int-11',
    name: 'Tania Sarah Candela Ruiz',
    role: 'Lead Student Researcher / Hospitality & Tourism Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'ts.candela@uniagustiniana.edu.co',
    reflection: 'Interviewing the 8 hospitality students revealed their high motivation for international mobility in Spain, Mexico, USA, and Canada, as well as hands-on training in ESUNA facilities. English fluency is their essential bridge to luxury resorts and global travel agencies.'
  },
  {
    id: 'int-12',
    name: 'Ana Paula Manrique Mijares',
    role: 'Lead Student Researcher / Gastronomy Fieldwork Coordinator',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'ap.manrique@uniagustiniana.edu.co',
    reflection: 'Fieldwork with Gastronomy students and Professor Katherine Avendaño revealed high passion for culinary arts, bakery, mixology, and international exchanges to France, Spain, and Mexico. Professional English empowers their culinary careers in global hospitality and cruise lines.'
  },
  {
    id: 'int-13',
    name: 'Carol Tatiana Caro Montaño',
    role: 'Lead Student Researcher / Gastronomy Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'ct.caro@uniagustiniana.edu.co',
    reflection: 'Interviewing the 9 culinary students alongside their instructor highlighted the vital bridge between communicative English, international kitchen brigades, hospitality service standards, and campus awareness regarding mascot Ugus.'
  },
  {
    id: 'int-14',
    name: 'Anamaria Rocha',
    role: 'Lead Student Researcher / Law Fieldwork Coordinator',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'a.rocha@uniagustiniana.edu.co',
    reflection: 'Conducting interviews with Law students demonstrated their high vocational dedication to social justice, constitutional rights, and human welfare. Connecting English language proficiency with legal terminology and international human rights law empowers future Colombian attorneys to engage with international courts and multilateral organizations.'
  },
  {
    id: 'int-15',
    name: 'Sandra Lorena Salazar',
    role: 'Lead Student Researcher / Law Fieldwork & Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'sl.salazar@uniagustiniana.edu.co',
    reflection: 'Analyzing the 9 Law student responses highlighted a strong interest in constitutional debates, public sector institutions, and international mobility to Brazil, the United States, Spain, and Switzerland. Professional communicative English serves as their gateway to global jurisprudence and diplomatic careers.'
  },
  {
    id: 'int-16',
    name: 'Isaac Pinilla',
    role: 'Lead Student Researcher / International Business Fieldwork Coordinator',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'i.pinilla@uniagustiniana.edu.co',
    reflection: 'Fieldwork research with International Business students revealed their high commitment to global markets, international logistics, and foreign languages. Mastering English is their decisive vehicle for corporate communication, multinational negotiations, and study abroad in Spain, the USA, and Europe.'
  },
  {
    id: 'int-17',
    name: 'Carlos Marin',
    role: 'Lead Student Researcher / International Business Fieldwork & Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '1st Semester',
    campus: 'Tagaste Campus',
    email: 'c.marin@uniagustiniana.edu.co',
    reflection: 'Analyzing the 8 International Business student interviews underscored strong interest in digital marketing, foreign languages, and international trade operations. Over 60% of students prioritize improving their English daily to excel in multinational enterprises and global market entry.'
  }
];

export const universityCareersList: string[] = [
  'Film and Television (Cine y Televisión)',
  'Architecture (Arquitectura)',
  'Engineering (Ingenierías)',
  'Hospitality and Tourism (Hotelería y Turismo)',
  'Social Communication (Comunicación Social)',
  'International Business (Negocios Internacionales)',
  'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
  'Gastronomy (Gastronomía)',
  'Law (Derecho)',
  'Marketing (Mercadeo)'
];

export const initialQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore student vocational motivation, core identity, and primary disciplinary appeal.',
    category: 'Program Appeal & Motivation',
    summaryInsight: 'In Film & TV, 63% (5 students) chose Photography, while 37% (3 students) highlighted the university’s specialized spaces.'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify key curricular courses that generate the highest intellectual and technical engagement.',
    category: 'Favorite Subjects',
    summaryInsight: 'Photoshop (38%) and Photography (38%) tied as the most selected subjects, followed by Narrative Workshop (25%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of the university?',
    academicObjective: 'Map spatial attachment and campus environment preferences across UniAgustiniana facilities.',
    category: 'Campus Spaces',
    summaryInsight: 'Unanimous 100% agreement: all 8 surveyed students selected the green area of the campus as their favorite location.'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your internships/practicums?',
    academicObjective: 'Assess student awareness of professional experiential learning and target broadcast/workplace media.',
    category: 'Internships & Practicum',
    summaryInsight: '100% of participants stated they can enter or work with RCN and Caracol TV (50% specifically targeting both networks together).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do to improve in your career?',
    academicObjective: 'Evaluate commitment to self-directed learning, continuous training, and professional development.',
    category: 'Professional Improvement',
    summaryInsight: '88% of participants (7 students) stated they need to study and prepare more through continuous practice.'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'How can you take care of Hugos (Pet)?',
    academicObjective: 'Assess campus community consciousness, animal welfare, and institutional pet guardianship.',
    category: 'Hugos Mascot Care',
    summaryInsight: '63% (5 students) pledged to take care of his habitat and green areas, while 37% (3 students) noted they haven’t seen him around their classrooms.'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Would you like to do a student exchange? Where?',
    academicObjective: 'Measure international mobility aspirations and geographic study-abroad targets.',
    category: 'International Exchange',
    summaryInsight: '75% (6 students) wish to travel abroad to the USA, Mexico, and Hollywood; 25% (2 students) prefer to remain in Colombia.'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Where do you think you can practice your career?',
    academicObjective: 'Identify target employment sectors, international markets, and professional media industries.',
    category: 'Career Practice & Employability',
    summaryInsight: '88% (7 students) project practicing their career in television, film, and streaming platforms like Netflix; 12% (1 student) aims for Canada.'
  }
];

export const architectureQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your degree?',
    academicObjective: 'Explore student vocational motivation, spatial design interest, and aesthetic drive.',
    category: 'Degree Appeal & Motivation',
    summaryInsight: 'Creation and design of spaces: 57% (4 students) · Usefulness, challenges and art: 43% (3 students).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify key architectural workshops and representational courses generating highest engagement.',
    category: 'Favorite Subjects',
    summaryInsight: 'Architectural Workshop (29%) and Representation and Media (29%), followed by Urban Project (14%), Theory & History (14%), and Technological Project (14%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of university?',
    academicObjective: 'Map spatial satisfaction, collaborative studio culture, and academic life on campus.',
    category: 'University Spaces & Community',
    summaryInsight: 'Teamwork and sharing ideas with classmates: 57% (4 students); Architecture studio and model making: 29% (2 students); Daily learning: 14% (1 student).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do to improve your degree?',
    academicObjective: 'Assess self-directed discipline, time management, and technical drawing practice.',
    category: 'Academic Improvement & Skills',
    summaryInsight: 'Organization & time management (37.5%); Practice architectural drawing & techniques (37.5%); Study more & attention to details (25%).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'How can you take care of the university?',
    academicObjective: 'Assess physical plant responsibility, studio cleanliness, and material preservation.',
    category: 'Campus Stewardship & Care',
    summaryInsight: 'Care for classrooms, furniture and materials: 44% (4 students); Keep spaces clean and tidy: 33% (3 students); Respect others & responsible resources: 23% (2 students).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'Would you like to study in another country? Where would you like to go?',
    academicObjective: 'Measure international mobility aspirations and geographic study-abroad targets for architecture.',
    category: 'International Exchange',
    summaryInsight: 'Spain (29% · 2 students), United States (14%), Japan (14%), Germany (14%), Italy (14%), France (14%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Where do you think you can work in your degree?',
    academicObjective: 'Identify target professional workplaces, design studios, and construction firms.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Architecture studios/firms: 38% (5 students); Construction companies: 23% (3 students); Residential/interior design: 23% (3 students); Urban planning: 16% (2 students).'
  }
];

export const engineeringQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Evaluate vocational passion, software development interest, and engineering problem-solving drive.',
    category: 'Career Appeal & Motivation',
    summaryInsight: 'Programming / software: 4 students (50%) · Variety of fields: 2 (25%) · Electronics: 1 (12.5%) · Problem solving: 1 (12.5%).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify core engineering coursework engaging students most across computational and mathematical fields.',
    category: 'Favorite Subjects & Curriculum',
    summaryInsight: 'Programming / software: 3 students (37.5%) · Calculus (Integral & Differential): 3 (37.5%) · Intro to engineering: 1 (12.5%) · Campus green areas: 1 (12.5%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of Ugus (Campus / Mascot)?',
    academicObjective: 'Assess student connection with university mascot Ugus and preferred campus spaces.',
    category: 'University Mascot & Campus Life',
    summaryInsight: 'Ugus himself (The tail / El saco): 2 students (25%) · Library: 2 (25%) · Campus spaces (Green areas / Courts): 2 (25%) · Activities & dynamics: 1 (12.5%) · Off-topic: 1.'
  },
  {
    id: 4,
    code: 'Q4',
    title: "What don't you like about being a student/teacher?",
    academicObjective: 'Understand academic friction points, workload pressure, schedule demands, and student well-being.',
    category: 'Academic Challenges & Workload',
    summaryInsight: 'Nothing / Everything is fine: 3 students (37.5%) · Schedules / sleep late: 2 (25%) · Accumulated workload: 1 (12.5%) · Specific class (Algorithms): 1 (12.5%) · Other: 1.'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do during your exchanges?',
    academicObjective: 'Explore student perception and intended activities during international academic exchanges.',
    category: 'Exchange Activities & Experience',
    summaryInsight: 'Cultural experience & learning: 3 students (37.5%) · Socializing & walking with peers: 2 (25%) · Study & play: 2 (25%) · Rest: 1 (12.5%).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What things can you do to improve in your career?',
    academicObjective: 'Measure self-improvement drive, curriculum demands, and practical technical project needs.',
    category: 'Career Improvement & Skills',
    summaryInsight: 'Self-improvement (Discipline, programming projects): 3 students (37.5%) · Curriculum modernization & class rigor: 3 (37.5%) · Everything well-done: 1 (12.5%) · Unclear: 1.'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Which semester do you like to teach classes in?',
    academicObjective: 'Identify academic stage preferences and teaching/mentoring affinity across undergraduate levels.',
    category: 'Academic Teaching & Semesters',
    summaryInsight: '4th–5th semester: 2 students (28%) · 2nd semester: 1 (14%) · 3rd semester: 1 (14%) · 8th semester: 1 (14%) · None / other: 2 (28%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'How can you take care of Agus (Ugus / Mascot & Wildlife)?',
    academicObjective: 'Evaluate awareness of campus wildlife stewardship, animal welfare rules, and responsible campus behavior.',
    category: 'Campus Fauna & Mascot Stewardship',
    summaryInsight: 'Keep distance / do not stress him: 4 mentions · Keep area clean & trash disposal: 2 mentions · No processed food: 2 mentions · No flash photos: 2 mentions · Respect university values: 1.'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Would you like to do exchanges? Where?',
    academicObjective: 'Map international academic mobility aspirations and target universities for engineering.',
    category: 'International Exchange Destinations',
    summaryInsight: 'Spain: 3 students · Germany: 1 · Mexico: 1 · Brazil or Argentina: 1 · Chile: 1 · Technology Center: 1 · Not for now: 1.'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Where do you think you can practice your career?',
    academicObjective: 'Identify target tech industries, international markets, software firms, and corporate sectors.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Technology & software companies (Google, Cisco): 4 mentions · Any industrial sector: 2 · Own tech company: 1 · Banking & financial sector: 1 · Europe: 1.'
  },
  {
    id: 11,
    code: 'Q11',
    title: 'Do you think you could study another career? Which one?',
    academicObjective: 'Explore multidisciplinary vocations and complementary academic interests among engineering students.',
    category: 'Multidisciplinary Interests & Alternative Degrees',
    summaryInsight: 'Mechatronics engineering: 2 mentions · Software development: 2 mentions · Telecommunications: 1 · Chemical engineering: 1 · Film & TV: 1 · Languages / English: 1.'
  }
];

export const tourismQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore student motivation, cultural interest, and passion for hospitality and travel services.',
    category: 'Career Appeal & Motivation',
    summaryInsight: 'People, cultures & places: 4 students (50%) · Elective / fun classes: 2 (25%) · Variety of classes: 1 (12.5%) · Organize activities: 1 (12.5%).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'Which subject do you like the most?',
    academicObjective: 'Identify key academic courses and practical workshops generating highest engagement and vocational satisfaction.',
    category: 'Favorite Subjects & Practical Labs',
    summaryInsight: 'Elective / Etiquette & Table Service: 4 students (50%) · Tourism Theory: 1 (12.5%) · Labor Legislation: 1 (12.5%) · Tourism & Hotel Management: 1 (12.5%) · Food Safety: 1 (12.5%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of UniAgustiniana?',
    academicObjective: 'Map student attachment to campus facilities, specialized ESUNA hospitality labs, and green spaces.',
    category: 'University Spaces & Campus Life',
    summaryInsight: 'ESUNA specialized facilities: 3 students (37.5%) · Green Zone (Zonas verdes): 3 (37.5%) · Campus & Classmates: 1 (12.5%) · Academic Experience: 1 (12.5%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do during your internships?',
    academicObjective: 'Evaluate student operational competencies and task expectations for professional hotel and tourism practicums.',
    category: 'Internship Activities & Operations',
    summaryInsight: 'Customer service & helping people: 4 students (50%) · Hotel & tourism activities: 3 (37.5%) · Organization & admin tasks: 2 (25%) · Study & social interaction: 1 ea.'
  },
  {
    id: 5,
    code: 'Q5',
    title: "What can’t you do during your internships?",
    academicObjective: 'Assess understanding of professional ethics, operational boundaries, and workplace protocol restrictions.',
    category: 'Workplace Protocols & Restrictions',
    summaryInsight: 'Ignore rules / Act without authorization: 4 students (50%) · Academic responsibilities: 1 (12.5%) · Sleep / Go home: 1 (12.5%) · Unrelated response / Don’t know: 2 (25%).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What can you do to improve in your career?',
    academicObjective: 'Measure commitment to self-directed learning, foreign language fluency, and professional discipline.',
    category: 'Professional Improvement & Languages',
    summaryInsight: 'Study more / Academic effort: 3 students (37.5%) · Improve English & language skills: 2 (25%) · Commitment / Responsibility: 2 (25%) · Practical skills: 1 (12.5%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'How can you take care of others?',
    academicObjective: 'Explore empathy, guest satisfaction, active listening, and teamwork in hospitality contexts.',
    category: 'Empathy, Guest Care & Teamwork',
    summaryInsight: 'Active listening & empathy: 3 students (37.5%) · Be a good teammate: 2 (25%) · Be kind and respectful: 2 (25%) · Guest care and experience: 1 (12.5%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Would you like to do an exchange program? Where?',
    academicObjective: 'Measure international mobility aspirations and preferred study-abroad hospitality destinations.',
    category: 'International Exchange Destinations',
    summaryInsight: 'Spain: 3 students (37.5%) · Mexico: 3 (37.5%) · United States: 2 (25%) · Canada: 2 (25%) · Brazil, Costa Rica, Puerto Rico, Dominican Republic: 1 ea (12.5%).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Do you think you can study another career? Which one?',
    academicObjective: 'Explore multidisciplinary vocations and complementary degrees among tourism students.',
    category: 'Multidisciplinary Interests & Degrees',
    summaryInsight: 'No / Only tourism: 3 students (37.5%) · Business Administration: 2 (25%) · Marketing: 1 (12.5%) · Languages: 1 (12.5%) · Marine Biology: 1 (12.5%).'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Where do you think you can work in the future?',
    academicObjective: 'Identify target employment sectors across hotel chains, international tourism, and airport operations.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Hotels: 4 students (50%) · Work abroad: 4 (50%) · Travel agencies: 2 (25%) · Airports: 2 (25%) · Tourism companies, resorts, own business: 1 ea (12.5%).'
  }
];

export const gastronomyQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like the most about your career?',
    academicObjective: 'Analyze culinary vocational passion, hands-on cooking engagement, and kitchen creativity.',
    category: 'Vocational Motivation & Kitchen Passion',
    summaryInsight: 'Pastry & bread making: 3 (30%) · Cooking & learning techniques: 3 (30%) · Experimenting with food: 1 (10%) · Peace of mind: 1 (10%) · Kitchen atmosphere: 1 (10%) · Teaching & knowledge sharing: 1 (10% - Professor).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify high-impact culinary subjects across baking, mixology, barista, and management.',
    category: 'Curriculum & Culinary Courses',
    summaryInsight: 'Baking & bread making: 3 (30%) · Mixology & cocktails: 3 (30%) · Barista skills: 1 (10%) · Latin American cuisine: 1 (10%) · Budgeting: 1 (10%) · Cocktails & service: 1 (10% - Professor).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite area of the campus?',
    academicObjective: 'Assess spatial attachment to specialized culinary labs, barista rooms, and campus grounds.',
    category: 'Campus Spaces & Culinary Labs',
    summaryInsight: 'Kitchens & Gastronomy area: 4 (40%) · Barista classroom: 1 (10%) · Green area: 1 (10%) · ESUNA Spirituality office: 1 (10%) · Soccer fields: 1 (10%) · Cafeteria: 1 (10%) · Library: 1 (10%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your practices?',
    academicObjective: 'Evaluate culinary skills applied in practical kitchen workshops and practical exercises.',
    category: 'Culinary Practice & Workshops',
    summaryInsight: 'Cook, plate and prepare new dishes: 4 (40%) · Explore creativity & cultural roots: 2 (20%) · Cook international/Colombian recipes: 2 (20%) · Try different techniques: 1 (10%) · Real-world situations: 1 (10% - Professor).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do to get better in your career?',
    academicObjective: 'Measure self-improvement strategies, technical practice, and lifelong professional development.',
    category: 'Skills Improvement & Self-Learning',
    summaryInsight: 'Practice at home: 3 (30%) · Study beyond class & external sources: 3 (30%) · Learn English: 2 (20%) · Tutorials & teacher feedback: 1 (10%) · Continuous professional development: 1 (10% - Professor).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What do you dislike about your career/being a teacher?',
    academicObjective: 'Identify academic difficulties, quantitative/math challenges, and pedagogical concerns.',
    category: 'Academic Challenges & Dislikes',
    summaryInsight: 'Mathematics, numbers & accounting: 3 (30%) · Budgeting class: 1 (10%) · Baking: 1 (10%) · Teacher comprehension/hardness: 2 (20%) · Cutting: 1 (10%) · Nothing / Loves career & teaching: 2 (20%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Would you like to go on a school exchange, if so, where would you go?',
    academicObjective: 'Map international academic exchange targets for gastronomic and culinary arts studies.',
    category: 'International Exchange Destinations',
    summaryInsight: 'France: 2 (20%) · Spain: 2 (20%) · Mexico: 2 (20%) · Europe & Peru: 1 (10% - Professor) · Italy/Brazil: 1 (10%) · Argentina: 1 (10%) · Norway & Spain: 1 (10%) · No / Prefers Colombia: 1 (10%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'What would you like to work in after you graduate?',
    academicObjective: 'Identify post-graduation employment goals across restaurants, pastry shops, cruises, and hotels.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Own restaurant or pastry shop: 3 (30%) · Hotel industry abroad / local: 3 (30%) · Cruise ships internationally: 2 (20%) · Four-star restaurant: 1 (10%) · Hotel industry: 1 (10% - Professor).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Have you ever seen Ugus?',
    academicObjective: 'Evaluate visibility and encounters with campus mascot Ugus around gastronomy facilities.',
    category: 'Campus Mascot Ugus Encounters',
    summaryInsight: 'Yes, seen near kitchens, gastronomy area & parking lots: 6 (60%) · No / Haven’t seen him: 4 (40%).'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Would you study another career?',
    academicObjective: 'Explore multidisciplinary vocations and alternative career aspirations.',
    category: 'Alternative Careers & Disciplines',
    summaryInsight: 'No / 100% Loves Gastronomy: 4 (40%) · Psychology: 2 (20% - Valery & Prof. Katherine) · Software / Tech: 1 (10%) · Accounting: 1 (10%) · Food Engineering: 1 (10%) · Criminology: 1 (10%).'
  }
];

export const lawQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What is the thing you like the most about your career?',
    academicObjective: 'Analyze vocational motivation, altruistic social service, and legal argumentation engagement.',
    category: 'Career Appeal & Motivation',
    summaryInsight: 'Helping people / another person: 5 votes (56%) · Debate: 2 votes (22%) · Learning: 1 vote (11%) · Time with friends: 1 vote (11%).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify key foundational courses across constitutional, civil, and introductory legal studies.',
    category: 'Favorite Subjects & Curriculum',
    summaryInsight: 'Constitutional Law: 5 votes (56%) · Law foundations: 1 (11%) · Introduction to Law: 1 (11%) · English: 1 (11%) · Civil Law: 1 (11%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite thing about the campus?',
    academicObjective: 'Map spatial attachment and preferred recreational and study areas across UniAgustiniana.',
    category: 'Campus Spaces & Facilities',
    summaryInsight: 'Any place / Open campus: 3 votes (33%) · Fountain: 2 votes (22%) · Cafeteria: 2 votes (22%) · Soccer field: 1 (11%) · ESUNA: 1 (11%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your practices?',
    academicObjective: 'Evaluate operational competencies in legal clinics (consultorio jurídico), corporate advising, and social assistance.',
    category: 'Legal Practices & Consultorios',
    summaryInsight: 'Help people: 3 votes (33%) · Choose companies & talk to other people: 2 (22%) · Real situations: 1 (11%) · Stress of debates: 1 (11%) · Prepared activities: 1 (11%) · Unsure: 1 (11%).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What could you do to get better in your career?',
    academicObjective: 'Measure self-improvement strategies, legal literature reading habits, and oral communication mastery.',
    category: 'Skills Improvement & Reading',
    summaryInsight: 'Read more about my career: 3 votes (33%) · Practice communication: 2 (22%) · Be disciplined: 1 (11%) · To get more experience with people: 1 (11%) · I don’t know: 1 (11%).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'Would you like to go on a school exchange? Where?',
    academicObjective: 'Map international academic mobility aspirations and target legal systems worldwide.',
    category: 'International Exchange Destinations',
    summaryInsight: 'Brazil: 5 votes (56%) · United States: 2 votes (22%) · Spain: 1 vote (11%) · Switzerland (Suisa): 1 vote (11%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Where do you think you could work after graduating?',
    academicObjective: 'Identify employment sectors across public administration, government agencies, litigation, and academia.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Depends on major / Unsure: 4 votes (44%) · Governmental institutions: 3 votes (33%) · Public lawyer: 1 vote (11%) · Law teacher / Academia: 1 vote (11%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Do you think you can study another career? Which?',
    academicObjective: 'Explore multidisciplinary vocations and complementary academic interests among law students.',
    category: 'Multidisciplinary Interests & Alternative Degrees',
    summaryInsight: 'No, loves law: 4 votes (44%) · Psychology: 2 votes (22%) · Business Administration: 2 votes (22%) · Music: 1 vote (11%).'
  }
];

export const internationalBusinessQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore vocational motivation, global perspective, language interest, and international business appeal.',
    category: 'Program Appeal & Motivation',
    summaryInsight: 'Learning about different countries & global scope: 4 students (50%) · Languages, cultures & English focus: 2 (25%) · Business focus: 1 (12.5%) · Traveling the world: 1 (12.5%).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite class/subject?',
    academicObjective: 'Identify core subjects generating highest engagement across marketing, mathematics, and languages.',
    category: 'Favorite Subjects & Curriculum',
    summaryInsight: 'Marketing (General, Digital & International): 4 students (50%) · Mathematics: 2 (25%) · English: 1 (12.5%) · Undecided / former marketing: 1 (12.5%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite thing about the campus?',
    academicObjective: 'Map spatial attachment and campus preferences across UniAgustiniana Tagaste facilities.',
    category: 'Campus Spaces & Facilities',
    summaryInsight: 'Green areas / gardens: 2 students (25%) · Salazar building: 2 (25%) · Cafeteria: 2 (25%) · Study area / Library: 1 (12.5%) · Buitrago building: 1 (12.5%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your practices?',
    academicObjective: 'Assess awareness of real-world business practicums, trade operations, and professional roles.',
    category: 'Internships & Practicum',
    summaryInsight: 'Import & export / market entry: 2 students (25%) · Corporate communication & admin: 2 (25%) · Learn about companies & corporate practice: 2 (25%) · Merchandising: 1 (12.5%) · Business management: 1 (12.5%).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What could you do to get better in your career?',
    academicObjective: 'Evaluate self-improvement commitments in languages, reading, certifications, and discipline.',
    category: 'Professional Improvement & Languages',
    summaryInsight: 'Practice English & learn more foreign languages: 5 students (62.5%) · Study more & read international business: 2 (25%) · Build global certifications: 1 (12.5%).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What do you dislike about your career?',
    academicObjective: 'Identify academic hurdles, workload perceptions, mathematics friction, and curriculum challenges.',
    category: 'Academic Dislikes & Challenges',
    summaryInsight: 'Excessive homework & simultaneous workload: 2 students (25%) · Mathematics & numbers: 2 (25%) · Complex rules & memorization: 2 (25%) · Dislikes specific assignments: 1 (12.5%) · No complaints: 1 (12.5%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Would you like to go on a school exchange? Where?',
    academicObjective: 'Measure global mobility aspirations and preferred international university destinations.',
    category: 'International Academic Exchange',
    summaryInsight: 'Spain: 5 students (62.5%) · United States: 1 (12.5%) · Australia or Europe: 1 (12.5%) · Undecided: 1 (12.5%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Where do you think you could work after graduating?',
    academicObjective: 'Identify target employment sectors across multinational corporations, trade, and customer relations.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Multinational / International company: 4 students (50%) · Import/export & international market: 2 (25%) · Company boss/leadership: 1 (12.5%) · Customer service internship: 1 (12.5%).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Have you ever seen Ugus?',
    academicObjective: 'Evaluate visibility and encounters with campus mascot Ugus across Tagaste campus facilities.',
    category: 'Campus Mascot Ugus Encounters',
    summaryInsight: 'No / Never seen Ugus: 5 students (62.5%) · Yes / Seen him on campus: 3 students (37.5%).'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Do you think you can study another career? Which?',
    academicObjective: 'Explore multidisciplinary vocations and complementary academic interests among international business students.',
    category: 'Alternative Careers & Multidisciplinary Interests',
    summaryInsight: 'No / 100% Loves International Business: 4 students (50%) · Gastronomy: 2 (25%) · Marketing: 1 (12.5%) · Social Communication: 1 (12.5%).'
  }
];

export const initialStudents: InterviewedStudent[] = [
  // CINE Y TELEVISIÓN - Official Real Survey Sample (8 Verified Students, 0 Fictitious)
  {
    id: 'cin-1',
    name: 'Garzón Prieto Eily Catalina',
    studentCode: '720261009',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Photography allows us to capture the visual soul of any story and freeze emotion through light.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Photography. I love mastering camera composition, working with lighting angles, and expressing deep emotions through still and moving images.',
      2: 'Photography. It is the core subject where we experiment with studio flashes, portraiture, and natural light on campus.',
      3: 'The green area of the campus. It gives us an inspiring outdoor environment to relax and shoot natural light scenes.',
      4: 'RCN and Caracol TV. We can participate in audiovisual production crews and gain experience inside Colombia’s leading television networks.',
      5: 'Study and prepare more. Continuous technical reading, watching classic cinema, and training on professional cameras is essential.',
      6: 'Take care of its habitat. Ensuring the campus gardens and green spaces are clean and protected so Hugos can live peacefully.',
      7: 'Yes, to the USA and Hollywood. Visiting California studios would be a dream to understand high-budget international cinematography.',
      8: 'In television, film, and international streaming platforms like Netflix where cinematic storytelling reaches global audiences.'
    }
  },
  {
    id: 'cin-2',
    name: 'Menez Vargas José Guillermo',
    studentCode: '720261033',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-700',
    highlightQuote: 'Photoshop and digital color grading bring the director’s visual vision to life with precision.',
    audioTime: '03:52 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Photography. The technical craft of camera lenses, aperture controls, and capturing cinematic frames.',
      2: 'Photoshop. Learning digital image manipulation, layer compositing, and visual color treatment is amazing.',
      3: 'The green area of the campus. The open gardens and lawns provide a fresh space to brainstorm film ideas between classes.',
      4: 'Both together: RCN and Caracol TV. Entering both national networks to work in studio filming and live broadcasting.',
      5: 'Study and prepare more. Practicing editing daily and expanding our theoretical knowledge of audiovisual aesthetics.',
      6: 'Take care of its habitat. Keeping food bowls clean and never leaving waste in the green areas where he walks.',
      7: 'Yes, to Mexico. Mexico has an incredible cinematic heritage, top television production houses, and world-class directors.',
      8: 'In television broadcast, film productions, and digital series created for Netflix and international networks.'
    }
  },
  {
    id: 'cin-3',
    name: 'Martínez Enríquez Juan David',
    studentCode: '720261037',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Narrative Workshop taught me that a film without a compelling script is just an empty sequence of frames.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Photography. Understanding visual framing, shadow contrasts, and cinematic focal length to communicate dramatic tension.',
      2: 'Narrative Workshop. Writing character backstories, creating three-act screenplay structures, and analyzing narrative conflict.',
      3: 'The green area of the campus. It is by far the most peaceful spot at UniAgustiniana for script reading and reflection.',
      4: 'RCN and Caracol TV. Assisting television directors, learning floor management, and handling studio camera operations.',
      5: 'Study and prepare more. Reading screenplays in English, analyzing foreign films, and sharpening our narrative instincts.',
      6: 'Haven’t seen it around my classroom areas, but if I encounter Hugos I will treat him with gentle care.',
      7: 'Yes, to the USA and Hollywood. Immersing myself in Los Angeles film schools to master Hollywood screenwriting and directing.',
      8: 'In television, independent film festivals, and streaming content catalogs on Netflix.'
    }
  },
  {
    id: 'cin-4',
    name: 'López García Ana María',
    studentCode: '720261028',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-fuchsia-600',
    highlightQuote: 'UniAgustiniana’s campus spaces provide the perfect natural soundstages for shooting student short films.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The university’s spaces. The audiovisual studios, editing suites, and campus grounds give us practical creative freedom.',
      2: 'Photoshop. Developing visual posters, concept art, and matte painting backgrounds for audiovisual projects.',
      3: 'The green area of the campus. It has great natural lighting, trees, and quiet spaces where students connect.',
      4: 'Both together: RCN and Caracol TV. Gaining professional credits across both major Colombian commercial television channels.',
      5: 'Study and prepare more. Taking specialized technical workshops and continuing our self-directed practice.',
      6: 'Take care of its habitat. Making sure nobody disturbs him when he is resting and respecting his territory.',
      7: 'Yes, to the United States (Hollywood). Experiencing the epicenter of global cinema and learning studio organization.',
      8: 'In television series, documentary filmmaking, and streaming productions on Netflix.'
    }
  },
  {
    id: 'cin-5',
    name: 'Marulanda Durán Thomas Samuel',
    studentCode: '720261015',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Shooting with natural lighting on campus taught me how to maximize visual storytelling with minimal gear.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Photography. The passion of capturing authentic human moments with cinematic depth of field.',
      2: 'Photography. Learning optical mechanics, lens choices, and shutter speeds to convey emotion.',
      3: 'The green area of the campus. The central green spaces bring nature right into our university life.',
      4: 'RCN and Caracol TV. Working as camera assistants, boom operators, or video playback coordinators on set.',
      5: 'Study and prepare more. Watching masterclasses online, reading film theory, and shooting on weekends.',
      6: 'Take care of its habitat. Ensuring clean water is accessible in the courtyards and not feeding him toxic junk food.',
      7: 'Yes, to Mexico. Learning from their vibrant film culture, contemporary documentary schools, and cinematographers.',
      8: 'In television productions, national feature films, and digital platforms like Netflix.'
    }
  },
  {
    id: 'cin-6',
    name: 'Castro Castillo John Sebastian',
    studentCode: '720261002',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-800',
    highlightQuote: 'The green areas are the best spot to gather with our film crew and map out storyboard sequences.',
    audioTime: '04:02 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The university’s spaces. Having access to dedicated camera gear, lighting kits, and university studio sets.',
      2: 'Narrative Workshop. Crafting believable dialogue, narrative pace, and dramatic structure for fiction shorts.',
      3: 'The green area of the campus. 100% my favorite part—it is spacious, breezy, and great for crew meetings.',
      4: 'Both together: RCN and Caracol TV. Getting involved in multi-camera television drama and daily news operations.',
      5: 'Study and prepare more. Deepening our scriptwriting craft, camera techniques, and audiovisual grammar.',
      6: 'Haven’t seen it around my usual campus routes, but respecting campus animal life is always a priority.',
      7: 'No. Right now I prefer staying in Colombia to focus on national stories and local film productions.',
      8: 'In television, independent cinema in Colombia, and international streaming networks like Netflix.'
    }
  },
  {
    id: 'cin-7',
    name: 'Viñas Moreno Nicolás',
    studentCode: '720261019',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-purple-700',
    highlightQuote: 'Post-production and VFX are where the visual magic truly takes form and reaches international standards.',
    audioTime: '04:15 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Photography. The power to control how light interacts with the subject and shapes visual mood.',
      2: 'Photoshop. Digital image retouching, color grading LUTs, and creating concept visuals for film projects.',
      3: 'The green area of the campus. It gives us space to breathe between long hours inside dark editing suites.',
      4: 'RCN and Caracol TV. Performing video editing, color correction, and broadcast post-production workflows.',
      5: 'Other / practical experience. Gaining direct hands-on shooting experience and producing independent short films.',
      6: 'Take care of its habitat. Protecting campus green spaces and making sure he is safe from moving vehicles.',
      7: 'Yes, to the USA and Hollywood. Visiting California VFX and production companies to learn industry pipelines.',
      8: 'In Canada, working inside international visual effects, animation, and digital film production studios.'
    }
  },
  {
    id: 'cin-8',
    name: 'Pacheco Parra Samuel Juan',
    studentCode: '720261027',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-fuchsia-700',
    highlightQuote: 'Cameras are our instruments to tell the stories of our communities and document reality.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The university’s spaces. The campus courtyards, editing rooms, and sound studios that support our training.',
      2: 'Photography. Developing a sharp eye for visual details, framing composition, and street photography.',
      3: 'The green area of the campus. It is peaceful, open, and provides natural backdrops for camera exercises.',
      4: 'Both together: RCN and Caracol TV. Working across both major media networks in television broadcasting.',
      5: 'Study and prepare more. Reading specialized film books, practicing lighting, and mastering camera gear.',
      6: 'Haven’t seen it yet on my daily commute between classes.',
      7: 'No. I want to build a solid production portfolio in Bogotá before considering an exchange abroad.',
      8: 'In television broadcasting, commercial cinema, and streaming series on Netflix.'
    }
  },
  // ARQUITECTURA - Official Real Survey Sample (8 Verified Students, 0 Fictitious)
  {
    id: 'arch-1',
    name: 'Alejandra Olaya',
    studentCode: '2820261020',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Designing spaces allows us to transform human everyday life through proportion, light, and architectural function.',
    audioTime: '03:42 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Creation and design of spaces. I love how architecture combines technical blueprints with creative spatial experiences to improve how people live.',
      2: 'Architectural Workshop (Taller de Arquitectura). It is where we experiment with spatial concepts, structural models, and receive constructive critique.',
      3: 'Teamwork / sharing ideas with classmates. Working together in the workshop helps us solve complex design challenges and learn from each other.',
      4: 'Improve organization, time management and complete projects on time. Managing long drafting deadlines and model submissions requires strict planning.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. We must treat our cutting tables, drafting desks, and model workshops with great respect.',
      6: 'Yes, to Spain. Spain has an outstanding balance of historic preservation and cutting-edge contemporary urban architecture in Barcelona and Madrid.',
      7: 'In architecture studios and architectural firms, working on public and residential projects from conceptualization to final detail.'
    }
  },
  {
    id: 'arch-2',
    name: 'Andrés Fernández',
    studentCode: '2820261005',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Architecture shapes the cities of tomorrow; balancing structural safety with artistic expression is our mission.',
    audioTime: '04:05 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Creation and design of spaces. I am passionate about creating functional, sustainable buildings that integrate harmoniously into the urban landscape.',
      2: 'Architectural Workshop. Translating two-dimensional sketches into physical models and volumetric studies is the core of our learning process.',
      3: 'Teamwork / sharing ideas with classmates. Brainstorming structural solutions together in the drafting rooms fosters creative innovation.',
      4: 'Improve organization, time management and complete projects on time. Setting daily milestones for technical drafting and render deliveries.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Using drafting equipment safely and keeping workshop machinery in good condition.',
      6: 'Yes, to the United States. Exploring high-rise structural engineering and sustainable commercial architecture in Chicago and New York.',
      7: 'In construction companies and large architecture firms, coordinating BIM models and supervising on-site building execution.'
    }
  },
  {
    id: 'arch-3',
    name: 'Angie Rueda',
    studentCode: '2820261035',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Representation and media give voice to architectural concepts through precise drawings and digital visualization.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Creation and design of spaces. Bringing spatial ideas into physical reality to solve human spatial and community living needs.',
      2: 'Representation and Media (Representación y Medios). Developing digital rendering skills, axonometric perspectives, and architectural visual storytelling.',
      3: 'Teamwork / sharing ideas with classmates. The camaraderie during late studio hours and group model construction makes university life special.',
      4: 'Practice architectural drawing and techniques. Refining freehand sketching, axonometric geometry, and digital drafting tools like Revit and AutoCAD.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Protecting cutting mats and keeping drafting boards clean for everyone.',
      6: 'Yes, to Spain. Studying European architectural typologies and sustainable Mediterranean spatial design.',
      7: 'In residential, commercial, or interior design, as well as collaborative architecture studios focusing on bespoke spaces.'
    }
  },
  {
    id: 'arch-4',
    name: 'Sara Vargas',
    studentCode: '2820261021',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Digital representation connects our architectural imagination with physical structure and tactile materials.',
    audioTime: '03:25 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Creation and design of spaces. The ability to envision empty space and transform it into a meaningful environment for people.',
      2: 'Representation and Media. Learning digital drawing software, 3D modeling, and producing clean graphical sheets.',
      3: 'Teamwork / sharing ideas with classmates. Exchanging constructive feedback with peers pushes our designs to higher quality.',
      4: 'Practice architectural drawing and techniques. Spending extra time practicing perspective drafting and line-weight hierarchy.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Always clearing scraps of cardboard, foam board, and adhesive residues after model making.',
      6: 'Yes, to Japan. I admire Japanese minimalist architecture, seismic wood construction, and spatial harmony with nature.',
      7: 'In architecture studios and residential or interior design, combining clean spatial volumes with natural lighting.'
    }
  },
  {
    id: 'arch-5',
    name: 'Anakarina Rojas',
    studentCode: '2820261039',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Urban projects allow us to understand how architecture impacts whole communities and public infrastructure.',
    audioTime: '03:55 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Usefulness, challenges and art. Architecture is not just aesthetic; it solves real social challenges through artistic and technical discipline.',
      2: 'Urban Project (Proyecto Urbano). Analyzing city density, transit networks, public plazas, and social equity in urban master planning.',
      3: 'Architecture study / studio and making models. Working inside the dedicated architecture workshops surrounded by models and tools.',
      4: 'Study more, read about architecture and pay attention to details. Reading international architectural theory and analyzing classic structural solutions.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Using modeling cutters responsibly and turning off equipment when finished.',
      6: 'Yes, to Germany. Experiencing the Bauhaus architectural tradition, ecological building standards, and urban regeneration.',
      7: 'In urban planning / public spaces design, collaborating with governmental agencies and architecture firms on sustainable cities.'
    }
  },
  {
    id: 'arch-6',
    name: 'Juliana Rojas',
    studentCode: '2820261010',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Understanding architectural history provides the theoretical foundation to build meaningful contemporary structures.',
    audioTime: '04:12 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Creation and design of spaces. I love conceiving spatial geometries that inspire people and respect their natural surroundings.',
      2: 'Theory and History (Teoría e Historia). Discovering how architectural movements evolved across centuries and influenced civilization.',
      3: 'Architecture study / studio and making models. Spending hours crafting scaled cardboard and wood models to test structural lighting.',
      4: 'Practice architectural drawing and techniques. Honing manual and computer-aided drafting techniques to convey exact technical specifications.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Maintaining spotless drafting tables and sorting recyclable cardboard materials properly.',
      6: 'Yes, to Italy. Immersing myself in classical Renaissance architecture, urban conservation, and Italian design heritage.',
      7: 'In architecture studios / architecture firms, as well as historic restoration and urban planning.'
    }
  },
  {
    id: 'arch-7',
    name: 'Sara Muñoz',
    studentCode: '2820261014',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Technological systems and bioclimatic design are turning architecture into an environmentally conscious discipline.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Usefulness, challenges and art. The rigorous intellectual challenge of combining structural physics with artistic elegance.',
      2: 'Technological Project (Proyecto Tecnológico). Understanding construction materials, bioclimatic ventilation, and building technology.',
      3: 'Learning new things every day. Discovering innovative construction methodologies and spatial theories in every single class.',
      4: 'Improve organization, time management and complete projects on time. Managing fabrication schedules so model deliveries are never rushed.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Leaving workshops in pristine condition for the next group of students.',
      6: 'Yes, to France. Visiting contemporary Parisian architectural landmarks and historical bioclimatic projects.',
      7: 'In construction companies and architecture firms, overseeing technological systems and building installations.'
    }
  },
  {
    id: 'arch-8',
    name: 'Danna Monroy',
    studentCode: '2820261030',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Architecture is an artistic responsibility: we build the environments where future generations will grow.',
    audioTime: '03:48 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Usefulness, challenges and art. Tackling architectural problems with artistic creativity and civic purpose.',
      2: 'Architectural Workshop (Taller de Arquitectura). Developing volumetric scale studies and integrating technical drawings with physical models.',
      3: 'Learning new things every day / sharing ideas with peers. Expanding our world view through lectures, workshops, and campus dialogue.',
      4: 'Study more, read about architecture and pay attention to details. Researching architectural case studies, detailing joints, and mastering scale.',
      5: 'Respect other students and be responsible with resources. Supporting peers during critiques and avoiding wasteful consumption of studio materials.',
      6: 'Yes, to Spain. Studying contemporary European urban architecture and participating in international design workshops in Madrid.',
      7: 'In architecture studios / architecture firms, as well as residential and interior design projects.'
    }
  },
  // INGENIERÍAS - Official Real Survey Sample (8 Verified Students)
  {
    id: 'eng-1',
    name: 'David Santiago Mesa Miranda',
    studentCode: '2620261012',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Analyzing everything that goes on behind software is what I am most passionate about in systems engineering.',
    audioTime: '03:42 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Analyzing everything that goes into the software backend and core architecture.',
      2: 'Software Architecture.',
      3: 'The group campus dynamics and institutional activities.',
      4: 'The class schedules.',
      5: 'Resting, recharging, and taking a break from routine.',
      6: 'Greater academic rigor and technical depth in some classes.',
      7: 'Second semester.',
      8: 'By leaving him alone and not bothering or disturbing him.',
      9: 'Spain.',
      10: 'In Europe.',
      11: 'Film and Television.'
    }
  },
  {
    id: 'eng-2',
    name: 'Adrian Felipe Ballares Angel',
    studentCode: 'P2220262004',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'I can improve my learning by programming more and trying to build more circuits and robotics projects.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The mechanical and electronic components of engineering.',
      2: 'Programming.',
      3: 'The tail (of mascot Ugus).',
      4: 'Staying up late to study and finish assignments.',
      5: 'I can see more of the world and explore new environments.',
      6: 'I can improve my learning by programming more and trying to build more circuits and robotics projects.',
      7: '8th semester.',
      8: 'By not disturbing or having unnecessary interactions with him.',
      9: 'I want an academic exchange to Germany.',
      10: 'In any industrial tech sector.',
      11: 'I think I could study software development or a degree that strengthens my abilities in mechatronics and entrepreneurship.'
    }
  },
  {
    id: 'eng-3',
    name: 'Sebastián Molano',
    studentCode: 'P2220262017',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'I envision myself in technology and software companies creating innovative applications and platforms.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'The curriculum modules dedicated to programming and software development.',
      2: 'Introduction to Engineering.',
      3: 'The green fields and open gardens of the campus.',
      4: 'There is really nothing that I dislike; everything is fine.',
      5: 'Walking around campus and spending time with my university peers.',
      6: 'Nothing in particular; everything in the program is well structured.',
      7: 'Hmm, I think 4th or 5th semester.',
      8: 'In my experience on campus, caring for Ugus and the university wildlife relies on specific practices: avoiding feeding them processed food so as not to disrupt their diet, maintaining a respectful distance without cornering or stressing them, using trash bins properly so they do not forage waste in green areas, and alerting University Welfare or security if any animal is injured or in danger.',
      9: 'Yes, I would love to. I would like to do an exchange in Mexico or Spain, as they have universities with outstanding technology faculties. It would be a great opportunity to expand my professional network, adapt to new study methodologies, and strengthen my professional profile before graduating.',
      10: 'I envision myself practicing my career in technology and software companies, creating applications, platforms, and innovative digital solutions that streamline processes for people and organizations. I am also very interested in the financial and banking sector, as it demands high security standards, robust database management, and resilient transactional systems. In both sectors I can contribute by developing high-quality software, optimizing workflows, and ensuring technological efficiency.',
      11: 'I do not think so; if I did, I would study foreign languages like English to strengthen my professional profile.'
    }
  },
  {
    id: 'eng-4',
    name: 'Mateo Camacho González',
    studentCode: 'P3220262010',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'I would enhance the focus on modern technologies to bridge the curriculum with current industry standards.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The wide variety of topics and the diverse branches I can specialize in and pursue professionally.',
      2: 'My favorite subject is Integral Calculus.',
      3: 'My favorite part of the university is the library because it is quiet and extremely useful for finding resources.',
      4: 'What I dislike about being a student is that assignments sometimes pile up because they are assigned on the same day or have same-day deadlines.',
      5: 'Learning from the people around me, discovering their cultural customs, and enjoying new things I will see and learn.',
      6: 'I would update the focus on modern technologies, replacing tools in the syllabus that are rarely used today with current industry practices.',
      7: 'In fourth semester.',
      8: 'By taking photos without flash, not touching him, and never leaving any trash on the ground that could harm him.',
      9: 'Yes, I would really like to do an academic exchange in Spain.',
      10: 'In a technology enterprise, either at the national or international level.',
      11: 'I could study Telecommunications Engineering or specialized Software Development, since they are highly complementary to Systems Engineering.'
    }
  },
  {
    id: 'eng-5',
    name: 'Santiago Torres',
    studentCode: 'P3220262022',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Flexibility when solving complex problems through algorithmic and mathematical thinking.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Flexibility when approaching problem-solving.',
      2: 'Calculus.',
      3: "The mascot's university sweater (El saco).",
      4: 'The algorithms class.',
      5: 'Sharing my Colombian culture with international peers.',
      6: 'Taking training courses across multiple programming languages.',
      7: 'Third semester.',
      8: 'By not giving him processed human food.',
      9: 'Yes, in Brazil or Argentina.',
      10: 'Global technology giants like Google and Cisco.',
      11: 'Yes, it would be Mechatronics Engineering.'
    }
  },
  {
    id: 'eng-6',
    name: 'Diego Alian',
    studentCode: 'P3220251033',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Programming is my favorite subject; building functional software inspires continuous learning.',
    audioTime: '03:05 min',
    perceivedEnglishLevel: 'A1 - Beginner',
    answers: {
      1: 'What I enjoy most about my career is programming and coding logic.',
      2: 'My favorite subject is Programming.',
      3: 'I like the green areas and outdoor spaces on campus.',
      4: "I don't like midterms and test pressure.",
      5: 'Playing volleyball and participating in sports activities with foreign peers.',
      6: 'Studying independently and coding at home.',
      7: 'During the first three semesters.',
      8: 'Not scaring or stressing him in his habitat.',
      9: 'Yes, in Spain.',
      10: 'At an international technology innovation center.',
      11: 'No, I am satisfied with engineering.'
    }
  },
  {
    id: 'eng-7',
    name: 'Juan David Bautista',
    studentCode: 'P3220251023',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'I enjoy learning and reinforcing algorithms and programming to eventually launch my own tech company.',
    audioTime: '03:25 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'I enjoy learning and mastering programming fundamentals.',
      2: 'Algorithms and Programming.',
      3: 'The university library.',
      4: 'I have had no complaints or dislikes so far.',
      5: 'Sometimes we play games and other times we study with peers.',
      6: 'Cultivating stronger self-discipline and overcoming procrastination.',
      7: 'In none; I do not have a preference for teaching.',
      8: 'By upholding university values and treating wildlife with respect.',
      9: 'Yes, an exchange to Chile.',
      10: 'In various industrial tech companies or founding my own enterprise.',
      11: "I don't think so; I am fully dedicated to engineering."
    }
  },
  {
    id: 'eng-8',
    name: 'Alexis',
    studentCode: '2620261037',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: "What I like most about my career is that it's very fun and has a lot of variety in work fields.",
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: "What I like most about my career is that it's very fun and has a lot of variety in professional work fields.",
      2: 'I like Differential Calculus.',
      3: 'The campus sports courts.',
      4: 'Nothing; everything is fine with my academic journey.',
      5: 'Talking and exchanging ideas with my friends.',
      6: 'Managing study schedules and optimizing class hours.',
      7: 'In none; I prefer focusing on learning rather than teaching.',
      8: 'Do not take flash photos of him.',
      9: 'Not for now; I prefer completing my foundational semesters here.',
      10: 'I could practice and work at Google.',
      11: 'Chemical Engineering.'
    }
  },

  // HOSPITALITY AND TOURISM (HOTELERÍA Y TURISMO) - Official Real Survey Sample (8 Verified Students)
  {
    id: 'hosp-1',
    name: 'Rubio Sánchez Juan Martín',
    studentCode: '1220262015',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Meeting people from diverse cultures and learning etiquette and service standards in ESUNA is what inspires me most.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Connecting with people, discovering different cultures and exploring new places.',
      2: 'Etiquette and table service elective.',
      3: 'ESUNA specialized hospitality labs and kitchen facilities.',
      4: 'Providing excellent customer service and attending to hotel guests directly.',
      5: 'Ignoring protocol rules or acting without supervisor authorization.',
      6: 'Studying harder and reinforcing theoretical foundation.',
      7: 'Listen to others attentively to anticipate what guests require.',
      8: 'Yes, an exchange program in Spain or Canada.',
      9: 'Business Administration, to strengthen hotel management competencies.',
      10: 'In international hotel chains and working abroad.'
    }
  },
  {
    id: 'hosp-2',
    name: 'Osorio Garzón Juan Pablo',
    studentCode: '1220261010',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Learning table service protocol and tourism theory gives us direct operational readiness for international hotels.',
    audioTime: '02:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Learning about new cultures, international destinations and interacting with people.',
      2: 'Tourism Theory and destination development.',
      3: 'The green zone on campus, it is peaceful for study groups.',
      4: 'Hotel and tourism operational activities, room management and front desk.',
      5: 'Violating institutional regulations or taking decisions without authorization.',
      6: 'Improving my English and communication skills for international guests.',
      7: 'Be a good teammate and support colleagues under high workload.',
      8: 'Yes, I would love to go to Spain or Mexico.',
      9: 'Marketing, to promote eco-tourism destinations.',
      10: 'Working abroad in travel agencies or hotel chains.'
    }
  },
  {
    id: 'hosp-3',
    name: 'Lugo Rojas Juan Nicolás',
    studentCode: '1220261013',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Understanding labor legislation and food safety is essential to manage luxury hospitality businesses.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Elective classes and practical interactive workshops.',
      2: 'Labor Legislation applied to tourism contracts.',
      3: 'ESUNA training spaces and practical reception areas.',
      4: 'Organization, administrative paperwork and booking operations.',
      5: 'Neglecting assigned academic and training responsibilities.',
      6: 'Greater commitment and responsibility with deadlines and coursework.',
      7: 'Being kind and respectful with every visitor and colleague.',
      8: 'Yes, an exchange to the United States or Costa Rica.',
      9: 'No, I am fully focused on Hospitality and Tourism.',
      10: 'In international airports and major hotel companies.'
    }
  },
  {
    id: 'hosp-4',
    name: 'Gamboa Melo Damar Julián',
    studentCode: '1220261029',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Organizing tourism activities and serving people with genuine warmth is what hospitality is all about.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Organizing group activities, recreational tours and travel plans.',
      2: 'Elective etiquette, table service and protocol.',
      3: 'The university campus and spending time with my classmates.',
      4: 'Assisting guests, guiding travelers and solving customer inquiries.',
      5: 'Sleeping on shift or leaving early to go home without permission.',
      6: 'Improving professional and practical front-desk skills.',
      7: 'Guest care and experience, making sure every need is met.',
      8: 'Yes, Mexico or the Dominican Republic.',
      9: 'Languages / Foreign Languages, to expand fluency.',
      10: 'In luxury resorts and establishing my own tourism business.'
    }
  },
  {
    id: 'hosp-5',
    name: 'Martínez Otálora Karen Dayana',
    studentCode: '1220242015',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Tourism and hotel management combined with bilingual customer service opens doors anywhere in the world.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Understanding different cultures, geographic regions and human diversity.',
      2: 'Tourism & Hotel Management.',
      3: 'The green zone, relaxing under the trees between classes.',
      4: 'Hotel and tourism operations, guiding visitors and coordination.',
      5: 'Disobeying supervisor instructions or breaking hotel policies.',
      6: 'Dedicate more hours to study and reading international hospitality case studies.',
      7: 'Listen to others and empathize with guest feedback.',
      8: 'Yes, an exchange to Spain or Mexico.',
      9: 'No, I want to complete my degree and specialize in ecotourism.',
      10: 'Working abroad in corporate hotel chains or international travel agencies.'
    }
  },
  {
    id: 'hosp-6',
    name: 'Rodríguez Villamarín Nicole Vanessa',
    studentCode: '1220261006',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Etiquette and food safety protocols in ESUNA allow us to deliver world-class guest experiences.',
    audioTime: '02:45 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The fun elective courses and practical training dynamics.',
      2: 'Elective etiquette and formal dining protocol.',
      3: 'ESUNA training restaurant and bar laboratories.',
      4: 'Customer service, welcoming arrivals and providing guidance.',
      5: 'Acting arbitrarily without operational authorization.',
      6: 'Improving English proficiency to attend international tourists confidently.',
      7: 'Be kind and respectful to all people regardless of background.',
      8: 'Yes, Canada or the United States.',
      9: 'Marine Biology, because of my love for coastal nature and marine life.',
      10: 'Work abroad in multinational tourism companies and cruise lines.'
    }
  },
  {
    id: 'hosp-7',
    name: 'López Sánchez Sharon Julieth',
    studentCode: '1220261011',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Learning food safety standards and managing tourism services gives us the foundation to lead teams.',
    audioTime: '03:20 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The variety of classes, from geography and management to gastronomy.',
      2: 'Food Safety and sanitary standards in culinary preparation.',
      3: 'The academic experience and knowledge gained from professors.',
      4: 'Administrative management, logistical scheduling and inventory.',
      5: 'I am not sure yet about all specific workplace restrictions.',
      6: 'More dedication, academic effort and continuous reading.',
      7: 'Active listening and showing solidarity with teammates.',
      8: 'Yes, Brazil or Puerto Rico.',
      9: 'Business Administration, as a dual degree option.',
      10: 'At El Dorado international airport or global hotel companies.'
    }
  },
  {
    id: 'hosp-8',
    name: 'Chaguala Giraldo Karen Lucía',
    studentCode: '1220261024',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Customer service and cultural exchange are the core of our profession; ESUNA prepares us thoroughly.',
    audioTime: '03:00 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Meeting people, sharing diverse cultural traditions and discovering places.',
      2: 'Elective etiquette and service protocol.',
      3: 'The green areas of campus, surrounded by nature.',
      4: 'Direct customer service, assisting guests and intercultural learning.',
      5: 'I do not have a specific restriction answer at the moment.',
      6: 'Greater personal commitment, discipline and proactive attitude.',
      7: 'Be a collaborative teammate and foster harmonious environment.',
      8: 'Not for now, though Spain or Mexico would be great in later semesters.',
      9: 'No, I prefer to specialize within hotel and tourism operations.',
      10: 'Hotels, resorts and international travel destinations abroad.'
    }
  },

  // GASTRONOMY (GASTRONOMÍA) - Official Real Survey Sample (9 Students + 1 Faculty Professor)
  {
    id: 'gas-1',
    name: 'Alexandra Corte Díaz',
    studentCode: '3020251061',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'The thing I like the most in my career is pastry making; my dream is opening my own pastry shop.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most in my career is pastry making.',
      2: 'My favorite subject is bread making.',
      3: 'I like the barista classroom.',
      4: 'We can explore our creativity and out roots.',
      5: 'I could learn more maths.',
      6: "I don't like the math.",
      7: "I'd like to do it in France.",
      8: "I'd like to have my own pastry shop.",
      9: "I haven't seen Ugus.",
      10: 'Yes, I love criminology, I would study that.'
    }
  },
  {
    id: 'gas-2',
    name: 'Maria Camila Alonso',
    studentCode: '3020251048',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'I like bread making the most, and practicing at home is how I get better every day.',
    audioTime: '02:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'I like the bread making the most.',
      2: 'My favorite subject is mixeology.',
      3: 'I like the green area the most.',
      4: 'In my practices I can make bread and different kinds of dishes.',
      5: 'The thing I could do to get better in my career is practicing at my house.',
      6: 'The thing I dislike about my career is the cost accounting professor.',
      7: 'Yes, I would like to go to Mexico in a school Exchange.',
      8: 'I would like to work in a pastry shop.',
      9: 'Yes, I have seen Ugus near the parking lots.',
      10: 'Yes, I could study accounting.'
    }
  },
  {
    id: 'gas-3',
    name: 'Gonzalez Vargas Esteban',
    studentCode: '3020251038',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'The thing I like the most is experimenting with food and cooking traditional Colombian recipes.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most is experimenting with the food.',
      2: 'My favorite subject is baking.',
      3: 'My favorite part of the campus is the Office of Spirituality (ESUNA).',
      4: 'We can cook Colombian recipes.',
      5: 'I could ask questions to the teachers, go to tutorials and practice at home.',
      6: 'I dislike having to work with numbers.',
      7: 'Yes, I would like to go to France.',
      8: 'I would like to work in a hotel abroad.',
      9: 'Yes, I have seen it a lot of times around the kitchens.',
      10: "Yes, I'd like to study software, because I also like tech."
    }
  },
  {
    id: 'gas-4',
    name: 'Santiago Millan Castiblanco',
    studentCode: '3020242010',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'What I like the most about my career is cooking and learning international food; I love my career.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'What I like the most about my career is cooking and learning.',
      2: 'My favorite subject is budgeting.',
      3: 'My favorite part of the campus are the soccer fields.',
      4: 'In our practices we could cook international food.',
      5: 'I could learn English.',
      6: 'I dislike baking.',
      7: 'Yes, I would like to go on a school exchange to Argentina.',
      8: 'I would love to work in a restaurant after graduating.',
      9: 'Yes, I have seen Ugus near the gastronomy area.',
      10: 'No, I love my career.'
    }
  },
  {
    id: 'gas-5',
    name: 'David Felipe Caceres',
    studentCode: '3020242045',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'What I like the most about my career is that it gives me peace of mind to create, plate and learn.',
    audioTime: '02:40 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'What I like the most about my career is that it gives me peace of mind.',
      2: 'My favorite subject is Latin American cuisine.',
      3: 'My favorite area in the campus is the cafeteria.',
      4: 'In our practices we can create, plate and learn.',
      5: 'Practice at home and pay attention to our classes.',
      6: 'I dislike that some teachers are hard to understand.',
      7: "No, I wouldn't go on a school exchange, I love my country.",
      8: 'I would work in a four star restaurant after graduating.',
      9: "No, I haven't seen Ugus.",
      10: "No I wouldn't study another thing, I love gastronomy."
    }
  },
  {
    id: 'gas-6',
    name: 'Loren Sofia Salazar',
    studentCode: '3020242022',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Learning new culinary techniques and mixology allows us to innovate and create on cruises outside Colombia.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I like the most about my career is learning new techniques.',
      2: 'My favorite subject is mixology and drinks.',
      3: 'My favorite area of the university is the library.',
      4: 'In our practices we could innovate and create.',
      5: 'I could learn English and take additional subjects with a greater focus on gastronomy.',
      6: 'I dislike the hard some classes can be.',
      7: 'Yes, I would like to go on a school exchange to Italy or Brazil.',
      8: 'I would like to work on a cruise outside of Colombia.',
      9: "I haven't seen Ugus yet.",
      10: 'Yes, I would like to study Food Engineering.'
    }
  },
  {
    id: 'gas-7',
    name: 'Valery Yohana Pulido',
    studentCode: '3020242015',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Gastronomy clears my mind and teaches me creativity; I would love to work on cruises after graduating.',
    audioTime: '03:20 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most about my career is clearing my mind and learning to be creative.',
      2: 'My favorite subjects are baking, Latin American cuisine, and mixology.',
      3: 'My favorite area on campus are the kitchens.',
      4: 'In our practices we can plate, cook and make drinks.',
      5: 'To get better, I could get information from external sources.',
      6: 'The thing I dislike the most about gastronomy is the budgeting class.',
      7: 'Yes, I would like to go on a school exchange to Mexico or Spain.',
      8: 'I would like to work on a cruise after graduating.',
      9: "I haven't seen him.",
      10: 'Yes, I would like to study psychology.'
    }
  },
  {
    id: 'gas-8',
    name: 'Manuel David Ramirez',
    studentCode: '3020251060',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Baking and preparing new culinary dishes in the kitchens inspires me to work in a hotel after graduating.',
    audioTime: '02:55 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The thing I like the most is baking.',
      2: 'My favorite subject is baking.',
      3: 'My favorite area of campus are the kitchen.',
      4: 'I can cook, plate and prepare new things.',
      5: 'I could practice at home to get better at my career.',
      6: 'The thing I dislike the most is cutting.',
      7: 'I would like to go on a school exchange to Spain.',
      8: 'I would like to work in a hotel after graduating.',
      9: 'Yes, I’ve seen it a few times.',
      10: 'No, I love gastronomy.'
    }
  },
  {
    id: 'gas-9',
    name: 'Andres Mauricio Quiroga',
    studentCode: '3020261009',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-orange-600',
    highlightQuote: 'The atmosphere in the kitchen and barista skills are my favorite part; my goal is having my own restaurant.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most about my career are the subjects and the atmosphere in the kitchen.',
      2: 'My favorite subject is barista skills.',
      3: 'My favorite place in the campus are the kitchens.',
      4: 'In our practices, we try different techniques.',
      5: 'I could study beyond what the teachers teach.',
      6: 'Nothing, I love this career.',
      7: 'I would like to go to Norway and Spain.',
      8: 'My goal is having my own restaurant.',
      9: 'I have seen it in the parking lots.',
      10: 'No, I love studying gastronomy.'
    }
  },
  {
    id: 'gas-10',
    name: 'Katherine Avendaño',
    studentCode: 'DOCENTE',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: 'Faculty Professor / Docente',
    campus: 'Tagaste Campus',
    age: 34,
    avatarColor: 'bg-amber-500',
    highlightQuote: 'The thing I like the most about the career is teaching and sharing knowledge about coffee, cocktails, wines and service.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    isTeacher: true,
    role: 'Docente / Faculty Professor',
    answers: {
      1: 'The thing I like the most about the career is teaching and sharing knowledge about coffee, cocktails, wines and service.',
      2: 'My favorite subject is cocktails.',
      3: 'My favorite area around the campus is the gastronomy one, kitchens and dining rooms.',
      4: 'In the practices, students can take classes into real world situations.',
      5: 'I could get better in my field continuing to learn and developing professionally.',
      6: 'Nothing, I love being a teacher.',
      7: 'I would like to go anywhere in Europe and Peru.',
      8: 'When I graduated, I wanted to work in the hotel industry.',
      9: "I've seen it near the gastronomy area.",
      10: 'I would like to study psychology.'
    }
  },
  // LAW (DERECHO) - Official Real Survey Sample (9 Verified Students)
  {
    id: 'law-1',
    name: 'Correa Viloria Robert Sebastian',
    studentCode: 'P3920262021',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-700',
    highlightQuote: 'The most rewarding part of law is having the legal knowledge to protect and help other people in need.',
    audioTime: '03:22 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Helping people and providing legal support to those who need it the most.',
      2: 'Constitutional Law, because it establishes the foundational human rights and democratic structure of our country.',
      3: 'Any place on campus; the university open spaces are great to study and unwind.',
      4: 'Helping people directly through legal clinic consultations.',
      5: 'Read more about my career, especially doctrine, legal codes, and constitutional court decisions.',
      6: 'Yes, I would like to do an academic exchange to Brazil to learn about South American comparative law.',
      7: 'I don’t know for sure yet; it really depends on the legal branch I decide to specialize in.',
      8: 'No, I love my career and I want to dedicate my entire life to the legal profession.'
    }
  },
  {
    id: 'law-2',
    name: 'Campos Carvajal Santi Emanuel',
    studentCode: 'P3920262018',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Constitutional law gives us the tools to advocate for justice and help people defend their fundamental rights.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Helping another person and using the law as an instrument for social justice.',
      2: 'Constitutional Law, analyzing jurisprudence and fundamental human guarantees.',
      3: 'Any place around the campus; every spot offers a comfortable setting to review cases.',
      4: 'Helping people resolve their legal issues during our legal clinic practices.',
      5: 'Read more about my career and stay updated with current court jurisprudence.',
      6: 'Yes, I would love to go to Brazil on a university exchange.',
      7: "I don't know yet; it depends on what branch of law I choose to focus on.",
      8: 'No, I love my career and I am completely satisfied studying law.'
    }
  },
  {
    id: 'law-3',
    name: 'Orozco Gallego Juan Esteban',
    studentCode: 'P3920261031',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Reading doctrine and understanding constitutional law is the basis for serving our community with integrity.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Helping people when they face difficult legal situations.',
      2: 'Constitutional Law.',
      3: 'Any place across the campus where we can gather and discuss with classmates.',
      4: 'Helping people and learning how real legal procedures work.',
      5: 'Read more about my career to build a deeper theoretical foundation.',
      6: 'Yes, I would choose Brazil for an academic exchange.',
      7: 'I don’t know yet; my future workplace depends on my postgraduate major.',
      8: 'No, I love my career; law is my true vocation.'
    }
  },
  {
    id: 'law-4',
    name: 'Castillo Arias Kevin Alejandro',
    studentCode: 'P3920261022',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Practicing communication and public speaking allows us to present convincing legal arguments.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Helping people and defending their legal rights.',
      2: 'Constitutional Law.',
      3: 'The campus fountain, because it is peaceful and refreshing.',
      4: 'Choose different companies and talk to other people to understand legal compliance.',
      5: 'Practice communication and public speaking skills to become more persuasive in court.',
      6: 'Yes, I would like to do an exchange to Brazil.',
      7: "I don't know, it depends on my major and professional specialization.",
      8: 'No, I love my career.'
    }
  },
  {
    id: 'law-5',
    name: 'Rangel Sanchez Samuel Esteban',
    studentCode: 'P3920261016',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Working in governmental institutions is my goal to contribute to public administration and public policy.',
    audioTime: '03:28 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Helping another person overcome injustices.',
      2: 'Law (General Law foundations and theory).',
      3: 'The fountain on campus.',
      4: 'Choose different companies and talk to other people during corporate internships.',
      5: 'Practice communication and oral argumentation techniques.',
      6: 'Yes, I would like to go on an exchange to Brazil.',
      7: 'In governmental institutions such as ministries, public agencies, or municipal offices.',
      8: 'Yes, I think I could study Psychology because understanding human behavior is vital in legal cases.'
    }
  },
  {
    id: 'law-6',
    name: 'Tovar Acosta Valeria',
    studentCode: 'P3920262007',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Legal debate is thrilling: developing structured arguments and defending a position challenges your intellect.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Debate and oral argumentation.',
      2: 'Constitutional Law.',
      3: 'The cafeteria, where we can relax and chat with peers between lectures.',
      4: 'Learn about the law in real situations and see judicial proceedings firsthand.',
      5: 'Be disciplined with daily study routines and reading schedules.',
      6: 'Yes, I would love to go to the USA to study Anglo-American common law.',
      7: 'In governmental institutions or state oversight entities.',
      8: 'Yes, I would study Psychology to analyze criminal minds and legal sociology.'
    }
  },
  {
    id: 'law-7',
    name: 'Díaz Rangel Rihanna Isabella',
    studentCode: 'P3920261053',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Introduction to Law and courtroom debate help us master stress management in high-pressure situations.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Debate and discussing controversial legal topics.',
      2: 'Introduction to Law.',
      3: 'The cafeteria.',
      4: 'Learn how to handle the stress of debates and mock trials.',
      5: 'To get more experience interacting with people and handling client relations.',
      6: 'Yes, I would like to go on a school exchange to the USA.',
      7: 'In governmental institutions and public sector legal offices.',
      8: 'Yes, Business Administration, because corporate law and enterprise management go hand in hand.'
    }
  },
  {
    id: 'law-8',
    name: 'González Rodríguez Ibeth Daniela',
    studentCode: 'P3820261019',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'English proficiency is essential for studying international human rights and transnational legal frameworks.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Learning new concepts and analyzing society through the lens of justice.',
      2: 'English, because mastering international legal vocabulary opens global opportunities.',
      3: 'The soccer field and athletic facilities on campus.',
      4: 'Participate in prepared legal activities and community outreach programs.',
      5: 'I don’t know for sure yet; continuing to study and gain experience.',
      6: 'Yes, I would like to do an academic exchange to Spain.',
      7: 'Working as a public lawyer (defensor público) representing citizens.',
      8: 'Yes, Business Administration to manage legal consultancies or corporate firms.'
    }
  },
  {
    id: 'law-9',
    name: 'D Alemán Suárez Valerie Nicole',
    studentCode: 'P3920262002',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Law and Political Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Civil law regulates our daily social contracts; teaching law or practicing internationally is a profound goal.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Spending time with my friends while learning and growing together in law school.',
      2: 'Civil Law, because it governs interpersonal obligations and contracts.',
      3: 'ESUNA specialized study areas and peaceful campus spots.',
      4: 'I don’t know yet; exploring different internship paths.',
      5: 'To get more experience with people and develop empathetic client listening.',
      6: 'Yes, I would love to go to Switzerland (Suisa) to learn about international law and mediation.',
      7: 'Working as a law teacher in academia and conducting legal research.',
      8: 'Yes, Music, as a creative passion alongside my legal studies.'
    }
  },
  // INTERNATIONAL BUSINESS (NEGOCIOS INTERNACIONALES) - Official Real Survey Sample (8 Verified Students)
  {
    id: 'ib-1',
    name: 'Vergel Duarte Matias Santiago',
    studentCode: 'P71220261042',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'I like the focus about the business and English classes; math is my favorite subject.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'I like the focus about the business and English classes.',
      2: 'My favorite class is math.',
      3: 'My favorite thing about the campus is the green place.',
      4: 'I think I can do a lot of things in a company of communication.',
      5: 'I think maybe study more.',
      6: 'It doesn’t count.',
      7: 'I think maybe Spain.',
      8: 'In an international company.',
      9: 'No, I never see it.',
      10: 'I think I could study social communication.'
    }
  },
  {
    id: 'ib-2',
    name: 'Hernandez Nausan Paula Alejandra',
    studentCode: '1320231118',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'I really like to learn about the cultures and languages; speaking more languages is essential.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'I really like to learn about the cultures and languages.',
      2: 'My favorite class is Digital Marketing.',
      3: 'My favorite thing about the campus is Salazar.',
      4: 'I think I could do my practices in the industry about merchandising.',
      5: 'I think to be better in your career you must speak more languages.',
      6: 'I don’t like the works that they made us to do.',
      7: 'I really like to have an exchange to Spain.',
      8: 'I really want to work in an internship in customer service.',
      9: "Yes, it's cute.",
      10: 'I would like to study Marketing.'
    }
  },
  {
    id: 'ib-3',
    name: 'Chacon Ducuara Valery Julieth',
    studentCode: 'P71220262062',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'I like learning about international business and different countries; marketing is my favorite.',
    audioTime: '03:25 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'I like learning about international business and different countries.',
      2: 'My favorite is Marketing.',
      3: 'My favorite area on campus is the cafeteria.',
      4: 'In my practice I can learn about companies and get a good job.',
      5: 'I can improve my English.',
      6: "I really dislike the numbers so I think I don't like math.",
      7: 'I would like to go to Mexico or Spain.',
      8: 'I would like to work in an international company.',
      9: 'No, I never see it.',
      10: 'I think I could study gastronomy.'
    }
  },
  {
    id: 'ib-4',
    name: 'Meneses Gallardo Alisson Daniela',
    studentCode: 'P71220262073',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'I love my career because I want to travel to the world and work in a big international business.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'I love my career because I want to travel to the world.',
      2: 'I really like marketing.',
      3: 'The Buitrago building.',
      4: 'I would like to work in a business.',
      5: 'I think I could learn about more languages and be more responsible.',
      6: 'I don’t really like math.',
      7: 'I would like to go to United States.',
      8: 'In one big business in other country.',
      9: 'No, I didn’t see it.',
      10: "No, I don't think I could study another career."
    }
  },
  {
    id: 'ib-5',
    name: 'Avila Jimenez Carlos Yair',
    studentCode: '90120262001',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'International Marketing gives us the opportunity to learn how to communicate professionally globally.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I like most about International Business is the opportunity to learn about different countries.',
      2: 'My favorite class is International Marketing.',
      3: 'My favorite place is the study area or library.',
      4: 'Learn how to communicate professionally.',
      5: 'I can read more about international business or get better in English.',
      6: "I don't like having too many works at the same time.",
      7: 'I would choose Spain.',
      8: 'I would like to work for a multinational company.',
      9: 'I never seen Ugus before.',
      10: "No. I don't want to study another career."
    }
  },
  {
    id: 'ib-6',
    name: 'Castillo Guaqueta Juan Sebastian',
    studentCode: '1320232006',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'I like how my career is global; conducting market-entry and import work is my aspiration.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'I like how my career is global.',
      2: 'I think math.',
      3: 'My favorite place I think is Salazar.',
      4: 'I can conduct market-entry or import work.',
      5: 'Build certifications in global things.',
      6: 'That we have so many works.',
      7: 'Yes, I would love to go to Spain.',
      8: "I'd love to work in international market.",
      9: "Yes. I've seen it but I never get close.",
      10: 'Maybe gastronomy.'
    }
  },
  {
    id: 'ib-7',
    name: 'Torrijos Rincon Nelson Steck',
    studentCode: 'P71220261020',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Practicing English every day and learning another language allows us to manage import and export operations.',
    audioTime: '03:20 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'I like learning about different countries.',
      2: "I don't know right now, I used to like marketing.",
      3: 'My favorite area is the cafeteria.',
      4: 'I can help check import and export.',
      5: 'I can practice my English every day or learn another language.',
      6: 'Sometimes there are too many difficult rules.',
      7: "Yes, I would love to go on an exchange but I don't know where.",
      8: 'I want to work in an import/export company.',
      9: 'Yes, but I never touch it.',
      10: 'No, I love International Business.'
    }
  },
  {
    id: 'ib-8',
    name: 'Parraga Avila Esteban David',
    studentCode: 'P71220261030',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'I like learning about global things; English class and green spaces on campus are my favorites.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'I like learning about global things.',
      2: 'My favorite class is English.',
      3: 'I love the green part on campus.',
      4: 'I can answer business emails or be secretary.',
      5: 'I can practice my English every day.',
      6: 'I dislike memorizing long list of things.',
      7: 'Yes! I want to go to Australia or something in Europe.',
      8: 'I want to work as a boss in one company.',
      9: "No, I didn't see it.",
      10: 'No, I like business.'
    }
  }
];

initialStudents.push(...additionalStudents);

export const analyticalInsights = [
  {
    title: '1. Program Motivation & Favorite Subjects (Q1 & Q2)',
    description: 'In Film and Television, 63% (5 students) chose Photography as what they like most, while 37% (3 students) highlighted university spaces. In Architecture, 57% (4 students) chose Creation and design of spaces, while 43% (3 students) emphasized Usefulness, challenges and art. Top architecture subjects include Architectural Workshop (29%) and Representation and Media (29%).',
    metric: 'Film: 63% Photo · Arch: 57% Spaces',
    tag: 'Disciplinary Passion'
  },
  {
    title: '2. Spatial Attachment & Campus Experience (Q3)',
    description: '100% of Film & TV students highlighted campus green areas as their favorite space. In Architecture, 57% highlighted teamwork and sharing ideas with classmates, 29% chose the architecture studio and making models, and 14% highlighted learning new things every day.',
    metric: '100% Green Areas · 57% Studio Teamwork',
    tag: 'Campus Spatial Attachment'
  },
  {
    title: '3. Professional Projection & Employability (Q4 & Q7/Q8)',
    description: 'In Film & TV, 100% aim for internships with RCN/Caracol and 88% project working in TV/film/Netflix. In Architecture, 38% project working in architecture studios and firms, 23% in construction companies, 23% in residential/interior design, and 16% in urban planning and public spaces.',
    metric: 'Film: 100% Networks · Arch: 38% Studios',
    tag: 'Industry & Employability'
  },
  {
    title: '4. International Mobility & Campus Stewardship (Q5 & Q6)',
    description: 'International exchange targets show high global ambition: Film students target the USA/Hollywood and Mexico (75%), while Architecture students target Spain (29%), USA, Japan, Germany, Italy, and France (14% each). Stewardship focuses on classroom/furniture care (44%) and green habitat care (63%).',
    metric: 'Europe & USA Mobility · 88%+ Stewardship',
    tag: 'Internationalization & Welfare'
  },
  {
    title: '5. Engineering & Software Development Passion (Q1 & Q2)',
    description: 'In Engineering, 50% (4 students) chose Programming and software as what they like most, followed by 25% highlighting the variety of specialization branches. Top subjects are tied between Programming/Software (37.5%) and Calculus (37.5%), with software architecture and algorithms standing out.',
    metric: '50% Programming · 37.5% Calculus',
    tag: 'Computational Logic'
  },
  {
    title: '6. Tech Industry Employability & Global Mobility (Q9 & Q10)',
    description: 'In Engineering, 50% target major technology companies including Google and Cisco, while others project working in banking/financial systems or launching their own tech ventures. Target exchange destinations include Spain (38%), Germany, Mexico, Brazil, Argentina, and Chile.',
    metric: '50% Tech Giants / Google · 38% Spain Exchange',
    tag: 'Tech Industry & Global Mobility'
  },
  {
    title: '7. Hospitality Vocation, Etiquette & ESUNA Practical Labs (Q1, Q2 & Q3)',
    description: 'In Hospitality and Tourism, 50% (4 students) chose People, cultures and places as what they like most, with 50% choosing Etiquette and Table Service as their favorite subject. Favorite campus spaces are evenly divided between ESUNA specialized training facilities (37.5%) and the campus Green Zones (37.5%).',
    metric: '50% People & Cultures · 50% Etiquette Lab',
    tag: 'Hospitality & Protocol'
  },
  {
    title: '8. Global Employability & International Mobility (Q8 & Q10)',
    description: 'In Hospitality and Tourism, 50% of students project working directly abroad and 50% in luxury hotel chains, with additional aspirations in international airports (25%) and travel agencies (25%). Top study abroad destinations include Spain (37.5%), Mexico (37.5%), the USA (25%), and Canada (25%).',
    metric: '50% Work Abroad · 50% Hotel Chains · 37.5% Spain/Mexico',
    tag: 'Global Tourism & Mobility'
  },
  {
    title: '9. Culinary Arts Vocation, Bread Making & Practical Kitchens (Q1, Q2 & Q3)',
    description: 'In Gastronomy, 30% chose pastry & bread making as what they like most, alongside 30% highlighting cooking and learning techniques. Baking/bread making (30%) and Mixology/cocktails (30%) lead subject preferences. Dedicated culinary kitchens and dining areas represent 40% of favorite spaces, with barista classrooms (10%) and ESUNA spirituality offices (10%) also standing out.',
    metric: '60% Pastry & Cooking · 60% Baking & Mixology · 40% Kitchens',
    tag: 'Culinary Vocation & Labs'
  },
  {
    title: '10. International Exchanges, Mascot Ugus Encounters & Teacher Perspectives (Q7, Q8, Q9)',
    description: 'Gastronomy students aim high globally: France (20%), Spain (20%), and Mexico (20%) are top study-abroad choices, with 30% aspiring to open their own restaurant/pastry shop and 30% aiming for international hotels. 60% of students and faculty report having seen campus mascot Ugus near kitchens and parking lots. Professor Katherine Avendaño highlighted pedagogical knowledge sharing, cocktails, European mobility, and translating classroom theory into real kitchen situations.',
    metric: '60% Ugus Sightings · 60% France/Spain/Mexico Mobility · Docente Included',
    tag: 'Global Mobility & Faculty Insights'
  },
  {
    title: '11. Law Vocation, Constitutional Justice & Social Service (Q1 & Q2)',
    description: 'In Law (Derecho), 56% (5 students) chose Helping people as their primary motivation, alongside 22% passionate about courtroom debate. Constitutional Law dominated subject preferences with 56% (5 students), followed by Civil Law, Introduction to Law, General Law, and English.',
    metric: '56% Helping People · 56% Constitutional Law',
    tag: 'Legal Vocation & Human Rights'
  },
  {
    title: '12. International Legal Mobility & Public Sector Employability (Q6, Q7 & Q8)',
    description: 'Law students target Brazil (56% · 5 students), the United States (22%), Spain (11%), and Switzerland (11%). Career projections highlight governmental institutions (33%), public defense (11%), and university teaching (11%). 44% are 100% committed solely to Law, with complementary multidisciplinary interests in Psychology and Business Administration (22% each).',
    metric: '56% Brazil Exchange · 33% Government · 44% Pure Law',
    tag: 'Global Jurisprudence & Public Sector'
  }
];

export interface SurveyQuestionBreakdown {
  number: number;
  question: string;
  category: string;
  totalVotes: number;
  options: Array<{ label: string; votes: number; pct: string; color?: string }>;
}

export const lawSurveyResults: SurveyQuestionBreakdown[] = [
  {
    number: 1,
    question: 'What is the thing you like the most about your career?',
    category: 'Career Motivation & Appeal',
    totalVotes: 9,
    options: [
      { label: 'Helping people / helping another person', votes: 5, pct: '56%', color: 'bg-amber-500' },
      { label: 'Debate', votes: 2, pct: '22%', color: 'bg-blue-500' },
      { label: 'Learn', votes: 1, pct: '11%', color: 'bg-emerald-500' },
      { label: 'Time with my Friends', votes: 1, pct: '11%', color: 'bg-purple-500' }
    ]
  },
  {
    number: 2,
    question: 'What is your favorite subject?',
    category: 'Favorite Subjects & Curriculum',
    totalVotes: 9,
    options: [
      { label: 'Constitutional Law', votes: 5, pct: '56%', color: 'bg-indigo-600' },
      { label: 'Law', votes: 1, pct: '11%', color: 'bg-blue-500' },
      { label: 'Introduction to Law', votes: 1, pct: '11%', color: 'bg-teal-500' },
      { label: 'English', votes: 1, pct: '11%', color: 'bg-amber-500' },
      { label: 'Civil', votes: 1, pct: '11%', color: 'bg-rose-500' }
    ]
  },
  {
    number: 3,
    question: 'What is your favorite thing about the campus?',
    category: 'Campus Spaces & Facilities',
    totalVotes: 9,
    options: [
      { label: 'Any place', votes: 3, pct: '33%', color: 'bg-emerald-600' },
      { label: 'Fountain', votes: 2, pct: '22%', color: 'bg-cyan-500' },
      { label: 'Cafeteria', votes: 2, pct: '22%', color: 'bg-amber-500' },
      { label: 'Soccer field', votes: 1, pct: '11%', color: 'bg-lime-600' },
      { label: 'Esuna', votes: 1, pct: '11%', color: 'bg-violet-500' }
    ]
  },
  {
    number: 4,
    question: 'What can you do in your practices?',
    category: 'Legal Practices & Consultorios',
    totalVotes: 9,
    options: [
      { label: 'Help people', votes: 3, pct: '33%', color: 'bg-amber-500' },
      { label: 'Choose different companies and talk to other people', votes: 2, pct: '22%', color: 'bg-blue-500' },
      { label: 'Learn about the law in real situations', votes: 1, pct: '11%', color: 'bg-emerald-500' },
      { label: 'Learn how to handle the stress of debates', votes: 1, pct: '11%', color: 'bg-rose-500' },
      { label: 'Prepared activities', votes: 1, pct: '11%', color: 'bg-indigo-500' },
      { label: 'I don’t know', votes: 1, pct: '11%', color: 'bg-slate-400' }
    ]
  },
  {
    number: 5,
    question: 'What could you do to get better in your career?',
    category: 'Skills Improvement & Discipline',
    totalVotes: 9,
    options: [
      { label: 'Read more about my career', votes: 3, pct: '33%', color: 'bg-indigo-600' },
      { label: 'Practice communication', votes: 2, pct: '22%', color: 'bg-blue-500' },
      { label: 'Be disciplined', votes: 1, pct: '11%', color: 'bg-emerald-500' },
      { label: 'To get more experience with people', votes: 1, pct: '11%', color: 'bg-amber-500' },
      { label: 'I don’t know', votes: 1, pct: '11%', color: 'bg-slate-400' }
    ]
  },
  {
    number: 6,
    question: 'Would you like to go on a school exchange? Where?',
    category: 'International Academic Exchange',
    totalVotes: 9,
    options: [
      { label: 'Brazil', votes: 5, pct: '56%', color: 'bg-emerald-600' },
      { label: 'USA', votes: 2, pct: '22%', color: 'bg-blue-600' },
      { label: 'Spain', votes: 1, pct: '11%', color: 'bg-amber-500' },
      { label: 'Suisa (Switzerland)', votes: 1, pct: '11%', color: 'bg-red-500' }
    ]
  },
  {
    number: 7,
    question: 'Where do you think you could work after graduating?',
    category: 'Employability & Projections',
    totalVotes: 9,
    options: [
      { label: "I don't know, depends on my major", votes: 4, pct: '44%', color: 'bg-slate-500' },
      { label: 'Governmental institutions', votes: 3, pct: '33%', color: 'bg-indigo-600' },
      { label: 'Public lawyer', votes: 1, pct: '11%', color: 'bg-emerald-600' },
      { label: 'Law teacher', votes: 1, pct: '11%', color: 'bg-amber-600' }
    ]
  },
  {
    number: 8,
    question: 'Do you think you can study another career? Which?',
    category: 'Multidisciplinary Vocations',
    totalVotes: 9,
    options: [
      { label: 'No, I love my career', votes: 4, pct: '44%', color: 'bg-amber-500' },
      { label: 'Psychology', votes: 2, pct: '22%', color: 'bg-purple-500' },
      { label: 'Business Administration', votes: 2, pct: '22%', color: 'bg-blue-500' },
      { label: 'Music', votes: 1, pct: '11%', color: 'bg-rose-500' }
    ]
  }
];

export const internationalBusinessSurveyResults: SurveyQuestionBreakdown[] = [
  {
    number: 1,
    question: 'What do you like most about your career?',
    category: 'Program Appeal & Global Motivation',
    totalVotes: 8,
    options: [
      { label: 'Learning about different countries & global scope', votes: 4, pct: '50%', color: 'bg-emerald-600' },
      { label: 'Languages, cultures & English focus', votes: 2, pct: '25%', color: 'bg-blue-600' },
      { label: 'Business focus & global commerce', votes: 1, pct: '13%', color: 'bg-amber-500' },
      { label: 'Traveling the world', votes: 1, pct: '13%', color: 'bg-purple-500' }
    ]
  },
  {
    number: 2,
    question: 'What is your favorite class/subject?',
    category: 'Favorite Subjects & Curriculum',
    totalVotes: 8,
    options: [
      { label: 'Marketing (General, Digital & International)', votes: 4, pct: '50%', color: 'bg-indigo-600' },
      { label: 'Mathematics', votes: 2, pct: '25%', color: 'bg-blue-500' },
      { label: 'English', votes: 1, pct: '13%', color: 'bg-amber-500' },
      { label: 'Undecided / Former marketing', votes: 1, pct: '13%', color: 'bg-slate-400' }
    ]
  },
  {
    number: 3,
    question: 'What is your favorite thing about the campus?',
    category: 'Campus Spaces & Facilities',
    totalVotes: 8,
    options: [
      { label: 'Green areas & campus gardens', votes: 2, pct: '25%', color: 'bg-emerald-600' },
      { label: 'Salazar building', votes: 2, pct: '25%', color: 'bg-amber-500' },
      { label: 'Cafeteria', votes: 2, pct: '25%', color: 'bg-cyan-500' },
      { label: 'Study area / Library', votes: 1, pct: '13%', color: 'bg-indigo-500' },
      { label: 'Buitrago building', votes: 1, pct: '13%', color: 'bg-violet-500' }
    ]
  },
  {
    number: 4,
    question: 'What can you do in your practices?',
    category: 'Internships & Professional Practicum',
    totalVotes: 8,
    options: [
      { label: 'Import/export & market-entry operations', votes: 2, pct: '25%', color: 'bg-blue-600' },
      { label: 'Corporate communication & administration', votes: 2, pct: '25%', color: 'bg-emerald-600' },
      { label: 'Learn about corporate operations & companies', votes: 2, pct: '25%', color: 'bg-purple-500' },
      { label: 'Merchandising & commercial industry', votes: 1, pct: '13%', color: 'bg-amber-500' },
      { label: 'Business management', votes: 1, pct: '13%', color: 'bg-rose-500' }
    ]
  },
  {
    number: 5,
    question: 'What could you do to get better in your career?',
    category: 'Skills Improvement & Languages',
    totalVotes: 8,
    options: [
      { label: 'Practice English daily & learn more languages', votes: 5, pct: '63%', color: 'bg-emerald-600' },
      { label: 'Study more & read international business literature', votes: 2, pct: '25%', color: 'bg-indigo-600' },
      { label: 'Build certifications in global commerce', votes: 1, pct: '13%', color: 'bg-amber-500' }
    ]
  },
  {
    number: 6,
    question: 'What do you dislike about your career?',
    category: 'Academic Dislikes & Challenges',
    totalVotes: 8,
    options: [
      { label: 'Excessive homework & simultaneous workload', votes: 2, pct: '25%', color: 'bg-rose-500' },
      { label: 'Mathematics, numbers & quantitative classes', votes: 2, pct: '25%', color: 'bg-amber-600' },
      { label: 'Complex regulations & memorizing long lists', votes: 2, pct: '25%', color: 'bg-blue-500' },
      { label: 'Specific assigned works', votes: 1, pct: '13%', color: 'bg-violet-500' },
      { label: 'No complaints / Does not count', votes: 1, pct: '13%', color: 'bg-slate-400' }
    ]
  },
  {
    number: 7,
    question: 'Would you like to go on a school exchange? Where?',
    category: 'International Academic Mobility',
    totalVotes: 8,
    options: [
      { label: 'Spain', votes: 5, pct: '63%', color: 'bg-emerald-600' },
      { label: 'United States', votes: 1, pct: '13%', color: 'bg-blue-600' },
      { label: 'Australia or Europe', votes: 1, pct: '13%', color: 'bg-amber-500' },
      { label: 'Undecided exchange destination', votes: 1, pct: '13%', color: 'bg-slate-400' }
    ]
  },
  {
    number: 8,
    question: 'Where do you think you could work after graduating?',
    category: 'Career Practice & Employability',
    totalVotes: 8,
    options: [
      { label: 'Multinational / International company abroad', votes: 4, pct: '50%', color: 'bg-indigo-600' },
      { label: 'Import/export company & international market', votes: 2, pct: '25%', color: 'bg-emerald-600' },
      { label: 'Company leadership / Corporate boss', votes: 1, pct: '13%', color: 'bg-amber-500' },
      { label: 'Customer service internship', votes: 1, pct: '13%', color: 'bg-cyan-500' }
    ]
  },
  {
    number: 9,
    question: 'Have you ever seen Ugus?',
    category: 'Campus Mascot Ugus Visibility',
    totalVotes: 8,
    options: [
      { label: 'No, never seen Ugus on campus', votes: 5, pct: '63%', color: 'bg-slate-500' },
      { label: 'Yes, have seen Ugus on campus', votes: 3, pct: '37%', color: 'bg-amber-500' }
    ]
  },
  {
    number: 10,
    question: 'Do you think you can study another career? Which?',
    category: 'Multidisciplinary Interests & Degrees',
    totalVotes: 8,
    options: [
      { label: 'No, love International Business', votes: 4, pct: '50%', color: 'bg-emerald-600' },
      { label: 'Gastronomy', votes: 2, pct: '25%', color: 'bg-amber-500' },
      { label: 'Marketing', votes: 1, pct: '13%', color: 'bg-indigo-500' },
      { label: 'Social Communication', votes: 1, pct: '13%', color: 'bg-blue-500' }
    ]
  }
];

export interface CareerProgramData {
  researchTeam?: string;
  sourceNote?: string;
  sharedAnswers?: Record<number, string>;
  careerName: string;
  shortName: string;
  faculty: string;
  campus: string;
  video: {
    isPlaceholder?: boolean;
    title: string;
    embedUrl: string;
    externalUrl: string;
    description: string;
    researchTeam: string;
  } | null;
  highlights: {
    title: string;
    cards: Array<{ label: string; primary: string; secondary: string; highlightColor?: string }>;
  } | null;
  surveyBreakdown?: SurveyQuestionBreakdown[];
  questions: Question[];
}

export const careerProgramsRegistry: Record<string, CareerProgramData> = {
  ...additionalPrograms,
  'Film and Television (Cine y Televisión)': {
    careerName: 'Film and Television (Cine y Televisión)',
    shortName: 'Film and Television',
    faculty: 'Faculty of Art, Communication and Culture',
    campus: 'Tagaste Campus',
    video: {
      title: 'Film & Television · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/FZe-EKnNCo4',
      externalUrl: 'https://www.youtube.com/watch?v=FZe-EKnNCo4',
      description: 'Institutional video presentation of the Film & Television academic program at Agustiniana University (Tagaste Campus), showcasing the television studios, editing suites, audio labs, and photography facilities evaluated during the student interviews.',
      researchTeam: 'Alejandra Cruz & Melany Casas'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'Photography (63%)', secondary: 'Spaces (37%)' },
        { label: 'Q3. Favorite Space:', primary: 'Green area (100%)', secondary: '8 of 8 students', highlightColor: 'text-emerald-700' },
        { label: 'Q4. Internships:', primary: 'RCN & Caracol TV', secondary: '100% agreement' },
        { label: 'Q8. Practice Career:', primary: 'TV, Film & Netflix (88%)', secondary: 'Canada (12%)' }
      ]
    },
    questions: initialQuestions
  },
  'Architecture (Arquitectura)': {
    careerName: 'Architecture (Arquitectura)',
    shortName: 'Architecture',
    faculty: 'Faculty of Art, Communication and Culture',
    campus: 'Tagaste Campus',
    video: {
      title: 'Architecture (Arquitectura) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/b4peewNbSaA',
      externalUrl: 'https://youtu.be/b4peewNbSaA?si=BXec7k2QICBWOLw2',
      description: 'Institutional presentation video of the Architecture (Arquitectura) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), highlighting spatial design workshops, scale model construction studios, representation media labs, and urban projects evaluated during student interviews.',
      researchTeam: 'María Fernanda Rodríguez & Helen Sofía Molina'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'Creation of spaces (57%)', secondary: 'Challenges & art (43%)' },
        { label: 'Q2. Top Subjects:', primary: 'Workshop & Rep. (29% ea)', secondary: 'Urban & Tech (14%)' },
        { label: 'Q3. Favorite Part:', primary: 'Teamwork & Ideas (57%)', secondary: 'Studio & models (29%)', highlightColor: 'text-emerald-700' },
        { label: 'Q7. Employability:', primary: 'Studios & firms (38%)', secondary: 'Construction & design (23%)' }
      ]
    },
    questions: architectureQuestions
  },
  'Engineering (Ingenierías)': {
    careerName: 'Engineering (Ingenierías)',
    shortName: 'Engineering',
    faculty: 'Faculty of Engineering',
    campus: 'Tagaste Campus',
    video: {
      title: 'Engineering (Ingenierías / Software) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/BlmMsVKWs0Q',
      externalUrl: 'https://www.youtube.com/watch?v=BlmMsVKWs0Q',
      description: 'Institutional presentation video of the Engineering (Ingenierías / Software) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), highlighting computer science laboratories, software architecture, algorithm training, electronics workshops, and student perspectives on technology and campus life.',
      researchTeam: 'Jorge Bustos & Andres Parra'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'Programming & Software (50%)', secondary: 'Variety of fields (25%)' },
        { label: 'Q2. Top Subjects:', primary: 'Programming & Calculus (37.5% ea)', secondary: 'Intro & Green areas (12.5%)' },
        { label: 'Q8. Ugus Mascot Care:', primary: 'Keep distance & No flash (50%)', secondary: 'No processed food (25%)', highlightColor: 'text-emerald-700' },
        { label: 'Q10. Employability:', primary: 'Tech Companies & Google (50%)', secondary: 'Software & Banking (25%)' }
      ]
    },
    questions: engineeringQuestions
  },
  'Hospitality and Tourism (Hotelería y Turismo)': {
    careerName: 'Hospitality and Tourism (Hotelería y Turismo)',
    shortName: 'Hospitality and Tourism',
    faculty: 'Faculty of Economic and Administrative Sciences (ESUNA)',
    campus: 'Tagaste Campus',
    video: {
      title: 'Hospitality and Tourism (Hotelería y Turismo) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/Pfmh4pQMmt4',
      externalUrl: 'https://youtu.be/Pfmh4pQMmt4?feature=shared',
      description: 'Institutional presentation video of the Hospitality and Tourism (Hotelería y Turismo) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus & ESUNA), showcasing practical hotel training laboratories, table service dining halls, culinary safety spaces, reception suites, and tourism management workshops evaluated during student fieldwork.',
      researchTeam: 'Valerin Sophia Conde Hernández & Tania Sarah Candela Ruiz'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'People & Cultures (50%)', secondary: 'Fun Electives (25%)' },
        { label: 'Q2. Top Subject:', primary: 'Etiquette & Table Service (50%)', secondary: 'Theory & Mgmt (12.5%)' },
        { label: 'Q3. Favorite Space:', primary: 'ESUNA & Green Zones (37.5% ea)', secondary: '75% combined', highlightColor: 'text-emerald-700' },
        { label: 'Q10. Future Workplace:', primary: 'Hotels & Abroad (50% ea)', secondary: 'Airports & Agencies (25%)' }
      ]
    },
    questions: tourismQuestions
  },
  'Gastronomy (Gastronomía)': {
    careerName: 'Gastronomy (Gastronomía)',
    shortName: 'Gastronomy',
    faculty: 'Faculty of Economic and Administrative Sciences',
    campus: 'Tagaste Campus',
    video: {
      title: 'Gastronomy (Gastronomía) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/n0QLKB5ekpU',
      externalUrl: 'https://www.youtube.com/watch?v=n0QLKB5ekpU',
      description: 'Institutional presentation video of the Gastronomy (Gastronomía) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), featuring professional baking kitchens, barista classrooms, mixology cocktail stations, dining room service facilities, and interviews with 9 students and Professor Katherine Avendaño.',
      researchTeam: 'Ana Paula Manrique Mijares & Carol Tatiana Caro Montaño'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (9 Students + 1 Professor Interviewed):',
      cards: [
        { label: 'Q1. Top Appeal:', primary: 'Pastry & Cooking (60%)', secondary: 'Techniques & Creativity' },
        { label: 'Q2. Top Subjects:', primary: 'Baking & Mixology (60%)', secondary: 'Barista & Cuisine (20%)' },
        { label: 'Q9. Ugus Mascot:', primary: '60% Have Seen Ugus', secondary: 'Around kitchens & lots', highlightColor: 'text-emerald-700' },
        { label: 'Faculty Insight:', primary: 'Prof. Katherine Avendaño', secondary: 'Cocktails, wines & service', highlightColor: 'text-amber-700' }
      ]
    },
    questions: gastronomyQuestions
  },
  'Law (Derecho)': {
    careerName: 'Law (Derecho)',
    shortName: 'Law',
    faculty: 'Faculty of Law and Political Sciences',
    campus: 'Tagaste Campus',
    video: {
      title: 'Law (Derecho) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/IT4Kym3cQN4',
      externalUrl: 'https://youtu.be/IT4Kym3cQN4?si=A7U1GhNFXwKeOXuE',
      description: 'Institutional presentation video of the Law (Derecho) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), highlighting mock trial moot courts, constitutional law debates, legal clinics (Consultorio Jurídico), and ethical justice education evaluated during student interviews.',
      researchTeam: 'Anamaria Rocha y Sandra Lorena Salazar'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (9 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Top Appeal:', primary: 'Helping People (56%)', secondary: 'Debates & Learning (33%)' },
        { label: 'Q2. Top Subject:', primary: 'Constitutional Law (56%)', secondary: 'Civil, Intro & English (44%)' },
        { label: 'Q6. Study Abroad:', primary: 'Brazil (56%)', secondary: 'USA (22%), Spain & Switzerland', highlightColor: 'text-emerald-700' },
        { label: 'Q8. Career Loyalty:', primary: '100% Dedicated to Law (44%)', secondary: 'Psychology & Business (44%)', highlightColor: 'text-amber-700' }
      ]
    },
    surveyBreakdown: lawSurveyResults,
    questions: lawQuestions
  },
  'International Business (Negocios Internacionales)': {
    careerName: 'International Business (Negocios Internacionales)',
    shortName: 'International Business',
    faculty: 'Faculty of Economic and Administrative Sciences',
    campus: 'Tagaste Campus',
    video: {
      title: 'International Business (Negocios Internacionales) · Fieldwork Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/liUb5kThkdY',
      externalUrl: 'https://youtu.be/liUb5kThkdY',
      description: 'Institutional fieldwork and academic presentation video of the International Business (Negocios Internacionales) program at Agustiniana University (Tagaste Campus), highlighting student interviews on international commerce, marketing, foreign languages, and global career pathways.',
      researchTeam: 'Isaac Pinilla, Carlos Marin'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Core Appeal:', primary: 'Global Scope & Trade (50%)', secondary: 'Languages & Cultures (38%)' },
        { label: 'Q2. Top Subject:', primary: 'Marketing (50%)', secondary: 'Math (25%), English (13%)' },
        { label: 'Q5. Improvement:', primary: 'English & Languages (63%)', secondary: '5 of 8 students focus', highlightColor: 'text-emerald-700' },
        { label: 'Q7. Study Abroad:', primary: 'Spain (63%)', secondary: 'USA, Europe & Australia (37%)', highlightColor: 'text-amber-700' }
      ]
    },
    surveyBreakdown: internationalBusinessSurveyResults,
    questions: internationalBusinessQuestions
  }
};
