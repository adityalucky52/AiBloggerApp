// Footer.jsx

import { assets, footer_data } from "../assets/assets";

const Footer = () => (
  <footer className="bg-gray-50 pt-12 pb-6 mt-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo & Description */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            
             <img onClick={()=>navigate('/')}src={assets.logo} alt="" className='cursor-pointer' />
           
            
          </div>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        {/* Dynamic Footer Links */}
        <div className="flex flex-1 justify-between">
          {footer_data.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <p className="text-center text-gray-400 text-sm">
        Copyright 2025 © QuickBlog All Right Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;