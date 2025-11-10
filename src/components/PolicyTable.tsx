import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const policies = [
  { id: "POL-001", name: "Data Privacy Policy", status: "Active", lastReview: "2024-01-15", risk: "Low" },
  { id: "POL-002", name: "Security Protocols", status: "Active", lastReview: "2024-02-20", risk: "Medium" },
  { id: "POL-003", name: "Access Control", status: "Review", lastReview: "2023-11-10", risk: "High" },
  { id: "POL-004", name: "Incident Response", status: "Active", lastReview: "2024-03-05", risk: "Low" },
  { id: "POL-005", name: "Backup Procedures", status: "Draft", lastReview: "2024-03-22", risk: "Medium" },
];

export function PolicyTable() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Policies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Policy ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Review</TableHead>
              <TableHead>Risk Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policy) => (
              <TableRow key={policy.id} className="hover:bg-muted/50 cursor-pointer">
                <TableCell className="font-medium">{policy.id}</TableCell>
                <TableCell>{policy.name}</TableCell>
                <TableCell>
                  <Badge variant={
                    policy.status === "Active" ? "default" : 
                    policy.status === "Review" ? "secondary" : 
                    "outline"
                  }>
                    {policy.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{policy.lastReview}</TableCell>
                <TableCell>
                  <Badge variant={
                    policy.risk === "Low" ? "outline" : 
                    policy.risk === "Medium" ? "secondary" : 
                    "destructive"
                  }>
                    {policy.risk}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
