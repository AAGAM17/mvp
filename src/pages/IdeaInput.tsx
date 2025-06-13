
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Rocket, Lightbulb, ArrowRight, User } from 'lucide-react';

const IdeaInput = () => {
  const [idea, setIdea] = useState('');
  const [useAI, setUseAI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedIdea = localStorage.getItem('currentIdea');
    if (savedIdea) {
      setIdea(savedIdea);
    }
  }, []);

  const handleGenerateMVP = async () => {
    if (!idea.trim()) return;
    
    setIsLoading(true);
    localStorage.setItem('currentIdea', idea);
    localStorage.setItem('useAI', useAI.toString());
    
    // Simulate processing time
    setTimeout(() => {
      navigate('/blueprint');
    }, 2000);
  };

  const improvementSuggestions = [
    "Add user roles (admin, customer, vendor)",
    "Include payment processing",
    "Add mobile app features",
    "Include social login options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors">
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
          <Badge className="mb-4 bg-purple-500/20 text-purple-100 border-purple-300/30">
            <Lightbulb className="h-4 w-4 mr-1" />
            Step 1: Describe Your Idea
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Tell Us About Your Startup Idea
          </h1>
          <p className="text-xl text-purple-200">
            The more detailed you are, the better your MVP will be!
          </p>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              Your Startup Idea
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea
              placeholder="Describe your startup idea in detail... 

For example:
- What problem does it solve?
- Who are your target users?
- What main features do you need?
- How do users interact with it?

Example: 'I want to create a platform where local fitness trainers can offer virtual classes. Users should be able to browse trainers, book sessions, make payments, and join video calls. Trainers need profiles, schedules, and payment tracking.'"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="min-h-48 text-lg bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:border-purple-400 focus:ring-purple-400 resize-none"
            />

            <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-white font-medium">Use AI to improve my idea</p>
                  <p className="text-purple-200 text-sm">Let AI suggest additional features and improvements</p>
                </div>
              </div>
              <Switch 
                checked={useAI} 
                onCheckedChange={setUseAI}
                className="data-[state=checked]:bg-purple-600"
              />
            </div>

            {useAI && (
              <Card className="bg-white/5 border-purple-300/30 animate-fadeIn">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-400" />
                    AI Suggestions for Your Idea:
                  </h4>
                  <div className="space-y-2">
                    {improvementSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center gap-2 text-purple-200">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Button 
              onClick={handleGenerateMVP}
              size="lg" 
              className="w-full text-lg py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              disabled={!idea.trim() || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Your Idea...
                </>
              ) : (
                <>
                  <Rocket className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Generate My MVP Blueprint
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              💡 Tips for a Better MVP:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-200">
              <div className="space-y-2">
                <p>• Be specific about your target users</p>
                <p>• Describe the core problem you're solving</p>
                <p>• Mention key features users need</p>
              </div>
              <div className="space-y-2">
                <p>• Include user roles if applicable</p>
                <p>• Think about data you need to store</p>
                <p>• Consider how users will interact</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default IdeaInput;
