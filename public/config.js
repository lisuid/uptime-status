window.Config = {

  // 显示标题
  SiteName: 'Public Status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm795058837-59cb63773854158a8b6c4cbc', #理随的博客
    'm795066705-ffcaaabe506c2701d8dd5d5e', #twikoo评论
    'm795066726-af41fdca2819d3264640665c', #青桔图床
    'm795074511-af847201440044319c6ea550', #极客蜂巢
    
  ],

  // 日志天数
  CountDays: 65,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://status.org.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    },
    {
      text: '理随Blog',
      url: 'https://lisui.top/'
    },
  ],
};
