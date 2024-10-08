import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function AboutMe() {
  return (
    <div>
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Keira
                </CardTitle>
                <CardDescription>
                    I like to go to cafes
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Keira
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to cafe hop :D</div>
            </CardContent>
        </Card>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            this is the alert
          </AlertDescription>
        </Alert>

    </div>
  );
}