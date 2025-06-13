
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, Zap, Code, Database, Users, ArrowRight, Sparkles, CheckCircle, User } from 'lucide-react';

const Index = () => {
  const [idea, setIdea] = useState('');
  const navigate = useNavigate();

  const handleGenerateMVP = () => {
    if (idea.trim()) {
      localStorage.setItem('currentIdea', idea);
      navigate('/idea-input');
    }
  };

  const exampleIdeas = [
    "A site where freelancers sell services",
    "A pet-sharing community", 
    "A marketplace for local food delivery",
    "A social platform for book lovers"
  ];

  const features = [
    { icon: Code, title: "No Code Required", desc: "Just describe your idea in plain English" },
    { icon: Database, title: "Database Included", desc: "Automatic data models and relationships" },
    { icon: Users, title: "User Authentication", desc: "Login, signup, and user management built-in" },
    { icon: Zap, title: "Instant Generation", desc: "Get your MVP in minutes, not months" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Rocket className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">MVPify</span>
        </div>
        <Link to="/auth">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
            <User className="h-4 w-4 mr-2" />
            Login / Register
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-500/20 text-purple-100 border-purple-300/30 hover:bg-purple-500/30 transition-all duration-300">
            <Sparkles className="h-4 w-4 mr-1" />
            AI-Powered MVP Generation
          </Badge>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Turn Your Startup Idea into a
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Real App</span>
            <br />
            Just by Typing It
          </h1>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            No code. No confusion. Just describe your idea and get a working app with login, database, and landing page in minutes.
          </p>

          {/* Main Input Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Textarea
                placeholder="Type your startup idea here... e.g., A platform where local artists can sell their artwork directly to customers"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="min-h-32 text-lg bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:border-purple-400 focus:ring-purple-400 mb-6 resize-none"
              />
              
              <Button 
                onClick={handleGenerateMVP}
                size="lg" 
                className="w-full text-lg py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                disabled={!idea.trim()}
              >
                <Rocket className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Generate My MVP
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Example Ideas */}
          <div className="mb-16">
            <p className="text-purple-200 mb-6 text-lg">🌟 Need inspiration? Try these example ideas:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {exampleIdeas.map((example, index) => (
                <Card 
                  key={index} 
                  className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => setIdea(example)}
                >
                  <CardContent className="p-4">
                    <p className="text-white group-hover:text-purple-200 transition-colors">"{example}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-6 text-purple-200 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No technical skills needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Ready in minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Fully functional MVP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Index;
