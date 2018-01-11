#coding:utf-8
from splinter import Browser
import time, threading


b = Browser('chrome')

def visit(user,password):
    b.visit("https://kyfw.12306.cn/otn/login/init")
    b.fill("loginUserDTO.user_name",user)
    b.fill("userDTO.password",password)

    time.sleep(10)
    # 验证码
    #点击登录浏览器跳转到查询余票页面
    # 登录的作用就是把python 和当前打开的浏览器页面相关联


def search(date,fromCT,toCT):
    b.visit("https://kyfw.12306.cn/otn/leftTicket/init");
    b.cookies.add({"_jc_save_fromDate":date})
    b.cookies.add({"_jc_save_fromStation":fromCT})
    b.cookies.add({u'_jc_save_toStation':toCT})
    b.reload();

def book(a,b):
    b.find_by_text("查询").click()
    b.find_by_text("预订")[a].click()
    b.find_by_text("你的姓名")[b].click()

if __name__=='__main__':

    visit(user='c2011113212',password='q2624195581')

    search(date="2018-02-10",fromCT='%u5317%u4EAC%2CBJP',toCT='%u8944%u9633%2CXFN')

    # book(a=1,b=1)
