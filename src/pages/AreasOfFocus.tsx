import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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
    color: "#1e40af"
  },
  {
    title: "Abortion/Women's Rights",
    percentage: 12.5,
    description: "Supporting reproductive freedom and women's leadership",
    color: "#7c3aed"
  },
  {
    title: "Arts/Culture",
    percentage: 12.5,
    description: "Creative expression and cultural understanding",
    color: "#dc2626"
  },
  {
    title: "Democracy",
    percentage: 12.5,
    description: "Protecting democratic institutions and civil liberties",
    color: "#059669"
  },
  {
    title: "Other Strategic Initiatives",
    percentage: 12.5,
    description: "Additional mission-aligned opportunities",
    color: "#d97706"
  }
];

const AreasOfFocus = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">Areas of Focus</h1>
            <p className="text-xl text-muted-foreground">
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
                    <div>
                      <div className="font-medium">{area.title}</div>
                      <div className="text-sm text-muted-foreground">{area.percentage}%</div>
                    </div>
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
                <CardTitle className="font-display text-2xl flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: focusAreas[0].color }}
                  ></div>
                  Jewish Community
                </CardTitle>
                <CardDescription className="text-lg">
                  50% of all Annual Giving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.slice(1).map((area) => (
                <Card key={area.title} className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-display text-xl flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: area.color }}
                      ></div>
                      {area.title}
                    </CardTitle>
                    <CardDescription>
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AreasOfFocus;
