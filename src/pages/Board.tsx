import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const boardMembers = [
  {
    id: "julie-chaiken",
    name: "Julie Chaiken",
    role: "President of the Board of Directors",
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
    bio: [
      "Melissa brings more than twenty years of development experience in the nonprofit world to the Chaiken Foundation board. A native of New Jersey, she earned her BA from Brandeis University and her JD from Cardozo School of Law, Yeshiva University. She has served on a variety of boards and committees for school, community, and Jewish organizations in the East Bay. Melissa is a member of the Board of Temple Sinai in Oakland, where she serves on the development committee and was instrumental in leading the Temple's capital campaign. She has also served on multiple rabbi search committees. Melissa lives in Oakland with her husband, Steven Douglas, and their 6th-generation Bay Area children."
    ]
  }
];

const Board = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">Board of Directors</h1>
            <p className="text-xl text-muted-foreground">
              Meet the dedicated leaders guiding The Chaiken Foundation
            </p>
          </div>

          <div className="space-y-8">
            {boardMembers.map((member) => (
              <Card key={member.id} id={member.id} className="card-gradient card-shadow">
                <CardHeader>
                  <div className="text-center">
                    <CardTitle className="font-display text-2xl mb-2">
                      {member.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm font-medium">
                      {member.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {member.bio.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;