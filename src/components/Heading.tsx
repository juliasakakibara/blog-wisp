import React from "react";

interface HeadingProps {
  industry: string;
  client: string;
  year: string | number;
  experience: string;
}

export const Heading: React.FC<HeadingProps> = ({ industry, client, year, experience }) => (
  <div className="flex flex-wrap gap-8 mb-8">
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs font-medium tracking-wide mb-1">INDUSTRY:</span>
      <span className="text-foreground text-base font-semibold">{industry}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs font-medium tracking-wide mb-1">CLIENT:</span>
      <span className="text-foreground text-base font-semibold">{client}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs font-medium tracking-wide mb-1">YEAR:</span>
      <span className="text-foreground text-base font-semibold">{year}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs font-medium tracking-wide mb-1">EXPERIENCE:</span>
      <span className="text-foreground text-base font-semibold">{experience}</span>
    </div>
  </div>
);
