import { Layout } from '@/components/Layout';

const Mission = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">Mission Statement</h1>
            <p className="text-xl text-muted-foreground">
              Our commitment to building a more just, democratic, and pluralistic society
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-accent-subtle p-8 rounded-lg mb-8">
              <h2 className="font-display text-3xl font-medium mb-6 text-center">The Chaiken Foundation</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                The Chaiken Foundation is committed to building a more just, democratic, and pluralistic society. 
                Rooted in the legacy of Donald and Carole Chaiken (Donald and Carole Chaiken Foundation)—visionary 
                builders, principled leaders, and determined problem-solvers—the Foundation invests in bold ideas 
                and enduring partnerships that strengthen communities for generations to come.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In 26 years of dedicated philanthropy, Donald and Carole Chaiken directed over 4,200 grants—building 
                a legacy defined by principled giving, public responsibility, and a deep commitment to human dignity. 
                Today, the Chaiken Foundation carries that legacy forward with the same commitment to long-term, 
                systemic solutions at the intersection of democracy, women's rights, and the flourishing of Jewish 
                communities in the U.S., Israel, and around the world.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We believe in the enduring power of Jewish values to inform a more ethical, equitable society and 
                invest in organizations that foster connection, continuity, and a shared sense of purpose across 
                generations and borders.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Central to our mission is the advancement of women's rights and leadership. We believe that uplifting 
                women as changemakers is essential to building strong, inclusive, and resilient societies. When women 
                lead, communities thrive.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We champion efforts that defend democratic institutions, protect civil liberties, and expand access 
                to opportunity, ensuring that all people can participate fully in civic and cultural life. We also 
                believe in the power of the arts to inspire empathy, foster deeper dialogue, and unite diverse 
                communities. By supporting creative expression, we help build a society that is both humane and dynamic.
              </p>

              <p className="text-lg leading-relaxed">
                Our giving is guided by clarity of values, commitment to impact, and a deep respect for the long arc 
                of change. Through thoughtful grantmaking and collaborative leadership, we strive to help shape a 
                future that is vibrant, inclusive, and built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;