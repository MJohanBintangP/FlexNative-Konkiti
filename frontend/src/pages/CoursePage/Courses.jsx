import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Layout from '../../components/CoursePage/Layout';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useCourses } from '../../context/CourseContext';
import courseImage1 from '../../assets/course1.png';
import courseImage2 from '../../assets/course2.png';
import courseImage3 from '../../assets/course3.png';
import courseImage4 from '../../assets/course4.png';
import courseImage5 from '../../assets/course5.png';
import courseImage6 from '../../assets/course6.png';

export const defaultCourses = [
  {
    _id: 1,
    title: 'React Native Fundamentals',
    description: 'Learn the basics of React Native, including environment setup, core components, and basic styling.',
    image: courseImage1,
    rating: 4.8,
    duration: '6 Hours',
    level: 'Beginner',
  },
  {
    _id: 2,
    title: 'UI Development with React Native',
    description: 'Build modern user interfaces with advanced components and animations.',
    image: courseImage2,
    rating: 4.7,
    duration: '8 Hours',
    level: 'Intermediate',
  },
  {
    _id: 3,
    title: 'React Native Advanced Concepts',
    description: 'Performance optimization, native module integration, and state management with Redux.',
    image: courseImage3,
    rating: 4.9,
    duration: '10 Hours',
    level: 'Advanced',
  },
  {
    _id: 4,
    title: 'React Native Navigation',
    description: 'Learn different types of navigation like Stack, Tab, and Drawer using React Navigation.',
    image: courseImage4,
    rating: 4.6,
    duration: '5 Hours',
    level: 'Intermediate',
  },
  {
    _id: 5,
    title: 'Using APIs in React Native',
    description: 'Connect to RESTful APIs, fetch data, and display it securely and efficiently in your app.',
    image: courseImage5,
    rating: 4.7,
    duration: '7 Hours',
    level: 'Beginner',
  },
  {
    _id: 6,
    title: 'Deploy & Build Android/iOS',
    description: 'Prepare your app for production and upload it to the Play Store and App Store.',
    image: courseImage6,
    rating: 4.8,
    duration: '6.5 Hours',
    level: 'Advanced',
  },
];

