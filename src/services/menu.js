export default async function getMenuData() {
  return [
        {
          title: 'Home',
          key: 'dashboardAnalytics',
          url: '/dashboard/analytics',
        },
        {
          title: 'Dashboard',
          key: 'dashboardStatistics',
          url: '/dashboard/statistics',
        },
        {
          title: 'Download',
          key: 'dashboardEcommerce',
          url: '/dashboard/ecommerce',
        },
        {
          title: 'blog',
          key: 'dashboardCrypto',
          url: '/dashboard/crypto',
        },
        {
          title: 'ติดต่อสอบถาม',
          key: 'dashboardJira',
          url: '/dashboard/jira',
        },
        {
          title: 'Contact',
          key: 'dashboardHelpdesk',
          url: '/dashboard/helpdesk',
        },
  ]
}
