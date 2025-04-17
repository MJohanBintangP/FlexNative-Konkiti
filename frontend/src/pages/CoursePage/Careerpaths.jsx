import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../../components/CoursePage/Layout';
import { defaultCourses } from './Courses';

const careerPaths = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Learn how to build interactive user interfaces.',
    courses: [1, 2, 4],
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Learn how to build servers and APIs for applications.',
    courses: [1, 3, 5],
  },
  {
    id: 3,
    title: 'Mobile Developer',
    description: 'Learn how to create mobile applications using React Native.',
    courses: [1, 6],
  },
];

function CareerPaths() {
  const { user, addCareerPathCourses } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartPath = (pathId) => {
    const selectedPath = careerPaths.find((path) => path.id === pathId);
    if (selectedPath) {
      const selectedCourses = defaultCourses.filter((course) => selectedPath.courses.includes(course._id));
      addCareerPathCourses(selectedCourses);
      navigate('/bookmarks');
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Career Paths</h1>
          <p className="text-gray-400 mb-4">Learn all you need to begin a new career as a mobile developer with react native senior.</p>
          <hr className="border-[#959595]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path) => (
            <div key={path.id} className="p-6 bg-[#1E1F27] rounded-3xl border border-[#3E3F46] hover:border-blue-500 transition-all duration-300">
              <h2 className="text-xl font-semibold text-white mb-2">{path.title}</h2>
              <p className="text-gray-400">{path.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handleStartPath(path.id)}>
                Start This Path
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CareerPaths;
