'use strict'
const controller_post = require('../../Controlllers/POST/controller_post')
module.exports = [ 
    {
        method: 'POST',
        path: '/wordpay/signin',
        config: {
            auth: false
        }, handler: controller_post.handleControllerWordpaySignin
    },{
        method: 'POST',
        path: '/wordpay/register',
        config: {
            auth: false
        }, handler: controller_post.handleControllerWordpayRegister
    },
    {
        method: 'POST',
        path: '/account',
        config: {
            auth: false
        }, handler: controller_post.handleAccount
    },
    {
        method: 'POST',
        path: '/detail',
        config: {
            auth: false
        }, handler: controller_post.handleDetail
    },
    {
        method: 'POST',
        path: '/jurnal_umum',
        config: {
            auth: false
        }, handler: controller_post.handleJurnalUmum
    },
]