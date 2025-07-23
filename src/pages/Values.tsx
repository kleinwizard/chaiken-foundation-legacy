import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Scale, 
  Vote, 
  Heart, 
  Users, 
  Link, 
  Star, 
  Palette, 
  Target, 
  Handshake, 
  CheckCircle 
} from 'lucide-react';
import justiceEquityImage from '@/assets/justice-equity-scales.jpg';
import democraticIntegrityImage from '@/assets/democratic-integrity.jpg';
import humanDignityImage from '@/assets/human-dignity-community.jpg';
import womensLeadershipImage from '@/assets/womens-rights-diverse.jpg';
import communityBuildingImage from '@/assets/community-building-jewish.jpg';
import jewishValuesImage from '@/assets/jewish-values-authentic.jpg';
import creativeExpressionImage from '@/assets/creative-expression.jpg';
import longTermImpactImage from '@/assets/long-term-impact.jpg';
import collaborationImage from '@/assets/collaboration.jpg';
import clarityAccountabilityImage from '@/assets/clarity-accountability.jpg';

const values = [
  {
    number: 1,
    title: "Justice and Equity",
    description: "We are committed to fostering a society that is just, equitable, and inclusive for all. We believe in dismantling barriers to opportunity and amplifying voices that have historically been marginalized, ensuring that every person has the chance to participate fully in civic, cultural, and economic life.",
    icon: Scale,
    image: justiceEquityImage,
    color: "from-blue-500/20 to-blue-600/30"
  },
  {
    number: 2,
    title: "Democratic Integrity",
    description: "We uphold the principles of democracy, civil liberties, and the protection of human rights. Our work strives to strengthen democratic institutions, support the rule of law, and ensure that future generations inherit a system that is open, accountable, and responsive to the needs of its people.",
    icon: Vote,
    image: democraticIntegrityImage,
    color: "from-green-500/20 to-green-600/30"
  },
  {
    number: 3,
    title: "Human Dignity",
    description: "Guided by a deep respect for human dignity, we invest in initiatives that elevate the inherent worth of individuals and communities. We believe that every person deserves to be treated with respect and that our collective responsibility is to create an environment where all people can thrive with dignity and opportunity.",
    icon: Heart,
    image: humanDignityImage,
    color: "from-red-500/20 to-red-600/30"
  },
  {
    number: 4,
    title: "Women's Rights",
    description: "We believe in the transformative power of women's leadership to build stronger, more resilient communities. By championing women's rights and leadership, we seek to create a future where women lead at all levels—political, social, and economic—thereby fostering more inclusive and empowered societies.",
    icon: Star,
    image: womensLeadershipImage,
    color: "from-purple-500/20 to-purple-600/30"
  },
  {
    number: 5,
    title: "Community Building and Connection",
    description: "We recognize the importance of nurturing connections that bridge divides, creating networks of support that allow individuals, families, and communities to flourish. Through our work, we aim to foster continuity, build shared purpose, and create lasting bonds that span generations and borders.",
    icon: Users,
    image: communityBuildingImage,
    color: "from-orange-500/20 to-orange-600/30"
  },
  {
    number: 6,
    title: "Jewish Values and Traditions",
    description: "Rooted in Jewish principles, we believe in the enduring power of our traditions to inform an ethical and compassionate approach to philanthropy. Our work reflects values of justice, responsibility, and community, drawing on the rich legacy of Jewish history to inspire positive change.",
    icon: Star,
    image: jewishValuesImage,
    color: "from-indigo-500/20 to-indigo-600/30"
  },
  {
    number: 7,
    title: "Creative Expression and the Arts",
    description: "We believe in the transformative potential of the arts to inspire empathy, ignite dialogue, and unite diverse communities. Through creative expression, we seek to build a society that values artistic endeavor as a tool for personal and collective growth, cultural understanding, and societal progress.",
    icon: Palette,
    image: creativeExpressionImage,
    color: "from-pink-500/20 to-pink-600/30"
  },
  {
    number: 8,
    title: "Long-Term Impact",
    description: "Our giving is defined by a commitment to sustainable change. We invest in solutions that address root causes, recognizing that lasting transformation takes time. We are dedicated to fostering systemic change that endures for generations, ensuring that the impact of our work continues to grow long after it begins.",
    icon: Target,
    image: longTermImpactImage,
    color: "from-teal-500/20 to-teal-600/30"
  },
  {
    number: 9,
    title: "Collaboration and Partnership",
    description: "We understand that no change is achieved in isolation. By working together with like-minded organizations, communities, and leaders, we amplify our impact and co-create solutions that are meaningful, scalable, and aligned with our values. Through collaboration, we maximize the potential for lasting and impactful change.",
    icon: Handshake,
    image: collaborationImage,
    color: "from-cyan-500/20 to-cyan-600/30"
  },
  {
    number: 10,
    title: "Clarity and Accountability",
    description: "We approach our work with transparency, clarity, and a sense of responsibility. Our commitment to thoughtful grantmaking and clear decision-making ensures that every dollar invested aligns with our mission and values, with measurable results that make a real difference in the lives of those we serve.",
    icon: CheckCircle,
    image: clarityAccountabilityImage,
    color: "from-emerald-500/20 to-emerald-600/30"
  }
];

const Values = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Values Title Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl elegant-shadow">
              <div className="text-center mb-8">
                <h2 className="font-display text-4xl lg:text-5xl font-medium mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Values
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
                Our foundational principles guide every decision and investment we make
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.number} className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-xl text-center">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Values;