import { Layout } from '@/components/Layout';
import { Quote } from 'lucide-react';

const Mission = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
            <Quote className="h-8 w-8 text-accent" />
          </div>
          <h1 className="mb-6">Mission Statement</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Our commitment to building a more just, democratic, and pluralistic society
          </p>
        </div>
      </section>

      {/* Mission Statement Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Foundation Title Card */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl elegant-shadow">
              <div className="text-center mb-8">
                <h2 className="font-display text-4xl lg:text-5xl font-medium mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  The Chaiken Foundation
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-center max-w-none">
                <p>
                  The Chaiken Foundation is committed to building a more just, democratic, and pluralistic society. 
                  Rooted in the legacy of Donald and Carole Chaiken (Donald and Carole Chaiken Foundation)—visionary 
                  builders, principled leaders, and determined problem-solvers—the Foundation invests in bold ideas 
                  and enduring partnerships that strengthen communities for generations to come.
                </p>

                <div className="bg-accent-subtle/50 p-6 rounded-lg border-l-4 border-accent text-center">
                  <p className="font-medium text-accent-foreground">
                    In 26 years of dedicated philanthropy, Donald and Carole Chaiken directed over 4,200 grants—building 
                    a legacy defined by principled giving, public responsibility, and a deep commitment to human dignity. 
                    Today, the Chaiken Foundation carries that legacy forward with the same commitment to long-term, 
                    systemic solutions at the intersection of democracy, women's rights, and the flourishing of Jewish 
                    communities in the U.S., Israel, and around the world.
                  </p>
                </div>

                <p className="text-center">
                  We believe in the enduring power of Jewish values to inform a more ethical, equitable society and 
                  invest in organizations that foster connection, continuity, and a shared sense of purpose across 
                  generations and borders.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-primary">Women's Leadership</h3>
                    <p>
                      Central to our mission is the advancement of women's rights and leadership. We believe that uplifting 
                      women as changemakers is essential to building strong, inclusive, and resilient societies. When women 
                      lead, communities thrive.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-accent-foreground">Democratic Values</h3>
                    <p>
                      We champion efforts that defend democratic institutions, protect civil liberties, and expand access 
                      to opportunity, ensuring that all people can participate fully in civic and cultural life.
                    </p>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-muted/50 to-accent-subtle/30 rounded-lg">
                  <p className="italic">
                    We also believe in the power of the arts to inspire empathy, foster deeper dialogue, and unite diverse 
                    communities. By supporting creative expression, we help build a society that is both humane and dynamic.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                  <p className="font-medium">
                    Our giving is guided by clarity of values, commitment to impact, and a deep respect for the long arc 
                    of change. Through thoughtful grantmaking and collaborative leadership, we strive to help shape a 
                    future that is vibrant, inclusive, and built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;