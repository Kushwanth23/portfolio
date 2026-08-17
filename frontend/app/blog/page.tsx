import type { Metadata } from "next";
import { ExternalLink, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Publications",
  description: "Research publications and writings by Kushwanth Chandra Medasani.",
};

const publications: {
  title: string;
  venue: string;
  description: string;
  tags: string[];
  url: string;
  icon: string;
}[] = [
  {
    title:
      "Comparative Analysis of Faster R-CNN Models for Coconut Tree Detection: ResNet-101, MobileNetV2, VGG16",
    venue: "Elsevier SSRN",
    description:
      "This research investigates gender classification using facial images with CNNs, comparing ResNet-50, InceptionV3, ZFNet, and NASNetLarge models. InceptionV3 and NASNetLarge show superior accuracy. Combining these models into an ensemble, IrisFusionNet, enhances gender profiling, highlighting the importance of model selection in data-limited scenarios.",
    tags: ["Deep Learning", "CNN", "ResNet", "MobileNetV2", "VGG16"],
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4823814",
    icon: "🌴",
  },
  {
    title:
      "Coconut Tree Detection in Coastal Areas with Fast-RCNN Using Resnet-50",
    venue: "Global Conference on Information Technologies and Communications (GCITC)",
    description:
      "Automated coconut tree detection in coastal areas using Fast R-CNN with ResNet50. Through parameter tuning, achieved over 90% detection confidence, surpassing manual methods. This breakthrough optimizes plantation monitoring, promising ecological and economic benefits for tropical regions.",
    tags: ["Fast R-CNN", "ResNet-50", "Object Detection", "Computer Vision"],
    url: "https://ieeexplore.ieee.org/document/10426612",
    icon: "🌴",
  },
  {
    title: "Sustainable Development of Community using Green Marketing",
    venue:
      "2023 3rd International Conference on Smart Data Intelligence (ICSMDI)",
    description:
      "Implemented Green Marketing principles in agriculture, connecting producers directly with consumers to streamline profit margins from intermediaries. Developed a user-centric Java and XML application with Firebase for transparent payments. Innovated a solution to deliver farm produce like vegetables and grains directly to urban consumers, addressing time constraints and convenience.",
    tags: ["Green Marketing", "Agriculture Tech", "Firebase", "Java"],
    url: "https://ieeexplore.ieee.org/document/10127658",
    icon: "🌱",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="h-3 w-3" />
              PUBLICATIONS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Research &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Peer-reviewed research in computer vision, deep learning, and sustainable technology.
            </p>
          </div>

          {/* Publication cards */}
          <div className="space-y-6">
            {publications.map((pub) => {
              return (
                <div
                  key={pub.title}
                  className="bg-card border border-border rounded-2xl p-6 space-y-4 hover:border-border/80 transition-colors"
                >
                  <div className="flex items-start gap-4">
                      <span className="text-3xl shrink-0 mt-0.5">{pub.icon}</span>
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-semibold text-foreground leading-snug">
                          {pub.title}
                        </h2>
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-medium text-primary">{pub.venue}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pub.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs rounded-md border border-border bg-secondary/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Blog coming soon */}
          <div className="border-t border-border pt-12 text-center space-y-4">
            <h3 className="text-lg font-semibold">Blog — Coming Soon</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Writing about AI engineering, building with LLMs, FastAPI patterns, and lessons from the trenches.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
