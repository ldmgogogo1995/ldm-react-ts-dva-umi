﻿export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       // component: './user/login',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
  },
  {
    name: 'authority-center',
    icon: 'table',
    path: '/authority',
    // component:'./AuthorityCenter/AuthManage',
    routes: [
      {
        name: 'auth-manage',
        icon: 'table',
        path: '/authority/manage',
        component: './AuthorityCenter/RoleManage',
      }
    ]
  },
  {
    name: 'demo',
    icon: 'table',
    path: '/demo',
    component: './Demo',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  // {
  //   component: './404',
  // },
];
