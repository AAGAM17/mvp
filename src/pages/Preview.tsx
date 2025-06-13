
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Save, Share2, Download, ExternalLink, Rocket, User, Star, Users, DollarSign, BarChart } from 'lucide-react';

const Preview = () => {
  const [savedMVPs, setSavedMVPs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate saved MVPs
    const mockMVPs = JSON.parse(localStorage.getItem('savedMVPs') || '[]');
    setSavedMVPs(mockMVPs);
  }, []);

  const handleSaveMVP = () => {
    const newMVP = {
      id: Date.now().toString(),
      title: "Freelancer Services Platform",
      description: "A platform where freelancers can offer their services",
      createdAt: new Date().toISOString(),
      status: "Generated"
    };
    
    const existingMVPs = JSON.parse(localStorage.getItem('savedMVPs') || '[]');
    const updatedMVPs = [...existingMVPs, newMVP];
    localStorage.setItem('savedMVPs', JSON.stringify(updatedMVPs));
    setSavedMVPs(updatedMVPs);
  };

  const handleRegenerate = () => {
    navigate('/idea-input');
  };

  const mvpFeatures = [
    { icon: Users, title: "User Management", description: "Registration, login, profiles" },
    { icon: Star, title: "Service Listings", description: "Browse and search services" },
    { icon: DollarSign, title: "Payment Ready", description: "Payment integration setup" },
    { icon: BarChart, title: "Analytics Dashboard", description: "Track performance metrics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link to="/generator" className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <Rocket className="h-8 w-8" />
          <span className="text-2xl font-bold">MVPify</span>
        </Link>
        <Link to="/dashboard">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
            <User className="h-4 w-4 mr-2" />
            My Dashboard
          </Button>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/20 text-green-100 border-green-300/30">
            <ExternalLink className="h-4 w-4 mr-1" />
            Step 4: Your MVP Preview
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            🎉 Your MVP is Live!
          </h1>
          <p className="text-xl text-purple-200">
            Interact with your fully functional MVP below
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MVP Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Live MVP Preview</span>
                  <Badge className="bg-green-500/20 text-green-100">🟢 Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Mock MVP Interface */}
                <div className="bg-white rounded-lg shadow-xl min-h-96 p-6">
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">FreelanceHub</h2>
                    <p className="text-gray-600">Find and hire talented freelancers for your projects</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">🎨 Design Services</h3>
                      <p className="text-purple-600 text-sm">Logo design, UI/UX, branding</p>
                      <span className="text-purple-800 font-bold">From $50</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">💻 Development</h3>
                      <p className="text-blue-600 text-sm">Web apps, mobile apps, APIs</p>
                      <span className="text-blue-800 font-bold">From $200</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Browse Services
                    </Button>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Panel */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleSaveMVP}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save MVP
                </Button>
                
                <Button 
                  onClick={handleRegenerate}
                  variant="outline" 
                  className="w-full text-white border-white hover:bg-white hover:text-purple-900"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Regenerate
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full text-white border-white hover:bg-white hover:text-purple-900"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Link
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full text-white border-white hover:bg-white hover:text-purple-900"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Code
                </Button>
              </CardContent>
            </Card>

            {/* Features Included */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Features Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mvpFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <feature.icon className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm">{feature.title}</h4>
                      <p className="text-purple-200 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-purple-200 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Test all features thoroughly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Customize design and branding</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Add your own content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Deploy to production</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Preview;
