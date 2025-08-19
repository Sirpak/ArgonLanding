import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Argon18
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Business automation and process optimization experts.
              We are Software Engineers, Prodjecy Managers, and Technology Enthusiasts. 
              We debug your business so you can focus on growth.
              "It's not what you know it's what you know" - Aristotle
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Automation Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Process </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Managed Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Argon18. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
