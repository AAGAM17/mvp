
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Rocket, Trash2, ExternalLink, Edit3, Calendar, User, LogOut, BarChart } from 'lucide-react';

const Dashboard = () => {
  const [mvps, setMvps] = useState([]);
  const [userEmail, set uerEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/auth');
      return;
    }
    
    const email = localStorage.getItem('userEmail') || 'user@example.com';
    setUserEmail(email);
    
    // Load saved MVPs
    const savedMVPs = JSON.parse(localStorage.getItem('savedMVPs') || '[]');
    
    // Add some demo MVPs if none exist
    if (savedMVPs.length === 0) {
      const demoMVPs = [
        {
          id: '1',
          title: 'Freelancer Services Platform',
          description: 'A platform where freelancers can offer their services to clients',
          status: 'Generated',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: '2',
          title: 'Pet-Sharing Community',
          description: 'A social platform for pet owners to share experiences and find services',
          status: 'In Progress',
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];
      localStorage.setItem('savedMVPs', JSON.stringify(demoMVPs));
      setMvps(demoMVPs);
    } else {
      setMvps(savedMVPs);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/auth');
  };

  const handleDeleteMVP = (id: string) => {
    const updatedMVPs = mvps.filter(mvp => mvp.id !== id);
    setMvps(updatedMVPs);
    localStorage.setItem('savedMVPs', JSON.stringify(updatedMVPs));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Generated': return 'bg-green-500/20 text-green-100 border-green-300/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-100 border-yellow-300/30';
      case 'Saved': return 'bg-blue-500/20 text-blue-100 border-blue-300/30';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-300/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors">
          <Rocket className="h-8 w-8" />
          <span className="text-2xl font-bold">MVPify</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-purple-200">{userEmail}</span>
          <Button 
            onClick={handleLogout}
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">My MVPs Dashboard</h1>
            <p className="text-xl text-purple-200">Manage and track all your generated MVPs</p>
          </div>
          <Link to="/idea-input">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create New MVP
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6 text-center">
              <BarChart className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">{mvps.length}</h3>
              <p className="text-purple-200">Total MVPs</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6 text-center">
              <Rocket className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">{mvps.filter(m => m.status === 'Generated').length}</h3>
              <p className="text-purple-200">Generated</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6 text-center">
              <Edit3 className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">{mvps.filter(m => m.status === 'In Progress').length}</h3>
              <p className="text-purple-200">In Progress</p>
            </CardContent>
          </Card>
        </div>

        {/* MVPs List */}
        {mvps.length === 0 ? (
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl">
            <CardContent className="p-12 text-center">
              <Rocket className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">No MVPs Yet</h3>
              <p className="text-purple-200 mb-6">Start building your first MVP to see it here!</p>
              <Link to="/idea-input">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First MVP
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mvps.map((mvp) => (
              <Card key={mvp.id} className="bg-white/10 border-white/20 backdrop-blur-lg shadow-xl hover:bg-white/20 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg mb-2 group-hover:text-purple-200 transition-colors">
                        {mvp.title}
                      </CardTitle>
                      <Badge className={getStatusColor(mvp.status)}>
                        {mvp.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                    {mvp.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-purple-300 text-xs mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>Created {formatDate(mvp.createdAt)}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-purple-600/20 hover:bg-purple-600/40 text-purple-100 border border-purple-500/30"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/20"
                    >
                      <Edit3 className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDeleteMVP(mvp.id)}
                      className="text-red-300 border-red-400/30 hover:bg-red-500/20"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Dashboard;
