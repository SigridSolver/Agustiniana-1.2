import React, { useState } from 'react';
import { InterviewedStudent, Question } from '../types';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Globe2, 
  GraduationCap, 
  Dog, 
  AlertCircle, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Award, 
  Users, 
  Tv, 
  Camera, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Clapperboard,
  Compass,
  Cpu,
  Code2,
  Heart,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  ChefHat,
  Scale
} from 'lucide-react';

interface AnalyticsViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  onSelectCareer?: (career: string) => void;
  onSelectStudent?: (studentId: string) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  students,
  questions,
  onSelectCareer,
  onSelectStudent
}) => {
  const [selectedCohort, setSelectedCohort] = useState<'all' | 'film' | 'architecture' | 'engineering' | 'tourism' | 'gastronomy' | 'law' | 'business'>('all');
  const [activeChartTab, setActiveChartTab] = useState<'all' | 'language' | 'academics' | 'internships' | 'mobility'>('all');
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

  const filteredStudents = students.filter((s) => {
    if (selectedCohort === 'film') return s.career.includes('Cine');
    if (selectedCohort === 'architecture') return s.career.includes('Arquitectura');
    if (selectedCohort === 'engineering') return s.career.includes('Ingenier');
    if (selectedCohort === 'tourism') return s.career.includes('Hotelería') || s.career.includes('Hospitality') || s.career.includes('Turismo');
    if (selectedCohort === 'gastronomy') return s.career.includes('Gastronom');
    if (selectedCohort === 'law') return s.career.includes('Derecho') || s.career.includes('Law');
    if (selectedCohort === 'business') return s.career.includes('Negocios') || s.career.includes('Business');
    return true;
  });

  // 1. Calculate English Level Counts dynamically
  const levelCounts: Record<string, number> = {
    'B2': 0,
    'B1': 0,
    'A2': 0,
    'A1': 0
  };

  filteredStudents.forEach((s) => {
    if (s.perceivedEnglishLevel.startsWith('B2')) levelCounts['B2']++;
    else if (s.perceivedEnglishLevel.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel.startsWith('A1')) levelCounts['A1']++;
  });

  const totalStudents = filteredStudents.length || 1;
  const b2Percent = Math.round((levelCounts['B2'] / totalStudents) * 100);
  const b1Percent = Math.round((levelCounts['B1'] / totalStudents) * 100);
  const a2Percent = Math.round((levelCounts['A2'] / totalStudents) * 100);
  const a1Percent = Math.round((levelCounts['A1'] / totalStudents) * 100);

  // 2. Q1 Data: Program Appeal
  const q1Data = [
    { label: 'Photography (Framing, light & camera technique)', count: 5, pct: 63, color: 'bg-violet-600', students: 'Eily Garzón, José Menez, Juan Martínez, Thomas Marulanda, Nicolás Viñas' },
    { label: 'University Spaces (Studios, editing suites & gear)', count: 3, pct: 37, color: 'bg-amber-500', students: 'Ana María López, John Sebastian Castro, Samuel Pacheco' }
  ];

  // 3. Q2 Data: Favorite Subjects
  const q2Data = [
    { subject: 'Photoshop', count: 3, pct: 38, color: 'bg-blue-600', desc: 'Digital color grading, matte art, image manipulation' },
    { subject: 'Photography', count: 3, pct: 38, color: 'bg-purple-600', desc: 'Composition, studio flash, natural light on campus' },
    { subject: 'Narrative Workshop', count: 2, pct: 25, color: 'bg-emerald-600', desc: 'Screenplay structure, dialogue, dramatic tension' }
  ];

  // 4. Q4 Data: Internships / Practicums
  const q4Data = [
    { network: 'Both RCN and Caracol TV together', count: 4, pct: 50, color: 'bg-amber-600', focus: 'Multi-camera studio filming, live broadcast and production' },
    { network: 'RCN and Caracol TV (Audiovisual crews)', count: 4, pct: 50, color: 'bg-indigo-600', focus: 'Floor assistance, camera operations, video editing workflows' }
  ];

  // 5. Q5 Data: Career Improvement
  const q5Data = [
    { strategy: 'Study and prepare more (Theory & technical reading)', count: 7, pct: 88, color: 'bg-emerald-600' },
    { strategy: 'Direct hands-on shooting & independent production', count: 1, pct: 12, color: 'bg-amber-600' }
  ];

  // 6. Q6 Data: Hugos Campus Pet Care
  const q6Data = [
    { action: 'Take care of its habitat & keep green areas clean', count: 5, pct: 63, color: 'bg-emerald-600', desc: 'Fresh water bowls, no litter or toxic human food' },
    { action: 'Haven’t encountered him yet on class commute', count: 3, pct: 37, color: 'bg-slate-500', desc: 'Respect animal life when crossing campus pathways' }
  ];

  // 7. Q7 Data: Student Exchange Destinations
  const q7Data = [
    { destination: 'USA / Hollywood', count: 4, pct: 50, flag: '🇺🇸', color: 'bg-blue-600', note: 'California studios, film directing & cinematography' },
    { destination: 'Mexico', count: 2, pct: 25, flag: '🇲🇽', color: 'bg-emerald-600', note: 'Cinematographic heritage, documentary schools & production houses' },
    { destination: 'Remain in Colombia', count: 2, pct: 25, flag: '🇨🇴', color: 'bg-amber-600', note: 'Focus on national stories and local short films first' }
  ];

  // 8. Q8 Data: Practice Career
  const q8Data = [
    { target: 'Television, Film & Streaming (Netflix)', count: 7, pct: 88, color: 'bg-rose-600', desc: 'National television networks, cinema festivals, global series' },
    { target: 'Canada (VFX & Digital Animation Studios)', count: 1, pct: 12, color: 'bg-cyan-600', desc: 'International visual effects and digital post-production' }
  ];

  // Architecture Survey Datasets (8 verified students)
  const archQ1Data = [
    { label: 'Creation and design of spaces', count: 4, pct: 57, color: 'bg-emerald-600', students: 'Alejandra Olaya, Andrés Fernández, Angie Rueda, Sara Vargas' },
    { label: 'Usefulness, challenges and art', count: 3, pct: 43, color: 'bg-indigo-600', students: 'Anakarina Rojas, Sara Muñoz, Danna Monroy' }
  ];

  const archQ2Data = [
    { subject: 'Architectural Workshop (Taller de Arquitectura)', count: 2, pct: 29, color: 'bg-emerald-600', desc: 'Spatial concepts, models and project critiques' },
    { subject: 'Representation and Media (Representación y Medios)', count: 2, pct: 29, color: 'bg-blue-600', desc: 'Digital drawings, axonometrics and 3D visualization' },
    { subject: 'Urban Project (Proyecto Urbano)', count: 1, pct: 14, color: 'bg-purple-600', desc: 'City density, public spaces and master planning' },
    { subject: 'Theory and History (Teoría e Historia)', count: 1, pct: 14, color: 'bg-amber-600', desc: 'Architectural evolution across civilization' },
    { subject: 'Technological Project (Proyecto Tecnológico)', count: 1, pct: 14, color: 'bg-cyan-600', desc: 'Construction materials and bioclimatic design' }
  ];

  const archQ3Data = [
    { space: 'Teamwork / sharing ideas with classmates', count: 4, pct: 57, color: 'bg-emerald-600', desc: 'Camaraderie, studio collaboration and mutual critique' },
    { space: 'Architecture study / studio and making models', count: 2, pct: 29, color: 'bg-blue-600', desc: 'Dedicated workshops and physical scale model making' },
    { space: 'Learning new things every day', count: 1, pct: 14, color: 'bg-amber-600', desc: 'Daily intellectual growth and technical discoveries' }
  ];

  const archQ4Data = [
    { strategy: 'Improve organization, time management & on-time projects', count: 3, pct: 37.5, color: 'bg-blue-600' },
    { strategy: 'Practice architectural drawing and techniques', count: 3, pct: 37.5, color: 'bg-emerald-600' },
    { strategy: 'Study more, read about architecture & pay attention to details', count: 2, pct: 25, color: 'bg-amber-600' }
  ];

  const archQ5Data = [
    { action: 'Care for classrooms, furniture, facilities & responsible materials', count: 4, pct: 44, color: 'bg-emerald-600' },
    { action: 'Keep spaces clean and tidy / don’t leave trash', count: 3, pct: 33, color: 'bg-blue-600' },
    { action: 'Respect other students and be responsible with resources', count: 2, pct: 23, color: 'bg-purple-600' }
  ];

  const archQ6Data = [
    { destination: 'Spain (Madrid & Barcelona)', count: 2, pct: 29, flag: '🇪🇸', color: 'bg-red-600', note: 'European typologies, urban preservation & contemporary architecture' },
    { destination: 'United States (Chicago & NYC)', count: 1, pct: 14, flag: '🇺🇸', color: 'bg-blue-600', note: 'High-rise engineering & sustainable commercial architecture' },
    { destination: 'Japan (Tokyo & Kyoto)', count: 1, pct: 14, flag: '🇯🇵', color: 'bg-rose-600', note: 'Minimalist architecture, seismic wood & harmony with nature' },
    { destination: 'Germany (Berlin & Bauhaus)', count: 1, pct: 14, flag: '🇩🇪', color: 'bg-amber-600', note: 'Bauhaus tradition, ecological building & urban regeneration' },
    { destination: 'Italy (Rome & Florence)', count: 1, pct: 14, flag: '🇮🇹', color: 'bg-emerald-600', note: 'Classical Renaissance architecture & historic restoration' },
    { destination: 'France (Paris)', count: 1, pct: 14, flag: '🇫🇷', color: 'bg-indigo-600', note: 'Parisian landmarks, bioclimatic projects & museum spaces' }
  ];

  const archQ7Data = [
    { target: 'Architecture studios / architecture firms', count: 5, pct: 38, color: 'bg-emerald-600', desc: 'Bespoke design firms, public and residential projects' },
    { target: 'Construction companies', count: 3, pct: 23, color: 'bg-blue-600', desc: 'BIM modeling, structural supervision and on-site building' },
    { target: 'Residential, commercial or interior design', count: 3, pct: 23, color: 'bg-purple-600', desc: 'Custom residential spaces, retail architecture, lighting' },
    { target: 'Urban planning / public spaces design', count: 2, pct: 16, color: 'bg-amber-600', desc: 'City planning, municipal parks and infrastructure projects' }
  ];

  // Engineering Survey Datasets (8 verified students)
  const engQ2Data = [
    { label: 'Programming / software development', count: 4, pct: 50, color: 'bg-blue-600', students: 'David Mesa, Sebastián Molano, Diego Alian, Juan Bautista' },
    { label: 'Variety of specialization fields', count: 2, pct: 25, color: 'bg-emerald-600', students: 'Mateo Camacho, Alexis' },
    { label: 'Mechanics and electronics', count: 1, pct: 12.5, color: 'bg-amber-600', students: 'Adrian Ballares' },
    { label: 'Flexibility in problem solving', count: 1, pct: 12.5, color: 'bg-purple-600', students: 'Santiago Torres' }
  ];

  const engQ3Data = [
    { subject: 'Programming & Software Architecture', count: 3, pct: 37.5, color: 'bg-blue-600', desc: 'Software architecture, algorithms, coding logic' },
    { subject: 'Calculus (Integral & Differential)', count: 3, pct: 37.5, color: 'bg-indigo-600', desc: 'Integral calculus, differential calculus, mathematical modeling' },
    { subject: 'Introduction to Engineering', count: 1, pct: 12.5, color: 'bg-emerald-600', desc: 'Foundations of engineering methods and ethics' },
    { subject: 'Campus Green Areas (Environment)', count: 1, pct: 12.5, color: 'bg-teal-600', desc: 'Open campus green areas supporting study sessions' }
  ];

  const engQ4Data = [
    { part: 'Ugus himself (The tail / El saco)', count: 2, pct: 25, color: 'bg-amber-600', desc: 'University mascot physical attributes and affection' },
    { part: 'Library (Quiet study & books)', count: 2, pct: 25, color: 'bg-blue-600', desc: 'Quiet workspace and academic documentation' },
    { part: 'Campus Spaces (Green areas / Courts)', count: 2, pct: 25, color: 'bg-emerald-600', desc: 'Recreational courts and scenic green paths' },
    { part: 'University Dynamics & Activities', count: 1, pct: 12.5, color: 'bg-purple-600', desc: 'Institutional events and integration dynamics' },
    { part: 'Off-topic (Exams / midterms feedback)', count: 1, pct: 12.5, color: 'bg-slate-500', desc: 'Exam period impressions' }
  ];

  const engQ5Data = [
    { dislike: 'Nothing / Everything is fine', count: 3, pct: 37.5, color: 'bg-emerald-600' },
    { dislike: 'Class schedules & sleeping late', count: 2, pct: 25, color: 'bg-amber-600' },
    { dislike: 'Accumulated project workload on same day', count: 1, pct: 12.5, color: 'bg-rose-600' },
    { dislike: 'Specific algorithms class difficulty', count: 1, pct: 12.5, color: 'bg-purple-600' },
    { dislike: 'Other / sports timing', count: 1, pct: 12.5, color: 'bg-slate-500' }
  ];

  const engQ6Data = [
    { activity: 'Cultural experience & learning customs', count: 3, pct: 37.5, color: 'bg-blue-600' },
    { activity: 'Socializing & walking on campus with peers', count: 2, pct: 25, color: 'bg-emerald-600' },
    { activity: 'Studying and playing games together', count: 2, pct: 25, color: 'bg-purple-600' },
    { activity: 'Rest & relaxation', count: 1, pct: 12.5, color: 'bg-amber-600' }
  ];

  const engQ7Data = [
    { strategy: 'Self-improvement (Discipline, coding more circuits & projects)', count: 3, pct: 37.5, color: 'bg-blue-600' },
    { strategy: 'Curriculum update (Modern tech & class rigor)', count: 3, pct: 37.5, color: 'bg-emerald-600' },
    { strategy: 'Everything is well-done / satisfied', count: 1, pct: 12.5, color: 'bg-teal-600' },
    { strategy: 'Adjust class hours', count: 1, pct: 12.5, color: 'bg-slate-500' }
  ];

  const engQ9Data = [
    { action: 'Keep distance / do not stress him', count: 4, pct: 36, color: 'bg-blue-600', desc: 'Observe without cornering or stressing the campus fauna' },
    { action: 'Proper trash disposal & clean green areas', count: 2, pct: 18, color: 'bg-emerald-600', desc: 'Use proper waste bins to avoid foraging' },
    { action: 'Do not feed processed human food', count: 2, pct: 18, color: 'bg-amber-600', desc: 'Preserve natural diet and prevent health issues' },
    { action: 'Do not use camera flash', count: 2, pct: 18, color: 'bg-purple-600', desc: 'Avoid startling with phone flash photography' },
    { action: 'Practice institutional respect & values', count: 1, pct: 10, color: 'bg-rose-600', desc: 'Uphold Agustiniana campus wildlife stewardship' }
  ];

  const engQ10Data = [
    { destination: 'Spain (Madrid & Barcelona Tech)', count: 3, pct: 33, flag: '🇪🇸', color: 'bg-red-600', note: 'Top engineering & computer science university faculties' },
    { destination: 'Germany (Tech Hubs)', count: 1, pct: 11, flag: '🇩🇪', color: 'bg-amber-600', note: 'Industry 4.0, mechatronics & precision software' },
    { destination: 'Mexico (Tech Faculties)', count: 1, pct: 11, flag: '🇲🇽', color: 'bg-emerald-600', note: 'UNAM & Monterrey Tech software exchange networks' },
    { destination: 'Brazil or Argentina', count: 1, pct: 11, flag: '🇧🇷', color: 'bg-yellow-600', note: 'Latin American computational research institutes' },
    { destination: 'Chile', count: 1, pct: 11, flag: '🇨🇱', color: 'bg-blue-600', note: 'Santiago tech ecosystem and telecommunications' },
    { destination: 'Technology Innovation Center', count: 1, pct: 11, flag: '🌐', color: 'bg-indigo-600', note: 'Applied research laboratories and incubation centers' },
    { destination: 'Not for now / local focus', count: 1, pct: 11, flag: '🇨🇴', color: 'bg-slate-500', note: 'Consolidating undergraduate engineering degree in Bogotá' }
  ];

  const engQ11Data = [
    { target: 'Global Tech Companies (Google, Cisco, Software firms)', count: 4, pct: 44, color: 'bg-blue-600', desc: 'Digital platforms, cloud infrastructure, AI applications' },
    { target: 'Any Industrial Sector', count: 2, pct: 22, color: 'bg-emerald-600', desc: 'Manufacturing, logistics and enterprise digitization' },
    { target: 'Banking & Financial Sector', count: 1, pct: 11, color: 'bg-indigo-600', desc: 'Transactional security, robust databases, fintech systems' },
    { target: 'Own Technology Startup / Venture', count: 1, pct: 11, color: 'bg-amber-600', desc: 'Entrepreneurship in custom software development' },
    { target: 'European Tech Market', count: 1, pct: 11, color: 'bg-purple-600', desc: 'International software contracts and European remote roles' }
  ];

  const engQ12Data = [
    { career: 'Mechatronics Engineering', count: 2, pct: 25, color: 'bg-blue-600' },
    { career: 'Software Development Specialized', count: 2, pct: 25, color: 'bg-emerald-600' },
    { career: 'Telecommunications Engineering', count: 1, pct: 12.5, color: 'bg-indigo-600' },
    { career: 'Chemical Engineering', count: 1, pct: 12.5, color: 'bg-amber-600' },
    { career: 'Film & Television', count: 1, pct: 12.5, color: 'bg-purple-600' },
    { career: 'Languages / English', count: 1, pct: 12.5, color: 'bg-teal-600' }
  ];

  // Hospitality and Tourism Survey Datasets (8 verified students)
  const tourQ1Data = [
    { label: 'People, cultures & places', count: 4, pct: 50, color: 'bg-emerald-600', students: 'Juan Martín Rubio, Juan Pablo Osorio, Karen Dayana Martínez, Karen Lucía Chaguala' },
    { label: 'Elective / fun classes', count: 2, pct: 25, color: 'bg-blue-600', students: 'Juan Nicolás Lugo, Nicole Vanessa Rodríguez' },
    { label: 'Variety of classes', count: 1, pct: 12.5, color: 'bg-amber-600', students: 'Sharon Julieth López' },
    { label: 'Organize activities', count: 1, pct: 12.5, color: 'bg-purple-600', students: 'Damar Julián Gamboa' }
  ];

  const tourQ2Data = [
    { subject: 'Elective / Etiquette & Table Service', count: 4, pct: 50, color: 'bg-emerald-600', desc: 'Protocol, formal dining service, and guest reception standards' },
    { subject: 'Tourism Theory', count: 1, pct: 12.5, color: 'bg-blue-600', desc: 'Destination dynamics, heritage, and tourism foundations' },
    { subject: 'Labor Legislation', count: 1, pct: 12.5, color: 'bg-amber-600', desc: 'Hospitality labor regulations and service employment contracts' },
    { subject: 'Tourism & Hotel Management', count: 1, pct: 12.5, color: 'bg-indigo-600', desc: 'Hotel operations, revenue, and hospitality administration' },
    { subject: 'Food Safety', count: 1, pct: 12.5, color: 'bg-rose-600', desc: 'Hygiene norms, kitchen sanitation, and food handling standards' }
  ];

  const tourQ3Data = [
    { space: 'ESUNA simulation facilities & practical labs', count: 3, pct: 37.5, color: 'bg-emerald-600', desc: 'Dedicated hotel front desk, dining, and mock lab suites' },
    { space: 'Green Zone (Zonas verdes)', count: 3, pct: 37.5, color: 'bg-teal-600', desc: 'Natural campus gardens and outdoor relaxation areas' },
    { space: 'Campus & Classmates', count: 1, pct: 12.5, color: 'bg-blue-600', desc: 'Student community and collaborative friendships' },
    { space: 'Learning & Academic Experience', count: 1, pct: 12.5, color: 'bg-purple-600', desc: 'Quality teaching and faculty mentorship' }
  ];

  const tourQ4Data = [
    { activity: 'Customer service & helping people', count: 4, pct: 50, color: 'bg-emerald-600', focus: 'Guest relations, concierge assistance, and front-desk check-in' },
    { activity: 'Hotel & tourism operational activities', count: 3, pct: 37.5, color: 'bg-blue-600', focus: 'Room operations, resort logistics, and guided tour management' },
    { activity: 'Organization & administrative tasks', count: 2, pct: 25, color: 'bg-amber-600', focus: 'Booking coordination, billing, and scheduling documentation' },
    { activity: 'Study & learning on site', count: 1, pct: 12.5, color: 'bg-indigo-600', focus: 'Real-world hotel problem solving and practical insights' },
    { activity: 'Social interaction with visitors', count: 1, pct: 12.5, color: 'bg-rose-600', focus: 'Intercultural dialogue and multilingual guest communication' }
  ];

  const tourQ5Data = [
    { restriction: 'Ignore rules / Act without authorization', count: 4, pct: 50, color: 'bg-rose-600' },
    { restriction: 'Academic responsibilities neglect', count: 1, pct: 12.5, color: 'bg-amber-600' },
    { restriction: 'Sleep on shift / Go home early', count: 1, pct: 12.5, color: 'bg-blue-600' },
    { restriction: 'Unrelated / general response', count: 1, pct: 12.5, color: 'bg-slate-500' },
    { restriction: 'Don’t know / not yet familiar', count: 1, pct: 12.5, color: 'bg-slate-400' }
  ];

  const tourQ6Data = [
    { strategy: 'Study more / Academic effort & theory', count: 3, pct: 37.5, color: 'bg-emerald-600' },
    { strategy: 'Improve English & foreign language skills', count: 2, pct: 25, color: 'bg-blue-600' },
    { strategy: 'Commitment & personal responsibility', count: 2, pct: 25, color: 'bg-indigo-600' },
    { strategy: 'Professional & practical service skills', count: 1, pct: 12.5, color: 'bg-amber-600' }
  ];

  const tourQ7Data = [
    { action: 'Active listening and empathizing with others', count: 3, pct: 37.5, color: 'bg-emerald-600', desc: 'Understanding guest requirements and teammate needs' },
    { action: 'Be a good teammate & supportive colleague', count: 2, pct: 25, color: 'bg-blue-600', desc: 'Fostering cooperation during peak hotel shift hours' },
    { action: 'Be kind, warm and respectful to everyone', count: 2, pct: 25, color: 'bg-teal-600', desc: 'Maintaining cordial, welcoming hospitality standards' },
    { action: 'Guest care & personalized experience', count: 1, pct: 12.5, color: 'bg-purple-600', desc: 'Going above and beyond for visitor comfort and delight' }
  ];

  const tourQ8Data = [
    { destination: 'Spain (Tourism & Culinary Hubs)', count: 3, pct: 37.5, flag: '🇪🇸', color: 'bg-red-600', note: 'Madrid, Barcelona & Balearic luxury resort management' },
    { destination: 'Mexico (Hospitality & Heritage)', count: 3, pct: 37.5, flag: '🇲🇽', color: 'bg-emerald-600', note: 'Cancún, Riviera Maya & colonial hotel administration' },
    { destination: 'United States', count: 2, pct: 25, flag: '🇺🇸', color: 'bg-blue-600', note: 'Major international hotel chains and theme parks' },
    { destination: 'Canada', count: 2, pct: 25, flag: '🇨🇦', color: 'bg-cyan-600', note: 'Multicultural tourism, national parks and ski resort hotels' },
    { destination: 'Brazil', count: 1, pct: 12.5, flag: '🇧🇷', color: 'bg-yellow-600', note: 'South American ecotourism and coastal hospitality' },
    { destination: 'Costa Rica', count: 1, pct: 12.5, flag: '🇨🇷', color: 'bg-teal-600', note: 'Pioneering global sustainable and biodiversity ecotourism' },
    { destination: 'Puerto Rico', count: 1, pct: 12.5, flag: '🇵🇷', color: 'bg-indigo-600', note: 'Caribbean resort operations and maritime cruise hubs' },
    { destination: 'Dominican Republic', count: 1, pct: 12.5, flag: '🇩🇴', color: 'bg-amber-600', note: 'Punta Cana all-inclusive luxury resort networks' }
  ];

  const tourQ9Data = [
    { career: 'No / Dedicated 100% to Tourism', count: 3, pct: 37.5, color: 'bg-slate-600' },
    { career: 'Business Administration (Hotel Management)', count: 2, pct: 25, color: 'bg-blue-600' },
    { career: 'Marketing & Commercial Promotion', count: 1, pct: 12.5, color: 'bg-emerald-600' },
    { career: 'Languages / Foreign Languages Degree', count: 1, pct: 12.5, color: 'bg-indigo-600' },
    { career: 'Marine Biology (Coastal Ecotourism)', count: 1, pct: 12.5, color: 'bg-cyan-600' }
  ];

  const tourQ10Data = [
    { target: 'International Hotel Chains', count: 4, pct: 50, color: 'bg-emerald-600', desc: 'Front desk, food & beverage, guest relations, revenue management' },
    { target: 'Working Abroad (International Mobility)', count: 4, pct: 50, color: 'bg-blue-600', desc: 'Global resorts, European hotels, and international cruise ships' },
    { target: 'Travel Agencies & Tour Operators', count: 2, pct: 25, color: 'bg-indigo-600', desc: 'Itinerary planning, flight bookings, and customized packages' },
    { target: 'International Airports (El Dorado, etc.)', count: 2, pct: 25, color: 'bg-cyan-600', desc: 'Passenger service, airline customer care, and VIP lounges' },
    { target: 'Multinational Tourism Companies', count: 1, pct: 12.5, color: 'bg-purple-600', desc: 'Corporate travel management and global distribution systems' },
    { target: 'Luxury Restaurants & Resorts', count: 1, pct: 12.5, color: 'bg-amber-600', desc: 'High-end culinary service, banquet and convention hosting' },
    { target: 'Own Tourism Business / Venture', count: 1, pct: 12.5, color: 'bg-rose-600', desc: 'Ecotourism agency and independent boutique hospitality' }
  ];

  // Law Survey Datasets (9 verified students)
  const lawQ1Data = [
    { label: 'Helping people / helping another person', count: 5, pct: 56, color: 'bg-amber-600', students: 'Robert Sebastian, Santi Emanuel, Juan Esteban, Kevin Castillo, Samuel Rangel' },
    { label: 'Debate and oral argumentation', count: 2, pct: 22, color: 'bg-blue-600', students: 'Valeria Tovar, Rihanna Isabella' },
    { label: 'Learning and studying legal science', count: 1, pct: 11, color: 'bg-emerald-600', students: 'Ibeth Daniela' },
    { label: 'Time with friends and collaborative peers', count: 1, pct: 11, color: 'bg-purple-600', students: 'Valerie Nicole' }
  ];

  const lawQ2Data = [
    { subject: 'Constitutional Law', count: 5, pct: 56, color: 'bg-indigo-600', desc: 'Fundamental human rights, democratic structures, and jurisprudence' },
    { subject: 'Law (General Foundations & Theory)', count: 1, pct: 11, color: 'bg-blue-600', desc: 'Doctrinal legal theory and justice foundations' },
    { subject: 'Introduction to Law', count: 1, pct: 11, color: 'bg-teal-600', desc: 'Courtroom debate structure and legal process fundamentals' },
    { subject: 'English', count: 1, pct: 11, color: 'bg-amber-600', desc: 'Transnational legal vocabulary and international human rights' },
    { subject: 'Civil Law', count: 1, pct: 11, color: 'bg-rose-600', desc: 'Interpersonal contracts, civil obligations, and private law' }
  ];

  const lawQ4Data = [
    { strategy: 'Help people directly in legal clinics', count: 3, pct: 33, color: 'bg-amber-600' },
    { strategy: 'Choose different companies & talk to other people', count: 2, pct: 22, color: 'bg-blue-600' },
    { strategy: 'Learn about the law in real courtroom situations', count: 1, pct: 11, color: 'bg-emerald-600' },
    { strategy: 'Learn how to handle the stress of debates', count: 1, pct: 11, color: 'bg-rose-600' },
    { strategy: 'Participate in prepared legal activities', count: 1, pct: 11, color: 'bg-indigo-600' },
    { strategy: 'I don’t know yet / exploring paths', count: 1, pct: 11, color: 'bg-slate-400' }
  ];

  const lawQ5Data = [
    { dislike: 'Read more about my career and court decisions', count: 3, pct: 33, color: 'bg-indigo-600' },
    { dislike: 'Practice communication & public speaking', count: 2, pct: 22, color: 'bg-blue-600' },
    { dislike: 'Be disciplined with daily study routines', count: 1, pct: 11, color: 'bg-emerald-600' },
    { dislike: 'To get more experience interacting with people', count: 1, pct: 11, color: 'bg-amber-600' },
    { dislike: 'I don’t know / continuous improvement', count: 1, pct: 11, color: 'bg-slate-400' }
  ];

  const lawQ6Data = [
    { destination: 'Brazil (Comparative Law)', count: 5, pct: 56, flag: '🇧🇷', color: 'bg-yellow-600', note: 'South American comparative law and regional jurisprudence' },
    { destination: 'United States (Anglo-American Common Law)', count: 2, pct: 22, flag: '🇺🇸', color: 'bg-blue-600', note: 'Moot court debate, international arbitration and common law' },
    { destination: 'Spain (Continental Law)', count: 1, pct: 11, flag: '🇪🇸', color: 'bg-red-600', note: 'Spanish civil codes and European human rights faculties' },
    { destination: 'Switzerland / Suisa (International Law)', count: 1, pct: 11, flag: '🇨🇭', color: 'bg-rose-600', note: 'Geneva international treaties and human rights mediation' }
  ];

  const lawQ7Data = [
    { target: 'Depends on major / Unsure yet', count: 4, pct: 44, color: 'bg-slate-600', desc: 'Post-graduate specialization dependent' },
    { target: 'Governmental institutions & Public sector', count: 3, pct: 33, color: 'bg-indigo-600', desc: 'Ministries, public agencies, municipal oversight offices' },
    { target: 'Public lawyer (Defensoría del Pueblo)', count: 1, pct: 11, color: 'bg-emerald-600', desc: 'Free public citizen legal defense and human rights' },
    { target: 'Law teacher / Academia & Research', count: 1, pct: 11, color: 'bg-amber-600', desc: 'University professorship and legal doctrinal research' }
  ];

  const lawQ8Data = [
    { career: 'No / Dedicated 100% to Law', count: 4, pct: 44, color: 'bg-amber-600' },
    { career: 'Psychology (Legal & Criminal Mind)', count: 2, pct: 22, color: 'bg-purple-600' },
    { career: 'Business Administration (Corporate Law)', count: 2, pct: 22, color: 'bg-blue-600' },
    { career: 'Music (Creative Discipline)', count: 1, pct: 11, color: 'bg-rose-600' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Infographics Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-700/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            <span>Interactive Data Dashboard & Infographics</span>
            <span className="text-slate-400">·</span>
            <span>Academic Period 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
            Visual Fieldwork Analytics & Empirical Infographics
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Statistical charts synthesizing empirical surveys answered by verified undergraduate student cohorts at UniAgustiniana: Film &amp; Television (8 students), Architecture (8 students), Engineering (8 students), Hospitality &amp; Tourism (8 students), Gastronomy (10 participants), Law (9 students), and International Business (8 students).
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/80">
            <div>
              <span className="block text-2xl font-bold text-amber-400">{filteredStudents.length}</span>
              <span className="text-xs text-slate-300">
                {selectedCohort === 'all'
                  ? 'Total Interviewees'
                  : selectedCohort === 'film'
                  ? 'Film & TV Students'
                  : selectedCohort === 'architecture'
                  ? 'Architecture Students'
                  : selectedCohort === 'engineering'
                  ? 'Engineering Students'
                  : selectedCohort === 'tourism'
                  ? 'Hospitality & Tourism Students'
                  : selectedCohort === 'gastronomy'
                  ? 'Gastronomy Interviewees'
                  : selectedCohort === 'law'
                  ? 'Law Students (9 Verified)'
                  : 'Intl Business Students (8 Verified)'}
              </span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">{b1Percent + b2Percent}%</span>
              <span className="text-xs text-slate-300">CEFR Intermediate (B1/B2)</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">
                {selectedCohort === 'law'
                  ? '56%'
                  : selectedCohort === 'engineering'
                  ? '50%'
                  : selectedCohort === 'architecture'
                  ? '57%'
                  : selectedCohort === 'tourism'
                  ? '50%'
                  : '100%'}
              </span>
              <span className="text-xs text-slate-300">
                {selectedCohort === 'law'
                  ? 'Helping People (Q1)'
                  : selectedCohort === 'engineering'
                  ? 'Programming Passion (Q2)'
                  : selectedCohort === 'architecture'
                  ? 'Teamwork Affinity (Q3)'
                  : selectedCohort === 'tourism'
                  ? 'People & Cultures (Q1)'
                  : 'Green Area Affinity (Q3)'}
              </span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">
                {selectedCohort === 'law'
                  ? '56%'
                  : selectedCohort === 'engineering'
                  ? '50%'
                  : selectedCohort === 'architecture'
                  ? '38%'
                  : selectedCohort === 'tourism'
                  ? '50%'
                  : '100%'}
              </span>
              <span className="text-xs text-slate-300">
                {selectedCohort === 'law'
                  ? 'Brazil Exchange (Q6)'
                  : selectedCohort === 'engineering'
                  ? 'Tech Giants & Google (Q11)'
                  : selectedCohort === 'architecture'
                  ? 'Architecture Studios (Q7)'
                  : selectedCohort === 'tourism'
                  ? 'Hotels / Work Abroad (Q10)'
                  : 'RCN / Caracol TV (Q4)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Cohort Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700">Filter Analytics by Program Cohort:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setSelectedCohort('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedCohort === 'all'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Programs ({students.length} Students)
          </button>
          <button
            onClick={() => setSelectedCohort('film')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'film'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>Film &amp; Television (8)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('architecture')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'architecture'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Architecture (8)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('engineering')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'engineering'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering (8)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('tourism')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'tourism'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Palmtree className="w-3.5 h-3.5" />
            <span>Hospitality &amp; Tourism (8)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('gastronomy')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'gastronomy'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Gastronomy (10)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('law')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'law'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Law (9)</span>
          </button>
          <button
            onClick={() => setSelectedCohort('business')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCohort === 'business'
                ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Intl Business (8)</span>
          </button>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto bg-white p-2 rounded-xl border border-slate-200 shadow-xs no-scrollbar">
        {[
          { id: 'all', label: 'All 8 Question Charts', icon: Layers },
          { id: 'language', label: 'CEFR English Levels', icon: Award },
          { id: 'academics', label: 'Vocation & Subjects (Q1 & Q2)', icon: Camera },
          { id: 'internships', label: 'Media & Practicums (Q4 & Q8)', icon: Tv },
          { id: 'mobility', label: 'Exchanges & Mascot Hugos (Q6 & Q7)', icon: Globe2 }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeChartTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveChartTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION 1: LANGUAGE PROFICIENCY (Donut Chart & Distribution) */}
      {(activeChartTab === 'all' || activeChartTab === 'language') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Interviewer-Assessed English Proficiency (CEFR)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Qualitative appraisal by student researchers during oral fieldwork interviews
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
              N = {students.length} Students
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* SVG Donut Chart Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  CEFR Distribution Donut Chart
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Assessment based on fluency, syntactic clarity, and ease answering the 8 questions in English:
                </p>

                <div className="flex items-center justify-center py-4">
                  <div className="relative w-44 h-44">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      {/* B2 slice (12.5%): dasharray 12.5 87.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#059669"
                        strokeWidth="3.8"
                        strokeDasharray={`${b2Percent} ${100 - b2Percent}`}
                        strokeDashoffset="0"
                        className="transition-all duration-500 hover:opacity-80"
                      />
                      {/* B1 slice (50%): dashoffset -12.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#2563eb"
                        strokeWidth="3.8"
                        strokeDasharray={`${b1Percent} ${100 - b1Percent}`}
                        strokeDashoffset={`-${b2Percent}`}
                        className="transition-all duration-500 hover:opacity-80"
                      />
                      {/* A2 slice (37.5%): dashoffset -62.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#f59e0b"
                        strokeWidth="3.8"
                        strokeDasharray={`${a2Percent} ${100 - a2Percent}`}
                        strokeDashoffset={`-${b2Percent + b1Percent}`}
                        className="transition-all duration-500 hover:opacity-80"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                      <span className="text-xl font-black text-slate-900">{b1Percent + b2Percent}%</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Intermediate+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend with Counts */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="block text-[11px] font-bold text-emerald-800">B2 Upper</span>
                  <span className="text-sm font-black text-emerald-900">{levelCounts['B2']} ({b2Percent}%)</span>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="block text-[11px] font-bold text-blue-800">B1 Interm.</span>
                  <span className="text-sm font-black text-blue-900">{levelCounts['B1']} ({b1Percent}%)</span>
                </div>
                <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                  <span className="block text-[11px] font-bold text-amber-800">A2 Elem.</span>
                  <span className="text-sm font-black text-amber-900">{levelCounts['A2']} ({a2Percent}%)</span>
                </div>
              </div>
            </div>

            {/* Individual Student Evaluation Ledger */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Student-by-Student Qualitative CEFR Mapping
                  </h4>
                  <p className="text-xs text-slate-500">
                    Perceived communicative level linked with verified student codes
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {filteredStudents.map((st) => (
                  <div
                    key={st.id}
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${st.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                        {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 leading-tight">
                          {st.name}
                        </span>
                        <span className="font-mono text-[10px] text-amber-800 font-semibold">
                          ID: {st.studentCode} · {st.career.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                      st.perceivedEnglishLevel.startsWith('B2')
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : st.perceivedEnglishLevel.startsWith('B1')
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}>
                      {st.perceivedEnglishLevel.split(' - ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: ACADEMICS & VOCATION (Q1 & Q2) */}
      {(activeChartTab === 'all' || activeChartTab === 'academics') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-600" />
                <span>Program Appeal &amp; Favorite Subjects (Q1 &amp; Q2)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Core vocational identity and engagement across the curriculum {selectedCohort === 'law' ? '(Law Cohort)' : selectedCohort === 'engineering' ? '(Engineering Cohort)' : selectedCohort === 'architecture' ? '(Architecture Cohort)' : selectedCohort === 'tourism' ? '(Hospitality & Tourism Cohort)' : selectedCohort === 'film' ? '(Film & TV Cohort)' : '(All Cohorts)'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Q1 / Q2: What do you like most? */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    Question 1 Analysis · {selectedCohort === 'law' ? 'Law' : selectedCohort === 'engineering' ? 'Engineering' : selectedCohort === 'architecture' ? 'Architecture' : selectedCohort === 'tourism' ? 'Hospitality & Tourism' : 'Film & Television'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    What do you like most about your degree / career?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {(selectedCohort === 'law' ? lawQ1Data : selectedCohort === 'engineering' ? engQ2Data : selectedCohort === 'architecture' ? archQ1Data : selectedCohort === 'tourism' ? tourQ1Data : q1Data).map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.label}</span>
                      <span className="font-bold text-slate-900">{item.count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 italic">
                      Mentioned by: {item.students}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Q2 / Q3: Favorite Subjects */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    Question 2 Analysis · {selectedCohort === 'law' ? 'Law' : selectedCohort === 'engineering' ? 'Engineering' : selectedCohort === 'architecture' ? 'Architecture' : selectedCohort === 'tourism' ? 'Hospitality & Tourism' : 'Film & Television'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    What is your favorite subject?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {(selectedCohort === 'law' ? lawQ2Data : selectedCohort === 'engineering' ? engQ3Data : selectedCohort === 'architecture' ? archQ2Data : selectedCohort === 'tourism' ? tourQ2Data : q2Data).map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.subject}</span>
                      <span className="font-bold text-slate-900">{item.count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campus Space / Facilities Banner */}
          {selectedCohort === 'law' ? (
            <div className="bg-amber-50/90 rounded-xl p-5 border border-amber-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                  56%
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                    Question 1 &amp; 3 Finding · Law Program (Derecho)
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Altruistic Motivation (56% Helping People) &amp; Open Campus Spaces (33%)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Law students prioritize social service (56% helping another person) and constitutional debates (22%). On campus, 33% value any open space for reviewing cases, alongside the central fountain (22%) and cafeteria (22%).
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-200/60 px-3 py-1.5 rounded-lg shrink-0">
                56% Helping People · 33% Open Campus
              </span>
            </div>
          ) : selectedCohort === 'engineering' ? (
            <div className="bg-blue-50/90 rounded-xl p-5 border border-blue-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                  50%
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">
                    Question 4 Finding · Engineering Program (Ugus &amp; Campus)
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Favorite Part of Ugus &amp; Campus: Mascot Connection (25%) &amp; Library Study (25%)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Engineering students highlighted affection for mascot Ugus (The tail / El saco: 25%), quiet academic study in the library (25%), and recreation across campus green areas and sports courts (25%).
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-800 bg-blue-200/60 px-3 py-1.5 rounded-lg shrink-0">
                25% Ugus · 25% Library · 25% Spaces
              </span>
            </div>
          ) : selectedCohort === 'architecture' ? (
            <div className="bg-emerald-50/90 rounded-xl p-5 border border-emerald-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                  57%
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Question 3 Finding · Architecture Program
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Favorite Part of University: Teamwork &amp; Sharing Ideas in Studios
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    57% of surveyed students (4 out of 8) highlighted teamwork and exchanging design solutions with peers as their favorite part of university, followed by dedicated model making in architecture studios (29%) and daily learning (14%).
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1.5 rounded-lg shrink-0">
                57% Teamwork · 29% Studios
              </span>
            </div>
          ) : selectedCohort === 'tourism' ? (
            <div className="bg-teal-50/90 rounded-xl p-5 border border-teal-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                  75%
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
                    Question 3 Finding · Hospitality and Tourism Program
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Favorite Part of UniAgustiniana: ESUNA Simulation Facilities (37.5%) &amp; Green Zone (37.5%)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Hospitality students are evenly drawn to practical immersion: 37.5% praised ESUNA specialized hotel, mock bar and dining laboratories, while 37.5% praised the green zone for campus tranquility and collaborative study.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-teal-800 bg-teal-200/60 px-3 py-1.5 rounded-lg shrink-0">
                37.5% ESUNA · 37.5% Green Zone
              </span>
            </div>
          ) : (
            <div className="bg-emerald-50/90 rounded-xl p-5 border border-emerald-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                  100%
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Question 3 Unanimous Finding · Film &amp; Television
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Campus Space Preference: The Green Area of UniAgustiniana
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    All 8 surveyed students (100%) unanimously selected the green area of Campus Tagaste as their favorite location, citing open natural lighting, peaceful atmosphere for script reading, and crew meeting space.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1.5 rounded-lg shrink-0">
                8 of 8 Students in Total Consensus
              </span>
            </div>
          )}
        </section>
      )}

      {/* SECTION 3: PROFESSIONAL PROJECTION, IMPROVEMENT & PRACTICE */}
      {(activeChartTab === 'all' || activeChartTab === 'internships') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-600" />
                <span>Professional Projections, Skills Improvement &amp; Career Work</span>
              </h3>
              <p className="text-xs text-slate-500">
                Target employment sectors and strategies for academic development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Card: Internships or Degree Improvement */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  {selectedCohort === 'law'
                    ? 'Question 4 (Legal Practices)'
                    : selectedCohort === 'engineering'
                    ? 'Question 6 (Career Improvement)'
                    : selectedCohort === 'architecture'
                    ? 'Question 4 (Skills Improvement)'
                    : selectedCohort === 'tourism'
                    ? 'Question 4 (Internship Tasks)'
                    : 'Question 4 (Internships)'}
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  {selectedCohort === 'law'
                    ? 'What can you do in practices?'
                    : selectedCohort === 'engineering'
                    ? 'What can you do to improve?'
                    : selectedCohort === 'architecture'
                    ? 'Actions to improve degree?'
                    : selectedCohort === 'tourism'
                    ? 'What can you do in internships?'
                    : 'Where to do practicums?'}
                </h4>
              </div>

              <div className="space-y-3">
                {selectedCohort === 'law' ? (
                  lawQ4Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.strategy}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'engineering' ? (
                  engQ7Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.strategy}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'architecture' ? (
                  archQ4Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.strategy}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'tourism' ? (
                  tourQ4Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.activity}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-500">{item.focus}</p>
                    </div>
                  ))
                ) : (
                  q4Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.network}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-500">{item.focus}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Middle Card: Career Improvement, Dislikes or University Care */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  {selectedCohort === 'law'
                    ? 'Question 5 (Career Improvement)'
                    : selectedCohort === 'engineering'
                    ? 'Question 4 (Academic Challenges)'
                    : selectedCohort === 'architecture'
                    ? 'Question 5 (University Stewardship)'
                    : selectedCohort === 'tourism'
                    ? 'Question 6 (Professional Improvement)'
                    : 'Question 5 (Improvement)'}
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  {selectedCohort === 'law'
                    ? 'What could you do to get better?'
                    : selectedCohort === 'engineering'
                    ? "What don't you like as student?"
                    : selectedCohort === 'architecture'
                    ? 'How to take care of university?'
                    : selectedCohort === 'tourism'
                    ? 'What can you do to improve?'
                    : 'Actions to improve in career?'}
                </h4>
              </div>

              <div className="space-y-3">
                {selectedCohort === 'law' ? (
                  lawQ5Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.dislike}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'engineering' ? (
                  engQ5Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.dislike}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'architecture' ? (
                  archQ5Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.action}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : selectedCohort === 'tourism' ? (
                  tourQ6Data.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{item.strategy}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                ) : (
                  q5Data.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-800">
                        <span>{item.strategy}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Card: Practice / Employability */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  {selectedCohort === 'law'
                    ? 'Question 7 (Workplace Projections)'
                    : selectedCohort === 'engineering'
                    ? 'Question 10 (Workplace Projections)'
                    : selectedCohort === 'architecture'
                    ? 'Question 7 (Workplace Projections)'
                    : selectedCohort === 'tourism'
                    ? 'Question 10 (Future Employment)'
                    : 'Question 8 (Employability)'}
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Where do you think you can work?
                </h4>
              </div>

              <div className="space-y-3">
                {(selectedCohort === 'law' ? lawQ7Data : selectedCohort === 'engineering' ? engQ11Data : selectedCohort === 'architecture' ? archQ7Data : selectedCohort === 'tourism' ? tourQ10Data : q8Data).map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{(item as any).target}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: MOBILITY & STEWARDSHIP */}
      {(activeChartTab === 'all' || activeChartTab === 'mobility') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-amber-600" />
                <span>Exchange Mobility &amp; Caring for Others / Mascot</span>
              </h3>
              <p className="text-xs text-slate-500">
                International study destinations and institutional care commitments
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exchange Destinations */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    {selectedCohort === 'law'
                      ? 'Question 6 Analysis (Law)'
                      : selectedCohort === 'engineering'
                      ? 'Question 9 Analysis (Engineering)'
                      : selectedCohort === 'architecture'
                      ? 'Question 6 Analysis (Architecture)'
                      : selectedCohort === 'tourism'
                      ? 'Question 8 Analysis (Hospitality)'
                      : 'Question 7 Analysis (Film & TV)'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Would you like to study in another country? Where?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {(selectedCohort === 'law' ? lawQ6Data : selectedCohort === 'engineering' ? engQ10Data : selectedCohort === 'architecture' ? archQ6Data : selectedCohort === 'tourism' ? tourQ8Data : q7Data).map((dest, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span className="flex items-center gap-1.5">
                        <span className="text-base">{dest.flag}</span>
                        <span>{dest.destination}</span>
                      </span>
                      <span>{dest.count} std. ({dest.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${dest.color} h-2 rounded-full`} style={{ width: `${dest.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{dest.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mascot Hugos/Agus Care or Caring for Others */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  {selectedCohort === 'law' ? (
                    <Scale className="w-4 h-4 text-amber-600" />
                  ) : selectedCohort === 'architecture' ? (
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                  ) : selectedCohort === 'tourism' ? (
                    <Heart className="w-4 h-4 text-rose-600" />
                  ) : (
                    <Dog className="w-4 h-4 text-amber-600" />
                  )}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      {selectedCohort === 'law'
                        ? 'Question 4 Analysis (Legal Practices)'
                        : selectedCohort === 'engineering'
                        ? 'Question 8 Analysis (Engineering)'
                        : selectedCohort === 'architecture'
                        ? 'Question 5 Analysis (Architecture)'
                        : selectedCohort === 'tourism'
                        ? 'Question 7 Analysis (Hospitality)'
                        : 'Question 6 Analysis (Film & TV)'}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {selectedCohort === 'law'
                        ? 'What can you do in practices to serve citizens?'
                        : selectedCohort === 'engineering'
                        ? 'How can you take care of Agus (Ugus)?'
                        : selectedCohort === 'architecture'
                        ? 'How can you take care of the university?'
                        : selectedCohort === 'tourism'
                        ? 'How can you take care of others?'
                        : 'How can you take care of Hugos?'}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {(selectedCohort === 'law' ? lawQ4Data : selectedCohort === 'engineering' ? engQ9Data : selectedCohort === 'architecture' ? archQ5Data : selectedCohort === 'tourism' ? tourQ7Data : q6Data).map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{(item as any).action || (item as any).strategy}</span>
                      <span>{(item as any).count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                    {(item as any).desc && <p className="text-[10px] text-slate-500">{(item as any).desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: MULTIDISCIPLINARY INTERESTS (ENGINEERING Q12, TOURISM Q9 & LAW Q8) */}
      {(selectedCohort === 'law' || selectedCohort === 'engineering' || selectedCohort === 'tourism' || selectedCohort === 'all') && (
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                {selectedCohort === 'law'
                  ? 'Question 8 Insight · Law Degree Cohort'
                  : selectedCohort === 'tourism'
                  ? 'Question 9 Insight · Hospitality and Tourism Cohort'
                  : selectedCohort === 'engineering'
                  ? 'Question 11 Insight · Engineering Cohort'
                  : 'Multidisciplinary Insight · Law (Q8), Engineering (Q11) & Tourism (Q9)'}
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Alternative Degree Interests &amp; Complementary Studies
              </h3>
              <p className="text-xs text-slate-500">
                "Do you think you could study another career? Which one?"
              </p>
            </div>
            <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded">
              Multidisciplinary Horizons
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {(selectedCohort === 'law' ? lawQ8Data : selectedCohort === 'tourism' ? tourQ9Data : engQ12Data).map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                  <span>{item.career}</span>
                  <span className="text-blue-700">{item.count} std. ({item.pct}%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct * 2}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
