import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

const page = () => {
  return (
    <div className="h-[70vh] container px-5  mx-auto flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Thanks for signing up!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>A link has been sent to your email to verify your account</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
