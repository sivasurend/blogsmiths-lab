import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";
import { FeedbackDialog } from "@/components/FeedbackDialog";

const ContentGenerator = () => {
  const [research, setResearch] = useState("");
  const [instructions, setInstructions] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setContent(`# The Future of Remote Work: Embracing the Digital Transformation

In recent years, the landscape of work has undergone a dramatic transformation. As organizations worldwide adapt to new ways of operating, remote work has emerged as more than just a temporary solution—it's becoming a permanent fixture in the modern workplace.

## The Current State of Remote Work

Recent studies have shown a significant shift in workplace dynamics:
- 77% of workers report increased productivity when working remotely
- 85% of employees prefer hybrid work models
- There's been a 42% increase in the adoption of remote work tools

## Overcoming Common Challenges

While remote work offers numerous benefits, organizations must address several key challenges:

1. Communication Barriers
2. Team Collaboration
3. Virtual Team Building

## Looking Ahead

As we move forward, the focus on digital transformation will continue to shape how we work, collaborate, and succeed in the remote work environment.`);
      setLoading(false);
    }, 2000);
  };

  const handleFeedbackSubmit = (feedback: string) => {
    toast({
      title: "Feedback submitted",
      description: "Your feedback has been recorded. Regenerating content...",
    });
    handleGenerate();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">
          Block Generator
        </h1>
        <p className="text-muted-foreground">
          Transform your research into a well-structured blog post
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Textarea
            placeholder="Paste your research content here..."
            value={research}
            onChange={(e) => setResearch(e.target.value)}
            className="min-h-[200px]"
          />

          <Textarea
            placeholder="Enter additional instructions..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="min-h-[100px]"
          />

          <Button
            onClick={handleGenerate}
            disabled={!research || !instructions || loading}
            className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90"
          >
            {loading ? "Generating..." : "Generate Content"}
          </Button>
        </div>

        <Card className="p-6 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Generated Content</h2>
            {content && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFeedbackOpen(true)}
                className="text-[#ea384c]"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate output
              </Button>
            )}
          </div>
          <Separator className="my-4" />
          {content ? (
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap">{content}</div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Generated content will appear here...
            </p>
          )}
        </Card>
      </div>

      <FeedbackDialog
        open={feedbackOpen}
        onOpenChange={setFeedbackOpen}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
};

export default ContentGenerator;