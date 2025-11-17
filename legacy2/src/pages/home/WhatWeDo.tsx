import FlipCard from '../../components/FlipCard';

export default function WhatWeDo() {
  const activities = [
    {
      keyword: 'Events',
      description: 'We curate exclusive events featuring top entrepreneurs, innovators, and business leaders. Gain insights from industry pioneers and participate in interactive discussions that shape the future of entrepreneurship.',
      bgColor: 'bg-[#FF6B35] dark:bg-[#E85D31]',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop'
    },
    {
      keyword: 'Startup Challenge',
      description: 'Our flagship Startup Challenge unites top students from Politecnico di Milano, Bocconi University, Università Statale, and Università Cattolica to tackle real-world business challenges. Participants will collaborate in teams to develop innovative solutions, guided by industry experts and keynote speakers. Through hands-on workshops, networking sessions, and mentorship opportunities, this challenge provides an immersive experience in entrepreneurship, problem-solving, and startup development.',
      bgColor: 'bg-[#120A68]',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop'
    },
    {
      keyword: 'Travel',
      description: 'Explore Europe\'s most vibrant startup ecosystems. Visit pioneering companies, meet inspiring founders, and immerse yourself in diverse cultures—broadening your entrepreneurial perspective beyond borders.',
      bgColor: 'bg-[#FF6B35] dark:bg-[#E85D31]',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 py-16">
      <div className="px-5 md:px-40 flex flex-col gap-12 md:max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            A glimpse of what we do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Entrepreneurs • Innovators • Business Leaders • Experts • Solutions
          </p>
          <p className="text-base text-gray-500 dark:text-gray-500">
            Click or hover over each card to learn more
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <FlipCard
              key={index}
              keyword={activity.keyword}
              description={activity.description}
              bgColor={activity.bgColor}
              image={activity.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
