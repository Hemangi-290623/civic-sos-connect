
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileConstitutionView = () => {
  const [openArticle, setOpenArticle] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setOpenArticle(openArticle === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Constitutional Resources</h2>
      <p className="text-muted-foreground text-sm">
        Explore the foundational documents and rights that govern our society.
      </p>
      
      <Card>
        <CardHeader className="py-3 px-3">
          <CardTitle className="text-base">Fundamental Rights</CardTitle>
          <CardDescription className="text-xs">Articles 12-35 of the Constitution of India</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-3 py-2">
          <Collapsible open={openArticle === "right-equality"} onOpenChange={() => toggleArticle("right-equality")}>
            <CollapsibleTrigger className="flex justify-between w-full items-center text-left font-medium text-sm">
              Right to Equality
              <ArrowRight className={`h-3 w-3 transition-transform ${openArticle === "right-equality" ? "rotate-90" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2 bg-muted/30 rounded-md mt-2 text-xs">
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Article 14:</strong> Equality before law</li>
                <li><strong>Article 15:</strong> Non-discrimination</li>
                <li><strong>Article 16:</strong> Equal opportunity</li>
                <li><strong>Article 17:</strong> End of untouchability</li>
                <li><strong>Article 18:</strong> Abolition of titles</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={openArticle === "right-freedom"} onOpenChange={() => toggleArticle("right-freedom")}>
            <CollapsibleTrigger className="flex justify-between w-full items-center text-left font-medium text-sm">
              Right to Freedom
              <ArrowRight className={`h-3 w-3 transition-transform ${openArticle === "right-freedom" ? "rotate-90" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2 bg-muted/30 rounded-md mt-2 text-xs">
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Article 19:</strong> Six freedoms</li>
                <li><strong>Article 20:</strong> Protection against conviction</li>
                <li><strong>Article 21:</strong> Right to life</li>
                <li><strong>Article 22:</strong> Protection against arrest</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="py-3 px-3">
          <CardTitle className="text-base">Fundamental Duties</CardTitle>
          <CardDescription className="text-xs">Article 51A of the Constitution</CardDescription>
        </CardHeader>
        <CardContent className="px-3 py-2">
          <p className="text-xs mb-2">Added in 1976, these balance rights with responsibilities.</p>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li>Respect Constitution and national symbols</li>
            <li>Cherish freedom struggle ideals</li>
            <li>Protect India's sovereignty</li>
            <li>Defend the country when called</li>
            <li>Promote harmony and brotherhood</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="mt-4 flex justify-center">
        <Button size="sm" variant="outline" className="flex items-center text-xs" onClick={() => window.open("https://legislative.gov.in/constitution-of-india/", "_blank")}>
          Read Full Constitution <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default MobileConstitutionView;
