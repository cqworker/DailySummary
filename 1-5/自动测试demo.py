#coding:utf-8
from splinter import Browser
import time, threading


baner = """
    ##################################
    脚本介绍:  自动实现www.mqc.com的访问
    ##################################
    """

b = Browser('chrome')

def pz(ip,xToken,tenement):
    #访问的地址不能为纯ip
    b.visit("www.mqc.com:3000")
    b.find_by_id("1").click()

    # time.sleep(10)
    #获取iframe中的元素
    with b.get_iframe('myIframe') as iframe:
        iframe.fill("xToken",xToken)
        iframe.fill("ip", ip)
        iframe.fill("tenement", tenement)
        iframe.fill("tenement", tenement)
        iframe.find_by_tag("input")[3].click()
    str = raw_input("输入q or z退出!")
    layout(str)

def layout(str):
    if str == 'q'or str =='z':
        b.quit()

if __name__=='__main__':
    # print baner

    pz(ip='10.100.250.133',xToken='AQsCAH4ZylkAAEFRQUNkNVZWa2M3UkNBQUFQU0xlNHhRYzVCUWVDQUFBQVFBQ2Q1VlZrYzdSQ0FBQUFNWE80eFFjNUJRZENBQUHpdByJItptku7_xrJZvPRPvw8ETwX8c74DTTHaq5ClR2ouJbEKqLDInLz-P_KmENSsJMTtcrOe0pjlIlTItpid',tenement='GuoXinLianCheng')



