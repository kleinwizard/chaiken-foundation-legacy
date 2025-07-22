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

const values = [
  {
    number: 1,
    title: "Justice and Equity",
    description: "We are committed to fostering a society that is just, equitable, and inclusive for all. We believe in dismantling barriers to opportunity and amplifying voices that have historically been marginalized, ensuring that every person has the chance to participate fully in civic, cultural, and economic life.",
    icon: Scale
  },
  {
    number: 2,
    title: "Democratic Integrity",
    description: "We uphold the principles of democracy, civil liberties, and the protection of human rights. Our work strives to strengthen democratic institutions, support the rule of law, and ensure that future generations inherit a system that is open, accountable, and responsive to the needs of its people.",
    icon: Vote
  },
  {
    number: 3,
    title: "Human Dignity",
    description: "Guided by a deep respect for human dignity, we invest in initiatives that elevate the inherent worth of individuals and communities. We believe that every person deserves to be treated with respect and that our collective responsibility is to create an environment where all people can thrive with dignity and opportunity.",
    icon: Heart
  },
  {
    number: 4,
    title: "Women's Leadership",
    description: "We believe in the transformative power of women's leadership to build stronger, more resilient communities. By championing women's rights and leadership, we seek to create a future where women lead at all levels—political, social, and economic—thereby fostering more inclusive and empowered societies.",
    icon: Users
  },
  {
    number: 5,
    title: "Community Building and Connection",
    description: "We recognize the importance of nurturing connections that bridge divides, creating networks of support that allow individuals, families, and communities to flourish. Through our work, we aim to foster continuity, build shared purpose, and create lasting bonds that span generations and borders.",
    icon: Link
  },
  {
    number: 6,
    title: "Jewish Values and Traditions",
    description: "Rooted in Jewish principles, we believe in the enduring power of our traditions to inform an ethical and compassionate approach to philanthropy. Our work reflects values of justice, responsibility, and community, drawing on the rich legacy of Jewish history to inspire positive change.",
    icon: Star
  },
  {
    number: 7,
    title: "Creative Expression and the Arts",
    description: "We believe in the transformative potential of the arts to inspire empathy, ignite dialogue, and unite diverse communities. Through creative expression, we seek to build a society that values artistic endeavor as a tool for personal and collective growth, cultural understanding, and societal progress.",
    icon: Palette
  },
  {
    number: 8,
    title: "Long-Term Impact",
    description: "Our giving is defined by a commitment to sustainable change. We invest in solutions that address root causes, recognizing that lasting transformation takes time. We are dedicated to fostering systemic change that endures for generations, ensuring that the impact of our work continues to grow long after it begins.",
    icon: Target
  },
  {
    number: 9,
    title: "Collaboration and Partnership",
    description: "We understand that no change is achieved in isolation. By working together with like-minded organizations, communities, and leaders, we amplify our impact and co-create solutions that are meaningful, scalable, and aligned with our values. Through collaboration, we maximize the potential for lasting and impactful change.",
    icon: Handshake
  },
  {
    number: 10,
    title: "Clarity and Accountability",
    description: "We approach our work with transparency, clarity, and a sense of responsibility. Our commitment to thoughtful grantmaking and clear decision-making ensures that every dollar invested aligns with our mission and values, with measurable results that make a real difference in the lives of those we serve.",
    icon: CheckCircle
  }
];

const Values = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">Values of The Chaiken Foundation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Ten foundational principles guiding our philanthropic work
            </p>
          </div>

          <div className="grid gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.number} className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-display font-semibold text-accent">
                            {value.number}.
                          </span>
                          <CardTitle className="font-display text-xl">
                            {value.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed pl-16">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Values;