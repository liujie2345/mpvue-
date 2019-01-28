// 工具函数库

import config from './config.js'

export function get (url, data) {
  return request(url, 'GET', data)
}

export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method: method,
      url: config.host + url,
      success (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModel('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export function showSuccess (text) { 
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

export function showModel (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
