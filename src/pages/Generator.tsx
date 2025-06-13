
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Database, Lock, Layout, Code, Rocket, User, Sparkles } from 'lucide-react';

const Generator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { icon: Database, title: "Setting up Database", description: "Creating data models and relationships", duration: 2000 },
    { icon: Lock, title: "Configuring Authentication", description: "Setting up user login and security", duration: 1500 },
    { icon: Layout, title: "Building User Interface", description: "Creating responsive pages and components", duration: 3000 },
    { icon: Code, title: "Integrating Features", description: "Connecting everything together", duration: 2000 },
    { icon: Sparkles, title: "Final Optimizations", description: "Adding polish and testing", duration: 1500 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepTimer);
        return prev;
      });
    }, 2000);

    return () => clearInterval(stepTimer);
  }, []);

  const handleViewMVP = () => {
    const mvpId = Date.now().toString();
    localStorage.setItem('generatedMVPId', mvpId);
    navigate('/preview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link to="/blueprint" className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors">
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/20 text-blue-100 border-blue-300/30">
            <Code className="h-4 w-4 mr-1" />
            Step 3: Building Your MVP
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            {isComplete ? "🎉 Your MVP is Ready!" : "Generating Your MVP..."}
          </h1>
          <p className="text-xl text-purple-200">
            {isComplete 
              ? "Your fully functional MVP has been generated successfully!" 
              : "Please wait while we build your application"
            }
          </p>
        </div>

        {/* Progress Section */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span>Build Progress</span>
              <span className="text-2xl font-bold text-purple-300">{Math.round(progress)}%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={progress} className="h-3 bg-white/20" />
            
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isActive = index === currentStep;
                const isCompleted = index < currentStep || isComplete;
                
                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-500 ${
                      isActive 
                        ? 'bg-purple-500/20 border-purple-400/50 scale-105' 
                        : isCompleted 
                        ? 'bg-green-500/20 border-green-400/50' 
                        : 'bg-white/10 border-white/20'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      isCompleted ? 'bg-green-500' : isActive ? 'bg-purple-500' : 'bg-white/20'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-white" />
                      ) : (
                        <step.icon className={`h-6 w-6 ${
                          isActive ? 'text-white animate-pulse' : 'text-purple-300'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        isActive ? 'text-white' : isCompleted ? 'text-green-200' : 'text-purple-200'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-purple-300 text-sm">{step.description}</p>
                    </div>
                    {isActive && (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-400"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Generation Details */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              What's Being Built
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">React Frontend Application</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">Responsive Design System</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">User Authentication Flow</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">Database Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white">Mobile-First Design</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        {isComplete && (
          <div className="text-center">
            <Button 
              onClick={handleViewMVP}
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce"
            >
              <Rocket className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              View My Generated MVP
            </Button>
          </div>
        )}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Generator;
