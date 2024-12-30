import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const TopicGenerator = () => {
  const [instructions, setInstructions] = useState("");
  const [funnelType, setFunnelType] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTopics([
        "10 Essential Tips for Remote Work Productivity",
        "The Future of Remote Work: Trends to Watch in 2024",
        "Building a Successful Remote Work Culture",
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Topic Generator</h1>
        <p className="text-muted-foreground">
          Generate engaging blog topics based on your requirements
        </p>
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="Enter your instructions here..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="min-h-[120px]"
        />

        <Select value={funnelType} onValueChange={setFunnelType}>
          <SelectTrigger>
            <SelectValue placeholder="Select funnel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tofu">Top of Funnel (TOFU)</SelectItem>
            <SelectItem value="mofu">Middle of Funnel (MOFU)</SelectItem>
            <SelectItem value="bofu">Bottom of Funnel (BOFU)</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleGenerate}
          disabled={!instructions || !funnelType || loading}
          className="w-full"
        >
          {loading ? "Generating..." : "Generate Topics"}
        </Button>
      </div>

      {topics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Generated Topics</h2>
          <div className="space-y-3">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {topic}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicGenerator;