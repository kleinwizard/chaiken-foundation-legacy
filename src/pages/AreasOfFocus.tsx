import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Palette, Vote, Plus } from 'lucide-react';
import jewishCommunityImage from '@/assets/jewish-community.jpg';
import womensRightsImage from '@/assets/womens-rights.jpg';
import artsCultureImage from '@/assets/arts-culture.jpg';
import democracyImage from '@/assets/democracy.jpg';
import strategicInitiativesImage from '@/assets/strategic-initiatives.jpg';

const focusAreas = [
  {
    title: "Jewish Community",
    description: "Supporting Jewish communities worldwide",
    icon: Heart,
    image: jewishCommunityImage,
    subAreas: [
      "SF Local",
      "Diaspora - National", 
      "Israel - Fortifying Israel Long-term"
    ],
    color: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
    iconColor: "text-blue-600",
    detailedDescription: "Our largest area of focus reflects our deep commitment to Jewish communities worldwide. We support local San Francisco organizations, national diaspora initiatives, and strategic long-term investments in Israel's security and resilience. Our Israel giving specifically focuses on fortifying the country's long-term stability rather than short-term social programs, ensuring sustainable impact for future generations.",
    keyInitiatives: [
      "Local SF Jewish community organizations and synagogues",
      "National Jewish advocacy and educational institutions",
      "Israel defense and security infrastructure projects",
      "Jewish cultural preservation and continuity programs"
    ]
  },
  {
    title: "Women's Rights",
    description: "Supporting reproductive freedom and women's leadership",
    icon: Shield,
    image: womensRightsImage,
    color: "bg-gradient-to-br from-purple-500/20 to-purple-600/30",
    iconColor: "text-purple-600",
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
    description: "Creative expression and cultural understanding",
    icon: Palette,
    image: artsCultureImage,
    color: "bg-gradient-to-br from-red-500/20 to-red-600/30",
    iconColor: "text-red-600",
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
    description: "Protecting democratic institutions and civil liberties",
    icon: Vote,
    image: democracyImage,
    color: "bg-gradient-to-br from-green-500/20 to-green-600/30",
    iconColor: "text-green-600",
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
    description: "Additional mission-aligned opportunities",
    icon: Plus,
    image: strategicInitiativesImage,
    color: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    iconColor: "text-orange-600",
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
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-background/95 backdrop-blur-sm rounded-2xl p-12 elegant-shadow">
                <h1 className="mb-6 text-center">
                  Focus
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Strategic investments aligned with our mission and values, creating lasting impact across communities
                </p>
              </div>
            </div>
          </section>

          {/* Focus Areas Grid */}
          <div className="grid gap-8 mb-16">
            {/* Jewish Community - Featured prominently */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img src={focusAreas[0].image} alt="Jewish Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-display text-2xl mb-2">
                      Jewish Community
                    </CardTitle>
                    <CardDescription className="text-lg text-center">
                      Supporting Jewish communities worldwide
                    </CardDescription>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-center justify-center">
                    {focusAreas[0].title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-center">
                    {focusAreas[0].description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Sub-Areas:</h4>
                    <ul className="space-y-1">
                      {focusAreas[0].subAreas?.map((area, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-accent font-medium">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {focusAreas[0].detailedDescription}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Initiatives:</h4>
                    <ul className="space-y-1">
                      {focusAreas[0].keyInitiatives?.map((initiative, index) => (
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

            {/* Other Focus Areas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.slice(1).map((area) => {
                const IconComponent = area.icon;
                return (
                  <Dialog key={area.title}>
                    <DialogTrigger asChild>
                      <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer group h-full">
                        <div className="relative h-32 overflow-hidden rounded-t-lg">
                          <img src={area.image} alt={area.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <CardHeader className="text-center pt-4 pb-4">
                          <CardTitle className="font-display text-lg text-center mb-1">
                            {area.title}
                          </CardTitle>
                          <CardDescription className="text-center text-xs px-2">
                            {area.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-center justify-center">
                          {area.title}
                        </DialogTitle>
                        <DialogDescription className="text-base text-center">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AreasOfFocus;
