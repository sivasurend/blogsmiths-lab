import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Research = () => {
  const [topic, setTopic] = useState("");
  const [instructions, setInstructions] = useState("");
  const [research, setResearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResearch = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResearch(
        "Research findings:\n\n1. Market Analysis\n- Growing trend in remote work adoption\n- 42% increase in remote work tools usage\n\n2. Key Statistics\n- 77% of workers report increased productivity\n- 85% prefer hybrid work models\n\n3. Expert Insights\n- Industry leaders predict permanent shift\n- Focus on digital transformation\n\n4. Challenges & Solutions\n- Communication barriers\n- Team collaboration tools\n- Virtual team building"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Blog Research</h1>
        <p className="text-muted-foreground">
          Conduct comprehensive research for your blog topic
        </p>
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="Enter your blog topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="min-h-[100px]"
        />

        <Textarea
          placeholder="Enter additional research instructions..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="min-h-[100px]"
        />

        <Button
          onClick={handleResearch}
          disabled={!topic || !instructions || loading}
          className="w-full"
        >
          {loading ? "Researching..." : "Start Research"}
        </Button>
      </div>

      {research && (
        <Card className="p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Research Results</h2>
          <Separator className="my-4" />
          <div className="whitespace-pre-wrap">{research}</div>
        </Card>
      )}
    </div>
  );
};

export default Research;