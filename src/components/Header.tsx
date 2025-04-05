
import { Button } from "@/components/ui/button";
import { BookOpen, MenuIcon, Shield, LogIn } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInAnonymously } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleAnonymousSignIn = async () => {
    try {
      await signInAnonymously(auth);
      toast({
        title: "Signed in",
        description: "You are now signed in anonymously for emergency services.",
      });
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: "Failed to sign in anonymously.",
      });
    }
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
          <h1 className="text-lg sm:text-xl font-bold">Civic SOS Connect</h1>
        </div>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="mobile-menu-trigger p-1.5"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
            
            {menuOpen && (
              <div className="absolute top-12 sm:top-16 right-0 left-0 bg-primary z-50 shadow-lg">
                <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                  <Button variant="ghost" className="justify-start text-sm h-9">
                    <BookOpen className="mr-2 h-4 w-4" /> Constitution
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm h-9">
                    Rights & Duties
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm h-9">
                    Resources
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm h-9">
                    Contact
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm h-9" onClick={handleAnonymousSignIn}>
                    <LogIn className="mr-2 h-4 w-4" /> Quick Sign-in
                  </Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-4">
            <Button variant="ghost">
              <BookOpen className="mr-2 h-4 w-4" /> Constitution
            </Button>
            <Button variant="ghost">Rights & Duties</Button>
            <Button variant="ghost">Resources</Button>
            <Button variant="ghost">Contact</Button>
            <Button variant="outline" onClick={handleAnonymousSignIn}>
              <LogIn className="mr-2 h-4 w-4" /> Quick Sign-in
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
