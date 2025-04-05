
import { useState } from "react";
import Header from "@/components/Header";
import SOSButton from "@/components/SOSButton";
import CrimeReportForm from "@/components/CrimeReportForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, FileText, Users, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileConstitutionView from "@/components/MobileConstitutionView";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [openArticle, setOpenArticle] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleArticle = (id: string) => {
    setOpenArticle(openArticle === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        <Tabs 
          defaultValue="home" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="container mx-auto py-4 sm:py-6 px-2 sm:px-4"
        >
          <TabsList className="grid w-full grid-cols-4 mb-4 sm:mb-8">
            <TabsTrigger value="home" className="text-xs sm:text-sm">
              <Shield className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Home
            </TabsTrigger>
            <TabsTrigger value="constitution" className="text-xs sm:text-sm">
              <FileText className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Constitution
            </TabsTrigger>
            <TabsTrigger value="community" className="text-xs sm:text-sm">
              <Users className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Community
            </TabsTrigger>
            <TabsTrigger value="report" className="text-xs sm:text-sm">
              <Phone className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Report
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="home" className="space-y-4 sm:space-y-6">
            <div className="bg-muted/50 p-3 sm:p-4 md:p-8 rounded-lg">
              <h1 className="text-xl md:text-3xl font-bold mb-2 sm:mb-4">Welcome to Civic SOS Connect</h1>
              <p className="text-sm md:text-lg text-muted-foreground mb-4 sm:mb-6">
                Your community resource for constitutional rights and emergency services.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-8">
                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-base md:text-xl font-semibold mb-1 sm:mb-2">Know Your Rights</h3>
                  <p className="text-muted-foreground mb-3 text-xs sm:text-sm md:text-base">
                    Learn about the constitutional rights that protect you as a citizen.
                  </p>
                  <Button size={isMobile ? "sm" : "default"} onClick={() => setActiveTab("constitution")}>Explore</Button>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-base md:text-xl font-semibold mb-1 sm:mb-2">Community Safety</h3>
                  <p className="text-muted-foreground mb-3 text-xs sm:text-sm md:text-base">
                    Connect with neighbors and local authorities to keep your community safe.
                  </p>
                  <Button size={isMobile ? "sm" : "default"} onClick={() => setActiveTab("community")}>Join</Button>
                </div>
                
                <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border-red-100 border hover:shadow-md transition-shadow">
                  <h3 className="text-base md:text-xl font-semibold mb-1 sm:mb-2 text-red-700">Emergency Help</h3>
                  <p className="text-muted-foreground mb-3 text-xs sm:text-sm md:text-base">
                    Report crimes and access emergency services with one tap.
                  </p>
                  <Button 
                    size={isMobile ? "sm" : "default"} 
                    className="bg-red-600 hover:bg-red-700" 
                    onClick={() => setActiveTab("report")}
                  >
                    Report Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="constitution">
            {isMobile ? (
              <MobileConstitutionView />
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Constitutional Resources</h2>
                <p className="text-muted-foreground">
                  Explore the foundational documents and rights that govern our society.
                  The Constitution of India is a living document that outlines the fundamental rights
                  and duties of every citizen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fundamental Rights</CardTitle>
                      <CardDescription>Articles 12-35 of the Constitution of India</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Collapsible open={openArticle === "right-equality"} onOpenChange={() => toggleArticle("right-equality")}>
                        <CollapsibleTrigger className="flex justify-between w-full items-center text-left font-medium">
                          Right to Equality (Articles 14-18)
                          <ArrowRight className={`h-4 w-4 transition-transform ${openArticle === "right-equality" ? "rotate-90" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-muted/30 rounded-md mt-2 text-sm">
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Article 14:</strong> Equality before law</li>
                            <li><strong>Article 15:</strong> Prohibition of discrimination</li>
                            <li><strong>Article 16:</strong> Equality of opportunity in public employment</li>
                            <li><strong>Article 17:</strong> Abolition of untouchability</li>
                            <li><strong>Article 18:</strong> Abolition of titles except military or academic</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <Collapsible open={openArticle === "right-freedom"} onOpenChange={() => toggleArticle("right-freedom")}>
                        <CollapsibleTrigger className="flex justify-between w-full items-center text-left font-medium">
                          Right to Freedom (Articles 19-22)
                          <ArrowRight className={`h-4 w-4 transition-transform ${openArticle === "right-freedom" ? "rotate-90" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-muted/30 rounded-md mt-2 text-sm">
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Article 19:</strong> Six freedoms: speech, assembly, association, movement, residence, and profession</li>
                            <li><strong>Article 20:</strong> Protection against arbitrary conviction</li>
                            <li><strong>Article 21:</strong> Right to life and personal liberty</li>
                            <li><strong>Article 22:</strong> Protection against arrest and detention</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <Collapsible open={openArticle === "right-exploitation"} onOpenChange={() => toggleArticle("right-exploitation")}>
                        <CollapsibleTrigger className="flex justify-between w-full items-center text-left font-medium">
                          Right Against Exploitation (Articles 23-24)
                          <ArrowRight className={`h-4 w-4 transition-transform ${openArticle === "right-exploitation" ? "rotate-90" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-muted/30 rounded-md mt-2 text-sm">
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Article 23:</strong> Prohibition of human trafficking and forced labor</li>
                            <li><strong>Article 24:</strong> Prohibition of child labor in factories, mines, and hazardous employment</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Fundamental Duties</CardTitle>
                      <CardDescription>Article 51A of the Constitution of India</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Added by the 42nd Amendment in 1976, these duties are meant to balance rights with responsibilities.</p>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Respect the Constitution, national flag, and national anthem</li>
                        <li>Cherish and follow the noble ideals of our freedom struggle</li>
                        <li>Protect the sovereignty and integrity of India</li>
                        <li>Defend the country when called upon</li>
                        <li>Promote harmony and brotherhood among all people</li>
                        <li>Value and preserve our rich heritage and culture</li>
                        <li>Protect the natural environment and have compassion for living creatures</li>
                        <li>Develop scientific temper and spirit of inquiry</li>
                        <li>Safeguard public property and abjure violence</li>
                        <li>Strive for excellence in all areas of activity</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="flex items-center" onClick={() => window.open("https://legislative.gov.in/constitution-of-india/", "_blank")}>
                    Read Full Constitution <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="community">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold">Community Safety Network</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Connect with your local community, share safety concerns, and work together
                to create a safer neighborhood.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
                <Card className="md:col-span-2">
                  <CardHeader className={isMobile ? "py-3 px-3" : ""}>
                    <CardTitle className={isMobile ? "text-base" : ""}>Neighborhood Watch Programs</CardTitle>
                    <CardDescription className={isMobile ? "text-xs" : ""}>Join or start a local community watch program</CardDescription>
                  </CardHeader>
                  <CardContent className={`space-y-3 sm:space-y-4 ${isMobile ? "py-3 px-3" : ""}`}>
                    <p className={isMobile ? "text-xs" : ""}>Neighborhood Watch is a community-led crime prevention program where citizens work together with local law enforcement to keep their communities safe.</p>
                    
                    <div className="bg-muted/30 p-2 sm:p-4 rounded-md">
                      <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Benefits of Joining</h4>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                        <li>Reduced crime rates in your area</li>
                        <li>Improved relationship with local police</li>
                        <li>Stronger community bonds</li>
                        <li>Faster emergency response</li>
                        <li>Better awareness of suspicious activities</li>
                      </ul>
                    </div>
                    
                    <Button size={isMobile ? "sm" : "default"} className="w-full sm:w-auto mt-2">Register Your Area</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className={isMobile ? "py-3 px-3" : ""}>
                    <CardTitle className={isMobile ? "text-base" : ""}>Upcoming Events</CardTitle>
                    <CardDescription className={isMobile ? "text-xs" : ""}>Community safety workshops and meetings</CardDescription>
                  </CardHeader>
                  <CardContent className={isMobile ? "py-3 px-3" : ""}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="border-l-4 border-primary pl-2 sm:pl-4 py-0.5 sm:py-1">
                        <p className="font-medium text-sm">Safety Workshop</p>
                        <p className="text-xs text-muted-foreground">May 15, 2025 • 10:00 AM</p>
                        <p className="text-xs mt-0.5 sm:mt-1">Central Community Center</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-2 sm:pl-4 py-0.5 sm:py-1">
                        <p className="font-medium text-sm">Neighborhood Watch Meeting</p>
                        <p className="text-xs text-muted-foreground">May 22, 2025 • 6:00 PM</p>
                        <p className="text-xs mt-0.5 sm:mt-1">District Police Station</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-2 sm:pl-4 py-0.5 sm:py-1">
                        <p className="font-medium text-sm">Self-Defense Training</p>
                        <p className="text-xs text-muted-foreground">June 5, 2025 • 9:00 AM</p>
                        <p className="text-xs mt-0.5 sm:mt-1">Sports Complex</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-3">
                  <CardHeader className={isMobile ? "py-3 px-3" : ""}>
                    <CardTitle className={isMobile ? "text-base" : ""}>Community Safety Resources</CardTitle>
                    <CardDescription className={isMobile ? "text-xs" : ""}>Tools and guides to help keep you and your community safe</CardDescription>
                  </CardHeader>
                  <CardContent className={isMobile ? "py-2 px-3" : ""}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                      <div className="bg-muted/30 p-2 sm:p-4 rounded-md">
                        <h4 className="font-medium mb-1 sm:mb-2 flex items-center text-sm">
                          <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Emergency Preparedness
                        </h4>
                        <p className="text-xs">Learn how to prepare for various emergencies including natural disasters and security threats.</p>
                        <Button variant="link" size="sm" className="mt-1 sm:mt-2 p-0 h-auto text-xs">Download Guide</Button>
                      </div>
                      
                      <div className="bg-muted/30 p-2 sm:p-4 rounded-md">
                        <h4 className="font-medium mb-1 sm:mb-2 flex items-center text-sm">
                          <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Emergency Contact Directory
                        </h4>
                        <p className="text-xs">A comprehensive list of emergency contacts for different situations.</p>
                        <Button variant="link" size="sm" className="mt-1 sm:mt-2 p-0 h-auto text-xs">View Directory</Button>
                      </div>
                      
                      <div className="bg-muted/30 p-2 sm:p-4 rounded-md">
                        <h4 className="font-medium mb-1 sm:mb-2 flex items-center text-sm">
                          <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Crime Prevention Tips
                        </h4>
                        <p className="text-xs">Practical advice to minimize risks and prevent common crimes in your area.</p>
                        <Button variant="link" size="sm" className="mt-1 sm:mt-2 p-0 h-auto text-xs">Learn More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="report">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-6">Report a Crime</h2>
              <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-lg border border-red-100 mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-red-700">Emergency Situation?</h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                  If you're experiencing an emergency that requires immediate assistance,
                  use the SOS button to call emergency services directly.
                </p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 flex items-center" 
                  size={isMobile ? "sm" : "default"}
                  onClick={() => document.querySelector('.sos-button')?.dispatchEvent(new MouseEvent('click'))}
                >
                  <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Call Emergency Services
                </Button>
              </div>
              
              <CrimeReportForm />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-3 sm:py-4 md:py-6">
        <div className="container mx-auto px-4 text-center text-xs md:text-sm text-gray-600">
          <p>&copy; 2025 Civic SOS Connect. All rights reserved.</p>
          <p className="mt-1 sm:mt-2">
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