const courseContent = {
  1: [
    {
      title: 'Introduction to React Native',
      videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
      content: 'Learn the basics of React Native and environment setup for development',
      duration: '15 minutes',
      lessons: ['What is React Native?', 'Installing Node.js and JDK', 'Setting up Android Studio'],
    },
    {
      title: 'Creating Your First Project',
      videoUrl: 'https://www.youtube.com/watch?v=9ArhJiMGVDc',
      content: 'Create your first app with React Native CLI',
      duration: '20 minutes',
      lessons: ['Initializing the Project', 'Folder Structure', 'Running on Emulator'],
    },
    {
      title: 'Running on a Physical Device',
      videoUrl: 'https://youtu.be/dCLhUialKPQ?si=WmoyRFlX80CSf5HW',
      content: 'Run the app on your phone using a USB cable or Wi-Fi',
      duration: '10 minutes',
      lessons: ['Enable USB Debugging', 'Connect via cable and Wi-Fi', 'Common Troubleshooting'],
    },
    {
      title: 'Using React Native CLI vs Expo',
      videoUrl: 'https://youtu.be/CzJQEstIiEI?si=_vcWYz09IJ3CB3tL',
      content: 'Understand the differences between CLI and Expo in the React Native workflow',
      duration: '12 minutes',
      lessons: ['Pros and Cons of Expo', 'When to use CLI', 'Migrating between Expo and CLI'],
    },
    {
      title: 'Basic App Structure',
      videoUrl: 'https://youtu.be/SF4K1kDmHwU?si=_PN9AZi7vWMwWDu3',
      content: 'Understand App.js, main components, and initial navigation',
      duration: '13 minutes',
      lessons: ['App Registry', 'Root Component', 'Basic Screen Navigation'],
    },
  ],
  2: [
    {
      title: 'UI Basics in React Native',
      videoUrl: 'https://youtu.be/mJ3bGvy0WAY?si=Q-qIGOseO2tgUHRq',
      content: 'Understand the use of View, Text, and StyleSheet components',
      duration: '18 minutes',
      lessons: ['View and Text Components', 'Styling with StyleSheet', 'Basic Responsive Design'],
    },
    {
      title: 'Input & Button',
      videoUrl: 'https://www.youtube.com/watch?v=RfMkdvN-23o',
      content: 'Learn about TextInput and Button components',
      duration: '22 minutes',
      lessons: ['TextInput and State Usage', 'Handling onPress Event', 'Creating a Simple Form'],
    },
    {
      title: 'Advanced StyleSheet',
      videoUrl: 'https://youtu.be/0kL6nhutjQ8?si=XP6xLM9Z5SjQHSXP',
      content: 'Learn about using flexbox and positioning',
      duration: '17 minutes',
      lessons: ['Basic Flexbox', 'AlignItems & JustifyContent', 'Adaptive Layout'],
    },
    {
      title: 'Image & Background',
      videoUrl: 'https://youtu.be/wbj-DuaL748?si=uW-8rMcfp2w-Uz9T',
      content: 'Add images and backgrounds to your app layout',
      duration: '15 minutes',
      lessons: ['Using Image Component', 'Local vs URL Image Sources', 'ResizeMode and Image Styling'],
    },
    {
      title: 'Touchable & Pressable',
      videoUrl: 'https://youtu.be/bCpFbERgj7s?si=MQiMQB0hu-Qr_y6X',
      content: 'Learn about more flexible touch interactions',
      duration: '14 minutes',
      lessons: ['TouchableOpacity vs Pressable', 'Visual Feedback', 'Simple Gestures'],
    },
  ],
  3: [
    {
      title: 'State & Props',
      videoUrl: 'https://www.youtube.com/watch?v=IYCa1F-OWmk',
      content: 'Understand the difference and usage of State and Props',
      duration: '17 minutes',
      lessons: ['Using useState', 'Passing props between components', 'Stateless vs Stateful'],
    },
    {
      title: 'FlatList & ScrollView',
      videoUrl: 'https://youtu.be/obH0Po_RdWk?si=NKn4X4r_QCWG4mm0',
      content: 'Efficiently display data lists',
      duration: '19 minutes',
      lessons: ['Using ScrollView', 'Displaying data with FlatList', 'KeyExtractor and item rendering'],
    },
    {
      title: 'useEffect & Lifecycle',
      videoUrl: 'https://www.youtube.com/watch?v=0ZJgIjIuY7U',
      content: 'Manage side effects with useEffect and understand the component lifecycle',
      duration: '16 minutes',
      lessons: ['Introduction to useEffect', 'Dependency array', 'Effect cleanup'],
    },
    {
      title: 'Component Reusability',
      videoUrl: 'https://youtu.be/qSRrxpdMpVc?si=h6iDYUhRFAIp_q_z',
      content: 'Create reusable components',
      duration: '15 minutes',
      lessons: ['Creating custom components', 'Using props children', 'Best practices for component separation'],
    },
    {
      title: 'Global State with Context',
      videoUrl: 'https://youtu.be/6UB3gw3SKfY?si=cRAi92xMfCGCswWi',
      content: 'Use the Context API for simple global state management',
      duration: '18 minutes',
      lessons: ['Creating Context and Provider', 'useContext Hook', 'Example of global state application'],
    },
  ],
  4: [
    {
      title: 'Navigation with React Navigation',
      videoUrl: 'https://youtu.be/Q76Pj9xHBmg?si=omu9CEa0GZ4USkDT',
      content: 'Add navigation between pages in the app',
      duration: '21 minutes',
      lessons: ['Installing React Navigation', 'Stack Navigator', 'Navigation between screens'],
    },
    {
      title: 'Tab & Drawer Navigation',
      videoUrl: 'https://youtu.be/zuFh9lfb4HY?si=z9sdHaXemFb3qkhM',
      content: 'Implement tab and drawer navigation',
      duration: '23 minutes',
      lessons: ['Bottom Tab Navigation', 'Drawer Navigation', 'Custom icons and labels'],
    },
    {
      title: 'Dynamic Navigation with Params',
      videoUrl: 'https://youtu.be/HuwQwNDLaJ8?si=cK6NB6vyVCBzbcIA',
      content: 'Send data between screens via navigation params',
      duration: '14 minutes',
      lessons: ['Navigation with parameters', 'Retrieving params on the destination screen', 'Example application: product detail'],
    },
    {
      title: 'Custom Header & Navigation Options',
      videoUrl: 'https://youtu.be/vmxsrR7bShA?si=Ka-jB8pTDwKPQCwU',
      content: 'Personalize navigation display with headers and titles',
      duration: '13 minutes',
      lessons: ['Setting title per screen', 'Custom header components', 'Hiding headers'],
    },
    {
      title: 'Nested Navigation',
      videoUrl: 'https://youtu.be/wEVjaXK4sYQ?si=is6QZGmr-KpQ7u04',
      content: 'Combine Stack, Tab, and Drawer in one app',
      duration: '16 minutes',
      lessons: ['Hierarchical navigation structure', 'Navigation between navigators', 'Navigation organization tips'],
    },
  ],
  5: [
    {
      title: 'Fetching API in React Native',
      videoUrl: 'https://www.youtube.com/watch?v=VozPNrt-LfE',
      content: 'Fetch data from an external API and display it',
      duration: '20 minutes',
      lessons: ['fetch() and async/await', 'Displaying data from API', 'Handling loading and errors'],
    },
    {
      title: 'Using Axios',
      videoUrl: 'https://youtu.be/SqcY0GlETPk?si=_Jgocaxen2ioHFLb',
      content: 'Alternative to fetch with Axios for HTTP requests',
      duration: '18 minutes',
      lessons: ['Installing and setting up Axios', 'GET and POST requests', 'Error handling'],
    },
    {
      title: 'Handling Forms and Submitting to API',
      videoUrl: 'https://youtu.be/UCbRTaX6i7g?si=uMfINoaT2NW1cWVK',
      content: 'Send form input data to an API via HTTP POST',
      duration: '19 minutes',
      lessons: ['Creating a form with TextInput', 'Using useState for input', 'Sending data to API with POST'],
    },
    {
      title: 'Displaying Lists and Details from API',
      videoUrl: 'https://youtu.be/R2eqAgR_KlU?si=-Ovu2yAnq4iz376K',
      content: 'Fetch a list and navigate to the item detail page',
      duration: '21 minutes',
      lessons: ['Fetch list data from API', 'Navigate to item detail', 'Use params to send ID'],
    },
    {
      title: 'Loading, Error, and Refresh',
      videoUrl: 'https://youtu.be/Hf4MJH0jDb4?si=NvhBU23trjXwg1ih',
      content: 'Add good UX for loading and error states',
      duration: '16 minutes',
      lessons: ['Loading state when fetching data', 'Display error if failed', 'Pull to refresh'],
    },
  ],
  6: [
    {
      title: 'Build APK for Android',
      videoUrl: 'https://youtu.be/dCLhUialKPQ?si=BK1sDr7QfQyqO1Xm',
      content: 'Steps to build and test the APK',
      duration: '14 minutes',
      lessons: ['Generate APK', 'Run on physical device', 'Debug and Release build'],
    },
    {
      title: 'Deploy to Play Store',
      videoUrl: 'https://youtu.be/FQIvNhaCswE?si=WuOhbMa6YuysNiMH',
      content: 'Publish the app to the Google Play Store',
      duration: '16 minutes',
      lessons: ['Create developer account', 'Upload APK/AAB', 'Prepare app metadata'],
    },
    {
      title: 'Create AAB for Play Store',
      videoUrl: 'https://youtu.be/9UKCv9T_rIo?si=wCkEAX9-KJNmuHTF',
      content: 'Generate Android App Bundle (AAB) as recommended by Google',
      duration: '12 minutes',
      lessons: ['Difference between APK and AAB', 'Creating AAB in Android Studio', 'Upload to Play Console'],
    },
    {
      title: 'Signing APK and AAB',
      videoUrl: 'https://youtu.be/FJm3eKT9L9s?si=IjmOFmVHIhbdhu0T',
      content: 'Create and use a keystore for app signing',
      duration: '15 minutes',
      lessons: ['Generate keystore', 'Configure signing in Gradle', 'Signed release build'],
    },
    {
      title: 'App Testing Tips Before Launch',
      videoUrl: 'https://youtu.be/ZBCUegTZF7M?si=37awZwxkfOs0eVtR',
      content: 'Steps for app testing before publication',
      duration: '18 minutes',
      lessons: ['Test on emulator and physical devices', 'Test with Play Console (internal testing)', 'Check performance and errors'],
    },
  ],
};

