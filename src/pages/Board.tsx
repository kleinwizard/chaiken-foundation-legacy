import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';
import julieImage from '/lovable-uploads/46a45362-ce9e-4d76-a421-e15b7cc76559.png';
import sharonImage from '/lovable-uploads/d5935ae0-8858-4fdb-bde2-a7418139f92f.png';
import melissaImage from '/lovable-uploads/ac76a387-dfd3-4e83-8dd8-95625b97b8e0.png';

const boardMembers = [
  {
    id: "julie-chaiken",
    name: "Julie Chaiken",
    role: "President of the Board of Directors",
    icon: Award,
    colorClass: "from-primary/20 to-primary/30",
    badgeClass: "bg-primary/10 text-primary",
    bio: [
      "Julie Chaiken is the President of Davidon Corporation, one of Northern California's largest privately owned real estate development companies, which has created thousands of homes and impacted countless lives across the region. She is an accomplished entrepreneur, fashion designer, and philanthropist, and was the founder of the influential fashion line Chaiken. As President of the Board of Directors of the Chaiken Foundation, she brings decades of leadership experience, creative vision, and a deep commitment to social impact.",
      "Raised in Northern California, Chaiken earned her B.A. in History from UCLA before launching her career in media at USA Network. She went on to receive her MBA in Corporate Finance from NYU's Stern School of Business, a move that paved the way for her entry into the fashion industry. In 1994, she co-founded Chaiken and Capone, a fashion brand that quickly gained acclaim for its flattering, fashion-forward designs. By the late 1990s, her designs were featured in over 400 high-end boutiques and major retailers such as Barneys New York, Nordstrom, and Saks Fifth Avenue. Under her leadership, the brand evolved into the streamlined Chaiken label.",
      "After retiring from fashion in 2015, Chaiken shifted her focus to philanthropy and civic engagement. She has served on the board of the Center for Reproductive Rights, and currently holds leadership roles with Planned Parenthood Federation of America as Co-Chair of its Leadership Council. She is a founding board member of The Weekend To Be Named Later, a collaborative think-tank of changemakers.",
      "Through her work with the Chaiken Foundation, Julie continues to champion causes aligned with equity, justice, and opportunity, using her entrepreneurial background and strategic insight to guide the Foundation's mission-driven efforts.",
      "Julie lives in Marin County, California, and she is the proud mother of two children."
    ]
  },
  {
    id: "sharon-miller",
    name: "Sharon Miller",
    role: "Secretary, Board of Directors",
    icon: Briefcase,
    colorClass: "from-accent/20 to-accent/30",
    badgeClass: "bg-accent/10 text-accent-foreground",
    bio: [
      "Sharon Miller is an award-winning seasoned executive with over 30 years of experience in leadership, strategic marketing, nonprofit governance, and global mentorship. As the Secretary of the Board of Directors at the Chaiken Foundation, she combines her extensive expertise in business and philanthropy with a deep commitment to social impact and educational empowerment.",
      "Sharon earned a Bachelor's in International Affairs from The George Washington University and the American University in Paris in 1990 and has traveled to over 75 countries. This international foundation has informed her strategic approach to nonprofit work and global mentoring throughout her career.",
      "Professionally, she has held senior leadership positions at organizations such as Advera Health Analytics (acquired by TriNetX), NBC, Kaplan, Inc, HarperCollins Publishers, and Access Communications, where she excelled in marketing, business development, general management, and brand strategy.",
      "A founding board member of the Kaplan Educational Foundation, Sharon played a key role in developing the Foundation's Program. She has also served as an advisor to Pacific Community Ventures, helping small businesses in underserved communities, and as a Global Mentoring Advisor at The American University of Paris, mentoring students and young professionals worldwide, in addition to working with numerous other non-profits, including Jewish Family Services, The Jewish Federation of San Diego, Gmach and the Butterfly Project - an international Holocaust memorial program. She currently serves on the board of Thinkist, a venture aimed at bringing new educational ideas to life through cross-sector innovation. She actively advises and invests in ventures across a wide spectrum of industries.",
      "Based in La Jolla, California, with her husband and son, Sharon brings a deep understanding of nonprofit governance, stakeholder engagement, and organizational growth."
    ]
  },
  {
    id: "melissa-heller",
    name: "Melissa Heller",
    role: "Treasurer, Board of Directors",
    icon: GraduationCap,
    colorClass: "from-muted/30 to-muted/40",
    badgeClass: "bg-muted text-foreground",
    bio: [
      "Melissa Heller brings more than two decades of experience in executive search, nonprofit development, and entrepreneurship to her board service. She currently serves as an Executive Search Consultant at Guild Talent, where she has led leadership searches for venture- and private equity-backed companies since 2020.",
      "Melissa's career includes a strong track record in nonprofit development and fundraising. Her previous roles include Director of Development at Berkeley Hillel, Manager of Donor Relations at George Mark Children's House, and Development Officer at Seneca Family of Agencies. From 2010 to 2014, she provided independent consulting to a range of nonprofits, leading initiatives in donor engagement, event planning, and capital campaigns. Her work has consistently focused on building lasting donor relationships, managing complex development operations, and advancing organizational goals through strategic fundraising.",
      "She also has held executive recruiting roles at Korn/Ferry International and in the financial services sector, giving her a strong foundation in talent strategy and organizational leadership.",
      "Melissa earned her JD from Cardozo School of Law and holds a BA in Sociology and Women's Studies from Brandeis University.",
      "Deeply committed to community and Jewish life, Melissa served on the Board of Temple Sinai in Oakland from 2016 to 2022, where she also held leadership roles in development, search committees, and parent engagement. She currently serves on the Board of the Jewish Community High School of the Bay."
    ]
  }
];

