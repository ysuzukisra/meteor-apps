/* global Router */
Router.myRoutes = new Meteor.Collection(null);

Router.myRoute = function(path, name, desc, order, opts) {
    console.log('myRoute: begin with ' + name);
    opts.name = name;
    opts.layoutTemplate = 'main';
    var act = opts.action;
    opts.action = function() {
      this.render('main.header', {
          to: 'header',
          data: function() {
              return Router.myMain;
          },
      });
      this.render('main.footer', {
          to: 'footer',
          data: function() {
              return Router.myMain;
          },
      });
      if (act) {
          console.log('begin act.call');
          act.call(this);
          console.log('end   act.call');
      } else {
          console.log('begin this.render');
          this.render();
          console.log('end   this.render');
      }
    };
    Router.myRoutes.upsert({
        name: name,
    }, {$set: {
        name: name,
        path: path,
        desc: desc,
        order: order,
        opts: opts,
    }}, {
        multi: false,
    });
    // Router.myRoutes.insert({
    //     name: name,
    //     path: path,
    //     desc: desc,
    //     order: order,
    //     opts: opts,
    // });
    console.log('myRoute: end with ' + name);
    return Router.route(path, opts);
};