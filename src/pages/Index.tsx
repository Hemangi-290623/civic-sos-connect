import { useState } from "react";
import Header from "@/components/Header";
import SOSButton from "@/components/SOSButton";
import CrimeReportForm from "@/components/CrimeReportForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, FileText, Users, Shield } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        <Tabs 
          defaultValue="home" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="container mx-auto py-6 px-4"
        >
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home">
              <Shield className="mr-2 h-4 w-4 md:inline hidden" /> Home
            </TabsTrigger>
            <TabsTrigger value="constitution">
              <FileText className="mr-2 h-4 w-4 md:inline hidden" /> Constitution
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="mr-2 h-4 w-4 md:inline hidden" /> Community
            </TabsTrigger>
            <TabsTrigger value="report">
              <Phone className="mr-2 h-4 w-4 md:inline hidden" /> Report
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="home" className="space-y-6">
            <div className="bg-muted/50 p-8 rounded-lg">
              <h1 className="text-3xl font-bold mb-4">Welcome to Civic SOS Connect</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your community resource for constitutional rights and emergency services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Know Your Rights</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn about the constitutional rights that protect you as a citizen.
                  </p>
                  <Button onClick={() => setActiveTab("constitution")}>Explore</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Community Safety</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with neighbors and local authorities to keep your community safe.
                  </p>
                  <Button onClick={() => setActiveTab("community")}>Join</Button>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg shadow-sm border-red-100 border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-red-700">Emergency Help</h3>
                  <p className="text-muted-foreground mb-4">
                    Report crimes and access emergency services with one tap.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" onClick={() => setActiveTab("report")}>
                    Report Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="constitution">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Constitutional Resources</h2>
              <p>
                Explore the foundational documents and rights that govern our society.
                This section contains educational resources about your rights and
                responsibilities as a citizen.
              </p>
              {/* Placeholder for constitution content */}
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Constitution Content</h3>
                <p>Constitution documents and resources would be displayed here.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="community">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Community Safety Network</h2>
              <p>
                Connect with your local community, share safety concerns, and work together
                to create a safer neighborhood.
              </p>
              {/* Placeholder for community content */}
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Community Features</h3>
                <p>Community forum and safety resources would be displayed here.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="report">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Report a Crime</h2>
              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
                <h3 className="text-xl font-semibold mb-2 text-red-700">Emergency Situation?</h3>
                <p className="mb-4">
                  If you're experiencing an emergency that requires immediate assistance,
                  use the SOS button to call emergency services directly.
                </p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 flex items-center" 
                  onClick={() => document.querySelector('.sos-button')?.dispatchEvent(new MouseEvent('click'))}
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Emergency Services
                </Button>
              </div>
              
              <CrimeReportForm />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; 2025 Civic SOS Connect. All rights reserved.</p>
          <p className="mt-2">
            For non-emergency assistance, please use the crime reporting form.
            In case of emergency, use the SOS button or dial 100.
          </p>
        </div>
      </footer>
      
      {/* SOS Button - Always visible */}
      <SOSButton />
    </div>
  );
};

export default Index;