const Board = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Board Title Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl elegant-shadow">
              <div className="text-center mb-8">
                <h2 className="font-display text-4xl lg:text-5xl font-medium mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Board of Directors
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="px-6 md:px-8 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {boardMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div key={member.id} id={member.id}>
                  <Card className="card-gradient elegant-shadow hover:hover-shadow transition-all duration-500 overflow-hidden">
                    <div className="relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={`w-full h-full bg-gradient-to-br ${member.colorClass}`}></div>
                      </div>
                      
                      <CardHeader className="relative">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          {/* Profile Image Placeholder */}
                           <div className="w-32 h-32 rounded-full mx-auto lg:mx-0 flex-shrink-0 overflow-hidden border-4 border-primary/20">
                             <img src={index === 0 ? julieImage : index === 1 ? sharonImage : melissaImage} alt={member.name} className={`w-full h-full object-cover ${index !== 0 ? 'filter grayscale' : ''}`} />
                           </div>
                          
                          {/* Name and Title */}
                          <div className="text-center lg:text-left flex-1">
                            <CardTitle className="font-display text-3xl lg:text-4xl mb-3">
                              {member.name}
                            </CardTitle>
                            <Badge className={`${member.badgeClass} text-sm font-medium px-4 py-2`}>
                              {member.role}
                            </Badge>
                            
                            {/* Leadership Highlights */}
                            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                              {index === 0 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Real Estate Leader</span>
                                  <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">Fashion Entrepreneur</span>
                                  <span className="text-xs bg-muted px-2 py-1 rounded-full">Philanthropist</span>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">30+ Years Experience</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Global Mentor</span>
                                  <span className="text-xs bg-muted px-2 py-1 rounded-full">75+ Countries</span>
                                </>
                              )}
                              {index === 2 && (
                                <>
                                  <span className="text-xs bg-muted px-2 py-1 rounded-full">Executive Search</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Legal Background</span>
                                  <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">Development Expert</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="relative">
                        <div className="space-y-6">
                          {member.bio.map((paragraph, paragraphIndex) => (
                            <div key={paragraphIndex}>
                              {paragraphIndex === 0 && (
                                <div className="bg-gradient-to-r from-accent-subtle/30 to-primary/5 p-4 rounded-lg border-l-4 border-accent mb-4">
                                  <p className="text-base leading-relaxed font-medium">
                                    {paragraph}
                                  </p>
                                </div>
                              )}
                              {paragraphIndex > 0 && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {paragraph}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Board;