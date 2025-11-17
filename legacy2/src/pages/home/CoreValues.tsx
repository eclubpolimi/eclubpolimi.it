import FlipCard from '../../components/FlipCard';

export default function CoreValues() {
  const values = [
    {
      keyword: 'Learn',
      description: 'We host impactful events, hands-on workshops, and insightful speaker sessions featuring top entrepreneurs and industry experts. Gain firsthand knowledge and skills essential for navigating the startup ecosystem.',
      bgColor: 'bg-[#120A68]'
    },
    {
      keyword: 'Network',
      description: 'Join a diverse and dynamic network of like-minded individuals. Connect with future co-founders, mentors, and industry professionals across various fields, fostering valuable collaborations and idea exchanges.',
      bgColor: 'bg-[#FF6B35] dark:bg-[#E85D31]'
    },
    {
      keyword: 'Build',
      description: 'With the right knowledge and network at your fingertips, it\'s time to turn ideas into reality. Collaborate, innovate, and build scalable projects that make a lasting impact.',
      bgColor: 'bg-[#120A68]'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden py-16">
      <div className="px-5 md:px-40 flex flex-col gap-12 md:max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Core Values & Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Events • Workshops • Speaker Sessions • Knowledge • Skills
          </p>
          <p className="text-base text-gray-500 dark:text-gray-500">
            Click or hover over each card to discover more
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FlipCard
              key={index}
              keyword={value.keyword}
              description={value.description}
              bgColor={value.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
