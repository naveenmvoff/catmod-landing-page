import logo from '../assets/Logo-header.png'

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Description */}
          <div className="max-w-md mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CatMod AI Logo" className="" />
            </div>
            <p className="text-gray-400 text-sm">
              Speed up front end development by using CatMod AI to generate all your UI components. Skip manual effort. Automate part of your workflow.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block h-px bg-white/10 mx-auto my-8"></div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          Copyright CatMod AI 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;