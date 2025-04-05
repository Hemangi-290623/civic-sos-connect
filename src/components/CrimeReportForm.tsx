
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const CrimeReportForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast("Report submitted", {
        description: "Your crime report has been submitted successfully.",
      });
      setIsSubmitting(false);
      setFormData({
        type: "",
        location: "",
        description: "",
        contact: "",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Report a Crime</CardTitle>
        <CardDescription>
          Use this form for non-emergency situations. For emergencies, use the SOS button.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="crime-form">
          <div className="space-y-2">
            <Label htmlFor="type">Type of Incident</Label>
            <Select value={formData.type} onValueChange={handleSelectChange} required>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="vandalism">Vandalism</SelectItem>
                <SelectItem value="assault">Assault</SelectItem>
                <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Address or location description"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what happened in detail"
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Information</Label>
            <Input
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone or email (optional)"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CrimeReportForm;
