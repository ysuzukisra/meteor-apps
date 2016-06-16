/* globals Router */
Router.myMain = {path: '/', name: 'main', desc: 'トップメニュー'};

Router.myRoute(Router.myMain.path, Router.myMain.name, Router.myMain.desc, 999999, {
  data: function() {
    return {
      routes: Router.myRoutes.find({
        active: {$not: false},
      },{
        sort: {order: 1},
      })};
  },
  action: function() {
    this.render('routes');
  },
});
