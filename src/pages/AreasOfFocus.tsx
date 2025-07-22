import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const focusAreas = [
  {
    title: "Jewish Community",
    percentage: 50,
    description: "50% of all Annual Giving",
    subAreas: [
      "SF Local",
      "Diaspora - National", 
      "Israel - Fortifying Israel Long-term; Not Social Programs"
    ],
    color: "#1e40af",
    detailedDescription: "Our largest area of focus reflects our deep commitment to Jewish communities worldwide. We support local San Francisco organizations, national diaspora initiatives, and strategic long-term investments in Israel's security and resilience. Our Israel giving specifically focuses on fortifying the country's long-term stability rather than short-term social programs, ensuring sustainable impact for future generations.",
    keyInitiatives: [
      "Local SF Jewish community organizations and synagogues",
      "National Jewish advocacy and educational institutions",
      "Israel defense and security infrastructure projects",
      "Jewish cultural preservation and continuity programs"
    ]
  },
  {
    title: "Abortion/Women's Rights",
    percentage: 12.5,
    description: "Supporting reproductive freedom and women's leadership",
    color: "#7c3aed",
    detailedDescription: "We champion women's rights and reproductive freedom as fundamental to building equitable societies. Our investments support organizations working to protect reproductive access, advance women's leadership in all sectors, and create systemic change that empowers women as changemakers.",
    keyInitiatives: [
      "Reproductive rights advocacy organizations",
      "Women's leadership development programs",
      "Legal defense funds for reproductive access",
      "Women-led social justice initiatives"
    ]
  },
  {
    title: "Arts/Culture",
    percentage: 12.5,
    description: "Creative expression and cultural understanding",
    color: "#dc2626",
    detailedDescription: "We believe in the transformative power of arts and culture to build bridges, foster empathy, and strengthen communities. Our cultural investments support artistic expression, cultural preservation, and creative programs that bring diverse communities together.",
    keyInitiatives: [
      "Community arts programs and cultural centers",
      "Artist residencies and creative fellowships",
      "Cultural preservation and heritage projects",
      "Arts education and accessibility programs"
    ]
  },
  {
    title: "Democracy",
    percentage: 12.5,
    description: "Protecting democratic institutions and civil liberties",
    color: "#059669",
    detailedDescription: "Our democracy work focuses on strengthening democratic institutions, protecting civil liberties, and ensuring that all people can participate fully in civic life. We support organizations working to defend voting rights, combat authoritarianism, and promote transparent governance.",
    keyInitiatives: [
      "Voting rights protection and election security",
      "Civic engagement and voter education programs", 
      "Democracy reform and transparency initiatives",
      "Civil liberties defense organizations"
    ]
  },
  {
    title: "Other Strategic Initiatives",
    percentage: 12.5,
    description: "Additional mission-aligned opportunities",
    color: "#d97706",
    detailedDescription: "This category allows us flexibility to support emerging opportunities and innovative approaches that align with our mission but may not fit neatly into our other focus areas. These investments often represent cutting-edge solutions to systemic challenges.",
    keyInitiatives: [
      "Innovative social justice experiments",
      "Cross-sector collaborative initiatives",
      "Emerging technology for social good",
      "Strategic capacity building for nonprofits"
    ]
  }
];

const AreasOfFocus = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">Areas of Focus</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic investments aligned with our mission and values
            </p>
          </div>

          {/* Key Principle */}
          <div className="bg-accent-subtle p-6 rounded-lg mb-12 text-center">
            <p className="text-lg font-medium">
              <strong>Foundational Principle:</strong> No more than 10% of any nonprofit's Budget
            </p>
          </div>

          {/* Allocation Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-display font-medium mb-6 text-center">
                Annual Giving Allocation
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={focusAreas}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="percentage"
                      label={({ title, percentage }) => `${title}: ${percentage}%`}
                    >
                      {focusAreas.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Allocation']}
                      labelFormatter={(label) => focusAreas.find(area => area.title === label)?.title}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: area.color }}
                      aria-hidden="true"
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium">{area.title}</div>
                      <div className="text-sm text-muted-foreground">{area.percentage}%</div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Learn more about {area.title}</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: area.color }}
                            ></div>
                            {area.title}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {area.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-sm leading-relaxed">
                            {area.detailedDescription}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2">Key Initiatives:</h4>
                            <ul className="space-y-1">
                              {area.keyInitiatives?.map((initiative, index) => (
                                <li key={index} className="text-sm flex items-start gap-2">
                                  <span className="text-accent font-medium">•</span>
                                  <span>{initiative}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Focus Areas */}
          <div className="grid gap-6">
            {/* Jewish Community - Featured prominently */}
            <Card className="card-gradient card-shadow">
              <CardHeader>
                <CardTitle className="font-display text-2xl flex items-center gap-3 justify-center text-center">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: focusAreas[0].color }}
                  ></div>
                  Jewish Community
                </CardTitle>
                <CardDescription className="text-lg text-center">
                  50% of all Annual Giving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>SF Local</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Diaspora -</strong> National</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Israel -</strong> Fortifying Israel Long-term; Not Social Programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Other Focus Areas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.slice(1).map((area) => (
                <Dialog key={area.title}>
                  <DialogTrigger asChild>
                    <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="font-display text-xl flex items-center gap-3 justify-center text-center">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: area.color }}
                          ></div>
                          {area.title}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {area.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: area.color }}
                        ></div>
                        {area.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {area.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm leading-relaxed">
                        {area.detailedDescription}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Initiatives:</h4>
                        <ul className="space-y-1">
                          {area.keyInitiatives?.map((initiative, index) => (
                            <li key={index} className="text-sm flex items-start gap-2">
                              <span className="text-accent font-medium">•</span>
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AreasOfFocus;
