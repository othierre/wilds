import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentPath = path.join(process.cwd(), 'content', 'alunos');
const publicPath = path.join(process.cwd(), 'public');
const studentsJsonPath = path.join(publicPath, 'students.json');

async function generateStudentsJson() {
  const studentFiles = fs.readdirSync(contentPath).filter(file => file.endsWith('.md'));

  const students = studentFiles.map(file => {
    const filePath = path.join(contentPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    // Extract id from filename, removing extension
    const id = file.replace(/\.md$/, '');

    // Ensure 'activities' and 'proofs' are arrays
    const activities = Array.isArray(data.activities) ? data.activities : (data.activities ? [data.activities] : []);
    const proofs = Array.isArray(data.proofs) ? data.proofs : (data.proofs ? [data.proofs] : []);

    return {
      id,
      name: data.name || id, // Fallback to id if name is not present
      class: data.class || '',
      grade: data.grade || 0,
      activities,
      proofs,
    };
  });

  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  fs.writeFileSync(studentsJsonPath, JSON.stringify(students, null, 2), 'utf8');
  console.log(`Generated ${students.length} student records to ${studentsJsonPath}`);
}

generateStudentsJson();
