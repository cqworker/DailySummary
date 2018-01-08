#coding:utf-8
from splinter import Browser
import time, threading


baner = """
    ##################################
        脚本介绍:
    ##################################
    """

b = Browser('chrome')

def visit(user,password):
    b.visit("https://kyfw.12306.cn/otn/login/init")
    b.fill("loginUserDTO.user_name",user)
    b.fill("userDTO.password",password)

    time.sleep(10)
    # 验证码
    b.find_by_text("登录").click()


def search(date,fromCT,toCT):
    b.cookies.add({"_jc_save_fromDate":date})
    b.cookies.add({"_jc_save_fromStation":fromCT})
    b.cookies.add({u'_jc_save_toStation':toCT})
    time.sleep(10)

def book(a,b):
    b.find_by_text("查询").click()
    b.find_by_text("预订")[a].click()
    b.find_by_text("你的姓名")[b].click()

if __name__=='__main__':
    print baner

    visit(user='c2011113212',password='q2624195581')

    search(date="2018-02-10",fromCT='%u5317%u4EAC%2CBJP',toCT='%u8944%u9633%2CXFN')

    book(a=1,b=1)