function Courses() {
  const { courses, setCourses } = useCourses();
  const [currentChapter, setCurrentChapter] = useState(0);
  const { toggleBookmark, bookmarks } = useContext(AuthContext);
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(location.state?.selectedCourse || null);

  useEffect(() => {
    if (location.state?.selectedCourse) {
      setSelectedCourse(location.state.selectedCourse);
      window.history.replaceState({}, document.title);
    }

    axios
      .get('http://localhost:5000/api/courses')
      .then((res) => {
        const merged = [...res.data, ...defaultCourses];
        const uniqueCourses = merged.filter((c, i, self) => self.findIndex((item) => item._id === c._id) === i);
        setCourses(uniqueCourses.slice(0, 3));
      })
      .catch(() => setCourses(defaultCourses));
  }, [location.state]);

  const isBookmarked = (courseId) => {
    return bookmarks.some((item) => item._id === courseId);
  };

  const handleStartCourse = (course) => {
    setSelectedCourse(course);
    setCurrentChapter(0);
    window.scrollTo(0, 0);
  };

  const CourseContentLayout = () => (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3 bg-gradient-to-b from-[#1E1F27]/90 to-[#2A2B32]/90 backdrop-blur-lg p-6 rounded-2xl border border-[#ffffff10] shadow-2xl">
        <div className="mb-6">
          <button onClick={() => setSelectedCourse(null)} className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Semua Kursus</span>
          </button>
        </div>

        <div className="mb-8">
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-2">{selectedCourse.title}</h2>
            <div className="flex items-center gap-4 text-sm text-blue-300">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {selectedCourse.rating}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {selectedCourse.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 relative">
          <div className="absolute -left-1 top-0 h-full w-1 bg-[#ffffff10] rounded-full" />
          {courseContent[selectedCourse._id]?.map((chapter, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-xl cursor-pointer transition-all group
              ${currentChapter === index ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-l-4 border-blue-400 ml-1' : 'hover:bg-[#ffffff08] ml-1'}`}
              onClick={() => setCurrentChapter(index)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 w-3 h-3 rounded-full flex-shrink-0
                ${currentChapter === index ? 'bg-blue-400' : 'bg-[#ffffff30]'}`}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-200">Chapter {index + 1}</h3>
                    <span className="text-xs text-gray-400">{chapter.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">{chapter.title}</p>
                  <div className="mt-2 h-[2px] bg-[#ffffff10] rounded-full">
                    <div className="h-full bg-blue-400 rounded-full transition-all duration-500" style={{ width: `${(index / (courseContent[selectedCourse._id].length - 1)) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-2/3 space-y-8">
        <div className="relative bg-gradient-to-br from-[#1E1F27] to-[#2A2B32] rounded-2xl p-8 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold text-lg">Chapter {currentChapter + 1}</span>
                <span className="text-gray-400">/ {courseContent[selectedCourse._id].length}</span>
              </div>
              <span className="px-3 py-1 bg-[#ffffff10] text-gray-300 rounded-full text-sm">{courseContent[selectedCourse._id][currentChapter].duration}</span>
            </div>
            <h3 className="text-3xl font-bold text-white">{courseContent[selectedCourse._id][currentChapter].title}</h3>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#ffffff15]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
              <ReactPlayer
                url={courseContent[selectedCourse._id][currentChapter].videoUrl}
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-gradient-to-r from-[#1E1F27] to-[#2A2B32] p-6 rounded-xl border border-[#ffffff10]">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Learning Materials
              </h4>
              <p className="text-gray-300 leading-relaxed">{courseContent[selectedCourse._id][currentChapter].content}</p>
            </div>

            <div className="bg-gradient-to-br from-[#1E1F27] to-[#2A2B32] p-6 rounded-xl border border-[#ffffff10]">
              <h4 className="text-lg font-semibold text-white mb-4">Lessons in This Chapter:</h4>
              <ul className="space-y-3">
                {courseContent[selectedCourse._id][currentChapter].lessons.map((lesson, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-[#ffffff05] hover:bg-[#ffffff10] rounded-lg transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-lg">
                      <span className="text-blue-400">{i + 1}</span>
                    </div>
                    <span className="text-gray-300">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-[#393A42] hover:bg-[#454650] text-white rounded-xl transition-all disabled:opacity-50"
              disabled={currentChapter === 0}
              onClick={() => setCurrentChapter((prev) => prev - 1)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all"
              onClick={() => setCurrentChapter((prev) => prev + 1)}
              disabled={currentChapter === courseContent[selectedCourse._id].length - 1}
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="p-6">
        {!selectedCourse ? (
          <>
            <div className="flex flex-col mb-8">
              <h1 className="text-2xl font-bold text-white mb-4">React Native Courses</h1>
              <p className="text-gray-400 mb-4">Level up your mobile development skills with a hands-on, industry-ready React Native curriculum!</p>
              <hr className="border-[#959595]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
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

                  {/* Konten */}
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
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <CourseContentLayout />
        )}
      </div>
    </Layout>
  );
}

export default Courses;
