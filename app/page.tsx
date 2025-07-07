import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800">Muhammad Mubashir</h1>
        <p className="text-lg text-gray-600">
          AI Engineer | Data Scientist | Machine Learning Specialist
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="mailto:mubashiryaseen@hotmail.com">
            <Button variant="outline">Contact Me</Button>
          </Link>
          <Link href="https://github.com/mubashir-yaseen" target="_blank">
            <Button variant="ghost">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Professional Summary</h2>
        <p className="text-gray-700">
          Results-driven AI engineer with a strong background in Electrical Engineering and expertise in
          Machine Learning, Deep Learning, NLP, and Generative AI. Adept in developing end-to-end AI
          systems, LLM-powered tools, and cloud deployments using Azure, AWS, and GCP.
        </p>
      </section>
    </div>
  );
}
