package main.com.ssh.shop.service.impl;

import main.com.ssh.shop.entity.Orders;
import main.com.ssh.shop.service.OrdersService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("ordersService")
public class OrdersServiceImpl extends BaseServiceImpl<Orders> implements OrdersService {
    @Override
    public List<Orders> queryToOrders(int page, int size) {
        return ordersDao.queryToOrders(page, size);
    }

    @Override
    public Long getCount() {
        return ordersDao.getCount();
    }

    @Override
    public Long getCount(int id) {
        return ordersDao.getCount(id);
    }

    @Override
    public void updateOrders(int id, int num, Double price, Double money, Date date) {
        ordersDao.updateOrders(id, num, price, money, date);
    }

    @Override
    public Orders getOrdersByid(int id) {
        return ordersDao.getOrdersByid(id);
    }

    @Override
    public List<Orders> searchbyid(int id, int page, int size) {
        return ordersDao.searchbyid(id, page, size);
    }
}
