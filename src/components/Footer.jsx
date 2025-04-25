const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
              Portfolio
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 