
import { Button } from "@/components/ui/button";
import { BookOpen, MenuIcon, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <h1 className="text-xl font-bold">Civic SOS Connect</h1>
        </div>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
            
            {menuOpen && (
              <div className="absolute top-16 right-0 left-0 bg-primary z-50 shadow-lg">
                <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                  <Button variant="ghost" className="justify-start">
                    <BookOpen className="mr-2 h-4 w-4" /> Constitution
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Rights & Duties
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Resources
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Contact
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
