"""Import the supplied program rosters and unattributed English answers."""
import json
import re
from pathlib import Path
from simulated_responses import RESPONSES

ROOT = Path(__file__).resolve().parents[1]
configs = [
    ('Mercadeo.txt', 'marketing', 'Marketing (Mercadeo)', 'Juan Manuel Rueda', None,
     [('Favorite subject', 'Digital Marketing'), ('Campus spaces', 'Cafeteria and green areas'), ('Exchange destination', 'Spain'), ('Career opportunities', 'Advertising and marketing')]),
    ('Comunicacion social.txt', 'communication', 'Social Communication (Comunicación Social)', 'Nancy Lourdes, Sarha Rojas', 'OKXi5SH1EqY',
     [('Favorite subject', 'Photography'), ('Practical skills', 'Photography, video and cameras'), ('Exchange destination', 'Spain'), ('Career opportunities', 'Television, radio and social media')]),
    ('Licenciatura en lenguas extranjeras.md', 'languages', 'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)', 'Nicol Medina, Gabriela Erazo', 'iF3C3uRj4so',
     [('Favorite subject', 'Pedagogy'), ('Campus spaces', 'Grass and fields'), ('Teaching practice', 'Experience and teaching skills'), ('Career opportunities', 'Schools and learning environments')]),
]
categories = ['Program Motivation', 'Favorite Subject', 'Campus Experience', 'Academic Challenges', 'Professional Practice', 'Professional Improvement', 'Teaching Preferences', 'Care and Respect', 'International Exchange', 'Career Opportunities', 'Further Studies']
students, programs = [], {}
for filename, prefix, career, team, video_id, highlights in configs:
    source = (ROOT / filename).read_text(encoding='utf-8-sig')
    roster = re.findall(r'^([^\n]+?)\s+—\s+(\d+)\s*$', source, re.M)
    body = source.split('Research team')[0]
    lines = [re.sub(r'^\d+\\?\.\s*', '', line.strip()) for line in body.splitlines() if line.strip()]
    pairs = [(line, lines[i + 1]) for i, line in enumerate(lines) if line.endswith('?')]
    assert len(pairs) == 11, (filename, len(pairs))
    questions = [dict(id=i, code=f'Q{i}', title=q, academicObjective=f'Explore {categories[i-1].lower()} within this degree program.', category=categories[i-1], summaryInsight=a) for i, (q, a) in enumerate(pairs, 1)]
    for i, (name, code) in enumerate(roster, 1):
        answers = {n: options[(i + n - 2) % len(options)] for n, options in enumerate(RESPONSES[prefix], 1)}
        level = (['A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate'] if prefix == 'languages' else ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'A2 - Elementary'])[(i - 1) % (3 if prefix == 'languages' else 4)]
        students.append(dict(id=f'{prefix}-{i}', name=name.strip(), studentCode=code, career=career, faculty='Not provided', semester='Not provided', campus='Not provided', age=None, highlightQuote=answers[1], perceivedEnglishLevel=level, englishLevelSource='simulated', simulatedAnswerIds=list(answers), answers=answers, avatarColor='bg-indigo-600'))
    programs[career] = dict(careerName=career, shortName=career.split(' (')[0], faculty='Not provided', campus='Not provided', researchTeam=team, sourceNote='The source lists participants and one set of program-level responses. Answers are not attributed to individual participants; ages, semesters, campus and English levels were not provided.', sharedAnswers={i:a for i, (_, a) in enumerate(pairs, 1)}, questions=questions, video=None if not video_id else dict(title=f'{career.split(" (")[0]} · Fieldwork Presentation Video', embedUrl=f'https://www.youtube-nocookie.com/embed/{video_id}', externalUrl=f'https://youtu.be/{video_id}', description='Audiovisual record supplied with the program fieldwork.', researchTeam=team), highlights=dict(title=f'Fieldwork Highlights ({len(roster)} Listed Participants)', cards=[dict(label=label, primary=value, secondary='Program-level response') for label, value in highlights]))
    programs[career]['sourceNote'] = 'Names and student IDs come from the supplied roster. Individual answers and English levels are simulated examples, not measured interview results. Original program-level responses are retained below.'
    if prefix == 'marketing':
        programs[career]['video'] = dict(title='Marketing · Example Video Link', embedUrl='', externalUrl='https://www.youtube.com/watch?v=EXAMPLE0000', description='Placeholder URL only. Replace with the actual Marketing fieldwork video.', researchTeam=team, isPlaceholder=True)
output = "import type { InterviewedStudent } from '../types/index.ts';\nimport type { CareerProgramData } from './initialData.ts';\n\n"
output += 'export const additionalStudents: InterviewedStudent[] = ' + json.dumps(students, ensure_ascii=False, indent=2) + ';\n\n'
output += 'export const additionalPrograms: Record<string, CareerProgramData> = ' + json.dumps(programs, ensure_ascii=False, indent=2) + ';\n'
(ROOT / 'src/data/additionalPrograms.ts').write_text(output, encoding='utf-8')
print(f'Imported {len(students)} participants and {sum(len(p["questions"]) for p in programs.values())} questions across {len(programs)} programs.')
