import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@repo/ui/components/ui/card";
import { LoginForm } from "./components";
import { Header } from "./components/header";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Card className="shadow-sm xl:w-1/4 md:w-1/2">
        <CardHeader>
          <Header title="Nest-React-Admin" label="系统登录" />
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Login;
