package main.com.ssh.shop.interceptor;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.opensymphony.xwork2.interceptor.MethodFilterInterceptor;
import main.com.ssh.shop.entity.User;

public class LoginInteceptor extends AbstractInterceptor {

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {

        System.out.println("进入拦截器");
        //得到拦截到的action的名称,看是否是login,当是login的时候,不用进行下面的检测了,直接执行下一个拦截器
        String actionName = invocation.getProxy().getActionName();
        if ("user_login".equals(actionName)) {
            System.out.println(actionName);
            return invocation.invoke();

        }
        //如果不是login.则判断是否已登录,及检测session中key为user的值是否存在,如果不存在,跳回到登录页面
        User user = (User) invocation.getInvocationContext().getSession().get("user");
        if (user == null) {
            System.out.println("未登录");
            return "login";
        }
        return invocation.invoke();
        //进行到这里.说明用户已登录,则跳转到下一个拦截器
    }

}
