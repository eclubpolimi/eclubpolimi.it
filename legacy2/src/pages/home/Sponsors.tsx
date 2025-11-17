export default function Sponsors() {
  return (
    <section className="py-20 px-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Sponsors
        </h2>
        
        {/* Three Sponsor Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center">
          {/* Sponsor 1 - PoliHub */}
          <a 
            href="https://polihub.it/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">PoliHub</p>
              </div>
            </div>
          </a>

          {/* Sponsor 2 - JEMP */}
          <a 
            href="https://jemp.it/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">JEMP</p>
              </div>
            </div>
          </a>

          {/* Sponsor 3 - Astra */}
          <a 
            href="https://astraincubator.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Astra</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
