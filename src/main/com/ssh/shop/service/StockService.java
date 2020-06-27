package main.com.ssh.shop.service;


import main.com.ssh.shop.entity.Stock;

import java.util.Date;
import java.util.List;

public interface StockService extends BaseService<Stock> {

    public List<Stock> queryToStock(int page, int size);//实现分页

    public List<Stock> queryToStock();//实现分页
    public Long getCount();

    public Long getCount(int id);

    //更新Stock部分属性
    public void updateStock(int id, int num, Double sellprice, Double money, Date date);

    //通过id获取Stock对象
    public Stock getStockByid(int id);

    public List<Stock> searchbyid(int id, int page, int size);


}
