import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const SeoOptimizer = () => {
  const [content, setContent] = useState("");
  const [keywords, setKeywords] = useState("");
  const [optimizedContent, setOptimizedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOptimizedContent(`# The Future of Remote Work: A Comprehensive Guide for 2024

Remote work has revolutionized how we approach our professional lives. In this comprehensive guide, we'll explore the latest trends, best practices, and essential tools for successful remote work implementation.

## Understanding Remote Work Trends in 2024

The landscape of remote work continues to evolve:
- Digital transformation is driving workplace innovation
- Hybrid work models are becoming the new standard
- Remote collaboration tools are more sophisticated than ever

## Key Benefits of Remote Work

Research shows that remote work offers numerous advantages:
1. Increased productivity and efficiency
2. Better work-life balance
3. Access to global talent pools
4. Reduced operational costs

## Essential Remote Work Tools and Technologies

To succeed in remote work, organizations need:
- Robust communication platforms
- Project management software
- Virtual collaboration tools
- Cloud-based storage solutions

## Best Practices for Remote Team Management

Effective remote team management requires:
- Clear communication protocols
- Regular virtual check-ins
- Structured feedback processes
- Team building activities

## Conclusion

As we continue to embrace remote work, organizations must stay adaptable and innovative in their approach to workplace management.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">SEO Optimizer</h1>
        <p className="text-muted-foreground">
          Optimize your content for search engines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Textarea
            placeholder="Paste your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px]"
          />

          <Input
            placeholder="Enter SEO keywords (comma-separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />

          <Button
            onClick={handleOptimize}
            disabled={!content || !keywords || loading}
            className="w-full"
          >
            {loading ? "Optimizing..." : "Optimize Content"}
          </Button>
        </div>

        <Card className="p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Optimized Content</h2>
          <Separator className="my-4" />
          {optimizedContent ? (
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap">{optimizedContent}</div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Optimized content will appear here...
            </p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default SeoOptimizer;