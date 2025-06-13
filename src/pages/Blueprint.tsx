
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Edit3, RefreshCw, ArrowRight, Database, Lock, Layout, Users, Code, Rocket, User } from 'lucide-react';

const Blueprint = () => {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedIdea = localStorage.getItem('currentIdea');
    if (savedIdea) {
      setIdea(savedIdea);
    }
    
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleContinue = () => {
    navigate('/generator');
  };

  const handleTryAgain = () => {
    navigate('/idea-input');
  };

  const blueprintData = {
    pages: [
      { name: "Landing Page", description: "Homepage with hero section and features", icon: Layout },
      { name: "User Registration", description: "Sign up and login functionality", icon: Users },
      { name: "User Dashboard", description: "Main user interface and controls", icon: Code },
      { name: "Profile Management", description: "User profile and settings", icon: User }
    ],
    dataModels: [
      { name: "User", fields: ["id", "email", "username", "created_at"], icon: Users },
      { name: "Service", fields: ["id", "title", "description", "price", "user_id"], icon: Database },
      { name: "Booking", fields: ["id", "user_id", "service_id", "date", "status"], icon: CheckCircle }
    ],
    features: [
      "User Authentication (Email/Password)",
      "Database Integration",
      "Responsive Design",
      "Admin Dashboard",
      "Search & Filtering",
      "Payment Processing Setup"
    ]
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-2xl p-8 max-w-md w-full mx-4">
          <CardContent className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-white mb-4">Analyzing Your Idea...</h2>
            <p className="text-purple-200 mb-4">Our AI is creating your MVP blueprint</p>
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm">Identifying core features</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm">Designing data models</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                <span className="text-sm">Planning user interface</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link to="/idea-input" className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <Rocket className="h-8 w-8" />
          <span className="text-2xl font-bold">MVPify</span>
        </Link>
        <Link to="/auth">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
            <User className="h-4 w-4 mr-2" />
            Login / Register
          </Button>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/20 text-green-100 border-green-300/30">
            <CheckCircle className="h-4 w-4 mr-1" />
            Step 2: Blueprint Ready
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Your MVP Blueprint
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Here's what our AI understood from your idea and what we'll build for you
          </p>
        </div>

        {/* Original Idea */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Edit3 className="h-5 w-5 text-purple-400" />
              Your Original Idea
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 leading-relaxed bg-white/10 p-4 rounded-lg border border-white/20">
              {idea}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pages to Build */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Layout className="h-5 w-5 text-blue-400" />
                Pages to Build
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {blueprintData.pages.map((page, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                  <page.icon className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">{page.name}</h4>
                    <p className="text-purple-200 text-sm">{page.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Data Models */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="h-5 w-5 text-green-400" />
                Database Models
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {blueprintData.dataModels.map((model, index) => (
                <div key={index} className="p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <model.icon className="h-4 w-4 text-green-400" />
                    <h4 className="text-white font-medium">{model.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {model.fields.map((field, fieldIndex) => (
                      <Badge key={fieldIndex} variant="secondary" className="text-xs bg-white/20 text-purple-200">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Features Included */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Features Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blueprintData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white/10 rounded-lg border border-white/20">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Authentication Badge */}
        <div className="text-center mb-8">
          <Badge className="bg-green-500/20 text-green-100 border-green-300/30 text-lg py-2 px-4">
            <Lock className="h-5 w-5 mr-2" />
            Authentication: ✅ Enabled (Email/Password)
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={handleTryAgain}
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Try Again
          </Button>
          
          <Button 
            onClick={handleContinue}
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Rocket className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Continue to Generate MVP
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Blueprint;
