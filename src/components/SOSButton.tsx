
import { useState } from 'react';
import { AlertCircle, Phone } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SOSButton = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const emergencyNumber = "100"; // Updated to use India's police emergency number

  const handleEmergencyCall = async () => {
    try {
      // Use the tel protocol to initiate a phone call
      window.location.href = `tel:${emergencyNumber}`;
      
      // Log emergency call to Firebase
      try {
        await addDoc(collection(db, "emergencyCalls"), {
          timestamp: serverTimestamp(),
          phoneNumber: emergencyNumber,
          status: "initiated",
          userAgent: navigator.userAgent,
          // User location can be added here if permission is granted
        });
      } catch (firebaseError) {
        console.error("Failed to log emergency call to Firebase:", firebaseError);
      }
      
      // Show toast notification
      toast({
        title: "Calling emergency services",
        description: `Dialing ${emergencyNumber}...`,
        duration: 5000,
      });
    } catch (error) {
      console.error("Failed to initiate emergency call:", error);
      toast({
        variant: "destructive",
        title: "Call failed",
        description: "Unable to initiate the emergency call. Please dial manually.",
      });
    }
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="sos-button sos-button-pulse w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"
        aria-label="Emergency SOS Button"
      >
        <Phone className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-[90%] md:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center text-red-600">
              <AlertCircle className="mr-2 h-6 w-6" /> Emergency Assistance
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will immediately dial {emergencyNumber} for emergency services. 
              Only use this feature in case of a genuine emergency.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleEmergencyCall}
              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
            >
              Call {emergencyNumber}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SOSButton;
