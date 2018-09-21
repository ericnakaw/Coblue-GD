export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Administration',
      url: '',
      icon: 'fa fa-gears',
      children: [
        {
          name: 'Users',
          url: '/administration/users',
          icon: 'fa fa-users'
        }
      ]
    }
  ]
}
