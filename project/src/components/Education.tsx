import { educationData, EducationEntry } from '../data/educationData';
import { School } from 'lucide-react'; // Or any other suitable icon

const Education = () => {
  if (!educationData || educationData.length === 0) {
    return (
      <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Education
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Education details will be listed here soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu: EducationEntry) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <School className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
              </div>
              <p className="text-md text-blue-500 dark:text-blue-300 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
              {edu.details && (
                <p className="text-sm text-gray-700 dark:text-gray-300">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
