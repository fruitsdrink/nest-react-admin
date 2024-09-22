import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { NraInput } from "@repo/ui/nra/input";
import { Icon } from "@iconify-icon/react";

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "登录账号不能为空" })
    .max(50, { message: "登录账号长度不能超过50" }),
  password: z
    .string()
    .min(6, { message: "密码长度不能小于6" })
    .max(50, { message: "密码长度不能超过50" })
});

type FormType = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log({ data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>登录账号</FormLabel>
                <FormControl>
                  <NraInput
                    placeholder="请输入登录帐号"
                    {...field}
                    formControl={form}
                    startContent={
                      <Icon
                        icon="carbon:user-filled"
                        className="text-gray-500"
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>登录密码</FormLabel>
                <FormControl>
                  <NraInput
                    type="password"
                    placeholder="请输入登录密码"
                    {...field}
                    formControl={form}
                    startContent={
                      <Icon icon={"ri:lock-2-fill"} className="text-gray-500" />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          系统登录
        </Button>
      </form>
    </Form>
  );
};
