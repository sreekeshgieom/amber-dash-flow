import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const activities = [
  { 
    id: 1, 
    type: "policy", 
    message: "Data Privacy Policy was updated", 
    time: "2 hours ago",
    icon: FileText,
    color: "text-primary"
  },
  { 
    id: 2, 
    type: "compliance", 
    message: "Compliance audit completed successfully", 
    time: "5 hours ago",
    icon: CheckCircle2,
    color: "text-green-600"
  },
  { 
    id: 3, 
    type: "alert", 
    message: "Security protocol requires review", 
    time: "1 day ago",
    icon: AlertCircle,
    color: "text-amber-600"
  },
  { 
    id: 4, 
    type: "review", 
    message: "Access Control policy pending approval", 
    time: "2 days ago",
    icon: Clock,
    color: "text-muted-foreground"
  },
];

export function ActivityFeed() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
