#coding:utf-8
from splinter import Browser
import time, threading
def qq_mail_login(url=None, username=None, password=None):
    with Browser(driver_name="chrome") as browser:
        browser.visit(url)
        browser.find_by_id(u"userNameIpt").first.fill(username)
        browser.find_by_id(u"pwdInput").first.fill(password)
        browser.find_by_id("btnSubmit").first.click()

        for k, v in browser.cookies.all().items():
            print (k, ":", v)

        quit_browser(browser)
def quit_browser(browser=None):
    flag = input("Input q when you want to quit: ")
    if 'q' == str(flag):
        quit(browser)

if __name__=='__main__':
    url="http://email.163.com/"
    username="你的邮箱地址"
    password="你的邮箱密码"
    #t1 = threading.Thread(target=qq_mail_login,args=(url,username,password))
    #t1.start()
    #t1.join()
    qq_mail_login(url,username,password)
