import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Send } from "lucide-react";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (feedback: string) => void;
}

export function FeedbackDialog({ open, onOpenChange, onSubmit }: FeedbackDialogProps) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <span className="i-lucide-message-square text-2xl" /> Feedback
          </DialogTitle>
          <DialogDescription>
            Provide your feedback to improve the blog post...
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[200px]"
            placeholder="Your feedback here..."
          />
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90"
            disabled={!feedback.trim()}
          >
            <Send className="mr-2 h-4 w-4" />
            Send Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}