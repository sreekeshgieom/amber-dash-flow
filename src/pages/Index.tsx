import { FileText, Shield, TrendingUp, Users } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ComplianceChart } from "@/components/ComplianceChart";
import { PolicyTable } from "@/components/PolicyTable";
import { ActivityFeed } from "@/components/ActivityFeed";

const Index = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Monitor your compliance and policy management metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Policies"
          value={142}
          change="+12% from last month"
          icon={FileText}
          trend="up"
        />
        <StatCard
          title="Compliance Score"
          value="95%"
          change="+3% from last month"
          icon={Shield}
          trend="up"
        />
        <StatCard
          title="Active Users"
          value={1284}
          change="+8% from last month"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Risk Items"
          value={8}
          change="-4 from last month"
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ComplianceChart />
        <ActivityFeed />
      </div>

      <PolicyTable />
    </div>
  );
};

export default Index;
