"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineExperience {
  jobTitle: string;
  jobPlace: string;
  timeSpent: string;
  description?: string;
}

export interface ExperienceTimelineProps {
  experiences: TimelineExperience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="w-full">
      <div className="space-y-8 relative">
        {/* Vertical line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-transparent" />

        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-16">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 size-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Content card */}
            <Card className="hover:shadow-md transition-shadow rounded-none">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      {experience.jobTitle}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mt-1">
                      {experience.jobPlace}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="whitespace-nowrap">
                    {experience.timeSpent}
                  </Badge>
                </div>
              </CardHeader>
              {experience.description && (
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
