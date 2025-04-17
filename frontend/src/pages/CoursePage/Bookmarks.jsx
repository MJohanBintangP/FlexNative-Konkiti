import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../../components/CoursePage/Layout';
import bookmarksPage from '../../assets/BookmarksPage.png';
import { useNavigate } from 'react-router-dom';

function Bookmarks() {
  const { user, bookmarks, toggleBookmark } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartCourse = (course) => {
    navigate('/courses', {
      state: {
        selectedCourse: course,
        fromBookmarks: true,
      },
    });
  };

  const isBookmarked = (courseId) => {
    return bookmarks.some((item) => item._id === courseId);
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Bookmarked Courses</h1>
          <hr className="border-[#959595]" />
        </div>

        {bookmarks.length === 0 ? (
          <div className="flex flex-col max-w-[450px] mx-auto text-center items-center h-screen justify-center">
            <h1 className="text-white text-4xl font-bold mb-5">You haven&#39;t saved anything yet</h1>
            <p className="text-[#9E9FA2] mb-8">Explore FlexNative courses and start bookmarking your favorite design learning resources.</p>
            <img className="w-[350px]" src={bookmarksPage} alt="not saved yet" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((course) => (
              <div key={course._id} className="bg-gradient-to-b from-[#1E1F27] to-[#2A2B32] rounded-2xl border border-[#3E3F46] hover:border-blue-500 transition-all duration-300 overflow-hidden group relative">
                <button onClick={() => toggleBookmark(course)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors">
                  <svg className={`w-6 h-6 ${isBookmarked(course._id) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} fill={isBookmarked(course._id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
                  </svg>
                </button>

                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{course.level}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-white">{course.title}</h2>
                    <span className="text-blue-500 text-sm flex items-center gap-1">⭐ {course.rating}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{course.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2" onClick={() => handleStartCourse(course)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mulai Belajar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Bookmarks;
